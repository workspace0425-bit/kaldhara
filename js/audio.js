/**
 * audio.js
 * "The Village That Remembers" - Procedural Web Audio Engine
 * 
 * Generates all ambient drones, wind gusts, crickets, temple bell chimes, 
 * glass clinks, and eerie stings procedurally using the Web Audio API.
 * Zero external audio files, zero latency, 100% offline support.
 */

class AudioEngine {
  constructor() {
    this.ctx = null;
    this.isMuted = false;
    this.isInitialized = false;
    
    // Ambient sound nodes
    this.masterGain = null;
    this.ambientGain = null;
    this.windNode = null;
    this.droneOsc = null;
    this.droneGain = null;
    this.cricketTimer = null;
    
    this.currentMode = 'day'; // 'day' | 'night' | 'cursed'
  }

  init() {
    if (this.isInitialized) return;
    try {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (!AudioContext) return;
      this.ctx = new AudioContext();
      
      this.masterGain = this.ctx.createGain();
      this.masterGain.gain.setValueAtTime(0.6, this.ctx.currentTime);
      this.masterGain.connect(this.ctx.destination);

      this.ambientGain = this.ctx.createGain();
      this.ambientGain.gain.setValueAtTime(0.15, this.ctx.currentTime);
      this.ambientGain.connect(this.masterGain);

      this.setupAmbience();
      this.isInitialized = true;
    } catch (e) {
      console.warn("Web Audio not supported or failed to init", e);
    }
  }

  ensureContext() {
    if (!this.isInitialized) {
      this.init();
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  setupAmbience() {
    if (!this.ctx) return;

    // Create pink/brown noise for wind
    const bufferSize = 2 * this.ctx.sampleRate;
    const noiseBuffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
    const output = noiseBuffer.getChannelData(0);
    let b0 = 0, b1 = 0, b2 = 0, b3 = 0, b4 = 0, b5 = 0, b6 = 0;
    for (let i = 0; i < bufferSize; i++) {
      const white = Math.random() * 2 - 1;
      b0 = 0.99886 * b0 + white * 0.0555179;
      b1 = 0.99332 * b1 + white * 0.0750759;
      b2 = 0.96900 * b2 + white * 0.1538520;
      b3 = 0.86650 * b3 + white * 0.3104856;
      b4 = 0.55000 * b4 + white * 0.5329522;
      b5 = -0.7616 * b5 - white * 0.0168980;
      output[i] = b0 + b1 + b2 + b3 + b4 + b5 + b6 + white * 0.5362;
      output[i] *= 0.11;
      b6 = white * 0.115926;
    }

    const whiteNoise = this.ctx.createBufferSource();
    whiteNoise.buffer = noiseBuffer;
    whiteNoise.loop = true;

    // Bandpass filter for wind howl
    this.windFilter = this.ctx.createBiquadFilter();
    this.windFilter.type = 'bandpass';
    this.windFilter.frequency.setValueAtTime(320, this.ctx.currentTime);
    this.windFilter.Q.setValueAtTime(1.8, this.ctx.currentTime);

    this.windGain = this.ctx.createGain();
    this.windGain.gain.setValueAtTime(0.3, this.ctx.currentTime);

    whiteNoise.connect(this.windFilter);
    this.windFilter.connect(this.windGain);
    this.windGain.connect(this.ambientGain);
    whiteNoise.start();

    // Night Sub Drone
    this.droneOsc = this.ctx.createOscillator();
    this.droneOsc.type = 'sine';
    this.droneOsc.frequency.setValueAtTime(55, this.ctx.currentTime); // A1 note
    
    this.droneGain = this.ctx.createGain();
    this.droneGain.gain.setValueAtTime(0, this.ctx.currentTime);

    this.droneOsc.connect(this.droneGain);
    this.droneGain.connect(this.ambientGain);
    this.droneOsc.start();

    // Start subtle dynamic wind modulation
    this.modulateWind();
  }

  modulateWind() {
    if (!this.ctx || !this.windFilter) return;
    const now = this.ctx.currentTime;
    const targetFreq = this.currentMode === 'night' 
      ? 200 + Math.random() * 250 
      : 300 + Math.random() * 200;
    const duration = 3 + Math.random() * 4;

    this.windFilter.frequency.linearRampToValueAtTime(targetFreq, now + duration);
    setTimeout(() => this.modulateWind(), duration * 1000);
  }

  setAtmosphere(mode) { // 'day' | 'night' | 'cursed'
    this.currentMode = mode;
    if (!this.ctx) return;
    const now = this.ctx.currentTime;

    if (mode === 'day') {
      // Warm, open, gentle
      this.droneGain.gain.linearRampToValueAtTime(0, now + 1.2);
      this.windGain.gain.linearRampToValueAtTime(0.25, now + 1.2);
      this.windFilter.frequency.linearRampToValueAtTime(450, now + 1.2);
      this.stopCrickets();
    } else if (mode === 'night') {
      // Deep, cold, eerie drone + crickets
      this.droneGain.gain.linearRampToValueAtTime(0.4, now + 1.2);
      this.windGain.gain.linearRampToValueAtTime(0.5, now + 1.2);
      this.windFilter.frequency.linearRampToValueAtTime(220, now + 1.2);
      this.startCrickets();
    } else if (mode === 'cursed') {
      // Hollow, detuned sub bass
      this.droneGain.gain.linearRampToValueAtTime(0.7, now + 0.8);
      this.droneOsc.frequency.linearRampToValueAtTime(42, now + 2); // E0 unnerving low frequency
      this.windGain.gain.linearRampToValueAtTime(0.6, now + 0.8);
      this.stopCrickets(); // Eerie deathly silence from nature
    }
  }

  startCrickets() {
    if (this.cricketTimer) return;
    const chirp = () => {
      if (this.currentMode !== 'night' || this.isMuted || !this.ctx) return;
      if (Math.random() > 0.35) {
        this.playCricketChirp();
      }
      this.cricketTimer = setTimeout(chirp, 800 + Math.random() * 1500);
    };
    this.cricketTimer = setTimeout(chirp, 1000);
  }

  stopCrickets() {
    if (this.cricketTimer) {
      clearTimeout(this.cricketTimer);
      this.cricketTimer = null;
    }
  }

  playCricketChirp() {
    if (!this.ctx || this.isMuted) return;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    const now = this.ctx.currentTime;
    
    osc.type = 'triangle';
    osc.frequency.setValueAtTime(4600 + Math.random() * 600, now);
    
    gain.gain.setValueAtTime(0.015, now);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.08);

    osc.connect(gain);
    gain.connect(this.masterGain);

    osc.start(now);
    osc.stop(now + 0.08);
  }

  // Sound FX: Glass Bottle Clink
  playBottleClink() {
    this.ensureContext();
    if (!this.ctx || this.isMuted) return;
    const now = this.ctx.currentTime;

    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = 'sine';
    osc.frequency.setValueAtTime(1450, now);
    osc.frequency.exponentialRampToValueAtTime(800, now + 0.4);

    gain.gain.setValueAtTime(0.4, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.45);

    osc.connect(gain);
    gain.connect(this.masterGain);

    osc.start(now);
    osc.stop(now + 0.45);
  }

  // Sound FX: Paper Unroll
  playPaperRustle() {
    this.ensureContext();
    if (!this.ctx || this.isMuted) return;
    const now = this.ctx.currentTime;

    // Filtered white noise burst
    const buffer = this.ctx.createBuffer(1, this.ctx.sampleRate * 0.35, this.ctx.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < data.length; i++) {
      data[i] = (Math.random() * 2 - 1) * Math.exp(-i / (data.length * 0.4));
    }
    const source = this.ctx.createBufferSource();
    source.buffer = buffer;

    const filter = this.ctx.createBiquadFilter();
    filter.type = 'bandpass';
    filter.frequency.setValueAtTime(1800, now);
    filter.Q.setValueAtTime(2.5, now);

    const gain = this.ctx.createGain();
    gain.gain.setValueAtTime(0.25, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.35);

    source.connect(filter);
    filter.connect(gain);
    gain.connect(this.masterGain);

    source.start(now);
  }

  // Sound FX: Footstep
  playFootstep() {
    this.ensureContext();
    if (!this.ctx || this.isMuted) return;
    const now = this.ctx.currentTime;

    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.type = 'triangle';
    osc.frequency.setValueAtTime(90, now);
    osc.frequency.exponentialRampToValueAtTime(35, now + 0.12);

    gain.gain.setValueAtTime(0.2, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.14);

    osc.connect(gain);
    gain.connect(this.masterGain);

    osc.start(now);
    osc.stop(now + 0.14);
  }

  // Sound FX: Temple Bell Chime
  playBellChime() {
    this.ensureContext();
    if (!this.ctx || this.isMuted) return;
    const now = this.ctx.currentTime;

    // Rich metallic harmonic frequencies for an Indian brass temple bell
    const harmonics = [520, 1040, 1560, 2600, 3120];
    const decays = [2.8, 2.2, 1.8, 1.2, 0.8];
    const amplitudes = [0.35, 0.22, 0.15, 0.08, 0.04];

    harmonics.forEach((freq, idx) => {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq + (Math.random() * 4 - 2), now);

      gain.gain.setValueAtTime(amplitudes[idx], now);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + decays[idx]);

      osc.connect(gain);
      gain.connect(this.masterGain);

      osc.start(now);
      osc.stop(now + decays[idx]);
    });
  }

  // Temporarily silence background ambient wind/crickets for dramatic suspense
  silenceAmbience(durationSeconds = 4) {
    if (!this.ctx || !this.ambientGain) return;
    const now = this.ctx.currentTime;
    this.ambientGain.gain.setValueAtTime(this.ambientGain.gain.value, now);
    this.ambientGain.gain.linearRampToValueAtTime(0, now + 0.3);

    setTimeout(() => {
      if (this.ambientGain && this.ctx && !this.isMuted) {
        const targetVol = this.currentMode === 'night' ? 0.35 : 0.15;
        this.ambientGain.gain.linearRampToValueAtTime(targetVol, this.ctx.currentTime + 1.5);
      }
    }, durationSeconds * 1000);
  }

  // Faint, detuned distant bell answering from behind
  playDistantBellEcho() {
    this.ensureContext();
    if (!this.ctx || this.isMuted) return;
    const now = this.ctx.currentTime;

    const harmonics = [390, 780, 1170];
    const amplitudes = [0.14, 0.08, 0.03];
    const decays = [3.5, 2.8, 1.8];

    harmonics.forEach((freq, idx) => {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      const filter = this.ctx.createBiquadFilter();

      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(850, now);

      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq - 6, now);

      gain.gain.setValueAtTime(0.001, now);
      gain.gain.linearRampToValueAtTime(amplitudes[idx], now + 0.06);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + decays[idx]);

      osc.connect(filter);
      filter.connect(gain);
      gain.connect(this.masterGain);

      osc.start(now);
      osc.stop(now + decays[idx]);
    });
  }

  // Sound FX: Horror Twist Sting
  playTwistSting() {
    this.ensureContext();
    if (!this.ctx || this.isMuted) return;
    const now = this.ctx.currentTime;

    // Dissonant descending triad
    [110, 116.54, 155.56].forEach((baseFreq) => {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(baseFreq, now);
      osc.frequency.exponentialRampToValueAtTime(baseFreq * 0.65, now + 3.5);

      const filter = this.ctx.createBiquadFilter();
      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(800, now);
      filter.frequency.exponentialRampToValueAtTime(150, now + 3.5);

      gain.gain.setValueAtTime(0.28, now);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + 3.8);

      osc.connect(filter);
      filter.connect(gain);
      gain.connect(this.masterGain);

      osc.start(now);
      osc.stop(now + 3.8);
    });
  }

  // Sound FX: Hotspot Discovery
  playHotspotPing() {
    this.ensureContext();
    if (!this.ctx || this.isMuted) return;
    const now = this.ctx.currentTime;

    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = 'sine';
    osc.frequency.setValueAtTime(780, now);
    osc.frequency.exponentialRampToValueAtTime(1040, now + 0.18);

    gain.gain.setValueAtTime(0.12, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.3);

    osc.connect(gain);
    gain.connect(this.masterGain);

    osc.start(now);
    osc.stop(now + 0.3);
  }

  // Sound FX: Wooden Door Knock (External strike or muffled internal reply)
  playDoorKnock(isInteriorResponse = false) {
    this.ensureContext();
    if (!this.ctx || this.isMuted) return;
    const now = this.ctx.currentTime;

    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    const filter = this.ctx.createBiquadFilter();

    osc.type = 'triangle';
    if (isInteriorResponse) {
      // Deeper, muffled interior wood resonance
      osc.frequency.setValueAtTime(140, now);
      osc.frequency.exponentialRampToValueAtTime(55, now + 0.18);

      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(450, now);

      gain.gain.setValueAtTime(0.35, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.22);
    } else {
      // Crisp external knuckle impact on solid aged timber
      osc.frequency.setValueAtTime(260, now);
      osc.frequency.exponentialRampToValueAtTime(85, now + 0.12);

      filter.type = 'bandpass';
      filter.frequency.setValueAtTime(680, now);
      filter.Q.setValueAtTime(2.0, now);

      gain.gain.setValueAtTime(0.3, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.15);
    }

    osc.connect(filter);
    filter.connect(gain);
    gain.connect(this.masterGain);

    osc.start(now);
    osc.stop(now + (isInteriorResponse ? 0.22 : 0.15));
  }

  // Sound FX: Wooden Box Opening with Paper Rustle
  playBoxOpen() {
    this.ensureContext();
    if (!this.ctx || this.isMuted) return;
    const now = this.ctx.currentTime;

    // Wood lid creak / latch click
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.type = 'sawtooth';
    osc.frequency.setValueAtTime(180, now);
    osc.frequency.exponentialRampToValueAtTime(240, now + 0.08);

    const filter = this.ctx.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(900, now);

    gain.gain.setValueAtTime(0.18, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.1);

    osc.connect(filter);
    filter.connect(gain);
    gain.connect(this.masterGain);

    osc.start(now);
    osc.stop(now + 0.1);

    // Followed by paper rustle
    setTimeout(() => {
      this.playPaperRustle();
    }, 120);
  }

  // Sound FX: Village Reaction (Subtle eerie sub-drone pulse)
  playReactiveNightPulse() {
    this.ensureContext();
    if (!this.ctx || this.isMuted) return;
    const now = this.ctx.currentTime;

    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    const filter = this.ctx.createBiquadFilter();

    osc.type = 'sawtooth';
    osc.frequency.setValueAtTime(48, now);
    osc.frequency.exponentialRampToValueAtTime(36, now + 3.0);

    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(220, now);
    filter.frequency.exponentialRampToValueAtTime(90, now + 3.0);

    gain.gain.setValueAtTime(0.001, now);
    gain.gain.linearRampToValueAtTime(0.35, now + 0.8);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + 3.5);

    osc.connect(filter);
    filter.connect(gain);
    gain.connect(this.masterGain);

    osc.start(now);
    osc.stop(now + 3.5);
  }

  // Sound FX: Closer Temple Bell Echo (Midway in distance)
  playCloserBellEcho() {
    this.ensureContext();
    if (!this.ctx || this.isMuted) return;
    const now = this.ctx.currentTime;

    const harmonics = [440, 880, 1320, 2200];
    const amplitudes = [0.24, 0.15, 0.08, 0.03];
    const decays = [3.2, 2.5, 1.6, 1.0];

    harmonics.forEach((freq, idx) => {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      const filter = this.ctx.createBiquadFilter();

      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(1400, now);

      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, now);

      gain.gain.setValueAtTime(0.001, now);
      gain.gain.linearRampToValueAtTime(amplitudes[idx], now + 0.04);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + decays[idx]);

      osc.connect(filter);
      filter.connect(gain);
      gain.connect(this.masterGain);

      osc.start(now);
      osc.stop(now + decays[idx]);
    });
  }

  // Sound FX: Water droplet echo inside stone well
  playWaterDropEcho() {
    this.ensureContext();
    if (!this.ctx || this.isMuted) return;
    const now = this.ctx.currentTime;

    // Droplet 'plop' frequency glide
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.type = 'sine';
    osc.frequency.setValueAtTime(950, now);
    osc.frequency.exponentialRampToValueAtTime(320, now + 0.12);

    gain.gain.setValueAtTime(0.2, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.35);

    osc.connect(gain);
    gain.connect(this.masterGain);

    osc.start(now);
    osc.stop(now + 0.35);
  }

  // Sound FX: Heavy Wood Door Creaking Ajar
  playDoorCreak() {
    this.ensureContext();
    if (!this.ctx || this.isMuted) return;
    const now = this.ctx.currentTime;

    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    const filter = this.ctx.createBiquadFilter();

    osc.type = 'sawtooth';
    osc.frequency.setValueAtTime(80, now);
    osc.frequency.linearRampToValueAtTime(160, now + 0.3);
    osc.frequency.linearRampToValueAtTime(70, now + 0.7);

    filter.type = 'bandpass';
    filter.frequency.setValueAtTime(380, now);
    filter.Q.setValueAtTime(4, now);

    gain.gain.setValueAtTime(0.001, now);
    gain.gain.linearRampToValueAtTime(0.18, now + 0.2);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.75);

    osc.connect(filter);
    filter.connect(gain);
    gain.connect(this.masterGain);

    osc.start(now);
    osc.stop(now + 0.75);
  }

  // Sound FX: Door handle metal rattle / jiggle
  playDoorHandleRattle() {
    this.ensureContext();
    if (!this.ctx || this.isMuted) return;
    const now = this.ctx.currentTime;

    [0, 0.08, 0.16].forEach(offset => {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'square';
      osc.frequency.setValueAtTime(280 + Math.random() * 40, now + offset);
      gain.gain.setValueAtTime(0.08, now + offset);
      gain.gain.exponentialRampToValueAtTime(0.001, now + offset + 0.05);
      osc.connect(gain);
      gain.connect(this.masterGain);
      osc.start(now + offset);
      osc.stop(now + offset + 0.05);
    });
  }

  // Sound FX: Short, eerie female scream (1–2 seconds)
  playFemaleScream() {
    this.ensureContext();
    if (!this.ctx || this.isMuted) return;
    const now = this.ctx.currentTime;
    const dur = 1.4;

    // Dual screaming oscillators
    const osc1 = this.ctx.createOscillator();
    const osc2 = this.ctx.createOscillator();
    const oscGain = this.ctx.createGain();

    osc1.type = 'sawtooth';
    osc2.type = 'triangle';

    // Pitch envelope: sudden gasp rise (650 -> 1380 Hz), frantic wobble, desperate descent (-> 680 Hz)
    osc1.frequency.setValueAtTime(650, now);
    osc1.frequency.exponentialRampToValueAtTime(1380, now + 0.15);
    osc1.frequency.linearRampToValueAtTime(1260, now + 0.4);
    osc1.frequency.linearRampToValueAtTime(1320, now + 0.65);
    osc1.frequency.exponentialRampToValueAtTime(680, now + dur);

    osc2.frequency.setValueAtTime(665, now);
    osc2.frequency.exponentialRampToValueAtTime(1420, now + 0.15);
    osc2.frequency.linearRampToValueAtTime(1290, now + 0.4);
    osc2.frequency.linearRampToValueAtTime(1360, now + 0.65);
    osc2.frequency.exponentialRampToValueAtTime(710, now + dur);

    // Fast pitch vibrato LFO (terror tremor)
    const lfo = this.ctx.createOscillator();
    const lfoGain = this.ctx.createGain();
    lfo.frequency.setValueAtTime(14, now);
    lfoGain.gain.setValueAtTime(45, now);
    lfo.connect(osc1.frequency);
    lfo.connect(osc2.frequency);
    lfo.start(now);
    lfo.stop(now + dur);

    // Vocal throat formant resonance
    const formantFilter = this.ctx.createBiquadFilter();
    formantFilter.type = 'bandpass';
    formantFilter.frequency.setValueAtTime(2600, now);
    formantFilter.Q.setValueAtTime(2.2, now);

    oscGain.gain.setValueAtTime(0.001, now);
    oscGain.gain.linearRampToValueAtTime(0.35, now + 0.08);
    oscGain.gain.setValueAtTime(0.32, now + 0.6);
    oscGain.gain.exponentialRampToValueAtTime(0.0001, now + dur);

    osc1.connect(formantFilter);
    osc2.connect(formantFilter);
    formantFilter.connect(oscGain);
    oscGain.connect(this.masterGain);

    osc1.start(now);
    osc2.start(now);
    osc1.stop(now + dur);
    osc2.stop(now + dur);

    // Vocal breath/air burst noise
    const noiseBuffer = this.ctx.createBuffer(1, this.ctx.sampleRate * dur, this.ctx.sampleRate);
    const noiseData = noiseBuffer.getChannelData(0);
    for (let i = 0; i < noiseData.length; i++) {
      noiseData[i] = (Math.random() * 2 - 1);
    }
    const noiseSource = this.ctx.createBufferSource();
    noiseSource.buffer = noiseBuffer;

    const noiseFilter = this.ctx.createBiquadFilter();
    noiseFilter.type = 'bandpass';
    noiseFilter.frequency.setValueAtTime(3200, now);
    noiseFilter.Q.setValueAtTime(3.0, now);

    const noiseGain = this.ctx.createGain();
    noiseGain.gain.setValueAtTime(0.001, now);
    noiseGain.gain.linearRampToValueAtTime(0.2, now + 0.1);
    noiseGain.gain.exponentialRampToValueAtTime(0.0001, now + dur);

    noiseSource.connect(noiseFilter);
    noiseFilter.connect(noiseGain);
    noiseGain.connect(this.masterGain);

    noiseSource.start(now);
    noiseSource.stop(now + dur);
  }

  // Sound FX: Sharp piercing scream (0.7s)
  playSharpScream() {
    this.ensureContext();
    if (!this.ctx || this.isMuted) return;
    const now = this.ctx.currentTime;
    const dur = 0.7;

    const osc1 = this.ctx.createOscillator();
    const osc2 = this.ctx.createOscillator();
    const oscGain = this.ctx.createGain();

    osc1.type = 'sawtooth';
    osc2.type = 'triangle';

    osc1.frequency.setValueAtTime(820, now);
    osc1.frequency.exponentialRampToValueAtTime(1650, now + 0.08);
    osc1.frequency.linearRampToValueAtTime(1420, now + 0.35);
    osc1.frequency.exponentialRampToValueAtTime(750, now + dur);

    osc2.frequency.setValueAtTime(840, now);
    osc2.frequency.exponentialRampToValueAtTime(1680, now + 0.08);
    osc2.frequency.linearRampToValueAtTime(1440, now + 0.35);
    osc2.frequency.exponentialRampToValueAtTime(770, now + dur);

    // Fast pitch vibrato
    const lfo = this.ctx.createOscillator();
    const lfoGain = this.ctx.createGain();
    lfo.frequency.setValueAtTime(16, now);
    lfoGain.gain.setValueAtTime(60, now);
    lfo.connect(osc1.frequency);
    lfo.connect(osc2.frequency);
    lfo.start(now);
    lfo.stop(now + dur);

    const filter = this.ctx.createBiquadFilter();
    filter.type = 'bandpass';
    filter.frequency.setValueAtTime(2800, now);
    filter.Q.setValueAtTime(2.0, now);

    oscGain.gain.setValueAtTime(0.001, now);
    oscGain.gain.linearRampToValueAtTime(0.38, now + 0.04);
    oscGain.gain.exponentialRampToValueAtTime(0.0001, now + dur);

    osc1.connect(filter);
    osc2.connect(filter);
    filter.connect(oscGain);
    oscGain.connect(this.masterGain);

    osc1.start(now);
    osc2.start(now);
    osc1.stop(now + dur);
    osc2.stop(now + dur);
  }

  // Sound FX: Distant echoing scream from the forest (1.2s)
  playDistantScream() {
    this.ensureContext();
    if (!this.ctx || this.isMuted) return;
    const now = this.ctx.currentTime;
    const dur = 1.2;

    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    const filter = this.ctx.createBiquadFilter();

    osc.type = 'sawtooth';
    osc.frequency.setValueAtTime(500, now);
    osc.frequency.exponentialRampToValueAtTime(950, now + 0.2);
    osc.frequency.exponentialRampToValueAtTime(400, now + dur);

    filter.type = 'bandpass';
    filter.frequency.setValueAtTime(1200, now);
    filter.Q.setValueAtTime(3.5, now);

    gain.gain.setValueAtTime(0.001, now);
    gain.gain.linearRampToValueAtTime(0.18, now + 0.15);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + dur);

    osc.connect(filter);
    filter.connect(gain);
    gain.connect(this.masterGain);

    osc.start(now);
    osc.stop(now + dur);
  }

  // Sound FX: Eerie child laughter / giggles (3-5 fast staccato chirps)
  playChildLaughter() {
    this.ensureContext();
    if (!this.ctx || this.isMuted) return;
    const basePitches = [880, 1050, 930, 1100, 980];
    basePitches.forEach((pitch, i) => {
      const startTime = this.ctx.currentTime + i * 0.11;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      const filter = this.ctx.createBiquadFilter();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(pitch, startTime);
      osc.frequency.linearRampToValueAtTime(pitch * 1.08, startTime + 0.05);
      osc.frequency.exponentialRampToValueAtTime(pitch * 0.92, startTime + 0.09);

      filter.type = 'bandpass';
      filter.frequency.setValueAtTime(1800, startTime);
      filter.Q.setValueAtTime(1.5, startTime);

      gain.gain.setValueAtTime(0.001, startTime);
      gain.gain.linearRampToValueAtTime(0.15, startTime + 0.02);
      gain.gain.exponentialRampToValueAtTime(0.0001, startTime + 0.09);

      osc.connect(filter);
      filter.connect(gain);
      gain.connect(this.masterGain);

      osc.start(startTime);
      osc.stop(startTime + 0.09);
    });
  }

  // Sound FX: Child's whisper ("Don't leave me")
  playChildWhisper() {
    this.ensureContext();
    if (!this.ctx || this.isMuted) return;
    const now = this.ctx.currentTime;
    const dur = 1.1;

    const buffer = this.ctx.createBuffer(1, this.ctx.sampleRate * dur, this.ctx.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < data.length; i++) {
      data[i] = (Math.random() * 2 - 1) * Math.sin(Math.PI * i / data.length);
    }
    const source = this.ctx.createBufferSource();
    source.buffer = buffer;

    const filter1 = this.ctx.createBiquadFilter();
    filter1.type = 'bandpass';
    filter1.frequency.setValueAtTime(1600, now);
    filter1.Q.setValueAtTime(3.0, now);

    const gain = this.ctx.createGain();
    gain.gain.setValueAtTime(0.001, now);
    gain.gain.linearRampToValueAtTime(0.18, now + 0.25);
    gain.gain.linearRampToValueAtTime(0.14, now + 0.65);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + dur);

    source.connect(filter1);
    filter1.connect(gain);
    gain.connect(this.masterGain);

    source.start(now);
  }

  // Sound FX: Woman's whisper ("Why did you touch them?")
  playWomanWhisper() {
    this.ensureContext();
    if (!this.ctx || this.isMuted) return;
    const now = this.ctx.currentTime;
    const dur = 1.4;

    const buffer = this.ctx.createBuffer(1, this.ctx.sampleRate * dur, this.ctx.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < data.length; i++) {
      data[i] = (Math.random() * 2 - 1) * Math.sin(Math.PI * i / data.length);
    }
    const source = this.ctx.createBufferSource();
    source.buffer = buffer;

    const filter = this.ctx.createBiquadFilter();
    filter.type = 'bandpass';
    filter.frequency.setValueAtTime(1100, now);
    filter.Q.setValueAtTime(4.0, now);

    const gain = this.ctx.createGain();
    gain.gain.setValueAtTime(0.001, now);
    gain.gain.linearRampToValueAtTime(0.2, now + 0.3);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + dur);

    source.connect(filter);
    filter.connect(gain);
    gain.connect(this.masterGain);

    source.start(now);
  }

  // Sound FX: Wooden cart rolling rumble & squeak
  playCartRolling() {
    this.ensureContext();
    if (!this.ctx || this.isMuted) return;
    const now = this.ctx.currentTime;
    const dur = 1.4;

    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    const filter = this.ctx.createBiquadFilter();

    osc.type = 'sawtooth';
    osc.frequency.setValueAtTime(65, now);
    osc.frequency.linearRampToValueAtTime(95, now + 0.6);
    osc.frequency.linearRampToValueAtTime(50, now + dur);

    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(260, now);

    gain.gain.setValueAtTime(0.001, now);
    gain.gain.linearRampToValueAtTime(0.25, now + 0.2);
    gain.gain.exponentialRampToValueAtTime(0.001, now + dur);

    osc.connect(filter);
    filter.connect(gain);
    gain.connect(this.masterGain);

    osc.start(now);
    osc.stop(now + dur);
  }

  // Sound FX: Warning sign violent wood creak / rattle
  playSignRattle() {
    this.ensureContext();
    if (!this.ctx || this.isMuted) return;
    const now = this.ctx.currentTime;

    [0, 0.08, 0.16, 0.26, 0.38].forEach((offset, idx) => {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(140 + idx * 25, now + offset);
      gain.gain.setValueAtTime(0.18, now + offset);
      gain.gain.exponentialRampToValueAtTime(0.001, now + offset + 0.07);
      osc.connect(gain);
      gain.connect(this.masterGain);
      osc.start(now + offset);
      osc.stop(now + offset + 0.07);
    });
  }

  // Sound FX: Blackboard chalk scratching
  playChalkScratch() {
    this.ensureContext();
    if (!this.ctx || this.isMuted) return;
    const now = this.ctx.currentTime;

    [0, 0.07, 0.15].forEach(offset => {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(2200 + Math.random() * 400, now + offset);
      osc.frequency.linearRampToValueAtTime(1400, now + offset + 0.05);

      gain.gain.setValueAtTime(0.12, now + offset);
      gain.gain.exponentialRampToValueAtTime(0.001, now + offset + 0.05);

      osc.connect(gain);
      gain.connect(this.masterGain);
      osc.start(now + offset);
      osc.stop(now + offset + 0.05);
    });
  }

  // Sound FX: Swing moving fast creak
  playFastSwingCreak() {
    this.ensureContext();
    if (!this.ctx || this.isMuted) return;
    const now = this.ctx.currentTime;

    [0, 0.35, 0.7, 1.05].forEach((offset, idx) => {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(320 + idx * 30, now + offset);
      osc.frequency.linearRampToValueAtTime(580 + idx * 40, now + offset + 0.18);
      osc.frequency.linearRampToValueAtTime(280, now + offset + 0.3);

      gain.gain.setValueAtTime(0.001, now + offset);
      gain.gain.linearRampToValueAtTime(0.2, now + offset + 0.06);
      gain.gain.exponentialRampToValueAtTime(0.001, now + offset + 0.3);

      osc.connect(gain);
      gain.connect(this.masterGain);
      osc.start(now + offset);
      osc.stop(now + offset + 0.3);
    });
  }

  // Sound FX: Diya Flame Flare Whoosh & Blow Out
  playFlameWhoosh() {
    this.ensureContext();
    if (!this.ctx || this.isMuted) return;
    const now = this.ctx.currentTime;

    // Rising low rumble whoosh
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    const filter = this.ctx.createBiquadFilter();

    osc.type = 'sawtooth';
    osc.frequency.setValueAtTime(80, now);
    osc.frequency.linearRampToValueAtTime(180, now + 0.35);

    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(350, now);
    filter.frequency.linearRampToValueAtTime(700, now + 0.35);

    gain.gain.setValueAtTime(0.001, now);
    gain.gain.linearRampToValueAtTime(0.3, now + 0.25);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.55);

    osc.connect(filter);
    filter.connect(gain);
    gain.connect(this.masterGain);

    osc.start(now);
    osc.stop(now + 0.55);

    // Sharp puff of air when extinguished
    setTimeout(() => {
      if (!this.ctx || this.isMuted) return;
      const puffNow = this.ctx.currentTime;
      const buffer = this.ctx.createBuffer(1, this.ctx.sampleRate * 0.2, this.ctx.sampleRate);
      const data = buffer.getChannelData(0);
      for (let i = 0; i < data.length; i++) data[i] = (Math.random() * 2 - 1) * Math.exp(-i / (data.length * 0.2));
      const src = this.ctx.createBufferSource();
      src.buffer = buffer;
      const pFilter = this.ctx.createBiquadFilter();
      pFilter.type = 'bandpass';
      pFilter.frequency.setValueAtTime(800, puffNow);
      const pGain = this.ctx.createGain();
      pGain.gain.setValueAtTime(0.25, puffNow);
      pGain.gain.exponentialRampToValueAtTime(0.001, puffNow + 0.2);
      src.connect(pFilter);
      pFilter.connect(pGain);
      pGain.connect(this.masterGain);
      src.start(puffNow);
    }, 450);
  }

  // Sound FX: Fire Rain Ambient Drone & Crackle
  playFireRainAmbient() {
    this.ensureContext();
    if (!this.ctx || this.isMuted) return;
    const now = this.ctx.currentTime;
    const dur = 7.0;

    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.type = 'sawtooth';
    osc.frequency.setValueAtTime(52, now);
    osc.frequency.linearRampToValueAtTime(45, now + dur);

    const filter = this.ctx.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(180, now);

    gain.gain.setValueAtTime(0.001, now);
    gain.gain.linearRampToValueAtTime(0.35, now + 1.5);
    gain.gain.linearRampToValueAtTime(0.35, now + dur - 1.5);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + dur);

    osc.connect(filter);
    filter.connect(gain);
    gain.connect(this.masterGain);

    osc.start(now);
    osc.stop(now + dur);
  }

  // Sound FX: Heavy Wooden Door Creak
  playDoorCreak() {
    this.ensureContext();
    if (!this.ctx || this.isMuted) return;
    const now = this.ctx.currentTime;
    const dur = 2.2;

    // Modulated friction oscillator for timber grain creak
    const osc = this.ctx.createOscillator();
    osc.type = 'sawtooth';
    osc.frequency.setValueAtTime(65, now);
    osc.frequency.exponentialRampToValueAtTime(110, now + 0.8);
    osc.frequency.linearRampToValueAtTime(80, now + 1.6);
    osc.frequency.exponentialRampToValueAtTime(50, now + dur);

    // LFO for rough groaning timber vibration
    const lfo = this.ctx.createOscillator();
    const lfoGain = this.ctx.createGain();
    lfo.type = 'sine';
    lfo.frequency.setValueAtTime(18, now);
    lfoGain.gain.setValueAtTime(25, now);
    lfo.connect(osc.frequency);

    const filter = this.ctx.createBiquadFilter();
    filter.type = 'bandpass';
    filter.frequency.setValueAtTime(260, now);
    filter.Q.setValueAtTime(3.5, now);

    const gain = this.ctx.createGain();
    gain.gain.setValueAtTime(0.001, now);
    gain.gain.linearRampToValueAtTime(0.28, now + 0.3);
    gain.gain.linearRampToValueAtTime(0.24, now + 1.5);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + dur);

    osc.connect(filter);
    filter.connect(gain);
    gain.connect(this.masterGain);

    lfo.start(now);
    osc.start(now);
    lfo.stop(now + dur);
    osc.stop(now + dur);
  }

  // Sound FX: Chilling Close Whisper ("Don't turn around")
  playCloseWhisper() {
    this.ensureContext();
    if (!this.ctx || this.isMuted) return;
    const now = this.ctx.currentTime;
    const dur = 1.8;

    // Filtered shaped noise for breathy human speech formant
    const bufferSize = Math.floor(this.ctx.sampleRate * dur);
    const buffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) {
      data[i] = (Math.random() * 2 - 1) * 0.45;
    }

    const src = this.ctx.createBufferSource();
    src.buffer = buffer;

    // Formant filter (whisper formant at ~1800Hz and ~2400Hz)
    const filter = this.ctx.createBiquadFilter();
    filter.type = 'bandpass';
    filter.frequency.setValueAtTime(1950, now);
    filter.Q.setValueAtTime(4.2, now);

    const gain = this.ctx.createGain();
    gain.gain.setValueAtTime(0.0001, now);
    gain.gain.linearRampToValueAtTime(0.22, now + 0.25);
    gain.gain.linearRampToValueAtTime(0.18, now + 0.9);
    gain.gain.linearRampToValueAtTime(0.22, now + 1.2);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + dur);

    src.connect(filter);
    filter.connect(gain);
    gain.connect(this.masterGain);

    src.start(now);
    src.stop(now + dur);
  }

  // Sound FX: Ethereal Window Chime (Ending windows lighting up)
  playWindowChime(pitchMultiplier = 1.0) {
    this.ensureContext();
    if (!this.ctx || this.isMuted) return;
    const now = this.ctx.currentTime;
    const dur = 2.4;

    const baseFreq = 587.33 * pitchMultiplier; // D5 / E5 / A5
    const osc = this.ctx.createOscillator();
    osc.type = 'sine';
    osc.frequency.setValueAtTime(baseFreq, now);

    const harm = this.ctx.createOscillator();
    harm.type = 'sine';
    harm.frequency.setValueAtTime(baseFreq * 2.02, now);

    const gain = this.ctx.createGain();
    gain.gain.setValueAtTime(0.001, now);
    gain.gain.linearRampToValueAtTime(0.18, now + 0.04);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + dur);

    const harmGain = this.ctx.createGain();
    harmGain.gain.setValueAtTime(0.001, now);
    harmGain.gain.linearRampToValueAtTime(0.08, now + 0.04);
    harmGain.gain.exponentialRampToValueAtTime(0.0001, now + dur * 0.7);

    osc.connect(gain);
    harm.connect(harmGain);
    gain.connect(this.masterGain);
    harmGain.connect(this.masterGain);

    osc.start(now);
    harm.start(now);
    osc.stop(now + dur);
    harm.stop(now + dur);
  }

  // Sound FX: Deep Sub-Bass Drone Strike (Scene 17: Lights Off Twist)
  playDroneStrike() {
    this.ensureContext();
    if (!this.ctx || this.isMuted) return;
    const now = this.ctx.currentTime;

    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.type = 'sine';
    osc.frequency.setValueAtTime(55, now);
    osc.frequency.exponentialRampToValueAtTime(30, now + 3.0);

    gain.gain.setValueAtTime(0.4, now);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + 3.2);

    osc.connect(gain);
    gain.connect(this.masterGain);
    osc.start(now);
    osc.stop(now + 3.2);

    this.playTwistSting();
  }

  toggleMute() {
    this.ensureContext();
    this.isMuted = !this.isMuted;
    if (this.masterGain && this.ctx) {
      this.masterGain.gain.setValueAtTime(this.isMuted ? 0 : 0.6, this.ctx.currentTime);
    }
    return this.isMuted;
  }
}

// Global audio singleton
const soundEngine = new AudioEngine();
