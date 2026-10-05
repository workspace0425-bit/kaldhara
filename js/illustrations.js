/**
 * illustrations.js
 * "The Village That Remembers" - Vector Scene Illustrator
 * 
 * Generates layered, cinematic SVG illustrations for:
 * - Opening: The Bottle in Grass
 * - SCENE 01: Village Entrance
 * - SCENE 02: Old Tea Stall
 * - SCENE 03: Village Well
 * - SCENE 04: Temple Road
 * 
 * Supports smooth Day/Night CSS transitions, animated silhouettes, 
 * glowing windows, swaying temple bell, and atmospheric particle layers.
 */

const SceneIllustrations = {
  // Common atmospheric sky, celestial bodies, and environmental effects
  getAtmosphericSky(sceneId) {
    return `
      <!-- Sky Gradients -->
      <defs>
        <linearGradient id="sky-day-${sceneId}" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stop-color="#fae3c6" />
          <stop offset="35%" stop-color="#f2c89d" />
          <stop offset="70%" stop-color="#e2ab7a" />
          <stop offset="100%" stop-color="#c98a58" />
        </linearGradient>
        <linearGradient id="sky-night-${sceneId}" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stop-color="#080a14" />
          <stop offset="40%" stop-color="#101526" />
          <stop offset="75%" stop-color="#181d33" />
          <stop offset="100%" stop-color="#1f1a29" />
        </linearGradient>

        <linearGradient id="sun-glow" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#fffdf5" stop-opacity="0.95" />
          <stop offset="40%" stop-color="#fedaa2" stop-opacity="0.6" />
          <stop offset="100%" stop-color="#f39c59" stop-opacity="0" />
        </linearGradient>
        <linearGradient id="moon-glow" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#ffffff" stop-opacity="0.95" />
          <stop offset="45%" stop-color="#cbe3fb" stop-opacity="0.5" />
          <stop offset="100%" stop-color="#55759e" stop-opacity="0" />
        </linearGradient>

        <filter id="glow-blur" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="4" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
        <linearGradient id="fog-sweep-grad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stop-color="#1e2c40" stop-opacity="0" />
          <stop offset="25%" stop-color="#3d5678" stop-opacity="0.75" />
          <stop offset="75%" stop-color="#3d5678" stop-opacity="0.75" />
          <stop offset="100%" stop-color="#1e2c40" stop-opacity="0" />
        </linearGradient>
      </defs>

      <!-- Background Sky Rectangles -->
      <rect class="sky-bg sky-day" width="100%" height="100%" fill="url(#sky-day-${sceneId})" />
      <rect class="sky-bg sky-night" width="100%" height="100%" fill="url(#sky-night-${sceneId})" />

      <!-- Celestial Bodies & Atmosphere (DAY) -->
      <g class="celestial-day day-only">
        <!-- Warm Radiant Sun -->
        <circle cx="76%" cy="17%" r="48" fill="url(#sun-glow)" filter="url(#glow-blur)" />
        <circle cx="76%" cy="17%" r="22" fill="#fffaf0" />
        
        <!-- Soft Golden Sunbeams -->
        <polygon points="304,120 0,650 90,650" fill="#fff7e2" opacity="0.09" />
        <polygon points="304,120 130,700 250,700" fill="#fff7e2" opacity="0.06" />

        <!-- Soaring Silhouetted Birds in Distance -->
        <g opacity="0.55" fill="#4d301b">
          <path d="M90 120 Q96 112 102 120 Q108 112 114 120 Q106 117 102 123 Q98 117 90 120 Z" class="flutter-bird-1" />
          <path d="M125 105 Q130 98 135 105 Q140 98 145 105 Q138 102 135 107 Q132 102 125 105 Z" class="flutter-bird-2" />
          <path d="M150 135 Q154 129 158 135 Q162 129 166 135 Q160 133 158 137 Q156 133 150 135 Z" />
        </g>

        <!-- Floating Golden Dust Motes -->
        <circle cx="180" cy="380" r="1.5" fill="#fff7d6" opacity="0.6" class="floating-dust-1" />
        <circle cx="240" cy="450" r="2" fill="#fff7d6" opacity="0.5" class="floating-dust-2" />
        <circle cx="110" cy="520" r="1.5" fill="#fff7d6" opacity="0.6" class="floating-dust-3" />
        <circle cx="290" cy="320" r="1.8" fill="#fff7d6" opacity="0.45" class="floating-dust-1" />
      </g>

      <!-- Celestial Bodies & Atmosphere (NIGHT) -->
      <g class="celestial-night night-only">
        <!-- Cold Silver Moon with Crescent Shadow -->
        <circle cx="24%" cy="16%" r="50" fill="url(#moon-glow)" filter="url(#glow-blur)" />
        <circle cx="24%" cy="16%" r="21" fill="#f0f6ff" />
        <circle cx="28%" cy="13%" r="19" fill="url(#sky-night-${sceneId})" />
        
        <!-- Night Stars -->
        <circle cx="14%" cy="8%" r="1.6" fill="#fff" opacity="0.8" class="twinkle-fast" />
        <circle cx="44%" cy="11%" r="1.2" fill="#d9e8ff" opacity="0.6" class="twinkle-slow" />
        <circle cx="64%" cy="6%" r="1.8" fill="#fff" opacity="0.85" class="twinkle-fast" />
        <circle cx="82%" cy="13%" r="1.3" fill="#cbe2ff" opacity="0.7" class="twinkle-slow" />
        <circle cx="91%" cy="21%" r="1.4" fill="#fff" opacity="0.75" class="twinkle-fast" />
        <circle cx="36%" cy="24%" r="1.1" fill="#fff" opacity="0.5" />
        <circle cx="56%" cy="19%" r="1.3" fill="#d0e4ff" opacity="0.65" />

        <!-- Wandering Fireflies -->
        <circle cx="120" cy="460" r="2.5" fill="#d8ff7a" opacity="0.7" class="twinkle-slow" filter="url(#glow-blur)" />
        <circle cx="270" cy="510" r="2.8" fill="#d8ff7a" opacity="0.75" class="twinkle-fast" filter="url(#glow-blur)" />
        <circle cx="190" cy="390" r="2.2" fill="#d8ff7a" opacity="0.65" class="twinkle-slow" filter="url(#glow-blur)" />

        <!-- Drifting Cold Violet Mist Layer -->
        <ellipse cx="200" cy="480" rx="230" ry="35" fill="#1e2538" opacity="0.3" class="fog-drift" />
      </g>
    `;
  },

  // 1. OPENING: The Bottle in Grass
  renderBottleScene(isSecondPlaythrough = false) {
    const bottleTransform = isSecondPlaythrough 
      ? 'translate(135, 420) scale(1.25) rotate(-3)' 
      : 'translate(140, 520) rotate(-15)';
    const stonePedestal = isSecondPlaythrough ? `
      <!-- Weathered Stone Threshold in Foreground (Second Playthrough) -->
      <g id="bottle-stone-pedestal">
        <polygon points="105,530 285,520 305,570 85,580" fill="#0c1117" stroke="#253545" stroke-width="1.8" />
        <polygon points="85,580 305,570 295,610 75,620" fill="#070a0e" />
        <line x1="120" y1="535" x2="270" y2="526" stroke="#486580" stroke-width="1" opacity="0.6" />
      </g>
    ` : '';
    return `
      <svg viewBox="0 0 400 700" class="scene-svg bottle-hero-svg" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="sky-bottle-dark" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stop-color="#030408" />
            <stop offset="40%" stop-color="#080c16" />
            <stop offset="75%" stop-color="#0f1520" />
            <stop offset="100%" stop-color="#0b110e" />
          </linearGradient>
          <filter id="glow-blur-bottle" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="3.5" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        <!-- Almost-Dark Sky Background -->
        <rect width="100%" height="100%" fill="url(#sky-bottle-dark)" />

        <!-- Distant Faint Stars in the Dark Sky -->
        <circle cx="18%" cy="10%" r="1.4" fill="#ffffff" opacity="0.7" class="twinkle-fast" />
        <circle cx="46%" cy="16%" r="1.2" fill="#cbe3ff" opacity="0.5" class="twinkle-slow" />
        <circle cx="76%" cy="9%" r="1.6" fill="#ffffff" opacity="0.75" class="twinkle-fast" />
        <circle cx="86%" cy="22%" r="1.1" fill="#ffffff" opacity="0.45" />
        <circle cx="30%" cy="26%" r="1.0" fill="#ffffff" opacity="0.35" />

        <!-- Distant Crescent Moon shrouded in twilight haze -->
        <circle cx="78%" cy="13%" r="32" fill="#88afdb" opacity="0.1" filter="url(#glow-blur-bottle)" />
        <circle cx="78%" cy="13%" r="15" fill="#d9ebfc" opacity="0.6" />
        <circle cx="81%" cy="11%" r="14" fill="#080c16" />

        <!-- Floating Fireflies drifting near the ground -->
        <circle cx="80" cy="560" r="2.8" fill="#e8ff70" opacity="0.8" class="twinkle-slow" filter="url(#glow-blur-bottle)" />
        <circle cx="315" cy="510" r="3.2" fill="#e8ff70" opacity="0.75" class="twinkle-fast" filter="url(#glow-blur-bottle)" />
        <circle cx="120" cy="460" r="2.2" fill="#e8ff70" opacity="0.65" class="twinkle-slow" filter="url(#glow-blur-bottle)" />
        <circle cx="280" cy="610" r="2.6" fill="#e8ff70" opacity="0.7" class="twinkle-fast" filter="url(#glow-blur-bottle)" />
        
        <!-- Distant Silhouetted Hills -->
        <path fill="#060810" d="M0 450 Q90 400 200 430 T400 420 L400 700 L0 700 Z" />
        
        <!-- Midground Overgrown Ridge -->
        <path fill="#05070c" d="M0 490 Q140 460 260 500 T400 485 L400 700 L0 700 Z" />

        <!-- Foreground Ground Mound -->
        <path fill="#040608" d="M-20 550 Q120 520 220 560 T420 540 L420 720 L-20 720 Z" />

        ${stonePedestal}

        <!-- Background Tall Grass Blades (Swaying with CSS) -->
        <g fill="#09120a" class="grass-sway-back">
          <path class="sway-blade-1" d="M40 640 Q45 520 65 465 Q55 520 50 640 Z" />
          <path class="sway-blade-2" d="M70 650 Q85 535 110 495 Q95 550 85 650 Z" />
          <path class="sway-blade-3" d="M305 650 Q285 525 255 475 Q280 530 315 650 Z" />
          <path class="sway-blade-1" d="M340 660 Q335 545 315 505 Q330 560 350 660 Z" />
        </g>

        <!-- The Ancient Glass Bottle -->
        <g id="interactive-bottle-group" class="interactive-bottle-hero" transform="${bottleTransform}">
          <!-- Ambient Glow around Glass -->
          <ellipse cx="60" cy="20" rx="85" ry="42" fill="#7acbd8" opacity="0.12" class="bottle-glow" />

          <!-- Cast Ground Shadow -->
          <ellipse cx="60" cy="42" rx="72" ry="16" fill="#020305" opacity="0.75" />

          <!-- Outer Glass Body -->
          <path d="M10 15 C10 0, 30 -5, 45 5 L105 10 C125 12, 135 25, 135 38 C135 52, 125 62, 105 65 L45 68 C30 78, 10 72, 10 55 Z" 
                fill="#1c3038" opacity="0.75" stroke="#68b9c7" stroke-width="2.2" />

          <!-- Glass Inner Depth -->
          <path d="M15 25 C15 15, 32 10, 48 18 L100 22 C118 24, 128 32, 128 40 C128 48, 118 54, 100 56 L48 58 C32 64, 15 55, 15 42 Z" 
                fill="#0f2126" opacity="0.85" />
          
          <!-- Rolled Paper Inside the Bottle (With animation hook) -->
          <g id="bottle-scroll-inside" class="rolled-scroll-inside">
            <path d="M32 30 C32 24, 38 22, 44 24 L96 28 C102 29, 104 36, 104 42 C104 48, 100 52, 94 51 L42 46 C36 45, 32 38, 32 30 Z" 
                  fill="#eed2a4" stroke="#8b5a2b" stroke-width="1.2" />
            <!-- Red Sealing Cord -->
            <path d="M68 26 L66 50" stroke="#a31924" stroke-width="3" />
            <circle cx="67" cy="38" r="4.5" fill="#750c14" />
            <!-- Scroll Rolled Edges -->
            <ellipse cx="36" cy="35" rx="4" ry="9" fill="#d9b67c" stroke="#6e451c" stroke-width="1" />
            <ellipse cx="98" cy="40" rx="3.5" ry="8" fill="#d9b67c" stroke="#6e451c" stroke-width="1" />
          </g>

          <!-- Bottle Neck & Mouth -->
          <path d="M10 25 L-12 28 C-16 29, -18 36, -18 42 C-18 48, -16 54, -12 55 L10 58" 
                fill="#243f47" stroke="#68b9c7" stroke-width="2.2" />
          <ellipse cx="-16" cy="41.5" rx="4" ry="11" fill="#13272c" stroke="#7acbd8" stroke-width="2" />

          <!-- Weathered Cork Stopper (Animated pop-off) -->
          <path id="bottle-cork-stopper" class="bottle-cork" d="M-17 33 L-28 35 C-32 36, -32 46, -28 47 L-17 49 Z" fill="#9c7a4c" stroke="#523d21" stroke-width="1.5" />

          <!-- Glass Specular Highlight Reflection -->
          <path d="M22 18 L104 22" stroke="#ffffff" stroke-width="2.5" stroke-linecap="round" opacity="0.6" />
          <path d="M30 25 L95 28" stroke="#ffffff" stroke-width="1" stroke-linecap="round" opacity="0.35" />
        </g>

        <!-- Foreground Wild Grass Covering Bottle Base -->
        <g fill="#070e08" class="grass-sway-front">
          <path class="sway-blade-2" d="M100 700 Q120 595 135 545 Q125 605 115 700 Z" />
          <path class="sway-blade-1" d="M130 700 Q150 575 185 530 Q160 590 145 700 Z" />
          <path class="sway-blade-3" d="M220 700 Q240 615 270 555 Q245 625 235 700 Z" />
          <path class="sway-blade-2" d="M260 700 Q280 565 310 515 Q285 580 275 700 Z" />
        </g>

        <!-- Pulsing Tap Prompt -->
        <g id="tap-bottle-beacon" transform="translate(195, 545)" class="tap-hint-beacon">
          <circle cx="0" cy="0" r="32" fill="none" stroke="#f6d365" stroke-width="2" opacity="0.8" class="pulse-ring" />
          <circle cx="0" cy="0" r="12" fill="#f6d365" opacity="0.85" class="pulse-dot" />
          <text x="0" y="52" text-anchor="middle" fill="#fae6be" font-size="12" letter-spacing="3" font-family="'Cinzel', serif" font-weight="700">TAP THE BOTTLE</text>
        </g>
      </svg>
    `;
  },

  // 2. SCENE 01: Village Entrance
  renderEntranceScene() {
    return `
      <svg viewBox="0 0 400 700" class="scene-svg" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
        ${this.getAtmosphericSky('entrance')}

        <!-- Distant Dry Fields & Aravalli Ridges -->
        <path d="M0 430 Q100 395 200 415 T400 405 L400 460 L0 460 Z" class="landscape-fill" opacity="0.7" />
        <path d="M0 445 Q130 420 260 440 T400 430 L400 480 L0 480 Z" class="ridge-fill" opacity="0.8" />

        <!-- Distant Temple Spire Silhouette on Horizon -->
        <g class="distant-temple-silhouette" transform="translate(200, 375)">
          <polygon points="0,40 -6,40 -1,15 -1,0 1,0 1,15 6,40" fill="#382619" />
          <line x1="0" y1="0" x2="0" y2="-6" stroke="#c99738" stroke-width="1.5" />
          <circle cx="0" cy="-6" r="1.5" fill="#c99738" />
        </g>

        <!-- Central Dusty Pathway stretching into the village -->
        <polygon class="dirt-road" points="160,410 240,410 375,700 25,700" />
        <path d="M190 410 Q195 530 175 700" stroke="#795535" stroke-width="2" opacity="0.25" stroke-dasharray="10 15" />
        <path d="M210 410 Q215 530 235 700" stroke="#795535" stroke-width="2" opacity="0.25" stroke-dasharray="8 12" />

        <!-- Village Houses Flanking the Path (Left and Right) -->
        <!-- Left Village House Haveli Wall -->
        <g class="village-house-left" transform="translate(0, 240)">
          <!-- Whitewash/Earthen Wall -->
          <polygon points="0,150 90,130 90,260 0,280" class="haveli-wall" />
          <!-- Earthen Brick Exposure Patch -->
          <path d="M15 160 Q35 150 45 170 Q35 190 10 180 Z" class="brick-patch" />
          <!-- Wooden Roof Eaves & Clay Tiles -->
          <polygon points="-10,150 98,128 92,118 -10,140" class="wood-eaves" />
          <!-- Wooden Window Grate -->
          <rect x="25" y="195" width="30" height="35" rx="2" class="window-frame" />
          <rect x="28" y="198" width="24" height="29" fill="#0d0e14" />
          <line x1="40" y1="198" x2="40" y2="227" stroke="#482e1c" stroke-width="2" />
          <!-- Small Clay Pot at Corner -->
          <ellipse cx="78" cy="256" rx="8" ry="4" fill="#000" opacity="0.3" />
          <ellipse cx="78" cy="250" rx="7" ry="6" fill="#8f492b" stroke="#522310" stroke-width="1.2" />
        </g>

        <!-- Right Village House Haveli Wall -->
        <g class="village-house-right" transform="translate(310, 250)">
          <!-- Mud/Brick Wall -->
          <polygon points="0,125 90,145 90,270 0,250" class="haveli-wall" />
          <!-- Brick Exposure -->
          <path d="M40 160 Q70 150 80 180 Q60 200 35 190 Z" class="brick-patch" />
          <!-- Eaves -->
          <polygon points="-5,123 100,143 100,133 -5,113" class="wood-eaves" />
        </g>

        <!-- Large Mature Peepal / Banyan Tree Canopy Arching Overhead -->
        <g class="mature-tree-canopy">
          <!-- Gnarled Trunk on Left behind arch -->
          <path d="M25 430 Q35 280 60 200 Q75 160 90 140" stroke="#3d2a1b" stroke-width="18" fill="none" stroke-linecap="round" />
          <path d="M60 200 Q120 150 200 130" stroke="#322215" stroke-width="10" fill="none" stroke-linecap="round" />
          <!-- Foliage Canopy -->
          <path d="M-20 170 C-30 80, 60 40, 150 60 C230 40, 320 80, 310 160 C300 210, 240 220, 200 200 C150 220, 50 220, 10 190 Z" 
                class="banyan-canopy" />
          <circle cx="80" cy="110" r="75" class="banyan-canopy-lobe" />
          <circle cx="190" cy="90" r="85" class="banyan-canopy-lobe" />
        </g>

        <!-- The Weathered Stone Gate of Kaldhara -->
        <g class="ancient-archway">
          <!-- Left Stone Pillar -->
          <rect x="70" y="190" width="44" height="290" class="stone-pillar" />
          <rect x="65" y="180" width="54" height="15" class="stone-cap" />
          <rect x="62" y="475" width="60" height="18" class="stone-base" />
          <line x1="82" y1="210" x2="82" y2="455" stroke="#000" opacity="0.2" stroke-width="2" />
          <path d="M78 260 L92 280 L88 310" stroke="#000" opacity="0.4" stroke-width="2" fill="none" />

          <!-- Right Stone Pillar -->
          <rect x="286" y="190" width="44" height="290" class="stone-pillar" />
          <rect x="281" y="180" width="54" height="15" class="stone-cap" />
          <rect x="278" y="475" width="60" height="18" class="stone-base" />
          <path d="M315 240 L302 270 L310 320" stroke="#000" opacity="0.4" stroke-width="2" fill="none" />

          <!-- Arch Beam -->
          <path d="M60 180 L340 180 L325 135 Q200 110 75 135 Z" class="stone-arch" />
          <!-- Plaque -->
          <rect x="120" y="138" width="160" height="32" rx="4" class="stone-plaque" />
          <text x="200" y="160" text-anchor="middle" font-family="'Cinzel', serif" font-weight="700" font-size="16" letter-spacing="4" class="arch-inscription">KALDHARA</text>
          <text x="200" y="169" text-anchor="middle" font-family="'Cinzel', serif" font-size="8" letter-spacing="2" opacity="0.6" class="arch-inscription">1978</text>
          
          <!-- Hanging Saffron Cloth Fluttering in Wind -->
          <g id="hotspot-hanging-cloth" class="interactive-object" transform="translate(142, 180)">
            <path d="M0 0 Q4 35 -3 70 Q0 35 4 0" fill="#d97724" class="flutter-slow" />
            <path d="M6 0 Q10 25 4 50 Q7 25 10 0" fill="#f59e0b" opacity="0.75" class="flutter-slow" />
          </g>
        </g>

        <!-- Left Foreground: Cracked Boundary Milestone -->
        <g id="hotspot-stone-marker" class="interactive-object" transform="translate(72, 470)">
          <ellipse cx="28" cy="112" rx="26" ry="8" fill="#000" opacity="0.35" />
          <path d="M0 45 C0 20, 15 0, 30 0 C45 0, 60 20, 60 45 L60 110 L0 110 Z" class="milestone-stone" />
          <text x="30" y="46" text-anchor="middle" font-family="'Cinzel', serif" font-weight="700" font-size="10.5" letter-spacing="1" fill="#442a15">KALDHARA</text>
          <text x="30" y="58" text-anchor="middle" font-family="'Cinzel', serif" font-size="8" letter-spacing="1" fill="#442a15">1978</text>
          <!-- Scratched marks -->
          <line x1="12" y1="70" x2="48" y2="70" stroke="#772b22" stroke-width="3.5" />
          <line x1="10" y1="78" x2="50" y2="78" stroke="#772b22" stroke-width="2.5" />
        </g>

        <!-- Right Foreground: Vintage Roadster Bicycle Leaning Against Wall -->
        <g id="hotspot-abandoned-cycle" class="interactive-object" transform="translate(265, 490) rotate(6)">
          <ellipse cx="65" cy="98" rx="60" ry="12" fill="#000" opacity="0.4" />
          <!-- Wheels -->
          <circle cx="28" cy="68" r="28" stroke="#4a3728" stroke-width="3" fill="none" />
          <circle cx="102" cy="63" r="28" stroke="#4a3728" stroke-width="3" fill="none" />
          <!-- Spokes -->
          <line x1="28" y1="40" x2="28" y2="96" stroke="#3b2b1f" stroke-width="1.2" />
          <line x1="0" y1="68" x2="56" y2="68" stroke="#3b2b1f" stroke-width="1.2" />
          <line x1="102" y1="35" x2="102" y2="91" stroke="#3b2b1f" stroke-width="1.2" />
          <line x1="74" y1="63" x2="130" y2="63" stroke="#3b2b1f" stroke-width="1.2" />
          <!-- Frame -->
          <path d="M28 68 L62 68 L96 40 L52 40 Z" stroke="#684a32" stroke-width="3.5" fill="none" />
          <line x1="62" y1="68" x2="52" y2="40" stroke="#684a32" stroke-width="3" />
          <line x1="52" y1="40" x2="50" y2="28" stroke="#684a32" stroke-width="3" />
          <path d="M96 40 L92 26 L82 24 M92 26 L102 24" stroke="#523924" stroke-width="3" fill="none" />
          <ellipse cx="48" cy="26" rx="8" ry="3.5" fill="#2d1b10" />
        </g>

        <!-- Supernatural Night Silhouette at the Threshold -->
        <g class="night-only entrance-apparition">
          <ellipse cx="204" cy="415" rx="16" ry="5" fill="#000" opacity="0.75" />
          <path d="M198 415 Q195 375 201 355 Q205 345 207 355 Q211 375 208 415 Z" fill="#090b14" opacity="0.85" />
          <circle cx="204" cy="345" r="4.5" fill="#090b14" opacity="0.85" />
        </g>
      </svg>
    `;
  },

  // 3. SCENE 02: Old Tea Stall
  renderTeaStallScene() {
    return `
      <svg viewBox="0 0 400 700" class="scene-svg" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
        ${this.getAtmosphericSky('teastall')}

        <!-- Distant Village Roofs -->
        <polygon points="0,430 80,400 170,435 0,445" class="distant-roofs" />
        <polygon points="260,425 340,395 400,420 400,440 260,440" class="distant-roofs" />

        <!-- Ground & Dusty Yard -->
        <rect x="0" y="430" width="400" height="270" class="dirt-road" />

        <!-- The Weathered Wooden Tea Stall -->
        <g class="chai-stall" transform="translate(20, 210)">
          <!-- Main Wooden Counter & Wall Backing -->
          <rect x="20" y="170" width="220" height="150" class="wood-dark" />
          <line x1="20" y1="210" x2="240" y2="210" stroke="#000" opacity="0.3" stroke-width="2" />
          <line x1="20" y1="260" x2="240" y2="260" stroke="#000" opacity="0.3" stroke-width="2" />

          <!-- Overhanging Corrugated Tin Roof -->
          <g id="hotspot-tin-roof" class="interactive-object">
            <polygon points="5,150 260,110 275,175 10,185" class="tin-roof" />
            <line x1="30" y1="147" x2="33" y2="183" stroke="#222" opacity="0.4" stroke-width="2" />
            <line x1="75" y1="140" x2="78" y2="181" stroke="#222" opacity="0.4" stroke-width="2" />
            <line x1="125" y1="132" x2="128" y2="178" stroke="#222" opacity="0.4" stroke-width="2" />
            <line x1="180" y1="123" x2="183" y2="175" stroke="#222" opacity="0.4" stroke-width="2" />
            <line x1="230" y1="115" x2="233" y2="172" stroke="#222" opacity="0.4" stroke-width="2" />
          </g>

          <!-- Wooden Support Posts -->
          <rect x="18" y="160" width="12" height="230" class="wood-post" />
          <rect x="235" y="150" width="12" height="240" class="wood-post" />

          <!-- Hand-painted Wooden Board: 'CHAI' -->
          <rect x="65" y="172" width="110" height="28" rx="3" class="wood-sign" />
          <text x="120" y="191" text-anchor="middle" font-family="'Cinzel', serif" font-weight="700" font-size="14" letter-spacing="3" fill="#2d1206">CHAI STALL</text>

          <!-- Hearth Stove & Brass Kettle -->
          <g transform="translate(45, 175)">
            <path d="M0 65 Q25 45 50 65 L50 85 L0 85 Z" class="mud-stove" />
            <!-- Brass Kettle -->
            <ellipse cx="25" cy="52" rx="17" ry="14" class="brass-kettle" />
            <path d="M12 40 L38 40 L34 32 L16 32 Z" class="brass-kettle-lid" />
            <circle cx="25" cy="30" r="3" fill="#cf9340" />
            <path d="M10 50 Q-4 44 4 34" stroke="#87581f" stroke-width="4.5" fill="none" stroke-linecap="round" />
            <path d="M14 36 C10 14, 40 14, 36 36" stroke="#42290d" stroke-width="3" fill="none" />
            <!-- Night Steam Wisp -->
            <path class="night-only wisp-steam" d="M3 32 Q-8 15 2 0 T-2 -25" stroke="#d5e8f5" stroke-width="2.5" fill="none" opacity="0.6" />
          </g>

          <!-- Metal Tea Glass on Counter -->
          <g id="hotspot-metal-glass" class="interactive-object" transform="translate(130, 222)">
            <ellipse cx="14" cy="28" rx="12" ry="4" fill="#000" opacity="0.3" />
            <!-- Fluted Steel Chai Glass -->
            <path d="M6 8 L22 8 L19 28 L9 28 Z" fill="#b0bec5" stroke="#455a64" stroke-width="1.2" />
            <ellipse cx="14" cy="8" rx="8" ry="2.5" fill="#78909c" />
            <!-- Tea Liquid Inside -->
            <ellipse cx="14" cy="11" rx="7" ry="2" fill="#5d4037" />
            <!-- Fluting Glass Ridges -->
            <line x1="11" y1="12" x2="11" y2="26" stroke="#cfd8dc" stroke-width="1" />
            <line x1="17" y1="12" x2="17" y2="26" stroke="#cfd8dc" stroke-width="1" />
            <!-- Night: Warm Steam rising from the glass -->
            <path class="night-only wisp-steam" d="M14 6 Q10 -5 16 -16" stroke="#d5e8f5" stroke-width="1.8" fill="none" opacity="0.65" />
          </g>
        </g>

        <!-- The Weathered Wooden Chair & NIGHT SILHOUETTE -->
        <g id="hotspot-tea-chair" class="interactive-object" transform="translate(230, 360)">
          <!-- Chair Shadow -->
          <ellipse cx="50" cy="180" rx="42" ry="16" fill="#000" opacity="0.45" />

          <!-- DAY: The Empty Wooden Chair -->
          <g class="chair-structure">
            <line x1="25" y1="60" x2="25" y2="175" stroke="#5a3d28" stroke-width="6" stroke-linecap="round" />
            <line x1="65" y1="60" x2="65" y2="175" stroke="#5a3d28" stroke-width="6" stroke-linecap="round" />
            <rect x="22" y="68" width="46" height="10" rx="2" fill="#755034" />
            <rect x="22" y="88" width="46" height="10" rx="2" fill="#755034" />
            <polygon points="15,115 75,115 85,130 5,130" fill="#8c6140" stroke="#482e1c" stroke-width="2" />
            <line x1="8" y1="130" x2="6" y2="185" stroke="#5a3d28" stroke-width="6" stroke-linecap="round" />
            <line x1="82" y1="130" x2="84" y2="185" stroke="#5a3d28" stroke-width="6" stroke-linecap="round" />
            <line x1="12" y1="155" x2="78" y2="155" stroke="#482e1c" stroke-width="3" />
          </g>

          <!-- NIGHT ONLY: Subtle, Ambiguous Sitting Silhouette -->
          <g class="night-only customer-silhouette">
            <!-- Shadow Aura -->
            <ellipse cx="48" cy="115" rx="35" ry="55" fill="#07080e" opacity="0.65" filter="url(#glow-blur)" />
            <!-- Torso Sitting Upright -->
            <path d="M22 135 C15 110, 18 85, 32 78 C38 75, 58 75, 64 78 C78 85, 81 110, 74 135 Z" fill="#040509" />
            <!-- Head & Draped Shawl/Turban -->
            <circle cx="48" cy="52" r="18" fill="#040509" />
            <path d="M30 50 Q48 30 66 50 Q60 38 48 38 Q36 38 30 50 Z" fill="#0c0e18" />
            <!-- Eyes reflecting faint moonlight -->
            <circle cx="43" cy="52" r="1.4" fill="#9dbbdc" opacity="0.75" class="twinkle-slow" />
            <circle cx="53" cy="52" r="1.4" fill="#9dbbdc" opacity="0.75" class="twinkle-slow" />
            <!-- Draped knees resting toward table -->
            <path d="M12 132 C10 155, 30 160, 48 160 C66 160, 86 155, 84 132 Z" fill="#030407" />
          </g>
        </g>
      </svg>
    `;
  },

  // 4. SCENE 03: Village Well
  renderWellScene() {
    return `
      <svg viewBox="0 0 400 700" class="scene-svg" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
        ${this.getAtmosphericSky('well')}

        <!-- Distant Ruined Courtyard Walls -->
        <polygon points="0,410 110,380 210,400 320,375 400,400 400,430 0,430" class="distant-roofs" />
        <rect x="0" y="420" width="400" height="280" class="dirt-road" />

        <!-- Cracked Earth Patterns Around the Well -->
        <g stroke="#3a2717" stroke-width="1.5" opacity="0.35" fill="none">
          <path d="M60 520 L90 540 L80 570 M90 540 L130 545" />
          <path d="M300 530 L320 560 L350 575 M320 560 L310 595" />
          <path d="M170 630 L200 655 L240 650 M200 655 L190 685" />
        </g>

        <!-- The Ancient Stone Village Well -->
        <g class="village-well" transform="translate(85, 230)">
          <!-- Wooden Pulley Gallows Frame -->
          <rect x="25" y="60" width="16" height="250" class="wood-dark" />
          <rect x="19" y="50" width="28" height="14" class="wood-post" />
          <rect x="190" y="60" width="16" height="250" class="wood-dark" />
          <rect x="184" y="50" width="28" height="14" class="wood-post" />
          <polygon points="10,50 220,50 225,74 5,74" class="wood-post" />

          <!-- Center Wooden Pulley Wheel -->
          <circle cx="115" cy="85" r="18" fill="#4a301c" stroke="#241407" stroke-width="3" />
          <circle cx="115" cy="85" r="5" fill="#150a03" />

          <!-- Hemp Rope -->
          <g id="hotspot-well-rope" class="interactive-object">
            <line x1="104" y1="85" x2="104" y2="245" stroke="#baa177" stroke-width="4.5" stroke-dasharray="6 3" />
            <line x1="126" y1="85" x2="135" y2="140" stroke="#baa177" stroke-width="3.5" />
          </g>

          <!-- Circular Stone Well Parapet -->
          <g id="hotspot-well-rim" class="interactive-object">
            <ellipse cx="115" cy="310" rx="100" ry="38" fill="#000" opacity="0.45" />

            <!-- Well Stone Wall Body -->
            <path d="M15 220 C15 270, 215 270, 215 220 L215 295 C215 345, 15 345, 15 295 Z" class="stone-well-wall" />
            
            <!-- Stone Block Joints -->
            <path d="M35 250 C70 265, 160 265, 195 250" stroke="#000" opacity="0.3" stroke-width="2" fill="none" />
            <path d="M25 285 C70 305, 160 305, 205 285" stroke="#000" opacity="0.3" stroke-width="2" fill="none" />
            <line x1="85" y1="225" x2="85" y2="255" stroke="#000" opacity="0.25" stroke-width="2" />
            <line x1="145" y1="225" x2="145" y2="255" stroke="#000" opacity="0.25" stroke-width="2" />

            <!-- Rim Lip -->
            <ellipse cx="115" cy="220" rx="100" ry="32" class="stone-well-rim" />

            <!-- Bottomless Dark Void -->
            <ellipse cx="115" cy="220" rx="84" ry="24" class="well-void" />
            
            <!-- Deep Water Creepy Reflection (Subtle pale gaze looking upward from inside) -->
            <g id="well-deep-reflection" class="well-subtle-reflection" opacity="0">
              <ellipse cx="115" cy="220" rx="74" ry="21" fill="#040912" />
              <!-- Face silhouette looking up from water depths -->
              <ellipse cx="115" cy="219" rx="20" ry="12" fill="#1b2838" opacity="0.7" filter="url(#glow-blur)" />
              <ellipse cx="115" cy="217" rx="14" ry="9" fill="#2a3d52" opacity="0.6" />
              <!-- Two faint pale eyes staring upward through murky depth -->
              <circle cx="108" cy="216" r="2.2" fill="#9ec5e8" opacity="0.85" />
              <circle cx="122" cy="216" r="2.2" fill="#9ec5e8" opacity="0.85" />
              <circle cx="108" cy="216" r="1.1" fill="#040912" />
              <circle cx="122" cy="216" r="1.1" fill="#040912" />
              <!-- Cold parted mouth -->
              <ellipse cx="115" cy="223" rx="5" ry="2.2" fill="#09131c" stroke="#486985" stroke-width="0.8" />
              <!-- Water ripple rings distorting reflection -->
              <ellipse cx="115" cy="220" rx="34" ry="9" stroke="#486d91" stroke-width="1.2" fill="none" opacity="0.45" />
              <ellipse cx="115" cy="220" rx="52" ry="14" stroke="#365370" stroke-width="1" fill="none" opacity="0.3" />
            </g>

            <!-- Night Water Reflection -->
            <ellipse cx="115" cy="224" rx="30" ry="8" fill="#4d6f8a" opacity="0.25" class="night-only well-reflection" />

            <!-- Subtle consequence: Dark blood mark on rim -->
            <g id="well-blood-mark" opacity="0">
              <path d="M140 226 Q142 245 139 255" stroke="#75060d" stroke-width="3" stroke-linecap="round" fill="none" />
              <circle cx="139" cy="256" r="2.5" fill="#540409" />
              <path d="M90 224 Q88 238 91 248" stroke="#75060d" stroke-width="2.5" stroke-linecap="round" fill="none" />
            </g>

            <!-- Subtle consequence: Lingering cold fog above opening -->
            <ellipse id="well-lingering-mist" cx="115" cy="216" rx="60" ry="18" fill="#1b2a3a" opacity="0" class="fog-drift" filter="url(#glow-blur)" />
          </g>
        </g>

        <!-- Weathered Red Inscription: 'DO NOT USE' -->
        <g id="hotspot-well-warning" class="interactive-object" transform="translate(130, 485)">
          <rect x="-10" y="-12" width="105" height="24" rx="3" fill="#2b1a13" stroke="#543725" stroke-width="1.2" opacity="0.85" />
          <text x="42" y="4" text-anchor="middle" font-family="'Cinzel', serif" font-weight="700" font-size="11" letter-spacing="2" fill="#c42828">DO NOT USE</text>
        </g>

        <!-- NIGHT ONLY: Faint Shadowy Silhouette Standing Beside the Well -->
        <g class="night-only well-apparition" transform="translate(60, 360)">
          <!-- Ground Shadow -->
          <ellipse cx="38" cy="175" rx="26" ry="10" fill="#000" opacity="0.7" />
          <!-- Leaning Silhouette Body -->
          <path d="M18 170 C15 120, 22 70, 32 45 C38 42, 48 42, 54 48 C64 80, 58 130, 56 170 Z" fill="#06070d" />
          <!-- Hooded Cloak -->
          <path d="M26 44 C26 22, 50 18, 54 36 C56 50, 48 64, 34 60 Z" fill="#090c14" />
          <!-- Arm Reaching Toward Well Rim -->
          <path d="M46 72 Q68 95 82 105" stroke="#06070d" stroke-width="6.5" stroke-linecap="round" fill="none" />
          <path d="M82 105 L88 107 M82 107 L87 111" stroke="#8da8c7" stroke-width="1.8" stroke-linecap="round" />
          <ellipse cx="38" cy="90" rx="35" ry="75" fill="#405575" opacity="0.15" filter="url(#glow-blur)" />
        </g>
      </svg>
    `;
  },

  // 5. SCENE 04: Temple Road
  renderTempleScene() {
    return `
      <svg viewBox="0 0 400 700" class="scene-svg" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
        ${this.getAtmosphericSky('temple')}

        <!-- Stone Temple Platform & Ground -->
        <rect x="0" y="440" width="400" height="260" class="dirt-road" />

        <!-- Ancient Mandir Structure -->
        <g class="temple-complex" transform="translate(50, 95)">
          <!-- Temple Spire (Shikhara) -->
          <path d="M90 145 Q150 10 150 0 Q150 10 210 145 Z" class="temple-stone-spire" />
          <circle cx="150" cy="-6" r="6" fill="#c99738" stroke="#684a14" stroke-width="1.5" />
          <line x1="150" y1="-6" x2="150" y2="-22" stroke="#c99738" stroke-width="2.5" />
          <path d="M144 -16 Q150 -12 156 -16" stroke="#c99738" stroke-width="2" fill="none" />
          <line x1="120" y1="50" x2="180" y2="50" stroke="#000" opacity="0.3" stroke-width="3" />
          <line x1="105" y1="90" x2="195" y2="90" stroke="#000" opacity="0.3" stroke-width="3" />

          <!-- Temple Roof Lintel -->
          <rect x="40" y="145" width="220" height="25" class="temple-lintel" />
          <polygon points="30,170 270,170 255,185 45,185" class="temple-stone-dark" />

          <!-- Carved Stone Pillars -->
          <rect x="52" y="185" width="18" height="195" class="temple-pillar" />
          <rect x="48" y="181" width="26" height="8" class="stone-cap" />
          <rect x="48" y="372" width="26" height="8" class="stone-base" />
          <rect x="96" y="185" width="16" height="195" class="temple-pillar" />
          <rect x="188" y="185" width="16" height="195" class="temple-pillar" />
          <rect x="230" y="185" width="18" height="195" class="temple-pillar" />
          <rect x="226" y="181" width="26" height="8" class="stone-cap" />
          <rect x="226" y="372" width="26" height="8" class="stone-base" />

          <!-- Dark Inner Sanctum -->
          <rect x="110" y="185" width="80" height="195" fill="#08070b" />
          <path d="M110 230 Q150 190 190 230 L190 380 L110 380 Z" fill="#030205" />
          <ellipse cx="150" cy="340" rx="16" ry="7" fill="#1a1820" />
          <path d="M142 340 L142 305 Q150 295 158 305 L158 340 Z" fill="#14121a" stroke="#000" stroke-width="1.5" />

          <!-- DAY: Garland of Marigolds on Idol -->
          <path class="day-only" d="M141 315 Q150 326 159 315" stroke="#f59e0b" stroke-width="3" fill="none" opacity="0.8" />

          <!-- NIGHT: Eerie Spectral Sanctum Glow -->
          <ellipse cx="150" cy="315" rx="35" ry="50" fill="#30507a" opacity="0.3" filter="url(#glow-blur)" class="night-only sanctum-pulse" />

          <!-- The Hanging Brass Temple Bell (Interactive Hotspot) -->
          <g id="hotspot-temple-bell" class="interactive-object temple-bell-rig" transform="translate(150, 180)">
            <line x1="0" y1="0" x2="0" y2="40" stroke="#483824" stroke-width="3.5" stroke-dasharray="5 2" />
            
            <g class="bell-clapper-group">
              <circle cx="0" cy="42" r="4.5" fill="#a67b2d" stroke="#50370d" stroke-width="1.5" />
              <path d="M-8 48 C-8 44, 8 44, 8 48 C9 58, 16 68, 20 74 L-20 74 C-16 68, -9 58, -8 48 Z" class="brass-bell-body" />
              <ellipse cx="0" cy="74" rx="20" ry="5.5" class="brass-bell-rim" />
              <line x1="0" y1="65" x2="0" y2="84" stroke="#402e12" stroke-width="2.5" />
              <circle cx="0" cy="85" r="4" fill="#6d4d19" />
              <ellipse cx="0" cy="74" rx="26" ry="8" fill="none" stroke="#688cb0" stroke-width="1" opacity="0.4" class="night-only" />
            </g>
          </g>

          <!-- Carved Stone Warning Plaque Beside Steps -->
          <g id="hotspot-temple-warning" class="interactive-object" transform="translate(25, 345)">
            <rect x="0" y="0" width="80" height="32" rx="3" fill="#251b14" stroke="#4a3522" stroke-width="1.2" />
            <text x="40" y="14" text-anchor="middle" font-family="'Cinzel', serif" font-weight="700" font-size="6.5" letter-spacing="0.8" fill="#e89e3a">DO NOT RING</text>
            <text x="40" y="24" text-anchor="middle" font-family="'Cinzel', serif" font-weight="700" font-size="6.5" letter-spacing="0.8" fill="#e89e3a">AFTER SUNSET</text>
          </g>

          <!-- Temple Stone Steps with Scattered Marigold Petals -->
          <g id="hotspot-temple-steps" class="interactive-object">
            <polygon points="20,380 280,380 295,410 5,410" class="temple-step-1" />
            <polygon points="5,410 295,410 310,440 -10,440" class="temple-step-2" />
            <polygon points="-10,440 310,440 325,475 -25,475" class="temple-step-3" />

            <!-- DAY: Orange and Yellow Marigold Petals -->
            <g class="day-only marigold-petals">
              <ellipse cx="85" cy="425" rx="3" ry="2" fill="#f59e0b" transform="rotate(20, 85, 425)" />
              <ellipse cx="92" cy="428" rx="2.5" ry="1.8" fill="#fbbf24" />
              <ellipse cx="145" cy="395" rx="3" ry="2" fill="#f59e0b" transform="rotate(-15, 145, 395)" />
              <ellipse cx="175" cy="455" rx="3.5" ry="2" fill="#d97706" transform="rotate(40, 175, 455)" />
              <ellipse cx="182" cy="458" rx="2.5" ry="1.8" fill="#fbbf24" />
              <ellipse cx="220" cy="425" rx="3" ry="2" fill="#f59e0b" />
            </g>

            <!-- NIGHT: Petals turned black & Footprints -->
            <g class="night-only footprints-etch" opacity="0.6" fill="#30415a">
              <ellipse cx="140" cy="455" rx="4" ry="7" transform="rotate(-5, 140, 455)" />
              <ellipse cx="160" cy="425" rx="4" ry="7" transform="rotate(5, 160, 425)" />
              <ellipse cx="145" cy="395" rx="4" ry="7" transform="rotate(-3, 145, 395)" />
            </g>
          </g>

          <!-- Temple Step Diya (Brass Oil Lamp on Step 1) -->
          <g id="temple-step-diya" transform="translate(68, 392)">
            <ellipse cx="8" cy="10" rx="9" ry="3.5" fill="#a87c32" stroke="#523910" stroke-width="0.8" />
            <!-- Diya Flame & Glow -->
            <g class="diya-flame-group">
              <ellipse cx="8" cy="4" rx="10" ry="10" fill="#f59e0b" opacity="0.45" filter="url(#glow-blur)" />
              <path d="M5 9 Q8 0 8 -2 Q8 0 11 9 Z" fill="#fff7d6" />
              <circle cx="8" cy="5" r="1.8" fill="#f59e0b" />
            </g>
            <!-- Extinguished Smoke Wisp (Shown when diya is extinguished) -->
            <path class="diya-smoke-wisp" d="M8 6 Q5 -4 10 -14 T6 -26" stroke="#90a4ae" stroke-width="1.2" fill="none" opacity="0" />
          </g>
        </g>
      </svg>
    `;
  },

  // 6. SCENE 05: The Red House
  renderRedHouseScene() {
    return `
      <svg viewBox="0 0 400 700" class="scene-svg" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
        ${this.getAtmosphericSky('redhouse')}

        <!-- Ground Courtyard & Dirt Verge -->
        <rect x="0" y="470" width="400" height="230" class="dirt-road" />
        <path d="M-20 540 Q150 510 420 535 L420 700 L-20 700 Z" class="ground-fill" opacity="0.45" />

        <!-- Distant silhouetted roofs & trees behind house -->
        <path d="M0 470 L40 430 L80 470 L280 470 L330 420 L400 470 Z" class="distant-roofs" />
        <ellipse cx="40" cy="410" rx="35" ry="50" class="bush-dark" />
        <ellipse cx="360" cy="420" rx="45" ry="60" class="bush-dark" />

        <!-- The Crooked Haveli (Old Red House Structure) -->
        <g class="haveli-structure" transform="translate(45, 120)">
          <!-- Main Haveli Cream Walls (Slightly crooked angle) -->
          <polygon points="10,400 0,110 300,95 310,400" class="haveli-wall" />

          <!-- Overhanging Carved Wooden Eaves / Cornice -->
          <polygon points="-15,115 315,100 320,80 -20,95" class="wood-eaves" />
          <!-- Eave decorative brackets -->
          <line x1="20" y1="110" x2="20" y2="135" stroke="#3b2413" stroke-width="3" />
          <line x1="90" y1="105" x2="90" y2="130" stroke="#3b2413" stroke-width="3" />
          <line x1="160" y1="102" x2="160" y2="128" stroke="#3b2413" stroke-width="3" />
          <line x1="230" y1="98" x2="230" y2="124" stroke="#3b2413" stroke-width="3" />
          <line x1="290" y1="95" x2="290" y2="120" stroke="#3b2413" stroke-width="3" />

          <!-- Cracked Plaster Patches exposing terracotta bricks -->
          <g class="cracked-brick-patches">
            <!-- Left upper patch -->
            <polygon points="35,145 65,140 70,175 40,180" class="brick-patch" />
            <line x1="36" y1="156" x2="68" y2="152" stroke="#522115" stroke-width="1" />
            <line x1="38" y1="168" x2="69" y2="165" stroke="#522115" stroke-width="1" />
            <!-- Right lower patch -->
            <polygon points="245,260 285,255 290,300 250,305" class="brick-patch" />
            <line x1="247" y1="275" x2="288" y2="270" stroke="#522115" stroke-width="1" />
            <line x1="248" y1="290" x2="289" y2="285" stroke="#522115" stroke-width="1" />
            <!-- Plaster fracture lines -->
            <path d="M70 175 L85 205 L80 230" stroke="#4d3a2b" stroke-width="1.2" fill="none" opacity="0.6" />
            <path d="M245 260 L230 240 L215 250" stroke="#4d3a2b" stroke-width="1.2" fill="none" opacity="0.6" />
          </g>

          <!-- Upper Barred Window (Interactive Hotspot) -->
          <g id="hotspot-red-house-window" class="interactive-object window-assembly" transform="translate(115, 130)">
            <!-- Outer Window Stone Lintel & Frame -->
            <rect x="0" y="0" width="80" height="95" rx="3" class="window-frame" />
            <rect x="6" y="6" width="68" height="83" fill="#131016" />

            <!-- DAY: Linen Curtains (Twitching slightly) -->
            <g class="day-only">
              <path class="curtain-twitch-day" d="M8 8 Q24 50 18 85 L35 85 Q30 40 40 8 Z" fill="#bfa58a" opacity="0.85" />
              <path d="M72 8 Q56 50 62 85 L45 85 Q50 40 40 8 Z" fill="#b09579" opacity="0.75" />
            </g>

            <!-- NIGHT: Amber Illuminated Window + Moving Silhouette Shadow -->
            <g class="night-only">
              <!-- Warm Amber Lantern Glow inside the Room -->
              <rect x="8" y="8" width="64" height="79" fill="#ffb443" opacity="0.85" />
              <rect x="8" y="8" width="64" height="79" fill="#ff8c1a" opacity="0.5" filter="url(#glow-blur)" />
              <!-- Backlit Fabric Texture -->
              <path d="M8 8 Q25 45 18 87 L35 87 Q30 40 40 8 Z" fill="#fff3cf" opacity="0.55" />
              <path d="M72 8 Q55 45 62 87 L45 87 Q50 40 40 8 Z" fill="#fff3cf" opacity="0.55" />
              
              <!-- Subtle Passing Silhouette Moving Across the Curtain -->
              <g class="shadow-pass-curtain">
                <ellipse cx="40" cy="38" rx="14" ry="17" fill="#1a0c0a" opacity="0.9" />
                <path d="M22 87 C22 55, 30 52, 40 52 C50 52, 58 55, 58 87 Z" fill="#1a0c0a" opacity="0.9" />
              </g>
            </g>

            <!-- Iron Window Bars -->
            <line x1="22" y1="4" x2="22" y2="91" stroke="#2b1c12" stroke-width="2.5" />
            <line x1="40" y1="4" x2="40" y2="91" stroke="#2b1c12" stroke-width="2.5" />
            <line x1="58" y1="4" x2="58" y2="91" stroke="#2b1c12" stroke-width="2.5" />
            <line x1="4" y1="48" x2="76" y2="48" stroke="#2b1c12" stroke-width="2.5" />
          </g>

          <!-- Narrow Ground Veranda with Weathered Pillars -->
          <polygon points="-5,270 305,260 310,278 -5,288" class="wood-eaves" />
          <rect x="15" y="280" width="16" height="120" class="veranda-pillar" />
          <rect x="270" y="275" width="16" height="125" class="veranda-pillar" />

          <!-- Overgrown Creepers Clinging to the Wall -->
          <g class="overgrown-creeper foliage-dark" opacity="0.75">
            <path d="M10 400 Q20 340 12 300 Q8 260 25 240 Q18 200 28 170" stroke="#2a3a1f" stroke-width="3" fill="none" />
            <circle cx="15" cy="330" r="4" fill="#3b4d2c" />
            <circle cx="22" cy="275" r="5" fill="#3b4d2c" />
            <circle cx="25" cy="210" r="4.5" fill="#3b4d2c" />
          </g>

          <!-- Old Hanging Veranda Lantern -->
          <g class="hanging-lantern" transform="translate(65, 275)">
            <line x1="0" y1="0" x2="0" y2="28" stroke="#2b1c12" stroke-width="2" />
            <rect x="-8" y="28" width="16" height="5" class="lantern-metal" />
            <polygon points="-8,33 8,33 6,55 -6,55" fill="#e8d8be" opacity="0.3" stroke="#2b1c12" stroke-width="1.5" />
            <polygon points="-7,55 7,55 9,60 -9,60" class="lantern-metal" />
            <!-- NIGHT: Dim Flickering Amber Flame -->
            <ellipse cx="0" cy="44" rx="4" ry="7" fill="#ff9922" class="night-only lantern-flicker-flame" filter="url(#glow-blur)" />
            <circle cx="0" cy="44" r="1.8" fill="#fff5d6" class="night-only" />
          </g>

          <!-- Veranda Steps -->
          <polygon points="45,395 255,395 265,410 35,410" class="stone-base" />
          <polygon points="35,410 265,410 275,425 25,425" class="stone-cap" />

          <!-- THE RED WOODEN DOOR (Interactive Hotspot) -->
          <g id="hotspot-red-door" class="interactive-object red-door-assembly" transform="translate(95, 265)">
            <!-- Door Stone Lintel & Dark Recess -->
            <rect x="0" y="0" width="110" height="135" rx="3" fill="#140608" stroke="#33181b" stroke-width="2.5" />
            <!-- Interior Deep Darkness Void (Revealed when door opens ajar) -->
            <rect id="red-door-interior-gap" x="50" y="6" width="12" height="123" fill="#000000" opacity="0" />

            <!-- Left Door Leaf -->
            <g id="red-door-left-leaf" class="door-leaf-group">
              <rect x="6" y="6" width="47" height="123" class="red-door-leaf" />
              <rect x="11" y="14" width="37" height="28" class="door-panel" />
              <rect x="11" y="48" width="37" height="34" class="door-panel" />
              <rect x="11" y="88" width="37" height="34" class="door-panel" />
            </g>

            <!-- Right Door Leaf -->
            <g id="red-door-right-leaf" class="door-leaf-group">
              <rect x="57" y="6" width="47" height="123" class="red-door-leaf" />
              <rect x="62" y="14" width="37" height="28" class="door-panel" />
              <rect x="62" y="48" width="37" height="34" class="door-panel" />
              <rect x="62" y="88" width="37" height="34" class="door-panel" />
            </g>

            <!-- Center Seam & Iron Lock Plates -->
            <line id="red-door-seam" x1="55" y1="6" x2="55" y2="129" stroke="#1d0407" stroke-width="2.5" />
            <g id="red-door-handle" class="door-handle-group">
              <circle cx="51" cy="72" r="4" fill="#2b1a0d" stroke="#54371a" stroke-width="1.2" />
              <circle cx="59" cy="72" r="4" fill="#2b1a0d" stroke="#54371a" stroke-width="1.2" />
              <rect x="49" y="70" width="12" height="4" fill="#110705" />
            </g>

            <!-- Creeping Shadow Underneath Door (Tapped knock horror) -->
            <ellipse id="red-door-under-shadow" cx="55" cy="132" rx="46" ry="4" fill="#000000" opacity="0" />

            <!-- Weathered Red Carved Marking: 'DO NOT KNOCK' (Interactive Hotspot) -->
            <g id="hotspot-red-door-warning" class="interactive-object" transform="translate(-50, 48)">
              <rect x="0" y="0" width="44" height="22" rx="2" fill="#241410" stroke="#48291f" stroke-width="1.2" />
              <text x="22" y="10" text-anchor="middle" font-family="'Cinzel', serif" font-weight="700" font-size="4.8" letter-spacing="0.5" fill="#c42828">DO NOT</text>
              <text x="22" y="18" text-anchor="middle" font-family="'Cinzel', serif" font-weight="700" font-size="4.8" letter-spacing="0.5" fill="#c42828">KNOCK</text>
            </g>

            <!-- NIGHT ONLY: Blood/Moisture seep lines beneath door -->
            <g class="night-only" opacity="0.75">
              <path d="M55 129 L55 138" stroke="#75060d" stroke-width="2.5" stroke-linecap="round" />
              <circle cx="55" cy="140" r="2.5" fill="#540409" />
              <path d="M25 129 L25 135" stroke="#75060d" stroke-width="2" stroke-linecap="round" />
            </g>
          </g>
        </g>
      </svg>
    `;
  },

  // 7. SCENE 06: The Banyan Tree
  renderBanyanScene() {
    return `
      <svg viewBox="0 0 400 700" class="scene-svg" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
        ${this.getAtmosphericSky('banyan')}

        <!-- Dirt Road Path on the Right -->
        <rect x="0" y="470" width="400" height="230" class="dirt-road" />
        <path d="M120 700 L240 470 L350 470 L400 700 Z" class="path-fill" opacity="0.6" />

        <!-- Distant Ridge & Horizon Trees -->
        <path d="M0 480 Q100 450 200 465 T400 460 L400 500 L0 500 Z" class="ridge-fill" opacity="0.4" />

        <!-- THE ANCIENT BANYAN TREE -->
        <g class="banyan-tree-complex" transform="translate(10, 40)">
          <!-- Vast Layered Foliage Canopy (Covering upper half) -->
          <g class="banyan-canopy-group">
            <ellipse cx="140" cy="150" rx="160" ry="90" class="banyan-canopy" />
            <ellipse cx="260" cy="140" rx="140" ry="80" class="banyan-canopy-lobe" />
            <ellipse cx="60" cy="180" rx="110" ry="70" class="banyan-canopy-lobe" />
            <ellipse cx="320" cy="190" rx="90" ry="60" class="banyan-canopy" />
            <ellipse cx="180" cy="100" rx="130" ry="65" class="banyan-canopy-lobe" />

            <!-- DAY: Sunlight Filtering Through Leaves -->
            <g class="day-only" opacity="0.22" fill="#fff7d6">
              <polygon points="120,110 50,490 90,490" />
              <polygon points="200,100 230,490 280,490" />
            </g>
          </g>

          <!-- Thick Muscular Twisted Trunk System (Interactive Hotspot) -->
          <g id="hotspot-banyan-roots" class="interactive-object banyan-trunk-assembly">
            <!-- Central Trunk -->
            <path d="M100 230 C90 290, 80 370, 40 480 L180 480 C155 380, 140 290, 130 230 Z" class="banyan-trunk" />
            <!-- Spreading Surface Roots crawling across the ground -->
            <path d="M60 460 Q30 475 5 490" stroke="#3b2413" stroke-width="12" stroke-linecap="round" fill="none" />
            <path d="M90 470 Q110 495 130 520" stroke="#3b2413" stroke-width="14" stroke-linecap="round" fill="none" />
            <path d="M140 465 Q180 480 230 495" stroke="#3b2413" stroke-width="11" stroke-linecap="round" fill="none" />
            <path d="M160 475 Q210 515 250 535" stroke="#3b2413" stroke-width="8" stroke-linecap="round" fill="none" />
            <path d="M40 480 Q15 510 -10 525" stroke="#3b2413" stroke-width="9" stroke-linecap="round" fill="none" />

            <!-- Bark Crevices & Knots -->
            <path d="M95 280 Q105 340 85 410" stroke="#1d1108" stroke-width="3" fill="none" opacity="0.75" />
            <path d="M125 290 Q115 360 135 430" stroke="#1d1108" stroke-width="3.5" fill="none" opacity="0.75" />
            <ellipse cx="108" cy="365" rx="7" ry="14" fill="#180e07" />
          </g>

          <!-- Hanging Aerial Roots Dropping from Upper Canopy -->
          <g class="hanging-aerial-roots">
            <path class="aerial-root aerial-root-sway" d="M40 180 Q35 310 32 460" />
            <path class="aerial-root aerial-root-sway-slow" d="M75 190 Q70 330 68 470" />
            <path class="aerial-root aerial-root-sway" d="M175 190 Q180 320 185 460" />
            <path class="aerial-root aerial-root-sway-slow" d="M225 180 Q220 310 218 450" />
            <path class="aerial-root aerial-root-sway" d="M275 195 Q278 300 282 430" />
            <path class="aerial-root aerial-root-sway-slow" d="M315 210 Q312 320 310 440" />
          </g>

          <!-- Village Roadside Shrine Nestled at Trunk Base -->
          <g class="tree-shrine-cluster" transform="translate(60, 445)">
            <!-- Smooth River Stones with Orange Sindoor Vermilion -->
            <ellipse cx="15" cy="22" rx="14" ry="11" class="banyan-shrine-stone" />
            <ellipse cx="15" cy="18" rx="6" ry="4" class="sindoor-smear" />
            <ellipse cx="38" cy="25" rx="18" ry="13" class="banyan-shrine-stone" />
            <ellipse cx="38" cy="20" rx="8" ry="5.5" class="sindoor-smear" />
            <ellipse cx="62" cy="22" rx="13" ry="10" class="banyan-shrine-stone" />
            <ellipse cx="62" cy="19" rx="5.5" ry="4" class="sindoor-smear" />

            <!-- Scattered Dried Marigold Petals -->
            <g class="day-only">
              <ellipse cx="28" cy="30" rx="3.5" ry="2" fill="#f59e0b" />
              <ellipse cx="48" cy="32" rx="3" ry="1.8" fill="#fbbf24" />
              <ellipse cx="55" cy="29" rx="3.2" ry="2" fill="#d97706" />
            </g>
          </g>

          <!-- Sacred Red Threads Tied Around Aerial Roots (Interactive Hotspot) -->
          <g id="hotspot-banyan-threads" class="interactive-object sacred-threads-assembly">
            <path d="M68 310 Q73 314 78 310" stroke="#cf232b" stroke-width="3" fill="none" />
            <path d="M67 318 Q73 322 79 318" stroke="#e0363e" stroke-width="2" fill="none" />
            <path d="M178 325 Q184 329 190 325" stroke="#cf232b" stroke-width="3" fill="none" />
            <path d="M177 333 Q183 337 189 333" stroke="#e0363e" stroke-width="2" fill="none" />
            <!-- Fluttering thread tails -->
            <line x1="78" y1="312" x2="84" y2="330" stroke="#cf232b" stroke-width="1.8" class="flutter-slow" />
            <line x1="189" y1="327" x2="195" y2="344" stroke="#cf232b" stroke-width="1.8" class="flutter-slow" />
          </g>

          <!-- NIGHT ONLY: THE WOMAN SILHOUETTE POINTING TOWARD THE ROAD -->
          <g id="hotspot-banyan-figure" class="night-only banyan-woman-silhouette" transform="translate(210, 310)">
            <!-- Ground Cold Shadow -->
            <ellipse cx="22" cy="142" rx="20" ry="8" fill="#000" opacity="0.8" />
            <!-- Soft Violet Apparition Aura -->
            <ellipse cx="24" cy="75" rx="30" ry="68" fill="#354d70" opacity="0.22" filter="url(#glow-blur)" />

            <!-- Female Silhouette Body (Traditional Sari / Pallu Draped Over Head) -->
            <!-- Facing right / three-quarters back, NOT facing user! -->
            <!-- Flowing draped sari skirt -->
            <path d="M12 140 C10 100, 14 70, 22 50 C26 48, 34 48, 38 52 C44 75, 42 105, 36 140 Z" fill="#06080e" />
            <!-- Draped head veil (Pallu covering head, looking away to the right) -->
            <path d="M18 50 C18 30, 26 22, 34 22 C42 22, 44 32, 42 46 C38 54, 30 54, 18 50 Z" fill="#090d16" />

            <!-- Right Arm Raised & Pointing Toward the Empty Road -->
            <path d="M34 52 Q52 46 72 44" stroke="#06080e" stroke-width="5" stroke-linecap="round" fill="none" />
            <!-- Pointing finger extending toward right edge of frame -->
            <line x1="72" y1="44" x2="80" y2="43" stroke="#06080e" stroke-width="2.8" stroke-linecap="round" />
            <line x1="72" y1="44" x2="80" y2="43" stroke="#8faecf" stroke-width="1.2" stroke-linecap="round" opacity="0.5" />

            <!-- Faint mist swirling around feet -->
            <ellipse cx="24" cy="142" rx="36" ry="10" fill="#253245" opacity="0.35" class="fog-drift" />
          </g>
        </g>

        <!-- NIGHT ONLY: Passing Fog Sweep (Reveals the distant silhouette) -->
        <g id="banyan-fog-sweep-layer" class="night-only fog-sweep-overlay" opacity="0" pointer-events="none">
          <rect x="-100" y="240" width="600" height="320" fill="url(#fog-sweep-grad)" />
        </g>

        <!-- Subtle consequence: Lingering cold wind & ground fog after the scream -->
        <g id="banyan-lingering-fog" opacity="0" pointer-events="none">
          <ellipse cx="230" cy="460" rx="140" ry="24" fill="#202e40" class="fog-drift" opacity="0.6" filter="url(#glow-blur)" />
          <ellipse cx="140" cy="480" rx="120" ry="20" fill="#182433" class="fog-drift" opacity="0.5" filter="url(#glow-blur)" />
        </g>
      </svg>
    `;
  },

  // 8. SCENE 07: The Empty Road
  renderEmptyRoadScene() {
    return `
      <svg viewBox="0 0 400 700" class="scene-svg" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
        ${this.getAtmosphericSky('emptyroad')}

        <!-- Rolling Countryside Plains & Fields -->
        <rect x="0" y="320" width="400" height="380" class="countryside-field" />

        <!-- Distant Desolate Hills at Horizon -->
        <path d="M0 340 Q80 300 180 325 T380 315 L400 330 L400 360 L0 360 Z" class="horizon-hill" opacity="0.65" />
        <path d="M40 335 Q140 295 240 315 T400 305 L400 350 L0 350 Z" class="horizon-hill" opacity="0.45" />

        <!-- Long Dusty Countryside Road (Perspective into the Horizon) (Interactive Hotspot) -->
        <g id="hotspot-empty-road-path" class="interactive-object empty-road-perspective">
          <polygon points="195,330 205,330 380,700 20,700" class="dirt-road" />
          <!-- Road wheel ruts / cart tracks -->
          <line x1="198" y1="330" x2="140" y2="700" stroke="#7d5939" stroke-width="2.5" opacity="0.55" />
          <line x1="202" y1="330" x2="260" y2="700" stroke="#7d5939" stroke-width="2.5" opacity="0.55" />
        </g>

        <!-- Solitary Crooked Acacia Tree on Right Verge (Interactive Hotspot) -->
        <g id="hotspot-road-tree" class="interactive-object crooked-acacia" transform="translate(275, 255)">
          <path d="M30 180 Q35 120 20 80 Q10 50 35 20" stroke="#3d2816" stroke-width="9" stroke-linecap="round" fill="none" />
          <path d="M22 75 Q45 60 65 50" stroke="#3d2816" stroke-width="5" stroke-linecap="round" fill="none" />
          <path d="M15 55 Q-5 40 -15 35" stroke="#3d2816" stroke-width="4" stroke-linecap="round" fill="none" />
          <!-- Feathery Acacia Foliage -->
          <ellipse cx="38" cy="20" rx="35" ry="18" class="acacia-foliage" />
          <ellipse cx="65" cy="45" rx="24" ry="14" class="acacia-foliage" />
          <ellipse cx="-12" cy="35" rx="20" ry="12" class="acacia-foliage" />
        </g>

        <!-- Distant Kaldhara Village View: Still Visible Behind User (Interactive Hotspot) -->
        <g id="hotspot-road-village-view" class="interactive-object distant-kaldhara-view" transform="translate(25, 275)">
          <!-- Distant settlement silhouettes -->
          <path d="M0 55 L15 42 L30 55 L50 55 L65 38 L80 55 Z" class="distant-roofs" />
          <!-- Temple Shikhara silhouette -->
          <polygon points="40,32 44,55 36,55" class="distant-roofs" />
          
          <!-- NIGHT ONLY: Warm flickering lights refusing to get farther away! -->
          <g class="night-only">
            <circle cx="15" cy="48" r="2.5" fill="#ffb443" filter="url(#glow-blur)" />
            <circle cx="15" cy="48" r="1.2" fill="#fff7d6" />
            <circle cx="68" cy="46" r="2.5" fill="#ffb443" filter="url(#glow-blur)" />
            <circle cx="68" cy="46" r="1.2" fill="#fff7d6" />
            <circle cx="40" cy="42" r="2" fill="#ff9922" filter="url(#glow-blur)" />
          </g>
        </g>

        <!-- NIGHT ONLY: Dense Creeping Mist Across the Road -->
        <g class="night-only road-fog-layer">
          <ellipse cx="200" cy="410" rx="190" ry="35" fill="#1b2133" opacity="0.5" class="road-fog-drift" />
          <ellipse cx="180" cy="530" rx="240" ry="45" fill="#141824" opacity="0.55" class="road-fog-drift" />
        </g>
      </svg>
    `;
  },

  // 5. SCENE 05: Village Square
  renderVillageSquareScene() {
    return `
      <svg class="scene-illustration" viewBox="0 0 390 844" xmlns="http://www.w3.org/2000/svg">
        ${this.getAtmosphericSky('village-square')}

        <!-- Distant Ridge & Back Havelis -->
        <g class="distant-landscape">
          <polygon points="0,320 80,300 190,315 310,295 390,318 390,380 0,380" fill="#a87d55" class="day-only" opacity="0.4" />
          <polygon points="0,320 80,300 190,315 310,295 390,318 390,380 0,380" fill="#0d1424" class="night-only" opacity="0.6" />
        </g>

        <!-- Surrounding Old Village Houses Framing the Square -->
        <g id="village-square-houses">
          <!-- Left Haveli (2 storeys) -->
          <polygon points="0,210 140,195 140,540 0,560" fill="#cc9f70" class="day-only" />
          <polygon points="0,210 140,195 140,540 0,560" fill="#151b2a" class="night-only" />
          <polygon points="0,205 145,190 142,202 0,218" fill="#7d5939" class="day-only" />
          <polygon points="0,205 145,190 142,202 0,218" fill="#0b0f19" class="night-only" />

          <!-- Left Upper Window / Jharokha -->
          <rect x="25" y="240" width="38" height="52" rx="4" fill="#5c4028" class="day-only" />
          <rect x="25" y="240" width="38" height="52" rx="4" fill="#090d15" class="night-only" />
          <!-- NIGHT: Faint warm amber glow in window -->
          <rect x="27" y="242" width="34" height="48" rx="3" fill="#e89838" opacity="0.75" filter="url(#glow-blur)" class="sq-lit-window night-only" />
          <line x1="44" y1="240" x2="44" y2="292" stroke="#2b1a0d" stroke-width="2" />
          <line x1="25" y1="266" x2="63" y2="266" stroke="#2b1a0d" stroke-width="2" />

          <!-- Center-Right Haveli Facade -->
          <polygon points="250,180 390,165 390,520 250,535" fill="#ba8c60" class="day-only" />
          <polygon points="250,180 390,165 390,520 250,535" fill="#121824" class="night-only" />
          <polygon points="245,175 390,160 390,172 245,186" fill="#69482d" class="day-only" />
          <polygon points="245,175 390,160 390,172 245,186" fill="#080c14" class="night-only" />

          <!-- Right Upper Window 1 -->
          <rect x="280" y="225" width="34" height="46" rx="3" fill="#4d321d" class="day-only" />
          <rect x="280" y="225" width="34" height="46" rx="3" fill="#080b12" class="night-only" />
          <!-- NIGHT: Faint warm curtain glow -->
          <rect x="282" y="227" width="30" height="42" rx="2" fill="#d9822b" opacity="0.65" filter="url(#glow-blur)" class="sq-lit-window night-only" />
          <line x1="297" y1="225" x2="297" y2="271" stroke="#26170c" stroke-width="1.8" />

          <!-- Right Upper Window 2 -->
          <rect x="335" y="220" width="34" height="46" rx="3" fill="#4d321d" class="day-only" />
          <rect x="335" y="220" width="34" height="46" rx="3" fill="#080b12" class="night-only" />
          <!-- NIGHT: Subtle light -->
          <rect x="337" y="222" width="30" height="42" rx="2" fill="#c47123" opacity="0.55" filter="url(#glow-blur)" class="sq-lit-window night-only" />

          <!-- Rear Village Arch Connecting Houses -->
          <path d="M140 330 C170 300, 220 300, 250 330 L250 510 L140 510 Z" fill="#9e734c" class="day-only" />
          <path d="M140 330 C170 300, 220 300, 250 330 L250 510 L140 510 Z" fill="#0e1420" class="night-only" />
          <path d="M160 360 C175 340, 215 340, 230 360 L230 510 L160 510 Z" fill="#422e1e" class="day-only" />
          <path d="M160 360 C175 340, 215 340, 230 360 L230 510 L160 510 Z" fill="#06090f" class="night-only" />

          <!-- Ghost Runner across Background Arch (Notice Board Horror Interaction) -->
          <g id="square-running-ghost" class="square-runner-ghost" opacity="0">
            <ellipse cx="20" cy="410" rx="14" ry="18" fill="#182333" opacity="0.85" filter="url(#glow-blur)" />
            <path d="M6 425 C2 410, 38 410, 34 425 L38 490 L2 490 Z" fill="#0d1522" opacity="0.85" />
            <path d="M-8 435 Q20 415 48 440" stroke="#182333" stroke-width="4" stroke-linecap="round" fill="none" opacity="0.75" />
          </g>
        </g>

        <!-- Hanging Clothesline across square (#hotspot-hanging-clothes) -->
        <g id="hotspot-hanging-clothes" class="interactive-object" style="cursor: pointer;">
          <!-- Coir Line -->
          <path d="M80 320 Q200 355 310 325" stroke="#4a3625" stroke-width="1.6" fill="none" />
          <!-- Hanging Kurta (Left) -->
          <polygon points="120,332 155,335 158,385 118,382" fill="#d9cbba" opacity="0.9" />
          <!-- Hanging Saffron Fabric (Middle) -->
          <polygon points="180,342 225,344 228,405 178,400" fill="#c26330" opacity="0.85" />
          <!-- Hanging Child's Frock (Right) -->
          <polygon points="250,338 278,337 282,375 248,373" fill="#8ca0ba" opacity="0.85" />
        </g>

        <!-- Wall Lanterns with Night Flicker Glow -->
        <g class="square-lanterns">
          <rect x="136" y="325" width="8" height="14" rx="2" fill="#302216" />
          <circle cx="140" cy="332" r="3" fill="#ffbd59" class="night-only" filter="url(#glow-blur)" />
          <circle cx="140" cy="332" r="14" fill="#ffbd59" opacity="0.25" class="night-only" filter="url(#glow-blur)" />

          <rect x="252" y="315" width="8" height="14" rx="2" fill="#302216" />
          <circle cx="256" cy="322" r="3" fill="#ffbd59" class="night-only" filter="url(#glow-blur)" />
          <circle cx="256" cy="322" r="14" fill="#ffbd59" opacity="0.25" class="night-only" filter="url(#glow-blur)" />
        </g>

        <!-- Dusty Square Ground -->
        <polygon points="0,500 390,480 390,844 0,844" fill="#d1a579" class="day-only" />
        <polygon points="0,500 390,480 390,844 0,844" fill="#141926" class="night-only" />

        <!-- Ground Cracks & Soil Texture -->
        <path d="M60 580 L110 600 L140 595 L180 620" stroke="#a67950" stroke-width="1.4" fill="none" class="day-only" />
        <path d="M220 560 L260 580 L310 575" stroke="#a67950" stroke-width="1.2" fill="none" class="day-only" />
        <path d="M60 580 L110 600 L140 595 L180 620" stroke="#0a0d14" stroke-width="1.4" fill="none" class="night-only" />

        <!-- Old Wooden Benches near Wall -->
        <g class="wooden-bench" transform="translate(290, 520)">
          <rect x="0" y="0" width="70" height="10" rx="2" fill="#54371f" />
          <rect x="6" y="10" width="8" height="25" fill="#3b2413" />
          <rect x="56" y="10" width="8" height="25" fill="#3b2413" />
        </g>

        <!-- Abandoned Bullock Cart (#hotspot-square-cart) -->
        <g id="hotspot-square-cart" class="interactive-object" style="cursor: pointer;" transform="translate(40, 510)">
          <!-- Inner Mover Group for Rolling Motion -->
          <g id="square-cart-mover">
            <!-- Cast Shadow -->
            <ellipse cx="60" cy="95" rx="65" ry="18" fill="#000" opacity="0.35" class="day-only" />
            <ellipse cx="60" cy="95" rx="65" ry="18" fill="#000" opacity="0.65" class="night-only" />

            <!-- Cart Bed & Side Planks -->
            <polygon points="15,40 105,30 115,58 12,65" fill="#5e3e23" />
            <polygon points="12,65 115,58 112,62 10,69" fill="#3b2413" />

            <!-- Grain Sacks Loaded in Cart -->
            <ellipse cx="40" cy="35" rx="20" ry="14" fill="#a89278" />
            <ellipse cx="75" cy="30" rx="22" ry="15" fill="#9e876d" />
            <ellipse cx="58" cy="22" rx="18" ry="12" fill="#b09b82" />

            <!-- Large Spoked Wooden Wheel -->
            <g id="square-cart-wheel">
              <circle cx="48" cy="72" r="32" fill="none" stroke="#3b2413" stroke-width="5" />
              <circle cx="48" cy="72" r="8" fill="#29180c" />
              <line x1="48" y1="40" x2="48" y2="104" stroke="#3b2413" stroke-width="3" />
              <line x1="16" y1="72" x2="80" y2="72" stroke="#3b2413" stroke-width="3" />
              <line x1="25" y1="49" x2="71" y2="95" stroke="#3b2413" stroke-width="2.5" />
              <line x1="25" y1="95" x2="71" y2="49" stroke="#3b2413" stroke-width="2.5" />
            </g>

            <!-- Front Yoke Shaft Left Resting on Earth -->
            <line x1="105" y1="35" x2="135" y2="75" stroke="#5e3e23" stroke-width="6" />
          </g>
        </g>

        <!-- Everyday Abandoned Objects -->
        <g class="abandoned-objects">
          <!-- Clay Matka Pot -->
          <ellipse cx="270" cy="620" rx="14" ry="16" fill="#8f4a2b" class="day-only" />
          <ellipse cx="270" cy="620" rx="14" ry="16" fill="#1b120f" class="night-only" />
          <ellipse cx="270" cy="607" rx="7" ry="2.5" fill="#69331b" />
          <!-- Fallen Broom -->
          <line x1="230" y1="640" x2="255" y2="655" stroke="#6e583c" stroke-width="3" />
          <polygon points="255,655 268,665 262,670 250,658" fill="#a1845c" />
        </g>

        <!-- OLD NOTICE BOARD (Hero Interactive Object #hotspot-notice-board) -->
        <g id="hotspot-notice-board" class="interactive-object" style="cursor: pointer;" transform="translate(170, 480)">
          <!-- Cast Shadow -->
          <ellipse cx="30" cy="185" rx="35" ry="10" fill="#000" opacity="0.35" class="day-only" />
          <ellipse cx="30" cy="185" rx="35" ry="10" fill="#000" opacity="0.65" class="night-only" />

          <!-- Heavy Timber Posts -->
          <rect x="22" y="50" width="12" height="135" fill="#422916" />
          <rect x="24" y="50" width="3" height="135" fill="#633e22" />

          <!-- Wooden Board Panel -->
          <rect x="-35" y="10" width="125" height="90" rx="4" fill="#54371f" stroke="#2e1b0c" stroke-width="2.5" />
          <!-- Board Grain Lines -->
          <line x1="-32" y1="38" x2="88" y2="38" stroke="#3d2613" stroke-width="1.5" />
          <line x1="-32" y1="66" x2="88" y2="66" stroke="#3d2613" stroke-width="1.5" />

          <!-- 1. Top Paper Notice: "ALL RESIDENTS MUST LEAVE BEFORE SUNSET" -->
          <polygon points="-28,16 42,14 40,42 -30,44" fill="#faeed7" stroke="#b59f7d" stroke-width="0.8" />
          <circle cx="6" cy="17" r="1.5" fill="#24150b" />
          <text x="6" y="27" font-family="'Cinzel', serif" font-size="4.5" font-weight="700" fill="#591212" text-anchor="middle">ALL RESIDENTS</text>
          <text x="6" y="34" font-family="'Cinzel', serif" font-size="3.6" font-weight="600" fill="#1f1610" text-anchor="middle">MUST LEAVE BEFORE SUNSET</text>

          <!-- 2. Middle Notice: "DO NOT RETURN UNTIL FURTHER NOTICE" -->
          <polygon points="12,42 82,40 80,68 10,70" fill="#f0dfc2" stroke="#b59f7d" stroke-width="0.8" />
          <circle cx="46" cy="43" r="1.5" fill="#24150b" />
          <text x="46" y="53" font-family="'Cinzel', serif" font-size="3.8" font-weight="600" fill="#3b2b1d" text-anchor="middle">DO NOT RETURN</text>
          <text x="46" y="60" font-family="'Cinzel', serif" font-size="3.2" font-weight="500" fill="#543d29" text-anchor="middle">UNTIL FURTHER NOTICE</text>

          <!-- 3. Torn Final Notice: "...THE VILLAGE IS NOT EMPTY" -->
          <polygon points="-25,48 5,47 2,88 -18,86 -22,78" fill="#e8cfb0" stroke="#9e7b57" stroke-width="0.8" />
          <circle cx="-10" cy="50" r="1.5" fill="#24150b" />
          <text x="-9" y="62" font-family="'Cinzel', serif" font-size="3.8" font-weight="700" fill="#7a1414" text-anchor="middle">...THE VILLAGE</text>
          <text x="-9" y="70" font-family="'Cinzel', serif" font-size="3.8" font-weight="700" fill="#7a1414" text-anchor="middle">IS NOT EMPTY.</text>

          <!-- Beacon Halo -->
          <ellipse cx="28" cy="55" rx="35" ry="25" fill="#fedaa2" opacity="0.25" class="day-only" filter="url(#glow-blur)" />
          <ellipse cx="28" cy="55" rx="35" ry="25" fill="#7bb5e8" opacity="0.35" class="night-only" filter="url(#glow-blur)" />
        </g>
      </svg>
    `;
  },

  // 6. SCENE 06: The Abandoned House
  renderAbandonedHouseScene() {
    return `
      <svg class="scene-illustration" viewBox="0 0 390 844" xmlns="http://www.w3.org/2000/svg">
        ${this.getAtmosphericSky('abandoned-house')}

        <!-- Ground Baseline -->
        <polygon points="0,520 390,500 390,844 0,844" fill="#c99e71" class="day-only" />
        <polygon points="0,520 390,500 390,844 0,844" fill="#131722" class="night-only" />

        <!-- 2-Storey Abandoned House Facade -->
        <g id="abandoned-house-facade">
          <!-- House Walls (Aged Faded Blue/Cream) -->
          <polygon points="20,160 370,140 370,580 20,600" fill="#8fa6b8" class="day-only" />
          <polygon points="20,160 370,140 370,580 20,600" fill="#141c27" class="night-only" />

          <!-- Wall Plaster Cracks & Patches -->
          <path d="M80 220 L110 260 L95 290" stroke="#688094" stroke-width="1.8" fill="none" class="day-only" />
          <path d="M280 210 L310 240 L300 280" stroke="#688094" stroke-width="1.8" fill="none" class="day-only" />

          <!-- Eaves / Terracotta Tiles -->
          <polygon points="10,155 380,135 375,170 15,190" fill="#9e512d" class="day-only" />
          <polygon points="10,155 380,135 375,170 15,190" fill="#24140e" class="night-only" />

          <!-- UPSTAIRS WINDOW (Subtle Night Light & Silhouette) -->
          <g id="upstairs-window-unit" transform="translate(145, 200)">
            <!-- Window Frame -->
            <rect x="0" y="0" width="85" height="105" rx="4" fill="#3b2b1d" />
            <!-- Interior Glass Pane (Day: dark dusty glass) -->
            <rect x="5" y="5" width="75" height="95" rx="2" fill="#241a12" class="day-only" />
            <!-- Interior Glass Pane (Night: initially dark, then lights up) -->
            <rect id="upstairs-window-glass" x="5" y="5" width="75" height="95" rx="2" fill="#0d1117" class="night-only" />
            <!-- Upstairs Window Light (Warm Amber) -->
            <rect id="upstairs-window-light" class="upstairs-window-light night-only" x="5" y="5" width="75" height="95" rx="2" fill="#e09436" opacity="0" filter="url(#glow-blur)" />

            <!-- Upstairs Silhouette Walker (Night: briefly crosses window and vanishes) -->
            <g id="upstairs-silhouette" class="upstairs-silhouette-walker night-only" opacity="0">
              <!-- Head -->
              <circle cx="25" cy="40" r="10" fill="#080a0f" />
              <!-- Shoulders & Torso -->
              <path d="M12 55 C12 48, 38 48, 38 55 L42 98 L8 98 Z" fill="#080a0f" />
            </g>

            <!-- Window Grille Bars -->
            <line x1="29" y1="5" x2="29" y2="100" stroke="#3b2b1d" stroke-width="3" />
            <line x1="56" y1="5" x2="56" y2="100" stroke="#3b2b1d" stroke-width="3" />
            <line x1="5" y1="52" x2="80" y2="52" stroke="#3b2b1d" stroke-width="3" />
          </g>

          <!-- Veranda Mid-Floor Roofline -->
          <polygon points="15,350 375,330 370,365 10,385" fill="#784024" class="day-only" />
          <polygon points="15,350 375,330 370,365 10,385" fill="#1b0e08" class="night-only" />

          <!-- Veranda (Otla) Elevated Platform -->
          <polygon points="30,480 360,460 360,600 30,620" fill="#b0855b" class="day-only" />
          <polygon points="30,480 360,460 360,600 30,620" fill="#181c28" class="night-only" />
          <!-- Veranda Steps -->
          <polygon points="120,605 270,595 275,640 115,650" fill="#916a44" class="day-only" />
          <polygon points="120,605 270,595 275,640 115,650" fill="#10141c" class="night-only" />

          <!-- Veranda Carved Wooden Pillars -->
          <rect x="50" y="375" width="14" height="185" fill="#52351f" />
          <rect x="325" y="355" width="14" height="185" fill="#52351f" />
          <rect x="195" y="365" width="14" height="185" fill="#52351f" />

          <!-- Open Veranda Front Door (Door Left Wide Open into Darkness) -->
          <g id="abandoned-front-door" transform="translate(70, 390)">
            <!-- Dark Interior Doorway Void -->
            <rect x="0" y="0" width="65" height="140" fill="#0d0906" />
            <!-- Open Door Timber Slab Standing Ajar -->
            <polygon points="0,0 22,8 22,148 0,140" fill="#693b1d" stroke="#3b200e" stroke-width="2" />
            <!-- Door Handle -->
            <circle cx="16" cy="78" r="2.8" fill="#c7974a" />
          </g>

          <!-- WIDE BARRED WINDOW WITH DUSTY INTERIOR VIEW (#hotspot-house-window) -->
          <g id="hotspot-house-window" class="interactive-object" style="cursor: pointer;" transform="translate(155, 390)">
            <!-- Outer Window Frame -->
            <rect x="0" y="0" width="150" height="105" rx="4" fill="#472e1c" stroke="#2b1a0d" stroke-width="2.5" />
            <!-- Dusty Glass Pane -->
            <rect x="6" y="6" width="138" height="93" fill="#1f1813" />

            <!-- Visible Interior: Family Photographs on Wall -->
            <rect x="18" y="16" width="22" height="28" fill="#806245" stroke="#422f1d" stroke-width="1.2" />
            <rect x="21" y="19" width="16" height="22" fill="#c4b097" opacity="0.6" />
            <circle cx="29" cy="28" r="4" fill="#5e4934" />

            <rect x="46" y="14" width="26" height="32" fill="#806245" stroke="#422f1d" stroke-width="1.2" />
            <rect x="49" y="17" width="20" height="26" fill="#c4b097" opacity="0.6" />
            <!-- Two Figures in Frame -->
            <circle cx="56" cy="27" r="3.5" fill="#5e4934" />
            <circle cx="63" cy="29" r="3" fill="#5e4934" />

            <!-- Dining Table Visible Inside -->
            <polygon points="15,75 135,70 130,95 20,98" fill="#362314" />
            <!-- Brass Pitcher / Tumbler Left on Table -->
            <polygon points="85,62 95,62 97,76 83,76" fill="#bfa054" />

            <!-- Ghost Face / Silhouette Flashing behind glass (Horror Interaction) -->
            <g id="window-ghost-face" class="ghost-face-silhouette" opacity="0">
              <ellipse cx="75" cy="50" rx="30" ry="38" fill="#040608" />
              <ellipse cx="75" cy="48" rx="26" ry="34" fill="#d2d6dc" opacity="0.75" filter="url(#glow-blur)" />
              <!-- Hollow sunken eyes and gaping mouth -->
              <ellipse cx="64" cy="42" rx="4.5" ry="6.5" fill="#040608" />
              <ellipse cx="86" cy="42" rx="4.5" ry="6.5" fill="#040608" />
              <ellipse cx="75" cy="64" rx="7" ry="12" fill="#040608" />
            </g>

            <!-- Heavy Wooden Grille Bars -->
            <line x1="38" y1="6" x2="38" y2="99" stroke="#3b2516" stroke-width="3" />
            <line x1="75" y1="6" x2="75" y2="99" stroke="#3b2516" stroke-width="3" />
            <line x1="112" y1="6" x2="112" y2="99" stroke="#3b2516" stroke-width="3" />
            <line x1="6" y1="52" x2="144" y2="52" stroke="#3b2516" stroke-width="3" />

            <!-- Beacon Glow -->
            <ellipse cx="75" cy="52" rx="40" ry="25" fill="#fedaa2" opacity="0.25" class="day-only" filter="url(#glow-blur)" />
            <ellipse cx="75" cy="52" rx="40" ry="25" fill="#7bb5e8" opacity="0.35" class="night-only" filter="url(#glow-blur)" />
          </g>

          <!-- Old Wooden Chair on Veranda (#hotspot-veranda-chair) -->
          <g id="hotspot-veranda-chair" class="interactive-object" style="cursor: pointer;" transform="translate(265, 485)">
            <!-- Cane Armchair -->
            <polygon points="10,0 48,0 45,45 12,45" fill="#755030" stroke="#4a301a" stroke-width="1.8" />
            <rect x="5" y="40" width="48" height="8" rx="2" fill="#5c3c21" />
            <!-- Legs -->
            <line x1="10" y1="48" x2="8" y2="82" stroke="#4a301a" stroke-width="3.5" />
            <line x1="48" y1="48" x2="50" y2="82" stroke="#4a301a" stroke-width="3.5" />
          </g>

          <!-- Children's Wooden Toy Left on Veranda Floor (#hotspot-children-toy) -->
          <g id="hotspot-children-toy" class="interactive-object" style="cursor: pointer;" transform="translate(85, 595)">
            <!-- Inner Mover Group for Toy Movement and Vanishing -->
            <g id="toy-cart-mover">
              <!-- Toy Cart Body -->
              <rect x="0" y="8" width="38" height="16" rx="2" fill="#ad723b" stroke="#6e431e" stroke-width="1.5" />
              <!-- Pull String Dropped on Floor -->
              <path d="M0 16 Q-12 24 -18 32" stroke="#523318" stroke-width="1.5" fill="none" />
              <!-- Painted Red Wheels -->
              <circle cx="8" cy="24" r="7" fill="#b02c2c" stroke="#5e1212" stroke-width="1.8" />
              <circle cx="30" cy="24" r="7" fill="#b02c2c" stroke="#5e1212" stroke-width="1.8" />
              <circle cx="8" cy="24" r="2" fill="#ffdd99" />
              <circle cx="30" cy="24" r="2" fill="#ffdd99" />
            </g>
          </g>
        </g>
      </svg>
    `;
  },

  // 7. SCENE 07: The Old School
  renderOldSchoolScene() {
    return `
      <svg class="scene-illustration" viewBox="0 0 390 844" xmlns="http://www.w3.org/2000/svg">
        ${this.getAtmosphericSky('old-school')}

        <!-- Dusty Courtyard Ground -->
        <polygon points="0,480 390,460 390,844 0,844" fill="#c79c6d" class="day-only" />
        <polygon points="0,480 390,460 390,844 0,844" fill="#121724" class="night-only" />

        <!-- School Building Facade -->
        <g id="school-building">
          <polygon points="10,240 280,225 280,520 10,540" fill="#ded4c3" class="day-only" />
          <polygon points="10,240 280,225 280,520 10,540" fill="#161c28" class="night-only" />

          <!-- Terracotta Tiled Roof -->
          <polygon points="0,230 290,215 285,255 5,270" fill="#9e4e2b" class="day-only" />
          <polygon points="0,230 290,215 285,255 5,270" fill="#24120a" class="night-only" />

          <!-- Devanagari School Header Plaque -->
          <rect x="50" y="275" width="165" height="24" rx="3" fill="#b5a794" class="day-only" />
          <rect x="50" y="275" width="165" height="24" rx="3" fill="#202738" class="night-only" />
          <text x="132" y="291" font-family="'Cinzel', serif" font-size="9" font-weight="700" fill="#3b2b1d" text-anchor="middle" class="day-only">KALDHARA VIDYALAYA • 1978</text>
          <text x="132" y="291" font-family="'Cinzel', serif" font-size="9" font-weight="700" fill="#8ca5cf" text-anchor="middle" class="night-only">KALDHARA VIDYALAYA • 1978</text>

          <!-- Veranda Corridor Opening -->
          <path d="M40 330 C75 310, 190 310, 225 330 L225 510 L40 510 Z" fill="#3b2c1f" class="day-only" />
          <path d="M40 330 C75 310, 190 310, 225 330 L225 510 L40 510 Z" fill="#090d14" class="night-only" />

          <!-- Ghost silhouette running past doorway (School Blackboard Horror Interaction) -->
          <g id="school-doorway-runner" class="doorway-ghost-runner" opacity="0">
            <ellipse cx="130" cy="405" rx="16" ry="20" fill="#040608" />
            <path d="M112 422 C112 400, 148 400, 148 422 L152 495 L108 495 Z" fill="#040608" />
            <path d="M100 435 Q130 415 160 440" stroke="#040608" stroke-width="4.5" stroke-linecap="round" fill="none" />
          </g>

          <!-- BLACKBOARD ON VERANDA WALL (#hotspot-school-blackboard) -->
          <g id="hotspot-school-blackboard" class="interactive-object" style="cursor: pointer;" transform="translate(60, 340)">
            <!-- Heavy Wooden Blackboard Frame -->
            <rect x="0" y="0" width="150" height="95" rx="3" fill="#523824" stroke="#2e1d11" stroke-width="2.5" />
            <!-- Slate Blackboard Surface -->
            <rect x="6" y="6" width="138" height="83" rx="1.5" fill="#212925" />

            <!-- Original 1978 Chalk Writing -->
            <g id="blackboard-original-text">
              <text x="75" y="36" font-family="'Cinzel', serif" font-size="7.5" font-weight="700" fill="#dedede" text-anchor="middle">CLASS DISMISSED</text>
              <text x="75" y="48" font-family="'Cinzel', serif" font-size="6.5" font-weight="600" fill="#b0b0b0" text-anchor="middle">— 1978 —</text>
              <!-- Scratched Chalk Line Below -->
              <line x1="25" y1="56" x2="125" y2="56" stroke="#808080" stroke-width="1" stroke-dasharray="3,2" />
              <!-- Newer Uneven Chalk Handwriting -->
              <text x="75" y="74" font-family="'Cinzel', serif" font-size="6.5" font-weight="700" fill="#d42626" text-anchor="middle">THEY NEVER CAME BACK.</text>
            </g>

            <!-- Dynamic Rapid Horror Writing (Self-writes upon interaction) -->
            <g id="blackboard-horror-writing">
              <text id="bb-run-1" x="75" y="28" font-family="'Cinzel', serif" font-size="8.5" font-weight="800" fill="#e82c2c" text-anchor="middle" opacity="0">RUN.</text>
              <text id="bb-run-2" x="75" y="46" font-family="'Cinzel', serif" font-size="8.5" font-weight="800" fill="#e82c2c" text-anchor="middle" opacity="0">RUN.</text>
              <text id="bb-run-3" x="75" y="64" font-family="'Cinzel', serif" font-size="8.5" font-weight="800" fill="#e82c2c" text-anchor="middle" opacity="0">RUN.</text>
              <text id="bb-he-is-here" x="75" y="82" font-family="'Cinzel', serif" font-size="7.8" font-weight="900" fill="#ff1a1a" text-anchor="middle" opacity="0" letter-spacing="1">HE IS HERE.</text>
            </g>

            <!-- Chalk Dust Ledge -->
            <rect x="2" y="89" width="146" height="5" fill="#382517" />
            <rect x="30" y="87" width="12" height="3" fill="#ffffff" opacity="0.8" />

            <!-- Beacon Glow -->
            <ellipse cx="75" cy="48" rx="40" ry="25" fill="#fedaa2" opacity="0.25" class="day-only" filter="url(#glow-blur)" />
            <ellipse cx="75" cy="48" rx="40" ry="25" fill="#7bb5e8" opacity="0.35" class="night-only" filter="url(#glow-blur)" />
          </g>
        </g>

        <!-- Large Peepal Tree with Spreading Branch on Right -->
        <g id="school-tree" transform="translate(250, 140)">
          <!-- Massive Trunk Base -->
          <path d="M40 380 Q55 240 70 120 Q80 40 120 0 L140 0 Q105 50 100 130 Q90 260 110 380 Z" fill="#452f1d" class="day-only" />
          <path d="M40 380 Q55 240 70 120 Q80 40 120 0 L140 0 Q105 50 100 130 Q90 260 110 380 Z" fill="#131924" class="night-only" />

          <!-- Big Horizontal Limb Extending Left across Courtyard -->
          <path d="M75 140 C30 145, -30 150, -80 160 C-30 165, 40 160, 75 160 Z" fill="#452f1d" class="day-only" />
          <path d="M75 140 C30 145, -30 150, -80 160 C-30 165, 40 160, 75 160 Z" fill="#131924" class="night-only" />

          <!-- Dense Canopy Foliage -->
          <circle cx="80" cy="50" r="75" fill="#4d6b38" class="day-only" />
          <circle cx="0" cy="90" r="60" fill="#3e572d" class="day-only" />
          <circle cx="80" cy="50" r="75" fill="#101a18" class="night-only" />
          <circle cx="0" cy="90" r="60" fill="#0b1211" class="night-only" />

          <!-- THE SCHOOL SWING (#hotspot-school-swing) -->
          <g id="hotspot-school-swing" class="interactive-object" style="cursor: pointer;" transform="translate(-20, 155)">
            <!-- Animated Swing Rig (Sways slowly in Night mode) -->
            <g id="school-swing-rig" class="school-swing-anim">
              <!-- Left Rope -->
              <line x1="-15" y1="0" x2="-15" y2="280" stroke="#705235" stroke-width="2.5" />
              <!-- Right Rope -->
              <line x1="25" y1="0" x2="25" y2="280" stroke="#705235" stroke-width="2.5" />
              <!-- Wooden Seat Plank -->
              <rect x="-24" y="278" width="58" height="12" rx="3" fill="#52341b" stroke="#331e0d" stroke-width="2" />

              <!-- Beacon Glow on Seat -->
              <ellipse cx="5" cy="284" rx="28" ry="16" fill="#fedaa2" opacity="0.25" class="day-only" filter="url(#glow-blur)" />
              <ellipse cx="5" cy="284" rx="30" ry="18" fill="#7bb5e8" opacity="0.35" class="night-only" filter="url(#glow-blur)" />
            </g>
          </g>
        </g>

        <!-- Student Desks in Open Courtyard (#hotspot-student-desks) -->
        <g id="hotspot-student-desks" class="interactive-object" style="cursor: pointer;" transform="translate(60, 560)">
          <!-- Row 1 Desk -->
          <polygon points="0,30 90,20 100,45 10,55" fill="#5e4026" stroke="#3b2615" stroke-width="1.8" />
          <rect x="5" y="48" width="8" height="35" fill="#3b2615" />
          <rect x="85" y="38" width="8" height="35" fill="#3b2615" />
          <!-- Open Notebook Left on Desk -->
          <polygon points="35,26 65,22 68,38 38,42" fill="#faf4eb" />
          <line x1="51" y1="24" x2="53" y2="40" stroke="#4a3b2b" stroke-width="1" />
          <!-- Slate Pencil -->
          <line x1="20" y1="36" x2="30" y2="34" stroke="#8a8a8a" stroke-width="2" />
        </g>
      </svg>
    `;
  },

  // 10. SCENE 10: The Forest Edge
  renderForestEdgeScene() {
    return `
      <svg class="scene-illustration" viewBox="0 0 390 844" xmlns="http://www.w3.org/2000/svg">
        ${this.getAtmosphericSky('forest-edge')}

        <!-- Distant Mountain Ridges -->
        <g class="distant-mountains">
          <polygon points="0,340 70,300 160,330 280,290 390,325 390,440 0,440" fill="#9e7355" class="day-only" opacity="0.6" />
          <polygon points="0,340 70,300 160,330 280,290 390,325 390,440 0,440" fill="#080e1a" class="night-only" opacity="0.8" />
        </g>

        <!-- Dense Black Forest Background (Day: dark green / Night: pure abyss) -->
        <g id="hotspot-forest-trees" class="interactive-object" style="cursor: pointer;">
          <!-- Dense Background Tree Silhouettes -->
          <path d="M0 220 Q70 140 140 230 Q210 130 290 220 Q350 150 390 200 L390 520 L0 520 Z" fill="#2d4529" class="day-only" />
          <path d="M0 220 Q70 140 140 230 Q210 130 290 220 Q350 150 390 200 L390 520 L0 520 Z" fill="#030508" class="night-only" />

          <!-- Massive Forest Tree Trunks Forming Wall of Trees -->
          <g class="forest-trunks">
            <rect x="20" y="160" width="35" height="360" fill="#3d2c1f" class="day-only" />
            <rect x="20" y="160" width="35" height="360" fill="#06090e" class="night-only" />

            <rect x="90" y="140" width="45" height="380" fill="#332419" class="day-only" />
            <rect x="90" y="140" width="45" height="380" fill="#04060a" class="night-only" />

            <rect x="270" y="130" width="55" height="390" fill="#332419" class="day-only" />
            <rect x="270" y="130" width="55" height="390" fill="#04060a" class="night-only" />

            <rect x="340" y="150" width="45" height="370" fill="#3d2c1f" class="day-only" />
            <rect x="340" y="150" width="45" height="370" fill="#06090e" class="night-only" />
          </g>

          <!-- Multiple Dark Silhouettes Running between Trees (Warning Sign Horror Interaction) -->
          <g id="forest-tree-shadow-runners">
            <g id="forest-runner-1" class="forest-tree-runner" opacity="0">
              <ellipse cx="65" cy="380" rx="14" ry="18" fill="#000000" />
              <path d="M52 395 C52 380, 78 380, 78 395 L82 460 L48 460 Z" fill="#000000" />
            </g>
            <g id="forest-runner-2" class="forest-tree-runner" opacity="0">
              <ellipse cx="195" cy="360" rx="12" ry="16" fill="#000000" />
              <path d="M184 374 C184 360, 206 360, 206 374 L210 430 L180 430 Z" fill="#000000" />
            </g>
            <g id="forest-runner-3" class="forest-tree-runner" opacity="0">
              <ellipse cx="320" cy="390" rx="15" ry="19" fill="#000000" />
              <path d="M306 406 C306 390, 334 390, 334 406 L338 470 L302 470 Z" fill="#000000" />
            </g>
          </g>

          <!-- NIGHT: Impenetrable Pure Black Void between Trees -->
          <rect x="0" y="240" width="390" height="280" fill="#000000" opacity="0.95" class="night-only" />

          <!-- NIGHT EVENT: 3 Pairs of Eerie Eyes appearing deep in forest -->
          <g id="forest-night-event-eyes">
            <g id="forest-eyes-pair-1" opacity="0">
              <ellipse cx="140" cy="270" rx="3.5" ry="4.5" fill="#f7c843" filter="url(#glow-blur)" />
              <ellipse cx="152" cy="270" rx="3.5" ry="4.5" fill="#f7c843" filter="url(#glow-blur)" />
              <ellipse cx="140" cy="270" rx="1.5" ry="3.5" fill="#000" />
              <ellipse cx="152" cy="270" rx="1.5" ry="3.5" fill="#000" />
            </g>
            <g id="forest-eyes-pair-2" opacity="0">
              <ellipse cx="240" cy="235" rx="3" ry="4" fill="#ff3838" filter="url(#glow-blur)" />
              <ellipse cx="250" cy="235" rx="3" ry="4" fill="#ff3838" filter="url(#glow-blur)" />
              <ellipse cx="240" cy="235" rx="1.2" ry="3" fill="#000" />
              <ellipse cx="250" cy="235" rx="1.2" ry="3" fill="#000" />
            </g>
            <g id="forest-eyes-pair-3" opacity="0">
              <ellipse cx="185" cy="305" rx="4" ry="5" fill="#ff9f1a" filter="url(#glow-blur)" />
              <ellipse cx="198" cy="305" rx="4" ry="5" fill="#ff9f1a" filter="url(#glow-blur)" />
              <ellipse cx="185" cy="305" rx="1.5" ry="3.5" fill="#000" />
              <ellipse cx="198" cy="305" rx="1.5" ry="3.5" fill="#000" />
            </g>
          </g>

          <!-- Sudden Foreground Ghost Runner Sprint -->
          <g id="forest-foreground-runner" opacity="0">
            <ellipse cx="200" cy="620" rx="32" ry="44" fill="#020305" />
            <path d="M162 650 C162 605, 238 605, 238 650 L248 830 L152 830 Z" fill="#020305" />
            <path d="M135 680 Q190 640 260 690" stroke="#020305" stroke-width="8" stroke-linecap="round" fill="none" />
          </g>

          <!-- NIGHT: Unblinking Yellow Eyes High in Canopy -->
          <g class="night-only" opacity="0.8">
            <ellipse cx="110" cy="205" rx="2.5" ry="3.5" fill="#f7c843" />
            <ellipse cx="118" cy="205" rx="2.5" ry="3.5" fill="#f7c843" />
            <circle cx="110" cy="205" r="1.2" fill="#000" />
            <circle cx="118" cy="205" r="1.2" fill="#000" />

            <ellipse cx="295" cy="185" rx="2" ry="3" fill="#e6573c" />
            <ellipse cx="303" cy="185" rx="2" ry="3" fill="#e6573c" />
          </g>

          <!-- Dense Interlocking Canopy Overhead -->
          <circle cx="50" cy="90" r="100" fill="#20331d" class="day-only" />
          <circle cx="200" cy="60" r="120" fill="#1b2e18" class="day-only" />
          <circle cx="340" cy="80" r="110" fill="#20331d" class="day-only" />
          <circle cx="50" cy="90" r="100" fill="#05080c" class="night-only" />
          <circle cx="200" cy="60" r="120" fill="#020406" class="night-only" />
          <circle cx="340" cy="80" r="110" fill="#05080c" class="night-only" />
        </g>

        <!-- Dusty Forest Road Verge Ground -->
        <polygon points="0,500 390,480 390,844 0,844" fill="#a87a4c" class="day-only" />
        <polygon points="0,500 390,480 390,844 0,844" fill="#0d111a" class="night-only" />

        <!-- NARROW DIRT PATH ENTERING THE TREES (#hotspot-forest-path) -->
        <g id="hotspot-forest-path" class="interactive-object" style="cursor: pointer;">
          <!-- Winding Path entering Darkness -->
          <polygon points="175,440 215,440 310,844 110,844" fill="#8c6136" class="day-only" />
          <polygon points="175,440 215,440 310,844 110,844" fill="#151b26" class="night-only" />

          <!-- Path disappearing into Pure Black at horizon -->
          <ellipse cx="195" cy="445" rx="35" ry="18" fill="#000" opacity="0.9" class="night-only" />

          <!-- Stones & Wild Grass on Verge -->
          <ellipse cx="135" cy="560" rx="14" ry="7" fill="#694d33" class="day-only" />
          <ellipse cx="270" cy="610" rx="18" ry="9" fill="#694d33" class="day-only" />
          <ellipse cx="135" cy="560" rx="14" ry="7" fill="#1f2533" class="night-only" />
          <ellipse cx="270" cy="610" rx="18" ry="9" fill="#1f2533" class="night-only" />
        </g>

        <!-- WEATHERED WOODEN SIGN (#hotspot-forest-sign) -->
        <g id="hotspot-forest-sign" class="interactive-object" style="cursor: pointer;" transform="translate(65, 480)">
          <!-- Cast Shadow -->
          <ellipse cx="40" cy="185" rx="45" ry="14" fill="#000" opacity="0.35" class="day-only" />
          <ellipse cx="40" cy="185" rx="45" ry="14" fill="#000" opacity="0.75" class="night-only" />

          <!-- Rustic Timber Post sunk into earth -->
          <rect x="34" y="40" width="14" height="150" fill="#472f1e" stroke="#26170d" stroke-width="2" />

          <!-- Weathered Sign Board Plank -->
          <polygon points="-15,10 95,0 92,75 -18,85" fill="#543823" stroke="#29160a" stroke-width="2.5" />
          <!-- Wood Grain Splits -->
          <line x1="-12" y1="36" x2="88" y2="28" stroke="#3b2313" stroke-width="1.8" />
          <line x1="-10" y1="58" x2="86" y2="50" stroke="#3b2313" stroke-width="1.8" />

          <!-- DAY SIGN TEXT: "DO NOT ENTER AFTER DARK" -->
          <g class="day-only">
            <text x="38" y="32" font-family="'Cinzel', serif" font-size="7.5" font-weight="700" fill="#24140b" text-anchor="middle">DO NOT ENTER</text>
            <text x="38" y="52" font-family="'Cinzel', serif" font-size="6.5" font-weight="600" fill="#5c1a1a" text-anchor="middle">AFTER DARK</text>
          </g>

          <!-- NIGHT SIGN TEXT: "DO NOT ENTER" with "AFTER DARK" violently scratched away -->
          <g class="night-only">
            <text x="38" y="32" font-family="'Cinzel', serif" font-size="7.5" font-weight="700" fill="#e8ded8" text-anchor="middle">DO NOT ENTER</text>
            <!-- Faded remnant of AFTER DARK -->
            <text x="38" y="52" font-family="'Cinzel', serif" font-size="6.5" font-weight="600" fill="#4d3528" text-anchor="middle" opacity="0.5">AFTER DARK</text>
            <!-- Violent Blood-Red Claw Scratches Gouging Out AFTER DARK -->
            <path d="M0 48 L80 44 M5 56 L75 52 M-5 42 L85 58" stroke="#8c1111" stroke-width="3" stroke-linecap="round" />
          </g>

          <!-- Beacon Halo -->
          <ellipse cx="38" cy="45" rx="35" ry="25" fill="#fedaa2" opacity="0.25" class="day-only" filter="url(#glow-blur)" />
          <ellipse cx="38" cy="45" rx="35" ry="25" fill="#7bb5e8" opacity="0.35" class="night-only" filter="url(#glow-blur)" />
        </g>
      </svg>
    `;
  },

  // 11. SCENE 11: The Small Shrine
  renderSmallShrineScene() {
    return `
      <svg class="scene-illustration" viewBox="0 0 390 844" xmlns="http://www.w3.org/2000/svg">
        ${this.getAtmosphericSky('small-shrine')}

        <!-- Forest Verge Background -->
        <polygon points="0,480 390,460 390,844 0,844" fill="#ba8c5b" class="day-only" />
        <polygon points="0,480 390,460 390,844 0,844" fill="#111622" class="night-only" />

        <!-- Distant Trees Bordering Road -->
        <g class="verge-trees">
          <circle cx="60" cy="380" r="90" fill="#2d4224" class="day-only" opacity="0.5" />
          <circle cx="330" cy="360" r="110" fill="#2d4224" class="day-only" opacity="0.5" />
          <circle cx="60" cy="380" r="90" fill="#080d14" class="night-only" opacity="0.7" />
          <circle cx="330" cy="360" r="110" fill="#080d14" class="night-only" opacity="0.7" />
        </g>

        <!-- THE ROADSIDE SMALL STONE SHRINE STRUCTURE -->
        <g id="small-shrine-monument" transform="translate(115, 300)">
          <!-- Cast Shadow -->
          <ellipse cx="80" cy="360" rx="90" ry="25" fill="#000" opacity="0.35" class="day-only" />
          <ellipse cx="80" cy="360" rx="90" ry="25" fill="#000" opacity="0.75" class="night-only" />

          <!-- Stone Steps Base -->
          <polygon points="10,340 150,340 160,370 0,370" fill="#8f7a68" class="day-only" />
          <polygon points="10,340 150,340 160,370 0,370" fill="#1b212e" class="night-only" />
          <polygon points="25,310 135,310 145,340 15,340" fill="#a8927e" class="day-only" />
          <polygon points="25,310 135,310 145,340 15,340" fill="#232a3b" class="night-only" />

          <!-- TARNISHED METAL BRASS PLATE (#hotspot-shrine-plate) -->
          <g id="hotspot-shrine-plate" class="interactive-object" style="cursor: pointer;" transform="translate(35, 342)">
            <!-- Tarnished Brass Plate -->
            <rect x="0" y="0" width="90" height="22" rx="2" fill="#786c38" stroke="#3d371a" stroke-width="1.2" />
            <!-- Patina Verdigris Highlights -->
            <rect x="2" y="2" width="86" height="18" fill="#4d5c43" opacity="0.4" />
            <!-- Engraved Weathered Inscription -->
            <text x="45" y="11" font-family="'Cinzel', serif" font-size="4" font-weight="700" fill="#ede8d8" text-anchor="middle">FOR THOSE WHO</text>
            <text x="45" y="18" font-family="'Cinzel', serif" font-size="4" font-weight="700" fill="#ede8d8" text-anchor="middle">COULD NOT LEAVE.</text>
          </g>

          <!-- Shrine Main Stone Body -->
          <polygon points="35,140 125,140 135,310 25,310" fill="#d1beaa" class="day-only" />
          <polygon points="35,140 125,140 135,310 25,310" fill="#2a3347" class="night-only" />

          <!-- Curved Sikhara / Dome Peak -->
          <path d="M35 140 C55 60, 105 60, 125 140 Z" fill="#bfa893" class="day-only" />
          <path d="M35 140 C55 60, 105 60, 125 140 Z" fill="#202738" class="night-only" />
          <!-- Kalash Finial Brass Tip -->
          <polygon points="76,45 84,45 80,25" fill="#c49f47" />
          <circle cx="80" cy="50" r="5" fill="#d9b65b" />

          <!-- Arched Sanctum Alcove Niche -->
          <path d="M48 190 C48 165, 112 165, 112 190 L112 300 L48 300 Z" fill="#291e17" class="day-only" />
          <path d="M48 190 C48 165, 112 165, 112 190 L112 300 L48 300 Z" fill="#080a0f" class="night-only" />

          <!-- Stone Idol (Murti) inside Alcove -->
          <g class="stone-idol" transform="translate(68, 205)">
            <ellipse cx="12" cy="18" rx="9" ry="12" fill="#544941" />
            <!-- Vermilion Red Cloth draped over idol -->
            <polygon points="4,22 20,22 24,70 0,70" fill="#b02121" stroke="#6e1313" stroke-width="1.2" />
            <!-- Sacred Tilak Mark -->
            <line x1="12" y1="12" x2="12" y2="20" stroke="#ffdd44" stroke-width="2" />
            <circle cx="12" cy="16" r="1.5" fill="#a11212" />
          </g>

          <!-- Little Brass Bells hanging from Canopy -->
          <polygon points="48,160 54,160 52,172 50,172" fill="#d4ad48" />
          <polygon points="106,160 112,160 110,172 108,172" fill="#d4ad48" />

          <!-- Fresh Marigold Flowers scattered on Step (#hotspot-shrine-flowers) -->
          <g id="hotspot-shrine-flowers" class="interactive-object shrine-marigolds" style="cursor: pointer;">
            <circle class="shrine-flower-petal" cx="45" cy="305" r="4.5" fill="#f09624" />
            <circle class="shrine-flower-petal" cx="53" cy="307" r="4" fill="#f0bf24" />
            <circle class="shrine-flower-petal" cx="108" cy="305" r="4.5" fill="#f09624" />
            <circle class="shrine-flower-petal" cx="116" cy="307" r="4" fill="#d94b18" />
          </g>

          <!-- BURNING DIYA OIL LAMP (#hotspot-shrine-lamp) -->
          <g id="hotspot-shrine-lamp" class="interactive-object" style="cursor: pointer;" transform="translate(38, 290)">
            <!-- Terracotta Diya Saucer -->
            <ellipse cx="12" cy="16" rx="9" ry="4.5" fill="#8a4d2e" stroke="#572e18" stroke-width="1" />
            <!-- Lamp Flame (Burns with warm steady flame in Night mode) -->
            <g id="shrine-diya-flame" class="shrine-flame-flicker">
              <path class="shrine-flame-core" d="M12 14 C9 12, 10 7, 12 2 C14 7, 15 12, 12 14 Z" fill="#ffbd38" />
              <path class="shrine-flame-inner" d="M12 13 C10.5 11, 11 8, 12 5 C13 8, 13.5 11, 12 13 Z" fill="#ffffff" />
              <!-- Flame Radial Glow (Prominent at Night) -->
              <circle class="shrine-flame-halo" cx="12" cy="8" r="18" fill="#ffaa33" opacity="0.35" class="night-only" filter="url(#glow-blur)" />
              <circle cx="12" cy="8" r="6" fill="#ffaa33" opacity="0.25" class="day-only" filter="url(#glow-blur)" />
            </g>
          </g>

          <!-- INCENSE BURNER & RISING SMOKE (#hotspot-shrine-incense) -->
          <g id="hotspot-shrine-incense" class="interactive-object" style="cursor: pointer;" transform="translate(112, 285)">
            <!-- Small Brass Bowl -->
            <polygon points="4,22 16,22 18,28 2,28" fill="#a1823d" />
            <!-- Incense Stick -->
            <line x1="10" y1="22" x2="6" y2="4" stroke="#4a3b2b" stroke-width="1.8" />
            <!-- Burning Ember Tip -->
            <circle cx="6" cy="4" r="1.5" fill="#f74d31" />

            <!-- Rising Incense Smoke Curls (Smooth animated path) -->
            <path id="shrine-incense-smoke" class="incense-smoke-anim" d="M6 3 C2 -10, 15 -25, 4 -40 C-6 -55, 12 -70, 2 -85" stroke="#e8ded8" stroke-width="1.8" fill="none" opacity="0.75" />
          </g>
        </g>
      </svg>
    `;
  },

  // 12. SCENE 12: The Second Note
  renderSecondNoteScene() {
    return `
      <svg viewBox="0 0 390 844" class="scene-illustration" xmlns="http://www.w3.org/2000/svg">
        ${this.getAtmosphericSky('second-note')}

        <!-- Forest Verge Background -->
        <polygon points="0,480 390,460 390,844 0,844" fill="#a87d55" class="day-only" />
        <polygon points="0,480 390,460 390,844 0,844" fill="#101522" class="night-only" />

        <!-- Distant Silhouette of Small Shrine & Trees -->
        <g class="distant-shrine-view" transform="translate(260, 320)" opacity="0.75">
          <path d="M15 80 C25 30, 55 30, 65 80 L65 140 L15 140 Z" fill="#695340" class="day-only" />
          <path d="M15 80 C25 30, 55 30, 65 80 L65 140 L15 140 Z" fill="#080c14" class="night-only" />
          <polygon points="38,20 42,20 40,10" fill="#c49f47" />
          <!-- Small Burning Lamp Glow at Shrine -->
          <circle cx="40" cy="120" r="4" fill="#ffaa33" class="night-only" filter="url(#glow-blur)" />
        </g>

        <!-- Weathered Stone Boundary Marker (#hotspot-shrine-boundary) -->
        <g id="hotspot-shrine-boundary" class="interactive-object cairn-monument" transform="translate(50, 420)">
          <!-- Ground Cairn Shadow -->
          <ellipse cx="50" cy="190" rx="65" ry="18" fill="#000" opacity="0.6" />

          <!-- Stack of Ancient Weathered River Stones -->
          <ellipse cx="45" cy="180" rx="55" ry="20" class="cairn-stone-block" />
          <ellipse cx="55" cy="155" rx="46" ry="17" class="cairn-stone-block" />
          <ellipse cx="48" cy="130" rx="38" ry="15" class="cairn-stone-block" />
          <ellipse cx="52" cy="105" rx="28" ry="13" class="cairn-stone-block" />
          <ellipse cx="50" cy="85" rx="18" ry="10" class="cairn-stone-block" />

          <!-- Carved Tally Marks on the Base Stone -->
          <line x1="30" y1="172" x2="30" y2="186" stroke="#2b231c" stroke-width="1.8" />
          <line x1="36" y1="172" x2="36" y2="186" stroke="#2b231c" stroke-width="1.8" />
          <line x1="42" y1="172" x2="42" y2="186" stroke="#2b231c" stroke-width="1.8" />
          <line x1="48" y1="172" x2="48" y2="186" stroke="#2b231c" stroke-width="1.8" />
          <line x1="28" y1="184" x2="52" y2="174" stroke="#2b231c" stroke-width="1.8" />

          <!-- NIGHT: Eerie Spectral Mist Around Cairn -->
          <ellipse cx="50" cy="160" rx="70" ry="40" fill="#24344d" opacity="0.25" filter="url(#glow-blur)" class="night-only" />
        </g>

        <!-- THE OLD WOODEN BOX WITH THE SECOND NOTE (Interactive Hero Object) -->
        <g id="hotspot-second-note-box" class="interactive-object wooden-box-assembly" style="cursor: pointer;" transform="translate(175, 520)">
          <!-- Cast Box Shadow -->
          <ellipse cx="55" cy="82" rx="65" ry="16" fill="#000" opacity="0.75" />

          <!-- Box Base Body -->
          <polygon points="10,40 100,32 108,80 18,88" class="wooden-box-body" />
          <!-- Front Panel Face -->
          <polygon points="18,88 108,80 108,82 18,90" fill="#26160b" />

          <!-- Brass Reinforcing Corner Brackets -->
          <polygon points="10,40 22,39 20,52 11,50" class="wooden-box-brass" />
          <polygon points="18,76 28,75 26,87 18,88" class="wooden-box-brass" />
          <polygon points="98,32 100,32 108,44 96,44" class="wooden-box-brass" />
          <polygon points="98,68 108,68 108,80 98,80" class="wooden-box-brass" />

          <!-- Brass Center Front Lock Hasp -->
          <rect x="58" y="60" width="10" height="18" rx="1.5" class="wooden-box-brass" />
          <circle cx="63" cy="73" r="2.2" fill="#26160b" />

          <!-- ROLLED SECOND NOTE PARCHMENT VISIBLE INSIDE -->
          <g class="rolled-second-note" transform="translate(30, 26) rotate(-8)">
            <!-- Rolled Parchment Cylinder -->
            <path d="M6 14 C6 8, 12 6, 18 8 L54 12 C60 13, 62 20, 62 26 C62 32, 58 36, 52 35 L16 30 C10 29, 6 22, 6 14 Z" 
                  fill="#f7eedb" stroke="#8b5a2b" stroke-width="1.2" />
            <!-- Crimson Sealing Cord -->
            <line x1="36" y1="10" x2="34" y2="33" stroke="#a31924" stroke-width="2.5" />
            <circle cx="35" cy="22" r="3.8" fill="#750c14" />
            <!-- Scroll Rolled Edges -->
            <ellipse cx="10" cy="18" rx="3.5" ry="7" fill="#ebd8b5" stroke="#754c22" stroke-width="1" />
            <ellipse cx="56" cy="23" rx="3" ry="6.5" fill="#ebd8b5" stroke="#754c22" stroke-width="1" />
          </g>

          <!-- Propped-Ajar Box Lid (Open enough to see the scroll) -->
          <polygon points="6,34 98,24 104,10 12,20" class="wooden-box-body" stroke="#482914" stroke-width="2" />
          <!-- Lid Interior Shadow -->
          <polygon points="12,20 104,10 100,32 10,40" fill="#140b05" opacity="0.9" />

          <!-- Beacon Glow over the Box -->
          <ellipse cx="58" cy="45" rx="35" ry="20" fill="#fedaa2" opacity="0.25" class="day-only" filter="url(#glow-blur)" />
          <ellipse cx="58" cy="45" rx="38" ry="22" fill="#7bb5e8" opacity="0.35" class="night-only" filter="url(#glow-blur)" />
        </g>
      </svg>
    `;
  },

  // 14. SCENE 14: The Forgotten Street
  renderForgottenStreetScene() {
    return `
      <svg class="scene-illustration" viewBox="0 0 390 844" xmlns="http://www.w3.org/2000/svg">
        ${this.getAtmosphericSky('forgotten-street')}

        <!-- Narrow Alley Encroaching Walls: Left Haveli Facade -->
        <g class="street-left-facade">
          <polygon points="0,140 145,280 120,844 0,844" fill="#6d482f" />
          <polygon points="0,140 145,280 140,844 120,844" fill="#4d3220" />
          <!-- High weathered windows -->
          <rect x="25" y="240" width="35" height="50" rx="3" fill="#2d1b11" />
          <path d="M25 240 Q42 225 60 240 Z" fill="#2d1b11" />
          <rect x="30" y="340" width="30" height="42" rx="2" fill="#24160e" />
          <!-- Heavy Timber Roof Brackets -->
          <polygon points="0,180 50,210 40,225 0,195" fill="#361f12" />
          <polygon points="50,210 110,250 100,265 40,225" fill="#361f12" />
          
          <!-- Closed Left Door (Cracked slightly open at NIGHT) (Interactive Hotspot) -->
          <g id="hotspot-street-doors" class="interactive-object">
            <path d="M35 520 Q65 490 95 520 L95 670 L35 670 Z" fill="#261309" stroke="#5a3118" stroke-width="2" />
            <line x1="65" y1="500" x2="65" y2="670" stroke="#140804" stroke-width="2.5" />
            <circle cx="58" cy="590" r="3" fill="#c49a45" />
            <!-- NIGHT ONLY: Dark void & faint amber glint inside -->
            <g class="night-only">
              <polygon points="62,502 67,504 67,670 62,670" fill="#050302" />
              <line x1="64" y1="520" x2="64" y2="650" stroke="#ff8811" stroke-width="1.2" opacity="0.65" filter="url(#glow-blur)" />
            </g>
          </g>
        </g>

        <!-- Right Haveli Facade (Cracked plaster & creepers) -->
        <g class="street-right-facade">
          <polygon points="390,120 245,270 270,844 390,844" fill="#785034" />
          <polygon points="245,270 250,844 270,844" fill="#543622" />
          <!-- Upper arched jharokha balcony -->
          <polygon points="300,210 375,170 380,270 305,310" fill="#4d301c" />
          <rect x="320" y="240" width="32" height="48" rx="3" fill="#25160d" />
          <path d="M320 240 Q336 226 352 240 Z" fill="#25160d" />
          <!-- Wild creepers on stone -->
          <path d="M260 450 Q280 430 275 390 T290 330 T285 270" stroke="#2e381b" stroke-width="3" fill="none" />
          <ellipse cx="272" cy="420" rx="8" ry="4" fill="#3f4d25" />
          <ellipse cx="282" cy="360" rx="9" ry="5" fill="#3f4d25" />
          <!-- Right Wooden Door -->
          <path d="M295 530 Q320 505 345 530 L345 665 L295 665 Z" fill="#2b170c" stroke="#5a3118" stroke-width="1.8" />
        </g>

        <!-- Vanishing Point Archway at Far End of Alley -->
        <g class="street-distant-arch" transform="translate(160, 360)">
          <!-- Distant arched opening -->
          <path d="M5 90 Q35 45 65 90 L65 140 L5 140 Z" fill="#140c08" />
          <path d="M0 92 Q35 40 70 92 L70 140 L0 140 Z" fill="none" stroke="#3d2417" stroke-width="3" />

          <!-- NIGHT ONLY: Distant Silhouetted Figure (Interactive Hotspot) -->
          <g id="hotspot-street-figure" class="interactive-object night-only street-ghost-figure" opacity="0.95">
            <!-- Figure head -->
            <ellipse cx="35" cy="80" rx="4.5" ry="5.5" fill="#040201" />
            <!-- Neck & shoulders -->
            <path d="M26 94 Q35 84 44 94 L42 124 L28 124 Z" fill="#040201" />
            <!-- Hanging shawl silhouette -->
            <path d="M27 94 Q25 110 26 122 L44 122 Q45 110 43 94 Z" fill="#080402" />
          </g>
        </g>

        <!-- Deep Perspective Flagstone Road (Interactive Hotspot) -->
        <g id="hotspot-street-whisper" class="interactive-object street-cobblestones">
          <polygon points="165,450 225,450 330,844 60,844" fill="#523928" />
          <!-- Receding center gutter & stone lines -->
          <line x1="195" y1="450" x2="195" y2="844" stroke="#362215" stroke-width="2.5" />
          <line x1="180" y1="450" x2="130" y2="844" stroke="#3a2517" stroke-width="1.5" />
          <line x1="210" y1="450" x2="260" y2="844" stroke="#3a2517" stroke-width="1.5" />
          <!-- Transverse stone joints -->
          <line x1="168" y1="480" x2="222" y2="480" stroke="#362215" stroke-width="1.5" opacity="0.6" />
          <line x1="155" y1="525" x2="235" y2="525" stroke="#362215" stroke-width="1.8" opacity="0.6" />
          <line x1="138" y1="585" x2="252" y2="585" stroke="#362215" stroke-width="2" opacity="0.65" />
          <line x1="115" y1="660" x2="275" y2="660" stroke="#362215" stroke-width="2.2" opacity="0.7" />
          <line x1="88" y1="750" x2="302" y2="750" stroke="#362215" stroke-width="2.5" opacity="0.75" />
          <!-- Weeds in cracks -->
          <path d="M185 660 Q188 645 192 640 Q190 650 188 660 Z" fill="#3b421a" />
          <path d="M205 750 Q208 732 214 728 Q210 740 208 750 Z" fill="#3b421a" />
        </g>

        <!-- Cold Ambient Fog Layer in Street (NIGHT ONLY) -->
        <g class="night-only">
          <ellipse cx="195" cy="540" rx="140" ry="32" fill="#1b2030" opacity="0.45" class="fog-drift" />
          <ellipse cx="195" cy="700" rx="180" ry="40" fill="#131724" opacity="0.5" class="fog-drift" />
        </g>
      </svg>
    `;
  },

  // 15. SCENE 15: The House at the End
  renderHouseAtEndScene() {
    return `
      <svg class="scene-illustration" viewBox="0 0 390 844" xmlns="http://www.w3.org/2000/svg">
        ${this.getAtmosphericSky('house-at-end')}

        <!-- Cul-de-sac Ground Mound & Cobblestones -->
        <polygon points="0,560 390,560 390,844 0,844" fill="#5c4331" />
        <ellipse cx="195" cy="620" rx="170" ry="45" fill="#4a3424" opacity="0.6" />

        <!-- Distant Enclosing Walls on Left and Right -->
        <polygon points="0,320 65,360 45,620 0,640" fill="#4d3322" />
        <polygon points="390,310 325,355 345,620 390,640" fill="#4d3322" />

        <!-- The Ancient Solitary Haveli Facade (Center) -->
        <g class="house-at-end-building">
          <!-- Main sandstone block -->
          <polygon points="55,240 335,240 345,600 45,600" fill="#a1724d" />
          <!-- Weathered roof parapet with carved merlons -->
          <polygon points="45,210 345,210 335,240 55,240" fill="#7d5336" />
          <rect x="75" y="195" width="240" height="15" fill="#5e3c25" />
          <!-- Upper Carved Window with Warm Light / Shadow -->
          <g id="hotspot-end-house-window" class="interactive-object">
            <rect x="155" y="275" width="80" height="95" rx="4" fill="#24140b" />
            <path d="M155 275 Q195 240 235 275 Z" fill="#24140b" />
            <!-- DAY: Sun-bleached linen curtain -->
            <rect x="160" y="280" width="70" height="85" fill="#d4c1a5" class="day-only" />
            <!-- NIGHT: Warm Golden Lamp Light -->
            <g class="night-only">
              <rect id="end-house-window-light" x="160" y="280" width="70" height="85" fill="#ffa82e" filter="url(#glow-blur)" />
              <rect x="160" y="280" width="70" height="85" fill="#ffdf94" opacity="0.75" />
              <!-- Shadow Figure Passing Behind Curtain (Animated) -->
              <path id="window-curtain-shadow" class="curtain-shadow-glide" d="M185 290 Q195 285 205 290 L212 360 L178 360 Z" fill="#291508" opacity="0.65" />
            </g>
          </g>

          <!-- 3 Stone Steps Leading up to Veranda -->
          <polygon points="105,585 285,585 295,605 95,605" fill="#875c3d" />
          <polygon points="95,605 295,605 305,625 85,625" fill="#754e32" />
          <polygon points="85,625 305,625 315,645 75,645" fill="#634129" />

          <!-- Entrance Doorway (Double Timber Doors with Opening Animation) (Interactive Hotspot) -->
          <g id="hotspot-end-house-door" class="interactive-object">
            <!-- Door Arch Frame -->
            <path d="M140 430 Q195 380 250 430 L250 585 L140 585 Z" fill="#1b0e07" stroke="#482914" stroke-width="3" />
            
            <!-- Interior Warm Glow (Visible when door opens) -->
            <path id="house-interior-glow" d="M145 435 Q195 390 245 435 L245 585 L145 585 Z" fill="#ffb443" opacity="0.85" filter="url(#glow-blur)" />

            <!-- The Door Leaves (Can rotate/creak open) -->
            <g id="house-end-door-group" class="door-leaf-container">
              <!-- Left Leaf -->
              <path class="door-leaf-left" d="M142 432 Q168 405 195 408 L195 585 L142 585 Z" fill="#3d2112" stroke="#221107" stroke-width="1.8" />
              <!-- Right Leaf -->
              <path class="door-leaf-right" d="M195 408 Q222 405 248 432 L248 585 L195 585 Z" fill="#351c0e" stroke="#221107" stroke-width="1.8" />
              <!-- Brass Studs & Latch -->
              <circle cx="188" cy="505" r="3" fill="#c49a45" />
              <line x1="184" y1="505" x2="195" y2="505" stroke="#c49a45" stroke-width="2" />
            </g>
          </g>

          <!-- Outside Bottle Sitting on Stone Step (Interactive Hotspot) -->
          <g id="hotspot-end-house-bottle" class="interactive-object" transform="translate(245, 608) rotate(-10)">
            <!-- Mini Bottle Glow -->
            <ellipse cx="22" cy="10" rx="32" ry="16" fill="#7acbd8" opacity="0.25" filter="url(#glow-blur)" />
            <!-- Bottle Shadow -->
            <ellipse cx="20" cy="18" rx="26" ry="7" fill="#140c08" opacity="0.75" />
            <!-- Glass Body -->
            <path d="M5 8 C5 0, 15 -2, 22 2 L38 4 C45 5, 48 10, 48 15 C48 20, 45 24, 38 25 L22 26 C15 28, 5 26, 5 20 Z" fill="#1c3038" stroke="#68b9c7" stroke-width="1.6" opacity="0.85" />
            <!-- Tiny Rolled Note Inside -->
            <path d="M12 12 L32 14 L30 19 L10 17 Z" fill="#eed2a4" stroke="#8b5a2b" stroke-width="0.8" />
            <line x1="22" y1="12" x2="22" y2="19" stroke="#a31924" stroke-width="1.5" />
            <!-- Cork/Neck -->
            <path d="M5 11 L-3 12 C-5 13, -5 16, -3 17 L5 18 Z" fill="#68b9c7" />
          </g>
        </g>

        <!-- Night Mist Floating on the Ground -->
        <g class="night-only">
          <ellipse cx="195" cy="690" rx="170" ry="38" fill="#171e2e" opacity="0.45" class="fog-drift" />
        </g>
      </svg>
    `;
  },

  // 16. SCENE 16: The Documentation Room
  renderRoomScene() {
    return `
      <svg class="scene-illustration" viewBox="0 0 390 844" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <radialGradient id="lantern-glow-radial" cx="35%" cy="58%" r="65%">
            <stop offset="0%" stop-color="#ffe6a8" stop-opacity="0.95" />
            <stop offset="25%" stop-color="#ffb84d" stop-opacity="0.65" />
            <stop offset="55%" stop-color="#d9751e" stop-opacity="0.3" />
            <stop offset="85%" stop-color="#1c130d" stop-opacity="0.05" />
            <stop offset="100%" stop-color="#140d08" stop-opacity="0" />
          </radialGradient>
        </defs>

        <!-- Room Background Walls (Dark plaster & ceiling beams) -->
        <rect width="100%" height="100%" fill="#1a110a" />
        <rect width="100%" height="480" fill="#24180f" />
        
        <!-- Heavy Ceiling Timber Beams -->
        <polygon points="0,0 390,0 390,45 0,35" fill="#120b06" />
        <polygon points="40,0 80,0 60,120 20,120" fill="#160e08" />
        <polygon points="170,0 210,0 200,120 160,120" fill="#160e08" />
        <polygon points="310,0 350,0 340,120 300,120" fill="#160e08" />

        <!-- Wall Shelf with Glass Bottles (Top) -->
        <polygon points="30,135 360,135 355,150 35,150" fill="#3a2414" />
        <g id="room-shelf-bottles">
          <!-- Bottle 1 on shelf -->
          <rect x="70" y="85" width="22" height="50" rx="3" fill="#1b2d33" stroke="#68b9c7" stroke-width="1.2" opacity="0.8" />
          <rect x="74" y="98" width="14" height="32" rx="2" fill="#eed2a4" />
          <!-- Bottle 2 on shelf -->
          <rect x="110" y="80" width="24" height="55" rx="3" fill="#1b2d33" stroke="#68b9c7" stroke-width="1.2" opacity="0.8" />
          <rect x="114" y="95" width="16" height="35" rx="2" fill="#eed2a4" />
          <!-- Bottle 3 on shelf -->
          <rect x="290" y="88" width="20" height="47" rx="3" fill="#1b2d33" stroke="#68b9c7" stroke-width="1.2" opacity="0.8" />
          <rect x="294" y="100" width="12" height="30" rx="2" fill="#eed2a4" />
        </g>

        <!-- Pinned Village Maps on the Wall (Interactive Hotspot) -->
        <g id="hotspot-room-maps" class="interactive-object" transform="translate(130, 165)">
          <!-- Main Map Sheet -->
          <polygon points="0,0 135,-8 138,150 5,155" fill="#dfc699" stroke="#8c6a3e" stroke-width="1.5" />
          <!-- Pinned Wooden Tacks -->
          <circle cx="12" cy="8" r="3" fill="#4d1a08" />
          <circle cx="125" cy="3" r="3" fill="#4d1a08" />
          <!-- Hand-drawn Village Routes & Roads in Ink -->
          <path d="M20 30 Q45 60 70 45 T115 70 T95 120 T35 110 Z" fill="none" stroke="#6b4624" stroke-width="2" />
          <circle cx="20" cy="30" r="3.5" fill="#8c2311" /> <!-- The Well -->
          <polygon points="68,40 73,48 64,48" fill="#8c2311" /> <!-- Temple -->
          <ellipse cx="115" cy="70" rx="4" ry="4" fill="#3b5e28" /> <!-- Banyan -->
          <rect x="90" y="115" width="8" height="8" fill="#a81919" /> <!-- Red House -->
          <text x="35" y="140" font-family="serif" font-size="8" fill="#543719" font-style="italic">"Kaldhara Loop 1978-2025"</text>
        </g>

        <!-- Heavy Wooden Documentation Desk (Foreground) -->
        <g class="room-desk-structure">
          <!-- Antique Wooden Chair Backrest Behind Desk -->
          <path d="M150 420 Q195 390 240 420 L235 480 L155 480 Z" fill="#2d1a0e" stroke="#160b05" stroke-width="2" />
          <line x1="175" y1="410" x2="175" y2="480" stroke="#1c1008" stroke-width="3" />
          <line x1="195" y1="405" x2="195" y2="480" stroke="#1c1008" stroke-width="3" />
          <line x1="215" y1="410" x2="215" y2="480" stroke="#1c1008" stroke-width="3" />

          <!-- Main Desk Surface -->
          <polygon points="10,480 380,480 390,740 0,740" fill="#4a2e1b" />
          <polygon points="0,740 390,740 390,770 0,770" fill="#311c0f" />
          <!-- Front Desk Legs -->
          <rect x="25" y="770" width="35" height="74" fill="#24140a" />
          <rect x="330" y="770" width="35" height="74" fill="#24140a" />
        </g>

        <!-- Warm Radiant Cone of Lantern Light (Spreading Across Desk) -->
        <circle cx="100" cy="540" r="280" fill="url(#lantern-glow-radial)" />

        <!-- Glowing Brass Kerosene Lantern (Desk Left) -->
        <g id="desk-lantern" transform="translate(65, 430)">
          <!-- Base -->
          <ellipse cx="25" cy="85" rx="24" ry="9" fill="#8c6a27" stroke="#4a3610" stroke-width="1.8" />
          <!-- Glass Chimney with Flame Inside -->
          <path d="M12 40 Q8 60 12 78 L38 78 Q42 60 38 40 Z" fill="#ffeec7" opacity="0.75" />
          <!-- Burning Flame -->
          <ellipse cx="25" cy="62" rx="5" ry="11" fill="#fff" filter="url(#glow-blur)" />
          <ellipse cx="25" cy="62" rx="3" ry="7" fill="#ff9900" />
          <!-- Top Brass Cap & Loop -->
          <path d="M10 40 L40 40 L35 28 L15 28 Z" fill="#8c6a27" stroke="#4a3610" stroke-width="1.5" />
          <path d="M17 28 Q25 10 33 28" fill="none" stroke="#73551d" stroke-width="2.5" />
        </g>

        <!-- Scattered Rolled Notes on Desk (Interactive Hotspot) -->
        <g id="hotspot-room-notes" class="interactive-object" transform="translate(145, 520)">
          <!-- Parchment Sheet Underneath -->
          <polygon points="0,15 90,0 105,75 10,85" fill="#eed2a4" stroke="#8b5a2b" stroke-width="1.2" />
          <!-- Rolled Scroll 1 -->
          <g transform="rotate(12)">
            <rect x="20" y="10" width="60" height="16" rx="4" fill="#f5dec0" stroke="#7a4e21" stroke-width="1.2" />
            <line x1="45" y1="10" x2="45" y2="26" stroke="#a31924" stroke-width="2.5" />
          </g>
          <!-- Rolled Scroll 2 -->
          <g transform="translate(15, 30) rotate(-8)">
            <rect x="10" y="5" width="65" height="15" rx="4" fill="#eed2a4" stroke="#7a4e21" stroke-width="1.2" />
            <line x1="42" y1="5" x2="42" y2="20" stroke="#a31924" stroke-width="2.5" />
          </g>
        </g>

        <!-- Framed Vintage Photograph Propped on Desk (Interactive Hotspot) -->
        <g id="hotspot-room-photo" class="interactive-object" transform="translate(265, 485)">
          <!-- Wood/Brass Frame -->
          <rect x="0" y="0" width="75" height="100" rx="3" fill="#2b1a10" stroke="#c49a45" stroke-width="2" />
          <!-- Aged Sepia Photo Picture -->
          <rect x="6" y="6" width="63" height="88" fill="#d9c2a3" />
          <!-- Distant Kaldhara Road inside photo -->
          <polygon points="12,88 38,45 42,45 58,88" fill="#a89274" />
          <circle cx="38" cy="30" r="12" fill="#edd9be" opacity="0.6" />
          <!-- The Lone Person Standing on the Road Facing Away -->
          <ellipse cx="40" cy="55" rx="3.5" ry="4.5" fill="#2d1c10" />
          <path d="M34 60 L46 60 L48 82 L32 82 Z" fill="#1f130a" />
          <!-- Glass Sheen Highlight -->
          <line x1="10" y1="10" x2="65" y2="90" stroke="#ffffff" stroke-width="1.2" opacity="0.3" />
        </g>

        <!-- Quill & Inkpot (Right corner) -->
        <g transform="translate(345, 620)">
          <ellipse cx="15" cy="20" rx="14" ry="7" fill="#1b120c" stroke="#402b1d" stroke-width="1.5" />
          <path d="M15 15 L28 -15 Q26 -10 24 -5" stroke="#f0e2d1" stroke-width="2" fill="none" />
        </g>
      </svg>
    `;
  },

  // 17. SCENE 17: The Person on the Road
  renderRoadFigureScene() {
    return `
      <svg class="scene-illustration" viewBox="0 0 390 844" xmlns="http://www.w3.org/2000/svg">
        ${this.getAtmosphericSky('road-figure')}

        <!-- Dark Distant Hills Horizon -->
        <path d="M0 360 Q90 320 200 345 T390 335 L390 400 L0 400 Z" fill="#0c101a" />

        <!-- Desolate Night Countryside Ground -->
        <polygon points="0,370 390,370 390,844 0,844" fill="#121724" />

        <!-- Gnarled Crooked Acacia Silhouettes on Verges -->
        <g opacity="0.85">
          <path d="M45 440 Q35 380 50 330 Q60 290 40 260" stroke="#080b12" stroke-width="7" stroke-linecap="round" fill="none" />
          <path d="M45 350 Q20 330 5 320" stroke="#080b12" stroke-width="4" stroke-linecap="round" fill="none" />
          <path d="M355 450 Q365 390 350 340 Q340 300 360 270" stroke="#080b12" stroke-width="7" stroke-linecap="round" fill="none" />
        </g>

        <!-- Long Perspective Road into the Night (Interactive Hotspot) -->
        <g id="hotspot-road-walker" class="interactive-object">
          <polygon points="190,370 200,370 365,844 25,844" fill="#181f30" />
          <!-- Wheel ruts in the dust -->
          <line x1="193" y1="370" x2="135" y2="844" stroke="#0f1422" stroke-width="2.5" />
          <line x1="197" y1="370" x2="255" y2="844" stroke="#0f1422" stroke-width="2.5" />
        </g>

        <!-- Roadside Boundary Stones (Interactive Hotspot) -->
        <g id="hotspot-road-night-stones" class="interactive-object" transform="translate(45, 520)">
          <polygon points="10,40 28,35 32,70 8,75" fill="#1e273d" stroke="#0b0f17" stroke-width="1.5" />
          <polygon points="35,48 50,44 54,75 32,80" fill="#171e30" stroke="#0b0f17" stroke-width="1.5" />
        </g>

        <!-- The Human Silhouette Walking Ahead (With step & turn animation wrappers) -->
        <g id="road-figure-mover" class="road-figure-container" transform="translate(195, 370)">
          <g id="walking-silhouette" class="walking-silhouette-svg figure-walking-anim">
            <!-- Head & Hat/Hair -->
            <ellipse cx="0" cy="-28" rx="4.5" ry="6" fill="#04060a" />
            <!-- Neck & Shoulders -->
            <path d="M-8 -21 Q0 -24 8 -21 L10 5 L-10 5 Z" fill="#04060a" />
            <!-- Coat / Shawl Silhouette -->
            <path d="M-10 -15 L10 -15 L13 18 L-13 18 Z" fill="#060910" />
            <!-- Legs Walking Away -->
            <line x1="-5" y1="18" x2="-6" y2="34" stroke="#04060a" stroke-width="3.5" stroke-linecap="round" />
            <line x1="5" y1="18" x2="6" y2="34" stroke="#04060a" stroke-width="3.5" stroke-linecap="round" />
          </g>
        </g>

        <!-- Creeping Night Mist Across the Ground -->
        <g id="road-figure-mist">
          <ellipse cx="195" cy="480" rx="160" ry="32" fill="#1b2336" opacity="0.45" class="fog-drift" />
          <ellipse cx="195" cy="680" rx="210" ry="48" fill="#121826" opacity="0.55" class="fog-drift" />
        </g>
      </svg>
    `;
  },

  // 18. SCENE 18: The Final House
  renderFinalHouseScene() {
    return `
      <svg class="scene-illustration" viewBox="0 0 390 844" xmlns="http://www.w3.org/2000/svg">
        ${this.getAtmosphericSky('final-house')}

        <!-- Village Street Returning Toward Final House -->
        <polygon points="0,540 390,540 390,844 0,844" fill="#573e2c" />

        <!-- Surrounding Houses (Now with warm lights in windows & open doors) -->
        <g id="surrounding-lights-group">
          <!-- Left Haveli with Glowing Window -->
          <polygon points="0,260 110,310 90,620 0,640" fill="#6e4a31" />
          <rect x="25" y="340" width="30" height="42" rx="2" fill="#ffaa33" filter="url(#glow-blur)" />
          <rect x="25" y="340" width="30" height="42" rx="2" fill="#ffe094" opacity="0.8" />
          <!-- Open door on Left Haveli -->
          <rect x="35" y="480" width="35" height="85" fill="#110803" />
          <polygon points="35,565 70,565 110,610 50,610" fill="#ff9922" opacity="0.25" />

          <!-- Right Haveli with Glowing Window -->
          <polygon points="390,250 280,305 300,620 390,640" fill="#6e4a31" />
          <rect x="330" y="335" width="30" height="42" rx="2" fill="#ffaa33" filter="url(#glow-blur)" />
          <rect x="330" y="335" width="30" height="42" rx="2" fill="#ffe094" opacity="0.8" />
        </g>

        <!-- The Final House (Center: Door Wide Open) -->
        <g class="final-house-structure">
          <polygon points="75,220 315,220 330,590 60,590" fill="#996a45" />
          <!-- Eaves -->
          <polygon points="65,190 325,190 315,220 75,220" fill="#754c2d" />
          
          <!-- Upper Window (Warm Golden Light) -->
          <rect x="165" y="255" width="60" height="75" rx="3" fill="#ffaa33" filter="url(#glow-blur)" />
          <rect x="165" y="255" width="60" height="75" rx="3" fill="#fff0b8" opacity="0.85" />

          <!-- Steps -->
          <polygon points="110,570 280,570 290,595 100,595" fill="#7a4f32" />
          <polygon points="100,595 290,595 300,620 90,620" fill="#694127" />

          <!-- WIDE OPEN FRONT DOORWAY (Revealing Study & Desk Inside) -->
          <g id="final-house-door-open">
            <!-- Dark Wall Opening -->
            <rect x="140" y="410" width="110" height="160" rx="3" fill="#120803" />
            
            <!-- Interior Warm Golden Ambient Glow -->
            <rect x="142" y="412" width="106" height="156" fill="#ffb03a" opacity="0.85" filter="url(#glow-blur)" />
            
            <!-- Study Desk Silhouette Inside -->
            <polygon points="155,505 235,505 240,568 150,568" fill="#382112" />

            <!-- The First Note on the Desk (Interactive Hotspot) -->
            <g id="hotspot-final-desk-note" class="interactive-object" transform="translate(180, 495)">
              <!-- Parchment Glow -->
              <ellipse cx="15" cy="8" rx="22" ry="12" fill="#fff5d6" opacity="0.5" filter="url(#glow-blur)" />
              <!-- Unrolled First Note Paper -->
              <polygon points="0,0 28,-3 30,18 2,21" fill="#eed2a4" stroke="#8b5a2b" stroke-width="1.2" />
              <!-- Red Sealing Cord Mark -->
              <line x1="14" y1="-2" x2="14" y2="20" stroke="#a31924" stroke-width="2" />
            </g>
          </g>
        </g>

        <!-- Final Horror Silhouette: Creeping Dark Figure in Viewpoint Shadows (Opacity 0 by default) -->
        <g id="final-behind-silhouette" opacity="0">
          <ellipse cx="195" cy="780" rx="140" ry="120" fill="#020305" opacity="0.95" />
          <ellipse cx="195" cy="620" rx="55" ry="70" fill="#020305" opacity="0.95" />
        </g>
      </svg>
    `;
  },

  // 19. SCENE 19: Kaldhara (Wide Panoramic Establishing Ending View)
  renderEndingScene() {
    return `
      <svg class="scene-illustration" viewBox="0 0 390 844" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="ending-sky-grad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stop-color="#02040a" />
            <stop offset="35%" stop-color="#070c18" />
            <stop offset="70%" stop-color="#0f1629" />
            <stop offset="100%" stop-color="#141829" />
          </linearGradient>
          <filter id="ending-window-glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="4.5" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        <!-- Sky Background -->
        <rect width="100%" height="100%" fill="url(#ending-sky-grad)" />

        <!-- Thousands of Cold Clear Night Stars -->
        <circle cx="12%" cy="6%" r="1.4" fill="#fff" opacity="0.85" class="twinkle-fast" />
        <circle cx="28%" cy="11%" r="1.1" fill="#cde0ff" opacity="0.7" />
        <circle cx="45%" cy="5%" r="1.6" fill="#fff" opacity="0.9" class="twinkle-slow" />
        <circle cx="68%" cy="8%" r="1.3" fill="#cde0ff" opacity="0.75" />
        <circle cx="85%" cy="14%" r="1.5" fill="#fff" opacity="0.8" class="twinkle-fast" />
        <circle cx="92%" cy="22%" r="1.1" fill="#d8e8ff" opacity="0.6" />
        <circle cx="36%" cy="19%" r="1.3" fill="#fff" opacity="0.65" />
        <circle cx="58%" cy="16%" r="1.5" fill="#fff" opacity="0.75" class="twinkle-slow" />

        <!-- Pale Crescent Moon High Over the Valley -->
        <circle cx="78%" cy="12%" r="35" fill="#7ba5db" opacity="0.12" filter="url(#glow-blur)" />
        <circle cx="78%" cy="12%" r="16" fill="#eff6ff" opacity="0.8" />
        <circle cx="82%" cy="10%" r="15" fill="#070c18" />

        <!-- Distant Desert Mountain Ridges -->
        <path d="M0 240 Q90 190 200 225 T390 210 L390 320 L0 320 Z" fill="#080d19" />
        <path d="M0 280 Q130 240 260 270 T390 255 L390 380 L0 380 Z" fill="#0b111f" />

        <!-- The Sprawling Sandstone Valley of Kaldhara (Bird's Eye Perspective) -->
        <g class="ending-village-panorama">
          <!-- Valley Floor -->
          <polygon points="0,320 390,320 390,844 0,844" fill="#131929" />

          <!-- Distant Central Temple Shikhara Spire -->
          <polygon points="195,280 205,360 185,360" fill="#1a2238" />
          <polygon points="180,360 210,360 215,410 175,410" fill="#202a45" />

          <!-- Clusters of Havelis & Courtyard Walls Across the Landscape -->
          <!-- North Cluster -->
          <polygon points="110,370 160,355 165,420 105,430" fill="#1d263d" />
          <polygon points="230,360 280,345 285,410 225,420" fill="#1d263d" />
          
          <!-- Mid-Valley Havelis -->
          <polygon points="50,440 120,420 125,510 45,525" fill="#242f4c" />
          <polygon points="140,430 210,415 215,500 135,515" fill="#263252" />
          <polygon points="270,425 340,410 345,495 265,510" fill="#242f4c" />

          <!-- Lower Valley Complex (Foreground Havelis) -->
          <polygon points="20,530 110,505 115,640 10,660" fill="#2a3657" />
          <polygon points="130,520 250,500 260,650 120,670" fill="#2d3a5e" />
          <polygon points="280,515 370,495 380,630 270,650" fill="#2a3657" />

          <!-- Winding Village Pathway into Distance -->
          <path d="M195 844 Q180 700 200 620 T170 500 T195 410" fill="none" stroke="#0e1320" stroke-width="12" opacity="0.75" />

          <!-- 14 Windows Lighting up in Cascading Sequence Across the Entire Village -->
          <!-- Temple Window 1 -->
          <g id="end-window-1" class="ending-window" transform="translate(192, 375)">
            <rect width="6" height="10" rx="1.5" fill="#ffb443" class="window-lit-rect" filter="url(#ending-window-glow)" />
          </g>

          <!-- North Left Window 2 -->
          <g id="end-window-2" class="ending-window" transform="translate(130, 385)">
            <rect width="7" height="11" rx="1.5" fill="#ffb443" class="window-lit-rect" filter="url(#ending-window-glow)" />
          </g>

          <!-- North Right Window 3 -->
          <g id="end-window-3" class="ending-window" transform="translate(250, 375)">
            <rect width="7" height="11" rx="1.5" fill="#ffb443" class="window-lit-rect" filter="url(#ending-window-glow)" />
          </g>

          <!-- Mid Left Window 4 -->
          <g id="end-window-4" class="ending-window" transform="translate(80, 460)">
            <rect width="9" height="14" rx="2" fill="#ffb443" class="window-lit-rect" filter="url(#ending-window-glow)" />
          </g>

          <!-- Mid Center Window 5 -->
          <g id="end-window-5" class="ending-window" transform="translate(170, 450)">
            <rect width="10" height="15" rx="2" fill="#ffb443" class="window-lit-rect" filter="url(#ending-window-glow)" />
          </g>

          <!-- Mid Right Window 6 -->
          <g id="end-window-6" class="ending-window" transform="translate(300, 445)">
            <rect width="9" height="14" rx="2" fill="#ffb443" class="window-lit-rect" filter="url(#ending-window-glow)" />
          </g>

          <!-- Foreground Left Windows 7 & 8 -->
          <g id="end-window-7" class="ending-window" transform="translate(55, 560)">
            <rect width="12" height="18" rx="2" fill="#ffb443" class="window-lit-rect" filter="url(#ending-window-glow)" />
          </g>
          <g id="end-window-8" class="ending-window" transform="translate(85, 575)">
            <rect width="11" height="16" rx="2" fill="#ffb443" class="window-lit-rect" filter="url(#ending-window-glow)" />
          </g>

          <!-- Foreground Center Windows 9, 10, 11 (The Final House Complex) -->
          <g id="end-window-9" class="ending-window" transform="translate(160, 550)">
            <rect width="14" height="20" rx="2.5" fill="#ffb443" class="window-lit-rect" filter="url(#ending-window-glow)" />
          </g>
          <g id="end-window-10" class="ending-window" transform="translate(205, 545)">
            <rect width="14" height="20" rx="2.5" fill="#ffb443" class="window-lit-rect" filter="url(#ending-window-glow)" />
          </g>
          <g id="end-window-11" class="ending-window" transform="translate(180, 610)">
            <rect width="16" height="25" rx="3" fill="#ffb443" class="window-lit-rect" filter="url(#ending-window-glow)" />
          </g>

          <!-- Foreground Right Windows 12, 13, 14 -->
          <g id="end-window-12" class="ending-window" transform="translate(315, 540)">
            <rect width="12" height="18" rx="2" fill="#ffb443" class="window-lit-rect" filter="url(#ending-window-glow)" />
          </g>
          <g id="end-window-13" class="ending-window" transform="translate(345, 565)">
            <rect width="10" height="16" rx="2" fill="#ffb443" class="window-lit-rect" filter="url(#ending-window-glow)" />
          </g>
          <g id="end-window-14" class="ending-window" transform="translate(295, 600)">
            <rect width="12" height="18" rx="2" fill="#ffb443" class="window-lit-rect" filter="url(#ending-window-glow)" />
          </g>
        </g>

        <!-- Ambient Blue Ridge Mist Layer -->
        <ellipse cx="195" cy="680" rx="240" ry="60" fill="#0d1424" opacity="0.65" class="fog-drift" />
      </svg>
    `;
  },

  // Main rendering dispatcher
  renderScene(sceneId, isSecondPlaythrough = false) {
    switch (sceneId) {
      case 'bottle': return this.renderBottleScene(isSecondPlaythrough);
      case 'entrance': return this.renderEntranceScene();
      case 'tea-stall': return this.renderTeaStallScene();
      case 'well': return this.renderWellScene();
      case 'temple': return this.renderTempleScene();
      case 'red-house': return this.renderRedHouseScene();
      case 'banyan-tree': return this.renderBanyanScene();
      case 'empty-road': return this.renderEmptyRoadScene();
      case 'village-square': return this.renderVillageSquareScene();
      case 'abandoned-house': return this.renderAbandonedHouseScene();
      case 'old-school': return this.renderOldSchoolScene();
      case 'forest-edge': return this.renderForestEdgeScene();
      case 'small-shrine': return this.renderSmallShrineScene();
      case 'second-note': return this.renderSecondNoteScene();
      case 'forgotten-street': return this.renderForgottenStreetScene();
      case 'house-at-end': return this.renderHouseAtEndScene();
      case 'room': return this.renderRoomScene();
      case 'road-figure': return this.renderRoadFigureScene();
      case 'final-house': return this.renderFinalHouseScene();
      case 'ending': return this.renderEndingScene();
      default: return this.renderEntranceScene();
    }
  }
};

