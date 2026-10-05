/**
 * app.js
 * "The Village That Remembers" - Core Interactive Story Engine
 * 
 * Orchestrates:
 * 1. Opening: Bottle in overgrown grass + cork/paper emergence animation
 * 2. Old Note: Physical yellowed parchment with handwritten title & warnings
 * 3. Village Entrance & Walking System: SCENE 01 -> SCENE 04
 * 4. Day / Night transformation system (persistent, global & reusable)
 * 5. Multi-step hotspot story dialogues & eerie night interactions
 */

class KaldharaApp {
  constructor() {
    this.inOpeningBottle = true;
    this.currentSceneIndex = 0; // Scenes 01 to 08
    this.isNight = false;
    this.isNightReactive = false;
    this.isTransitioning = false;
    this.touchStartX = 0;
    this.touchEndX = 0;
    this.discoveredHotspots = new Set();

    // Active multi-step dialogue state
    this.activeDialogue = null;
    this.dialogueStep = 0;

    // DOM Elements
    this.viewport = document.getElementById('viewport-container');
    this.sceneContainer = document.getElementById('scene-stage');
    this.dayNightToggle = document.getElementById('day-night-toggle');
    this.dayOption = document.getElementById('opt-day');
    this.nightOption = document.getElementById('opt-night');
    this.audioToggleBtn = document.getElementById('audio-toggle-btn');
    this.sceneTitle = document.getElementById('hud-scene-title');
    this.sceneLocation = document.getElementById('hud-scene-location');
    this.sceneProgress = document.getElementById('hud-scene-progress');
    this.btnPrev = document.getElementById('nav-btn-prev');
    this.btnNext = document.getElementById('nav-btn-next');
    this.hotspotCard = document.getElementById('story-dialogue-card');
    this.hotspotText = document.getElementById('dialogue-text');
    this.hotspotTitle = document.getElementById('dialogue-title');
    this.dismissHint = this.hotspotCard.querySelector('.dialogue-dismiss-hint');
    this.stepDotsContainer = document.getElementById('dialogue-steps-dots');
    this.dialogueActionSlot = document.getElementById('dialogue-action-slot');
    this.cinematicOverlay = document.getElementById('cinematic-overlay');
    this.horrorFlashOverlay = document.getElementById('horror-flash-overlay');
    this.horrorFlashContent = document.getElementById('horror-flash-content');
    this.noteModal = document.getElementById('parchment-modal');
    this.noteContent = document.getElementById('parchment-content');
    this.redFlashOverlay = document.getElementById('red-flash-overlay');
    this.quickBlackOverlay = document.getElementById('quick-black-overlay');
    this.fireRainOverlay = document.getElementById('fire-rain-overlay');
    this.fireRainCanvas = document.getElementById('fire-rain-canvas');

    // Final Story Arc state & DOM Elements
    this.forbiddenCount = 0;
    this.isSecondPlaythrough = false;
    try {
      this.isSecondPlaythrough = (localStorage.getItem('kaldhara_loop') === 'true');
    } catch (e) {}
    this.roadFigureStep = 0;
    this.waitingForLightsOff = false;
    this.streetFigureVanished = false;
    this.houseAtEndDoorOpen = false;

    this.roadBlackoutOverlay = document.getElementById('road-blackout-overlay');
    this.roadLine1 = document.getElementById('road-blackout-line-1');
    this.roadLine2 = document.getElementById('road-blackout-line-2');
    this.roadLine3 = document.getElementById('road-blackout-line-3');
    this.roadLine4 = document.getElementById('road-blackout-line-4');
    this.endingOverlay = document.getElementById('ending-cinematic-overlay');
    this.endingTitle = document.getElementById('ending-title');
    this.endingSub1 = document.getElementById('ending-subtitle-1');
    this.endingSub2 = document.getElementById('ending-subtitle-2');
    this.endingVerdict = document.getElementById('ending-verdict-line');
    this.endingVerdictSub = document.getElementById('ending-verdict-sub');
    this.btnEnterAgain = document.getElementById('btn-enter-again');

    // Horror interactions persistent state
    this.templeDiyaExtinguished = false;
    this.redDoorKnocked = false;
    this.redHouseWindowLightOff = false;
    this.wellConsequenceActive = false;
    this.banyanWomanSeen = false;
    this.banyanConsequenceActive = false;
    this.roadLoopStep = 0;
    this.dayNightSwitchCount = 0;
    this.isCinematicBusy = false;

    // Unpredictable new horror interactions persistent state
    this.shrineFlameExtinguished = false;
    this.schoolBlackboardErased = false;
    this.abandonedWindowDarkened = false;
    this.toyVanished = false;
    this.forestNightEventTriggered = false;
    this.forestNightTimer = null;
    this.fireRainActive = false;
    this.fireRainTriggeredRecently = false;

    this.init();
  }

  init() {
    // Render opening bottle scene
    this.renderOpeningBottle();

    // Bind event listeners
    this.bindEvents();

    // Default theme state
    this.updateTheme();
  }

  bindEvents() {
    // Day / Night Toggle
    this.dayNightToggle.addEventListener('click', () => {
      soundEngine.ensureContext();
      this.toggleDayNight();
    });

    // Audio Toggle
    this.audioToggleBtn.addEventListener('click', () => {
      const isMuted = soundEngine.toggleMute();
      this.audioToggleBtn.textContent = isMuted ? '🔇' : '🔊';
      this.audioToggleBtn.setAttribute('aria-label', isMuted ? 'Sound Muted' : 'Sound On');
    });

    // Enter Again (Loop Ending)
    if (this.btnEnterAgain) {
      this.btnEnterAgain.addEventListener('click', () => {
        soundEngine.ensureContext();
        soundEngine.playFootstep();
        this.restartExperienceLoop();
      });
    }

    // Walking Navigation Buttons
    this.btnPrev.addEventListener('click', () => {
      if (this.inOpeningBottle) return;
      soundEngine.ensureContext();
      soundEngine.playFootstep();
      this.prevScene();
    });

    this.btnNext.addEventListener('click', () => {
      if (this.inOpeningBottle) return;
      soundEngine.ensureContext();
      soundEngine.playFootstep();
      this.nextScene();
    });

    // Touch Swipe Gestures
    this.viewport.addEventListener('touchstart', (e) => {
      this.touchStartX = e.changedTouches[0].screenX;
    }, { passive: true });

    this.viewport.addEventListener('touchend', (e) => {
      this.touchEndX = e.changedTouches[0].screenX;
      this.handleSwipe();
    }, { passive: true });

    // Keyboard navigation
    window.addEventListener('keydown', (e) => {
      if (this.noteModal.classList.contains('active')) return;
      if (e.key === 'ArrowRight' || e.key === 'KeyD') {
        if (!this.inOpeningBottle) this.nextScene();
      } else if (e.key === 'ArrowLeft' || e.key === 'KeyA') {
        if (!this.inOpeningBottle) this.prevScene();
      } else if (e.key === 'KeyT' || e.key === 'Space') {
        if (!this.inOpeningBottle) this.toggleDayNight();
      }
    });

    // Dialogue card tap advances to next line or closes
    this.hotspotCard.addEventListener('click', () => {
      this.advanceDialogue();
    });

    // Unlock Web Audio context on user first gesture
    document.addEventListener('click', () => {
      soundEngine.ensureContext();
    }, { once: true });
  }

  handleSwipe() {
    if (this.inOpeningBottle || this.isTransitioning) return;
    const swipeThreshold = 50;
    const diff = this.touchEndX - this.touchStartX;
    if (Math.abs(diff) > swipeThreshold) {
      if (diff < 0) {
        this.nextScene();
      } else {
        this.prevScene();
      }
    }
  }

  // Day / Night Toggle Logic
  toggleDayNight() {
    if (this.waitingForLightsOff) {
      this.handleLightsOffToggle();
      return;
    }
    if (this.isCinematicBusy) return;

    // Locked night scenes cannot switch to day
    const currentScene = STORY_DATA.scenes[this.currentSceneIndex];
    if (currentScene && (currentScene.id === 'road-figure' || currentScene.id === 'ending')) {
      return;
    }

    if (this.isNight) {
      // Switching from NIGHT -> DAY
      this.dayNightSwitchCount++;
      const isGlitch = (this.dayNightSwitchCount % 3 === 0);

      if (isGlitch) {
        // UI toggle updates to Day immediately
        this.isNight = false;
        this.dayOption.classList.add('active');
        this.nightOption.classList.remove('active');

        // Keep scene dark for ~1 second before daylight washes back in
        this.sceneContainer.classList.add('daylight-lag-dark');

        setTimeout(() => {
          this.sceneContainer.classList.remove('daylight-lag-dark');
          this.updateTheme();
          soundEngine.setAtmosphere('day');
          if (this.activeHotspot) {
            this.triggerHotspot(this.activeHotspot, true);
          }
        }, 1000);
        return;
      } else {
        this.isNight = false;
        this.updateTheme();
        soundEngine.setAtmosphere('day');
      }
    } else {
      // Switching from DAY -> NIGHT
      this.isNight = true;
      this.updateTheme();
      soundEngine.setAtmosphere('night');

      // If switching to night on Banyan scene, trigger fog sweep
      if (STORY_DATA.scenes[this.currentSceneIndex]?.id === 'banyan-tree') {
        this.setupBanyanNightEntrance();
      }
    }

    // If dialogue card is currently open, re-render for current time of day
    if (this.activeHotspot) {
      this.triggerHotspot(this.activeHotspot, true);
    }
  }

  updateTheme() {
    if (this.isNight) {
      this.viewport.classList.add('theme-night');
      this.viewport.classList.remove('theme-day');
      this.nightOption.classList.add('active');
      this.dayOption.classList.remove('active');
    } else {
      this.viewport.classList.add('theme-day');
      this.viewport.classList.remove('theme-night');
      this.dayOption.classList.add('active');
      this.nightOption.classList.remove('active');
    }

    if (this.isNightReactive) {
      this.dayNightToggle.classList.add('reactive-night-pill');
      this.nightOption.classList.add('reactive-night');
    }
  }

  // --- 1. OPENING: The Bottle in Grass ---
  renderOpeningBottle() {
    this.inOpeningBottle = true;
    this.hideHotspotCard();

    // Day/Night toggle is hidden in opening
    this.dayNightToggle.style.opacity = '0';
    this.dayNightToggle.style.pointerEvents = 'none';

    // Update HUD for opening
    this.sceneTitle.textContent = "The Glass Bottle";
    this.sceneLocation.textContent = "EDGE OF THE TALL GRASS";
    this.sceneProgress.textContent = "OPENING";
    this.btnPrev.disabled = true;
    this.btnNext.style.display = 'none';

    // Render Bottle Scene
    this.sceneContainer.innerHTML = `
      <div class="scene-artwork-wrapper">
        ${SceneIllustrations.renderBottleScene(this.isSecondPlaythrough)}
      </div>
    `;

    // Bind Bottle Tap interaction
    const bottleGroup = this.sceneContainer.querySelector('#interactive-bottle-group');
    const tapBeacon = this.sceneContainer.querySelector('#tap-bottle-beacon');
    const stage = this.sceneContainer;

    let opened = false;
    const onBottleTap = (e) => {
      if (opened) return;
      opened = true;
      e.stopPropagation();

      soundEngine.ensureContext();
      soundEngine.playBottleClink();

      // Trigger tactile opening animation
      this.sceneContainer.classList.add('bottle-opening-anim');
      const cork = this.sceneContainer.querySelector('#bottle-cork-stopper');
      const scroll = this.sceneContainer.querySelector('#bottle-scroll-inside');
      if (cork) cork.classList.add('cork-pop');
      if (scroll) scroll.classList.add('scroll-emerge');

      // Rustle paper after cork pops and unroll note
      setTimeout(() => {
        soundEngine.playPaperRustle();
        this.openTactileOldNote();
      }, 550);
    };

    if (bottleGroup) bottleGroup.addEventListener('click', onBottleTap);
    if (tapBeacon) tapBeacon.addEventListener('click', onBottleTap);
    stage.addEventListener('click', onBottleTap, { once: true });
  }

  // --- 2. THE OLD NOTE: Tactile Physical Yellowed Paper ---
  openTactileOldNote() {
    const data = STORY_DATA.openingNote;
    const paragraphs = [...data.paragraphs];
    if (this.isSecondPlaythrough) {
      paragraphs[3] = "Some are still returning.";
    }

    this.noteContent.innerHTML = `
      <div class="tactile-parchment-sheet">
        <!-- Parchment Header with Handwritten Title -->
        <h2 class="parchment-title-handwritten">${data.heading}</h2>
        <div class="parchment-crease-line"></div>

        <!-- Serif Story Paragraphs -->
        <div class="parchment-narrative-body">
          ${paragraphs.map(p => `<p>${p}</p>`).join('')}
        </div>

        <!-- Warning Inscription Section -->
        <div class="parchment-warning-box">
          <h3 class="parchment-warning-title">${data.warningHeading}</h3>
          <ul class="parchment-warning-rules">
            ${data.warningRules.map(r => `<li>${r}</li>`).join('')}
          </ul>
        </div>

        <!-- Antique Story-Themed Seal Button -->
        <button id="enter-village-btn" class="antique-story-btn">
          ${data.buttonText}
        </button>
      </div>
    `;

    this.noteModal.classList.add('active');

    // Button transitions into Village Entrance (SCENE 01)
    document.getElementById('enter-village-btn').addEventListener('click', () => {
      soundEngine.playFootstep();
      this.closeNoteModal();
      this.enterVillage();
    });
  }

  closeNoteModal() {
    this.noteModal.classList.remove('active');
  }

  // Transition from opening note into Kaldhara Village (SCENE 01)
  enterVillage() {
    this.inOpeningBottle = false;
    this.isNight = false; // Default = DAY
    this.updateTheme();
    soundEngine.setAtmosphere('day');

    // Reveal Day/Night Toggle in HUD
    this.dayNightToggle.style.opacity = '1';
    this.dayNightToggle.style.pointerEvents = 'auto';
    this.btnNext.style.display = 'flex';

    // Render Scene 01 (Entrance)
    this.renderScene(0, 'next');
  }

  // --- 3. WALKING SYSTEM: Scenes 01 to 12 ---
  nextScene() {
    if (this.isTransitioning || this.inOpeningBottle || this.isCinematicBusy) return;

    if (this.currentSceneIndex < STORY_DATA.scenes.length - 1) {
      soundEngine.playFootstep();
      this.renderScene(this.currentSceneIndex + 1, 'next');
    }
  }

  // Horror 5: Handle Road repetition sequence at night
  handleRoadNightMovement() {
    if (this.roadLoopStep === 0) {
      this.roadLoopStep = 1;
      soundEngine.playFootstep();
      this.renderScene(6, 'next');
    } else if (this.roadLoopStep === 1) {
      this.roadLoopStep = 2;
      soundEngine.playFootstep();
      this.renderScene(6, 'next');
      setTimeout(() => {
        this.showHorrorDialogueCard("The Countryside Road", "You've seen this tree before.", "Tap to continue");
      }, 400);
    } else if (this.roadLoopStep === 2) {
      this.roadLoopStep = 3;
      soundEngine.playFootstep();
      this.renderScene(6, 'next');
      setTimeout(() => {
        this.showHorrorDialogueCard("The Countryside Road", "You're walking in a circle.", "Tap to continue");
      }, 400);
    } else {
      // Loop broken, return control to user
      soundEngine.playFootstep();
      this.renderScene(7, 'next');
    }
  }

  showHorrorDialogueCard(title, text, dismiss = "Tap to continue") {
    this.hotspotTitle.textContent = title;
    this.hotspotText.textContent = text;
    this.dismissHint.textContent = dismiss;
    this.dialogueActionSlot.innerHTML = '';
    this.renderStepDots(0, 0);
    this.activeDialogue = [text];
    this.dialogueStep = 0;
    this.activeHotspot = { id: 'road-loop', label: title };
    this.hotspotCard.classList.add('visible');
  }

  prevScene() {
    if (this.isTransitioning || this.inOpeningBottle || this.isCinematicBusy) return;
    if (this.currentSceneIndex > 0) {
      soundEngine.playFootstep();
      this.renderScene(this.currentSceneIndex - 1, 'prev');
    }
  }

  renderScene(index, direction = 'next') {
    this.isTransitioning = true;
    this.hideHotspotCard();
    this.currentSceneIndex = index;
    const scene = STORY_DATA.scenes[index];

    // Transition animation classes
    const outgoingClass = direction === 'next' ? 'camera-push-out' : 'camera-pull-out';
    const incomingClass = direction === 'next' ? 'camera-push-in' : 'camera-pull-in';

    if (direction !== 'none') {
      this.sceneContainer.classList.add(outgoingClass);
    }

    const updateDOM = () => {
      // Inject SVG illustration from SceneIllustrations
      const svgHtml = SceneIllustrations.renderScene(scene.id);

      // Inject Hotspot Beacon Buttons
      let hotspotsHtml = '';
      if (scene.hotspots && scene.hotspots.length > 0) {
        hotspotsHtml = scene.hotspots.map(h => `
          <button class="hotspot-beacon" 
                  data-hotspot-id="${h.id}" 
                  style="left: ${h.x}%; top: ${h.y}%;" 
                  aria-label="${h.label}">
            <span class="beacon-pulse"></span>
            <span class="beacon-core"></span>
          </button>
        `).join('');
      }

      this.sceneContainer.innerHTML = `
        <div class="scene-artwork-wrapper">
          ${svgHtml}
        </div>
        <div class="hotspots-layer">
          ${hotspotsHtml}
        </div>
      `;

      // Update HUD information
      this.sceneTitle.textContent = scene.title;
      this.sceneLocation.textContent = scene.location;
      this.sceneProgress.textContent = scene.sceneCode;

      // Update Navigation Button States
      this.btnPrev.disabled = (index === 0);
      this.btnNext.disabled = (index === STORY_DATA.scenes.length - 1);

      // Check environmental persistences for Horror Interactions
      if (scene.id === 'well' && this.wellConsequenceActive) {
        this.sceneContainer.classList.add('well-consequence');
        const blood = this.sceneContainer.querySelector('#well-blood-mark');
        if (blood) blood.style.opacity = '0.85';
        const mist = this.sceneContainer.querySelector('#well-lingering-mist');
        if (mist) mist.style.opacity = '0.55';
      }

      if (scene.id === 'temple' && this.templeDiyaExtinguished) {
        const diya = this.sceneContainer.querySelector('#temple-step-diya');
        if (diya) diya.classList.add('diya-extinguished');
      }

      if (scene.id === 'red-house') {
        if (this.redDoorKnocked) {
          const door = this.sceneContainer.querySelector('#hotspot-red-door');
          if (door) door.classList.add('door-ajar');
        }
        if (this.redHouseWindowLightOff) {
          const win = this.sceneContainer.querySelector('#hotspot-red-house-window');
          if (win) win.classList.add('window-light-off');
        }
      }

      if (scene.id === 'banyan-tree') {
        this.setupBanyanScene();
        if (this.banyanConsequenceActive) {
          this.sceneContainer.classList.add('banyan-consequence');
          const lingeringFog = this.sceneContainer.querySelector('#banyan-lingering-fog');
          if (lingeringFog) lingeringFog.style.opacity = '0.65';
        }
      }

      if (scene.id === 'abandoned-house') {
        if (this.abandonedWindowDarkened) {
          const win = this.sceneContainer.querySelector('#hotspot-house-window');
          if (win) win.classList.add('window-darkened');
        }
        if (this.toyVanished) {
          const toy = this.sceneContainer.querySelector('#hotspot-children-toy');
          if (toy) toy.style.display = 'none';
          const beacon = this.sceneContainer.querySelector('.hotspot-beacon[data-hotspot-id="children-toy"]');
          if (beacon) beacon.style.display = 'none';
        }
      }

      if (scene.id === 'old-school') {
        if (this.schoolBlackboardErased) {
          const orig = this.sceneContainer.querySelector('#blackboard-original-text');
          if (orig) orig.style.display = 'none';
          const horror = this.sceneContainer.querySelector('#blackboard-horror-writing');
          if (horror) horror.style.display = 'none';
        }
      }

      if (scene.id === 'small-shrine') {
        if (this.shrineFlameExtinguished) {
          const flame = this.sceneContainer.querySelector('#shrine-diya-flame');
          if (flame) flame.style.display = 'none';
        }
      }

      if (scene.id === 'forest-edge' && this.isNight) {
        this.setupForestNightEyesEvent();
      }

      if (scene.id === 'forgotten-street') {
        if (this.streetFigureVanished) {
          const fig = this.sceneContainer.querySelector('#hotspot-street-figure');
          if (fig) fig.style.display = 'none';
        }
      }

      if (scene.id === 'house-at-end') {
        if (this.houseAtEndDoorOpen) {
          const doorGroup = this.sceneContainer.querySelector('#house-end-door-group');
          if (doorGroup) doorGroup.classList.add('door-creak-open-anim');
        }
      }

      if (scene.id === 'road-figure') {
        // Scene 17 is locked to NIGHT
        this.isNight = true;
        this.updateTheme();
        if (this.roadFigureStep === 0) {
          this.btnPrev.disabled = true;
        } else if (this.roadFigureStep === 1) {
          const mover = this.sceneContainer.querySelector('#road-figure-mover');
          if (mover) mover.classList.add('step-1');
        } else if (this.roadFigureStep >= 2) {
          const mover = this.sceneContainer.querySelector('#road-figure-mover');
          if (mover) mover.style.display = 'none';
        }
      }

      if (scene.id === 'ending') {
        // Scene 19 is the final establishing panorama
        this.isNight = true;
        this.updateTheme();
        this.btnPrev.disabled = true;
        this.btnNext.style.display = 'none';
        this.dayNightToggle.style.opacity = '0';
        this.dayNightToggle.style.pointerEvents = 'none';
        this.triggerEndingSequence();
      }

      // Rare event chance: Fire Rain at night in Village Square or Small Shrine
      if (this.isNight && (scene.id === 'village-square' || scene.id === 'small-shrine')) {
        if (Math.random() < 0.25 && !this.fireRainTriggeredRecently && !this.isCinematicBusy) {
          this.fireRainTriggeredRecently = true;
          setTimeout(() => {
            if (this.isNight && !this.isCinematicBusy && (STORY_DATA.scenes[this.currentSceneIndex]?.id === 'village-square' || STORY_DATA.scenes[this.currentSceneIndex]?.id === 'small-shrine')) {
              this.triggerFireRain();
            }
          }, 4500);
        }
      }

      // Bind Hotspot Event Listeners
      this.bindSceneHotspots(scene);

      // Clean transition classes
      this.sceneContainer.className = 'scene-stage-container';
      if (direction !== 'none') {
        this.sceneContainer.classList.add(incomingClass);
      }

      setTimeout(() => {
        this.sceneContainer.className = 'scene-stage-container';
        this.isTransitioning = false;
      }, 350);
    };

    if (direction === 'none') {
      updateDOM();
      this.isTransitioning = false;
    } else {
      setTimeout(updateDOM, 220);
    }
  }

  // Horror 4: Banyan Tree scene setup & fog sweep reveal
  setupBanyanScene() {
    const woman = this.sceneContainer.querySelector('#hotspot-banyan-figure');
    const beacon = this.sceneContainer.querySelector('.hotspot-beacon[data-hotspot-id="banyan-figure"]');

    if (this.banyanWomanSeen) {
      if (woman) woman.style.display = 'none';
      if (beacon) beacon.style.display = 'none';
      return;
    }

    if (this.isNight) {
      this.setupBanyanNightEntrance();
    }
  }

  setupBanyanNightEntrance() {
    if (this.banyanWomanSeen) return;
    const woman = this.sceneContainer.querySelector('#hotspot-banyan-figure');
    const beacon = this.sceneContainer.querySelector('.hotspot-beacon[data-hotspot-id="banyan-figure"]');
    const fog = this.sceneContainer.querySelector('#banyan-fog-sweep-layer');

    if (woman) {
      woman.style.opacity = '0';
      woman.style.pointerEvents = 'none';
    }
    if (beacon) {
      beacon.style.opacity = '0';
      beacon.style.pointerEvents = 'none';
    }

    if (fog) {
      fog.style.opacity = '1';
      fog.classList.remove('fog-sweep-anim');
      void fog.offsetWidth;
      fog.classList.add('fog-sweep-anim');
    }

    setTimeout(() => {
      if (woman && !this.banyanWomanSeen) {
        woman.style.transition = 'opacity 1.8s ease';
        woman.style.opacity = '1';
        woman.style.pointerEvents = 'auto';
      }
      if (beacon && !this.banyanWomanSeen) {
        beacon.style.transition = 'opacity 1.8s ease';
        beacon.style.opacity = '1';
        beacon.style.pointerEvents = 'auto';
      }
    }, 1400);

    setTimeout(() => {
      if (fog) {
        fog.style.opacity = '0';
        fog.classList.remove('fog-sweep-anim');
      }
    }, 3200);
  }

  // --- 4. INTERACTIVE HOTSPOTS & MULTI-STEP DIALOGUES ---
  bindSceneHotspots(scene) {
    if (!scene.hotspots) return;

    // Beacon Button Taps
    const beaconButtons = this.sceneContainer.querySelectorAll('.hotspot-beacon');
    beaconButtons.forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const id = btn.getAttribute('data-hotspot-id');
        const hotspot = scene.hotspots.find(h => h.id === id);
        if (hotspot) {
          this.triggerHotspot(hotspot);
        }
      });
    });

    // Also attach to SVG objects with matching ID: #hotspot-*
    scene.hotspots.forEach(hotspot => {
      const svgObj = this.sceneContainer.querySelector(`#hotspot-${hotspot.id}`);
      if (svgObj) {
        svgObj.style.cursor = 'pointer';
        svgObj.addEventListener('click', (e) => {
          e.stopPropagation();
          this.triggerHotspot(hotspot);
        });
      }
    });
  }

  triggerHotspot(hotspot, isTimeOfDayRefresh = false) {
    if (this.isCinematicBusy && !isTimeOfDayRefresh) return;
    this.activeHotspot = hotspot;
    this.discoveredHotspots.add(hotspot.id);

    // Special Horror 2: The Well - Look Inside
    if (hotspot.isWell && !isTimeOfDayRefresh) {
      this.handleWellInteraction(hotspot, isTimeOfDayRefresh);
      return;
    }

    // Special Horror 1: Red House Door Knock Sequence at Night
    if (hotspot.isRedDoor && this.isNight && !isTimeOfDayRefresh) {
      this.handleRedDoorNight();
      return;
    }

    // Special Horror 3: Temple Bell Ring at Night
    if (hotspot.isTempleBell && this.isNight && !isTimeOfDayRefresh) {
      this.handleTempleBellNight();
      return;
    }

    // Special Horror 4: Banyan Woman Silhouette at Night
    if (hotspot.isBanyanWoman && this.isNight && !isTimeOfDayRefresh) {
      this.handleBanyanWomanTap(hotspot);
      return;
    }

    // Special Second Note Box Interaction
    if (hotspot.isSecondNoteBox && !isTimeOfDayRefresh) {
      this.openSecondNoteModal();
      return;
    }

    // Special Horror: Village Square — Notice Board
    if (hotspot.isNoticeBoard && !isTimeOfDayRefresh) {
      this.handleNoticeBoardTap();
      return;
    }

    // Special Horror: Village Square — Old Cart
    if (hotspot.isSquareCart && !isTimeOfDayRefresh) {
      this.handleSquareCartTap();
      return;
    }

    // Special Horror: Abandoned House — Window
    if (hotspot.isHouseWindow && !isTimeOfDayRefresh) {
      this.handleHouseWindowTap();
      return;
    }

    // Special Horror: Abandoned House — Child's Toy
    if (hotspot.isChildrenToy && !isTimeOfDayRefresh) {
      this.handleChildrenToyTap();
      return;
    }

    // Special Horror: Old School — Blackboard
    if (hotspot.isSchoolBlackboard && !isTimeOfDayRefresh) {
      this.handleSchoolBlackboardTap();
      return;
    }

    // Special Horror: Old School — Swing at Night
    if (hotspot.isSchoolSwing && this.isNight && !isTimeOfDayRefresh) {
      this.handleSchoolSwingNightTap();
      return;
    }

    // Special Horror: Forest Edge — Warning Sign
    if (hotspot.isForestSign && !isTimeOfDayRefresh) {
      this.handleForestSignTap();
      return;
    }

    // Special Horror: Small Shrine — Oil Lamp
    if (hotspot.isShrineLamp && !isTimeOfDayRefresh) {
      this.handleShrineLampTap();
      return;
    }

    // Special Horror: Small Shrine — Flowers
    if (hotspot.isShrineFlowers && !isTimeOfDayRefresh) {
      this.handleShrineFlowersTap();
      return;
    }

    // Special Scene 14: Forgotten Street — Distant Figure
    if (hotspot.isStreetFigure && !isTimeOfDayRefresh) {
      this.handleStreetFigureTap();
      return;
    }

    // Special Scene 15: House at the End — Outside Bottle
    if (hotspot.isEndHouseBottle && !isTimeOfDayRefresh) {
      this.handleEndHouseBottleTap();
      return;
    }

    // Special Scene 15: House at the End — Door
    if (hotspot.isEndHouseDoor && !isTimeOfDayRefresh) {
      this.handleEndHouseDoorTap();
      return;
    }

    // Special Scene 16: The Documentation Room — Rolled Notes
    if (hotspot.isRoomNotes && !isTimeOfDayRefresh) {
      this.handleRoomNotesTap();
      return;
    }

    // Special Scene 16: The Documentation Room — Old Photograph
    if (hotspot.isRoomPhoto && !isTimeOfDayRefresh) {
      this.handleRoomPhotoTap();
      return;
    }

    // Special Scene 17: The Person on the Road — Silhouette
    if (hotspot.isRoadWalker && !isTimeOfDayRefresh) {
      this.handleRoadFigureSequence();
      return;
    }

    // Special Scene 18: The Final House — Altered First Note
    if (hotspot.isFinalDeskNote && !isTimeOfDayRefresh) {
      this.handleFinalDeskNoteTap();
      return;
    }

    const lines = this.isNight ? hotspot.nightLines : hotspot.dayLines;
    this.activeDialogue = lines || ["..."];
    this.dialogueStep = 0;

    if (!isTimeOfDayRefresh) {
      soundEngine.playHotspotPing();
    }

    this.displayDialogueStep();
  }

  // --- HORROR FLASH ENGINE (Pure black, dark blood-red distressed sequential reveal) ---
  showHorrorFlash(lines, onComplete) {
    if (!this.horrorFlashOverlay || !this.horrorFlashContent) {
      if (typeof onComplete === 'function') onComplete();
      return;
    }
    this.isCinematicBusy = true;

    // Render blood-red distressed line elements
    this.horrorFlashContent.innerHTML = lines.map((line, idx) => `
      <p class="horror-flash-line" id="horror-line-${idx}">${line}</p>
    `).join('');

    // Fade to pure black with subtle film/scratch flicker
    this.horrorFlashOverlay.classList.add('active');

    // Sequential text reveal
    const lineInterval = 800;
    lines.forEach((_, idx) => {
      setTimeout(() => {
        const el = document.getElementById(`horror-line-${idx}`);
        if (el) el.classList.add('revealed');
      }, 350 + idx * lineInterval);
    });

    const totalDuration = 350 + (lines.length - 1) * lineInterval + 1300;

    setTimeout(() => {
      // Brief fade out
      this.horrorFlashOverlay.classList.remove('active');

      setTimeout(() => {
        this.horrorFlashContent.innerHTML = '';
        this.isCinematicBusy = false;
        if (typeof onComplete === 'function') {
          onComplete();
        }
      }, 350);
    }, totalDuration);
  }

  // --- QUICK RED FLASH (Warning Sign Horror Interaction) ---
  showRedFlash(durationMs = 380, onComplete) {
    if (!this.redFlashOverlay) {
      if (typeof onComplete === 'function') onComplete();
      return;
    }
    this.redFlashOverlay.classList.add('active');
    setTimeout(() => {
      this.redFlashOverlay.classList.remove('active');
      if (typeof onComplete === 'function') {
        setTimeout(onComplete, 60);
      }
    }, durationMs);
  }

  // --- QUICK BLACK FLASH (Cart, Blackboard, Shrine Flowers) ---
  showQuickBlackFlash(durationMs = 500, onComplete) {
    if (!this.quickBlackOverlay) {
      if (typeof onComplete === 'function') onComplete();
      return;
    }
    this.quickBlackOverlay.classList.add('active');
    setTimeout(() => {
      this.quickBlackOverlay.classList.remove('active');
      if (typeof onComplete === 'function') {
        setTimeout(onComplete, 60);
      }
    }, durationMs);
  }

  // --- 1. WELL — LOOK INSIDE ---
  handleWellInteraction(hotspot, isTimeOfDayRefresh = false) {
    if (this.isCinematicBusy) return;
    this.activeHotspot = hotspot;

    // Slowly push camera toward opening
    this.sceneContainer.classList.add('camera-zoom-well');

    this.hotspotTitle.textContent = "The Village Well";
    this.hotspotText.textContent = "Don't look inside.";
    this.dismissHint.textContent = "Tap to step back";
    this.renderStepDots(0, 0);

    // Option: LOOK INSIDE
    this.dialogueActionSlot.innerHTML = `
      <button id="btn-look-inside" class="dialogue-choice-btn">LOOK INSIDE</button>
    `;
    this.hotspotCard.classList.add('visible');

    const btn = document.getElementById('btn-look-inside');
    if (btn) {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        this.triggerWellLookInside();
      });
    }
  }

  triggerWellLookInside() {
    this.forbiddenCount++;
    this.dialogueActionSlot.innerHTML = '';
    this.hotspotCard.classList.remove('visible');

    // Camera moves downward into darkness & ambient sounds drop
    this.sceneContainer.classList.remove('camera-zoom-well');
    this.sceneContainer.classList.add('camera-well-down');
    soundEngine.silenceAmbience(6);

    // Fade to black and show horror flash
    this.showHorrorFlash([
      "YOU LOOKED.",
      "NOW IT KNOWS YOU.",
      "LEAVE THE VILLAGE."
    ], () => {
      // Return to the village
      this.sceneContainer.classList.remove('camera-well-down', 'ambient-paused', 'camera-zoom-well');
      this.cinematicOverlay.className = 'cinematic-vignette-overlay';

      // Leave subtle consequence around well: darker opening, red mark & lingering fog
      this.wellConsequenceActive = true;
      this.sceneContainer.classList.add('well-consequence');
      const blood = this.sceneContainer.querySelector('#well-blood-mark');
      if (blood) blood.style.opacity = '0.85';
      const mist = this.sceneContainer.querySelector('#well-lingering-mist');
      if (mist) mist.style.opacity = '0.55';

      this.hideHotspotCard();
    });
  }

  // --- 2. RED HOUSE — KNOCK ---
  handleRedDoorNight() {
    if (this.isCinematicBusy) return;
    this.isCinematicBusy = true;
    this.forbiddenCount++;
    this.activeHotspot = { id: 'red-door', label: 'The Red Door' };

    // 1. Zoom toward the door
    this.sceneContainer.classList.add('camera-zoom-door');
    this.sceneContainer.classList.add('ambient-paused');

    // 2. Show two knocks
    soundEngine.playDoorKnock(false);
    this.hotspotTitle.textContent = "The Red Door";
    this.hotspotText.textContent = "knock.";
    this.dismissHint.textContent = "...";
    this.dialogueActionSlot.innerHTML = '';
    this.renderStepDots(0, 0);
    this.hotspotCard.classList.add('visible');

    setTimeout(() => {
      soundEngine.playDoorKnock(true);
      this.hotspotText.textContent = "knock.";

      setTimeout(() => {
        // 3. Door handle moves
        const handle = this.sceneContainer.querySelector('#red-door-handle');
        if (handle) handle.classList.add('handle-jiggle');
        soundEngine.playDoorHandleRattle();

        setTimeout(() => {
          // 4. Cut to black and show horror flash
          this.hotspotCard.classList.remove('visible');
          this.showHorrorFlash([
            "YOU WERE WARNED.",
            "DO NOT KNOCK AGAIN.",
            "IT HEARD YOU.",
            "NOW IT KNOWS WHERE YOU ARE."
          ], () => {
            // 5. Return to the scene
            this.sceneContainer.classList.remove('camera-zoom-door', 'ambient-paused');

            // 6. Leave red door slightly open and window light turned off
            this.redDoorKnocked = true;
            const door = this.sceneContainer.querySelector('#hotspot-red-door');
            if (door) door.classList.add('door-ajar');
            if (handle) handle.classList.remove('handle-jiggle');

            this.redHouseWindowLightOff = true;
            const win = this.sceneContainer.querySelector('#hotspot-red-house-window');
            if (win) win.classList.add('window-light-off');

            this.hideHotspotCard();
          });
        }, 800);
      }, 900);
    }, 1000);
  }

  // --- 3. TEMPLE BELL — NIGHT ---
  handleTempleBellNight() {
    if (this.isCinematicBusy) return;
    this.isCinematicBusy = true;
    this.forbiddenCount++;
    this.activeHotspot = { id: 'temple-bell', label: 'The Brass Bell' };

    // 1. Bell rings
    const bellRig = this.sceneContainer.querySelector('.temple-bell-rig');
    if (bellRig) {
      bellRig.classList.remove('bell-swing-anim');
      void bellRig.offsetWidth;
      bellRig.classList.add('bell-swing-anim');
    }
    soundEngine.playBellChime();
    soundEngine.silenceAmbience(6);

    this.hotspotTitle.textContent = "The Brass Bell";
    this.hotspotText.textContent = "DONG.";
    this.dismissHint.textContent = "...";
    this.dialogueActionSlot.innerHTML = '';
    this.renderStepDots(0, 0);
    this.hotspotCard.classList.add('visible');

    setTimeout(() => {
      // 2. Cut to black and show horror flash
      this.hotspotCard.classList.remove('visible');
      this.showHorrorFlash([
        "THE FIRST BELL WAS YOURS.",
        "THE SECOND WAS NOT.",
        "YOU SHOULD NOT HAVE ANSWERED.",
        "DO NOT RING IT AGAIN."
      ], () => {
        // 3. Return to the temple
        this.sceneContainer.classList.remove('ambient-paused');
        if (bellRig) bellRig.classList.remove('bell-swing-anim');

        // 4. Change one small environmental detail: extinguished step diya lamp
        this.templeDiyaExtinguished = true;
        const diya = this.sceneContainer.querySelector('#temple-step-diya');
        if (diya) diya.classList.add('diya-extinguished');

        this.hideHotspotCard();
      });
    }, 850);
  }

  // --- 4. BANYAN WOMAN — SCREAM ---
  handleBanyanWomanTap(hotspot) {
    if (this.isCinematicBusy) return;
    this.isCinematicBusy = true;
    this.forbiddenCount++;
    this.activeHotspot = hotspot;

    // 1. Immediately play a short, eerie female scream (1–2 seconds)
    soundEngine.playFemaleScream();

    // 2. Briefly shake screen and distort/flicker silhouette
    this.sceneContainer.classList.add('screen-horror-shake');
    const woman = this.sceneContainer.querySelector('#hotspot-banyan-figure');
    if (woman) woman.classList.add('silhouette-glitch');

    setTimeout(() => {
      // 3. Cut to black and show horror flash
      this.sceneContainer.classList.remove('screen-horror-shake');
      this.showHorrorFlash([
        "YOU SHOULD NOT HAVE SPOKEN TO HER.",
        "SHE DOES NOT SPEAK.",
        "SHE SCREAMS.",
        "RUN."
      ], () => {
        // 4. Return to the banyan scene
        this.banyanWomanSeen = true;
        if (woman) {
          woman.classList.remove('silhouette-glitch');
          woman.style.display = 'none';
        }
        const beacon = this.sceneContainer.querySelector('.hotspot-beacon[data-hotspot-id="banyan-figure"]');
        if (beacon) beacon.style.display = 'none';

        // 5. Leave subtle fog/wind behind
        this.banyanConsequenceActive = true;
        this.sceneContainer.classList.add('banyan-consequence');
        const lingeringFog = this.sceneContainer.querySelector('#banyan-lingering-fog');
        if (lingeringFog) lingeringFog.style.opacity = '0.65';

        this.hideHotspotCard();
      });
    }, 800);
  }

  // --- 1. VILLAGE SQUARE — NOTICE BOARD ---
  handleNoticeBoardTap() {
    if (this.isCinematicBusy) return;
    this.isCinematicBusy = true;
    this.hideHotspotCard();

    // 1. Screen briefly flickers
    this.sceneContainer.classList.add('screen-glitch-flicker');

    // 2. Ghostly figure suddenly RUNS across background
    const ghost = this.sceneContainer.querySelector('#square-running-ghost');
    if (ghost) {
      ghost.style.opacity = '1';
      ghost.classList.add('square-ghost-sprint');
    }

    setTimeout(() => {
      // 3. Immediately after: a loud, short scream
      soundEngine.playSharpScream();
      this.sceneContainer.classList.remove('screen-glitch-flicker');

      setTimeout(() => {
        if (ghost) {
          ghost.classList.remove('square-ghost-sprint');
          ghost.style.display = 'none';
        }

        // 4. Show: "YOU SAW THAT." -> Pause -> "No one else did."
        this.hotspotTitle.textContent = "Village Square";
        this.hotspotText.textContent = "YOU SAW THAT.";
        this.dismissHint.textContent = "...";
        this.dialogueActionSlot.innerHTML = '';
        this.renderStepDots(2, 0);
        this.hotspotCard.classList.add('visible');

        setTimeout(() => {
          this.hotspotText.textContent = "No one else did.";
          this.dismissHint.textContent = "Tap to close";
          this.renderStepDots(2, 1);
          this.isCinematicBusy = false;
        }, 1500);
      }, 500);
    }, 280);
  }

  // --- 2. VILLAGE SQUARE — OLD CART ---
  handleSquareCartTap() {
    if (this.isCinematicBusy) return;
    this.isCinematicBusy = true;
    this.hideHotspotCard();

    // 1. The cart suddenly moves by itself, rolls a short distance
    const cart = this.sceneContainer.querySelector('#hotspot-square-cart');
    if (cart) {
      cart.classList.add('cart-roll-anim');
    }
    soundEngine.playCartRolling();

    // 2. Stop after 1.4s, Silence
    setTimeout(() => {
      soundEngine.silenceAmbience(4);

      // 3. Child's laugh comes from off-screen
      setTimeout(() => {
        soundEngine.playChildLaughter();

        // 4. Brief black flash (< 500ms)
        setTimeout(() => {
          this.showQuickBlackFlash(450, () => {
            // 5. Show: "IT WASN'T THE WIND."
            this.hotspotTitle.textContent = "Bullock Cart";
            this.hotspotText.textContent = "IT WASN'T THE WIND.";
            this.dismissHint.textContent = "Tap to close";
            this.dialogueActionSlot.innerHTML = '';
            this.renderStepDots(0, 0);
            this.hotspotCard.classList.add('visible');
            this.isCinematicBusy = false;
          });
        }, 400);
      }, 650);
    }, 1450);
  }

  // --- 3. ABANDONED HOUSE — WINDOW ---
  handleHouseWindowTap() {
    if (this.isCinematicBusy) return;
    this.isCinematicBusy = true;
    this.hideHotspotCard();

    // 1. A face/ghost silhouette suddenly appears extremely briefly behind the glass
    const face = this.sceneContainer.querySelector('#window-ghost-face');
    if (face) {
      face.classList.add('ghost-face-flash');
    }

    // 2. Disappears almost immediately (320ms) + A sharp scream
    setTimeout(() => {
      soundEngine.playSharpScream();

      // 3. The window becomes completely dark
      this.abandonedWindowDarkened = true;
      const windowEl = this.sceneContainer.querySelector('#hotspot-house-window');
      if (windowEl) {
        windowEl.classList.add('window-darkened');
      }
      if (face) {
        face.classList.remove('ghost-face-flash');
        face.style.display = 'none';
      }

      // 4. Show: "WHO TOLD YOU TO LOOK?"
      setTimeout(() => {
        this.hotspotTitle.textContent = "Veranda Window";
        this.hotspotText.textContent = "WHO TOLD YOU TO LOOK?";
        this.dismissHint.textContent = "Tap to close";
        this.dialogueActionSlot.innerHTML = '';
        this.renderStepDots(0, 0);
        this.hotspotCard.classList.add('visible');
        this.isCinematicBusy = false;
      }, 400);
    }, 320);
  }

  // --- 4. ABANDONED HOUSE — CHILD'S TOY ---
  handleChildrenToyTap() {
    if (this.isCinematicBusy || this.toyVanished) return;
    this.isCinematicBusy = true;
    this.hideHotspotCard();

    const mover = this.sceneContainer.querySelector('#toy-cart-mover');
    if (!mover) return;

    // 1. Toy suddenly moves on its own
    soundEngine.playHotspotPing();
    mover.classList.add('toy-move-step-1');

    // 2. Then stops. After short pause (750ms), make toy move again toward edge
    setTimeout(() => {
      mover.classList.remove('toy-move-step-1');
      mover.classList.add('toy-move-step-2');

      // 3. A child's whisper: "Don't leave me."
      setTimeout(() => {
        soundEngine.playChildWhisper();

        this.hotspotTitle.textContent = "Children's Toy";
        this.hotspotText.textContent = "Don't leave me.";
        this.dismissHint.textContent = "...";
        this.dialogueActionSlot.innerHTML = '';
        this.renderStepDots(0, 0);
        this.hotspotCard.classList.add('visible');

        // 4. Screen briefly flickers, toy disappears
        setTimeout(() => {
          this.sceneContainer.classList.add('screen-glitch-flicker');

          setTimeout(() => {
            this.sceneContainer.classList.remove('screen-glitch-flicker');
            this.toyVanished = true;
            const toyObj = this.sceneContainer.querySelector('#hotspot-children-toy');
            if (toyObj) toyObj.style.display = 'none';
            const beacon = this.sceneContainer.querySelector('.hotspot-beacon[data-hotspot-id="children-toy"]');
            if (beacon) beacon.style.display = 'none';

            this.dismissHint.textContent = "Tap to close";
            this.isCinematicBusy = false;
          }, 380);
        }, 1100);
      }, 400);
    }, 800);
  }

  // --- 5. OLD SCHOOL — BLACKBOARD ---
  handleSchoolBlackboardTap() {
    if (this.isCinematicBusy) return;
    this.isCinematicBusy = true;
    this.forbiddenCount++;
    this.hideHotspotCard();

    const originalText = this.sceneContainer.querySelector('#blackboard-original-text');
    const run1 = this.sceneContainer.querySelector('#bb-run-1');
    const run2 = this.sceneContainer.querySelector('#bb-run-2');
    const run3 = this.sceneContainer.querySelector('#bb-run-3');
    const heIsHere = this.sceneContainer.querySelector('#bb-he-is-here');
    const doorwayRunner = this.sceneContainer.querySelector('#school-doorway-runner');

    // 1. Existing writing disappears
    if (originalText) originalText.classList.add('blackboard-cleared');

    // 2. New writing rapidly appears: "RUN." Pause. "RUN." Pause. "RUN." Then: "HE IS HERE."
    setTimeout(() => {
      soundEngine.playChalkScratch();
      if (run1) run1.classList.add('chalk-text-reveal');

      setTimeout(() => {
        soundEngine.playChalkScratch();
        if (run2) run2.classList.add('chalk-text-reveal');

        setTimeout(() => {
          soundEngine.playChalkScratch();
          if (run3) run3.classList.add('chalk-text-reveal');

          setTimeout(() => {
            soundEngine.playChalkScratch();
            if (heIsHere) heIsHere.classList.add('chalk-text-reveal');

            // 3. Ghostly silhouette runs past the school doorway
            setTimeout(() => {
              if (doorwayRunner) doorwayRunner.classList.add('doorway-runner-sprint');
              soundEngine.playSharpScream();

              // 4. Cut to black for less than a second (< 700ms)
              setTimeout(() => {
                this.showQuickBlackFlash(650, () => {
                  // 5. Return to the school: blackboard now completely blank
                  this.schoolBlackboardErased = true;
                  if (originalText) originalText.style.display = 'none';
                  const horrorGroup = this.sceneContainer.querySelector('#blackboard-horror-writing');
                  if (horrorGroup) horrorGroup.style.display = 'none';
                  if (doorwayRunner) doorwayRunner.style.display = 'none';
                  this.isCinematicBusy = false;
                });
              }, 400);
            }, 600);
          }, 450);
        }, 450);
      }, 450);
    }, 350);
  }

  // --- 6. OLD SCHOOL — SWING AT NIGHT ---
  handleSchoolSwingNightTap() {
    if (this.isCinematicBusy) return;
    this.isCinematicBusy = true;
    this.hideHotspotCard();

    const swingRig = this.sceneContainer.querySelector('#school-swing-rig');

    // 1. Swing suddenly moves extremely fast
    if (swingRig) {
      swingRig.classList.remove('school-swing-anim');
      swingRig.classList.add('fast-swing-anim');
    }
    soundEngine.playFastSwingCreak();

    // 2. Stops instantly after 1.8s
    setTimeout(() => {
      if (swingRig) {
        swingRig.classList.remove('fast-swing-anim');
        swingRig.classList.add('swing-stopped-frozen');
      }

      // 3. Silence
      soundEngine.silenceAmbience(5);

      // 4. A child's laughter comes from behind the user
      setTimeout(() => {
        soundEngine.playChildLaughter();

        // 5. Camera quickly shifts/slides slightly toward opposite direction
        this.sceneContainer.classList.add('camera-quick-turn');

        // Nothing is there
        setTimeout(() => {
          this.sceneContainer.classList.remove('camera-quick-turn');

          // 6. Show: "DON'T TURN AROUND."
          this.hotspotTitle.textContent = "The Old Swing";
          this.hotspotText.textContent = "DON'T TURN AROUND.";
          this.dismissHint.textContent = "Tap to close";
          this.dialogueActionSlot.innerHTML = '';
          this.renderStepDots(0, 0);
          this.hotspotCard.classList.add('visible');
          this.isCinematicBusy = false;
        }, 1100);
      }, 700);
    }, 1800);
  }

  // --- 7. FOREST EDGE — WARNING SIGN ---
  handleForestSignTap() {
    if (this.isCinematicBusy) return;
    this.isCinematicBusy = true;
    this.forbiddenCount++;
    this.hideHotspotCard();

    const sign = this.sceneContainer.querySelector('#hotspot-forest-sign');

    // 1. Sign shakes violently
    if (sign) sign.classList.add('sign-violent-shake');
    soundEngine.playSignRattle();

    // 2. The forest suddenly becomes completely silent
    soundEngine.silenceAmbience(5);

    // 3. Multiple dark silhouettes RUN between trees
    const r1 = this.sceneContainer.querySelector('#forest-runner-1');
    const r2 = this.sceneContainer.querySelector('#forest-runner-2');
    const r3 = this.sceneContainer.querySelector('#forest-runner-3');
    if (r1) r1.classList.add('tree-runner-active-1');
    if (r2) r2.classList.add('tree-runner-active-2');
    if (r3) r3.classList.add('tree-runner-active-3');

    setTimeout(() => {
      if (sign) sign.classList.remove('sign-violent-shake');

      // 4. Distant scream
      soundEngine.playDistantScream();

      // 5. Brief RED FLASH (not black!)
      setTimeout(() => {
        this.showRedFlash(380, () => {
          // 6. Show: "THEY ARE NOT ANIMALS."
          this.hotspotTitle.textContent = "Warning Sign";
          this.hotspotText.textContent = "THEY ARE NOT ANIMALS.";
          this.dismissHint.textContent = "Tap to close";
          this.dialogueActionSlot.innerHTML = '';
          this.renderStepDots(0, 0);
          this.hotspotCard.classList.add('visible');
          this.isCinematicBusy = false;
        });
      }, 500);
    }, 800);
  }

  // --- 8. FOREST EDGE — NIGHT EVENT (Eyes & Foreground Sprint) ---
  setupForestNightEyesEvent() {
    if (this.forestNightEventTriggered || !this.isNight) return;
    if (this.forestNightTimer) clearTimeout(this.forestNightTimer);

    this.forestNightTimer = setTimeout(() => {
      if (this.currentSceneIndex < 0 || STORY_DATA.scenes[this.currentSceneIndex]?.id !== 'forest-edge' || !this.isNight || this.isCinematicBusy) return;
      this.forestNightEventTriggered = true;

      const eyes1 = this.sceneContainer.querySelector('#forest-eyes-pair-1');
      const eyes2 = this.sceneContainer.querySelector('#forest-eyes-pair-2');
      const eyes3 = this.sceneContainer.querySelector('#forest-eyes-pair-3');
      const fgRunner = this.sceneContainer.querySelector('#forest-foreground-runner');

      // Pair 1 appears
      if (eyes1) eyes1.style.opacity = '0.9';

      setTimeout(() => {
        // Pair 2 appears
        if (eyes2) eyes2.style.opacity = '0.9';

        setTimeout(() => {
          // Pair 3 appears
          if (eyes3) eyes3.style.opacity = '0.9';

          // Suddenly all disappear!
          setTimeout(() => {
            if (eyes1) eyes1.style.opacity = '0';
            if (eyes2) eyes2.style.opacity = '0';
            if (eyes3) eyes3.style.opacity = '0';

            // One ghostly figure runs directly across foreground
            if (fgRunner) fgRunner.classList.add('foreground-runner-sprint');
            soundEngine.playSharpScream();
            this.sceneContainer.classList.add('screen-horror-shake');

            setTimeout(() => {
              this.sceneContainer.classList.remove('screen-horror-shake');
              if (fgRunner) {
                fgRunner.classList.remove('foreground-runner-sprint');
                fgRunner.style.display = 'none';
              }
            }, 600);
          }, 850);
        }, 600);
      }, 600);
    }, 4500);
  }

  // --- 9. SMALL SHRINE — OIL LAMP ---
  handleShrineLampTap() {
    if (this.isCinematicBusy) return;
    this.isCinematicBusy = true;
    this.forbiddenCount++;
    this.hideHotspotCard();

    const flame = this.sceneContainer.querySelector('#shrine-diya-flame');

    // 1. Flame suddenly becomes very tall
    if (flame) flame.classList.add('flame-flare-tall');
    soundEngine.playFlameWhoosh();

    setTimeout(() => {
      // 2. Goes completely out
      if (flame) {
        flame.classList.remove('flame-flare-tall');
        flame.classList.add('flame-extinguished');
      }

      // 3. Black screen & text
      setTimeout(() => {
        this.showHorrorFlash([
          "YOU PUT IT OUT.",
          "NOW SOMETHING ELSE CAN SEE YOU."
        ], () => {
          this.shrineFlameExtinguished = true;
          if (flame) flame.style.display = 'none';
          this.isCinematicBusy = false;
        });
      }, 250);
    }, 550);
  }

  // --- 10. SMALL SHRINE — FLOWERS ---
  handleShrineFlowersTap() {
    if (this.isCinematicBusy) return;
    this.isCinematicBusy = true;
    this.forbiddenCount++;
    this.hideHotspotCard();

    const flowersGroup = this.sceneContainer.querySelector('#hotspot-shrine-flowers');
    const petals = this.sceneContainer.querySelectorAll('.shrine-flower-petal');

    // 1. Flowers suddenly shake
    if (flowersGroup) flowersGroup.classList.add('flower-violent-shake');

    // 2. Slowly turn dark/red
    petals.forEach(p => p.classList.add('flowers-blood-dark'));

    // 3. A woman's whisper: "Why did you touch them?"
    setTimeout(() => {
      soundEngine.playWomanWhisper();

      // 4. Immediately cut to black (< 500ms)
      setTimeout(() => {
        if (flowersGroup) flowersGroup.classList.remove('flower-violent-shake');
        this.showQuickBlackFlash(500, () => {
          // 5. Show: "PUT THEM BACK."
          this.hotspotTitle.textContent = "Small Shrine";
          this.hotspotText.textContent = "PUT THEM BACK.";
          this.dismissHint.textContent = "Tap to close";
          this.dialogueActionSlot.innerHTML = '';
          this.renderStepDots(0, 0);
          this.hotspotCard.classList.add('visible');

          // Return to normal: flowers are normal again
          petals.forEach(p => p.classList.remove('flowers-blood-dark'));
          this.isCinematicBusy = false;
        });
      }, 1000);
    }, 400);
  }

  // --- 12. RARE EVENT — FIRE RAIN ---
  triggerFireRain() {
    if (this.isCinematicBusy || this.fireRainActive) return;
    this.isCinematicBusy = true;
    this.fireRainActive = true;
    this.hideHotspotCard();

    // 1. Sky turns dark red
    this.fireRainOverlay.classList.add('active');

    // 2. Silence environment
    soundEngine.silenceAmbience(12);

    // 3. Burning ambient audio
    soundEngine.playFireRainAmbient();

    // 4. Canvas Particle Fire Rain System
    const canvas = this.fireRainCanvas;
    const ctx = canvas.getContext('2d');
    canvas.width = canvas.offsetWidth || 390;
    canvas.height = canvas.offsetHeight || 844;

    const particles = [];
    const numEmbers = 50;
    for (let i = 0; i < numEmbers; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        len: 4 + Math.random() * 8,
        speed: 2.5 + Math.random() * 3,
        width: 1.5 + Math.random() * 1.5,
        alpha: 0.4 + Math.random() * 0.6,
        color: Math.random() > 0.3 ? '#ff6600' : '#ffcc00',
        drift: -0.5 + Math.random() * 1
      });
    }

    let animId = null;

    const renderFire = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach(p => {
        ctx.beginPath();
        ctx.strokeStyle = p.color;
        ctx.lineWidth = p.width;
        ctx.globalAlpha = p.alpha;
        ctx.moveTo(p.x, p.y);
        ctx.lineTo(p.x + p.drift * 2, p.y + p.len);
        ctx.stroke();

        p.y += p.speed;
        p.x += p.drift;

        if (p.y > canvas.height) {
          p.y = -p.len - Math.random() * 50;
          p.x = Math.random() * canvas.width;
        }
      });

      if (this.fireRainActive) {
        animId = requestAnimationFrame(renderFire);
      }
    };

    animId = requestAnimationFrame(renderFire);

    // After 2.4 seconds, embers become larger streaks of fire
    setTimeout(() => {
      particles.forEach(p => {
        p.len = 28 + Math.random() * 45;
        p.speed = 10 + Math.random() * 8;
        p.width = 2.5 + Math.random() * 2;
        p.color = Math.random() > 0.25 ? '#ff3b00' : '#ffa200';
      });
    }, 2400);

    // Progressive Typography:
    const line1 = document.getElementById('fire-rain-line-1');
    const line2 = document.getElementById('fire-rain-line-2');
    const line3 = document.getElementById('fire-rain-line-3');

    setTimeout(() => {
      if (line1) line1.classList.add('revealed');

      setTimeout(() => {
        if (line2) line2.classList.add('revealed');

        setTimeout(() => {
          if (line3) line3.classList.add('revealed');

          // Return to normal
          setTimeout(() => {
            this.fireRainOverlay.classList.remove('active');
            if (line1) line1.classList.remove('revealed');
            if (line2) line2.classList.remove('revealed');
            if (line3) line3.classList.remove('revealed');
            this.fireRainActive = false;
            if (animId) cancelAnimationFrame(animId);
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            this.isCinematicBusy = false;
          }, 3200);
        }, 1600);
      }, 1800);
    }, 1400);
  }

  // --- 11. SECOND NOTE: Tactile Parchment Modal & Bloody Handprint Event ---
  openSecondNoteModal() {
    const data = STORY_DATA.secondNote;
    soundEngine.playBoxOpen();

    this.noteContent.innerHTML = `
      <div id="second-note-sheet" class="tactile-parchment-sheet newer-paper">
        <!-- Bloody Handprint Stamp Overlay -->
        <svg id="parchment-bloody-handprint" class="bloody-handprint-overlay" viewBox="0 0 100 120" xmlns="http://www.w3.org/2000/svg">
          <path d="M48 55 C42 62, 38 78, 44 95 C48 105, 58 110, 68 108 C78 106, 84 96, 82 82 C80 70, 75 60, 68 55 Z" fill="#6d0b13" opacity="0.85"/>
          <path d="M38 75 C30 72, 22 75, 18 84 C15 91, 18 97, 26 96 C33 95, 38 90, 42 84 Z" fill="#6d0b13" opacity="0.85"/>
          <path d="M42 55 C38 42, 34 26, 36 14 C37 8, 43 8, 46 14 C48 24, 48 40, 50 54 Z" fill="#6d0b13" opacity="0.85"/>
          <path d="M52 54 C51 38, 48 18, 52 6 C54 0, 60 1, 62 8 C63 18, 62 38, 60 54 Z" fill="#6d0b13" opacity="0.85"/>
          <path d="M62 55 C64 40, 64 22, 68 12 C70 6, 75 7, 76 13 C77 22, 74 40, 70 56 Z" fill="#6d0b13" opacity="0.85"/>
          <path d="M71 58 C76 48, 80 34, 85 26 C87 21, 92 23, 91 29 C90 38, 84 50, 79 62 Z" fill="#6d0b13" opacity="0.85"/>
          <path d="M46 95 Q45 112 43 118" stroke="#6d0b13" stroke-width="2" stroke-linecap="round" fill="none"/>
          <path d="M65 105 Q66 116 64 122" stroke="#6d0b13" stroke-width="2" stroke-linecap="round" fill="none"/>
        </svg>

        <h2 class="parchment-title-handwritten">${data.heading}</h2>
        <div class="parchment-crease-line"></div>

        <div class="parchment-narrative-body">
          ${data.paragraphs.map(p => `<p>${p}</p>`).join('')}
        </div>

        <div class="parchment-larger-gap"></div>
        <p class="real-rules-lead">${data.revealLead}</p>

        <div class="parchment-warning-box real-rules-box">
          <h3 class="parchment-warning-title">${data.rulesHeading}</h3>
          <ol class="parchment-real-rules-list">
            ${data.rules.map(r => `<li>${r}</li>`).join('')}
          </ol>
        </div>

        <!-- Horror Warning Text (Revealed upon shaking) -->
        <p id="parchment-horror-warning" class="parchment-horror-warning-text">YOU WEREN'T SUPPOSED TO FIND THIS.</p>

        <button id="second-note-continue-btn" class="antique-story-btn">
          ${data.buttonText}
        </button>
      </div>
    `;

    this.noteModal.classList.add('active');

    let horrorTriggered = false;
    const triggerSecondNoteHorror = () => {
      if (horrorTriggered) return;
      horrorTriggered = true;
      this.forbiddenCount++;

      const sheet = document.getElementById('second-note-sheet');
      const handprint = document.getElementById('parchment-bloody-handprint');
      const warningText = document.getElementById('parchment-horror-warning');

      // 1. Paper should suddenly shake
      if (sheet) sheet.classList.add('parchment-sheet-shake');

      // 2. A dark red handprint slowly appears
      if (handprint) handprint.classList.add('revealed');

      // 3. Text: "YOU WEREN'T SUPPOSED TO FIND THIS."
      if (warningText) warningText.classList.add('revealed');

      // 4. Brief scream
      soundEngine.playSharpScream();

      setTimeout(() => {
        // 5. Paper flies out of view
        if (sheet) {
          sheet.classList.remove('parchment-sheet-shake');
          sheet.classList.add('parchment-fly-away');
        }

        setTimeout(() => {
          // 6. Return to village
          this.closeNoteModal();
          this.activateReactiveNight();
        }, 750);
      }, 1600);
    };

    const btn = document.getElementById('second-note-continue-btn');
    if (btn) {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        triggerSecondNoteHorror();
      });
    }

    const autoTimer = setTimeout(() => {
      if (this.noteModal.classList.contains('active')) {
        triggerSecondNoteHorror();
      }
    }, 6500);

    const prevClose = this.closeNoteModal.bind(this);
    this.closeNoteModal = () => {
      clearTimeout(autoTimer);
      prevClose();
    };
  }

  // ==========================================================================
  // FINAL STORY ARC METHODS (Scenes 14 to 19 & Loop Ending)
  // ==========================================================================

  // --- SCENE 14: THE FORGOTTEN STREET — DISTANT FIGURE ---
  handleStreetFigureTap() {
    if (this.isCinematicBusy) return;
    if (this.streetFigureVanished) return;
    this.streetFigureVanished = true;

    const fig = this.sceneContainer.querySelector('#hotspot-street-figure');
    const beacon = this.sceneContainer.querySelector('.hotspot-beacon[data-hotspot-id="street-figure"]');

    soundEngine.playCloseWhisper();

    if (fig) {
      fig.style.transition = 'opacity 0.7s ease, transform 0.7s ease';
      fig.style.opacity = '0';
      fig.style.transform = 'scale(0.9)';
      setTimeout(() => {
        fig.style.display = 'none';
      }, 700);
    }
    if (beacon) beacon.style.display = 'none';

    this.showHorrorDialogueCard("The Forgotten Street", "IT WAS WAITING FOR YOU.", "Tap to continue");
  }

  // --- SCENE 15: THE HOUSE AT THE END — BOTTLE ---
  handleEndHouseBottleTap() {
    if (this.isCinematicBusy) return;
    soundEngine.playBottleClink();

    this.activeHotspot = { id: 'end-house-bottle', label: 'The Forgotten Bottle' };
    this.activeDialogue = [
      "YOU'VE SEEN THIS BEFORE.",
      "But not this one.",
      "This bottle has no stopper. The rolled paper was removed long ago."
    ];
    this.dialogueStep = 0;
    this.displayDialogueStep();
  }

  // --- SCENE 15: THE HOUSE AT THE END — DOOR ---
  handleEndHouseDoorTap() {
    if (this.isCinematicBusy) return;

    if (this.houseAtEndDoorOpen) {
      this.enterDocumentationRoom();
      return;
    }

    if (!this.isNight) {
      soundEngine.playDoorKnock(false);
      this.activeHotspot = { id: 'end-house-door', label: 'The Heavy Timber Door' };
      this.activeDialogue = [
        "Locked from the inside.",
        "There is no handle. No keyhole."
      ];
      this.dialogueStep = 0;
      this.displayDialogueStep();
      return;
    }

    // At Night: Door slowly creaks open and reveals warm golden interior
    this.houseAtEndDoorOpen = true;
    soundEngine.playDoorCreak();

    const doorGroup = this.sceneContainer.querySelector('#house-end-door-group');
    if (doorGroup) {
      doorGroup.classList.remove('door-creak-open-anim');
      void doorGroup.offsetWidth;
      doorGroup.classList.add('door-creak-open-anim');
    }

    this.activeHotspot = { id: 'end-house-door', label: 'The Open Threshold' };
    this.activeDialogue = [
      "The latch lifts in the darkness. The door slowly swings inward.",
      "Warm golden candlelight spills across the threshold."
    ];
    this.dialogueStep = 0;
    this.displayDialogueStep();

    // Add ENTER action button
    const enterBtn = document.createElement('button');
    enterBtn.id = 'btn-enter-documentation-room';
    enterBtn.className = 'antique-story-btn';
    enterBtn.style.marginTop = '0.75rem';
    enterBtn.textContent = 'ENTER →';
    enterBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      this.enterDocumentationRoom();
    });
    this.dialogueActionSlot.appendChild(enterBtn);
  }

  enterDocumentationRoom() {
    this.hideHotspotCard();
    soundEngine.playFootstep();
    // Scene 15 in zero-based index is 'room' (The Documentation Room)
    this.renderScene(15, 'next');
  }

  // --- SCENE 16: THE DOCUMENTATION ROOM — NOTES ---
  handleRoomNotesTap() {
    if (this.isCinematicBusy) return;
    soundEngine.playPaperRustle();

    this.activeHotspot = { id: 'room-notes', label: 'Handwritten Notes' };
    this.activeDialogue = [
      "I came here in 1981.",
      "I thought I was investigating the village.",
      "The village doesn't keep people.",
      "It keeps memories.",
      "If you are reading this, you are walking in my footsteps."
    ];
    this.dialogueStep = 0;
    this.displayDialogueStep();
  }

  // --- SCENE 16: THE DOCUMENTATION ROOM — PHOTOGRAPH ---
  handleRoomPhotoTap() {
    if (this.isCinematicBusy) return;
    soundEngine.playHotspotPing();

    this.activeHotspot = { id: 'room-photo', label: 'Silver Gelatin Print' };
    this.activeDialogue = [
      "An old photograph lies half-hidden under the maps.",
      "It shows someone walking down the village road from behind.",
      "The clothes look familiar.",
      "Wait.",
      "That's me."
    ];
    this.dialogueStep = 0;
    this.displayDialogueStep();
  }

  // --- SCENE 17: THE PERSON ON THE ROAD ---
  handleRoadFigureSequence() {
    if (this.isCinematicBusy) return;

    if (this.roadFigureStep === 0) {
      this.roadFigureStep = 1;
      soundEngine.playFootstep();
      const mover = this.sceneContainer.querySelector('#road-figure-mover');
      if (mover) mover.classList.add('step-1');

      this.activeHotspot = { id: 'road-walker', label: 'The Person on the Road' };
      this.activeDialogue = [
        "You take a step forward.",
        "The figure continues walking slowly ahead, keeping the exact same distance.",
        "Tap to step forward again."
      ];
      this.dialogueStep = 0;
      this.displayDialogueStep();
    } else if (this.roadFigureStep === 1) {
      this.roadFigureStep = 2;
      this.isCinematicBusy = true;
      this.hideHotspotCard();
      soundEngine.playFootstep();

      const mover = this.sceneContainer.querySelector('#road-figure-mover');
      if (mover) {
        mover.classList.remove('step-1');
        mover.classList.add('step-2');
      }

      // Step forward again: figure stops and slowly turns around
      setTimeout(() => {
        soundEngine.playCloseWhisper();
        const walker = this.sceneContainer.querySelector('#road-walker-svg');
        if (walker) walker.classList.add('figure-slow-turn');

        // Before face is revealed: screen flickers violently & cuts to black
        setTimeout(() => {
          soundEngine.playSharpScream();
          if (this.roadBlackoutOverlay) {
            this.roadBlackoutOverlay.classList.add('active');
            if (this.roadLine1) this.roadLine1.classList.add('revealed');

            setTimeout(() => {
              if (this.roadLine2) this.roadLine2.classList.add('revealed');
              // Highlight Day/Night toggle
              this.waitingForLightsOff = true;
              this.dayNightToggle.classList.add('toggle-turn-off-highlight');
              const header = document.querySelector('.hud-header');
              if (header) header.style.zIndex = '105';
            }, 1800);
          }
        }, 1200);
      }, 1600);
    }
  }

  handleLightsOffToggle() {
    if (!this.waitingForLightsOff) return;
    this.waitingForLightsOff = false;
    this.dayNightToggle.classList.remove('toggle-turn-off-highlight');
    const header = document.querySelector('.hud-header');
    if (header) header.style.zIndex = '';

    soundEngine.playDroneStrike();

    // Instead of daylight: screen stays black!
    if (this.roadLine2) this.roadLine2.classList.remove('revealed');

    setTimeout(() => {
      if (this.roadLine3) this.roadLine3.classList.add('revealed');

      setTimeout(() => {
        if (this.roadLine4) this.roadLine4.classList.add('revealed');

        // Fade back to road: figure is gone!
        setTimeout(() => {
          if (this.roadBlackoutOverlay) {
            this.roadBlackoutOverlay.classList.remove('active');
          }
          if (this.roadLine1) this.roadLine1.classList.remove('revealed');
          if (this.roadLine2) this.roadLine2.classList.remove('revealed');
          if (this.roadLine3) this.roadLine3.classList.remove('revealed');
          if (this.roadLine4) this.roadLine4.classList.remove('revealed');

          const mover = this.sceneContainer.querySelector('#road-figure-mover');
          if (mover) mover.style.display = 'none';
          const beacon = this.sceneContainer.querySelector('.hotspot-beacon[data-hotspot-id="road-walker"]');
          if (beacon) beacon.style.display = 'none';

          this.isCinematicBusy = false;
          this.btnNext.disabled = false;
          this.btnNext.style.display = 'flex';

          this.showHorrorDialogueCard("The Person on the Road", "The road is empty. Only your own shadow remains in the dust.", "Tap to continue");
        }, 3000);
      }, 1400);
    }, 700);
  }

  // --- SCENE 18: THE FINAL HOUSE — ALTERED FIRST NOTE ---
  handleFinalDeskNoteTap() {
    if (this.isCinematicBusy) return;
    this.openAlteredFirstNote();
  }

  openAlteredFirstNote() {
    this.noteContent.innerHTML = `
      <div class="tactile-parchment-sheet">
        <h2 class="parchment-title-handwritten">TO WHOEVER FINDS THIS</h2>
        <div class="parchment-crease-line"></div>
        <div class="parchment-narrative-body">
          <p style="font-weight:700; color:#8b1e1e; letter-spacing:0.06em;">IF YOU ARE READING THIS...</p>
          <p style="font-weight:700; color:#8b1e1e; letter-spacing:0.06em;">...YOU HAVE ALREADY ENTERED.</p>
          <p style="margin-top:1.4rem;">THE VILLAGE REMEMBERS EVERYONE.</p>
          <p style="font-size:1.15rem; font-weight:800; color:#8b1e1e; margin-top:1.6rem; letter-spacing:0.08em;">NOW IT REMEMBERS YOU.</p>
        </div>
        <div class="parchment-modal-actions" style="margin-top:1.8rem; text-align:center;">
          <button id="btn-close-final-note" class="antique-story-btn">FOLD NOTE</button>
        </div>
      </div>
    `;

    this.noteModal.classList.add('active');
    soundEngine.playPaperRustle();

    const closeBtn = document.getElementById('btn-close-final-note');
    let horrorStarted = false;

    const onFinishReading = () => {
      if (horrorStarted) return;
      horrorStarted = true;
      this.closeNoteModal();
      this.triggerFinalHorrorMoment();
    };

    if (closeBtn) {
      closeBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        onFinishReading();
      });
    }

    setTimeout(() => {
      if (this.noteModal.classList.contains('active')) {
        onFinishReading();
      }
    }, 6000);
  }

  // --- FINAL HORROR MOMENT ---
  triggerFinalHorrorMoment() {
    if (this.isCinematicBusy) return;
    this.isCinematicBusy = true;
    this.hideHotspotCard();

    // 1. Ambient sounds drop completely
    soundEngine.silenceAmbience(12);

    // 2. Screen slowly darkens
    this.sceneContainer.classList.add('camera-well-down', 'ambient-paused');

    // 3. Silhouette creeps up behind player
    const silhouette = document.createElement('div');
    silhouette.id = 'final-silhouette-creep-el';
    silhouette.className = 'final-silhouette-creep';
    silhouette.style.position = 'absolute';
    silhouette.style.bottom = '0';
    silhouette.style.left = '50%';
    silhouette.style.transform = 'translateX(-50%)';
    silhouette.style.width = '260px';
    silhouette.style.height = '340px';
    silhouette.style.pointerEvents = 'none';
    silhouette.style.zIndex = '35';
    silhouette.innerHTML = `
      <svg viewBox="0 0 200 300" width="100%" height="100%">
        <defs>
          <filter id="shadow-blur">
            <feGaussianBlur stdDeviation="3" />
          </filter>
        </defs>
        <ellipse cx="100" cy="55" rx="36" ry="44" fill="#020306" filter="url(#shadow-blur)" />
        <path d="M30 300 L55 125 Q100 100 145 125 L170 300 Z" fill="#020306" filter="url(#shadow-blur)" />
      </svg>
    `;
    this.sceneContainer.appendChild(silhouette);

    // 4. Whisper in player's ears: "Don't turn around."
    setTimeout(() => {
      soundEngine.playCloseWhisper();
      this.showHorrorDialogueCard("...", "Don't turn around.", "...");

      // 5. Brief silence, then sudden violent cut to black
      setTimeout(() => {
        this.hideHotspotCard();
        soundEngine.playSharpScream();

        this.showHorrorFlash([
          "YOU SHOULD HAVE LISTENED."
        ], () => {
          this.sceneContainer.classList.remove('camera-well-down', 'ambient-paused');
          if (silhouette.parentNode) silhouette.parentNode.removeChild(silhouette);
          // Scene 18 in zero-based index is 'ending'
          this.renderScene(18, 'next');
        });
      }, 1600);
    }, 2200);
  }

  // --- SCENE 19: THE ENDING ---
  triggerEndingSequence() {
    this.isCinematicBusy = true;
    this.hideHotspotCard();

    // 1. 14 Windows slowly light up across the valley
    const windowCount = 14;
    let currentWindow = 1;

    const lightNextWindow = () => {
      if (currentWindow <= windowCount) {
        const winEl = this.sceneContainer.querySelector(`#end-window-${currentWindow}`);
        if (winEl) {
          winEl.classList.add('lit');
          const pitch = 0.8 + (currentWindow / windowCount) * 0.55;
          soundEngine.playWindowChime(pitch);
        }
        currentWindow++;
        setTimeout(lightNextWindow, 380);
      } else {
        // 2. All windows lit! Reveal Ending Overlay Card
        setTimeout(() => {
          if (this.endingOverlay) {
            this.endingOverlay.classList.add('active');

            setTimeout(() => {
              if (this.endingTitle) this.endingTitle.classList.add('revealed');
              setTimeout(() => {
                if (this.endingSub1) this.endingSub1.classList.add('revealed');
                setTimeout(() => {
                  if (this.endingSub2) this.endingSub2.classList.add('revealed');

                  // Verdict based on forbidden interactions count
                  setTimeout(() => {
                    if (this.forbiddenCount >= 2) {
                      if (this.endingVerdict) {
                        this.endingVerdict.textContent = "THE VILLAGE HAS FOUND SOMEONE.";
                        this.endingVerdict.classList.add('revealed');
                      }
                      setTimeout(() => {
                        if (this.endingVerdictSub) {
                          this.endingVerdictSub.textContent = "YOU.";
                          this.endingVerdictSub.classList.add('revealed');
                        }
                        revealReplayButton();
                      }, 1300);
                    } else {
                      if (this.endingVerdict) {
                        this.endingVerdict.textContent = "THE VILLAGE IS STILL WAITING.";
                        this.endingVerdict.classList.add('revealed');
                      }
                      revealReplayButton();
                    }
                  }, 1500);
                }, 1100);
              }, 950);
            }, 750);
          }
        }, 900);
      }
    };

    const revealReplayButton = () => {
      setTimeout(() => {
        if (this.btnEnterAgain) {
          this.btnEnterAgain.classList.add('revealed');
        }
        this.isCinematicBusy = false;
      }, 1600);
    };

    setTimeout(lightNextWindow, 1200);
  }

  // --- LOOP ENDING: RESTART EXPERIENCE ---
  restartExperienceLoop() {
    try {
      localStorage.setItem('kaldhara_loop', 'true');
    } catch (e) {}

    this.isSecondPlaythrough = true;
    this.forbiddenCount = 0;
    this.roadFigureStep = 0;
    this.waitingForLightsOff = false;
    this.streetFigureVanished = false;
    this.houseAtEndDoorOpen = false;
    this.templeDiyaExtinguished = false;
    this.redDoorKnocked = false;
    this.redHouseWindowLightOff = false;
    this.wellConsequenceActive = false;
    this.banyanWomanSeen = false;
    this.banyanConsequenceActive = false;
    this.shrineFlameExtinguished = false;
    this.schoolBlackboardErased = false;
    this.abandonedWindowDarkened = false;
    this.toyVanished = false;
    this.forestNightEventTriggered = false;
    this.isCinematicBusy = false;
    this.isNight = false;

    // Reset Ending UI
    if (this.endingOverlay) {
      this.endingOverlay.classList.remove('active');
      this.endingOverlay.style.transition = 'none';
      this.endingOverlay.style.opacity = '0';
      if (this.endingTitle) this.endingTitle.classList.remove('revealed');
      if (this.endingSub1) this.endingSub1.classList.remove('revealed');
      if (this.endingSub2) this.endingSub2.classList.remove('revealed');
      if (this.endingVerdict) {
        this.endingVerdict.textContent = '';
        this.endingVerdict.classList.remove('revealed');
      }
      if (this.endingVerdictSub) {
        this.endingVerdictSub.textContent = '';
        this.endingVerdictSub.classList.remove('revealed');
      }
      if (this.btnEnterAgain) this.btnEnterAgain.classList.remove('revealed');
      setTimeout(() => {
        if (this.endingOverlay) {
          this.endingOverlay.style.transition = '';
          this.endingOverlay.style.opacity = '';
        }
      }, 100);
    }

    this.updateTheme();
    soundEngine.setAtmosphere('day');
    this.renderOpeningBottle();
  }

  activateReactiveNight() {
    if (!this.isNightReactive) {
      this.isNightReactive = true;
      this.dayNightToggle.classList.add('reactive-night-pill');
      this.nightOption.classList.add('reactive-night');
      soundEngine.playReactiveNightPulse();
    }
  }

  displayDialogueStep() {
    const lines = this.activeDialogue;
    const currentLine = lines[this.dialogueStep];
    const totalSteps = lines.length;

    this.hotspotTitle.textContent = this.activeHotspot.label;
    this.hotspotText.textContent = currentLine;
    this.dialogueActionSlot.innerHTML = '';

    // Dismiss hint
    if (this.dialogueStep < totalSteps - 1) {
      this.dismissHint.textContent = "Tap to continue";
    } else {
      this.dismissHint.textContent = "Tap to close";
    }

    // Step dots indicator
    this.renderStepDots(totalSteps, this.dialogueStep);

    this.hotspotCard.classList.add('visible');
  }

  advanceDialogue() {
    if (this.isCinematicBusy) return;
    if (!this.activeDialogue) {
      this.hideHotspotCard();
      return;
    }

    this.dialogueStep++;

    if (this.dialogueStep < this.activeDialogue.length) {
      soundEngine.playHotspotPing();
      this.displayDialogueStep();
    } else {
      this.hideHotspotCard();
    }
  }

  renderStepDots(total, current) {
    if (total <= 1) {
      this.stepDotsContainer.innerHTML = '';
      return;
    }
    let html = '';
    for (let i = 0; i < total; i++) {
      html += `<span class="step-dot ${i === current ? 'active' : ''}"></span>`;
    }
    this.stepDotsContainer.innerHTML = html;
  }

  hideHotspotCard() {
    this.activeHotspot = null;
    this.activeDialogue = null;
    this.dialogueStep = 0;
    if (this.dialogueActionSlot) this.dialogueActionSlot.innerHTML = '';
    this.sceneContainer.classList.remove('camera-zoom-door', 'camera-zoom-well', 'camera-well-down', 'camera-push-subtle', 'ambient-paused');
    if (!this.isCinematicBusy) {
      this.cinematicOverlay.className = 'cinematic-vignette-overlay';
    }
    this.hotspotCard.classList.remove('visible');
  }
}

// Instantiate engine when DOM is ready
window.addEventListener('DOMContentLoaded', () => {
  window.kaldhara = new KaldharaApp();
});
