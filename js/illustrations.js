/**
 * illustrations.js
 * "The Village That Remembers" - Vector Scene Illustrator
 * 
 * Cinematic Illustrated Realism:
 * - Authentic Indian rural architecture, textured walls, aged plaster, weathered wood, clay roof tiles
 * - Volumetric sunlight & moonlight, natural shadows, atmospheric depth, layered compositions
 * - Upgraded recognizable human ghost apparitions with hollow eyes and authentic attire
 * - Smooth Day/Night CSS transitions, animated silhouettes, glowing windows
 */

const SceneIllustrations = {
  // Shared atmospheric sky, celestial bodies, volumetric lighting, and texture patterns
  getAtmosphericSky(sceneId) {
    return (function getAtmosphericSky(sceneId) {
  return `
      <!-- Sky Gradients, Texture Patterns, & Atmospheric Filters -->
      <defs>
        <!-- Dynamic Sky Gradients -->
        <linearGradient id="sky-day-${sceneId}" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stop-color="#fae5cc" />
          <stop offset="35%" stop-color="#f4cca4" />
          <stop offset="70%" stop-color="#e3ae81" />
          <stop offset="100%" stop-color="#ca8e5e" />
        </linearGradient>
        <linearGradient id="sky-night-${sceneId}" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stop-color="#050711" />
          <stop offset="38%" stop-color="#0c1122" />
          <stop offset="72%" stop-color="#141a2e" />
          <stop offset="100%" stop-color="#1a1826" />
        </linearGradient>

        <!-- Architectural Material Gradients -->
        <linearGradient id="sandstone-day" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stop-color="#dfc5a2" />
          <stop offset="50%" stop-color="#caa57c" />
          <stop offset="100%" stop-color="#b0885c" />
        </linearGradient>
        <linearGradient id="sandstone-night" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stop-color="#242c40" />
          <stop offset="60%" stop-color="#181e2e" />
          <stop offset="100%" stop-color="#10141f" />
        </linearGradient>
        <linearGradient id="sandstone-highlight" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stop-color="#f4e0c3" />
          <stop offset="50%" stop-color="#dfc5a2" />
          <stop offset="100%" stop-color="#caa57c" />
        </linearGradient>

        <linearGradient id="plaster-cream-day" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stop-color="#f2e8d8" />
          <stop offset="60%" stop-color="#e5d5be" />
          <stop offset="100%" stop-color="#cfbda1" />
        </linearGradient>
        <linearGradient id="plaster-cream-night" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stop-color="#2a3042" />
          <stop offset="60%" stop-color="#1b202e" />
          <stop offset="100%" stop-color="#121622" />
        </linearGradient>

        <linearGradient id="ground-dirt-day" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stop-color="#c99f74" />
          <stop offset="40%" stop-color="#b88b5d" />
          <stop offset="85%" stop-color="#996e43" />
          <stop offset="100%" stop-color="#7d5530" />
        </linearGradient>
        <linearGradient id="ground-dirt-night" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stop-color="#1c2233" />
          <stop offset="50%" stop-color="#141824" />
          <stop offset="100%" stop-color="#0a0d14" />
        </linearGradient>

        <!-- Ground Cast Shadow Gradients -->
        <linearGradient id="ground-shadow-day" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stop-color="#3b2413" stop-opacity="0.38" />
          <stop offset="65%" stop-color="#3b2413" stop-opacity="0.18" />
          <stop offset="100%" stop-color="#3b2413" stop-opacity="0.0" />
        </linearGradient>
        <linearGradient id="ground-shadow-night" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stop-color="#050810" stop-opacity="0.55" />
          <stop offset="65%" stop-color="#050810" stop-opacity="0.25" />
          <stop offset="100%" stop-color="#050810" stop-opacity="0.0" />
        </linearGradient>

        <!-- Celestial Glow Gradients -->
        <linearGradient id="sun-glow" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#fffef7" stop-opacity="0.95" />
          <stop offset="35%" stop-color="#fedaa2" stop-opacity="0.75" />
          <stop offset="70%" stop-color="#f39c59" stop-opacity="0.3" />
          <stop offset="100%" stop-color="#f39c59" stop-opacity="0" />
        </linearGradient>
        <linearGradient id="moon-glow" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#ffffff" stop-opacity="0.95" />
          <stop offset="40%" stop-color="#d4e8fc" stop-opacity="0.6" />
          <stop offset="75%" stop-color="#55759e" stop-opacity="0.25" />
          <stop offset="100%" stop-color="#55759e" stop-opacity="0" />
        </linearGradient>

        <!-- Volumetric Sunbeams -->
        <linearGradient id="volumetric-sunbeam" x1="30%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stop-color="#fff8e7" stop-opacity="0.28" />
          <stop offset="45%" stop-color="#fedca8" stop-opacity="0.14" />
          <stop offset="100%" stop-color="#f39c59" stop-opacity="0" />
        </linearGradient>
        <!-- Volumetric Moonbeams -->
        <linearGradient id="volumetric-moonbeam" x1="20%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stop-color="#cbe2fc" stop-opacity="0.22" />
          <stop offset="50%" stop-color="#7da8d8" stop-opacity="0.08" />
          <stop offset="100%" stop-color="#2a3d5e" stop-opacity="0" />
        </linearGradient>

        <!-- Filters -->
        <filter id="glow-blur" x="-30%" y="-30%" width="160%" height="160%">
          <feGaussianBlur stdDeviation="4.5" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>

        <filter id="ghost-haze" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="3.5" result="blur" />
          <feColorMatrix in="blur" type="matrix" values="0.7 0.2 0.1 0 0.1  0.2 0.7 0.2 0 0.15  0.2 0.3 0.9 0 0.3  0 0 0 0.88 0" result="spectral" />
          <feMerge>
            <feMergeNode in="spectral" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>

        <filter id="lantern-glow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="8" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>

        <!-- Terracotta Clay Roof Tiles Pattern (Khaprail) -->
        <pattern id="pat-khaprail" width="18" height="10" patternUnits="userSpaceOnUse">
          <rect width="18" height="10" fill="#914324" />
          <!-- Overlapping barrel curves with highlights -->
          <path d="M0 0 C4.5 3.5, 13.5 3.5, 18 0 L18 4 C13.5 7.5, 4.5 7.5, 0 4 Z" fill="#b35832" />
          <path d="M1 0.5 C5 3, 13 3, 17 0.5" stroke="#d4794e" stroke-width="0.8" fill="none" opacity="0.6" />
          <line x1="0" y1="9.5" x2="18" y2="9.5" stroke="#52200d" stroke-width="1.2" opacity="0.7" />
          <line x1="9" y1="0" x2="9" y2="10" stroke="#52200d" stroke-width="0.8" opacity="0.35" />
        </pattern>

        <pattern id="pat-khaprail-night" width="18" height="10" patternUnits="userSpaceOnUse">
          <rect width="18" height="10" fill="#18131d" />
          <path d="M0 0 C4.5 3.5, 13.5 3.5, 18 0 L18 4 C13.5 7.5, 4.5 7.5, 0 4 Z" fill="#241d2c" />
          <path d="M1 0.5 C5 3, 13 3, 17 0.5" stroke="#41354e" stroke-width="0.8" fill="none" opacity="0.4" />
          <line x1="0" y1="9.5" x2="18" y2="9.5" stroke="#0e0a12" stroke-width="1.2" opacity="0.8" />
          <line x1="9" y1="0" x2="9" y2="10" stroke="#0e0a12" stroke-width="0.8" opacity="0.5" />
        </pattern>

        <!-- Weathered Indian Kiln Brick Pattern -->
        <pattern id="pat-brick" width="28" height="14" patternUnits="userSpaceOnUse">
          <rect width="28" height="14" fill="#6e2d17" />
          <!-- Staggered Courses -->
          <rect x="1" y="1" width="26" height="5.5" rx="0.5" fill="#9e472a" stroke="#59200f" stroke-width="0.6" />
          <rect x="-13" y="7.5" width="26" height="5.5" rx="0.5" fill="#8f3c20" stroke="#59200f" stroke-width="0.6" />
          <rect x="15" y="7.5" width="26" height="5.5" rx="0.5" fill="#9e472a" stroke="#59200f" stroke-width="0.6" />
          <!-- Mortar Lines -->
          <line x1="0" y1="6.8" x2="28" y2="6.8" stroke="#d5c8b7" stroke-width="0.9" opacity="0.5" />
          <line x1="0" y1="13.8" x2="28" y2="13.8" stroke="#d5c8b7" stroke-width="0.9" opacity="0.5" />
        </pattern>

        <pattern id="pat-brick-night" width="28" height="14" patternUnits="userSpaceOnUse">
          <rect width="28" height="14" fill="#141822" />
          <rect x="1" y="1" width="26" height="5.5" rx="0.5" fill="#1d2332" stroke="#0e111a" stroke-width="0.6" />
          <rect x="-13" y="7.5" width="26" height="5.5" rx="0.5" fill="#191f2c" stroke="#0e111a" stroke-width="0.6" />
          <rect x="15" y="7.5" width="26" height="5.5" rx="0.5" fill="#1d2332" stroke="#0e111a" stroke-width="0.6" />
          <line x1="0" y1="6.8" x2="28" y2="6.8" stroke="#2a3348" stroke-width="0.8" opacity="0.4" />
          <line x1="0" y1="13.8" x2="28" y2="13.8" stroke="#2a3348" stroke-width="0.8" opacity="0.4" />
        </pattern>

        <!-- Weathered Wood Grain Pattern -->
        <pattern id="pat-wood" width="14" height="48" patternUnits="userSpaceOnUse">
          <rect width="14" height="48" fill="#4d321d" />
          <line x1="2.5" y1="0" x2="2.5" y2="48" stroke="#362212" stroke-width="1.2" opacity="0.75" />
          <line x1="6.5" y1="0" x2="6.5" y2="48" stroke="#63442a" stroke-width="0.9" opacity="0.6" />
          <line x1="10" y1="0" x2="10" y2="48" stroke="#362212" stroke-width="1.2" opacity="0.7" />
          <ellipse cx="6" cy="24" rx="2" ry="4.5" fill="#2b1a0c" />
        </pattern>

        <pattern id="pat-wood-night" width="14" height="48" patternUnits="userSpaceOnUse">
          <rect width="14" height="48" fill="#151720" />
          <line x1="2.5" y1="0" x2="2.5" y2="48" stroke="#0b0c12" stroke-width="1.2" opacity="0.75" />
          <line x1="6.5" y1="0" x2="6.5" y2="48" stroke="#242734" stroke-width="0.9" opacity="0.6" />
          <line x1="10" y1="0" x2="10" y2="48" stroke="#0b0c12" stroke-width="1.2" opacity="0.7" />
          <ellipse cx="6" cy="24" rx="2" ry="4.5" fill="#090a0f" />
        </pattern>

        <!-- Flagstone / Cobblestone Pavement Pattern -->
        <pattern id="pat-cobbles" width="36" height="24" patternUnits="userSpaceOnUse">
          <rect width="36" height="24" fill="#a4825d" />
          <!-- Flagstones with rounded corners and highlights -->
          <rect x="1" y="1" width="16" height="10" rx="2" fill="#ba9770" stroke="#785a3a" stroke-width="0.7" />
          <rect x="19" y="1" width="16" height="10" rx="2" fill="#b08c65" stroke="#785a3a" stroke-width="0.7" />
          <rect x="-8" y="13" width="16" height="10" rx="2" fill="#b08c65" stroke="#785a3a" stroke-width="0.7" />
          <rect x="10" y="13" width="16" height="10" rx="2" fill="#c29f78" stroke="#785a3a" stroke-width="0.7" />
          <rect x="28" y="13" width="16" height="10" rx="2" fill="#b5916a" stroke="#785a3a" stroke-width="0.7" />
        </pattern>

        <pattern id="pat-cobbles-night" width="36" height="24" patternUnits="userSpaceOnUse">
          <rect width="36" height="24" fill="#131722" />
          <rect x="1" y="1" width="16" height="10" rx="2" fill="#1b2130" stroke="#0b0d14" stroke-width="0.7" />
          <rect x="19" y="1" width="16" height="10" rx="2" fill="#171d2b" stroke="#0b0d14" stroke-width="0.7" />
          <rect x="-8" y="13" width="16" height="10" rx="2" fill="#171d2b" stroke="#0b0d14" stroke-width="0.7" />
          <rect x="10" y="13" width="16" height="10" rx="2" fill="#202738" stroke="#0b0d14" stroke-width="0.7" />
          <rect x="28" y="13" width="16" height="10" rx="2" fill="#19202e" stroke="#0b0d14" stroke-width="0.7" />
        </pattern>

        <linearGradient id="fog-sweep-grad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stop-color="#1e2c40" stop-opacity="0" />
          <stop offset="25%" stop-color="#3d5678" stop-opacity="0.8" />
          <stop offset="75%" stop-color="#3d5678" stop-opacity="0.8" />
          <stop offset="100%" stop-color="#1e2c40" stop-opacity="0" />
        </linearGradient>
      </defs>

      <!-- Background Sky Rectangles -->
      <rect class="sky-bg sky-day" width="100%" height="100%" fill="url(#sky-day-${sceneId})" />
      <rect class="sky-bg sky-night" width="100%" height="100%" fill="url(#sky-night-${sceneId})" />

      <!-- Distant Aravalli Mountain Ridge (Deep atmospheric horizon layer) -->
      <g class="distant-mountain-backdrop">
        <path class="day-only" fill="#b88a65" opacity="0.45" d="M0 320 Q60 270 140 295 T290 280 T390 300 L390 480 L0 480 Z" />
        <path class="day-only" fill="#9e714e" opacity="0.6" d="M0 340 Q90 310 190 330 T360 315 T390 335 L390 500 L0 500 Z" />
        <path class="night-only" fill="#0d1322" opacity="0.7" d="M0 320 Q60 270 140 295 T290 280 T390 300 L390 480 L0 480 Z" />
        <path class="night-only" fill="#090d18" opacity="0.85" d="M0 340 Q90 310 190 330 T360 315 T390 335 L390 500 L0 500 Z" />
        
        <!-- Distant Rural Telegraph / Power Line on Horizon -->
        <g opacity="0.35" class="distant-wire-line">
          <line x1="45" y1="300" x2="45" y2="330" stroke="#241710" stroke-width="1.2" />
          <line x1="40" y1="305" x2="50" y2="305" stroke="#241710" stroke-width="0.8" />
          <line x1="210" y1="305" x2="210" y2="335" stroke="#241710" stroke-width="1.2" />
          <line x1="205" y1="310" x2="215" y2="310" stroke="#241710" stroke-width="0.8" />
          <line x1="365" y1="295" x2="365" y2="325" stroke="#241710" stroke-width="1.2" />
          <line x1="360" y1="300" x2="370" y2="300" stroke="#241710" stroke-width="0.8" />
          <path d="M45 305 Q125 320 210 310 Q285 318 365 300" fill="none" stroke="#241710" stroke-width="0.7" />
        </g>
      </g>

      <!-- Celestial Bodies & Atmosphere (DAY) -->
      <g class="celestial-day day-only">
        <!-- Warm Radiant Sun with layered bloom -->
        <circle cx="76%" cy="17%" r="65" fill="url(#sun-glow)" opacity="0.6" filter="url(#glow-blur)" />
        <circle cx="76%" cy="17%" r="38" fill="url(#sun-glow)" />
        <circle cx="76%" cy="17%" r="20" fill="#fffef7" />
        
        <!-- Multi-shaft Volumetric Golden Sunbeams -->
        <g class="volumetric-ray-group">
          <polygon points="296,140 0,650 110,650" fill="url(#volumetric-sunbeam)" opacity="0.7" />
          <polygon points="296,140 120,720 250,720" fill="url(#volumetric-sunbeam)" opacity="0.5" />
          <polygon points="296,140 270,740 390,740" fill="url(#volumetric-sunbeam)" opacity="0.35" />
        </g>

        <!-- Soaring Silhouetted Birds in Distance -->
        <g opacity="0.55" fill="#4d301b">
          <path d="M90 120 Q96 112 102 120 Q108 112 114 120 Q106 117 102 123 Q98 117 90 120 Z" class="flutter-bird-1" />
          <path d="M125 105 Q130 98 135 105 Q140 98 145 105 Q138 102 135 107 Q132 102 125 105 Z" class="flutter-bird-2" />
          <path d="M150 135 Q154 129 158 135 Q162 129 166 135 Q160 133 158 137 Q156 133 150 135 Z" />
          <path d="M210 115 Q214 110 218 115 Q222 110 226 115 Q221 113 218 117 Q215 113 210 115 Z" opacity="0.4" />
        </g>

        <!-- Floating Golden Dust Motes drifting in sunlight rays -->
        <circle cx="180" cy="380" r="1.5" fill="#fff7d6" opacity="0.6" class="floating-dust-1" />
        <circle cx="240" cy="450" r="2" fill="#fff7d6" opacity="0.5" class="floating-dust-2" />
        <circle cx="110" cy="520" r="1.5" fill="#fff7d6" opacity="0.6" class="floating-dust-3" />
        <circle cx="290" cy="320" r="1.8" fill="#fff7d6" opacity="0.45" class="floating-dust-1" />
      </g>

      <!-- Celestial Bodies & Atmosphere (NIGHT) -->
      <g class="celestial-night night-only">
        <!-- Pale Moon with silver atmospheric aura -->
        <circle cx="24%" cy="15%" r="48" fill="url(#moon-glow)" opacity="0.4" filter="url(#glow-blur)" />
        <circle cx="24%" cy="15%" r="22" fill="#eff5fc" />
        <circle cx="27%" cy="13%" r="20" fill="#0c1122" />
        
        <!-- Stars across the night sky -->
        <g fill="#eff6ff" opacity="0.8">
          <circle cx="45%" cy="8%" r="1.2" class="twinkle-slow" />
          <circle cx="65%" cy="12%" r="1.5" class="twinkle-fast" />
          <circle cx="82%" cy="6%" r="1" />
          <circle cx="90%" cy="18%" r="1.3" class="twinkle-slow" />
          <circle cx="12%" cy="22%" r="1.4" class="twinkle-fast" />
          <circle cx="55%" cy="19%" r="1" />
          <circle cx="38%" cy="25%" r="1.2" class="twinkle-slow" />
          <circle cx="75%" cy="26%" r="1.5" />
        </g>

        <!-- Subtle Volumetric Moonbeams -->
        <polygon points="94,125 0,650 90,650" fill="url(#volumetric-moonbeam)" opacity="0.45" />
        <polygon points="94,125 100,700 220,700" fill="url(#volumetric-moonbeam)" opacity="0.3" />

        <!-- Ground Night Haze / Eerie Mist Ribbon -->
        <rect x="0" y="520" width="390" height="90" fill="url(#fog-sweep-grad)" opacity="0.35" />
      </g>
  `;
})(sceneId);
  },

  // 1. OPENING: The Bottle in Grass
  renderBottleScene(isSecondPlaythrough = false) {
    return (function renderBottleScene(isSecondPlaythrough = false) {
  const bottleTransform = isSecondPlaythrough 
    ? 'translate(135, 480) scale(1.25) rotate(-3)' 
    : 'translate(140, 580) rotate(-15)';
  const stonePedestal = isSecondPlaythrough ? `
    <!-- Weathered Sandstone Threshold in Foreground (Second Playthrough) -->
    <g id="bottle-stone-pedestal">
      <polygon points="100,588 290,578 310,630 80,640" fill="#0d1218" stroke="#253545" stroke-width="1.8" />
      <polygon points="80,640 310,630 300,672 70,682" fill="#070a0e" />
      <line x1="115" y1="594" x2="275" y2="585" stroke="#486580" stroke-width="1.2" opacity="0.65" />
      <path d="M140 592 L152 608 L148 625" stroke="#182330" stroke-width="1.4" fill="none" />
      <path d="M240 588 L232 605 L236 628" stroke="#182330" stroke-width="1.4" fill="none" />
    </g>
  ` : '';

  return `
    <svg viewBox="0 0 390 844" class="scene-illustration bottle-hero-svg" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="sky-bottle-dark" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stop-color="#020407" />
          <stop offset="38%" stop-color="#070b15" />
          <stop offset="72%" stop-color="#0e1520" />
          <stop offset="100%" stop-color="#09100d" />
        </linearGradient>
        <filter id="glow-blur-bottle" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="3.5" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
        <linearGradient id="glass-specular-grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#ffffff" stop-opacity="0.8" />
          <stop offset="30%" stop-color="#80d8e8" stop-opacity="0.4" />
          <stop offset="100%" stop-color="#1c3038" stop-opacity="0" />
        </linearGradient>
      </defs>

      <!-- Nocturnal Sky Background -->
      <rect width="100%" height="100%" fill="url(#sky-bottle-dark)" />

      <!-- Faint Twinkling Night Stars -->
      <circle cx="18%" cy="10%" r="1.4" fill="#ffffff" opacity="0.75" class="twinkle-fast" />
      <circle cx="46%" cy="16%" r="1.2" fill="#cbe3ff" opacity="0.55" class="twinkle-slow" />
      <circle cx="76%" cy="9%" r="1.6" fill="#ffffff" opacity="0.8" class="twinkle-fast" />
      <circle cx="86%" cy="22%" r="1.1" fill="#ffffff" opacity="0.45" />
      <circle cx="30%" cy="26%" r="1.0" fill="#ffffff" opacity="0.35" />
      <circle cx="62%" cy="19%" r="1.3" fill="#d9ebfc" opacity="0.6" class="twinkle-slow" />

      <!-- Crescent Moon Shrouded in Twilight Haze -->
      <circle cx="78%" cy="13%" r="38" fill="#88afdb" opacity="0.12" filter="url(#glow-blur-bottle)" />
      <circle cx="78%" cy="13%" r="16" fill="#eaf4fe" opacity="0.7" />
      <circle cx="81%" cy="11%" r="15" fill="#070b15" />

      <!-- Floating Fireflies with soft ambient glow -->
      <circle cx="80" cy="620" r="2.8" fill="#e8ff70" opacity="0.85" class="twinkle-slow" filter="url(#glow-blur-bottle)" />
      <circle cx="315" cy="570" r="3.2" fill="#e8ff70" opacity="0.8" class="twinkle-fast" filter="url(#glow-blur-bottle)" />
      <circle cx="120" cy="520" r="2.2" fill="#e8ff70" opacity="0.7" class="twinkle-slow" filter="url(#glow-blur-bottle)" />
      <circle cx="280" cy="670" r="2.6" fill="#e8ff70" opacity="0.75" class="twinkle-fast" filter="url(#glow-blur-bottle)" />
      <circle cx="190" cy="545" r="2.0" fill="#e8ff70" opacity="0.6" class="twinkle-fast" filter="url(#glow-blur-bottle)" />
      
      <!-- Distant Silhouetted Aravalli Ridges & Kaldhara Skyline -->
      <path fill="#05070e" d="M0 480 Q90 430 200 460 T390 450 L390 844 L0 844 Z" opacity="0.9" />
      <path fill="#04060b" d="M0 530 Q140 495 260 535 T390 520 L390 844 L0 844 Z" />

      <!-- Foreground Earth Mound with Dry Soil Fissures -->
      <path fill="#030507" d="M-20 590 Q120 560 220 600 T410 580 L410 844 L-20 844 Z" />
      <path d="M60 620 Q90 635 120 628 M250 610 Q280 625 310 620" stroke="#0e141a" stroke-width="1.8" fill="none" opacity="0.7" />

      ${stonePedestal}

      <!-- Background Swaying Grass Blades -->
      <g fill="#08100a" class="grass-sway-back">
        <path class="sway-blade-1" d="M40 700 Q45 580 65 525 Q55 580 50 700 Z" />
        <path class="sway-blade-2" d="M70 710 Q85 595 110 555 Q95 610 85 710 Z" />
        <path class="sway-blade-3" d="M305 710 Q285 585 255 535 Q280 590 315 710 Z" />
        <path class="sway-blade-1" d="M340 720 Q335 605 315 565 Q330 620 350 720 Z" />
        <path class="sway-blade-2" d="M15 710 Q25 610 35 560 Q20 620 10 710 Z" />
      </g>

      <!-- The Ancient Glass Bottle (Interactive Hero) -->
      <g id="interactive-bottle-group" class="interactive-bottle-hero" transform="${bottleTransform}">
        <!-- Ambient Radial Glow around Glass -->
        <ellipse cx="60" cy="20" rx="95" ry="48" fill="#7acbd8" opacity="0.14" class="bottle-glow" />

        <!-- Cast Ground Shadow -->
        <ellipse cx="60" cy="42" rx="76" ry="18" fill="#010204" opacity="0.85" />

        <!-- Outer Glass Body (Thick vintage hand-blown glass) -->
        <path d="M10 15 C10 -2, 30 -6, 45 4 L105 9 C126 11, 137 24, 137 38 C137 53, 126 64, 105 67 L45 70 C28 80, 10 74, 10 55 Z" 
              fill="#182c33" opacity="0.8" stroke="#68b9c7" stroke-width="2.4" />

        <!-- Glass Inner Refraction & Caustics -->
        <path d="M15 25 C15 13, 32 8, 48 16 L100 20 C118 22, 129 31, 129 40 C129 49, 118 56, 100 58 L48 60 C32 66, 15 56, 15 42 Z" 
              fill="#0d1d21" opacity="0.9" />
        
        <!-- Rolled Paper Inside the Bottle (With animation hook) -->
        <g id="bottle-scroll-inside" class="rolled-scroll-inside">
          <path d="M32 29 C32 23, 38 21, 44 23 L96 27 C102 28, 104 35, 104 41 C104 47, 100 51, 94 50 L42 45 C36 44, 32 37, 32 29 Z" 
                fill="#f0d5a8" stroke="#8b5a2b" stroke-width="1.3" />
          <!-- Crimson Sealing Ribbon & Wax Seal -->
          <path d="M68 25 L66 49" stroke="#9e1620" stroke-width="3.2" />
          <circle cx="67" cy="37" r="5" fill="#750c14" stroke="#4a050b" stroke-width="1" />
          <circle cx="67" cy="37" r="2.2" fill="#9e1620" />
          <!-- Scroll Rolled Spirals -->
          <ellipse cx="36" cy="34" rx="4.5" ry="9.5" fill="#dbb77d" stroke="#6e451c" stroke-width="1.1" />
          <ellipse cx="98" cy="39" rx="4" ry="8.5" fill="#dbb77d" stroke="#6e451c" stroke-width="1.1" />
          <!-- Faint handwriting lines on scroll -->
          <line x1="45" y1="30" x2="60" y2="31" stroke="#5a3d1c" stroke-width="0.8" opacity="0.6" />
          <line x1="74" y1="33" x2="90" y2="34" stroke="#5a3d1c" stroke-width="0.8" opacity="0.6" />
        </g>

        <!-- Bottle Neck & Rim Lip -->
        <path d="M10 25 L-12 28 C-16 29, -19 36, -19 42 C-19 48, -16 54, -12 55 L10 58" 
              fill="#223b42" stroke="#68b9c7" stroke-width="2.4" />
        <ellipse cx="-16" cy="41.5" rx="4.5" ry="11.5" fill="#112328" stroke="#7acbd8" stroke-width="2.2" />

        <!-- Weathered Cork Stopper (Animated pop-off) -->
        <path id="bottle-cork-stopper" class="bottle-cork" d="M-17 32 L-29 34 C-33 35, -33 46, -29 47 L-17 49 Z" fill="#997547" stroke="#523d21" stroke-width="1.6" />

        <!-- Glass Specular Highlight Streaks -->
        <path d="M22 17 L106 21" stroke="#ffffff" stroke-width="2.8" stroke-linecap="round" opacity="0.65" />
        <path d="M30 24 L96 27" stroke="#8ce2f0" stroke-width="1.2" stroke-linecap="round" opacity="0.45" />
        <ellipse cx="112" cy="38" rx="4" ry="8" fill="#ffffff" opacity="0.25" />
      </g>

      <!-- Foreground Wild Grass Clusters Framing the Base -->
      <g fill="#050b06" class="grass-sway-front">
        <path class="sway-blade-2" d="M100 844 Q120 735 135 685 Q125 745 115 844 Z" />
        <path class="sway-blade-1" d="M130 844 Q150 715 185 670 Q160 730 145 844 Z" />
        <path class="sway-blade-3" d="M220 844 Q240 755 270 695 Q245 765 235 844 Z" />
        <path class="sway-blade-2" d="M260 844 Q280 705 310 655 Q285 720 275 844 Z" />
        <path class="sway-blade-1" d="M310 844 Q330 740 355 700 Q340 765 330 844 Z" />
      </g>

      <!-- Pulsing Tap Prompt Beacon -->
      <g id="tap-bottle-beacon" transform="translate(195, 605)" class="tap-hint-beacon">
        <circle cx="0" cy="0" r="32" fill="none" stroke="#f6d365" stroke-width="2" opacity="0.8" class="pulse-ring" />
        <circle cx="0" cy="0" r="12" fill="#f6d365" opacity="0.85" class="pulse-dot" />
        <text x="0" y="52" text-anchor="middle" fill="#fae6be" font-size="12" letter-spacing="3" font-family="'Cinzel', serif" font-weight="700">TAP THE BOTTLE</text>
      </g>
    </svg>
  `;
})(isSecondPlaythrough);
  },

  // 2. SCENE 01: Village Entrance
  renderEntranceScene() {
    return (function renderEntranceScene() {
  return `
    <svg class="scene-illustration" viewBox="0 0 390 844" xmlns="http://www.w3.org/2000/svg">
      ${this.getAtmosphericSky('entrance')}

      <!-- Distant Village Ruins & Temple Shikhara on Horizon -->
      <g class="distant-village-layer">
        <path class="day-only" fill="#9e714e" opacity="0.65" d="M0 450 Q90 420 190 440 T390 430 L390 490 L0 490 Z" />
        <path class="night-only" fill="#0c121e" opacity="0.8" d="M0 450 Q90 420 190 440 T390 430 L390 490 L0 490 Z" />
        
        <!-- Distant Shikhara Spire in vanishing point -->
        <polygon points="195,410 198,445 192,445" fill="#593b22" class="day-only" opacity="0.6" />
        <polygon points="195,410 198,445 192,445" fill="#080c14" class="night-only" opacity="0.7" />
      </g>

      <!-- Dusty Receding Road with Stone Edge Curbs -->
      <g id="entrance-road-bed">
        <!-- Dirt Road Ground Base -->
        <polygon points="155,445 235,445 375,844 15,844" fill="url(#ground-dirt-day)" class="day-only" />
        <polygon points="155,445 235,445 375,844 15,844" fill="url(#ground-dirt-night)" class="night-only" />

        <!-- Weathered Flagstone Pavement Center Track -->
        <polygon points="172,445 218,445 295,844 95,844" fill="url(#pat-cobbles)" class="day-only" opacity="0.85" />
        <polygon points="172,445 218,445 295,844 95,844" fill="url(#pat-cobbles-night)" class="night-only" opacity="0.75" />

        <!-- Bullock Cart Wheel Ruts in Dust -->
        <path d="M178 445 Q184 620 135 844" stroke="#684729" stroke-width="3" fill="none" opacity="0.4" stroke-dasharray="14 12" class="day-only" />
        <path d="M212 445 Q216 620 255 844" stroke="#684729" stroke-width="3" fill="none" opacity="0.4" stroke-dasharray="16 10" class="day-only" />
        <path d="M178 445 Q184 620 135 844" stroke="#0a0f18" stroke-width="3" fill="none" opacity="0.6" stroke-dasharray="14 12" class="night-only" />
        <path d="M212 445 Q216 620 255 844" stroke="#0a0f18" stroke-width="3" fill="none" opacity="0.6" stroke-dasharray="16 10" class="night-only" />

        <!-- Scattered Roadside Stones & Gravel -->
        <g class="day-only" fill="#755234" opacity="0.75">
          <ellipse cx="110" cy="720" rx="5" ry="3" />
          <ellipse cx="125" cy="735" rx="3.5" ry="2" />
          <ellipse cx="285" cy="690" rx="6" ry="3.5" />
          <ellipse cx="300" cy="705" rx="4" ry="2.2" />
          <ellipse cx="185" cy="540" rx="3" ry="1.8" />
        </g>
        <g class="night-only" fill="#0d111a" opacity="0.8">
          <ellipse cx="110" cy="720" rx="5" ry="3" />
          <ellipse cx="125" cy="735" rx="3.5" ry="2" />
          <ellipse cx="285" cy="690" rx="6" ry="3.5" />
          <ellipse cx="300" cy="705" rx="4" ry="2.2" />
          <ellipse cx="185" cy="540" rx="3" ry="1.8" />
        </g>
      </g>

      <!-- Flanking Left Abandoned Haveli Wall -->
      <g class="village-house-left" transform="translate(0, 260)">
        <!-- Plaster Wall Base -->
        <polygon points="0,170 95,145 95,340 0,360" fill="url(#plaster-cream-day)" class="day-only" />
        <polygon points="0,170 95,145 95,340 0,360" fill="url(#plaster-cream-night)" class="night-only" />
        
        <!-- Large Exposed Brick Patch Beneath Peeling Lime Plaster -->
        <polygon points="8,180 65,168 58,230 4,235" fill="url(#pat-brick)" class="day-only" />
        <polygon points="8,180 65,168 58,230 4,235" fill="url(#pat-brick-night)" class="night-only" />
        <!-- Plaster ragged tear borders -->
        <path d="M8 180 Q35 165 65 168 Q58 230 4 235 Z" stroke="#85684a" stroke-width="1.8" fill="none" opacity="0.6" class="day-only" />
        <path d="M8 180 Q35 165 65 168 Q58 230 4 235 Z" stroke="#121622" stroke-width="1.8" fill="none" opacity="0.7" class="night-only" />

        <!-- Tiled Eaves with Terracotta Khaprail Pattern -->
        <polygon points="-10,170 102,143 98,126 -10,154" fill="url(#pat-khaprail)" class="day-only" />
        <polygon points="-10,170 102,143 98,126 -10,154" fill="url(#pat-khaprail-night)" class="night-only" />
        <!-- Eave Shadow Cast -->
        <polygon points="0,170 95,145 95,162 0,188" fill="#4d321c" opacity="0.35" class="day-only" />
        <polygon points="0,170 95,145 95,162 0,188" fill="#080a10" opacity="0.6" class="night-only" />

        <!-- Ground Floor Barred Window -->
        <rect x="22" y="240" width="34" height="42" rx="3" fill="#3b2413" class="day-only" />
        <rect x="22" y="240" width="34" height="42" rx="3" fill="#090d14" class="night-only" />
        <rect x="25" y="243" width="28" height="36" rx="2" fill="#140b05" class="day-only" />
        <rect x="25" y="243" width="28" height="36" rx="2" fill="#05070a" class="night-only" />
        <!-- Iron Bars -->
        <line x1="32" y1="243" x2="32" y2="279" stroke="#684729" stroke-width="1.8" class="day-only" />
        <line x1="39" y1="243" x2="39" y2="279" stroke="#684729" stroke-width="1.8" class="day-only" />
        <line x1="46" y1="243" x2="46" y2="279" stroke="#684729" stroke-width="1.8" class="day-only" />
        <line x1="32" y1="243" x2="32" y2="279" stroke="#222838" stroke-width="1.8" class="night-only" />
        <line x1="39" y1="243" x2="39" y2="279" stroke="#222838" stroke-width="1.8" class="night-only" />
        <line x1="46" y1="243" x2="46" y2="279" stroke="#222838" stroke-width="1.8" class="night-only" />

        <!-- Weathered Terracotta Water Pot (Matka) on Stoop -->
        <ellipse cx="78" cy="336" rx="10" ry="5" fill="#000" opacity="0.3" class="day-only" />
        <ellipse cx="78" cy="328" rx="8" ry="7" fill="#8f492b" stroke="#522310" stroke-width="1.2" class="day-only" />
        <ellipse cx="78" cy="322" rx="4.5" ry="1.8" fill="#522310" class="day-only" />
        <ellipse cx="78" cy="336" rx="10" ry="5" fill="#000" opacity="0.5" class="night-only" />
        <ellipse cx="78" cy="328" rx="8" ry="7" fill="#2d1c24" stroke="#120c10" stroke-width="1.2" class="night-only" />
        <ellipse cx="78" cy="322" rx="4.5" ry="1.8" fill="#120c10" class="night-only" />
      </g>

      <!-- Flanking Right Abandoned Haveli Wall -->
      <g class="village-house-right" transform="translate(295, 270)">
        <polygon points="0,140 95,160 95,350 0,330" fill="url(#plaster-cream-day)" class="day-only" />
        <polygon points="0,140 95,160 95,350 0,330" fill="url(#plaster-cream-night)" class="night-only" />
        <!-- Exposed Brick Patch -->
        <polygon points="25,175 75,168 80,225 30,230" fill="url(#pat-brick)" class="day-only" />
        <polygon points="25,175 75,168 80,225 30,230" fill="url(#pat-brick-night)" class="night-only" />
        <!-- Tiled Eaves -->
        <polygon points="-5,138 105,158 105,142 -5,122" fill="url(#pat-khaprail)" class="day-only" />
        <polygon points="-5,138 105,158 105,142 -5,122" fill="url(#pat-khaprail-night)" class="night-only" />
      </g>

      <!-- Overarching Ancient Peepal Tree Foliage & Gnarled Boughs -->
      <g class="entrance-overhanging-tree">
        <!-- Main Gnarled Branch arching from left -->
        <path d="M-10 240 Q40 180 85 150 Q140 120 220 110" stroke="#362215" stroke-width="22" fill="none" stroke-linecap="round" class="day-only" />
        <path d="M-10 240 Q40 180 85 150 Q140 120 220 110" stroke="#0f1118" stroke-width="22" fill="none" stroke-linecap="round" class="night-only" />
        <path d="M85 150 Q130 90 260 70" stroke="#2d1c11" stroke-width="12" fill="none" stroke-linecap="round" class="day-only" />
        <path d="M85 150 Q130 90 260 70" stroke="#0a0c12" stroke-width="12" fill="none" stroke-linecap="round" class="night-only" />
        <!-- Hanging Aerial Tendrils -->
        <path d="M60 170 Q55 270 50 360" stroke="#362215" stroke-width="3" fill="none" opacity="0.8" class="day-only" />
        <path d="M120 140 Q125 240 120 320" stroke="#362215" stroke-width="2.5" fill="none" opacity="0.75" class="day-only" />
        <path d="M60 170 Q55 270 50 360" stroke="#12151e" stroke-width="3" fill="none" opacity="0.8" class="night-only" />
        <path d="M120 140 Q125 240 120 320" stroke="#12151e" stroke-width="2.5" fill="none" opacity="0.75" class="night-only" />
        
        <!-- Dense Layered Foliage Canopy -->
        <g class="day-only">
          <ellipse cx="60" cy="110" rx="90" ry="70" fill="#243820" />
          <ellipse cx="160" cy="80" rx="100" ry="65" fill="#2c4427" />
          <ellipse cx="270" cy="95" rx="80" ry="60" fill="#365430" />
          <!-- Sunlit Top Leaves -->
          <ellipse cx="140" cy="55" rx="75" ry="45" fill="#476b3f" opacity="0.85" />
          <ellipse cx="240" cy="65" rx="65" ry="40" fill="#527d49" opacity="0.75" />
        </g>
        <g class="night-only">
          <ellipse cx="60" cy="110" rx="90" ry="70" fill="#0b130e" />
          <ellipse cx="160" cy="80" rx="100" ry="65" fill="#0e1711" />
          <ellipse cx="270" cy="95" rx="80" ry="60" fill="#121d15" />
        </g>
      </g>

      <!-- THE MONUMENTAL STONE GATEWAY OF KALDHARA -->
      <g id="kaldhara-border-gateway">
        <!-- Cast Gateway Shadow across Road (DAY & NIGHT) -->
        <polygon points="65,580 325,580 380,680 10,680" fill="url(#ground-shadow-day)" class="day-only" />
        <polygon points="65,580 325,580 380,680 10,680" fill="url(#ground-shadow-night)" class="night-only" />

        <!-- Left Sandstone Ashlar Pillar -->
        <rect x="68" y="210" width="46" height="370" fill="url(#sandstone-day)" stroke="#684729" stroke-width="2" class="day-only" />
        <rect x="68" y="210" width="46" height="370" fill="url(#sandstone-night)" stroke="#121622" stroke-width="2" class="night-only" />
        <!-- Pillar Mouldings & Joints -->
        <rect x="62" y="198" width="58" height="16" rx="2" fill="url(#sandstone-highlight)" class="day-only" />
        <rect x="62" y="198" width="58" height="16" rx="2" fill="#2d3750" class="night-only" />
        <rect x="60" y="570" width="62" height="20" rx="2" fill="url(#sandstone-day)" class="day-only" />
        <rect x="60" y="570" width="62" height="20" rx="2" fill="#181e2a" class="night-only" />
        <!-- Masonry Course Lines & Weathering Cracks -->
        <line x1="68" y1="300" x2="114" y2="300" stroke="#52351c" stroke-width="1.5" opacity="0.5" class="day-only" />
        <line x1="68" y1="390" x2="114" y2="390" stroke="#52351c" stroke-width="1.5" opacity="0.5" class="day-only" />
        <line x1="68" y1="480" x2="114" y2="480" stroke="#52351c" stroke-width="1.5" opacity="0.5" class="day-only" />
        <line x1="68" y1="300" x2="114" y2="300" stroke="#0d1017" stroke-width="1.5" opacity="0.7" class="night-only" />
        <line x1="68" y1="390" x2="114" y2="390" stroke="#0d1017" stroke-width="1.5" opacity="0.7" class="night-only" />
        <line x1="68" y1="480" x2="114" y2="480" stroke="#0d1017" stroke-width="1.5" opacity="0.7" class="night-only" />
        <path d="M78 320 L88 345 L84 370" stroke="#3d2613" stroke-width="1.8" fill="none" opacity="0.6" class="day-only" />
        <path d="M78 320 L88 345 L84 370" stroke="#0a0d14" stroke-width="1.8" fill="none" opacity="0.8" class="night-only" />

        <!-- Right Sandstone Ashlar Pillar -->
        <rect x="276" y="210" width="46" height="370" fill="url(#sandstone-day)" stroke="#684729" stroke-width="2" class="day-only" />
        <rect x="276" y="210" width="46" height="370" fill="url(#sandstone-night)" stroke="#121622" stroke-width="2" class="night-only" />
        <rect x="270" y="198" width="58" height="16" rx="2" fill="url(#sandstone-highlight)" class="day-only" />
        <rect x="270" y="198" width="58" height="16" rx="2" fill="#2d3750" class="night-only" />
        <rect x="268" y="570" width="62" height="20" rx="2" fill="url(#sandstone-day)" class="day-only" />
        <rect x="268" y="570" width="62" height="20" rx="2" fill="#181e2a" class="night-only" />
        <line x1="276" y1="300" x2="322" y2="300" stroke="#52351c" stroke-width="1.5" opacity="0.5" class="day-only" />
        <line x1="276" y1="390" x2="322" y2="390" stroke="#52351c" stroke-width="1.5" opacity="0.5" class="day-only" />
        <line x1="276" y1="480" x2="322" y2="480" stroke="#52351c" stroke-width="1.5" opacity="0.5" class="day-only" />
        <line x1="276" y1="300" x2="322" y2="300" stroke="#0d1017" stroke-width="1.5" opacity="0.7" class="night-only" />
        <line x1="276" y1="390" x2="322" y2="390" stroke="#0d1017" stroke-width="1.5" opacity="0.7" class="night-only" />
        <line x1="276" y1="480" x2="322" y2="480" stroke="#0d1017" stroke-width="1.5" opacity="0.7" class="night-only" />

        <!-- Massive Carved Sandstone Arch Lintel -->
        <polygon points="52,204 338,204 328,140 62,140" fill="url(#sandstone-day)" stroke="#684729" stroke-width="2.5" class="day-only" />
        <polygon points="52,204 338,204 328,140 62,140" fill="url(#sandstone-night)" stroke="#121622" stroke-width="2.5" class="night-only" />
        <!-- Cornice Projection -->
        <polygon points="46,144 344,144 340,132 50,132" fill="url(#sandstone-highlight)" stroke="#52351c" stroke-width="1.5" class="day-only" />
        <polygon points="46,144 344,144 340,132 50,132" fill="#2d3750" stroke="#0d1017" stroke-width="1.5" class="night-only" />

        <!-- Carved Inscribed Tablet: KALDHARA 1978 -->
        <rect x="95" y="152" width="200" height="42" rx="4" fill="#3b2413" stroke="#856038" stroke-width="1.5" class="day-only" />
        <rect x="95" y="152" width="200" height="42" rx="4" fill="#090d14" stroke="#253245" stroke-width="1.5" class="night-only" />
        <text x="195" y="174" text-anchor="middle" font-family="'Cinzel', serif" font-size="14" font-weight="700" letter-spacing="3" fill="#e8d5b5" class="day-only">KALDHARA</text>
        <text x="195" y="188" text-anchor="middle" font-family="'Crimson Pro', serif" font-size="10" font-weight="600" letter-spacing="2" fill="#caa57c" class="day-only">1978 • कुलधरा</text>
        <text x="195" y="174" text-anchor="middle" font-family="'Cinzel', serif" font-size="14" font-weight="700" letter-spacing="3" fill="#8da4c4" class="night-only">KALDHARA</text>
        <text x="195" y="188" text-anchor="middle" font-family="'Crimson Pro', serif" font-size="10" font-weight="600" letter-spacing="2" fill="#5a6e88" class="night-only">1978 • कुलधरा</text>

        <!-- HOTSPOT 3: TORN HANGING FABRIC (#hotspot-hanging-cloth) @ x=48%, y=28% (187.2, 236.3) -->
        <g id="hotspot-hanging-cloth" class="interactive-object hanging-cloth-assembly" transform="translate(187, 204)">
          <!-- Iron Wall Hook Ring -->
          <circle cx="0" cy="0" r="3" fill="#1f140c" />
          <!-- Tattered Cloth Ribbon hanging down and fluttering -->
          <path d="M-2 0 Q-8 30 6 60 Q-4 90 2 120 L-6 125 Q-14 85 -2 55 Q-16 25 -4 0 Z" fill="#c7422b" opacity="0.9" class="day-only flutter-slow" />
          <path d="M-2 0 Q-8 30 6 60 Q-4 90 2 120 L-6 125 Q-14 85 -2 55 Q-16 25 -4 0 Z" fill="#6e1f26" opacity="0.85" class="night-only flutter-slow" />
          <line x1="0" y1="75" x2="8" y2="105" stroke="#e0654c" stroke-width="1.5" class="day-only flutter-slow" />
          <line x1="0" y1="75" x2="8" y2="105" stroke="#94313b" stroke-width="1.5" class="night-only flutter-slow" />
        </g>
      </g>

      <!-- HOTSPOT 1: BOUNDARY MILESTONE (#hotspot-stone-marker) @ x=22%, y=68% (85.8, 573.9) -->
      <g id="hotspot-stone-marker" class="interactive-object boundary-milestone-assembly" transform="translate(86, 574)">
        <!-- Ground Ellipse Shadow -->
        <ellipse cx="0" cy="46" rx="26" ry="10" fill="#000" opacity="0.4" class="day-only" />
        <ellipse cx="0" cy="46" rx="26" ry="10" fill="#000" opacity="0.75" class="night-only" />
        <!-- Rounded Sandstone Milestone Body -->
        <path d="M-22 45 L-22 -15 C-22 -35, 22 -35, 22 -15 L22 45 Z" fill="url(#sandstone-day)" stroke="#52351c" stroke-width="2" class="day-only" />
        <path d="M-22 45 L-22 -15 C-22 -35, 22 -35, 22 -15 L22 45 Z" fill="url(#sandstone-night)" stroke="#121622" stroke-width="2" class="night-only" />
        <!-- Top Half Painted Mustard Yellow (Traditional Indian Highway Style) -->
        <path d="M-20 -5 C-20 -32, 20 -32, 20 -5 L20 12 L-20 12 Z" fill="#d99f36" opacity="0.85" class="day-only" />
        <path d="M-20 -5 C-20 -32, 20 -32, 20 -5 L20 12 L-20 12 Z" fill="#5c441a" opacity="0.75" class="night-only" />
        <!-- Chiseled Text -->
        <text x="0" y="-8" text-anchor="middle" font-family="'Cinzel', serif" font-size="7.5" font-weight="700" fill="#241407" class="day-only">KALDHARA</text>
        <text x="0" y="3" text-anchor="middle" font-family="'Crimson Pro', serif" font-size="6.5" font-weight="600" fill="#241407" class="day-only">1978</text>
        <text x="0" y="24" text-anchor="middle" font-family="'Crimson Pro', serif" font-size="8.5" font-weight="700" fill="#422915" class="day-only">0 KM</text>
        <text x="0" y="-8" text-anchor="middle" font-family="'Cinzel', serif" font-size="7.5" font-weight="700" fill="#c2d5ee" class="night-only">KALDHARA</text>
        <text x="0" y="3" text-anchor="middle" font-family="'Crimson Pro', serif" font-size="6.5" font-weight="600" fill="#8ca5c4" class="night-only">1978</text>
        <text x="0" y="24" text-anchor="middle" font-family="'Crimson Pro', serif" font-size="8.5" font-weight="700" fill="#8ca5c4" class="night-only">0 KM</text>
        <!-- NIGHT Claw Scratch Marks -->
        <g class="night-only" opacity="0.9">
          <path d="M-14 -20 L-6 -5 M-10 -22 L-2 -7 M-6 -21 L2 -6" stroke="#991b1b" stroke-width="1.8" stroke-linecap="round" />
        </g>
      </g>

      <!-- HOTSPOT 2: ABANDONED RUSTY ROADSTER BICYCLE (#hotspot-abandoned-cycle) @ x=76%, y=74% (296.4, 624.6) -->
      <g id="hotspot-abandoned-cycle" class="interactive-object rusty-bicycle-assembly" transform="translate(296, 625)">
        <!-- Ground Cast Shadow -->
        <ellipse cx="-15" cy="46" rx="48" ry="12" fill="#000" opacity="0.4" class="day-only" />
        <ellipse cx="-15" cy="46" rx="48" ry="12" fill="#000" opacity="0.75" class="night-only" />

        <!-- Rear Wheel (Left) with Rim, Hub, and Spokes -->
        <g transform="translate(-46, 18)">
          <circle cx="0" cy="0" r="28" fill="none" stroke="#523924" stroke-width="3" class="day-only" />
          <circle cx="0" cy="0" r="28" fill="none" stroke="#121620" stroke-width="3" class="night-only" />
          <circle cx="0" cy="0" r="25" fill="none" stroke="#7a5435" stroke-width="1.2" class="day-only" />
          <circle cx="0" cy="0" r="25" fill="none" stroke="#222a3a" stroke-width="1.2" class="night-only" />
          <!-- Spokes -->
          <line x1="-25" y1="0" x2="25" y2="0" stroke="#7a5435" stroke-width="0.8" opacity="0.6" class="day-only" />
          <line x1="0" y1="-25" x2="0" y2="25" stroke="#7a5435" stroke-width="0.8" opacity="0.6" class="day-only" />
          <line x1="-18" y1="-18" x2="18" y2="18" stroke="#7a5435" stroke-width="0.8" opacity="0.6" class="day-only" />
          <line x1="-18" y1="18" x2="18" y2="-18" stroke="#7a5435" stroke-width="0.8" opacity="0.6" class="day-only" />
          <circle cx="0" cy="0" r="4" fill="#3b2413" class="day-only" />
          <circle cx="0" cy="0" r="4" fill="#0b0e14" class="night-only" />
        </g>

        <!-- Front Wheel (Right) -->
        <g transform="translate(22, 18)">
          <circle cx="0" cy="0" r="28" fill="none" stroke="#523924" stroke-width="3" class="day-only" />
          <circle cx="0" cy="0" r="28" fill="none" stroke="#121620" stroke-width="3" class="night-only" />
          <circle cx="0" cy="0" r="25" fill="none" stroke="#7a5435" stroke-width="1.2" class="day-only" />
          <circle cx="0" cy="0" r="25" fill="none" stroke="#222a3a" stroke-width="1.2" class="night-only" />
          <line x1="-25" y1="0" x2="25" y2="0" stroke="#7a5435" stroke-width="0.8" opacity="0.6" class="day-only" />
          <line x1="0" y1="-25" x2="0" y2="25" stroke="#7a5435" stroke-width="0.8" opacity="0.6" class="day-only" />
          <line x1="-18" y1="-18" x2="18" y2="18" stroke="#7a5435" stroke-width="0.8" opacity="0.6" class="day-only" />
          <line x1="-18" y1="18" x2="18" y2="-18" stroke="#7a5435" stroke-width="0.8" opacity="0.6" class="day-only" />
          <circle cx="0" cy="0" r="4" fill="#3b2413" class="day-only" />
          <circle cx="0" cy="0" r="4" fill="#0b0e14" class="night-only" />
        </g>

        <!-- Classic Indian Roadster Diamond Frame & Chainstay -->
        <!-- Rear stays to bottom bracket -->
        <line x1="-46" y1="18" x2="-14" y2="18" stroke="#5a381f" stroke-width="2.5" class="day-only" />
        <line x1="-46" y1="18" x2="-22" y2="-4" stroke="#5a381f" stroke-width="2.5" class="day-only" />
        <!-- Seat tube -->
        <line x1="-14" y1="18" x2="-22" y2="-12" stroke="#6b4427" stroke-width="3" class="day-only" />
        <!-- Top tube -->
        <line x1="-22" y1="-4" x2="10" y2="-4" stroke="#6b4427" stroke-width="3" class="day-only" />
        <!-- Down tube -->
        <line x1="-14" y1="18" x2="10" y2="-4" stroke="#6b4427" stroke-width="3" class="day-only" />
        <!-- Front fork -->
        <line x1="10" y1="-4" x2="22" y2="18" stroke="#5a381f" stroke-width="2.5" class="day-only" />
        <line x1="10" y1="-4" x2="12" y2="-18" stroke="#6b4427" stroke-width="3" class="day-only" />

        <!-- NIGHT Roadster Frame Lines -->
        <line x1="-46" y1="18" x2="-14" y2="18" stroke="#161c28" stroke-width="2.5" class="night-only" />
        <line x1="-46" y1="18" x2="-22" y2="-4" stroke="#161c28" stroke-width="2.5" class="night-only" />
        <line x1="-14" y1="18" x2="-22" y2="-12" stroke="#1b2333" stroke-width="3" class="night-only" />
        <line x1="-22" y1="-4" x2="10" y2="-4" stroke="#1b2333" stroke-width="3" class="night-only" />
        <line x1="-14" y1="18" x2="10" y2="-4" stroke="#1b2333" stroke-width="3" class="night-only" />
        <line x1="10" y1="-4" x2="22" y2="18" stroke="#161c28" stroke-width="2.5" class="night-only" />
        <line x1="10" y1="-4" x2="12" y2="-18" stroke="#1b2333" stroke-width="3" class="night-only" />

        <!-- Handlebars with Swept-Back Grips & Bell -->
        <path d="M4 -18 Q12 -22 18 -16" stroke="#8a6341" stroke-width="2.5" fill="none" class="day-only" />
        <path d="M4 -18 Q12 -22 18 -16" stroke="#252f42" stroke-width="2.5" fill="none" class="night-only" />
        <circle cx="16" cy="-21" r="2.5" fill="#a47a3e" class="day-only" />
        <circle cx="16" cy="-21" r="2.5" fill="#3d4960" class="night-only" />

        <!-- Weathered Leather Saddle (Brooks Style) -->
        <path d="M-30 -14 C-26 -16, -16 -16, -14 -12 C-16 -10, -28 -10, -30 -14 Z" fill="#2e190d" class="day-only" />
        <path d="M-30 -14 C-26 -16, -16 -16, -14 -12 C-16 -10, -28 -10, -30 -14 Z" fill="#0a0d13" class="night-only" />

        <!-- Chain Ring & Pedals -->
        <circle cx="-14" cy="18" r="7" fill="none" stroke="#4a2e19" stroke-width="1.8" class="day-only" />
        <line x1="-14" y1="18" x2="-8" y2="25" stroke="#4a2e19" stroke-width="2" class="day-only" />
        <line x1="-14" y1="18" x2="-8" y2="25" stroke="#121620" stroke-width="2" class="night-only" />

        <!-- Rear Luggage Carrier Rack -->
        <line x1="-42" y1="-4" x2="-22" y2="-4" stroke="#5a381f" stroke-width="2" class="day-only" />
        <line x1="-42" y1="-4" x2="-46" y2="18" stroke="#5a381f" stroke-width="1.5" class="day-only" />
        <line x1="-42" y1="-4" x2="-22" y2="-4" stroke="#161c28" stroke-width="2" class="night-only" />
        <line x1="-42" y1="-4" x2="-46" y2="18" stroke="#161c28" stroke-width="1.5" class="night-only" />
      </g>
    </svg>
  `;
}).call(this);
  },

  // 3. SCENE 02: Old Tea Stall
  renderTeaStallScene() {
    return (function renderTeaStallScene() {
  return `
    <svg class="scene-illustration" viewBox="0 0 390 844" xmlns="http://www.w3.org/2000/svg">
      ${this.getAtmosphericSky('teastall')}

      <!-- Distant Desert Horizon & Low Sandstone Ruins -->
      <g class="distant-landscape">
        <path class="day-only" fill="#9e714e" opacity="0.65" d="M0 450 Q110 425 210 440 T390 435 L390 510 L0 510 Z" />
        <path class="night-only" fill="#0d121e" opacity="0.8" d="M0 450 Q110 425 210 440 T390 435 L390 510 L0 510 Z" />
        <!-- Low ruined haveli boundary wall in midground -->
        <polygon points="0,480 390,470 390,520 0,530" fill="url(#sandstone-day)" opacity="0.75" class="day-only" />
        <polygon points="0,480 390,470 390,520 0,530" fill="url(#sandstone-night)" opacity="0.85" class="night-only" />
      </g>

      <!-- Dusty Crossroads Ground -->
      <g id="teastall-ground">
        <rect x="0" y="500" width="390" height="344" fill="url(#ground-dirt-day)" class="day-only" />
        <rect x="0" y="500" width="390" height="344" fill="url(#ground-dirt-night)" class="night-only" />
        <!-- Flagstone patches around shack -->
        <polygon points="20,530 180,520 220,620 40,640" fill="url(#pat-cobbles)" class="day-only" opacity="0.6" />
        <polygon points="20,530 180,520 220,620 40,640" fill="url(#pat-cobbles-night)" class="night-only" opacity="0.6" />
      </g>

      <!-- THE OLD TEA SHACK STRUCTURE (Tapri) -->
      <g id="tea-shack-assembly" transform="translate(10, 240)">
        <!-- Shack Rear Wall (Dark weathered timber planks) -->
        <polygon points="30,170 280,140 280,420 30,440" fill="#3b2615" class="day-only" />
        <polygon points="30,170 280,140 280,420 30,440" fill="#0d1017" class="night-only" />
        <polygon points="35,175 275,145 275,415 35,435" fill="url(#pat-wood)" class="day-only" opacity="0.8" />
        <polygon points="35,175 275,145 275,415 35,435" fill="url(#pat-wood-night)" class="night-only" opacity="0.8" />

        <!-- Supporting Wooden Posts -->
        <rect x="25" y="150" width="14" height="300" fill="#4d321d" stroke="#2a180c" stroke-width="1.8" class="day-only" />
        <rect x="25" y="150" width="14" height="300" fill="#141722" stroke="#0a0c12" stroke-width="1.8" class="night-only" />
        <rect x="270" y="125" width="14" height="325" fill="#4d321d" stroke="#2a180c" stroke-width="1.8" class="day-only" />
        <rect x="270" y="125" width="14" height="325" fill="#141722" stroke="#0a0c12" stroke-width="1.8" class="night-only" />

        <!-- Weathered Corrugated Rusted Tin Roof -->
        <polygon points="10,165 305,120 325,175 0,225" fill="#755a43" class="day-only" />
        <polygon points="10,165 305,120 325,175 0,225" fill="#191c28" class="night-only" />
        <!-- Corrugated Ridges -->
        <line x1="45" y1="160" x2="35" y2="220" stroke="#4a3423" stroke-width="2.5" class="day-only" />
        <line x1="95" y1="152" x2="85" y2="212" stroke="#4a3423" stroke-width="2.5" class="day-only" />
        <line x1="145" y1="145" x2="135" y2="205" stroke="#4a3423" stroke-width="2.5" class="day-only" />
        <line x1="195" y1="137" x2="185" y2="197" stroke="#4a3423" stroke-width="2.5" class="day-only" />
        <line x1="245" y1="130" x2="235" y2="190" stroke="#4a3423" stroke-width="2.5" class="day-only" />
        <line x1="45" y1="160" x2="35" y2="220" stroke="#0e1017" stroke-width="2.5" class="night-only" />
        <line x1="95" y1="152" x2="85" y2="212" stroke="#0e1017" stroke-width="2.5" class="night-only" />
        <line x1="145" y1="145" x2="135" y2="205" stroke="#0e1017" stroke-width="2.5" class="night-only" />
        <line x1="195" y1="137" x2="185" y2="197" stroke="#0e1017" stroke-width="2.5" class="night-only" />
        <line x1="245" y1="130" x2="235" y2="190" stroke="#0e1017" stroke-width="2.5" class="night-only" />
        <!-- Rust Oxidation Patches on Tin -->
        <path d="M50 170 Q75 160 100 175 Q85 195 55 190 Z" fill="#9e472a" opacity="0.6" class="day-only" />
        <path d="M170 145 Q210 140 230 155 Q210 170 175 165 Z" fill="#9e472a" opacity="0.5" class="day-only" />
        <!-- Roof Shadow Cast onto Shack -->
        <polygon points="10,215 315,168 315,200 10,245" fill="#1f140a" opacity="0.45" class="day-only" />
        <polygon points="10,215 315,168 315,200 10,245" fill="#05070a" opacity="0.7" class="night-only" />

        <!-- HOTSPOT 3: WOODEN COUNTER (#hotspot-tea-counter) @ x=24%, y=54% (93.6, 455.8) -->
        <g id="hotspot-tea-counter" class="interactive-object tea-counter-assembly" transform="translate(85, 215)">
          <!-- Counter Top Slab -->
          <polygon points="-55,0 185,-22 180,18 -60,40" fill="#5c3c22" stroke="#36200f" stroke-width="2" class="day-only" />
          <polygon points="-55,0 185,-22 180,18 -60,40" fill="#191c28" stroke="#0c0e14" stroke-width="2" class="night-only" />
          <!-- Planks Beneath Counter -->
          <polygon points="-60,40 180,18 178,160 -62,175" fill="url(#pat-wood)" stroke="#2b1a0d" stroke-width="1.8" class="day-only" />
          <polygon points="-60,40 180,18 178,160 -62,175" fill="url(#pat-wood-night)" stroke="#0a0c12" stroke-width="1.8" class="night-only" />

          <!-- Hanging Wooden Painted Signboard: "KALDHARA CHAI" -->
          <g transform="translate(60, -45)">
            <rect x="-65" y="0" width="130" height="34" rx="3" fill="#e8d5b5" stroke="#684729" stroke-width="1.5" class="day-only" />
            <rect x="-65" y="0" width="130" height="34" rx="3" fill="#1e2434" stroke="#2d374d" stroke-width="1.5" class="night-only" />
            <text x="0" y="16" text-anchor="middle" font-family="'Cinzel', serif" font-size="9" font-weight="700" letter-spacing="1.5" fill="#3b2413" class="day-only">CHAI STALL</text>
            <text x="0" y="28" text-anchor="middle" font-family="'Crimson Pro', serif" font-size="8" font-weight="600" fill="#684729" class="day-only">कल्डहारा चाय</text>
            <text x="0" y="16" text-anchor="middle" font-family="'Cinzel', serif" font-size="9" font-weight="700" letter-spacing="1.5" fill="#8da4c4" class="night-only">CHAI STALL</text>
            <text x="0" y="28" text-anchor="middle" font-family="'Crimson Pro', serif" font-size="8" font-weight="600" fill="#5a6e88" class="night-only">कल्डहारा चाय</text>
            <!-- Hanging wires -->
            <line x1="-50" y1="0" x2="-50" y2="-20" stroke="#3b2413" stroke-width="1.2" class="day-only" />
            <line x1="50" y1="0" x2="50" y2="-25" stroke="#3b2413" stroke-width="1.2" class="day-only" />
            <line x1="-50" y1="0" x2="-50" y2="-20" stroke="#0a0c12" stroke-width="1.2" class="night-only" />
            <line x1="50" y1="0" x2="50" y2="-25" stroke="#0a0c12" stroke-width="1.2" class="night-only" />
          </g>

          <!-- Galvanized Wire Caddy with Ribbed Chai Glasses -->
          <g transform="translate(100, -8)">
            <!-- Wire Carrier -->
            <rect x="-18" y="0" width="36" height="18" fill="none" stroke="#687588" stroke-width="1.4" rx="2" class="day-only" />
            <rect x="-18" y="0" width="36" height="18" fill="none" stroke="#2a3342" stroke-width="1.4" rx="2" class="night-only" />
            <!-- Chai Glass 1 -->
            <polygon points="-14,-14 -6,-14 -7,2 -13,2" fill="#d4e8fc" opacity="0.65" stroke="#7aa5d2" stroke-width="0.8" class="day-only" />
            <polygon points="-14,-14 -6,-14 -7,2 -13,2" fill="#1c2838" opacity="0.75" stroke="#3d5675" stroke-width="0.8" class="night-only" />
            <!-- Chai Glass 2 (Half full with cold dark tea) -->
            <polygon points="4,-14 12,-14 11,2 5,2" fill="#d4e8fc" opacity="0.65" stroke="#7aa5d2" stroke-width="0.8" class="day-only" />
            <polygon points="4,-14 12,-14 11,2 5,2" fill="#1c2838" opacity="0.75" stroke="#3d5675" stroke-width="0.8" class="night-only" />
            <polygon points="5,-5 11,-5 10.5,1.5 5.5,1.5" fill="#8f451b" opacity="0.8" class="day-only" />
            <polygon points="5,-5 11,-5 10.5,1.5 5.5,1.5" fill="#3d1808" opacity="0.8" class="night-only" />
          </g>
        </g>

        <!-- HOTSPOT 2: COLD BRASS TEA KETTLE (#hotspot-tea-kettle) @ x=42%, y=65% (163.8, 548.6) -->
        <g id="hotspot-tea-kettle" class="interactive-object tea-kettle-assembly" transform="translate(155, 308)">
          <!-- Blackened Mud Stove (Chulha) base -->
          <ellipse cx="0" cy="18" rx="28" ry="10" fill="#241710" class="day-only" />
          <ellipse cx="0" cy="18" rx="28" ry="10" fill="#080a0f" class="night-only" />
          <path d="M-22 18 C-22 6, 22 6, 22 18 L18 24 L-18 24 Z" fill="#180e0a" class="day-only" />
          <path d="M-22 18 C-22 6, 22 6, 22 18 L18 24 L-18 24 Z" fill="#05060a" class="night-only" />

          <!-- Beaten Brass Chai Kettle (Kitli) -->
          <!-- Cast Kettle Shadow -->
          <ellipse cx="2" cy="12" rx="20" ry="7" fill="#000" opacity="0.45" class="day-only" />
          <ellipse cx="2" cy="12" rx="20" ry="7" fill="#000" opacity="0.75" class="night-only" />
          <!-- Bulbous Brass Body with Hammered Surface Gradient -->
          <ellipse cx="0" cy="0" rx="20" ry="14" fill="#c99738" stroke="#7a5518" stroke-width="1.8" class="day-only" />
          <ellipse cx="0" cy="0" rx="20" ry="14" fill="#3d3018" stroke="#1c160b" stroke-width="1.8" class="night-only" />
          <!-- Brass Specular Highlight -->
          <ellipse cx="-4" cy="-4" rx="14" ry="7" fill="#fedca8" opacity="0.55" class="day-only" />
          <ellipse cx="-4" cy="-4" rx="14" ry="7" fill="#6d7f99" opacity="0.35" class="night-only" />
          <!-- Blackened Sooty Base -->
          <path d="M-18 5 C-10 12, 10 12, 18 5 L16 12 L-16 12 Z" fill="#1f140c" opacity="0.75" class="day-only" />
          <path d="M-18 5 C-10 12, 10 12, 18 5 L16 12 L-16 12 Z" fill="#090b10" opacity="0.85" class="night-only" />
          <!-- Curved Kettle Spout -->
          <path d="M-18 -2 C-26 -6, -28 -18, -24 -24 L-20 -23 C-22 -18, -20 -8, -14 2 Z" fill="#bfa042" stroke="#7a5518" stroke-width="1.2" class="day-only" />
          <path d="M-18 -2 C-26 -6, -28 -18, -24 -24 L-20 -23 C-22 -18, -20 -8, -14 2 Z" fill="#362b16" stroke="#1c160b" stroke-width="1.2" class="night-only" />
          <!-- Kettle Lid & Finial Knob -->
          <ellipse cx="0" cy="-13" rx="11" ry="4" fill="#d9ad48" stroke="#7a5518" stroke-width="1.2" class="day-only" />
          <circle cx="0" cy="-16" r="3" fill="#fadc7a" stroke="#7a5518" stroke-width="1" class="day-only" />
          <ellipse cx="0" cy="-13" rx="11" ry="4" fill="#44361b" stroke="#1c160b" stroke-width="1.2" class="night-only" />
          <circle cx="0" cy="-16" r="3" fill="#68562d" stroke="#1c160b" stroke-width="1" class="night-only" />
          <!-- Arched Wire Bail Handle -->
          <path d="M-18 -6 C-22 -30, 22 -30, 18 -6" fill="none" stroke="#4a341e" stroke-width="2.5" class="day-only" />
          <path d="M-18 -6 C-22 -30, 22 -30, 18 -6" fill="none" stroke="#121622" stroke-width="2.5" class="night-only" />
          <!-- Wooden Grip on Handle -->
          <rect x="-8" y="-28" width="16" height="5" rx="2" fill="#2d1c11" class="day-only" />
          <rect x="-8" y="-28" width="16" height="5" rx="2" fill="#0c0e14" class="night-only" />
        </g>
      </g>

      <!-- HOTSPOT 1: EMPTY RICKETY WOODEN CHAIR (#hotspot-tea-chair) @ x=64%, y=62% (249.6, 523.3) -->
      <g id="hotspot-tea-chair" class="interactive-object tea-chair-assembly" transform="translate(250, 523)">
        <!-- Ground Cast Shadow -->
        <ellipse cx="0" cy="58" rx="28" ry="10" fill="#000" opacity="0.35" class="day-only" />
        <ellipse cx="0" cy="58" rx="28" ry="10" fill="#000" opacity="0.75" class="night-only" />

        <!-- 4 Weathered Wooden Legs with Cross Stretchers -->
        <!-- Back Left Leg -->
        <line x1="-16" y1="8" x2="-20" y2="52" stroke="#4a321e" stroke-width="3" class="day-only" />
        <!-- Back Right Leg -->
        <line x1="16" y1="6" x2="14" y2="50" stroke="#4a321e" stroke-width="3" class="day-only" />
        <!-- Front Left Leg -->
        <line x1="-22" y1="18" x2="-26" y2="58" stroke="#5c3f27" stroke-width="3.5" class="day-only" />
        <!-- Front Right Leg -->
        <line x1="22" y1="16" x2="20" y2="56" stroke="#5c3f27" stroke-width="3.5" class="day-only" />

        <!-- NIGHT Legs -->
        <line x1="-16" y1="8" x2="-20" y2="52" stroke="#141722" stroke-width="3" class="night-only" />
        <line x1="16" y1="6" x2="14" y2="50" stroke="#141722" stroke-width="3" class="night-only" />
        <line x1="-22" y1="18" x2="-26" y2="58" stroke="#181c28" stroke-width="3.5" class="night-only" />
        <line x1="22" y1="16" x2="20" y2="56" stroke="#181c28" stroke-width="3.5" class="night-only" />

        <!-- Lower Cross Stretcher Rails -->
        <line x1="-24" y1="42" x2="18" y2="40" stroke="#3b2413" stroke-width="2" class="day-only" />
        <line x1="-24" y1="42" x2="18" y2="40" stroke="#0e1017" stroke-width="2" class="night-only" />

        <!-- Chair Seat (Slanted perspective, faded peeling teal paint) -->
        <polygon points="-24,18 24,14 18,-4 -18,-2" fill="#4d787a" stroke="#2e4d4e" stroke-width="1.8" class="day-only" />
        <polygon points="-24,18 24,14 18,-4 -18,-2" fill="#1b2a2e" stroke="#0e171a" stroke-width="1.8" class="night-only" />
        <!-- Chipped Paint exposing bare grey wood -->
        <polygon points="-12,6 8,4 4,-1 -8,0" fill="#7a6248" opacity="0.65" class="day-only" />
        <polygon points="-12,6 8,4 4,-1 -8,0" fill="#25211c" opacity="0.75" class="night-only" />

        <!-- Chair Backrest Uprights & Slats -->
        <line x1="-16" y1="-2" x2="-14" y2="-45" stroke="#5c3f27" stroke-width="3" class="day-only" />
        <line x1="16" y1="-4" x2="14" y2="-48" stroke="#5c3f27" stroke-width="3" class="day-only" />
        <line x1="-16" y1="-2" x2="-14" y2="-45" stroke="#181c28" stroke-width="3" class="night-only" />
        <line x1="16" y1="-4" x2="14" y2="-48" stroke="#181c28" stroke-width="3" class="night-only" />
        <!-- Top Crest Rail -->
        <rect x="-18" y="-50" width="34" height="7" rx="1.5" fill="#4d787a" stroke="#2e4d4e" stroke-width="1.2" class="day-only" />
        <rect x="-18" y="-50" width="34" height="7" rx="1.5" fill="#1b2a2e" stroke="#0e171a" stroke-width="1.2" class="night-only" />
        <!-- Horizontal Mid-Slat -->
        <line x1="-15" y1="-26" x2="15" y2="-28" stroke="#3b2413" stroke-width="2.5" class="day-only" />
        <line x1="-15" y1="-26" x2="15" y2="-28" stroke="#0e1017" stroke-width="2.5" class="night-only" />
      </g>
    </svg>
  `;
}).call(this);
  },

  // 4. SCENE 03: Village Well
  renderWellScene() {
    return (function renderWellScene() {
  return `
    <svg class="scene-illustration" viewBox="0 0 390 844" xmlns="http://www.w3.org/2000/svg">
      ${this.getAtmosphericSky('well')}

      <!-- Distant Ruined Havelis & Courtyard Wall Backdrop -->
      <g class="distant-landscape">
        <path class="day-only" fill="#9e714e" opacity="0.65" d="M0 430 Q100 405 200 420 T390 415 L390 490 L0 490 Z" />
        <path class="night-only" fill="#0c121e" opacity="0.8" d="M0 430 Q100 405 200 420 T390 415 L390 490 L0 490 Z" />
        <!-- Ancient stone boundary wall behind well -->
        <polygon points="0,460 390,450 390,520 0,530" fill="url(#sandstone-day)" opacity="0.85" class="day-only" />
        <polygon points="0,460 390,450 390,520 0,530" fill="url(#sandstone-night)" opacity="0.9" class="night-only" />
        <!-- Broken wall battlements (Kanguras) -->
        <polygon points="40,460 60,442 80,460" fill="url(#sandstone-highlight)" class="day-only" />
        <polygon points="120,458 140,440 160,458" fill="url(#sandstone-highlight)" class="day-only" />
        <polygon points="280,454 300,436 320,454" fill="url(#sandstone-highlight)" class="day-only" />
        <polygon points="40,460 60,442 80,460" fill="#2d3750" class="night-only" />
        <polygon points="120,458 140,440 160,458" fill="#2d3750" class="night-only" />
        <polygon points="280,454 300,436 320,454" fill="#2d3750" class="night-only" />
      </g>

      <!-- Courtyard Flagstone Ground Platform -->
      <g id="well-courtyard-ground">
        <rect x="0" y="500" width="390" height="344" fill="url(#ground-dirt-day)" class="day-only" />
        <rect x="0" y="500" width="390" height="344" fill="url(#ground-dirt-night)" class="night-only" />

        <!-- Circular Stone Paving Apron around Well -->
        <ellipse cx="195" cy="620" rx="170" ry="85" fill="url(#pat-cobbles)" class="day-only" opacity="0.75" />
        <ellipse cx="195" cy="620" rx="170" ry="85" fill="url(#pat-cobbles-night)" class="night-only" opacity="0.75" />
        <!-- Wet Stone Spill Stains around Curb -->
        <ellipse cx="195" cy="610" rx="110" ry="45" fill="#4d3522" opacity="0.35" class="day-only" />
        <ellipse cx="195" cy="610" rx="110" ry="45" fill="#060910" opacity="0.65" class="night-only" />
      </g>

      <!-- THE ANCIENT STONE WELL STRUCTURE -->
      <g id="ancient-well-complex" transform="translate(195, 490)">
        <!-- Massive Cast Ground Shadow -->
        <ellipse cx="0" cy="95" rx="125" ry="38" fill="#000" opacity="0.4" class="day-only" />
        <ellipse cx="0" cy="95" rx="125" ry="38" fill="#000" opacity="0.8" class="night-only" />

        <!-- Timber Pulley Superstructure (Charkhi Frame) -->
        <g id="well-pulley-rig" transform="translate(0, -170)">
          <!-- Left Stone Pier Pillar -->
          <rect x="-85" y="40" width="16" height="150" fill="url(#sandstone-day)" stroke="#5c3f27" stroke-width="1.8" class="day-only" />
          <rect x="-85" y="40" width="16" height="150" fill="url(#sandstone-night)" stroke="#121622" stroke-width="1.8" class="night-only" />
          <!-- Right Stone Pier Pillar -->
          <rect x="69" y="40" width="16" height="150" fill="url(#sandstone-day)" stroke="#5c3f27" stroke-width="1.8" class="day-only" />
          <rect x="69" y="40" width="16" height="150" fill="url(#sandstone-night)" stroke="#121622" stroke-width="1.8" class="night-only" />

          <!-- Heavy Horizontal Wooden Crossbeam -->
          <rect x="-95" y="32" width="190" height="18" rx="2" fill="#4d321d" stroke="#2a180c" stroke-width="2" class="day-only" />
          <rect x="-95" y="32" width="190" height="18" rx="2" fill="#141722" stroke="#0a0c12" stroke-width="2" class="night-only" />
          <rect x="-92" y="34" width="184" height="14" fill="url(#pat-wood)" class="day-only" opacity="0.85" />
          <rect x="-92" y="34" width="184" height="14" fill="url(#pat-wood-night)" class="night-only" opacity="0.85" />

          <!-- Central Iron Pulley Sheave (Charkhi) -->
          <g transform="translate(0, 48)">
            <!-- Iron Hanger Stems -->
            <line x1="-12" y1="-8" x2="-12" y2="12" stroke="#241710" stroke-width="3" class="day-only" />
            <line x1="12" y1="-8" x2="12" y2="12" stroke="#241710" stroke-width="3" class="day-only" />
            <line x1="-12" y1="-8" x2="-12" y2="12" stroke="#080a10" stroke-width="3" class="night-only" />
            <line x1="12" y1="-8" x2="12" y2="12" stroke="#080a10" stroke-width="3" class="night-only" />
            <!-- Pulley Wheel -->
            <circle cx="0" cy="12" r="14" fill="#3b2615" stroke="#1f1208" stroke-width="2.5" class="day-only" />
            <circle cx="0" cy="12" r="14" fill="#121520" stroke="#06080e" stroke-width="2.5" class="night-only" />
            <circle cx="0" cy="12" r="4" fill="#684729" class="day-only" />
            <circle cx="0" cy="12" r="4" fill="#242c3d" class="night-only" />
          </g>
        </g>

        <!-- HOTSPOT 3: FRAYED HEMP ROPE (#hotspot-well-rope) @ x=44%, y=38% (171.6, 320.7) -->
        <g id="hotspot-well-rope" class="interactive-object well-rope-assembly" transform="translate(-23, -110)">
          <!-- Coarse Hemp Rope hanging from Pulley down into Abyss -->
          <path d="M23 0 Q20 80 18 160 Q17 210 16 270" stroke="#8a6845" stroke-width="5" fill="none" stroke-linecap="round" class="day-only" />
          <path d="M23 0 Q20 80 18 160 Q17 210 16 270" stroke="#2a3242" stroke-width="5" fill="none" stroke-linecap="round" class="night-only" />
          <!-- Rope fiber twist details -->
          <path d="M22 10 Q24 75 19 150" stroke="#bda07b" stroke-width="1.8" fill="none" opacity="0.6" stroke-dasharray="4 3" class="day-only" />
          <path d="M22 10 Q24 75 19 150" stroke="#485a75" stroke-width="1.8" fill="none" opacity="0.6" stroke-dasharray="4 3" class="night-only" />
          <!-- Frayed loose hemp fibers hanging at bottom -->
          <path d="M16 250 L10 268 M17 255 L22 272 M15 258 L14 275" stroke="#8a6845" stroke-width="1.5" class="day-only" />
          <path d="M16 250 L10 268 M17 255 L22 272 M15 258 L14 275" stroke="#2a3242" stroke-width="1.5" class="night-only" />
        </g>

        <!-- HOTSPOT 1: MASSIVE CIRCULAR WELL CURB (#hotspot-well-rim, #hotspot-well-stone) @ x=50%, y=58% (195, 489.5) -->
        <g id="hotspot-well-rim" class="interactive-object well-rim-assembly">
          <g id="hotspot-well-stone">
            <!-- Outer Stone Well Cylinder Wall -->
            <path d="M-92 0 C-92 48, 92 48, 92 0 L92 78 C92 126, -92 126, -92 78 Z" fill="url(#sandstone-day)" stroke="#52351c" stroke-width="2.5" class="day-only" />
            <path d="M-92 0 C-92 48, 92 48, 92 0 L92 78 C92 126, -92 126, -92 78 Z" fill="url(#sandstone-night)" stroke="#121622" stroke-width="2.5" class="night-only" />
            <!-- Vertical Stone Joint Chisel Lines -->
            <line x1="-50" y1="22" x2="-50" y2="100" stroke="#3b2413" stroke-width="1.5" opacity="0.4" class="day-only" />
            <line x1="0" y1="26" x2="0" y2="105" stroke="#3b2413" stroke-width="1.5" opacity="0.4" class="day-only" />
            <line x1="50" y1="22" x2="50" y2="100" stroke="#3b2413" stroke-width="1.5" opacity="0.4" class="day-only" />
            <line x1="-50" y1="22" x2="-50" y2="100" stroke="#0a0d14" stroke-width="1.5" opacity="0.6" class="night-only" />
            <line x1="0" y1="26" x2="0" y2="105" stroke="#0a0d14" stroke-width="1.5" opacity="0.6" class="night-only" />
            <line x1="50" y1="22" x2="50" y2="100" stroke="#0a0d14" stroke-width="1.5" opacity="0.6" class="night-only" />

            <!-- Stone Lip Rim (Top Ellipse) -->
            <ellipse cx="0" cy="0" rx="92" ry="38" fill="url(#sandstone-highlight)" stroke="#52351c" stroke-width="2.5" class="day-only" />
            <ellipse cx="0" cy="0" rx="92" ry="38" fill="#2d3750" stroke="#121622" stroke-width="2.5" class="night-only" />

            <!-- Rope-Worn Grooves in Stone Rim Lip -->
            <g class="day-only" stroke="#3b2413" stroke-width="1.8" fill="none">
              <path d="M-15 36 Q-12 39 -8 37" />
              <path d="M12 37 Q16 40 20 38" />
              <path d="M-28 32 Q-24 36 -20 34" />
            </g>
            <g class="night-only" stroke="#0a0d14" stroke-width="1.8" fill="none">
              <path d="M-15 36 Q-12 39 -8 37" />
              <path d="M12 37 Q16 40 20 38" />
              <path d="M-28 32 Q-24 36 -20 34" />
            </g>

            <!-- Bottomless Pitch Black Interior Mouth -->
            <ellipse cx="0" cy="0" rx="74" ry="28" fill="#040608" stroke="#120c06" stroke-width="2" />

            <!-- Deep Water Subtle Reflection / Face Silhouette (.well-subtle-reflection) -->
            <g class="well-subtle-reflection" opacity="0">
              <!-- Water Ripple Rings -->
              <ellipse cx="0" cy="4" rx="42" ry="14" fill="none" stroke="#25425c" stroke-width="1.2" opacity="0.75" />
              <ellipse cx="0" cy="4" rx="25" ry="8" fill="none" stroke="#3d668f" stroke-width="0.9" opacity="0.6" />
              <!-- Haunting Upward Pale Face Silhouette in Dark Water -->
              <g transform="translate(0, 4) scale(0.65)" filter="url(#ghost-haze)">
                <ellipse cx="0" cy="0" rx="14" ry="18" fill="#6ba4d6" opacity="0.75" />
                <ellipse cx="-5" cy="-2" rx="3" ry="4" fill="#040608" />
                <ellipse cx="5" cy="-2" rx="3" ry="4" fill="#040608" />
                <ellipse cx="0" cy="8" rx="4" ry="6" fill="#040608" />
              </g>
            </g>

            <!-- Horror Consequence: Dark Blood Mark creeping down stone (#well-blood-mark) -->
            <path id="well-blood-mark" d="M-8 37 Q-6 60 -10 90 Q-7 115 -8 135 L-4 135 Q-2 110 -4 65 Q-2 40 -4 37 Z" 
                  fill="#780d12" opacity="0" filter="url(#glow-blur)" />

            <!-- Horror Consequence: Lingering Eerie Mist (#well-lingering-mist) -->
            <g id="well-lingering-mist" opacity="0">
              <ellipse cx="0" cy="-6" rx="68" ry="24" fill="url(#fog-sweep-grad)" opacity="0.8" filter="url(#glow-blur)" />
              <ellipse cx="0" cy="-24" rx="55" ry="20" fill="url(#fog-sweep-grad)" opacity="0.6" filter="url(#glow-blur)" />
            </g>
          </g>
        </g>

        <!-- DENTED TARNISHED BRASS WATER BUCKET (#hotspot-well-bucket) Resting on Apron -->
        <g id="hotspot-well-bucket" class="interactive-object well-bucket-assembly" transform="translate(68, 68)">
          <!-- Ground Shadow -->
          <ellipse cx="0" cy="18" rx="18" ry="7" fill="#000" opacity="0.45" class="day-only" />
          <ellipse cx="0" cy="18" rx="18" ry="7" fill="#000" opacity="0.8" class="night-only" />
          <!-- Tilted Brass Bucket Body with Dent in Rim -->
          <polygon points="-14,14 14,14 18,-14 -18,-14" fill="#a87f34" stroke="#684c17" stroke-width="1.4" class="day-only" />
          <polygon points="-14,14 14,14 18,-14 -18,-14" fill="#362914" stroke="#120e06" stroke-width="1.4" class="night-only" />
          <!-- Metallic Specular Highlight -->
          <line x1="-8" y1="-12" x2="-6" y2="12" stroke="#e8c77d" stroke-width="2" opacity="0.6" class="day-only" />
          <line x1="-8" y1="-12" x2="-6" y2="12" stroke="#6b7c99" stroke-width="2" opacity="0.4" class="night-only" />
          <!-- Bucket Rim Ellipse -->
          <ellipse cx="0" cy="-14" rx="18" ry="6" fill="#8f6b28" stroke="#684c17" stroke-width="1.2" class="day-only" />
          <ellipse cx="0" cy="-14" rx="18" ry="6" fill="#241b0b" stroke="#120e06" stroke-width="1.2" class="night-only" />
          <!-- Wire Handle laying on ground -->
          <path d="M-18 -14 C-26 5, -8 18, 0 18" fill="none" stroke="#3b2413" stroke-width="1.5" class="day-only" />
          <path d="M-18 -14 C-26 5, -8 18, 0 18" fill="none" stroke="#0e1017" stroke-width="1.5" class="night-only" />
        </g>
      </g>

      <!-- HOTSPOT 2: CARVED STONE WARNING TABLET (#hotspot-well-warning) @ x=32%, y=72% (124.8, 607.7) -->
      <g id="hotspot-well-warning" class="interactive-object well-warning-assembly" transform="translate(125, 608)">
        <!-- Cast Shadow -->
        <ellipse cx="0" cy="38" rx="26" ry="9" fill="#000" opacity="0.4" class="day-only" />
        <ellipse cx="0" cy="38" rx="26" ry="9" fill="#000" opacity="0.75" class="night-only" />
        <!-- Weathered Slanted Slab leaning against curb -->
        <polygon points="-22,35 22,32 18,-25 -26,-22" fill="url(#sandstone-day)" stroke="#52351c" stroke-width="1.8" class="day-only" />
        <polygon points="-22,35 22,32 18,-25 -26,-22" fill="url(#sandstone-night)" stroke="#121622" stroke-width="1.8" class="night-only" />
        <!-- Warning Inscription -->
        <text x="-2" y="-4" text-anchor="middle" font-family="'Cinzel', serif" font-size="6.5" font-weight="700" letter-spacing="1" fill="#7a1818" class="day-only">DO NOT DRINK</text>
        <text x="-2" y="8" text-anchor="middle" font-family="'Crimson Pro', serif" font-size="7.5" font-weight="600" fill="#3b2413" class="day-only">पानी मत पियो</text>
        <text x="-2" y="20" text-anchor="middle" font-family="'Crimson Pro', serif" font-size="6.5" font-weight="600" fill="#684729" class="day-only">1978</text>
        <text x="-2" y="-4" text-anchor="middle" font-family="'Cinzel', serif" font-size="6.5" font-weight="700" letter-spacing="1" fill="#c43b3b" class="night-only">DO NOT DRINK</text>
        <text x="-2" y="8" text-anchor="middle" font-family="'Crimson Pro', serif" font-size="7.5" font-weight="600" fill="#7d95b5" class="night-only">पानी मत पियो</text>
        <text x="-2" y="20" text-anchor="middle" font-family="'Crimson Pro', serif" font-size="6.5" font-weight="600" fill="#5a6e88" class="night-only">1978</text>
        <!-- Weathering Chipped Edge -->
        <path d="M18 -25 L12 -18 L16 -12" stroke="#3b2413" stroke-width="1.2" fill="none" class="day-only" />
        <path d="M18 -25 L12 -18 L16 -12" stroke="#0a0d14" stroke-width="1.2" fill="none" class="night-only" />
      </g>
    </svg>
  `;
}).call(this);
  },

  // 5. SCENE 04: Temple Road
  renderTempleScene() {
    return (function renderTempleScene() {
  return `
    <svg class="scene-illustration" viewBox="0 0 390 844" xmlns="http://www.w3.org/2000/svg">
      ${this.getAtmosphericSky('temple')}

      <!-- Distant Rolling Desert Ridge Backdrop -->
      <g class="distant-landscape">
        <path class="day-only" fill="#9e714e" opacity="0.65" d="M0 450 Q100 425 200 440 T390 435 L390 510 L0 510 Z" />
        <path class="night-only" fill="#0c121e" opacity="0.8" d="M0 450 Q100 425 200 440 T390 435 L390 510 L0 510 Z" />
      </g>

      <!-- Sacred Bel / Peepal Tree Overhanging Temple Shikhara (#hotspot-temple-tree) -->
      <g id="hotspot-temple-tree" class="interactive-object temple-tree-canopy">
        <!-- Gnarled Trunk on Right behind shrine -->
        <path d="M370 480 Q340 320 310 240 Q280 180 230 150" stroke="#382417" stroke-width="22" fill="none" stroke-linecap="round" class="day-only" />
        <path d="M370 480 Q340 320 310 240 Q280 180 230 150" stroke="#0e1118" stroke-width="22" fill="none" stroke-linecap="round" class="night-only" />
        <path d="M310 240 Q240 210 160 200" stroke="#2b1a0f" stroke-width="12" fill="none" stroke-linecap="round" class="day-only" />
        <path d="M310 240 Q240 210 160 200" stroke="#080a0f" stroke-width="12" fill="none" stroke-linecap="round" class="night-only" />
        
        <!-- Sacred Red Threads Tied Around Branches -->
        <path d="M260 170 Q265 178 270 172" stroke="#d92b2b" stroke-width="3" fill="none" class="day-only" />
        <path d="M260 170 Q265 178 270 172" stroke="#751616" stroke-width="3" fill="none" class="night-only" />
        <line x1="270" y1="172" x2="276" y2="195" stroke="#d92b2b" stroke-width="2" class="day-only flutter-slow" />
        <line x1="270" y1="172" x2="276" y2="195" stroke="#751616" stroke-width="2" class="night-only flutter-slow" />

        <!-- Foliage Canopy -->
        <g class="day-only">
          <ellipse cx="280" cy="140" rx="85" ry="60" fill="#243820" />
          <ellipse cx="190" cy="120" rx="90" ry="55" fill="#2d4627" />
          <ellipse cx="320" cy="180" rx="65" ry="50" fill="#385731" />
          <!-- Sunlit highlights -->
          <ellipse cx="210" cy="100" rx="60" ry="38" fill="#4a7342" opacity="0.85" />
        </g>
        <g class="night-only">
          <ellipse cx="280" cy="140" rx="85" ry="60" fill="#0b130e" />
          <ellipse cx="190" cy="120" rx="90" ry="55" fill="#0e1711" />
          <ellipse cx="320" cy="180" rx="65" ry="50" fill="#121d15" />
        </g>
      </g>

      <!-- THE ANCIENT STONE SHIVA TEMPLE (MANDIR) -->
      <g id="shiva-temple-complex" transform="translate(195, 120)">
        <!-- Distant Temple Shikhara Superstructure (Tower) -->
        <g id="temple-shikhara" transform="translate(0, 40)">
          <!-- Tier 1 Base -->
          <polygon points="-58,180 58,180 52,130 -52,130" fill="url(#sandstone-day)" stroke="#52351c" stroke-width="2" class="day-only" />
          <polygon points="-58,180 58,180 52,130 -52,130" fill="url(#sandstone-night)" stroke="#121622" stroke-width="2" class="night-only" />
          <!-- Tier 2 -->
          <polygon points="-50,130 50,130 42,80 -42,80" fill="url(#sandstone-day)" stroke="#52351c" stroke-width="2" class="day-only" />
          <polygon points="-50,130 50,130 42,80 -42,80" fill="url(#sandstone-night)" stroke="#121622" stroke-width="2" class="night-only" />
          <!-- Tier 3 -->
          <polygon points="-40,80 40,80 30,30 -30,30" fill="url(#sandstone-day)" stroke="#52351c" stroke-width="2" class="day-only" />
          <polygon points="-40,80 40,80 30,30 -30,30" fill="url(#sandstone-night)" stroke="#121622" stroke-width="2" class="night-only" />
          <!-- Tier 4 Spire Tip -->
          <polygon points="-28,30 28,30 0,-30" fill="url(#sandstone-day)" stroke="#52351c" stroke-width="2" class="day-only" />
          <polygon points="-28,30 28,30 0,-30" fill="url(#sandstone-night)" stroke="#121622" stroke-width="2" class="night-only" />
          
          <!-- Carved Ridge Niches (Rathas) -->
          <line x1="-18" y1="180" x2="-8" y2="-10" stroke="#3b2413" stroke-width="1.8" class="day-only" />
          <line x1="18" y1="180" x2="8" y2="-10" stroke="#3b2413" stroke-width="1.8" class="day-only" />
          <line x1="-18" y1="180" x2="-8" y2="-10" stroke="#0a0d14" stroke-width="1.8" class="night-only" />
          <line x1="18" y1="180" x2="8" y2="-10" stroke="#0a0d14" stroke-width="1.8" class="night-only" />

          <!-- Ribbed Stone Amalaka Disk Crown -->
          <ellipse cx="0" cy="-32" rx="16" ry="7" fill="url(#sandstone-highlight)" stroke="#52351c" stroke-width="1.8" class="day-only" />
          <ellipse cx="0" cy="-32" rx="16" ry="7" fill="#2d3750" stroke="#121622" stroke-width="1.8" class="night-only" />
          <!-- Polished Brass Kalash Finial Pot & Trident Tip (Trishul) -->
          <ellipse cx="0" cy="-42" rx="7" ry="6" fill="#d99f36" stroke="#7a5518" stroke-width="1.2" class="day-only" />
          <ellipse cx="0" cy="-42" rx="7" ry="6" fill="#423317" stroke="#1c160b" stroke-width="1.2" class="night-only" />
          <line x1="0" y1="-48" x2="0" y2="-62" stroke="#d99f36" stroke-width="2.5" class="day-only" />
          <line x1="0" y1="-48" x2="0" y2="-62" stroke="#423317" stroke-width="2.5" class="night-only" />
          <!-- Trident prongs -->
          <path d="M-6 -58 Q0 -62 0 -54 Q0 -62 6 -58" fill="none" stroke="#d99f36" stroke-width="2" class="day-only" />
          <path d="M-6 -58 Q0 -62 0 -54 Q0 -62 6 -58" fill="none" stroke="#423317" stroke-width="2" class="night-only" />
        </g>

        <!-- Temple Pillared Mandapa Portico -->
        <g id="temple-mandapa" transform="translate(0, 220)">
          <!-- Portico Roof Eaves Lintel -->
          <rect x="-105" y="0" width="210" height="24" rx="2" fill="url(#sandstone-highlight)" stroke="#52351c" stroke-width="2.5" class="day-only" />
          <rect x="-105" y="0" width="210" height="24" rx="2" fill="#2d3750" stroke="#121622" stroke-width="2.5" class="night-only" />
          <!-- Carved Lotus Flower Relief Medallions on Lintel -->
          <circle cx="-50" cy="12" r="5" fill="#3b2413" opacity="0.4" class="day-only" />
          <circle cx="0" cy="12" r="6" fill="#3b2413" opacity="0.4" class="day-only" />
          <circle cx="50" cy="12" r="5" fill="#3b2413" opacity="0.4" class="day-only" />
          <circle cx="-50" cy="12" r="5" fill="#0a0d14" opacity="0.6" class="night-only" />
          <circle cx="0" cy="12" r="6" fill="#0a0d14" opacity="0.6" class="night-only" />
          <circle cx="50" cy="12" r="5" fill="#0a0d14" opacity="0.6" class="night-only" />

          <!-- Dark Inner Sanctum Recess (Garbhagriha) -->
          <rect x="-55" y="24" width="110" height="195" fill="#06090e" stroke="#16120b" stroke-width="2" />

          <!-- Silhouetted Black Stone Shiva Lingam on Yoni Base Inside Sanctum -->
          <g transform="translate(0, 155)">
            <!-- Sanctum Deep Ambience Glow -->
            <ellipse cx="0" cy="15" rx="35" ry="16" fill="#141a28" opacity="0.6" />
            <!-- Yoni Pitha Base -->
            <ellipse cx="0" cy="20" rx="30" ry="12" fill="#181d29" stroke="#0a0c12" stroke-width="1.8" />
            <path d="M-22 18 L-38 24 L-28 28 L-15 22 Z" fill="#141822" stroke="#0a0c12" stroke-width="1.2" />
            <!-- Shiva Lingam Cylinder Stone with rounded dome tip -->
            <path d="M-12 18 L-12 -6 C-12 -22, 12 -22, 12 -6 L12 18 Z" fill="#1a1e2b" stroke="#0a0c12" stroke-width="1.8" />
            <!-- Three Horizontal Sacred Ash Stripes (Tripundra) & Red Vermilion Dot -->
            <line x1="-7" y1="-8" x2="7" y2="-8" stroke="#d5c8b7" stroke-width="1.2" opacity="0.65" />
            <line x1="-7" y1="-5" x2="7" y2="-5" stroke="#d5c8b7" stroke-width="1.2" opacity="0.65" />
            <line x1="-7" y1="-2" x2="7" y2="-2" stroke="#d5c8b7" stroke-width="1.2" opacity="0.65" />
            <circle cx="0" cy="-5" r="1.5" fill="#cf232b" opacity="0.8" />
          </g>

          <!-- Outer Sandstone Pillars Supporting Portico (4 Fluted Pillars) -->
          <!-- Pillar 1 (Leftmost) -->
          <rect x="-92" y="24" width="22" height="195" fill="url(#sandstone-day)" stroke="#52351c" stroke-width="2" class="day-only" />
          <rect x="-92" y="24" width="22" height="195" fill="url(#sandstone-night)" stroke="#121622" stroke-width="2" class="night-only" />
          <!-- Pillar Capital & Base -->
          <rect x="-96" y="24" width="30" height="10" rx="2" fill="url(#sandstone-highlight)" class="day-only" />
          <rect x="-96" y="210" width="30" height="10" rx="2" fill="url(#sandstone-day)" class="day-only" />
          <rect x="-96" y="24" width="30" height="10" rx="2" fill="#2d3750" class="night-only" />
          <rect x="-96" y="210" width="30" height="10" rx="2" fill="#181e2a" class="night-only" />

          <!-- Pillar 2 (Rightmost) -->
          <rect x="70" y="24" width="22" height="195" fill="url(#sandstone-day)" stroke="#52351c" stroke-width="2" class="day-only" />
          <rect x="70" y="24" width="22" height="195" fill="url(#sandstone-night)" stroke="#121622" stroke-width="2" class="night-only" />
          <rect x="66" y="24" width="30" height="10" rx="2" fill="url(#sandstone-highlight)" class="day-only" />
          <rect x="66" y="210" width="30" height="10" rx="2" fill="url(#sandstone-day)" class="day-only" />
          <rect x="66" y="24" width="30" height="10" rx="2" fill="#2d3750" class="night-only" />
          <rect x="66" y="210" width="30" height="10" rx="2" fill="#181e2a" class="night-only" />

          <!-- Inner Left Pillar Frame -->
          <rect x="-62" y="24" width="12" height="195" fill="url(#sandstone-day)" stroke="#52351c" stroke-width="1.5" class="day-only" />
          <rect x="-62" y="24" width="12" height="195" fill="url(#sandstone-night)" stroke="#121622" stroke-width="1.5" class="night-only" />
          <!-- Inner Right Pillar Frame -->
          <rect x="50" y="24" width="12" height="195" fill="url(#sandstone-day)" stroke="#52351c" stroke-width="1.5" class="day-only" />
          <rect x="50" y="24" width="12" height="195" fill="url(#sandstone-night)" stroke="#121622" stroke-width="1.5" class="night-only" />

          <!-- HOTSPOT 1: HEAVY CAST BRASS TEMPLE BELL (#hotspot-temple-bell) inside .temple-bell-rig @ x=50%, y=34% (195, 287) -->
          <g class="temple-bell-rig" transform="translate(0, 24)">
            <!-- Forged Iron Hanging Chain -->
            <line x1="0" y1="0" x2="0" y2="40" stroke="#241710" stroke-width="3.5" class="day-only" />
            <line x1="0" y1="0" x2="0" y2="40" stroke="#0a0d14" stroke-width="3.5" class="night-only" />
            <ellipse cx="0" cy="10" rx="2.5" ry="4" fill="none" stroke="#684729" stroke-width="1.5" class="day-only" />
            <ellipse cx="0" cy="22" rx="2.5" ry="4" fill="none" stroke="#684729" stroke-width="1.5" class="day-only" />
            <ellipse cx="0" cy="34" rx="2.5" ry="4" fill="none" stroke="#684729" stroke-width="1.5" class="day-only" />
            <ellipse cx="0" cy="10" rx="2.5" ry="4" fill="none" stroke="#252f42" stroke-width="1.5" class="night-only" />
            <ellipse cx="0" cy="22" rx="2.5" ry="4" fill="none" stroke="#252f42" stroke-width="1.5" class="night-only" />
            <ellipse cx="0" cy="34" rx="2.5" ry="4" fill="none" stroke="#252f42" stroke-width="1.5" class="night-only" />

            <!-- The Interactive Brass Bell Body (#hotspot-temple-bell) -->
            <g id="hotspot-temple-bell" class="interactive-object bell-object" transform="translate(0, 42)">
              <!-- Bell Crown Loop -->
              <ellipse cx="0" cy="2" rx="6" ry="5" fill="none" stroke="#7a5518" stroke-width="2.5" class="day-only" />
              <ellipse cx="0" cy="2" rx="6" ry="5" fill="none" stroke="#1c160b" stroke-width="2.5" class="night-only" />
              <!-- Flared Cast Brass Body -->
              <path d="M-8 8 C-12 18, -24 38, -26 48 L26 48 C24 38, 12 18, 8 8 Z" fill="#d4a342" stroke="#7a5518" stroke-width="2" class="day-only" />
              <path d="M-8 8 C-12 18, -24 38, -26 48 L26 48 C24 38, 12 18, 8 8 Z" fill="#4a3b1a" stroke="#1c160b" stroke-width="2" class="night-only" />
              <!-- Bell Lip Moulding Band -->
              <ellipse cx="0" cy="48" rx="26" ry="7" fill="#bfa042" stroke="#7a5518" stroke-width="2" class="day-only" />
              <ellipse cx="0" cy="48" rx="26" ry="7" fill="#362c16" stroke="#1c160b" stroke-width="2" class="night-only" />
              <!-- Specular Brass Highlight -->
              <path d="M-5 12 C-7 22, -14 36, -16 46" stroke="#fef0ca" stroke-width="3" fill="none" opacity="0.65" class="day-only" />
              <path d="M-5 12 C-7 22, -14 36, -16 46" stroke="#7a8da8" stroke-width="2.5" fill="none" opacity="0.45" class="night-only" />
              <!-- Brass Clapper hanging below rim -->
              <line x1="0" y1="46" x2="0" y2="62" stroke="#7a5518" stroke-width="3" class="day-only" />
              <circle cx="0" cy="62" r="5" fill="#c99738" stroke="#7a5518" stroke-width="1.8" class="day-only" />
              <line x1="0" y1="46" x2="0" y2="62" stroke="#1c160b" stroke-width="3" class="night-only" />
              <circle cx="0" cy="62" r="5" fill="#423418" stroke="#1c160b" stroke-width="1.8" class="night-only" />
            </g>
          </g>
        </g>

        <!-- HOTSPOT 3: STEPPED STONE PLINTH (JAGATI) (#hotspot-temple-steps) @ x=68%, y=76% (265.2, 641.4) -->
        <g id="hotspot-temple-steps" class="interactive-object temple-steps-assembly" transform="translate(0, 440)">
          <!-- Tier 1 Top Landing -->
          <polygon points="-135,0 135,0 150,30 -150,30" fill="url(#sandstone-highlight)" stroke="#52351c" stroke-width="2" class="day-only" />
          <polygon points="-135,0 135,0 150,30 -150,30" fill="#2d3750" stroke="#121622" stroke-width="2" class="night-only" />
          <polygon points="-150,30 150,30 150,48 -150,48" fill="url(#sandstone-day)" class="day-only" />
          <polygon points="-150,30 150,30 150,48 -150,48" fill="#181e2a" class="night-only" />

          <!-- Tier 2 Middle Step -->
          <polygon points="-150,48 150,48 165,78 -165,78" fill="url(#sandstone-highlight)" stroke="#52351c" stroke-width="2" class="day-only" />
          <polygon points="-150,48 150,48 165,78 -165,78" fill="#283248" stroke="#121622" stroke-width="2" class="night-only" />
          <polygon points="-165,78 165,78 165,96 -165,96" fill="url(#sandstone-day)" class="day-only" />
          <polygon points="-165,78 165,78 165,96 -165,96" fill="#141924" class="night-only" />

          <!-- Tier 3 Broad Bottom Step -->
          <polygon points="-165,96 165,96 185,130 -185,130" fill="url(#sandstone-highlight)" stroke="#52351c" stroke-width="2" class="day-only" />
          <polygon points="-165,96 165,96 185,130 -185,130" fill="#222b3d" stroke="#121622" stroke-width="2" class="night-only" />
          <polygon points="-185,130 185,130 185,160 -185,160" fill="url(#sandstone-day)" class="day-only" />
          <polygon points="-185,130 185,130 185,160 -185,160" fill="#10141d" class="night-only" />

          <!-- Scattered Orange Marigold Petals on Steps -->
          <g class="day-only">
            <ellipse cx="40" cy="18" rx="4" ry="2.2" fill="#f59e0b" />
            <ellipse cx="48" cy="22" rx="3.5" ry="2" fill="#fbbf24" />
            <ellipse cx="-70" cy="65" rx="4" ry="2.5" fill="#f59e0b" />
            <ellipse cx="80" cy="115" rx="4.5" ry="2.5" fill="#ea580c" />
            <ellipse cx="90" cy="120" rx="3.8" ry="2.2" fill="#f59e0b" />
          </g>
          <g class="night-only" opacity="0.6">
            <ellipse cx="40" cy="18" rx="4" ry="2.2" fill="#7a4f06" />
            <ellipse cx="48" cy="22" rx="3.5" ry="2" fill="#523504" />
            <ellipse cx="-70" cy="65" rx="4" ry="2.5" fill="#7a4f06" />
            <ellipse cx="80" cy="115" rx="4.5" ry="2.5" fill="#5c2004" />
            <ellipse cx="90" cy="120" rx="3.8" ry="2.2" fill="#7a4f06" />
          </g>

          <!-- BURNING CLAY DIYA LAMP (#temple-step-diya) on Lower Step -->
          <g id="temple-step-diya" class="temple-diya-assembly" transform="translate(-45, 60)">
            <!-- Terracotta Diya Pinch Saucer -->
            <ellipse cx="0" cy="6" rx="12" ry="5.5" fill="#8a4422" stroke="#52240f" stroke-width="1.2" class="day-only" />
            <ellipse cx="0" cy="6" rx="12" ry="5.5" fill="#2d170d" stroke="#120803" stroke-width="1.2" class="night-only" />
            <!-- Diya Oil Pool -->
            <ellipse cx="0" cy="5" rx="8" ry="3" fill="#c97a2c" opacity="0.8" class="day-only" />
            <ellipse cx="0" cy="5" rx="8" ry="3" fill="#4d2c0e" opacity="0.8" class="night-only" />

            <!-- Flickering Golden Diya Flame (.diya-flame-group) -->
            <g class="diya-flame-group">
              <!-- Radial Golden Light Pool onto Stone -->
              <ellipse cx="0" cy="6" rx="32" ry="14" fill="#ffb443" opacity="0.25" filter="url(#glow-blur)" />
              <ellipse cx="0" cy="6" rx="18" ry="8" fill="#ffdd78" opacity="0.4" />
              <!-- Flame Outer Core -->
              <path d="M0 -18 C4 -10, 6 -2, 0 3 C-6 -2, -4 -10, 0 -18 Z" fill="#ff9100" opacity="0.9" />
              <!-- Flame Inner White-Hot Core -->
              <path d="M0 -14 C2.5 -8, 3.5 -2, 0 2 C-3.5 -2, -2.5 -8, 0 -14 Z" fill="#fffbe8" />
            </g>

            <!-- Extinguished Smoke Wisp (.diya-smoke-wisp) -->
            <path class="diya-smoke-wisp" d="M0 -6 Q-8 -25 4 -45 T-6 -70" fill="none" stroke="#d5c8b7" stroke-width="2" opacity="0" stroke-linecap="round" />
          </g>
        </g>
      </g>

      <!-- HOTSPOT 2: CARVED TEMPLE WARNING SLAB (#hotspot-temple-warning) @ x=28%, y=62% (109.2, 523.3) -->
      <g id="hotspot-temple-warning" class="interactive-object temple-warning-assembly" transform="translate(110, 523)">
        <!-- Cast Shadow -->
        <ellipse cx="0" cy="38" rx="26" ry="9" fill="#000" opacity="0.4" class="day-only" />
        <ellipse cx="0" cy="38" rx="26" ry="9" fill="#000" opacity="0.75" class="night-only" />
        <!-- Weathered Sandstone Inscription Slab -->
        <polygon points="-26,34 26,30 22,-28 -28,-24" fill="url(#sandstone-day)" stroke="#52351c" stroke-width="2" class="day-only" />
        <polygon points="-26,34 26,30 22,-28 -28,-24" fill="url(#sandstone-night)" stroke="#121622" stroke-width="2" class="night-only" />
        <!-- Chiseled Hindi & English Warning -->
        <text x="0" y="-8" text-anchor="middle" font-family="'Cinzel', serif" font-size="5.8" font-weight="700" letter-spacing="1" fill="#7a1818" class="day-only">DO NOT RING</text>
        <text x="0" y="2" text-anchor="middle" font-family="'Cinzel', serif" font-size="5.5" font-weight="700" letter-spacing="1" fill="#7a1818" class="day-only">AFTER SUNSET</text>
        <text x="0" y="14" text-anchor="middle" font-family="'Crimson Pro', serif" font-size="6.8" font-weight="600" fill="#3b2413" class="day-only">सूर्यास्त के बाद</text>
        <text x="0" y="24" text-anchor="middle" font-family="'Crimson Pro', serif" font-size="6.8" font-weight="600" fill="#3b2413" class="day-only">घंटी न बजाएं</text>

        <text x="0" y="-8" text-anchor="middle" font-family="'Cinzel', serif" font-size="5.8" font-weight="700" letter-spacing="1" fill="#c43b3b" class="night-only">DO NOT RING</text>
        <text x="0" y="2" text-anchor="middle" font-family="'Cinzel', serif" font-size="5.5" font-weight="700" letter-spacing="1" fill="#c43b3b" class="night-only">AFTER SUNSET</text>
        <text x="0" y="14" text-anchor="middle" font-family="'Crimson Pro', serif" font-size="6.8" font-weight="600" fill="#7d95b5" class="night-only">सूर्यास्त के बाद</text>
        <text x="0" y="24" text-anchor="middle" font-family="'Crimson Pro', serif" font-size="6.8" font-weight="600" fill="#7d95b5" class="night-only">घंटी न बजाएं</text>
      </g>
    </svg>
  `;
}).call(this);
  },

  // 6. SCENE 05: The Red House
  renderRedHouseScene() {
    return (function renderRedHouseScene() {
  return `
    <svg class="scene-illustration" viewBox="0 0 390 844" xmlns="http://www.w3.org/2000/svg">
      ${this.getAtmosphericSky('redhouse')}

      <!-- Distant Village Roofs & Desert Horizon -->
      <g class="distant-landscape">
        <path class="day-only" fill="#9e714e" opacity="0.65" d="M0 450 Q100 420 200 440 T390 430 L390 510 L0 510 Z" />
        <path class="night-only" fill="#0c121e" opacity="0.8" d="M0 450 Q100 420 200 440 T390 430 L390 510 L0 510 Z" />
      </g>

      <!-- Dusty Compound Courtyard Ground -->
      <g id="redhouse-ground">
        <rect x="0" y="500" width="390" height="344" fill="url(#ground-dirt-day)" class="day-only" />
        <rect x="0" y="500" width="390" height="344" fill="url(#ground-dirt-night)" class="night-only" />

        <!-- Weathered Flagstone Apron at Doorway -->
        <polygon points="40,540 350,520 370,680 20,710" fill="url(#pat-cobbles)" class="day-only" opacity="0.85" />
        <polygon points="40,540 350,520 370,680 20,710" fill="url(#pat-cobbles-night)" class="night-only" opacity="0.8" />
      </g>

      <!-- THE CROOKED HAVELI (OLD RED HOUSE STRUCTURE) -->
      <g class="haveli-structure" transform="translate(35, 140)">
        <!-- Deep Ambient Ground Shadow Cast by Haveli -->
        <polygon points="0,480 320,460 350,530 -20,550" fill="#000" opacity="0.35" class="day-only" />
        <polygon points="0,480 320,460 350,530 -20,550" fill="#000" opacity="0.75" class="night-only" />

        <!-- Main Haveli Facade (Slight unsettling settlement tilt) -->
        <polygon points="0,470 5,60 315,45 320,450" fill="url(#plaster-cream-day)" stroke="#523924" stroke-width="2" class="day-only" />
        <polygon points="0,470 5,60 315,45 320,450" fill="url(#plaster-cream-night)" stroke="#121622" stroke-width="2" class="night-only" />

        <!-- Large Exposed Brick Patches where Lime Plaster has Sloughed Off -->
        <!-- Upper Left Brick Exposure -->
        <polygon points="25,95 85,90 92,150 30,158" fill="url(#pat-brick)" class="day-only" />
        <polygon points="25,95 85,90 92,150 30,158" fill="url(#pat-brick-night)" class="night-only" />
        <path d="M25 95 Q55 85 85 90 Q92 150 30 158 Z" stroke="#7a5535" stroke-width="1.8" fill="none" opacity="0.65" class="day-only" />
        <path d="M25 95 Q55 85 85 90 Q92 150 30 158 Z" stroke="#1c2436" stroke-width="1.8" fill="none" opacity="0.75" class="night-only" />

        <!-- Lower Right Brick Exposure -->
        <polygon points="230,280 295,270 300,360 235,370" fill="url(#pat-brick)" class="day-only" />
        <polygon points="230,280 295,270 300,360 235,370" fill="url(#pat-brick-night)" class="night-only" />
        <path d="M230 280 Q265 265 295 270 Q300 360 235 370 Z" stroke="#7a5535" stroke-width="1.8" fill="none" opacity="0.65" class="day-only" />
        <path d="M230 280 Q265 265 295 270 Q300 360 235 370 Z" stroke="#1c2436" stroke-width="1.8" fill="none" opacity="0.75" class="night-only" />

        <!-- Overhanging Wooden Roof Eaves with Terracotta Khaprail Tiles -->
        <polygon points="-15,70 335,50 330,30 -20,50" fill="url(#pat-khaprail)" class="day-only" />
        <polygon points="-15,70 335,50 330,30 -20,50" fill="url(#pat-khaprail-night)" class="night-only" />
        <!-- Eave Decorative Wooden Brackets (Todis) -->
        <g stroke="#3b2413" stroke-width="3.5" class="day-only">
          <line x1="15" y1="65" x2="15" y2="88" />
          <line x1="85" y1="60" x2="85" y2="83" />
          <line x1="160" y1="56" x2="160" y2="79" />
          <line x1="235" y1="52" x2="235" y2="75" />
          <line x1="305" y1="48" x2="305" y2="71" />
        </g>
        <g stroke="#0f121a" stroke-width="3.5" class="night-only">
          <line x1="15" y1="65" x2="15" y2="88" />
          <line x1="85" y1="60" x2="85" y2="83" />
          <line x1="160" y1="56" x2="160" y2="79" />
          <line x1="235" y1="52" x2="235" y2="75" />
          <line x1="305" y1="48" x2="305" y2="71" />
        </g>

        <!-- Upper Floor Carved Jharokha Balcony on Right -->
        <g transform="translate(225, 95)">
          <!-- Balcony Corbel Base -->
          <polygon points="0,50 70,45 80,75 -10,80" fill="url(#sandstone-day)" stroke="#52351c" stroke-width="1.8" class="day-only" />
          <polygon points="0,50 70,45 80,75 -10,80" fill="url(#sandstone-night)" stroke="#121622" stroke-width="1.8" class="night-only" />
          <!-- Balcony Parapet Screen (Jali) -->
          <rect x="-8" y="10" width="86" height="42" fill="url(#sandstone-highlight)" stroke="#52351c" stroke-width="1.5" class="day-only" />
          <rect x="-8" y="10" width="86" height="42" fill="#2d3750" stroke="#121622" stroke-width="1.5" class="night-only" />
          <!-- Jali Lattice Openings -->
          <circle cx="12" cy="30" r="5" fill="#3b2413" class="day-only" />
          <circle cx="35" cy="30" r="5" fill="#3b2413" class="day-only" />
          <circle cx="58" cy="30" r="5" fill="#3b2413" class="day-only" />
          <circle cx="12" cy="30" r="5" fill="#090d14" class="night-only" />
          <circle cx="35" cy="30" r="5" fill="#090d14" class="night-only" />
          <circle cx="58" cy="30" r="5" fill="#090d14" class="night-only" />
        </g>

        <!-- HOTSPOT 3: UPPER CURTAINED WINDOW (#hotspot-red-house-window) @ x=26%, y=44% (101.4, 371.4) -->
        <g id="hotspot-red-house-window" class="interactive-object red-house-window-assembly" transform="translate(66, 175)">
          <!-- Stone Lintel & Moulding Frame -->
          <rect x="-6" y="-6" width="82" height="102" rx="3" fill="url(#sandstone-day)" stroke="#52351c" stroke-width="2" class="day-only" />
          <rect x="-6" y="-6" width="82" height="102" rx="3" fill="url(#sandstone-night)" stroke="#121622" stroke-width="2" class="night-only" />
          <!-- Dark Window Opening -->
          <rect x="0" y="0" width="70" height="90" fill="#080a0f" />

          <!-- DAY: Sun-bleached Linen Curtains (Twitching slightly) -->
          <g class="day-only">
            <!-- Left Curtain -->
            <path class="curtain-twitch-day" d="M2 2 Q22 45 14 88 L34 88 Q28 40 38 2 Z" fill="#cfbca6" opacity="0.85" />
            <!-- Right Curtain -->
            <path d="M68 2 Q48 45 56 88 L36 88 Q42 40 32 2 Z" fill="#bfa892" opacity="0.75" />
            <!-- Iron Window Grille -->
            <line x1="23" y1="0" x2="23" y2="90" stroke="#4a2e19" stroke-width="2" />
            <line x1="47" y1="0" x2="47" y2="90" stroke="#4a2e19" stroke-width="2" />
            <line x1="0" y1="45" x2="70" y2="45" stroke="#4a2e19" stroke-width="2" />
          </g>

          <!-- NIGHT: Amber Illuminated Window + Moving Silhouette Shadow -->
          <g class="night-only">
            <!-- Warm Amber Lantern Light from inside -->
            <rect x="2" y="2" width="66" height="86" fill="#ffb443" opacity="0.9" />
            <rect x="2" y="2" width="66" height="86" fill="#ff8c1a" opacity="0.5" filter="url(#glow-blur)" />
            <!-- Silhouette of a Figure Passing Behind the Curtain -->
            <path class="curtain-twitch-day" d="M15 88 C12 60, 20 40, 32 25 C45 40, 52 60, 48 88 Z" fill="#1f1105" opacity="0.85" />
            <circle cx="34" cy="20" r="10" fill="#1f1105" opacity="0.85" />
            <!-- Window Bars -->
            <line x1="23" y1="0" x2="23" y2="90" stroke="#221307" stroke-width="2.5" />
            <line x1="47" y1="0" x2="47" y2="90" stroke="#221307" stroke-width="2.5" />
            <line x1="0" y1="45" x2="70" y2="45" stroke="#221307" stroke-width="2.5" />
          </g>
        </g>

        <!-- THE MONUMENTAL RED DOOR ASSEMBLY (#hotspot-red-door) @ x=50%, y=60% (195, 506.4) -->
        <g id="hotspot-red-door" class="interactive-object red-door-assembly" transform="translate(160, 310)">
          <!-- Heavy Sandstone Chaokhat (Door Frame) -->
          <rect x="-56" y="-12" width="112" height="172" fill="url(#sandstone-day)" stroke="#52351c" stroke-width="2.5" class="day-only" />
          <rect x="-56" y="-12" width="112" height="172" fill="url(#sandstone-night)" stroke="#121622" stroke-width="2.5" class="night-only" />
          <!-- Carved Lotus Rosette on Lintel -->
          <circle cx="0" cy="-2" r="5" fill="#3b2413" opacity="0.5" class="day-only" />
          <circle cx="0" cy="-2" r="5" fill="#090d14" opacity="0.7" class="night-only" />

          <!-- Pitch Black Interior Void Revealed when Door Opens (#red-door-interior-gap) -->
          <rect id="red-door-interior-gap" x="-46" y="0" width="92" height="158" fill="#000000" opacity="0" />

          <!-- Left Swinging Door Leaf (#red-door-left-leaf) -->
          <g id="red-door-left-leaf">
            <rect x="-46" y="0" width="46" height="158" fill="#8f1a1e" stroke="#4a070a" stroke-width="2" class="day-only" />
            <rect x="-46" y="0" width="46" height="158" fill="#3b080a" stroke="#1a0203" stroke-width="2" class="night-only" />
            <!-- Carved Recessed Door Panels -->
            <rect x="-40" y="8" width="34" height="40" fill="#a82328" stroke="#3b0507" stroke-width="1.2" class="day-only" />
            <rect x="-40" y="56" width="34" height="42" fill="#a82328" stroke="#3b0507" stroke-width="1.2" class="day-only" />
            <rect x="-40" y="106" width="34" height="44" fill="#a82328" stroke="#3b0507" stroke-width="1.2" class="day-only" />
            <rect x="-40" y="8" width="34" height="40" fill="#4a0b0d" stroke="#120102" stroke-width="1.2" class="night-only" />
            <rect x="-40" y="56" width="34" height="42" fill="#4a0b0d" stroke="#120102" stroke-width="1.2" class="night-only" />
            <rect x="-40" y="106" width="34" height="44" fill="#4a0b0d" stroke="#120102" stroke-width="1.2" class="night-only" />
            <!-- Decorative Brass Boss Studs (Gul-Mekh) -->
            <circle cx="-23" cy="28" r="3" fill="#d99f36" stroke="#7a5518" stroke-width="0.8" class="day-only" />
            <circle cx="-23" cy="77" r="3" fill="#d99f36" stroke="#7a5518" stroke-width="0.8" class="day-only" />
            <circle cx="-23" cy="128" r="3" fill="#d99f36" stroke="#7a5518" stroke-width="0.8" class="day-only" />
            <circle cx="-23" cy="28" r="3" fill="#423317" stroke="#1c160b" stroke-width="0.8" class="night-only" />
            <circle cx="-23" cy="77" r="3" fill="#423317" stroke="#1c160b" stroke-width="0.8" class="night-only" />
            <circle cx="-23" cy="128" r="3" fill="#423317" stroke="#1c160b" stroke-width="0.8" class="night-only" />
            <!-- Forged Iron Strap Hinges -->
            <rect x="-46" y="20" width="16" height="5" fill="#241710" class="day-only" />
            <rect x="-46" y="125" width="16" height="5" fill="#241710" class="day-only" />
            <rect x="-46" y="20" width="16" height="5" fill="#080a0f" class="night-only" />
            <rect x="-46" y="125" width="16" height="5" fill="#080a0f" class="night-only" />
          </g>

          <!-- Right Door Leaf -->
          <g id="red-door-right-leaf">
            <rect x="0" y="0" width="46" height="158" fill="#82161a" stroke="#4a070a" stroke-width="2" class="day-only" />
            <rect x="0" y="0" width="46" height="158" fill="#330608" stroke="#1a0203" stroke-width="2" class="night-only" />
            <!-- Recessed Panels -->
            <rect x="6" y="8" width="34" height="40" fill="#9e1e23" stroke="#3b0507" stroke-width="1.2" class="day-only" />
            <rect x="6" y="56" width="34" height="42" fill="#9e1e23" stroke="#3b0507" stroke-width="1.2" class="day-only" />
            <rect x="6" y="106" width="34" height="44" fill="#9e1e23" stroke="#3b0507" stroke-width="1.2" class="day-only" />
            <rect x="6" y="8" width="34" height="40" fill="#42090b" stroke="#120102" stroke-width="1.2" class="night-only" />
            <rect x="6" y="56" width="34" height="42" fill="#42090b" stroke="#120102" stroke-width="1.2" class="night-only" />
            <rect x="6" y="106" width="34" height="44" fill="#42090b" stroke="#120102" stroke-width="1.2" class="night-only" />
            <!-- Brass Studs -->
            <circle cx="23" cy="28" r="3" fill="#d99f36" stroke="#7a5518" stroke-width="0.8" class="day-only" />
            <circle cx="23" cy="77" r="3" fill="#d99f36" stroke="#7a5518" stroke-width="0.8" class="day-only" />
            <circle cx="23" cy="128" r="3" fill="#d99f36" stroke="#7a5518" stroke-width="0.8" class="day-only" />
            <circle cx="23" cy="28" r="3" fill="#423317" stroke="#1c160b" stroke-width="0.8" class="night-only" />
            <circle cx="23" cy="77" r="3" fill="#423317" stroke="#1c160b" stroke-width="0.8" class="night-only" />
            <circle cx="23" cy="128" r="3" fill="#423317" stroke="#1c160b" stroke-width="0.8" class="night-only" />
          </g>

          <!-- Center Seam (#red-door-seam) -->
          <line id="red-door-seam" x1="0" y1="0" x2="0" y2="158" stroke="#240305" stroke-width="2.5" />

          <!-- Heavy Brass Ring Door Handle (#red-door-handle) -->
          <g id="red-door-handle" transform="translate(0, 80)">
            <circle cx="-5" cy="0" r="5" fill="#bfa042" stroke="#7a5518" stroke-width="1.5" class="day-only" />
            <circle cx="-5" cy="0" r="5" fill="#362c16" stroke="#1c160b" stroke-width="1.5" class="night-only" />
            <!-- Hanging Ring -->
            <ellipse cx="-5" cy="8" rx="6" ry="9" fill="none" stroke="#d4a342" stroke-width="2.5" class="day-only" />
            <ellipse cx="-5" cy="8" rx="6" ry="9" fill="none" stroke="#4a3b1a" stroke-width="2.5" class="night-only" />
          </g>

          <!-- Horror: Dark Creeping Mist Beneath Threshold (#red-door-under-shadow) -->
          <ellipse id="red-door-under-shadow" cx="0" cy="160" rx="55" ry="14" fill="#000000" opacity="0.3" filter="url(#glow-blur)" />
        </g>

        <!-- BROKEN TERRACOTTA MATKA ON STOOP (#hotspot-red-house-pot) -->
        <g id="hotspot-red-house-pot" class="interactive-object broken-pot-assembly" transform="translate(230, 470)">
          <!-- Ground Shadow -->
          <ellipse cx="0" cy="10" rx="18" ry="7" fill="#000" opacity="0.4" class="day-only" />
          <ellipse cx="0" cy="10" rx="18" ry="7" fill="#000" opacity="0.75" class="night-only" />
          <!-- Shattered Pot Shards -->
          <path d="M-12 6 C-14 -4, -6 -12, 2 -8 C4 -2, 2 8, -12 6 Z" fill="#9e4b2d" stroke="#522312" stroke-width="1.2" class="day-only" />
          <path d="M-12 6 C-14 -4, -6 -12, 2 -8 C4 -2, 2 8, -12 6 Z" fill="#2d1710" stroke="#120805" stroke-width="1.2" class="night-only" />
          <!-- Loose Shards -->
          <polygon points="6,2 14,-2 12,8" fill="#8f4024" class="day-only" />
          <polygon points="4,9 9,14 2,12" fill="#8f4024" class="day-only" />
          <polygon points="6,2 14,-2 12,8" fill="#24130c" class="night-only" />
          <polygon points="4,9 9,14 2,12" fill="#24130c" class="night-only" />
        </g>

        <!-- HOTSPOT 2: CARVED WARNING ON DOOR JAMB (#hotspot-red-house-warning) @ x=68%, y=50% (265.2, 422) -->
        <g id="hotspot-red-house-warning" class="interactive-object red-house-warning-assembly" transform="translate(230, 275)">
          <rect x="-8" y="-12" width="70" height="34" rx="3" fill="#3b2413" stroke="#684729" stroke-width="1.2" class="day-only" />
          <rect x="-8" y="-12" width="70" height="34" rx="3" fill="#0d111a" stroke="#1e2638" stroke-width="1.2" class="night-only" />
          <text x="27" y="2" text-anchor="middle" font-family="'Cinzel', serif" font-size="6.5" font-weight="700" letter-spacing="1" fill="#c72e2e" class="day-only">DO NOT KNOCK</text>
          <text x="27" y="14" text-anchor="middle" font-family="'Crimson Pro', serif" font-size="7.5" font-weight="600" fill="#caa57c" class="day-only">खटखटाना मत</text>
          <text x="27" y="2" text-anchor="middle" font-family="'Cinzel', serif" font-size="6.5" font-weight="700" letter-spacing="1" fill="#e04848" class="night-only">DO NOT KNOCK</text>
          <text x="27" y="14" text-anchor="middle" font-family="'Crimson Pro', serif" font-size="7.5" font-weight="600" fill="#7d95b5" class="night-only">खटखटाना मत</text>
        </g>
      </g>
    </svg>
  `;
}).call(this);
  },

  // 7. SCENE 06: The Banyan Tree
  renderBanyanScene() {
    return (function renderBanyanScene() {
  return `
    <svg class="scene-illustration" viewBox="0 0 390 844" xmlns="http://www.w3.org/2000/svg">
      ${this.getAtmosphericSky('banyan')}

      <!-- Distant Desert Horizon Ridge -->
      <g class="distant-landscape">
        <path class="day-only" fill="#9e714e" opacity="0.65" d="M0 460 Q100 435 200 450 T390 445 L390 520 L0 520 Z" />
        <path class="night-only" fill="#0c121e" opacity="0.8" d="M0 460 Q100 435 200 450 T390 445 L390 520 L0 520 Z" />
      </g>

      <!-- Dusty Crossroads Ground Plane -->
      <g id="banyan-ground">
        <rect x="0" y="500" width="390" height="344" fill="url(#ground-dirt-day)" class="day-only" />
        <rect x="0" y="500" width="390" height="344" fill="url(#ground-dirt-night)" class="night-only" />

        <!-- Dirt Road Path on the Right -->
        <path d="M140 844 L250 510 L370 510 L390 844 Z" fill="url(#pat-cobbles)" class="day-only" opacity="0.45" />
        <path d="M140 844 L250 510 L370 510 L390 844 Z" fill="url(#pat-cobbles-night)" class="night-only" opacity="0.5" />
      </g>

      <!-- THE ANCIENT BANYAN TREE COMPLEX (Vat Vriksh) -->
      <g id="banyan-tree-complex" transform="translate(10, 40)">
        <!-- Colossal Layered Foliage Canopy Arching Across the Sky -->
        <g class="banyan-canopy-group">
          <!-- Back Canopy Mass (Dark Deep Understory) -->
          <ellipse cx="140" cy="170" rx="165" ry="95" fill="#1b2a1a" class="day-only" />
          <ellipse cx="260" cy="155" rx="145" ry="85" fill="#20331e" class="day-only" />
          <ellipse cx="60" cy="200" rx="115" ry="75" fill="#1b2a1a" class="day-only" />
          <ellipse cx="320" cy="210" rx="95" ry="65" fill="#20331e" class="day-only" />

          <ellipse cx="140" cy="170" rx="165" ry="95" fill="#080e0a" class="night-only" />
          <ellipse cx="260" cy="155" rx="145" ry="85" fill="#0b130e" class="night-only" />
          <ellipse cx="60" cy="200" rx="115" ry="75" fill="#080e0a" class="night-only" />
          <ellipse cx="320" cy="210" rx="95" ry="65" fill="#0b130e" class="night-only" />

          <!-- Mid Canopy Mass (Lush Olive/Moss Tones) -->
          <ellipse cx="180" cy="120" rx="135" ry="70" fill="#294026" class="day-only" />
          <ellipse cx="110" cy="150" rx="110" ry="65" fill="#314c2d" class="day-only" />
          <ellipse cx="230" cy="140" rx="120" ry="65" fill="#314c2d" class="day-only" />

          <ellipse cx="180" cy="120" rx="135" ry="70" fill="#0f1a14" class="night-only" />
          <ellipse cx="110" cy="150" rx="110" ry="65" fill="#122018" class="night-only" />
          <ellipse cx="230" cy="140" rx="120" ry="65" fill="#122018" class="night-only" />

          <!-- Foreground Sunlit Leaves (Golden-green tips catching sunlight) -->
          <ellipse cx="150" cy="95" rx="95" ry="48" fill="#46693e" opacity="0.85" class="day-only" />
          <ellipse cx="240" cy="115" rx="85" ry="42" fill="#527d49" opacity="0.75" class="day-only" />
          <ellipse cx="75" cy="130" rx="70" ry="38" fill="#46693e" opacity="0.8" class="day-only" />

          <!-- Moonlit Silvery Edge Sheen (NIGHT) -->
          <ellipse cx="150" cy="95" rx="95" ry="48" fill="#2d4240" opacity="0.35" class="night-only" />
          <ellipse cx="240" cy="115" rx="85" ry="42" fill="#2d4240" opacity="0.3" class="night-only" />
        </g>

        <!-- Thick Horizontal Spreading Boughs Weaving Through Canopy -->
        <g class="banyan-horizontal-boughs">
          <path d="M90 280 Q130 200 240 180 Q310 180 370 210" stroke="#3b2413" stroke-width="26" fill="none" stroke-linecap="round" class="day-only" />
          <path d="M70 290 Q30 220 -20 200" stroke="#3b2413" stroke-width="18" fill="none" stroke-linecap="round" class="day-only" />
          <path d="M90 280 Q130 200 240 180 Q310 180 370 210" stroke="#121620" stroke-width="26" fill="none" stroke-linecap="round" class="night-only" />
          <path d="M70 290 Q30 220 -20 200" stroke="#121620" stroke-width="18" fill="none" stroke-linecap="round" class="night-only" />
        </g>

        <!-- HOTSPOT 1: MASSIVE GNARLED TRUNK & BUTTRESS ROOTS (#hotspot-banyan-roots) @ x=20%, y=68% (78, 573.9) -->
        <g id="hotspot-banyan-roots" class="interactive-object banyan-trunk-assembly">
          <!-- Cast Tree Shadow onto Ground -->
          <ellipse cx="110" cy="510" rx="140" ry="42" fill="#000" opacity="0.35" class="day-only" />
          <ellipse cx="110" cy="510" rx="140" ry="42" fill="#000" opacity="0.75" class="night-only" />

          <!-- Main Muscular Braided Trunk with deep bark crevices -->
          <path d="M95 240 C85 310, 70 410, 20 520 L195 520 C165 410, 145 310, 135 240 Z" fill="#4d321d" stroke="#2b1a0d" stroke-width="2.5" class="day-only" />
          <path d="M95 240 C85 310, 70 410, 20 520 L195 520 C165 410, 145 310, 135 240 Z" fill="#151722" stroke="#090a0f" stroke-width="2.5" class="night-only" />

          <!-- Intertwined Fused Trunk Ribbons & Deep Fissures -->
          <path d="M85 270 Q95 380 65 480" stroke="#2b1a0d" stroke-width="6" fill="none" class="day-only" />
          <path d="M115 260 Q105 370 120 490" stroke="#2b1a0d" stroke-width="7" fill="none" class="day-only" />
          <path d="M140 280 Q130 390 160 500" stroke="#2b1a0d" stroke-width="5" fill="none" class="day-only" />
          <path d="M85 270 Q95 380 65 480" stroke="#090a0f" stroke-width="6" fill="none" class="night-only" />
          <path d="M115 260 Q105 370 120 490" stroke="#090a0f" stroke-width="7" fill="none" class="night-only" />
          <path d="M140 280 Q130 390 160 500" stroke="#090a0f" stroke-width="5" fill="none" class="night-only" />

          <!-- Dark Ancient Hollow (Khokal) in Central Trunk -->
          <ellipse cx="102" cy="380" rx="9" ry="20" fill="#140b05" stroke="#2b1a0d" stroke-width="2" class="day-only" />
          <ellipse cx="102" cy="380" rx="9" ry="20" fill="#040608" stroke="#090a0f" stroke-width="2" class="night-only" />

          <!-- Massive Sprawling Surface Buttress Roots Crawling Across Earth -->
          <!-- Root 1 (Crawling far left) -->
          <path d="M50 495 Q15 515 -25 530" stroke="#3b2413" stroke-width="16" stroke-linecap="round" fill="none" class="day-only" />
          <path d="M50 495 Q15 515 -25 530" stroke="#10131d" stroke-width="16" stroke-linecap="round" fill="none" class="night-only" />
          <!-- Root 2 (Center forward) -->
          <path d="M85 505 Q105 535 125 565" stroke="#3b2413" stroke-width="18" stroke-linecap="round" fill="none" class="day-only" />
          <path d="M85 505 Q105 535 125 565" stroke="#10131d" stroke-width="18" stroke-linecap="round" fill="none" class="night-only" />
          <!-- Root 3 (Rightward anchor) -->
          <path d="M150 500 Q195 520 250 540" stroke="#3b2413" stroke-width="15" stroke-linecap="round" fill="none" class="day-only" />
          <path d="M150 500 Q195 520 250 540" stroke="#10131d" stroke-width="15" stroke-linecap="round" fill="none" class="night-only" />
          <!-- Root 4 (Far right curling root) -->
          <path d="M175 510 Q225 550 280 575" stroke="#3b2413" stroke-width="11" stroke-linecap="round" fill="none" class="day-only" />
          <path d="M175 510 Q225 550 280 575" stroke="#10131d" stroke-width="11" stroke-linecap="round" fill="none" class="night-only" />
        </g>

        <!-- Hanging Aerial Prop Roots (Dahri Curtain) Dropping from Boughs -->
        <g class="hanging-aerial-roots">
          <!-- Root 1 (Leftmost thick prop) -->
          <path class="aerial-root aerial-root-sway" d="M35 190 Q30 330 26 490" stroke="#4a321e" stroke-width="4.5" fill="none" stroke-linecap="round" class="day-only" />
          <path class="aerial-root aerial-root-sway" d="M35 190 Q30 330 26 490" stroke="#141824" stroke-width="4.5" fill="none" stroke-linecap="round" class="night-only" />
          <!-- Root 2 -->
          <path class="aerial-root aerial-root-sway-slow" d="M72 200 Q66 345 62 495" stroke="#4a321e" stroke-width="4" fill="none" stroke-linecap="round" class="day-only" />
          <path class="aerial-root aerial-root-sway-slow" d="M72 200 Q66 345 62 495" stroke="#141824" stroke-width="4" fill="none" stroke-linecap="round" class="night-only" />
          <!-- Root 3 (Mid right) -->
          <path class="aerial-root aerial-root-sway" d="M175 200 Q182 340 188 480" stroke="#4a321e" stroke-width="4.5" fill="none" stroke-linecap="round" class="day-only" />
          <path class="aerial-root aerial-root-sway" d="M175 200 Q182 340 188 480" stroke="#141824" stroke-width="4.5" fill="none" stroke-linecap="round" class="night-only" />
          <!-- Root 4 -->
          <path class="aerial-root aerial-root-sway-slow" d="M225 190 Q220 330 216 470" stroke="#4a321e" stroke-width="4" fill="none" stroke-linecap="round" class="day-only" />
          <path class="aerial-root aerial-root-sway-slow" d="M225 190 Q220 330 216 470" stroke="#141824" stroke-width="4" fill="none" stroke-linecap="round" class="night-only" />
          <!-- Root 5 (Far right) -->
          <path class="aerial-root aerial-root-sway" d="M285 205 Q288 320 292 450" stroke="#4a321e" stroke-width="3.5" fill="none" stroke-linecap="round" class="day-only" />
          <path class="aerial-root aerial-root-sway" d="M285 205 Q288 320 292 450" stroke="#141824" stroke-width="3.5" fill="none" stroke-linecap="round" class="night-only" />
          <!-- Root 6 -->
          <path class="aerial-root aerial-root-sway-slow" d="M330 220 Q325 335 320 460" stroke="#4a321e" stroke-width="3.5" fill="none" stroke-linecap="round" class="day-only" />
          <path class="aerial-root aerial-root-sway-slow" d="M330 220 Q325 335 320 460" stroke="#141824" stroke-width="3.5" fill="none" stroke-linecap="round" class="night-only" />
        </g>

        <!-- Roadside Tree Shrine at Base of Trunk -->
        <g class="tree-shrine-cluster" transform="translate(55, 475)">
          <!-- Smooth Black River Stones (Saligram/Lingam stones) smeared with Orange Sindoor -->
          <ellipse cx="16" cy="24" rx="15" ry="12" fill="#2d261e" stroke="#14100b" stroke-width="1.2" class="day-only" />
          <ellipse cx="16" cy="20" rx="8" ry="6" fill="#e03e1b" opacity="0.9" class="day-only" />
          <ellipse cx="40" cy="28" rx="20" ry="14" fill="#2d261e" stroke="#14100b" stroke-width="1.2" class="day-only" />
          <ellipse cx="40" cy="22" rx="10" ry="7.5" fill="#e03e1b" opacity="0.9" class="day-only" />
          <ellipse cx="66" cy="25" rx="14" ry="11" fill="#2d261e" stroke="#14100b" stroke-width="1.2" class="day-only" />
          <ellipse cx="66" cy="21" rx="7" ry="5" fill="#e03e1b" opacity="0.9" class="day-only" />

          <!-- NIGHT Shrine Stones -->
          <ellipse cx="16" cy="24" rx="15" ry="12" fill="#12151e" stroke="#06070a" stroke-width="1.2" class="night-only" />
          <ellipse cx="16" cy="20" rx="8" ry="6" fill="#6e1a0b" opacity="0.8" class="night-only" />
          <ellipse cx="40" cy="28" rx="20" ry="14" fill="#12151e" stroke="#06070a" stroke-width="1.2" class="night-only" />
          <ellipse cx="40" cy="22" rx="10" ry="7.5" fill="#6e1a0b" opacity="0.8" class="night-only" />
          <ellipse cx="66" cy="25" rx="14" ry="11" fill="#12151e" stroke="#06070a" stroke-width="1.2" class="night-only" />
          <ellipse cx="66" cy="21" rx="7" ry="5" fill="#6e1a0b" opacity="0.8" class="night-only" />

          <!-- Scattered Dried Marigold Petals (Genda) -->
          <g class="day-only">
            <ellipse cx="28" cy="33" rx="4" ry="2.2" fill="#f59e0b" />
            <ellipse cx="50" cy="35" rx="3.5" ry="2" fill="#fbbf24" />
            <ellipse cx="58" cy="32" rx="3.8" ry="2.2" fill="#d97706" />
          </g>
        </g>

        <!-- HOTSPOT 3: SACRED RED & YELLOW THREADS (#hotspot-banyan-threads) @ x=28%, y=44% (109.2, 371.4) -->
        <g id="hotspot-banyan-threads" class="interactive-object sacred-threads-assembly" transform="translate(62, 330)">
          <!-- Knotted Sacred Red & Gold Thread Bands (Mauli) wound around root -->
          <path d="M-4 0 Q3 5 10 0" stroke="#cf232b" stroke-width="4" fill="none" class="day-only" />
          <path d="M-5 8 Q3 13 11 8" stroke="#eab308" stroke-width="3" fill="none" class="day-only" />
          <path d="M-4 16 Q3 21 10 16" stroke="#cf232b" stroke-width="4" fill="none" class="day-only" />
          <path d="M-4 0 Q3 5 10 0" stroke="#75151a" stroke-width="4" fill="none" class="night-only" />
          <path d="M-5 8 Q3 13 11 8" stroke="#785908" stroke-width="3" fill="none" class="night-only" />
          <path d="M-4 16 Q3 21 10 16" stroke="#75151a" stroke-width="4" fill="none" class="night-only" />
          <!-- Fluttering thread tails -->
          <line x1="10" y1="2" x2="18" y2="24" stroke="#cf232b" stroke-width="2" class="day-only flutter-slow" />
          <line x1="11" y1="10" x2="16" y2="30" stroke="#eab308" stroke-width="1.8" class="day-only flutter-slow" />
          <line x1="10" y1="2" x2="18" y2="24" stroke="#75151a" stroke-width="2" class="night-only flutter-slow" />
          <line x1="11" y1="10" x2="16" y2="30" stroke="#785908" stroke-width="1.8" class="night-only flutter-slow" />
        </g>

        <!-- HORROR 4 (CRITICAL): THE BANYAN TREE WOMAN APPARITION (#hotspot-banyan-figure) @ x=58%, y=54% (226.2, 455.8) -->
        <!-- UPGRADED: Realistic old woman form, worn saree with draped pallu, messy grey/white hair, hollow gaunt face, bony pointing arm, ethereal mist -->
        <g id="hotspot-banyan-figure" class="night-only banyan-woman-silhouette" transform="translate(216, 320)" filter="url(#ghost-haze)">
          <!-- Ground Cold Shadow & Supernatural Swirling Mist -->
          <ellipse cx="28" cy="180" rx="36" ry="12" fill="#000" opacity="0.85" />
          <!-- Soft Ethereal Spectral Aura (Moonlit Cyan/Violet) -->
          <ellipse cx="28" cy="90" rx="46" ry="95" fill="#4d6f9c" opacity="0.35" filter="url(#glow-blur)" />

          <!-- Realistic Old Woman Silhouette Form in Worn Traditional Indian Cotton Saree -->
          <!-- Flowing Draped Cotton Saree (Spectral Pale Grey/Ash White with ragged torn hem) -->
          <path d="M12 178 C8 135, 14 90, 24 62 C28 58, 38 58, 44 64 C50 90, 48 135, 42 178 Z" fill="#cbd5e1" opacity="0.92" stroke="#475569" stroke-width="1.5" />
          <!-- Saree Pleat Shadows (Deep vertical folds) -->
          <path d="M22 80 Q18 130 16 178" stroke="#475569" stroke-width="2.5" fill="none" opacity="0.8" />
          <path d="M30 76 Q28 128 28 178" stroke="#475569" stroke-width="2.5" fill="none" opacity="0.8" />
          <path d="M38 82 Q36 130 36 178" stroke="#475569" stroke-width="2.5" fill="none" opacity="0.8" />
          <!-- Frayed, Ragged, Torn Saree Hem trailing onto ground -->
          <path d="M10 178 L14 184 L18 176 L22 186 L26 177 L30 185 L34 176 L38 184 L42 177 L46 182" stroke="#64748b" stroke-width="1.8" fill="none" />

          <!-- Upper Torso & Blouse Under Drape -->
          <path d="M20 62 C20 48, 40 48, 42 62 Z" fill="#64748b" opacity="0.9" />

          <!-- Saree Pallu Draped Over Head (Stooped elderly posture, head tilted forward) -->
          <path d="M16 48 C12 28, 22 12, 34 12 C46 12, 54 28, 50 50 C44 48, 24 46, 16 48 Z" fill="#e2e8f0" stroke="#475569" stroke-width="1.5" />

          <!-- Wisps of Stringy, Messy Grey/White Hair Escaping the Pallu in the Cold Wind -->
          <path d="M18 28 Q10 24 4 32 M16 34 Q8 32 2 40 M20 40 Q12 42 6 50" stroke="#f1f5f9" stroke-width="1.4" fill="none" opacity="0.85" />

          <!-- GAUNT, HOLLOW SKELETAL VISAGE (Partially shadowed beneath pallu) -->
          <g transform="translate(24, 20)">
            <!-- Face Outline (Sunken, emaciated aged jawline) -->
            <path d="M4 6 C4 18, 8 26, 14 26 C20 26, 22 18, 22 6 Z" fill="#94a3b8" />
            <!-- Deep Sunken Eye Sockets (Dark hollow voids with cold glint) -->
            <ellipse cx="8" cy="11" rx="2.8" ry="3.5" fill="#090d14" />
            <circle cx="8" cy="10" r="0.8" fill="#e0f2fe" opacity="0.9" />
            <ellipse cx="17" cy="11" rx="2.8" ry="3.5" fill="#090d14" />
            <circle cx="17" cy="10" r="0.8" fill="#e0f2fe" opacity="0.9" />
            <!-- Gaunt Sunken Cheekbones Shadows -->
            <path d="M5 16 Q8 20 6 23 M20 16 Q17 20 19 23" stroke="#334155" stroke-width="1.2" fill="none" />
            <!-- Parted Lips / Agonized Hollow Mouth -->
            <ellipse cx="13" cy="22" rx="2.8" ry="3.5" fill="#090d14" />
          </g>

          <!-- BONY POINTING ARM & SKELETAL EXTENDED FINGERS (Pointing toward Road/Temple) -->
          <g class="banyan-woman-arm" transform="translate(42, 60)">
            <!-- Bony Forearm reaching outward to the right -->
            <path d="M0 6 Q20 2 40 -8" stroke="#cbd5e1" stroke-width="4.5" fill="none" stroke-linecap="round" />
            <path d="M0 6 Q20 2 40 -8" stroke="#475569" stroke-width="1.5" fill="none" />
            <!-- Skeletal Elongated Pointing Hand & Index Finger -->
            <path d="M40 -8 L54 -14" stroke="#e2e8f0" stroke-width="2.5" stroke-linecap="round" />
            <!-- Curled other fingers -->
            <path d="M42 -7 L47 -9 M41 -5 L46 -7 M40 -3 L45 -5" stroke="#cbd5e1" stroke-width="2" stroke-linecap="round" />
            <!-- Spectral Vapor Trail trailing off fingers -->
            <path d="M54 -14 Q65 -18 78 -16" stroke="#93c5fd" stroke-width="1.8" fill="none" opacity="0.6" filter="url(#glow-blur)" />
          </g>
        </g>

        <!-- EERIE MIST RIBBONS & FOG SWEEP ANIMATION LAYERS -->
        <!-- Lingering Ground Fog (#banyan-lingering-fog) -->
        <g id="banyan-lingering-fog" class="night-only" opacity="0.55">
          <ellipse cx="195" cy="510" rx="180" ry="35" fill="url(#fog-sweep-grad)" filter="url(#glow-blur)" />
          <ellipse cx="230" cy="490" rx="140" ry="25" fill="url(#fog-sweep-grad)" filter="url(#glow-blur)" />
        </g>

        <!-- Dynamic Fog Sweep Overlay on Entrance (#banyan-fog-sweep-layer) -->
        <rect id="banyan-fog-sweep-layer" x="-50" y="320" width="480" height="240" fill="url(#fog-sweep-grad)" opacity="0" filter="url(#glow-blur)" pointer-events="none" />
      </g>
    </svg>
  `;
}).call(this);
  },

  // 8. SCENE 07: The Empty Road
  renderEmptyRoadScene() {
    return (function renderEmptyRoadScene() {
  return `
    <svg class="scene-illustration" viewBox="0 0 390 844" xmlns="http://www.w3.org/2000/svg">
      ${this.getAtmosphericSky('emptyroad')}

      <!-- Distant Aravalli Mountain Backdrop with atmospheric aerial perspective -->
      <g class="distant-landscape">
        <path class="day-only" fill="#9e714e" opacity="0.65" d="M0 410 Q90 375 190 395 T390 385 L390 480 L0 480 Z" />
        <path class="night-only" fill="#0c121e" opacity="0.8" d="M0 410 Q90 375 190 395 T390 385 L390 480 L0 480 Z" />
      </g>

      <!-- HOTSPOT 3: DISTANT KALDHARA RUINS PANORAMA (#hotspot-road-village-view) @ x=22%, y=52% (85.8, 438.9) -->
      <g id="hotspot-road-village-view" class="interactive-object village-panorama-assembly" transform="translate(86, 410)">
        <!-- Distant Skyline of Ruined Havelis, Watchtowers & Chhatris -->
        <!-- Watchtower -->
        <polygon points="-50,30 -42,30 -44,-8 -48,-8" fill="#5c3f27" class="day-only" />
        <polygon points="-50,30 -42,30 -44,-8 -48,-8" fill="#121622" class="night-only" />
        <!-- Chhatri Dome Pavilions -->
        <path d="M-36 10 C-36 2, -24 2, -24 10 L-22 30 L-38 30 Z" fill="#684729" class="day-only" />
        <path d="M-36 10 C-36 2, -24 2, -24 10 L-22 30 L-38 30 Z" fill="#151b2a" class="night-only" />
        <path d="M-12 12 C-12 5, -2 5, -2 12 L0 30 L-14 30 Z" fill="#684729" class="day-only" />
        <path d="M-12 12 C-12 5, -2 5, -2 12 L0 30 L-14 30 Z" fill="#151b2a" class="night-only" />
        <!-- Cluster of Haveli Walls -->
        <polygon points="5,30 35,24 35,6 5,10" fill="#7a5535" class="day-only" />
        <polygon points="5,30 35,24 35,6 5,10" fill="#182030" class="night-only" />
        <!-- Distant Temple Shikhara Spire -->
        <polygon points="20,6 23,30 17,30" fill="#4d321d" class="day-only" />
        <polygon points="20,6 23,30 17,30" fill="#0d1017" class="night-only" />
        <!-- Distant Telegraph Poles & Sagging Wires -->
        <line x1="-65" y1="15" x2="-65" y2="35" stroke="#3b2413" stroke-width="1.2" class="day-only" />
        <line x1="45" y1="18" x2="45" y2="38" stroke="#3b2413" stroke-width="1.2" class="day-only" />
        <path d="M-65 20 Q-10 26 45 22" stroke="#3b2413" stroke-width="0.7" fill="none" class="day-only" />
        <line x1="-65" y1="15" x2="-65" y2="35" stroke="#0a0d14" stroke-width="1.2" class="night-only" />
        <line x1="45" y1="18" x2="45" y2="38" stroke="#0a0d14" stroke-width="1.2" class="night-only" />
        <path d="M-65 20 Q-10 26 45 22" stroke="#0a0d14" stroke-width="0.7" fill="none" class="night-only" />
      </g>

      <!-- Desert Wasteland Flanking Grounds -->
      <g id="desert-plains">
        <polygon points="0,440 390,440 390,844 0,844" fill="url(#ground-dirt-day)" class="day-only" />
        <polygon points="0,440 390,440 390,844 0,844" fill="url(#ground-dirt-night)" class="night-only" />
      </g>

      <!-- HOTSPOT 1: THE EMPTY DUSTY ROAD (#hotspot-empty-road-path) @ x=50%, y=65% (195, 548.6) -->
      <g id="hotspot-empty-road-path" class="interactive-object empty-road-path-assembly">
        <!-- Deep Perspective Receding Dirt Track -->
        <polygon points="185,440 205,440 340,844 40,844" fill="#b08658" class="day-only" />
        <polygon points="185,440 205,440 340,844 40,844" fill="#151b28" class="night-only" />
        <!-- Cobble & Flagstone remnants embedded in dust -->
        <polygon points="188,440 202,440 300,844 80,844" fill="url(#pat-cobbles)" class="day-only" opacity="0.65" />
        <polygon points="188,440 202,440 300,844 80,844" fill="url(#pat-cobbles-night)" class="night-only" opacity="0.6" />

        <!-- Deep Wheel Ruts Winding to Horizon -->
        <path d="M192 440 Q188 600 130 844" stroke="#684729" stroke-width="3" fill="none" opacity="0.4" stroke-dasharray="14 10" class="day-only" />
        <path d="M198 440 Q202 600 240 844" stroke="#684729" stroke-width="3" fill="none" opacity="0.4" stroke-dasharray="16 12" class="day-only" />
        <path d="M192 440 Q188 600 130 844" stroke="#080b10" stroke-width="3" fill="none" opacity="0.7" stroke-dasharray="14 10" class="night-only" />
        <path d="M198 440 Q202 600 240 844" stroke="#080b10" stroke-width="3" fill="none" opacity="0.7" stroke-dasharray="16 12" class="night-only" />

        <!-- Roadside Boundary Stones / Broken Masonry Blocks -->
        <polygon points="60,620 90,610 95,650 65,660" fill="url(#sandstone-day)" stroke="#52351c" stroke-width="1.8" class="day-only" />
        <polygon points="60,620 90,610 95,650 65,660" fill="url(#sandstone-night)" stroke="#121622" stroke-width="1.8" class="night-only" />
        <polygon points="310,590 335,582 340,620 315,628" fill="url(#sandstone-day)" stroke="#52351c" stroke-width="1.8" class="day-only" />
        <polygon points="310,590 335,582 340,620 315,628" fill="url(#sandstone-night)" stroke="#121622" stroke-width="1.8" class="night-only" />
      </g>

      <!-- HOTSPOT 2: CROOKED ANCIENT ACACIA TREE (#hotspot-road-tree) @ x=72%, y=48% (280.8, 405.1) -->
      <g id="hotspot-road-tree" class="interactive-object acacia-tree-assembly" transform="translate(280, 390)">
        <!-- Ground Cast Shadow -->
        <ellipse cx="-20" cy="110" rx="65" ry="22" fill="#000" opacity="0.35" class="day-only" />
        <ellipse cx="-20" cy="110" rx="65" ry="22" fill="#000" opacity="0.75" class="night-only" />

        <!-- Crooked, Twisted Trunk (Babool Tree) -->
        <path d="M0 110 Q-15 50 -8 0 Q-2 -50 25 -95" stroke="#3b2413" stroke-width="14" fill="none" stroke-linecap="round" class="day-only" />
        <path d="M0 110 Q-15 50 -8 0 Q-2 -50 25 -95" stroke="#12151e" stroke-width="14" fill="none" stroke-linecap="round" class="night-only" />
        <!-- Main Branch System -->
        <path d="M-8 0 Q-45 -30 -75 -40" stroke="#3b2413" stroke-width="8" fill="none" stroke-linecap="round" class="day-only" />
        <path d="M-8 0 Q-45 -30 -75 -40" stroke="#12151e" stroke-width="8" fill="none" stroke-linecap="round" class="night-only" />
        <path d="M12 -65 Q45 -85 70 -80" stroke="#3b2413" stroke-width="6" fill="none" stroke-linecap="round" class="day-only" />
        <path d="M12 -65 Q45 -85 70 -80" stroke="#12151e" stroke-width="6" fill="none" stroke-linecap="round" class="night-only" />

        <!-- Thorny Acacia Twigs -->
        <g stroke="#2b1a0d" stroke-width="2" fill="none" class="day-only">
          <line x1="-75" y1="-40" x2="-95" y2="-55" />
          <line x1="-55" y1="-35" x2="-65" y2="-60" />
          <line x1="25" y1="-95" x2="35" y2="-120" />
          <line x1="15" y1="-85" x2="0" y2="-110" />
          <line x1="70" y1="-80" x2="95" y2="-90" />
        </g>
        <g stroke="#0a0c12" stroke-width="2" fill="none" class="night-only">
          <line x1="-75" y1="-40" x2="-95" y2="-55" />
          <line x1="-55" y1="-35" x2="-65" y2="-60" />
          <line x1="25" y1="-95" x2="35" y2="-120" />
          <line x1="15" y1="-85" x2="0" y2="-110" />
          <line x1="70" y1="-80" x2="95" y2="-90" />
        </g>

        <!-- Sparse Feathery Acacia Leaf Clusters -->
        <g class="day-only">
          <ellipse cx="-75" cy="-45" rx="35" ry="18" fill="#3b522b" />
          <ellipse cx="25" cy="-100" rx="40" ry="20" fill="#466333" />
          <ellipse cx="65" cy="-85" rx="30" ry="15" fill="#3b522b" />
          <ellipse cx="-20" cy="-65" rx="35" ry="18" fill="#466333" />
        </g>
        <g class="night-only">
          <ellipse cx="-75" cy="-45" rx="35" ry="18" fill="#0d140e" />
          <ellipse cx="25" cy="-100" rx="40" ry="20" fill="#101812" />
          <ellipse cx="65" cy="-85" rx="30" ry="15" fill="#0d140e" />
          <ellipse cx="-20" cy="-65" rx="35" ry="18" fill="#101812" />
        </g>
      </g>
    </svg>
  `;
}).call(this);
  },

  // 9. SCENE 08: Village Square
  renderVillageSquareScene() {
    return (function renderVillageSquareScene() {
  return `
    <svg class="scene-illustration" viewBox="0 0 390 844" xmlns="http://www.w3.org/2000/svg">
      ${this.getAtmosphericSky('villagesquare')}

      <!-- Distant Village Roofs Beyond Square -->
      <g class="distant-landscape">
        <path class="day-only" fill="#9e714e" opacity="0.65" d="M0 410 Q100 380 200 400 T390 390 L390 470 L0 470 Z" />
        <path class="night-only" fill="#0c121e" opacity="0.8" d="M0 410 Q100 380 200 400 T390 390 L390 470 L0 470 Z" />
      </g>

      <!-- Dusty Village Square Central Ground (Chauk) -->
      <g id="square-ground">
        <rect x="0" y="470" width="390" height="374" fill="url(#ground-dirt-day)" class="day-only" />
        <rect x="0" y="470" width="390" height="374" fill="url(#ground-dirt-night)" class="night-only" />

        <!-- Weathered Flagstone Center Pavement -->
        <ellipse cx="195" cy="640" rx="175" ry="110" fill="url(#pat-cobbles)" class="day-only" opacity="0.75" />
        <ellipse cx="195" cy="640" rx="175" ry="110" fill="url(#pat-cobbles-night)" class="night-only" opacity="0.75" />
      </g>

      <!-- SURROUNDING OLD MERCHANT HAVELIS FRAMING THE SQUARE -->
      <g id="village-square-houses">
        <!-- Connecting Rear Archway in Center Background -->
        <g id="rear-archway-assembly" transform="translate(195, 290)">
          <!-- Archway Sandstone Portal -->
          <path d="M-60 170 L-60 60 C-60 0, 60 0, 60 60 L60 170 Z" fill="url(#sandstone-day)" stroke="#52351c" stroke-width="2" class="day-only" />
          <path d="M-60 170 L-60 60 C-60 0, 60 0, 60 60 L60 170 Z" fill="url(#sandstone-night)" stroke="#121622" stroke-width="2" class="night-only" />
          <!-- Dark Recessed Alleyway Opening -->
          <path d="M-44 170 L-44 75 C-44 25, 44 25, 44 75 L44 170 Z" fill="#140c06" class="day-only" />
          <path d="M-44 170 L-44 75 C-44 25, 44 25, 44 75 L44 170 Z" fill="#040608" class="night-only" />

          <!-- UPGRADED RUNNING GHOST APPARITION ACROSS ARCHWAY (#square-running-ghost) -->
          <!-- Dynamic sprinting human figure leaning forward at 45°, trailing tattered clothes, motion blur trail -->
          <g id="square-running-ghost" class="square-runner-ghost" opacity="0" filter="url(#ghost-haze)" transform="translate(-180, 70)">
            <!-- Motion Blur Echo 1 (Far behind) -->
            <g opacity="0.25" transform="translate(-30, 0)">
              <polygon points="10,45 18,30 26,45" fill="#93c5fd" />
              <circle cx="28" cy="18" r="7" fill="#93c5fd" />
              <line x1="28" y1="25" x2="38" y2="45" stroke="#93c5fd" stroke-width="4" />
            </g>
            <!-- Motion Blur Echo 2 -->
            <g opacity="0.45" transform="translate(-15, 0)">
              <polygon points="10,45 18,30 26,45" fill="#bfdbfe" />
              <circle cx="28" cy="18" r="7" fill="#bfdbfe" />
              <line x1="28" y1="25" x2="38" y2="45" stroke="#bfdbfe" stroke-width="4" />
            </g>
            <!-- Main Sprinting Figure Body -->
            <g>
              <!-- Leaning Torso & Tattered Dhoti/Kurta Streaming Behind -->
              <path d="M12 48 L-8 38 L4 28 L24 22 L38 32 L32 50 Z" fill="#e2e8f0" stroke="#64748b" stroke-width="1.2" />
              <path d="M-8 38 L-22 36 L-10 46 Z" fill="#cbd5e1" opacity="0.8" />
              <!-- Pumping Running Legs -->
              <!-- Front Leg Reaching Out -->
              <path d="M28 48 L46 64 L58 60" stroke="#cbd5e1" stroke-width="4.5" fill="none" stroke-linecap="round" />
              <!-- Back Leg Kicking High -->
              <path d="M18 48 L4 65 L-12 55" stroke="#cbd5e1" stroke-width="4.5" fill="none" stroke-linecap="round" />
              <!-- Forward Angled Head & Agonized Pale Visage -->
              <circle cx="36" cy="18" r="8" fill="#e2e8f0" stroke="#64748b" stroke-width="1" />
              <!-- Terrified Eye & Open Scream Mouth looking back -->
              <ellipse cx="33" cy="17" rx="1.8" ry="2.2" fill="#090d14" />
              <circle cx="33" cy="16" r="0.6" fill="#fff" />
              <ellipse cx="31" cy="22" rx="2" ry="2.5" fill="#090d14" />
              <!-- Wild streaming hair -->
              <path d="M30 12 Q20 8 10 14 M28 16 Q18 14 8 22" stroke="#475569" stroke-width="2" fill="none" />
              <!-- Pumping Arms -->
              <path d="M26 26 L12 36 L6 28" stroke="#cbd5e1" stroke-width="3.5" fill="none" stroke-linecap="round" />
              <path d="M32 26 L48 24 L56 36" stroke="#cbd5e1" stroke-width="3.5" fill="none" stroke-linecap="round" />
            </g>
          </g>
        </g>

        <!-- Left Haveli Facade (2 Storeys) -->
        <g id="left-haveli" transform="translate(0, 160)">
          <!-- Main Wall with aged plaster & brick exposure -->
          <polygon points="0,70 145,50 145,410 0,430" fill="url(#plaster-cream-day)" stroke="#523924" stroke-width="2" class="day-only" />
          <polygon points="0,70 145,50 145,410 0,430" fill="url(#plaster-cream-night)" stroke="#121622" stroke-width="2" class="night-only" />
          <polygon points="15,100 80,90 85,160 20,170" fill="url(#pat-brick)" class="day-only" />
          <polygon points="15,100 80,90 85,160 20,170" fill="url(#pat-brick-night)" class="night-only" />
          <!-- Tiled Eaves -->
          <polygon points="-5,68 152,48 148,32 -8,48" fill="url(#pat-khaprail)" class="day-only" />
          <polygon points="-5,68 152,48 148,32 -8,48" fill="url(#pat-khaprail-night)" class="night-only" />

          <!-- Upper Floor Jharokha Window with Night Light (.sq-lit-window) -->
          <g transform="translate(35, 110)">
            <rect x="0" y="0" width="46" height="62" rx="3" fill="#3b2413" class="day-only" />
            <rect x="0" y="0" width="46" height="62" rx="3" fill="#090d14" class="night-only" />
            <!-- NIGHT Faint Amber Lit Window -->
            <rect x="3" y="3" width="40" height="56" rx="2" fill="#ffb443" opacity="0.85" filter="url(#glow-blur)" class="sq-lit-window night-only" />
            <!-- Window Frame & Grille -->
            <line x1="23" y1="0" x2="23" y2="62" stroke="#221307" stroke-width="2" />
            <line x1="0" y1="31" x2="46" y2="31" stroke="#221307" stroke-width="2" />
          </g>

          <!-- Lower Floor Arched Doorway -->
          <path d="M40 370 L40 250 C40 215, 110 215, 110 250 L110 370 Z" fill="#241407" class="day-only" />
          <path d="M40 370 L40 250 C40 215, 110 215, 110 250 L110 370 Z" fill="#05070a" class="night-only" />
        </g>

        <!-- Right Haveli Facade (2 Storeys) -->
        <g id="right-haveli" transform="translate(245, 150)">
          <polygon points="0,55 145,35 145,420 0,405" fill="url(#plaster-cream-day)" stroke="#523924" stroke-width="2" class="day-only" />
          <polygon points="0,55 145,35 145,420 0,405" fill="url(#plaster-cream-night)" stroke="#121622" stroke-width="2" class="night-only" />
          <polygon points="35,100 105,90 110,165 40,175" fill="url(#pat-brick)" class="day-only" />
          <polygon points="35,100 105,90 110,165 40,175" fill="url(#pat-brick-night)" class="night-only" />
          <!-- Tiled Eaves -->
          <polygon points="-8,52 152,32 148,16 -12,32" fill="url(#pat-khaprail)" class="day-only" />
          <polygon points="-8,52 152,32 148,16 -12,32" fill="url(#pat-khaprail-night)" class="night-only" />

          <!-- Upper Floor Windows (With Night Glow) -->
          <!-- Window 1 -->
          <g transform="translate(25, 95)">
            <rect x="0" y="0" width="38" height="52" rx="3" fill="#3b2413" class="day-only" />
            <rect x="0" y="0" width="38" height="52" rx="3" fill="#090d14" class="night-only" />
            <rect x="3" y="3" width="32" height="46" rx="2" fill="#ffb443" opacity="0.8" filter="url(#glow-blur)" class="sq-lit-window night-only" />
            <line x1="19" y1="0" x2="19" y2="52" stroke="#221307" stroke-width="1.8" />
          </g>
          <!-- Window 2 -->
          <g transform="translate(85, 88)">
            <rect x="0" y="0" width="38" height="52" rx="3" fill="#3b2413" class="day-only" />
            <rect x="0" y="0" width="38" height="52" rx="3" fill="#090d14" class="night-only" />
            <rect x="3" y="3" width="32" height="46" rx="2" fill="#ff9a2b" opacity="0.7" filter="url(#glow-blur)" class="sq-lit-window night-only" />
            <line x1="19" y1="0" x2="19" y2="52" stroke="#221307" stroke-width="1.8" />
          </g>
        </g>
      </g>

      <!-- HOTSPOT 3: HANGING CLOTHES ON LINE (#hotspot-hanging-clothes) @ x=78%, y=38% (304.2, 320.7) -->
      <g id="hotspot-hanging-clothes" class="interactive-object hanging-clothes-assembly" transform="translate(210, 290)">
        <!-- Sagging Rope Clothesline Strung Between Havelis -->
        <path d="M-80 15 Q30 35 150 15" fill="none" stroke="#523924" stroke-width="1.8" class="day-only" />
        <path d="M-80 15 Q30 35 150 15" fill="none" stroke="#121622" stroke-width="1.8" class="night-only" />
        <!-- Garment 1: Faded White Cotton Kurta -->
        <g transform="translate(-15, 26)">
          <polygon points="-14,0 14,0 18,52 -18,52" fill="#f1f5f9" stroke="#94a3b8" stroke-width="1" opacity="0.9" class="day-only flutter-slow" />
          <polygon points="-14,0 14,0 18,52 -18,52" fill="#334155" stroke="#1e293b" stroke-width="1" opacity="0.85" class="night-only flutter-slow" />
        </g>
        <!-- Garment 2: Ochre Dhoti -->
        <g transform="translate(35, 28)">
          <polygon points="-16,0 16,0 14,64 -14,64" fill="#d99f36" stroke="#946518" stroke-width="1" opacity="0.85" class="day-only flutter-slow" />
          <polygon points="-16,0 16,0 14,64 -14,64" fill="#52380d" stroke="#261a06" stroke-width="1" opacity="0.8" class="night-only flutter-slow" />
        </g>
        <!-- Garment 3: Indigo Dupatta -->
        <g transform="translate(85, 22)">
          <polygon points="-12,0 12,0 10,58 -10,58" fill="#475569" stroke="#1e293b" stroke-width="1" opacity="0.85" class="day-only flutter-slow" />
          <polygon points="-12,0 12,0 10,58 -10,58" fill="#1e293b" stroke="#0f172a" stroke-width="1" opacity="0.8" class="night-only flutter-slow" />
        </g>
      </g>

      <!-- WEATHERED STONE BENCH BENEATH WALL (#hotspot-square-bench) -->
      <g id="hotspot-square-bench" class="interactive-object square-bench-assembly" transform="translate(290, 560)">
        <!-- Ground Shadow -->
        <ellipse cx="0" cy="38" rx="36" ry="10" fill="#000" opacity="0.35" class="day-only" />
        <ellipse cx="0" cy="38" rx="36" ry="10" fill="#000" opacity="0.75" class="night-only" />
        <!-- Sandstone Bench Slab -->
        <polygon points="-35,8 35,5 30,-4 -40,-2" fill="url(#sandstone-highlight)" stroke="#52351c" stroke-width="1.8" class="day-only" />
        <polygon points="-35,8 35,5 30,-4 -40,-2" fill="#2d3750" stroke="#121622" stroke-width="1.8" class="night-only" />
        <!-- Left Pier Support -->
        <rect x="-30" y="8" width="14" height="28" fill="url(#sandstone-day)" stroke="#52351c" stroke-width="1.5" class="day-only" />
        <rect x="-30" y="8" width="14" height="28" fill="url(#sandstone-night)" stroke="#121622" stroke-width="1.5" class="night-only" />
        <!-- Right Pier Support -->
        <rect x="18" y="6" width="14" height="28" fill="url(#sandstone-day)" stroke="#52351c" stroke-width="1.5" class="day-only" />
        <rect x="18" y="6" width="14" height="28" fill="url(#sandstone-night)" stroke="#121622" stroke-width="1.5" class="night-only" />
      </g>

      <!-- HOTSPOT 2: ABANDONED WOODEN BULLOCK CART (#hotspot-square-cart) @ x=24%, y=70% (93.6, 590.8) -->
      <g id="hotspot-square-cart" class="interactive-object bullock-cart-assembly" transform="translate(94, 591)">
        <!-- Ground Cast Shadow -->
        <ellipse cx="0" cy="46" rx="55" ry="16" fill="#000" opacity="0.4" class="day-only" />
        <ellipse cx="0" cy="46" rx="55" ry="16" fill="#000" opacity="0.8" class="night-only" />

        <!-- Massive Wooden Spoked Wheel (Left/Foreground Wheel) -->
        <g id="cart-wheel-fg" transform="translate(-15, 20)">
          <!-- Iron-Rimmed Outer Rim -->
          <circle cx="0" cy="0" r="34" fill="none" stroke="#3b2413" stroke-width="4.5" class="day-only" />
          <circle cx="0" cy="0" r="34" fill="none" stroke="#0e1017" stroke-width="4.5" class="night-only" />
          <circle cx="0" cy="0" r="31" fill="none" stroke="#7a5435" stroke-width="2" class="day-only" />
          <circle cx="0" cy="0" r="31" fill="none" stroke="#222838" stroke-width="2" class="night-only" />
          <!-- Heavy Timber Spokes (12 Spokes) -->
          <g stroke="#5c3f27" stroke-width="2.5" class="day-only">
            <line x1="-31" y1="0" x2="31" y2="0" />
            <line x1="0" y1="-31" x2="0" y2="31" />
            <line x1="-22" y1="-22" x2="22" y2="22" />
            <line x1="-22" y1="22" x2="22" y2="-22" />
            <line x1="-29" y1="-11" x2="29" y2="11" />
            <line x1="-11" y1="-29" x2="11" y2="29" />
          </g>
          <g stroke="#161c28" stroke-width="2.5" class="night-only">
            <line x1="-31" y1="0" x2="31" y2="0" />
            <line x1="0" y1="-31" x2="0" y2="31" />
            <line x1="-22" y1="-22" x2="22" y2="22" />
            <line x1="-22" y1="22" x2="22" y2="-22" />
            <line x1="-29" y1="-11" x2="29" y2="11" />
            <line x1="-11" y1="-29" x2="11" y2="29" />
          </g>
          <!-- Heavy Carved Wooden Hub (Naaf) with Iron Linchpin -->
          <circle cx="0" cy="0" r="8" fill="#4a2e19" stroke="#24140a" stroke-width="2" class="day-only" />
          <circle cx="0" cy="0" r="8" fill="#121622" stroke="#080a0f" stroke-width="2" class="night-only" />
          <circle cx="0" cy="0" r="3" fill="#8f6336" class="day-only" />
          <circle cx="0" cy="0" r="3" fill="#2d374d" class="night-only" />
        </g>

        <!-- Cart Slanted Timber Cargo Bed -->
        <polygon points="-45,-12 35,-22 45,5 -38,15" fill="#5c3f27" stroke="#362212" stroke-width="2" class="day-only" />
        <polygon points="-45,-12 35,-22 45,5 -38,15" fill="#161c28" stroke="#0b0e14" stroke-width="2" class="night-only" />
        <polygon points="-43,-10 33,-20 43,3 -36,13" fill="url(#pat-wood)" class="day-only" opacity="0.85" />
        <polygon points="-43,-10 33,-20 43,3 -36,13" fill="url(#pat-wood-night)" class="night-only" opacity="0.85" />

        <!-- Sacks of Grain / Straw Cargo rotting in cart -->
        <ellipse cx="-15" cy="-14" rx="20" ry="14" fill="#a48057" stroke="#684f33" stroke-width="1.2" class="day-only" />
        <ellipse cx="12" cy="-18" rx="18" ry="12" fill="#947147" stroke="#684f33" stroke-width="1.2" class="day-only" />
        <ellipse cx="-15" cy="-14" rx="20" ry="14" fill="#252b3a" stroke="#121620" stroke-width="1.2" class="night-only" />
        <ellipse cx="12" cy="-18" rx="18" ry="12" fill="#1f2533" stroke="#121620" stroke-width="1.2" class="night-only" />

        <!-- Long Wooden Yoke Pole (Jua) resting on ground -->
        <line x1="25" y1="2" x2="75" y2="44" stroke="#4d321d" stroke-width="4.5" stroke-linecap="round" class="day-only" />
        <line x1="25" y1="2" x2="75" y2="44" stroke="#141722" stroke-width="4.5" stroke-linecap="round" class="night-only" />
      </g>

      <!-- HOTSPOT 1: THE OLD NOTICE BOARD (#hotspot-notice-board, #hotspot-square-notice) @ x=50%, y=64% (195, 540.2) -->
      <g id="hotspot-notice-board" class="interactive-object square-notice-assembly" transform="translate(195, 540)">
        <g id="hotspot-square-notice">
          <!-- Cast Ground Shadow -->
          <ellipse cx="0" cy="115" rx="55" ry="14" fill="#000" opacity="0.4" class="day-only" />
          <ellipse cx="0" cy="115" rx="55" ry="14" fill="#000" opacity="0.75" class="night-only" />

          <!-- Two Heavy Timber Support Posts -->
          <rect x="-38" y="20" width="10" height="98" fill="#4a301a" stroke="#2b1a0d" stroke-width="1.5" class="day-only" />
          <rect x="28" y="20" width="10" height="98" fill="#4a301a" stroke="#2b1a0d" stroke-width="1.5" class="day-only" />
          <rect x="-38" y="20" width="10" height="98" fill="#141722" stroke="#0a0c12" stroke-width="1.5" class="night-only" />
          <rect x="28" y="20" width="10" height="98" fill="#141722" stroke="#0a0c12" stroke-width="1.5" class="night-only" />

          <!-- Heavy Wooden Board Frame -->
          <rect x="-56" y="-55" width="112" height="85" rx="3" fill="#3b2413" stroke="#221307" stroke-width="2.5" class="day-only" />
          <rect x="-56" y="-55" width="112" height="85" rx="3" fill="#0d111a" stroke="#06080e" stroke-width="2.5" class="night-only" />
          <!-- Inner Cork/Board Surface -->
          <rect x="-50" y="-49" width="100" height="73" fill="#684729" class="day-only" />
          <rect x="-50" y="-49" width="100" height="73" fill="#181e2b" class="night-only" />

          <!-- NOTICE 1: Yellowed Official Decree (Top Left) -->
          <g transform="translate(-42, -42)">
            <polygon points="0,0 48,-2 46,38 -2,36" fill="#fef3c7" stroke="#92400e" stroke-width="0.8" class="day-only" />
            <polygon points="0,0 48,-2 46,38 -2,36" fill="#332d1e" stroke="#544426" stroke-width="0.8" class="night-only" />
            <circle cx="2" cy="3" r="1.5" fill="#78350f" class="day-only" />
            <text x="23" y="10" text-anchor="middle" font-family="'Cinzel', serif" font-size="3.8" font-weight="700" fill="#78350f" class="day-only">ALL RESIDENTS</text>
            <text x="23" y="16" text-anchor="middle" font-family="'Cinzel', serif" font-size="3.5" font-weight="700" fill="#78350f" class="day-only">MUST LEAVE</text>
            <text x="23" y="23" text-anchor="middle" font-family="'Crimson Pro', serif" font-size="4" font-weight="600" fill="#92400e" class="day-only">BEFORE SUNSET</text>
            <text x="23" y="30" text-anchor="middle" font-family="'Crimson Pro', serif" font-size="3.2" font-weight="600" fill="#b45309" class="day-only">ORDER • 1978</text>

            <text x="23" y="10" text-anchor="middle" font-family="'Cinzel', serif" font-size="3.8" font-weight="700" fill="#cbd5e1" class="night-only">ALL RESIDENTS</text>
            <text x="23" y="16" text-anchor="middle" font-family="'Cinzel', serif" font-size="3.5" font-weight="700" fill="#cbd5e1" class="night-only">MUST LEAVE</text>
            <text x="23" y="23" text-anchor="middle" font-family="'Crimson Pro', serif" font-size="4" font-weight="600" fill="#94a3b8" class="night-only">BEFORE SUNSET</text>
            <text x="23" y="30" text-anchor="middle" font-family="'Crimson Pro', serif" font-size="3.2" font-weight="600" fill="#64748b" class="night-only">ORDER • 1978</text>
          </g>

          <!-- NOTICE 2: Faded Notice (Top Right) -->
          <g transform="translate(10, -40)">
            <polygon points="0,0 36,-1 34,34 -2,32" fill="#fee2e2" stroke="#b91c1c" stroke-width="0.8" class="day-only" />
            <polygon points="0,0 36,-1 34,34 -2,32" fill="#2d1a1c" stroke="#54282b" stroke-width="0.8" class="night-only" />
            <circle cx="2" cy="3" r="1.5" fill="#991b1b" class="day-only" />
            <text x="17" y="12" text-anchor="middle" font-family="'Cinzel', serif" font-size="3.2" font-weight="700" fill="#991b1b" class="day-only">DO NOT RETURN</text>
            <text x="17" y="20" text-anchor="middle" font-family="'Crimson Pro', serif" font-size="3.2" font-weight="600" fill="#b91c1c" class="day-only">UNTIL FURTHER</text>
            <text x="17" y="26" text-anchor="middle" font-family="'Crimson Pro', serif" font-size="3.2" font-weight="600" fill="#b91c1c" class="day-only">NOTICE</text>

            <text x="17" y="12" text-anchor="middle" font-family="'Cinzel', serif" font-size="3.2" font-weight="700" fill="#fca5a5" class="night-only">DO NOT RETURN</text>
            <text x="17" y="20" text-anchor="middle" font-family="'Crimson Pro', serif" font-size="3.2" font-weight="600" fill="#f87171" class="night-only">UNTIL FURTHER</text>
            <text x="17" y="26" text-anchor="middle" font-family="'Crimson Pro', serif" font-size="3.2" font-weight="600" fill="#f87171" class="night-only">NOTICE</text>
          </g>

          <!-- NOTICE 3: Torn Final Notice (Bottom Center) -->
          <g transform="translate(-20, -2)">
            <!-- Torn, ragged parchment scrap -->
            <polygon points="0,0 45,0 42,22 35,18 28,24 18,17 8,23 -2,18" fill="#fef9c3" stroke="#854d0e" stroke-width="0.8" class="day-only" />
            <polygon points="0,0 45,0 42,22 35,18 28,24 18,17 8,23 -2,18" fill="#292716" stroke="#4a441e" stroke-width="0.8" class="night-only" />
            <text x="21" y="9" text-anchor="middle" font-family="'Caveat', cursive" font-size="5" font-weight="700" fill="#713f12" class="day-only">...THE VILLAGE</text>
            <text x="21" y="16" text-anchor="middle" font-family="'Caveat', cursive" font-size="5" font-weight="700" fill="#dc2626" class="day-only">IS NOT EMPTY.</text>

            <text x="21" y="9" text-anchor="middle" font-family="'Caveat', cursive" font-size="5" font-weight="700" fill="#fde047" class="night-only">...THE VILLAGE</text>
            <text x="21" y="16" text-anchor="middle" font-family="'Caveat', cursive" font-size="5" font-weight="700" fill="#ef4444" class="night-only">IS NOT EMPTY.</text>
          </g>
        </g>
      </g>
    </svg>
  `;
}).call(this);
  },

  // 10. SCENE 09: The Abandoned House
  renderAbandonedHouseScene() {
    return (function renderAbandonedHouseScene() {
  return `
    <svg class="scene-illustration" viewBox="0 0 390 844" xmlns="http://www.w3.org/2000/svg">
      ${this.getAtmosphericSky('abandonedhouse')}

      <!-- Distant Village Rooflines Backdrop -->
      <g class="distant-landscape">
        <path class="day-only" fill="#9e714e" opacity="0.65" d="M0 430 Q100 405 200 420 T390 415 L390 490 L0 490 Z" />
        <path class="night-only" fill="#0c121e" opacity="0.8" d="M0 430 Q100 405 200 420 T390 415 L390 490 L0 490 Z" />
      </g>

      <!-- Veranda Stone Courtyard Ground -->
      <g id="abandoned-house-ground">
        <rect x="0" y="500" width="390" height="344" fill="url(#ground-dirt-day)" class="day-only" />
        <rect x="0" y="500" width="390" height="344" fill="url(#ground-dirt-night)" class="night-only" />

        <!-- Weathered Veranda Flagstone Floor -->
        <polygon points="10,530 380,510 390,844 0,844" fill="url(#pat-cobbles)" class="day-only" opacity="0.85" />
        <polygon points="10,530 380,510 390,844 0,844" fill="url(#pat-cobbles-night)" class="night-only" opacity="0.85" />
      </g>

      <!-- THE ABANDONED HOUSE FACADE & VERANDA -->
      <g class="abandoned-house-facade" transform="translate(15, 120)">
        <!-- Main Wall with Cracked Plaster -->
        <polygon points="0,420 0,60 360,40 360,400" fill="url(#plaster-cream-day)" stroke="#523924" stroke-width="2" class="day-only" />
        <polygon points="0,420 0,60 360,40 360,400" fill="url(#plaster-cream-night)" stroke="#121622" stroke-width="2" class="night-only" />
        <!-- Exposed Brickwork Patches -->
        <polygon points="15,90 75,80 80,140 20,150" fill="url(#pat-brick)" class="day-only" />
        <polygon points="15,90 75,80 80,140 20,150" fill="url(#pat-brick-night)" class="night-only" />
        <polygon points="265,240 335,230 340,310 270,320" fill="url(#pat-brick)" class="day-only" />
        <polygon points="265,240 335,230 340,310 270,320" fill="url(#pat-brick-night)" class="night-only" />

        <!-- Tiled Eaves Roof -->
        <polygon points="-10,65 370,45 365,25 -15,45" fill="url(#pat-khaprail)" class="day-only" />
        <polygon points="-10,65 370,45 365,25 -15,45" fill="url(#pat-khaprail-night)" class="night-only" />

        <!-- Upstairs Window with Night Silhouette Passing By -->
        <g id="upstairs-window-group" transform="translate(260, 75)">
          <rect x="0" y="0" width="48" height="62" rx="3" fill="#3b2413" class="day-only" />
          <rect x="0" y="0" width="48" height="62" rx="3" fill="#090d14" class="night-only" />
          <!-- NIGHT: Light that turns on with shadow crossing -->
          <rect x="3" y="3" width="42" height="56" rx="2" fill="#ffb443" opacity="0.85" filter="url(#glow-blur)" class="sq-lit-window night-only" />
          <!-- Silhouette crossing upstairs window -->
          <ellipse cx="24" cy="22" rx="7" ry="8" fill="#140b05" class="night-only flutter-slow" />
          <path d="M12 56 C12 36, 36 36, 36 56 Z" fill="#140b05" class="night-only flutter-slow" />
          <!-- Window Grille -->
          <line x1="24" y1="0" x2="24" y2="62" stroke="#221307" stroke-width="2" />
          <line x1="0" y1="31" x2="48" y2="31" stroke="#221307" stroke-width="2" />
        </g>

        <!-- Veranda Wooden Support Pillars (Carved Rajasthani Capitals) -->
        <!-- Left Pillar -->
        <rect x="18" y="160" width="16" height="260" fill="#4d321d" stroke="#2a180c" stroke-width="1.8" class="day-only" />
        <rect x="18" y="160" width="16" height="260" fill="#141722" stroke="#0a0c12" stroke-width="1.8" class="night-only" />
        <polygon points="10,160 42,160 36,175 16,175" fill="#5c3f27" class="day-only" />
        <polygon points="10,160 42,160 36,175 16,175" fill="#181e2a" class="night-only" />
        <!-- Right Pillar -->
        <rect x="325" y="150" width="16" height="260" fill="#4d321d" stroke="#2a180c" stroke-width="1.8" class="day-only" />
        <rect x="325" y="150" width="16" height="260" fill="#141722" stroke="#0a0c12" stroke-width="1.8" class="night-only" />
        <polygon points="317,150 349,150 343,165 323,165" fill="#5c3f27" class="day-only" />
        <polygon points="317,150 349,150 343,165 323,165" fill="#181e2a" class="night-only" />

        <!-- HOTSPOT 1: GROUND FLOOR VERANDA WINDOW (#hotspot-house-window) @ x=50%, y=38% (195, 320.7) -->
        <g id="hotspot-house-window" class="interactive-object house-window-assembly" transform="translate(180, 200)">
          <!-- Sandstone Window Frame -->
          <rect x="-60" y="-12" width="120" height="135" rx="3" fill="url(#sandstone-day)" stroke="#52351c" stroke-width="2.5" class="day-only" />
          <rect x="-60" y="-12" width="120" height="135" rx="3" fill="url(#sandstone-night)" stroke="#121622" stroke-width="2.5" class="night-only" />
          <!-- Dark Interior Behind Glass Panes -->
          <rect x="-52" y="0" width="104" height="118" fill="#0d1118" />

          <!-- Dusty Furniture & Shelves Visible Through Window Glass (DAY) -->
          <g class="day-only" opacity="0.6">
            <rect x="-42" y="55" width="45" height="40" fill="#241710" />
            <line x1="-48" y1="35" x2="38" y2="35" stroke="#3b2413" stroke-width="3" />
            <rect x="-25" y="18" width="12" height="17" fill="#8f6338" />
            <rect x="8" y="22" width="16" height="13" fill="#684729" />
          </g>

          <!-- HORROR 3: SHOCKING GHOST FACE SILHOUETTE BEHIND GLASS (#window-ghost-face) -->
          <g id="window-ghost-face" opacity="0" filter="url(#ghost-haze)" transform="translate(0, 48)">
            <!-- Cold Blue Ethereal Bloom -->
            <ellipse cx="0" cy="0" rx="36" ry="42" fill="#7ba5db" opacity="0.45" filter="url(#glow-blur)" />
            <!-- Pale Terrifying Visage -->
            <path d="M-22 -8 C-22 22, -12 36, 0 36 C12 36, 22 22, 22 -8 C22 -32, -22 -32, -22 -8 Z" fill="#e2e8f0" stroke="#64748b" stroke-width="1.8" />
            <!-- Wide Unblinking Black Eye Sockets Staring Through Glass -->
            <ellipse cx="-10" cy="-6" rx="5.5" ry="6.5" fill="#040608" />
            <circle cx="-10" cy="-7" r="1.5" fill="#ffffff" />
            <ellipse cx="10" cy="-6" rx="5.5" ry="6.5" fill="#040608" />
            <circle cx="10" cy="-7" r="1.5" fill="#ffffff" />
            <!-- Agonized Gaping Black Scream Mouth -->
            <ellipse cx="0" cy="18" rx="7" ry="12" fill="#040608" />
            <!-- Ghostly wisps of hair pressed to glass -->
            <path d="M-20 -25 Q-32 0 -22 25 M20 -25 Q32 0 22 25" stroke="#94a3b8" stroke-width="2.5" fill="none" opacity="0.75" />
          </g>

          <!-- Wooden Window Mullions & Transoms -->
          <line x1="0" y1="0" x2="0" y2="118" stroke="#3b2413" stroke-width="3" class="day-only" />
          <line x1="-52" y1="59" x2="52" y2="59" stroke="#3b2413" stroke-width="3" class="day-only" />
          <line x1="0" y1="0" x2="0" y2="118" stroke="#121622" stroke-width="3" class="night-only" />
          <line x1="-52" y1="59" x2="52" y2="59" stroke="#121622" stroke-width="3" class="night-only" />
          <!-- Diagonal Glass Sheen Highlights -->
          <line x1="-40" y1="10" x2="-10" y2="50" stroke="#fff" stroke-width="1.5" opacity="0.25" />
          <line x1="10" y1="10" x2="40" y2="50" stroke="#fff" stroke-width="1.5" opacity="0.25" />
        </g>

        <!-- HOTSPOT 3: VINTAGE FRAMED FAMILY PHOTOGRAPH ON WALL (#hotspot-family-photo) @ x=72%, y=56% (280.8, 472.6) -->
        <g id="hotspot-family-photo" class="interactive-object family-photo-assembly" transform="translate(265, 350)">
          <!-- Cast Shadow -->
          <polygon points="-2,2 48,0 46,60 -4,62" fill="#000" opacity="0.35" class="day-only" />
          <polygon points="-2,2 48,0 46,60 -4,62" fill="#000" opacity="0.7" class="night-only" />
          <!-- Weathered Dark Teak Frame (Tilted slightly on nail) -->
          <rect x="0" y="0" width="46" height="58" rx="2" fill="#3b2413" stroke="#221307" stroke-width="2" transform="rotate(-3)" class="day-only" />
          <rect x="0" y="0" width="46" height="58" rx="2" fill="#12151e" stroke="#080a0f" stroke-width="2" transform="rotate(-3)" class="night-only" />
          <!-- Sepia Faded 1970s Family Portrait -->
          <g transform="rotate(-3)">
            <rect x="4" y="4" width="38" height="50" fill="#d9c7af" class="day-only" />
            <rect x="4" y="4" width="38" height="50" fill="#2d2822" class="night-only" />
            <!-- Silhouetted Family of 4 Standing Stiffly -->
            <!-- Father -->
            <ellipse cx="14" cy="18" rx="3.5" ry="4" fill="#523924" class="day-only" />
            <polygon points="9,22 19,22 21,48 7,48" fill="#523924" class="day-only" />
            <ellipse cx="14" cy="18" rx="3.5" ry="4" fill="#161310" class="night-only" />
            <polygon points="9,22 19,22 21,48 7,48" fill="#161310" class="night-only" />
            <!-- Mother in Saree -->
            <ellipse cx="28" cy="20" rx="3.5" ry="4" fill="#684729" class="day-only" />
            <polygon points="23,24 33,24 35,48 21,48" fill="#684729" class="day-only" />
            <ellipse cx="28" cy="20" rx="3.5" ry="4" fill="#1c1814" class="night-only" />
            <polygon points="23,24 33,24 35,48 21,48" fill="#1c1814" class="night-only" />
            <!-- Two Small Children Standing in Front -->
            <ellipse cx="16" cy="30" rx="2.5" ry="3" fill="#3b2413" class="day-only" />
            <polygon points="12,33 20,33 21,48 11,48" fill="#3b2413" class="day-only" />
            <ellipse cx="25" cy="31" rx="2.5" ry="3" fill="#3b2413" class="day-only" />
            <polygon points="21,34 29,34 30,48 20,48" fill="#3b2413" class="day-only" />
            <ellipse cx="16" cy="30" rx="2.5" ry="3" fill="#0d0b08" class="night-only" />
            <polygon points="12,33 20,33 21,48 11,48" fill="#0d0b08" class="night-only" />
            <ellipse cx="25" cy="31" rx="2.5" ry="3" fill="#0d0b08" class="night-only" />
            <polygon points="21,34 29,34 30,48 20,48" fill="#0d0b08" class="night-only" />
            <!-- Cracked Glass Diagonal Fracture across photo -->
            <line x1="4" y1="12" x2="38" y2="46" stroke="#fff" stroke-width="1.2" opacity="0.6" />
          </g>
        </g>

        <!-- OLD WOODEN ARMCHAIR ON VERANDA (#hotspot-house-chair) -->
        <g id="hotspot-house-chair" class="interactive-object house-chair-assembly" transform="translate(65, 410)">
          <!-- Ground Cast Shadow -->
          <ellipse cx="0" cy="55" rx="32" ry="11" fill="#000" opacity="0.35" class="day-only" />
          <ellipse cx="0" cy="55" rx="32" ry="11" fill="#000" opacity="0.75" class="night-only" />
          <!-- Chair Legs -->
          <line x1="-18" y1="15" x2="-22" y2="52" stroke="#523924" stroke-width="3.5" class="day-only" />
          <line x1="18" y1="12" x2="16" y2="50" stroke="#523924" stroke-width="3.5" class="day-only" />
          <line x1="-18" y1="15" x2="-22" y2="52" stroke="#161c28" stroke-width="3.5" class="night-only" />
          <line x1="18" y1="12" x2="16" y2="50" stroke="#161c28" stroke-width="3.5" class="night-only" />
          <!-- Woven Cane Seat Platter -->
          <polygon points="-24,15 24,10 18,-6 -18,-4" fill="#a48259" stroke="#684e2f" stroke-width="2" class="day-only" />
          <polygon points="-24,15 24,10 18,-6 -18,-4" fill="#25241f" stroke="#12120f" stroke-width="2" class="night-only" />
          <!-- Curved Wooden Armrests -->
          <path d="M-22 12 Q-25 -8 -15 -18" stroke="#684729" stroke-width="3" fill="none" class="day-only" />
          <path d="M22 8 Q25 -10 15 -20" stroke="#684729" stroke-width="3" fill="none" class="day-only" />
          <path d="M-22 12 Q-25 -8 -15 -18" stroke="#181e2b" stroke-width="3" fill="none" class="night-only" />
          <path d="M22 8 Q25 -10 15 -20" stroke="#181e2b" stroke-width="3" fill="none" class="night-only" />
          <!-- High Slatted Backrest -->
          <line x1="-15" y1="-4" x2="-12" y2="-52" stroke="#523924" stroke-width="3" class="day-only" />
          <line x1="15" y1="-6" x2="12" y2="-55" stroke="#523924" stroke-width="3" class="day-only" />
          <line x1="-15" y1="-4" x2="-12" y2="-52" stroke="#161c28" stroke-width="3" class="night-only" />
          <line x1="15" y1="-6" x2="12" y2="-55" stroke="#161c28" stroke-width="3" class="night-only" />
          <rect x="-16" y="-56" width="30" height="7" rx="2" fill="#684729" class="day-only" />
          <rect x="-16" y="-56" width="30" height="7" rx="2" fill="#181e2b" class="night-only" />
        </g>
      </g>

      <!-- HOTSPOT 2: ABANDONED CHILD'S WOODEN PULL-TOY (#hotspot-children-toy, #toy-cart-mover) @ x=28%, y=74% (109.2, 624.6) -->
      <g id="toy-cart-mover" transform="translate(109, 625)">
        <g id="hotspot-children-toy" class="interactive-object child-toy-assembly">
          <!-- Cast Ground Shadow -->
          <ellipse cx="0" cy="18" rx="22" ry="7" fill="#000" opacity="0.35" class="day-only" />
          <ellipse cx="0" cy="18" rx="22" ry="7" fill="#000" opacity="0.75" class="night-only" />

          <!-- Wooden Toy Cart Body (Carved Little Bullock Cart) -->
          <polygon points="-16,4 16,0 14,-14 -14,-12" fill="#cf3b2b" stroke="#781d13" stroke-width="1.2" class="day-only" />
          <polygon points="-16,4 16,0 14,-14 -14,-12" fill="#4d140e" stroke="#240704" stroke-width="1.2" class="night-only" />

          <!-- Wooden Spool Wheels -->
          <circle cx="-12" cy="10" r="7" fill="#d99f36" stroke="#7a5518" stroke-width="1" class="day-only" />
          <circle cx="12" cy="8" r="7" fill="#d99f36" stroke="#7a5518" stroke-width="1" class="day-only" />
          <circle cx="-12" cy="10" r="7" fill="#4a3713" stroke="#1e1607" stroke-width="1" class="night-only" />
          <circle cx="12" cy="8" r="7" fill="#4a3713" stroke="#1e1607" stroke-width="1" class="night-only" />
          <circle cx="-12" cy="10" r="2" fill="#3b2413" class="day-only" />
          <circle cx="12" cy="8" r="2" fill="#3b2413" class="day-only" />
          <circle cx="-12" cy="10" r="2" fill="#0e0a05" class="night-only" />
          <circle cx="12" cy="8" r="2" fill="#0e0a05" class="night-only" />

          <!-- Coiled Pull-String Trailing on Ground -->
          <path d="M16 2 Q32 12 45 4 Q55 18 68 8" stroke="#d5c8b7" stroke-width="1.2" fill="none" class="day-only" />
          <path d="M16 2 Q32 12 45 4 Q55 18 68 8" stroke="#48566a" stroke-width="1.2" fill="none" class="night-only" />
        </g>
      </g>
    </svg>
  `;
}).call(this);
  },

  // 11. SCENE 10: The Old School
  renderOldSchoolScene() {
    return (function renderOldSchoolScene() {
  return `
    <svg class="scene-illustration" viewBox="0 0 390 844" xmlns="http://www.w3.org/2000/svg">
      ${this.getAtmosphericSky('oldschool')}

      <!-- Distant Village Backdrop -->
      <g class="distant-landscape">
        <path class="day-only" fill="#9e714e" opacity="0.65" d="M0 430 Q100 405 200 420 T390 415 L390 490 L0 490 Z" />
        <path class="night-only" fill="#0c121e" opacity="0.8" d="M0 430 Q100 405 200 420 T390 415 L390 490 L0 490 Z" />
      </g>

      <!-- Dusty School Courtyard Ground -->
      <g id="school-ground">
        <rect x="0" y="500" width="390" height="344" fill="url(#ground-dirt-day)" class="day-only" />
        <rect x="0" y="500" width="390" height="344" fill="url(#ground-dirt-night)" class="night-only" />
        <ellipse cx="195" cy="650" rx="180" ry="110" fill="url(#pat-cobbles)" class="day-only" opacity="0.65" />
        <ellipse cx="195" cy="650" rx="180" ry="110" fill="url(#pat-cobbles-night)" class="night-only" opacity="0.65" />
      </g>

      <!-- Courtyard Peepal Tree with Branch Supporting the Old Swing -->
      <g id="school-tree-branch" transform="translate(300, 260)">
        <path d="M120 180 Q80 80 20 40 Q-40 20 -120 25" stroke="#3b2413" stroke-width="20" fill="none" stroke-linecap="round" class="day-only" />
        <path d="M120 180 Q80 80 20 40 Q-40 20 -120 25" stroke="#121622" stroke-width="20" fill="none" stroke-linecap="round" class="night-only" />
        <!-- Foliage cluster -->
        <ellipse cx="30" cy="15" rx="75" ry="45" fill="#2d4427" class="day-only" />
        <ellipse cx="30" cy="15" rx="75" ry="45" fill="#0e1711" class="night-only" />
      </g>

      <!-- HOTSPOT 2: THE OLD CHILDREN'S SWING (#hotspot-school-swing, #school-swing-rig) @ x=78%, y=62% (304.2, 523.3) -->
      <g id="school-swing-rig" class="school-swing-rig-anim" transform="translate(304, 305)">
        <g id="hotspot-school-swing" class="interactive-object school-swing-assembly">
          <!-- Two Long Ropes Hanging Down from Tree Branch -->
          <line x1="-14" y1="0" x2="-14" y2="215" stroke="#7a5535" stroke-width="2.5" class="day-only" />
          <line x1="14" y1="0" x2="14" y2="215" stroke="#7a5535" stroke-width="2.5" class="day-only" />
          <line x1="-14" y1="0" x2="-14" y2="215" stroke="#222a3a" stroke-width="2.5" class="night-only" />
          <line x1="14" y1="0" x2="14" y2="215" stroke="#222a3a" stroke-width="2.5" class="night-only" />

          <!-- Weathered Wooden Swing Plank Seat -->
          <g transform="translate(0, 215)">
            <!-- Ground Cast Shadow -->
            <ellipse cx="0" cy="45" rx="28" ry="8" fill="#000" opacity="0.35" class="day-only" />
            <ellipse cx="0" cy="45" rx="28" ry="8" fill="#000" opacity="0.75" class="night-only" />
            <!-- Wood Plank -->
            <polygon points="-24,6 24,4 20,-4 -20,-2" fill="#5c3f27" stroke="#362212" stroke-width="2" class="day-only" />
            <polygon points="-24,6 24,4 20,-4 -20,-2" fill="#181e2b" stroke="#0a0d14" stroke-width="2" class="night-only" />
            <!-- Knotted rope ends beneath plank -->
            <circle cx="-14" cy="10" r="3" fill="#7a5535" class="day-only" />
            <circle cx="14" cy="8" r="3" fill="#7a5535" class="day-only" />
            <circle cx="-14" cy="10" r="3" fill="#222a3a" class="night-only" />
            <circle cx="14" cy="8" r="3" fill="#222a3a" class="night-only" />
          </g>
        </g>
      </g>

      <!-- THE OLD VILLAGE SCHOOLHOUSE BUILDING -->
      <g class="schoolhouse-facade" transform="translate(10, 160)">
        <!-- Whitewashed Classroom Wall with Peeling Plaster -->
        <polygon points="0,70 280,50 280,380 0,400" fill="url(#plaster-cream-day)" stroke="#523924" stroke-width="2" class="day-only" />
        <polygon points="0,70 280,50 280,380 0,400" fill="url(#plaster-cream-night)" stroke="#121622" stroke-width="2" class="night-only" />
        <polygon points="12,95 65,85 70,145 18,155" fill="url(#pat-brick)" class="day-only" />
        <polygon points="12,95 65,85 70,145 18,155" fill="url(#pat-brick-night)" class="night-only" />
        <!-- Tiled Eaves -->
        <polygon points="-10,68 290,48 285,30 -15,50" fill="url(#pat-khaprail)" class="day-only" />
        <polygon points="-10,68 290,48 285,30 -15,50" fill="url(#pat-khaprail-night)" class="night-only" />

        <!-- Arched Classroom Doorway on Right -->
        <g id="school-doorway-group" transform="translate(200, 160)">
          <!-- Doorway Opening -->
          <path d="M0 220 L0 50 C0 15, 65 15, 65 50 L65 220 Z" fill="#120c07" stroke="#52351c" stroke-width="2" class="day-only" />
          <path d="M0 220 L0 50 C0 15, 65 15, 65 50 L65 220 Z" fill="#040609" stroke="#121622" stroke-width="2" class="night-only" />

          <!-- DOORWAY RUNNER GHOST (#school-doorway-runner) Sprints past doorway -->
          <g id="school-doorway-runner" opacity="0" filter="url(#ghost-haze)" transform="translate(-10, 45)">
            <ellipse cx="28" cy="18" rx="8" ry="9" fill="#e2e8f0" />
            <polygon points="20,27 36,27 42,75 14,75" fill="#cbd5e1" />
            <!-- Sprinting Legs -->
            <path d="M22 75 L38 105 L52 98" stroke="#cbd5e1" stroke-width="4.5" fill="none" stroke-linecap="round" />
            <path d="M28 75 L12 108 L-4 95" stroke="#cbd5e1" stroke-width="4.5" fill="none" stroke-linecap="round" />
            <!-- Motion Blur Streamers -->
            <line x1="-15" y1="45" x2="15" y2="45" stroke="#93c5fd" stroke-width="3" opacity="0.6" />
            <line x1="-25" y1="65" x2="5" y2="65" stroke="#93c5fd" stroke-width="3" opacity="0.6" />
          </g>
        </g>

        <!-- HOTSPOT 3: RUSTED IRON SCHOOL BELL GONG (#hotspot-school-bell) @ x=22%, y=42% (85.8, 354.5) -->
        <g id="hotspot-school-bell" class="interactive-object school-bell-assembly" transform="translate(75, 195)">
          <!-- Wooden Mounting Bracket -->
          <rect x="-8" y="-12" width="16" height="24" fill="#3b2413" class="day-only" />
          <rect x="-8" y="-12" width="16" height="24" fill="#121622" class="night-only" />
          <line x1="0" y1="0" x2="0" y2="28" stroke="#241710" stroke-width="2.5" class="day-only" />
          <line x1="0" y1="0" x2="0" y2="28" stroke="#0a0d14" stroke-width="2.5" class="night-only" />
          <!-- Heavy Rusted Iron Disk Gong -->
          <circle cx="0" cy="42" r="16" fill="#523928" stroke="#2b1a0d" stroke-width="2" class="day-only" />
          <circle cx="0" cy="42" r="16" fill="#161b26" stroke="#080a10" stroke-width="2" class="night-only" />
          <!-- Striker Hammer hanging beside gong -->
          <line x1="16" y1="20" x2="16" y2="52" stroke="#4a301a" stroke-width="2" class="day-only" />
          <circle cx="16" cy="52" r="4" fill="#2b1a0d" class="day-only" />
          <line x1="16" y1="20" x2="16" y2="52" stroke="#141822" stroke-width="2" class="night-only" />
          <circle cx="16" cy="52" r="4" fill="#080a10" class="night-only" />
        </g>

        <!-- HOTSPOT 1: THE SLATE BLACKBOARD (#hotspot-school-blackboard) @ x=52%, y=50% (202.8, 422) -->
        <g id="hotspot-school-blackboard" class="interactive-object blackboard-assembly" transform="translate(193, 262)">
          <!-- Cast Shadow -->
          <rect x="-68" y="-48" width="140" height="96" rx="4" fill="#000" opacity="0.35" class="day-only" />
          <rect x="-68" y="-48" width="140" height="96" rx="4" fill="#000" opacity="0.75" class="night-only" />

          <!-- Heavy Teak Wood Frame -->
          <rect x="-70" y="-50" width="140" height="96" rx="3" fill="#4d321d" stroke="#2b1a0d" stroke-width="2.5" class="day-only" />
          <rect x="-70" y="-50" width="140" height="96" rx="3" fill="#121622" stroke="#080a0f" stroke-width="2.5" class="night-only" />

          <!-- Dark Slate Blackboard Surface -->
          <rect x="-64" y="-44" width="128" height="84" fill="#1b2420" stroke="#0d1411" stroke-width="1.5" />
          <!-- Chalk Dust Smudges -->
          <path d="M-50 -30 Q-20 -20 20 -25 Q45 -30 50 -20" stroke="#fff" stroke-width="6" fill="none" opacity="0.08" />
          <path d="M-40 10 Q0 15 40 12" stroke="#fff" stroke-width="8" fill="none" opacity="0.06" />

          <!-- ORIGINAL CHALK TEXT (#blackboard-original-text) -->
          <g id="blackboard-original-text">
            <text x="0" y="-18" text-anchor="middle" font-family="'Caveat', cursive" font-size="12" font-weight="700" fill="#f8fafc" letter-spacing="1">CLASS DISMISSED — 1978</text>
            <line x1="-52" y1="-10" x2="52" y2="-10" stroke="#cbd5e1" stroke-width="1" opacity="0.4" />
            <!-- In much newer-looking chalk handwriting -->
            <text x="0" y="16" text-anchor="middle" font-family="'Caveat', cursive" font-size="11" font-weight="700" fill="#fef08a" letter-spacing="1">THEY NEVER CAME BACK.</text>
          </g>

          <!-- HORROR CHALK REVEAL (#blackboard-horror-writing) -->
          <g id="blackboard-horror-writing">
            <text id="bb-run-1" x="-35" y="-18" text-anchor="middle" font-family="'Caveat', cursive" font-size="15" font-weight="700" fill="#ef4444" opacity="0">RUN.</text>
            <text id="bb-run-2" x="0" y="-2" text-anchor="middle" font-family="'Caveat', cursive" font-size="16" font-weight="700" fill="#ef4444" opacity="0">RUN.</text>
            <text id="bb-run-3" x="35" y="14" text-anchor="middle" font-family="'Caveat', cursive" font-size="17" font-weight="700" fill="#ef4444" opacity="0">RUN.</text>
            <text id="bb-he-is-here" x="0" y="32" text-anchor="middle" font-family="'Cinzel', serif" font-size="12" font-weight="900" fill="#dc2626" opacity="0" letter-spacing="2">HE IS HERE.</text>
          </g>

          <!-- Chalk Ledge at Bottom with Chalk Pieces -->
          <rect x="-64" y="40" width="128" height="6" fill="#3b2413" class="day-only" />
          <rect x="-64" y="40" width="128" height="6" fill="#0d111a" class="night-only" />
          <!-- White & Yellow Chalk Stubs -->
          <rect x="-30" y="38" width="8" height="2.5" rx="1" fill="#fff" />
          <rect x="-10" y="38" width="6" height="2.5" rx="1" fill="#fde047" />
        </g>

        <!-- DUSTY STUDENT WOODEN DESK & BENCH (#hotspot-school-desk) -->
        <g id="hotspot-school-desk" class="interactive-object school-desk-assembly" transform="translate(60, 360)">
          <!-- Ground Cast Shadow -->
          <ellipse cx="0" cy="50" rx="42" ry="12" fill="#000" opacity="0.35" class="day-only" />
          <ellipse cx="0" cy="50" rx="42" ry="12" fill="#000" opacity="0.75" class="night-only" />
          <!-- Desk Surface -->
          <polygon points="-38,0 38,-4 32,24 -34,28" fill="#5c3f27" stroke="#362212" stroke-width="2" class="day-only" />
          <polygon points="-38,0 38,-4 32,24 -34,28" fill="#181e2b" stroke="#0a0d14" stroke-width="2" class="night-only" />
          <!-- Inkwell Hole in Desk -->
          <ellipse cx="22" cy="6" rx="4" ry="2.5" fill="#16130f" />
          <!-- Desk Legs -->
          <line x1="-32" y1="28" x2="-35" y2="48" stroke="#4a301a" stroke-width="3" class="day-only" />
          <line x1="28" y1="24" x2="25" y2="46" stroke="#4a301a" stroke-width="3" class="day-only" />
          <line x1="-32" y1="28" x2="-35" y2="48" stroke="#121622" stroke-width="3" class="night-only" />
          <line x1="28" y1="24" x2="25" y2="46" stroke="#121622" stroke-width="3" class="night-only" />
        </g>
      </g>
    </svg>
  `;
}).call(this);
  },

  // 12. SCENE 11: The Forest Edge
  renderForestEdgeScene() {
    return (function renderForestEdgeScene() {
  return `
    <svg class="scene-illustration" viewBox="0 0 390 844" xmlns="http://www.w3.org/2000/svg">
      ${this.getAtmosphericSky('forestedge')}

      <!-- Deep Jungle Understory Ground -->
      <g id="forest-ground">
        <rect x="0" y="460" width="390" height="384" fill="url(#ground-dirt-day)" class="day-only" />
        <rect x="0" y="460" width="390" height="384" fill="url(#ground-dirt-night)" class="night-only" />

        <!-- HOTSPOT 2: OVERGROWN DIRT PATH WINDING INTO TREES (#hotspot-forest-path) @ x=58%, y=70% (226.2, 590.8) -->
        <g id="hotspot-forest-path" class="interactive-object forest-path-assembly">
          <path d="M120 844 Q170 700 220 620 Q250 540 280 470 L330 470 Q280 550 250 640 Q210 730 200 844 Z" 
                fill="#8f6338" opacity="0.85" class="day-only" />
          <path d="M120 844 Q170 700 220 620 Q250 540 280 470 L330 470 Q280 550 250 640 Q210 730 200 844 Z" 
                fill="#121724" opacity="0.85" class="night-only" />
          <!-- Dry Fallen Leaves & Twigs on Path -->
          <g class="day-only" fill="#6e3d1c" opacity="0.75">
            <ellipse cx="170" cy="740" rx="6" ry="2.5" />
            <ellipse cx="210" cy="670" rx="5" ry="2" />
            <ellipse cx="245" cy="580" rx="4" ry="1.8" />
            <ellipse cx="270" cy="520" rx="3.5" ry="1.5" />
          </g>
          <g class="night-only" fill="#090c14" opacity="0.8">
            <ellipse cx="170" cy="740" rx="6" ry="2.5" />
            <ellipse cx="210" cy="670" rx="5" ry="2" />
            <ellipse cx="245" cy="580" rx="4" ry="1.8" />
            <ellipse cx="270" cy="520" rx="3.5" ry="1.5" />
          </g>
        </g>
      </g>

      <!-- HOTSPOT 3: DENSE LOOMING FOREST CANOPY & GNARLED TREES (#hotspot-forest-trees) @ x=50%, y=28% (195, 236.3) -->
      <g id="hotspot-forest-trees" class="interactive-object forest-trees-assembly">
        <!-- Background Tree Trunks (Distant Layer) -->
        <g stroke-linecap="round">
          <!-- Tree 1 (Far Left) -->
          <path d="M30 480 Q45 320 25 180" stroke="#362215" stroke-width="22" fill="none" class="day-only" />
          <path d="M30 480 Q45 320 25 180" stroke="#0e121a" stroke-width="22" fill="none" class="night-only" />
          <!-- Tree 2 (Mid Left) -->
          <path d="M125 480 Q110 330 135 160" stroke="#3b2618" stroke-width="24" fill="none" class="day-only" />
          <path d="M125 480 Q110 330 135 160" stroke="#10141e" stroke-width="24" fill="none" class="night-only" />
          <!-- Tree 3 (Mid Right) -->
          <path d="M260 480 Q280 340 250 170" stroke="#362215" stroke-width="26" fill="none" class="day-only" />
          <path d="M260 480 Q280 340 250 170" stroke="#0e121a" stroke-width="26" fill="none" class="night-only" />
          <!-- Tree 4 (Far Right) -->
          <path d="M350 480 Q335 320 360 160" stroke="#311d12" stroke-width="28" fill="none" class="day-only" />
          <path d="M350 480 Q335 320 360 160" stroke="#0a0e14" stroke-width="28" fill="none" class="night-only" />
        </g>

        <!-- HORROR: 3 RUNNING FIGURES SPRINTING DEEP BETWEEN THE TREES -->
        <!-- Runner 1 (Deep background left-to-right) -->
        <g id="forest-runner-1" opacity="0" filter="url(#ghost-haze)" transform="translate(60, 360) scale(0.65)">
          <ellipse cx="20" cy="15" rx="6" ry="7" fill="#e2e8f0" />
          <polygon points="12,22 28,22 32,60 8,60" fill="#cbd5e1" />
          <line x1="16" y1="60" x2="30" y2="85" stroke="#cbd5e1" stroke-width="4" stroke-linecap="round" />
          <line x1="24" y1="60" x2="10" y2="85" stroke="#cbd5e1" stroke-width="4" stroke-linecap="round" />
        </g>
        <!-- Runner 2 (Mid background right-to-left) -->
        <g id="forest-runner-2" opacity="0" filter="url(#ghost-haze)" transform="translate(240, 350) scale(0.65) scaleX(-1)">
          <ellipse cx="20" cy="15" rx="6" ry="7" fill="#e2e8f0" />
          <polygon points="12,22 28,22 32,60 8,60" fill="#cbd5e1" />
          <line x1="16" y1="60" x2="30" y2="85" stroke="#cbd5e1" stroke-width="4" stroke-linecap="round" />
          <line x1="24" y1="60" x2="10" y2="85" stroke="#cbd5e1" stroke-width="4" stroke-linecap="round" />
        </g>
        <!-- Runner 3 (Center background sprinting away) -->
        <g id="forest-runner-3" opacity="0" filter="url(#ghost-haze)" transform="translate(180, 380) scale(0.55)">
          <ellipse cx="20" cy="15" rx="6" ry="7" fill="#e2e8f0" />
          <polygon points="12,22 28,22 30,55 10,55" fill="#cbd5e1" />
          <line x1="15" y1="55" x2="28" y2="78" stroke="#cbd5e1" stroke-width="3.5" stroke-linecap="round" />
          <line x1="25" y1="55" x2="12" y2="78" stroke="#cbd5e1" stroke-width="3.5" stroke-linecap="round" />
        </g>

        <!-- HORROR: 3 PAIRS OF GLOWING RED/AMBER EYES IN DEEP UNDERGROWTH -->
        <g id="forest-eyes-pair-1" opacity="0" filter="url(#glow-blur)" transform="translate(65, 410)">
          <ellipse cx="0" cy="0" rx="2.5" ry="3" fill="#ef4444" />
          <circle cx="0" cy="0" r="0.8" fill="#fff" />
          <ellipse cx="8" cy="0" rx="2.5" ry="3" fill="#ef4444" />
          <circle cx="8" cy="0" r="0.8" fill="#fff" />
        </g>
        <g id="forest-eyes-pair-2" opacity="0" filter="url(#glow-blur)" transform="translate(195, 385)">
          <ellipse cx="0" cy="0" rx="2.5" ry="3.2" fill="#f59e0b" />
          <circle cx="0" cy="0" r="0.8" fill="#fff" />
          <ellipse cx="9" cy="0" rx="2.5" ry="3.2" fill="#f59e0b" />
          <circle cx="9" cy="0" r="0.8" fill="#fff" />
        </g>
        <g id="forest-eyes-pair-3" opacity="0" filter="url(#glow-blur)" transform="translate(325, 400)">
          <ellipse cx="0" cy="0" rx="2.5" ry="3" fill="#ef4444" />
          <circle cx="0" cy="0" r="0.8" fill="#fff" />
          <ellipse cx="8" cy="0" rx="2.5" ry="3" fill="#ef4444" />
          <circle cx="8" cy="0" r="0.8" fill="#fff" />
        </g>

        <!-- Massive Tangled Foliage Canopy Layers Blocking Sky -->
        <g class="day-only">
          <ellipse cx="70" cy="110" rx="110" ry="75" fill="#1b2a1a" />
          <ellipse cx="200" cy="95" rx="125" ry="75" fill="#20331e" />
          <ellipse cx="320" cy="115" rx="115" ry="75" fill="#1b2a1a" />
          <!-- Mid layer -->
          <ellipse cx="140" cy="140" rx="100" ry="60" fill="#2d4627" />
          <ellipse cx="260" cy="135" rx="105" ry="60" fill="#2d4627" />
          <!-- Hanging tangled jungle vines -->
          <path d="M45 140 Q40 280 48 420" stroke="#2b1a0f" stroke-width="3" fill="none" />
          <path d="M150 160 Q158 290 152 400" stroke="#2b1a0f" stroke-width="2.5" fill="none" />
          <path d="M295 150 Q288 280 292 410" stroke="#2b1a0f" stroke-width="3" fill="none" />
        </g>
        <g class="night-only">
          <ellipse cx="70" cy="110" rx="110" ry="75" fill="#080e0a" />
          <ellipse cx="200" cy="95" rx="125" ry="75" fill="#0b130e" />
          <ellipse cx="320" cy="115" rx="115" ry="75" fill="#080e0a" />
          <ellipse cx="140" cy="140" rx="100" ry="60" fill="#0e1711" />
          <ellipse cx="260" cy="135" rx="105" ry="60" fill="#0e1711" />
          <path d="M45 140 Q40 280 48 420" stroke="#080a0f" stroke-width="3" fill="none" />
          <path d="M150 160 Q158 290 152 400" stroke="#080a0f" stroke-width="2.5" fill="none" />
          <path d="M295 150 Q288 280 292 410" stroke="#080a0f" stroke-width="3" fill="none" />
        </g>

        <!-- HORROR: SUDDEN FOREGROUND RUNNER DASHING ACROSS CAMERA (#forest-foreground-runner) -->
        <g id="forest-foreground-runner" opacity="0" filter="url(#ghost-haze)" transform="translate(-180, 520) scale(1.1)">
          <ellipse cx="35" cy="20" rx="12" ry="14" fill="#e2e8f0" stroke="#64748b" stroke-width="1.5" />
          <polygon points="20,32 50,32 60,110 10,110" fill="#cbd5e1" />
          <path d="M28 110 L56 165 L82 152" stroke="#cbd5e1" stroke-width="7" fill="none" stroke-linecap="round" />
          <path d="M42 110 L15 168 L-14 150" stroke="#cbd5e1" stroke-width="7" fill="none" stroke-linecap="round" />
          <line x1="-35" y1="70" x2="15" y2="70" stroke="#93c5fd" stroke-width="5" opacity="0.6" />
        </g>
      </g>

      <!-- HOTSPOT 1: SLANTED ROTTED WARNING SIGNPOST (#hotspot-forest-sign) @ x=30%, y=64% (117, 540.2) -->
      <g id="hotspot-forest-sign" class="interactive-object forest-sign-assembly" transform="translate(117, 540)">
        <!-- Cast Ground Shadow -->
        <ellipse cx="0" cy="85" rx="35" ry="12" fill="#000" opacity="0.4" class="day-only" />
        <ellipse cx="0" cy="85" rx="35" ry="12" fill="#000" opacity="0.75" class="night-only" />

        <!-- Weathered Wooden Post (Leaning slightly) -->
        <line x1="0" y1="0" x2="-6" y2="85" stroke="#4d321d" stroke-width="7" stroke-linecap="round" class="day-only" />
        <line x1="0" y1="0" x2="-6" y2="85" stroke="#121622" stroke-width="7" stroke-linecap="round" class="night-only" />

        <!-- Slanted Weathered Warning Board (With Jagged Rotted Edges & Claw Scratches) -->
        <g transform="rotate(-6)">
          <polygon points="-58,-28 58,-32 55,22 -55,26" fill="#3b2413" stroke="#221307" stroke-width="2" class="day-only" />
          <polygon points="-58,-28 58,-32 55,22 -55,26" fill="#0d111a" stroke="#06080e" stroke-width="2" class="night-only" />
          <polygon points="-54,-25 54,-29 51,19 -51,23" fill="url(#pat-wood)" class="day-only" opacity="0.8" />
          <polygon points="-54,-25 54,-29 51,19 -51,23" fill="url(#pat-wood-night)" class="night-only" opacity="0.8" />

          <!-- Warning Inscriptions -->
          <text x="0" y="-12" text-anchor="middle" font-family="'Cinzel', serif" font-size="6.5" font-weight="700" letter-spacing="1" fill="#ef4444">DO NOT PROCEED</text>
          <text x="0" y="-2" text-anchor="middle" font-family="'Cinzel', serif" font-size="5.5" font-weight="700" letter-spacing="1" fill="#ef4444">PAST THIS POINT</text>
          <text x="0" y="12" text-anchor="middle" font-family="'Crimson Pro', serif" font-size="7.5" font-weight="600" fill="#e8d5b5" class="day-only">आगे मत जाओ</text>
          <text x="0" y="12" text-anchor="middle" font-family="'Crimson Pro', serif" font-size="7.5" font-weight="600" fill="#94a3b8" class="night-only">आगे मत जाओ</text>

          <!-- 4 Vicious Claw Mark Gouges Across the Board -->
          <path d="M-40 -20 L-25 15 M-30 -22 L-15 13 M-20 -24 L-5 11 M-10 -23 L5 12" stroke="#7f1d1d" stroke-width="1.8" stroke-linecap="round" />
        </g>
      </g>
    </svg>
  `;
}).call(this);
  },

  // 13. SCENE 12: The Small Shrine
  renderSmallShrineScene() {
    return (function renderSmallShrineScene() {
  return `
    <svg class="scene-illustration" viewBox="0 0 390 844" xmlns="http://www.w3.org/2000/svg">
      ${this.getAtmosphericSky('smallshrine')}

      <!-- Secluded Forest Clearing Backdrop -->
      <g class="distant-landscape">
        <path class="day-only" fill="#9e714e" opacity="0.65" d="M0 450 Q100 425 200 440 T390 435 L390 510 L0 510 Z" />
        <path class="night-only" fill="#0c121e" opacity="0.8" d="M0 450 Q100 425 200 440 T390 435 L390 510 L0 510 Z" />
      </g>

      <!-- Forest Clearing Ground Plane -->
      <g id="shrine-ground">
        <rect x="0" y="500" width="390" height="344" fill="url(#ground-dirt-day)" class="day-only" />
        <rect x="0" y="500" width="390" height="344" fill="url(#ground-dirt-night)" class="night-only" />

        <!-- Circular Flagstone Paved Altar Platform -->
        <ellipse cx="195" cy="640" rx="160" ry="85" fill="url(#pat-cobbles)" class="day-only" opacity="0.75" />
        <ellipse cx="195" cy="640" rx="160" ry="85" fill="url(#pat-cobbles-night)" class="night-only" opacity="0.75" />
      </g>

      <!-- THE ANCIENT ROADSIDE STONE SHRINE (DEVAL) -->
      <g id="roadside-shrine-complex" transform="translate(195, 230)">
        <!-- Ground Cast Shadow -->
        <ellipse cx="0" cy="330" rx="110" ry="32" fill="#000" opacity="0.4" class="day-only" />
        <ellipse cx="0" cy="330" rx="110" ry="32" fill="#000" opacity="0.8" class="night-only" />

        <!-- Carved Sandstone Ribbed Dome Canopy -->
        <g id="shrine-dome" transform="translate(0, 40)">
          <!-- Ribbed Domed Chhatri Roof -->
          <path d="M-65 70 C-65 0, 65 0, 65 70 Z" fill="url(#sandstone-day)" stroke="#52351c" stroke-width="2" class="day-only" />
          <path d="M-65 70 C-65 0, 65 0, 65 70 Z" fill="url(#sandstone-night)" stroke="#121622" stroke-width="2" class="night-only" />
          <!-- Dome Ribs -->
          <path d="M-40 68 C-40 18, 0 10, 0 0" stroke="#3b2413" stroke-width="1.8" fill="none" class="day-only" />
          <path d="M40 68 C40 18, 0 10, 0 0" stroke="#3b2413" stroke-width="1.8" fill="none" class="day-only" />
          <path d="M-40 68 C-40 18, 0 10, 0 0" stroke="#0a0d14" stroke-width="1.8" fill="none" class="night-only" />
          <path d="M40 68 C40 18, 0 10, 0 0" stroke="#0a0d14" stroke-width="1.8" fill="none" class="night-only" />
          <!-- Brass Kalash Finial Pot at Top -->
          <ellipse cx="0" cy="-6" rx="8" ry="6" fill="#d99f36" stroke="#7a5518" stroke-width="1.2" class="day-only" />
          <line x1="0" y1="-12" x2="0" y2="-24" stroke="#d99f36" stroke-width="2.5" class="day-only" />
          <ellipse cx="0" cy="-6" rx="8" ry="6" fill="#423317" stroke="#1c160b" stroke-width="1.2" class="night-only" />
          <line x1="0" y1="-12" x2="0" y2="-24" stroke="#423317" stroke-width="2.5" class="night-only" />
          <!-- Cornice Lintel -->
          <rect x="-72" y="70" width="144" height="16" rx="2" fill="url(#sandstone-highlight)" stroke="#52351c" stroke-width="2" class="day-only" />
          <rect x="-72" y="70" width="144" height="16" rx="2" fill="#2d3750" stroke="#121622" stroke-width="2" class="night-only" />
        </g>

        <!-- Four Supporting Carved Sandstone Pillars -->
        <!-- Left Pillar -->
        <rect x="-60" y="126" width="16" height="185" fill="url(#sandstone-day)" stroke="#52351c" stroke-width="1.8" class="day-only" />
        <rect x="-60" y="126" width="16" height="185" fill="url(#sandstone-night)" stroke="#121622" stroke-width="1.8" class="night-only" />
        <!-- Right Pillar -->
        <rect x="44" y="126" width="16" height="185" fill="url(#sandstone-day)" stroke="#52351c" stroke-width="1.8" class="day-only" />
        <rect x="44" y="126" width="16" height="185" fill="url(#sandstone-night)" stroke="#121622" stroke-width="1.8" class="night-only" />

        <!-- HOTSPOT 4: SMALL HANGING BRASS BELL (#hotspot-shrine-bell) -->
        <g id="hotspot-shrine-bell" class="interactive-object shrine-bell-assembly" transform="translate(0, 126)">
          <line x1="0" y1="0" x2="0" y2="18" stroke="#3b2413" stroke-width="2" class="day-only" />
          <line x1="0" y1="0" x2="0" y2="18" stroke="#121622" stroke-width="2" class="night-only" />
          <!-- Bell Body -->
          <path d="M-6 18 C-8 24, -14 36, -16 42 L16 42 C14 36, 8 24, 6 18 Z" fill="#d99f36" stroke="#7a5518" stroke-width="1.4" class="day-only" />
          <path d="M-6 18 C-8 24, -14 36, -16 42 L16 42 C14 36, 8 24, 6 18 Z" fill="#423317" stroke="#1c160b" stroke-width="1.4" class="night-only" />
          <ellipse cx="0" cy="42" rx="16" ry="4.5" fill="#bfa042" stroke="#7a5518" stroke-width="1.2" class="day-only" />
          <ellipse cx="0" cy="42" rx="16" ry="4.5" fill="#362c16" stroke="#1c160b" stroke-width="1.2" class="night-only" />
        </g>

        <!-- Dark Inner Sanctum Niche -->
        <rect x="-40" y="140" width="80" height="165" fill="#080a0f" stroke="#16120b" stroke-width="1.8" />

        <!-- HOTSPOT: ANCIENT CARVED DEITY IDOL (#hotspot-shrine-idol) Inside Sanctum Niche -->
        <g id="hotspot-shrine-idol" class="interactive-object shrine-idol-assembly" transform="translate(0, 230)">
          <!-- Black Stone Deity Figure (Bhairav / Devi) with Vermilion Smear -->
          <ellipse cx="0" cy="18" rx="22" ry="10" fill="#181d29" stroke="#080a0f" stroke-width="1.4" />
          <path d="M-14 18 C-14 -15, -8 -35, 0 -35 C8 -35, 14 -15, 14 18 Z" fill="#1b202e" stroke="#080a0f" stroke-width="1.5" />
          <!-- Smeared Thick Red Sindoor & Silver Foil Eyes -->
          <ellipse cx="0" cy="-18" rx="8" ry="10" fill="#cf232b" opacity="0.9" />
          <ellipse cx="-4" cy="-20" rx="2.5" ry="1.8" fill="#e2e8f0" />
          <ellipse cx="4" cy="-20" rx="2.5" ry="1.8" fill="#e2e8f0" />
          <circle cx="-4" cy="-20" r="0.8" fill="#000" />
          <circle cx="4" cy="-20" r="0.8" fill="#000" />
          <!-- Silver Foil Crown (Mukut) -->
          <polygon points="-8,-34 0,-42 8,-34" fill="#cbd5e1" stroke="#475569" stroke-width="0.8" />
        </g>

        <!-- Stone Altar Plinth Landing -->
        <polygon points="-80,310 80,310 95,340 -95,340" fill="url(#sandstone-highlight)" stroke="#52351c" stroke-width="2" class="day-only" />
        <polygon points="-80,310 80,310 95,340 -95,340" fill="#2d3750" stroke="#121622" stroke-width="2" class="night-only" />

        <!-- HOTSPOT 4: INCENSE BURNER WITH CURLING SMOKE (#hotspot-shrine-incense) @ x=62%, y=52% (241.8, 438.9) -->
        <g id="hotspot-shrine-incense" class="interactive-object shrine-incense-assembly" transform="translate(47, 209)">
          <ellipse cx="0" cy="12" rx="12" ry="5" fill="#a47a3e" stroke="#684718" stroke-width="1.2" class="day-only" />
          <ellipse cx="0" cy="12" rx="12" ry="5" fill="#362814" stroke="#140f06" stroke-width="1.2" class="night-only" />
          <!-- Red Burning Incense Stick Tips -->
          <line x1="-3" y1="12" x2="-8" y2="-12" stroke="#78350f" stroke-width="1.5" />
          <line x1="2" y1="12" x2="6" y2="-14" stroke="#78350f" stroke-width="1.5" />
          <circle cx="-8" cy="-12" r="1.5" fill="#ef4444" />
          <circle cx="6" cy="-14" r="1.5" fill="#ef4444" />
          <!-- Wisp of Aromatic White Smoke -->
          <path d="M-8 -12 Q-14 -32 4 -55 T-6 -85" stroke="#f1f5f9" stroke-width="1.8" fill="none" opacity="0.6" stroke-linecap="round" />
          <path d="M6 -14 Q14 -34 -2 -60 T8 -90" stroke="#f1f5f9" stroke-width="1.8" fill="none" opacity="0.5" stroke-linecap="round" />
        </g>

        <!-- HOTSPOT 2: BURNING CLAY DIYA LAMP (#hotspot-shrine-lamp, #shrine-diya-flame) @ x=34%, y=56% (132.6, 472.6) -->
        <g id="hotspot-shrine-lamp" class="interactive-object shrine-lamp-assembly" transform="translate(-62, 243)">
          <!-- Terracotta Saucer -->
          <ellipse cx="0" cy="8" rx="14" ry="6" fill="#8f492b" stroke="#522410" stroke-width="1.2" class="day-only" />
          <ellipse cx="0" cy="8" rx="14" ry="6" fill="#2d170d" stroke="#120803" stroke-width="1.2" class="night-only" />
          <!-- Oil Pool -->
          <ellipse cx="0" cy="7" rx="9" ry="3.5" fill="#d97706" opacity="0.8" class="day-only" />
          <ellipse cx="0" cy="7" rx="9" ry="3.5" fill="#4d2c0e" opacity="0.8" class="night-only" />

          <!-- Flickering Golden Flame (#shrine-diya-flame) -->
          <g id="shrine-diya-flame">
            <ellipse cx="0" cy="6" rx="36" ry="16" fill="#ffb443" opacity="0.3" filter="url(#glow-blur)" />
            <!-- Flame Body -->
            <path d="M0 -22 C5 -12, 7 -2, 0 4 C-7 -2, -5 -12, 0 -22 Z" fill="#ff9100" opacity="0.9" />
            <path d="M0 -17 C3 -9, 4 -2, 0 3 C-4 -2, -3 -9, 0 -17 Z" fill="#fffbe8" />
          </g>
        </g>

        <!-- HOTSPOT 1: TARNISHED BRASS OFFERING THALI PLATE (#hotspot-shrine-plate) @ x=44%, y=72% (171.6, 607.7) -->
        <g id="hotspot-shrine-plate" class="interactive-object shrine-plate-assembly" transform="translate(-23, 378)">
          <!-- Ground Shadow -->
          <ellipse cx="0" cy="6" rx="28" ry="11" fill="#000" opacity="0.4" class="day-only" />
          <ellipse cx="0" cy="6" rx="28" ry="11" fill="#000" opacity="0.75" class="night-only" />
          <!-- Brass Thali Disc Plate -->
          <ellipse cx="0" cy="0" rx="28" ry="11" fill="#c99738" stroke="#7a5518" stroke-width="1.5" class="day-only" />
          <ellipse cx="0" cy="0" rx="28" ry="11" fill="#423317" stroke="#1c160b" stroke-width="1.5" class="night-only" />
          <!-- Inner Rim Recess -->
          <ellipse cx="0" cy="0" rx="23" ry="9" fill="#b8832a" stroke="#7a5518" stroke-width="1" class="day-only" />
          <ellipse cx="0" cy="0" rx="23" ry="9" fill="#362912" stroke="#1c160b" stroke-width="1" class="night-only" />
          <!-- Kumkum Red Powder Smudge in Center -->
          <ellipse cx="-4" cy="0" rx="6" ry="3" fill="#cf232b" opacity="0.85" />
          <!-- Grain Offerings (Akshat Rice Grains) -->
          <g fill="#fff" opacity="0.9">
            <circle cx="6" cy="-2" r="1.2" />
            <circle cx="9" cy="1" r="1.1" />
            <circle cx="5" cy="2" r="1.2" />
          </g>
        </g>

        <!-- HOTSPOT 3: FRESH MARIGOLD BLOSSOMS (#hotspot-shrine-flowers, .shrine-flower-petal) @ x=50%, y=64% (195, 540.2) -->
        <g id="hotspot-shrine-flowers" class="interactive-object shrine-flowers-assembly" transform="translate(0, 310)">
          <!-- Fresh Yellow & Orange Marigold Garland Piled on Plinth -->
          <ellipse class="shrine-flower-petal" cx="-24" cy="6" rx="7" ry="5.5" fill="#f59e0b" />
          <circle class="shrine-flower-petal" cx="-24" cy="6" r="3.5" fill="#d97706" />
          
          <ellipse class="shrine-flower-petal" cx="-8" cy="8" rx="8" ry="6.5" fill="#fbbf24" />
          <circle class="shrine-flower-petal" cx="-8" cy="8" r="4" fill="#ea580c" />

          <ellipse class="shrine-flower-petal" cx="12" cy="7" rx="8.5" ry="6.5" fill="#f59e0b" />
          <circle class="shrine-flower-petal" cx="12" cy="7" r="4.2" fill="#d97706" />

          <ellipse class="shrine-flower-petal" cx="28" cy="5" rx="7" ry="5" fill="#fbbf24" />
          <circle class="shrine-flower-petal" cx="28" cy="5" r="3.2" fill="#ea580c" />

          <!-- Scattered loose petals -->
          <circle class="shrine-flower-petal" cx="-36" cy="12" r="2.5" fill="#f59e0b" />
          <circle class="shrine-flower-petal" cx="38" cy="10" r="2.2" fill="#fbbf24" />
          <circle class="shrine-flower-petal" cx="2" cy="14" r="2.8" fill="#ea580c" />
        </g>
      </g>
    </svg>
  `;
}).call(this);
  },

  // 14. SCENE 13: The Second Note
  renderSecondNoteScene() {
    return (function renderSecondNoteScene() {
  return `
    <svg class="scene-illustration" viewBox="0 0 390 844" xmlns="http://www.w3.org/2000/svg">
      ${this.getAtmosphericSky('secondnote')}

      <!-- Forest Edge Clearing Backdrop -->
      <g class="distant-landscape">
        <path class="day-only" fill="#9e714e" opacity="0.65" d="M0 430 Q100 405 200 420 T390 415 L390 490 L0 490 Z" />
        <path class="night-only" fill="#0c121e" opacity="0.8" d="M0 430 Q100 405 200 420 T390 415 L390 490 L0 490 Z" />
      </g>

      <!-- Dusty Forest Soil Ground -->
      <g id="secondnote-ground">
        <rect x="0" y="480" width="390" height="364" fill="url(#ground-dirt-day)" class="day-only" />
        <rect x="0" y="480" width="390" height="364" fill="url(#ground-dirt-night)" class="night-only" />
      </g>

      <!-- HOTSPOT 2: ANCIENT BOUNDARY STONE CAIRN (#hotspot-shrine-boundary) @ x=26%, y=50% (101.4, 422) -->
      <g id="hotspot-shrine-boundary" class="interactive-object boundary-cairn-assembly" transform="translate(101, 422)">
        <!-- Cast Shadow -->
        <ellipse cx="0" cy="55" rx="42" ry="14" fill="#000" opacity="0.35" class="day-only" />
        <ellipse cx="0" cy="55" rx="42" ry="14" fill="#000" opacity="0.75" class="night-only" />
        <!-- Stacked Sandstone Boundary Stones (Cairn) -->
        <!-- Base Block -->
        <polygon points="-38,50 38,46 32,20 -35,24" fill="url(#sandstone-day)" stroke="#52351c" stroke-width="2" class="day-only" />
        <polygon points="-38,50 38,46 32,20 -35,24" fill="url(#sandstone-night)" stroke="#121622" stroke-width="2" class="night-only" />
        <!-- Mid Block -->
        <polygon points="-28,20 28,18 22,-10 -25,-8" fill="url(#sandstone-highlight)" stroke="#52351c" stroke-width="1.8" class="day-only" />
        <polygon points="-28,20 28,18 22,-10 -25,-8" fill="#2d3750" stroke="#121622" stroke-width="1.8" class="night-only" />
        <!-- Top Marker Stone -->
        <polygon points="-16,-10 16,-12 10,-38 -12,-36" fill="url(#sandstone-day)" stroke="#52351c" stroke-width="1.8" class="day-only" />
        <polygon points="-16,-10 16,-12 10,-38 -12,-36" fill="url(#sandstone-night)" stroke="#121622" stroke-width="1.8" class="night-only" />
        <!-- Smear of Red Vermilion Powder -->
        <ellipse cx="0" cy="-22" rx="5" ry="7" fill="#cf232b" opacity="0.85" />
      </g>

      <!-- STONE ALTAR PLINTH IN FOREGROUND -->
      <g id="stone-altar-pedestal" transform="translate(195, 490)">
        <!-- Ground Shadow -->
        <ellipse cx="0" cy="115" rx="145" ry="38" fill="#000" opacity="0.4" class="day-only" />
        <ellipse cx="0" cy="115" rx="145" ry="38" fill="#000" opacity="0.8" class="night-only" />

        <!-- Massive Sandstone Altar Slab -->
        <polygon points="-130,55 130,50 145,105 -145,110" fill="url(#sandstone-day)" stroke="#52351c" stroke-width="2.5" class="day-only" />
        <polygon points="-130,55 130,50 145,105 -145,110" fill="url(#sandstone-night)" stroke="#121622" stroke-width="2.5" class="night-only" />
        <!-- Top Polished Table Surface -->
        <polygon points="-125,52 125,48 115,0 -115,4" fill="url(#sandstone-highlight)" stroke="#52351c" stroke-width="2" class="day-only" />
        <polygon points="-125,52 125,48 115,0 -115,4" fill="#2d3750" stroke="#121622" stroke-width="2" class="night-only" />

        <!-- HOTSPOT 1: THE OLD WOODEN BOX & SECOND NOTE (#hotspot-second-note-box) @ x=50%, y=62% (195, 523.3) -->
        <g id="hotspot-second-note-box" class="interactive-object second-note-box-assembly" transform="translate(0, 33)">
          <!-- Box Ground Shadow -->
          <ellipse cx="0" cy="38" rx="65" ry="18" fill="#000" opacity="0.45" class="day-only" />
          <ellipse cx="0" cy="38" rx="65" ry="18" fill="#000" opacity="0.85" class="night-only" />

          <!-- Carved Rosewood / Teak Box Body -->
          <polygon points="-58,35 58,30 52,-15 -52,-10" fill="#4d2b17" stroke="#2b1408" stroke-width="2" class="day-only" />
          <polygon points="-58,35 58,30 52,-15 -52,-10" fill="#141720" stroke="#080a0f" stroke-width="2" class="night-only" />
          <polygon points="-56,33 56,28 50,-13 -50,-8" fill="url(#pat-wood)" class="day-only" opacity="0.85" />
          <polygon points="-56,33 56,28 50,-13 -50,-8" fill="url(#pat-wood-night)" class="night-only" opacity="0.85" />

          <!-- Brass Corner Reinforcements -->
          <polygon points="-58,-10 -42,-11 -40,3 -56,5" fill="#d99f36" stroke="#7a5518" stroke-width="1" class="day-only" />
          <polygon points="52,-15 36,-14 38,0 54,-1" fill="#d99f36" stroke="#7a5518" stroke-width="1" class="day-only" />
          <polygon points="-58,-10 -42,-11 -40,3 -56,5" fill="#423317" stroke="#1c160b" stroke-width="1" class="night-only" />
          <polygon points="52,-15 36,-14 38,0 54,-1" fill="#423317" stroke="#1c160b" stroke-width="1" class="night-only" />

          <!-- Open Box Lid (Tilted Back) -->
          <polygon points="-52,-10 52,-15 48,-55 -48,-50" fill="#3b1f0f" stroke="#241206" stroke-width="2" class="day-only" />
          <polygon points="-52,-10 52,-15 48,-55 -48,-50" fill="#0f1118" stroke="#06070a" stroke-width="2" class="night-only" />

          <!-- Heavy Brass Clasp Latch -->
          <rect x="-6" y="8" width="12" height="18" rx="2" fill="#d99f36" stroke="#7a5518" stroke-width="1.2" class="day-only" />
          <rect x="-6" y="8" width="12" height="18" rx="2" fill="#423317" stroke="#1c160b" stroke-width="1.2" class="night-only" />

          <!-- HOTSPOT: UNFOLDED PARCHMENT SHEET INSIDE BOX (#hotspot-second-note-parchment, #second-note-sheet) -->
          <g id="hotspot-second-note-parchment" transform="translate(0, 5)">
            <!-- Yellowed Aged Parchment Sheet (#second-note-sheet) -->
            <polygon id="second-note-sheet" points="-42,20 42,16 38,-6 -38,-2" fill="#fef3c7" stroke="#854d0e" stroke-width="1.5" class="parchment-sheet" />
            <!-- Script text lines representation -->
            <line x1="-32" y1="2" x2="32" y2="0" stroke="#78350f" stroke-width="1.5" opacity="0.75" />
            <line x1="-32" y1="8" x2="28" y2="6" stroke="#78350f" stroke-width="1.5" opacity="0.75" />
            <line x1="-32" y1="14" x2="22" y2="12" stroke="#78350f" stroke-width="1.5" opacity="0.75" />

            <!-- BLOODY HANDPRINT HORROR REVEAL (#parchment-bloody-handprint) -->
            <g id="parchment-bloody-handprint" opacity="0" filter="url(#glow-blur)" transform="translate(0, 6) scale(0.65)">
              <ellipse cx="0" cy="5" rx="14" ry="12" fill="#991b1b" opacity="0.85" />
              <!-- Fingers -->
              <path d="M-12 2 L-18 -16 M-6 0 L-8 -22 M0 0 L0 -24 M6 0 L8 -22 M12 2 L16 -16" stroke="#991b1b" stroke-width="4.5" stroke-linecap="round" opacity="0.85" />
            </g>

            <!-- HORROR WARNING TEXT REVEAL (#parchment-horror-warning) -->
            <text id="parchment-horror-warning" x="0" y="2" text-anchor="middle" font-family="'Cinzel', serif" font-size="6.5" font-weight="900" fill="#dc2626" opacity="0">THE VILLAGE REMEMBERS</text>
          </g>
        </g>
      </g>
    </svg>
  `;
}).call(this);
  },

  // 15. SCENE 14: The Forgotten Street
  renderForgottenStreetScene() {
    return (function renderForgottenStreetScene() {
  return `
    <svg class="scene-illustration" viewBox="0 0 390 844" xmlns="http://www.w3.org/2000/svg">
      ${this.getAtmosphericSky('forgottenstreet')}

      <!-- Narrow Slice of Sky Between Looming Havelis -->
      <!-- Ground Pavement Base -->
      <g id="forgotten-street-ground">
        <polygon points="175,340 215,340 375,844 15,844" fill="url(#ground-dirt-day)" class="day-only" />
        <polygon points="175,340 215,340 375,844 15,844" fill="url(#ground-dirt-night)" class="night-only" />

        <!-- Weathered Flagstone Pavement Covered in Desert Weeds (#hotspot-street-overgrowth) -->
        <polygon id="hotspot-street-overgrowth" points="180,340 210,340 340,844 50,844" fill="url(#pat-cobbles)" class="day-only" opacity="0.85" />
        <polygon points="180,340 210,340 340,844 50,844" fill="url(#pat-cobbles-night)" class="night-only" opacity="0.8" />

        <!-- Overgrown Hardy Weeds & Grass Bursting Through Flagstone Mortar Joints -->
        <g class="day-only" fill="#4d6638">
          <ellipse cx="140" cy="720" rx="16" ry="6" />
          <ellipse cx="230" cy="650" rx="14" ry="5" />
          <ellipse cx="170" cy="540" rx="10" ry="4" />
          <ellipse cx="190" cy="420" rx="7" ry="3" />
        </g>
        <g class="night-only" fill="#121a14">
          <ellipse cx="140" cy="720" rx="16" ry="6" />
          <ellipse cx="230" cy="650" rx="14" ry="5" />
          <ellipse cx="170" cy="540" rx="10" ry="4" />
          <ellipse cx="190" cy="420" rx="7" ry="3" />
        </g>
      </g>

      <!-- TOWERING FLANKING HAVELI WALLS (CLAUSTROPHOBIC PERSPECTIVE) -->
      <!-- Left Haveli Wall Block -->
      <g id="street-left-havelis">
        <polygon points="0,0 175,340 175,844 0,844" fill="url(#plaster-cream-day)" stroke="#523924" stroke-width="2" class="day-only" />
        <polygon points="0,0 175,340 175,844 0,844" fill="url(#plaster-cream-night)" stroke="#121622" stroke-width="2" class="night-only" />
        <!-- Exposed Brickwork Patches on Left -->
        <polygon points="20,240 95,280 90,380 15,350" fill="url(#pat-brick)" class="day-only" />
        <polygon points="20,240 95,280 90,380 15,350" fill="url(#pat-brick-night)" class="night-only" />
        <!-- Overhanging Tiled Cornices -->
        <polygon points="0,180 145,310 140,290 0,160" fill="url(#pat-khaprail)" class="day-only" />
        <polygon points="0,180 145,310 140,290 0,160" fill="url(#pat-khaprail-night)" class="night-only" />

        <!-- HOTSPOT 2: CREAKING AJAR HEAVY TIMBER DOORS (#hotspot-street-doors) @ x=26%, y=54% (101.4, 455.8) -->
        <g id="hotspot-street-doors" class="interactive-object street-doors-assembly" transform="translate(85, 410)">
          <!-- Sandstone Chaokhat (Frame) -->
          <polygon points="0,0 35,28 35,170 0,145" fill="url(#sandstone-day)" stroke="#52351c" stroke-width="2" class="day-only" />
          <polygon points="0,0 35,28 35,170 0,145" fill="url(#sandstone-night)" stroke="#121622" stroke-width="2" class="night-only" />
          <!-- Pitch Black Interior Void Revealed by Ajar Door -->
          <polygon points="4,12 32,34 32,165 4,142" fill="#000000" />
          <!-- Heavy Timber Door Leaf Ajar (Swung open into dark) -->
          <polygon points="4,12 18,22 18,154 4,142" fill="#4d321d" stroke="#241407" stroke-width="1.8" class="day-only" />
          <polygon points="4,12 18,22 18,154 4,142" fill="#12151e" stroke="#06070a" stroke-width="1.8" class="night-only" />
          <!-- Brass Studs on Door -->
          <circle cx="11" cy="45" r="2" fill="#d99f36" class="day-only" />
          <circle cx="11" cy="95" r="2" fill="#d99f36" class="day-only" />
          <circle cx="11" cy="45" r="2" fill="#423317" class="night-only" />
          <circle cx="11" cy="95" r="2" fill="#423317" class="night-only" />
        </g>
      </g>

      <!-- Right Haveli Wall Block -->
      <g id="street-right-havelis">
        <polygon points="390,0 215,340 215,844 390,844" fill="url(#plaster-cream-day)" stroke="#523924" stroke-width="2" class="day-only" />
        <polygon points="390,0 215,340 215,844 390,844" fill="url(#plaster-cream-night)" stroke="#121622" stroke-width="2" class="night-only" />
        <!-- Exposed Brickwork Patches on Right -->
        <polygon points="370,240 295,280 300,380 375,350" fill="url(#pat-brick)" class="day-only" />
        <polygon points="370,240 295,280 300,380 375,350" fill="url(#pat-brick-night)" class="night-only" />
        <!-- Tiled Cornices -->
        <polygon points="390,180 245,310 250,290 390,160" fill="url(#pat-khaprail)" class="day-only" />
        <polygon points="390,180 245,310 250,290 390,160" fill="url(#pat-khaprail-night)" class="night-only" />

        <!-- Barred Ground Window on Right -->
        <g transform="translate(265, 430)">
          <polygon points="0,20 30,0 30,65 0,85" fill="#090d14" stroke="#52351c" stroke-width="2" class="day-only" />
          <polygon points="0,20 30,0 30,65 0,85" fill="#040608" stroke="#121622" stroke-width="2" class="night-only" />
          <line x1="10" y1="13" x2="10" y2="78" stroke="#3b2413" stroke-width="2" class="day-only" />
          <line x1="20" y1="7" x2="20" y2="72" stroke="#3b2413" stroke-width="2" class="day-only" />
          <line x1="10" y1="13" x2="10" y2="78" stroke="#121622" stroke-width="2" class="night-only" />
          <line x1="20" y1="7" x2="20" y2="72" stroke="#121622" stroke-width="2" class="night-only" />
        </g>
      </g>

      <!-- HOTSPOT 3: SOLITARY DISTANT FIGURE AT STREET END (#hotspot-street-figure) @ x=52%, y=44% (202.8, 371.4) -->
      <g id="hotspot-street-figure" class="interactive-object street-figure-assembly" transform="translate(195, 342) scale(0.68)">
        <!-- Silhouette of a Tall Person Standing Perfectly Still at the Vanishing Point -->
        <ellipse cx="0" cy="48" rx="14" ry="5" fill="#000" opacity="0.65" />
        <!-- Head with Shawl / Draped Cloth -->
        <circle cx="0" cy="-22" r="7" fill="#141722" stroke="#080a0f" stroke-width="1.2" />
        <!-- Torso & Draped Traditional Shawl (Loi) -->
        <path d="M-10 -15 L10 -15 L14 26 L-14 26 Z" fill="#1b202e" stroke="#080a0f" stroke-width="1.4" />
        <!-- Lower Dhoti Body -->
        <polygon points="-12,26 12,26 10,48 -10,48" fill="#121622" />
        <!-- Eerie Faint Moonlit Rim Highlight on Silhouette Edge (NIGHT) -->
        <path d="M-7 -22 C-7 -28, 7 -28, 7 -22" stroke="#93c5fd" stroke-width="1" fill="none" opacity="0.5" class="night-only" />
        <line x1="10" y1="-15" x2="14" y2="26" stroke="#93c5fd" stroke-width="1" opacity="0.4" class="night-only" />
      </g>

      <!-- HOTSPOT 1: HIDDEN LANE WHISPER HOTSPOT (#hotspot-street-whisper) @ x=50%, y=72% (195, 607.7) -->
      <g id="hotspot-street-whisper" class="interactive-object street-whisper-assembly" transform="translate(195, 608)">
        <ellipse cx="0" cy="0" rx="35" ry="12" fill="#000" opacity="0.01" />
      </g>
    </svg>
  `;
}).call(this);
  },

  // 16. SCENE 15: The House at the End
  renderHouseAtEndScene() {
    return (function renderHouseAtEndScene() {
  return `
    <svg class="scene-illustration" viewBox="0 0 390 844" xmlns="http://www.w3.org/2000/svg">
      ${this.getAtmosphericSky('houseatend')}

      <!-- Dead-End Courtyard Ground -->
      <g id="house-end-ground">
        <rect x="0" y="480" width="390" height="364" fill="url(#ground-dirt-day)" class="day-only" />
        <rect x="0" y="480" width="390" height="364" fill="url(#ground-dirt-night)" class="night-only" />

        <!-- Weathered Flagstone Apron Leading to House Threshold -->
        <polygon points="50,510 340,510 370,844 20,844" fill="url(#pat-cobbles)" class="day-only" opacity="0.85" />
        <polygon points="50,510 340,510 370,844 20,844" fill="url(#pat-cobbles-night)" class="night-only" opacity="0.8" />
      </g>

      <!-- THE OLD HOUSE AT THE DEAD-END FACADE -->
      <g class="house-end-facade" transform="translate(25, 140)">
        <!-- Main Stone Wall -->
        <polygon points="0,380 0,60 340,45 340,370" fill="url(#plaster-cream-day)" stroke="#523924" stroke-width="2" class="day-only" />
        <polygon points="0,380 0,60 340,45 340,370" fill="url(#plaster-cream-night)" stroke="#121622" stroke-width="2" class="night-only" />
        <polygon points="20,90 80,80 85,150 25,160" fill="url(#pat-brick)" class="day-only" />
        <polygon points="20,90 80,80 85,150 25,160" fill="url(#pat-brick-night)" class="night-only" />

        <!-- Overhanging Tiled Eaves -->
        <polygon points="-10,65 350,48 345,28 -15,48" fill="url(#pat-khaprail)" class="day-only" />
        <polygon points="-10,65 350,48 345,28 -15,48" fill="url(#pat-khaprail-night)" class="night-only" />

        <!-- HOTSPOT 2: WARM LANTERN LIGHT WINDOW (#hotspot-house-end-light) -->
        <g id="hotspot-house-end-light" class="interactive-object house-end-window-assembly" transform="translate(230, 160)">
          <!-- Sandstone Window Frame -->
          <rect x="-6" y="-6" width="62" height="78" rx="3" fill="url(#sandstone-day)" stroke="#52351c" stroke-width="2" class="day-only" />
          <rect x="-6" y="-6" width="62" height="78" rx="3" fill="url(#sandstone-night)" stroke="#121622" stroke-width="2" class="night-only" />
          <!-- DAY: Window Interior -->
          <rect x="0" y="0" width="50" height="66" fill="#141722" class="day-only" />

          <!-- NIGHT: Living Warm Amber Lantern Glow Inside Room -->
          <g class="night-only">
            <!-- Warm Light Beam Spilling onto Ground Outside -->
            <polygon points="25,33 -60,250 140,250" fill="#ffb443" opacity="0.25" filter="url(#glow-blur)" />
            <rect x="0" y="0" width="50" height="66" fill="#ffb443" opacity="0.9" />
            <rect x="0" y="0" width="50" height="66" fill="#ff8c1a" opacity="0.6" filter="url(#glow-blur)" />
            <!-- Shadow of a Person Passing Behind the Curtain -->
            <ellipse cx="25" cy="18" rx="8" ry="9" fill="#1f1105" opacity="0.85" class="flutter-slow" />
            <path d="M12 66 C12 38, 38 38, 38 66 Z" fill="#1f1105" opacity="0.85" class="flutter-slow" />
          </g>

          <!-- Wooden Window Pane Bars -->
          <line x1="25" y1="0" x2="25" y2="66" stroke="#2b1a0d" stroke-width="2" />
          <line x1="0" y1="33" x2="50" y2="33" stroke="#2b1a0d" stroke-width="2" />
        </g>

        <!-- THE HOUSE FRONT DOORWAY ASSEMBLY (#house-end-door-group, #hotspot-house-end-door) @ x=48%, y=58% (187.2, 489.5) -->
        <g id="house-end-door-group" class="interactive-object house-end-door-assembly" transform="translate(145, 230)">
          <!-- Sandstone Door Frame -->
          <rect x="-48" y="-12" width="96" height="152" fill="url(#sandstone-day)" stroke="#52351c" stroke-width="2.5" class="day-only" />
          <rect x="-48" y="-12" width="96" height="152" fill="url(#sandstone-night)" stroke="#121622" stroke-width="2.5" class="night-only" />

          <!-- DAY: Dark Closed Door Threshold -->
          <rect x="-38" y="0" width="76" height="138" fill="#140b05" class="day-only" />

          <!-- NIGHT: Warm Golden Light Illuminating Interior Chamber when Door Opens -->
          <g class="night-only">
            <!-- Warm Light Pool on Threshold Ground -->
            <polygon points="-38,138 38,138 85,240 -85,240" fill="#ffb443" opacity="0.35" filter="url(#glow-blur)" />
            <!-- Interior Chamber Glow -->
            <rect x="-38" y="0" width="76" height="138" fill="#ffb443" opacity="0.85" />
            <!-- Shadow of Desk & Lamp Inside -->
            <rect x="-25" y="85" width="50" height="35" fill="#4d321d" opacity="0.75" />
            <circle cx="0" cy="72" r="5" fill="#ff9100" />
          </g>

          <!-- Heavy Wooden Front Door Leaf (#hotspot-house-end-door) -->
          <g id="hotspot-house-end-door">
            <rect x="-38" y="0" width="76" height="138" fill="#5c3f27" stroke="#362212" stroke-width="2" class="day-only" />
            <rect x="-38" y="0" width="76" height="138" fill="#1e2433" stroke="#0a0d14" stroke-width="2" class="night-only" />
            <!-- Wood Grain & Panels -->
            <rect x="-32" y="8" width="28" height="55" fill="#4a301a" stroke="#2b1a0d" stroke-width="1.2" class="day-only" />
            <rect x="4" y="8" width="28" height="55" fill="#4a301a" stroke="#2b1a0d" stroke-width="1.2" class="day-only" />
            <rect x="-32" y="70" width="28" height="60" fill="#4a301a" stroke="#2b1a0d" stroke-width="1.2" class="day-only" />
            <rect x="4" y="70" width="28" height="60" fill="#4a301a" stroke="#2b1a0d" stroke-width="1.2" class="day-only" />
            <!-- Brass Handle Ring -->
            <circle cx="18" cy="70" r="4.5" fill="#d99f36" stroke="#7a5518" stroke-width="1" class="day-only" />
            <circle cx="18" cy="70" r="4.5" fill="#423317" stroke="#1c160b" stroke-width="1" class="night-only" />
          </g>
        </g>

        <!-- HOTSPOT 1: THE GLASS BOTTLE SITTING ON DOORSTEP (#hotspot-house-end-bottle) @ x=64%, y=74% (249.6, 624.6) -->
        <g id="hotspot-house-end-bottle" class="interactive-object house-end-bottle-assembly" transform="translate(225, 485)">
          <!-- Ground Shadow -->
          <ellipse cx="0" cy="18" rx="20" ry="7" fill="#000" opacity="0.45" class="day-only" />
          <ellipse cx="0" cy="18" rx="20" ry="7" fill="#000" opacity="0.8" class="night-only" />
          <!-- Green Glass Bottle Standing Upright on Stone Step -->
          <path d="M-6 16 C-8 16, -10 12, -10 4 L-10 -15 C-10 -22, -6 -26, -4 -30 L-4 -40 L4 -40 L4 -30 C6 -26, 10 -22, 10 -15 L10 4 C10 12, 8 16, 6 16 Z" 
                fill="#1f3b33" stroke="#68b9c7" stroke-width="1.5" opacity="0.85" />
          <!-- Specular Glass Highlight -->
          <line x1="-6" y1="-20" x2="-6" y2="10" stroke="#fff" stroke-width="1.5" opacity="0.5" />
          <!-- Rolled Note Inside Glass -->
          <rect x="-5" y="-12" width="10" height="24" rx="2" fill="#fef08a" opacity="0.8" />
          <!-- Cork Stopper in Neck -->
          <rect x="-4" y="-45" width="8" height="6" rx="1.5" fill="#8f5b34" stroke="#4a2e19" stroke-width="0.8" />
        </g>
      </g>
    </svg>
  `;
}).call(this);
  },

  // 17. SCENE 16: The Documentation Room
  renderRoomScene() {
    return (function renderRoomScene() {
  return `
    <svg class="scene-illustration" viewBox="0 0 390 844" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <!-- Room Interior Atmospheric Gradients -->
        <linearGradient id="room-wall-grad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stop-color="#141824" />
          <stop offset="50%" stop-color="#1b2233" />
          <stop offset="100%" stop-color="#10141f" />
        </linearGradient>
        <radialGradient id="lamp-room-glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stop-color="#fedca8" stop-opacity="0.85" />
          <stop offset="35%" stop-color="#ffb443" stop-opacity="0.55" />
          <stop offset="70%" stop-color="#ea580c" stop-opacity="0.18" />
          <stop offset="100%" stop-color="#000000" stop-opacity="0" />
        </radialGradient>
      </defs>

      <!-- Stone Wall Interior Background -->
      <rect width="100%" height="100%" fill="url(#room-wall-grad)" />

      <!-- Stone Floor Pavement -->
      <polygon points="0,520 390,520 390,844 0,844" fill="url(#pat-cobbles-night)" opacity="0.85" />

      <!-- HOTSPOT 3: HAND-DRAWN KALDHARA MAPS PINNED TO WALL (#hotspot-room-maps) @ x=50%, y=35% (195, 295.4) -->
      <g id="hotspot-room-maps" class="interactive-object room-maps-assembly" transform="translate(195, 280)">
        <!-- Cast Shadow -->
        <polygon points="-82,-70 82,-74 86,54 -78,58" fill="#000" opacity="0.6" />
        <!-- Large Weathered Parchment Map Sheet (Curling Corners) -->
        <polygon points="-80,-72 80,-76 84,52 -76,56" fill="#fef3c7" stroke="#92400e" stroke-width="1.8" />
        <!-- Map Grid Lines & Compass Rose -->
        <g stroke="#78350f" opacity="0.45" stroke-width="1">
          <line x1="-70" y1="-40" x2="75" y2="-44" />
          <line x1="-70" y1="-10" x2="75" y2="-14" />
          <line x1="-70" y1="20" x2="75" y2="16" />
          <line x1="-40" y1="-68" x2="-36" y2="48" />
          <line x1="0" y1="-70" x2="4" y2="46" />
          <line x1="40" y1="-72" x2="44" y2="44" />
        </g>
        <!-- Architectural Sketch Layout of Kaldhara Village Streets & Well -->
        <circle cx="-15" cy="-8" r="14" fill="none" stroke="#b45309" stroke-width="1.5" />
        <rect x="-45" y="-35" width="22" height="16" fill="none" stroke="#b45309" stroke-width="1.5" />
        <rect x="25" y="-45" width="28" height="20" fill="none" stroke="#b45309" stroke-width="1.5" />
        <path d="M-60 30 Q-15 0 60 20" stroke="#dc2626" stroke-width="2" fill="none" stroke-dasharray="4 3" />
        <!-- Handwritten Notes in Margins -->
        <text x="0" y="-55" text-anchor="middle" font-family="'Cinzel', serif" font-size="8.5" font-weight="700" letter-spacing="2" fill="#78350f">SURVEY OF KALDHARA — 1981</text>
        <text x="0" y="38" text-anchor="middle" font-family="'Caveat', cursive" font-size="9" font-weight="700" fill="#991b1b">"No one leaves."</text>
        <!-- Iron Tacks Pinning Map Corners -->
        <circle cx="-74" cy="-66" r="2.5" fill="#475569" stroke="#1e293b" stroke-width="1" />
        <circle cx="74" cy="-70" r="2.5" fill="#475569" stroke="#1e293b" stroke-width="1" />
      </g>

      <!-- HOTSPOT 4: WALL SHELF WITH GLASS BOTTLES (#hotspot-room-bottles) -->
      <g id="hotspot-room-bottles" class="interactive-object room-bottles-assembly" transform="translate(60, 160)">
        <!-- Heavy Wood Wall Shelf -->
        <rect x="0" y="0" width="270" height="14" rx="2" fill="#3b2413" stroke="#221307" stroke-width="1.8" />
        <polygon points="15,14 25,35 35,14" fill="#2b1a0d" />
        <polygon points="235,14 245,35 255,14" fill="#2b1a0d" />

        <!-- Row of 5 Glass Bottles on Shelf, Each with Rolled Note -->
        <!-- Bottle 1 -->
        <g transform="translate(30, -32)">
          <path d="M-5 32 C-7 32, -8 28, -8 22 L-8 6 C-8 2, -5 -2, -3 -5 L-3 -12 L3 -12 L3 -5 C5 -2, 8 2, 8 6 L8 22 C8 28, 7 32, 5 32 Z" fill="#1f3b33" stroke="#68b9c7" stroke-width="1" opacity="0.85" />
          <rect x="-4" y="8" width="8" height="18" rx="1.5" fill="#fef08a" opacity="0.85" />
          <rect x="-3" y="-15" width="6" height="4" fill="#8f5b34" />
        </g>
        <!-- Bottle 2 -->
        <g transform="translate(80, -32)">
          <path d="M-5 32 C-7 32, -8 28, -8 22 L-8 6 C-8 2, -5 -2, -3 -5 L-3 -12 L3 -12 L3 -5 C5 -2, 8 2, 8 6 L8 22 C8 28, 7 32, 5 32 Z" fill="#1f3b33" stroke="#68b9c7" stroke-width="1" opacity="0.85" />
          <rect x="-4" y="8" width="8" height="18" rx="1.5" fill="#fef08a" opacity="0.85" />
          <rect x="-3" y="-15" width="6" height="4" fill="#8f5b34" />
        </g>
        <!-- Bottle 3 -->
        <g transform="translate(135, -32)">
          <path d="M-5 32 C-7 32, -8 28, -8 22 L-8 6 C-8 2, -5 -2, -3 -5 L-3 -12 L3 -12 L3 -5 C5 -2, 8 2, 8 6 L8 22 C8 28, 7 32, 5 32 Z" fill="#1f3b33" stroke="#68b9c7" stroke-width="1" opacity="0.85" />
          <rect x="-4" y="8" width="8" height="18" rx="1.5" fill="#fef08a" opacity="0.85" />
          <rect x="-3" y="-15" width="6" height="4" fill="#8f5b34" />
        </g>
        <!-- Bottle 4 -->
        <g transform="translate(190, -32)">
          <path d="M-5 32 C-7 32, -8 28, -8 22 L-8 6 C-8 2, -5 -2, -3 -5 L-3 -12 L3 -12 L3 -5 C5 -2, 8 2, 8 6 L8 22 C8 28, 7 32, 5 32 Z" fill="#1f3b33" stroke="#68b9c7" stroke-width="1" opacity="0.85" />
          <rect x="-4" y="8" width="8" height="18" rx="1.5" fill="#fef08a" opacity="0.85" />
          <rect x="-3" y="-15" width="6" height="4" fill="#8f5b34" />
        </g>
        <!-- Bottle 5 -->
        <g transform="translate(240, -32)">
          <path d="M-5 32 C-7 32, -8 28, -8 22 L-8 6 C-8 2, -5 -2, -3 -5 L-3 -12 L3 -12 L3 -5 C5 -2, 8 2, 8 6 L8 22 C8 28, 7 32, 5 32 Z" fill="#1f3b33" stroke="#68b9c7" stroke-width="1" opacity="0.85" />
          <rect x="-4" y="8" width="8" height="18" rx="1.5" fill="#fef08a" opacity="0.85" />
          <rect x="-3" y="-15" width="6" height="4" fill="#8f5b34" />
        </g>
      </g>

      <!-- MASSIVE RUSTIC WOODEN DESK & CHAIR -->
      <g id="documentation-desk-assembly" transform="translate(195, 520)">
        <!-- Ground Cast Shadow -->
        <ellipse cx="0" cy="180" rx="170" ry="35" fill="#000" opacity="0.8" />

        <!-- Wooden Chair Tucked into Desk -->
        <g transform="translate(-85, 45)">
          <rect x="-24" y="-35" width="48" height="8" rx="2" fill="#3b2413" />
          <line x1="-18" y1="-30" x2="-22" y2="85" stroke="#3b2413" stroke-width="4" />
          <line x1="18" y1="-30" x2="22" y2="85" stroke="#3b2413" stroke-width="4" />
        </g>

        <!-- Desk Body & Heavy Legs -->
        <!-- Rear Shadow under desk -->
        <polygon points="-160,35 160,35 150,165 -150,165" fill="#080a0f" />
        <!-- Left Desk Pillar Legs -->
        <rect x="-155" y="35" width="28" height="145" fill="#3b2413" stroke="#221307" stroke-width="2" />
        <!-- Right Desk Pillar Legs -->
        <rect x="127" y="35" width="28" height="145" fill="#3b2413" stroke="#221307" stroke-width="2" />

        <!-- Heavy Teak Desk Top Slab -->
        <polygon points="-170,35 170,35 155,-15 -155,-15" fill="#4d321d" stroke="#2b1a0d" stroke-width="2.5" />
        <polygon points="-168,33 168,33 153,-13 -153,-13" fill="url(#pat-wood)" opacity="0.85" />

        <!-- WARM ILLUMINATING BRASS KEROSENE OIL LAMP -->
        <g transform="translate(85, -25)">
          <!-- Radial Warm Glow Filling Room -->
          <ellipse cx="0" cy="-35" rx="180" ry="120" fill="url(#lamp-room-glow)" filter="url(#glow-blur)" />
          
          <!-- Cast Lamp Shadow -->
          <ellipse cx="0" cy="18" rx="24" ry="8" fill="#000" opacity="0.65" />
          <!-- Heavy Ornate Brass Base & Font -->
          <ellipse cx="0" cy="12" rx="18" ry="6" fill="#d99f36" stroke="#7a5518" stroke-width="1.4" />
          <ellipse cx="0" cy="-5" rx="14" ry="12" fill="#bfa042" stroke="#7a5518" stroke-width="1.5" />
          <!-- Glass Chimney with Golden Flame Inside -->
          <path d="M-6 -18 C-10 -25, -10 -45, -5 -65 L5 -65 C10 -45, 10 -25, 6 -18 Z" fill="#fff" opacity="0.25" stroke="#ffeaa7" stroke-width="1.2" />
          <!-- Living Golden Oil Flame -->
          <ellipse cx="0" cy="-35" rx="5" ry="12" fill="#ff9100" />
          <ellipse cx="0" cy="-33" rx="2.5" ry="8" fill="#fffbe8" />
        </g>

        <!-- HOTSPOT 1: ROLLED YELLOWED NOTES & LETTERS (#hotspot-room-notes) @ x=42%, y=68% (163.8, 573.9) -->
        <g id="hotspot-room-notes" class="interactive-object room-notes-assembly" transform="translate(-32, 10)">
          <!-- Cast Shadow -->
          <ellipse cx="0" cy="12" rx="35" ry="10" fill="#000" opacity="0.5" />
          <!-- Rolled Scroll 1 -->
          <g transform="rotate(-12)">
            <rect x="-28" y="-8" width="56" height="15" rx="4" fill="#fef08a" stroke="#854d0e" stroke-width="1.2" />
            <line x1="-24" y1="-1" x2="24" y2="-1" stroke="#a16207" stroke-width="1" opacity="0.6" />
            <!-- Crimson Tie Ribbon -->
            <rect x="-4" y="-8" width="8" height="15" fill="#dc2626" />
          </g>
          <!-- Rolled Scroll 2 (Stacked atop) -->
          <g transform="translate(8, -6) rotate(8)">
            <rect x="-24" y="-7" width="48" height="14" rx="3.5" fill="#fef3c7" stroke="#854d0e" stroke-width="1.2" />
            <line x1="-20" y1="0" x2="20" y2="0" stroke="#a16207" stroke-width="1" opacity="0.6" />
            <rect x="-2" y="-7" width="7" height="14" fill="#dc2626" />
          </g>
          <!-- Scattered Open Loose Note Page -->
          <polygon points="-45,6 -5,2 -8,25 -48,29" fill="#fef9c3" stroke="#854d0e" stroke-width="1" />
          <line x1="-42" y1="12" x2="-10" y2="9" stroke="#78350f" stroke-width="1.2" opacity="0.7" />
          <line x1="-42" y1="18" x2="-14" y2="15" stroke="#78350f" stroke-width="1.2" opacity="0.7" />
        </g>

        <!-- HOTSPOT 2: VINTAGE BLACK & WHITE PHOTOGRAPH (#hotspot-room-photo) @ x=68%, y=62% (265.2, 523.3) -->
        <g id="hotspot-room-photo" class="interactive-object room-photo-assembly" transform="translate(68, 6)">
          <!-- Cast Shadow -->
          <polygon points="-2,2 44,0 42,34 -4,36" fill="#000" opacity="0.5" />
          <!-- Vintage Photo Print with White Border -->
          <polygon points="0,0 42,-2 40,32 -2,34" fill="#f8fafc" stroke="#64748b" stroke-width="1" />
          <!-- Black-and-white Village Scene on Photo -->
          <polygon points="3,3 39,1 37,29 1,31" fill="#1e293b" />
          <!-- Familiar Silhouette Standing in the Village on Photo -->
          <circle cx="20" cy="12" r="3" fill="#cbd5e1" />
          <polygon points="16,15 24,15 25,28 15,28" fill="#94a3b8" />
        </g>
      </g>
    </svg>
  `;
}).call(this);
  },

  // 18. SCENE 17: The Person on the Road
  renderRoadFigureScene() {
    return (function renderRoadFigureScene() {
  return `
    <svg class="scene-illustration" viewBox="0 0 390 844" xmlns="http://www.w3.org/2000/svg">
      ${this.getAtmosphericSky('roadfigure')}

      <!-- Cold Desert Night Horizon & Distant Ridges -->
      <g class="distant-landscape">
        <path fill="#080c14" opacity="0.9" d="M0 410 Q90 375 190 395 T390 385 L390 480 L0 480 Z" />
        <path fill="#0c121e" opacity="0.8" d="M0 430 Q120 405 240 425 T390 415 L390 500 L0 500 Z" />
      </g>

      <!-- Dusty Desert Road Bed Under Cold Moonlit Sky -->
      <g id="road-figure-ground">
        <polygon points="185,420 205,420 375,844 15,844" fill="url(#ground-dirt-night)" />
        <polygon points="188,420 202,420 320,844 70,844" fill="url(#pat-cobbles-night)" opacity="0.65" />

        <!-- Deep Cart Ruts into Darkness -->
        <path d="M192 420 Q188 600 130 844" stroke="#080b10" stroke-width="3.5" fill="none" stroke-dasharray="14 10" />
        <path d="M198 420 Q202 600 245 844" stroke="#080b10" stroke-width="3.5" fill="none" stroke-dasharray="16 12" />
      </g>

      <!-- HOTSPOT 2: DESERT BORDER CAIRN STONES (#hotspot-road-night-stones) @ x=25%, y=68% (97.5, 573.9) -->
      <g id="hotspot-road-night-stones" class="interactive-object border-stones-assembly" transform="translate(98, 574)">
        <!-- Ground Cast Shadow -->
        <ellipse cx="0" cy="38" rx="36" ry="12" fill="#000" opacity="0.8" />
        <!-- Stacked Weathered Sandstone Boundary Blocks -->
        <polygon points="-28,34 28,30 22,-8 -24,-5" fill="url(#sandstone-night)" stroke="#0e121a" stroke-width="2" />
        <polygon points="-20,-8 20,-10 14,-36 -16,-34" fill="#2d3750" stroke="#0e121a" stroke-width="1.8" />
        <!-- Moonlit Silver Rim Highlight -->
        <line x1="-16" y1="-34" x2="14" y2="-36" stroke="#93c5fd" stroke-width="1.5" opacity="0.5" />
      </g>

      <!-- HOTSPOT 1 & HORROR: THE PERSON WALKING ON THE ROAD (#road-figure-mover, #road-walker-svg, #hotspot-road-walker) -->
      <!-- Positioned at x=50%, y=55% (195, 464.2) -->
      <g id="road-figure-mover" transform="translate(195, 464)">
        <g id="road-walker-svg" class="interactive-object road-walker-assembly">
          <g id="hotspot-road-walker">
            <!-- Cast Moonlit Ground Shadow -->
            <ellipse cx="0" cy="95" rx="32" ry="10" fill="#000" opacity="0.85" />

            <!-- TRAVELER / VILLAGER FROM BEHIND (Walking steadily into darkness) -->
            <!-- Traditional Woolen Shawl (Loi / Chaddar) Draped Over Shoulders -->
            <path d="M-22 15 C-25 -5, -15 -18, 0 -18 C15 -18, 25 -5, 22 15 L18 68 L-18 68 Z" 
                  fill="#1c2433" stroke="#0b0e14" stroke-width="2" />
            <!-- Heavy Wool Texture Folds & Shading -->
            <path d="M-12 -6 Q-16 28 -14 68" stroke="#121722" stroke-width="3" fill="none" />
            <path d="M12 -6 Q16 28 14 68" stroke="#121722" stroke-width="3" fill="none" />
            <path d="M0 -15 Q-2 25 0 68" stroke="#121722" stroke-width="2.5" fill="none" />

            <!-- White/Grey Cotton Dhoti Lower Body (Tucked in Rajasthani style) -->
            <polygon points="-16,68 16,68 12,94 -12,94" fill="#2a3344" stroke="#0e121a" stroke-width="1.5" />
            <!-- Bare Dusty Feet Walking Away -->
            <ellipse cx="-7" cy="96" rx="4.5" ry="3" fill="#141822" />
            <ellipse cx="7" cy="94" rx="4.5" ry="3" fill="#141822" />

            <!-- Head & Muffled Wool Scarf Wrapped Around (View from behind) -->
            <ellipse cx="0" cy="-28" rx="10" ry="11" fill="#181e2b" stroke="#0a0d13" stroke-width="1.5" />

            <!-- Cool Moonlight Rim Highlight on Back Shoulders -->
            <path d="M-22 10 C-24 -4, -14 -18, 0 -18 C14 -18, 24 -4, 22 10" stroke="#7ba5db" stroke-width="1.8" fill="none" opacity="0.55" />

            <!-- CHILLING PALE FACE REVEAL (.traveler-face-reveal) -->
            <!-- Revealed when figure slowly turns around (.figure-slow-turn scaleX(-1)) -->
            <g class="traveler-face-reveal" opacity="0" transform="translate(0, -28)">
              <!-- Gaunt Pale Desaturated Visage (Ghostly identical to player) -->
              <ellipse cx="0" cy="0" rx="9" ry="11" fill="#cbd5e1" stroke="#475569" stroke-width="1.2" />
              <!-- Lifeless Black Hollow Eye Sockets -->
              <ellipse cx="-3.5" cy="-2" rx="2.2" ry="2.8" fill="#040608" />
              <ellipse cx="3.5" cy="-2" rx="2.2" ry="2.8" fill="#040608" />
              <!-- Sunken Cheeks & Bloodless Open Mouth -->
              <ellipse cx="0" cy="5.5" rx="2.2" ry="3.5" fill="#040608" />
            </g>
          </g>
        </g>
      </g>
    </svg>
  `;
}).call(this);
  },

  // 19. SCENE 18: The Final House
  renderFinalHouseScene() {
    return (function renderFinalHouseScene() {
  return `
    <svg class="scene-illustration" viewBox="0 0 390 844" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="final-room-wall" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stop-color="#0c101a" />
          <stop offset="50%" stop-color="#141a28" />
          <stop offset="100%" stop-color="#090d14" />
        </linearGradient>
        <radialGradient id="final-lamp-glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stop-color="#ffb443" stop-opacity="0.85" />
          <stop offset="40%" stop-color="#ea580c" stop-opacity="0.45" />
          <stop offset="75%" stop-color="#991b1b" stop-opacity="0.15" />
          <stop offset="100%" stop-color="#000000" stop-opacity="0" />
        </radialGradient>
      </defs>

      <!-- Dark Stone Room Interior Wall -->
      <rect width="100%" height="100%" fill="url(#final-room-wall)" />

      <!-- Stone Paved Floor -->
      <polygon points="0,520 390,520 390,844 0,844" fill="url(#pat-cobbles-night)" opacity="0.85" />

      <!-- OPEN DOORWAY LEADING OUT INTO NIGHT (#hotspot-final-house-door) -->
      <g id="hotspot-final-house-door" class="interactive-object final-door-assembly" transform="translate(195, 260)">
        <!-- Sandstone Door Frame -->
        <rect x="-42" y="-120" width="84" height="240" fill="url(#sandstone-night)" stroke="#090c14" stroke-width="2.5" />
        <!-- Night Abyss Beyond Open Door -->
        <rect x="-34" y="-110" width="68" height="230" fill="#020306" />
        <!-- Crescent Moon High Outside Door -->
        <circle cx="12" cy="-60" r="14" fill="#cbd5e1" opacity="0.8" />
        <circle cx="15" cy="-62" r="13" fill="#020306" />
        <!-- Cold Mist Curving In Across Door Threshold -->
        <ellipse cx="0" cy="115" rx="55" ry="16" fill="url(#fog-sweep-grad)" opacity="0.65" filter="url(#glow-blur)" />
      </g>

      <!-- THE WOODEN WRITING DESK IN FOREGROUND -->
      <g id="final-desk-assembly" transform="translate(195, 520)">
        <!-- Ground Cast Shadow -->
        <ellipse cx="0" cy="180" rx="170" ry="35" fill="#000" opacity="0.85" />

        <!-- Heavy Teak Desk Top Slab -->
        <polygon points="-160,40 160,40 145,-15 -145,-15" fill="#3b2413" stroke="#221307" stroke-width="2.5" />
        <polygon points="-158,38 158,38 143,-13 -143,-13" fill="url(#pat-wood-night)" opacity="0.9" />

        <!-- Desk Pillar Legs -->
        <rect x="-145" y="40" width="26" height="145" fill="#2b1a0d" stroke="#120a05" stroke-width="2" />
        <rect x="119" y="40" width="26" height="145" fill="#2b1a0d" stroke="#120a05" stroke-width="2" />

        <!-- BRASS OIL LAMP (#hotspot-final-house-lamp) -->
        <g id="hotspot-final-house-lamp" class="interactive-object final-lamp-assembly" transform="translate(-75, -25)">
          <ellipse cx="0" cy="-35" rx="160" ry="110" fill="url(#final-lamp-glow)" filter="url(#glow-blur)" />
          <ellipse cx="0" cy="14" rx="16" ry="6" fill="#a47a3e" stroke="#523812" stroke-width="1.2" />
          <ellipse cx="0" cy="-4" rx="12" ry="10" fill="#bfa042" stroke="#523812" stroke-width="1.4" />
          <ellipse cx="0" cy="-28" rx="4.5" ry="10" fill="#ff9100" />
          <ellipse cx="0" cy="-26" rx="2" ry="6" fill="#fffbe8" />
        </g>

        <!-- EMPTY GLASS BOTTLE WAITING ON DESK (#hotspot-final-house-bottle) -->
        <g id="hotspot-final-house-bottle" class="interactive-object final-bottle-assembly" transform="translate(75, 5)">
          <!-- Ground Shadow -->
          <ellipse cx="0" cy="16" rx="18" ry="6" fill="#000" opacity="0.6" />
          <!-- Upright Vintage Hand-Blown Green Bottle -->
          <path d="M-6 16 C-8 16, -10 12, -10 4 L-10 -15 C-10 -22, -6 -26, -4 -30 L-4 -42 L4 -42 L4 -30 C6 -26, 10 -22, 10 -15 L10 4 C10 12, 8 16, 6 16 Z" 
                fill="#162e28" stroke="#52a2b0" stroke-width="1.5" opacity="0.9" />
          <!-- Specular Shimmer -->
          <line x1="-5" y1="-22" x2="-5" y2="8" stroke="#fff" stroke-width="1.5" opacity="0.6" />
          <!-- Cork Stopper Resting Beside Bottle -->
          <rect x="14" y="8" width="10" height="7" rx="1.5" fill="#8f5b34" stroke="#4a2e19" stroke-width="1" />
        </g>

        <!-- HOTSPOT 1: THE FIRST NOTE LYING ON DESK (#hotspot-final-desk-note) @ x=50%, y=62% (195, 523.3) -->
        <g id="hotspot-final-desk-note" class="interactive-object final-desk-note-assembly" transform="translate(0, 10)">
          <!-- Cast Shadow -->
          <polygon points="-40,16 40,12 36,-10 -36,-6" fill="#000" opacity="0.65" />
          <!-- Yellowed Parchment Note Sheet -->
          <polygon points="-38,14 38,10 34,-12 -34,-8" fill="#fef3c7" stroke="#92400e" stroke-width="1.8" />
          <!-- First Note Headings & Text -->
          <text x="0" y="-1" text-anchor="middle" font-family="'Cinzel', serif" font-size="5.5" font-weight="700" letter-spacing="1" fill="#78350f">THE VILLAGE OF KALDHARA</text>
          <line x1="-28" y1="4" x2="28" y2="2" stroke="#b45309" stroke-width="1" opacity="0.7" />
          <line x1="-28" y1="8" x2="24" y2="6" stroke="#b45309" stroke-width="1" opacity="0.7" />
        </g>
      </g>
    </svg>
  `;
}).call(this);
  },

  // 20. SCENE 19: Kaldhara (Wide Panoramic Establishing Ending View)
  renderEndingScene() {
    return (function renderEndingScene() {
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

      <!-- Midnight Starry Sky Background -->
      <rect width="100%" height="100%" fill="url(#ending-sky-grad)" />

      <!-- Thousands of Cold Clear Night Stars -->
      <g fill="#fff" opacity="0.85">
        <circle cx="12%" cy="6%" r="1.4" class="twinkle-fast" />
        <circle cx="28%" cy="11%" r="1.1" />
        <circle cx="45%" cy="5%" r="1.6" class="twinkle-slow" />
        <circle cx="68%" cy="8%" r="1.3" />
        <circle cx="85%" cy="14%" r="1.5" class="twinkle-fast" />
        <circle cx="92%" cy="22%" r="1.1" />
        <circle cx="36%" cy="19%" r="1.3" />
        <circle cx="58%" cy="16%" r="1.5" class="twinkle-slow" />
        <circle cx="22%" cy="25%" r="1.2" />
        <circle cx="75%" cy="21%" r="1.4" />
      </g>

      <!-- Pale Crescent Moon High Over the Desert Valley -->
      <circle cx="78%" cy="12%" r="38" fill="#7ba5db" opacity="0.14" filter="url(#glow-blur)" />
      <circle cx="78%" cy="12%" r="16" fill="#eff6ff" opacity="0.85" />
      <circle cx="82%" cy="10%" r="15" fill="#070c18" />

      <!-- Distant Desert Mountain Ridges -->
      <path d="M0 240 Q90 190 200 225 T390 210 L390 320 L0 320 Z" fill="#080d19" />
      <path d="M0 280 Q130 240 260 270 T390 255 L390 380 L0 380 Z" fill="#0b111f" />

      <!-- THE SPRAWLING DESERT VALLEY OF KALDHARA (BIRD'S EYE PERSPECTIVE) -->
      <g id="hotspot-ending-view" class="ending-village-panorama">
        <!-- Valley Sandstone Desert Floor -->
        <polygon points="0,320 390,320 390,844 0,844" fill="#101524" />

        <!-- Winding Desert Cart Track Path Winding Through Ruins to Horizon -->
        <path d="M195 844 Q180 700 200 620 T170 500 T195 410" fill="none" stroke="#080c14" stroke-width="16" opacity="0.8" />
        <path d="M195 844 Q180 700 200 620 T170 500 T195 410" fill="none" stroke="#161c2c" stroke-width="8" opacity="0.6" stroke-dasharray="12 10" />

        <!-- CENTRAL ANCIENT SHIVA TEMPLE WITH TOWERING SHIKHARA -->
        <g id="panorama-temple" transform="translate(195, 340)">
          <polygon points="0,-60 -12,20 12,20" fill="#1b2438" stroke="#0d121c" stroke-width="1.2" />
          <ellipse cx="0" cy="-62" rx="4" ry="2" fill="#2d3a54" />
          <line x1="0" y1="-64" x2="0" y2="-72" stroke="#d99f36" stroke-width="1.5" />
          <!-- Temple Base Plinth -->
          <polygon points="-22,20 22,20 28,55 -28,55" fill="#222d46" stroke="#0d121c" stroke-width="1.5" />
          
          <!-- WINDOW 1: Central Temple Sanctum Window -->
          <g id="end-window-1" class="ending-window" transform="translate(-4, 32)">
            <rect width="8" height="12" rx="1.5" fill="#ffb443" class="window-lit-rect" filter="url(#ending-window-glow)" />
          </g>
        </g>

        <!-- NORTH CLUSTER OF HAVELIS (DEEP BACKGROUND) -->
        <!-- North Left Haveli -->
        <g transform="translate(110, 360)">
          <polygon points="0,20 45,10 48,65 -3,70" fill="#182236" stroke="#090e18" stroke-width="1.2" />
          <polygon points="-6,18 48,8 46,3 -8,12" fill="#263450" />
          <!-- WINDOW 2 -->
          <g id="end-window-2" class="ending-window" transform="translate(18, 28)">
            <rect width="8" height="11" rx="1.5" fill="#ffb443" class="window-lit-rect" filter="url(#ending-window-glow)" />
          </g>
        </g>

        <!-- North Right Haveli -->
        <g transform="translate(235, 350)">
          <polygon points="0,15 48,5 50,60 -2,66" fill="#182236" stroke="#090e18" stroke-width="1.2" />
          <polygon points="-5,14 52,4 50,0 -8,10" fill="#263450" />
          <!-- WINDOW 3 -->
          <g id="end-window-3" class="ending-window" transform="translate(20, 24)">
            <rect width="8" height="11" rx="1.5" fill="#ffb443" class="window-lit-rect" filter="url(#ending-window-glow)" />
          </g>
        </g>

        <!-- MID-VALLEY HAVELI CLUSTERS -->
        <!-- Mid Far Left Haveli -->
        <g transform="translate(40, 420)">
          <polygon points="0,25 65,10 68,85 -3,95" fill="#1e2a42" stroke="#0a101c" stroke-width="1.5" />
          <polygon points="-6,24 68,9 65,2 -8,16" fill="#2b3b5c" />
          <!-- WINDOW 4 -->
          <g id="end-window-4" class="ending-window" transform="translate(26, 38)">
            <rect width="9" height="13" rx="2" fill="#ffb443" class="window-lit-rect" filter="url(#ending-window-glow)" />
          </g>
        </g>

        <!-- Mid Center-Left Haveli -->
        <g transform="translate(125, 435)">
          <polygon points="0,20 60,10 62,80 -2,88" fill="#202d46" stroke="#0a101c" stroke-width="1.5" />
          <polygon points="-5,19 64,9 62,3 -7,13" fill="#2d3f63" />
          <!-- WINDOW 5 -->
          <g id="end-window-5" class="ending-window" transform="translate(24, 34)">
            <rect width="10" height="14" rx="2" fill="#ffb443" class="window-lit-rect" filter="url(#ending-window-glow)" />
          </g>
        </g>

        <!-- Mid Center-Right Haveli -->
        <g transform="translate(215, 430)">
          <polygon points="0,15 65,5 68,80 -3,86" fill="#202d46" stroke="#0a101c" stroke-width="1.5" />
          <polygon points="-6,14 69,4 66,-1 -8,9" fill="#2d3f63" />
          <!-- WINDOW 6 -->
          <g id="end-window-6" class="ending-window" transform="translate(28, 30)">
            <rect width="10" height="14" rx="2" fill="#ffb443" class="window-lit-rect" filter="url(#ending-window-glow)" />
          </g>
        </g>

        <!-- Mid Far Right Haveli -->
        <g transform="translate(295, 415)">
          <polygon points="0,20 62,8 65,85 -3,92" fill="#1e2a42" stroke="#0a101c" stroke-width="1.5" />
          <polygon points="-6,19 66,7 63,1 -8,12" fill="#2b3b5c" />
          <!-- WINDOW 7 -->
          <g id="end-window-7" class="ending-window" transform="translate(24, 36)">
            <rect width="9" height="13" rx="2" fill="#ffb443" class="window-lit-rect" filter="url(#ending-window-glow)" />
          </g>
        </g>

        <!-- LOWER VALLEY HAVELIS (FOREGROUND ARCHITECTURE) -->
        <!-- Foreground Left Haveli -->
        <g transform="translate(15, 520)">
          <polygon points="0,30 95,10 100,140 -5,155" fill="#253452" stroke="#0c1424" stroke-width="1.8" />
          <polygon points="-8,28 100,8 96,-2 -12,18" fill="#364973" />
          <!-- WINDOW 8 (Upper) -->
          <g id="end-window-8" class="ending-window" transform="translate(32, 45)">
            <rect width="11" height="16" rx="2" fill="#ffb443" class="window-lit-rect" filter="url(#ending-window-glow)" />
          </g>
          <!-- WINDOW 9 (Lower) -->
          <g id="end-window-9" class="ending-window" transform="translate(62, 75)">
            <rect width="11" height="16" rx="2" fill="#ffb443" class="window-lit-rect" filter="url(#ending-window-glow)" />
          </g>
        </g>

        <!-- Foreground Center-Left Haveli -->
        <g transform="translate(130, 530)">
          <polygon points="0,25 90,8 95,145 -5,158" fill="#273859" stroke="#0c1424" stroke-width="1.8" />
          <polygon points="-7,24 95,7 92,-3 -10,14" fill="#394f7d" />
          <!-- WINDOW 10 -->
          <g id="end-window-10" class="ending-window" transform="translate(26, 52)">
            <rect width="12" height="17" rx="2.5" fill="#ffb443" class="window-lit-rect" filter="url(#ending-window-glow)" />
          </g>
          <!-- WINDOW 11 -->
          <g id="end-window-11" class="ending-window" transform="translate(64, 82)">
            <rect width="12" height="17" rx="2.5" fill="#ffb443" class="window-lit-rect" filter="url(#ending-window-glow)" />
          </g>
        </g>

        <!-- Foreground Center-Right Haveli -->
        <g transform="translate(240, 525)">
          <polygon points="0,20 105,5 110,145 -5,156" fill="#273859" stroke="#0c1424" stroke-width="1.8" />
          <polygon points="-8,19 110,4 106,-5 -12,10" fill="#394f7d" />
          <!-- WINDOW 12 -->
          <g id="end-window-12" class="ending-window" transform="translate(35, 48)">
            <rect width="12" height="17" rx="2.5" fill="#ffb443" class="window-lit-rect" filter="url(#ending-window-glow)" />
          </g>
          <!-- WINDOW 13 -->
          <g id="end-window-13" class="ending-window" transform="translate(76, 78)">
            <rect width="12" height="17" rx="2.5" fill="#ffb443" class="window-lit-rect" filter="url(#ending-window-glow)" />
          </g>
        </g>

        <!-- Foreground Bottom Street Level (Center Forefront Window) -->
        <g transform="translate(170, 680)">
          <polygon points="0,15 65,5 68,85 -3,92" fill="#2c3f64" stroke="#0e1728" stroke-width="1.8" />
          <polygon points="-5,14 69,4 66,-2 -8,8" fill="#3e578a" />
          <!-- WINDOW 14: Final Climactic Window -->
          <g id="end-window-14" class="ending-window" transform="translate(26, 32)">
            <rect width="13" height="18" rx="2.5" fill="#ffb443" class="window-lit-rect" filter="url(#ending-window-glow)" />
          </g>
        </g>
      </g>
    </svg>
  `;
}).call(this);
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
