# "The Village That Remembers" (Kaldhara)

An interactive, lightweight, mobile-first storytelling web experience built from scratch.

> *"They say this village was abandoned 47 years ago. Nobody remembers exactly why. But some still return..."*

---

## 🌟 Key Features

- **Pure Lightweight Architecture**: Built with zero heavy frameworks, zero 3D game engines, and zero third-party dependencies (HTML5 + CSS3 + Vanilla JavaScript).
- **Mobile-First Design**: Optimized for a 390x844 mobile viewport with responsive desktop framing, touch swipe gestures, and no horizontal overflow.
- **Dynamic Day / Night System**:
  - Persistent `☀ DAY` / `🌙 NIGHT` toggle affecting the same locations.
  - Smooth vector color grading, star fields, moonlit shadows, glowing windows, and supernatural apparitions visible only at night.
- **11-Scene Story Progression**:
  1. **The Glass Bottle**: An almost-dark opening in wild grass; tap to unroll the first warning scroll.
  2. **Village Entrance**: Stone arch engraved `KALDHARA - 1978`, abandoned bicycle, cracked milestone.
  3. **Old Tea Stall**: Empty chair by day; mysterious waiting customer silhouette by night.
  4. **The Village Well**: Abandoned circular stone well by day; tall hooded figure leaning over the dark rim by night.
  5. **Old Temple**: Sacred shrine by day; rhythmically swaying brass bell and inner sanctum pulse by night.
  6. **The Red House**: Abandoned haveli by day; faint amber light flickering behind barred windows and beneath the red door by night.
  7. **Ancient Banyan Tree**: Tangled aerial roots by day; woman silhouette pointing toward the road by night.
  8. **The Strange Road**: Forking dirt road with backward-bent acacia tree and glowing footprints.
  9. **The Second Note**: Stone altar revealing the frantic survivor note and **The Real Rules**.
  10. **The Final House & The Final Twist**:
      - Toggling back to DAY displays `☀ DAY` in the UI, but Kaldhara remains cursed in perpetual darkness.
      - Reveals: *"It's not night. You just can't see the difference anymore."*
      - Unrolls the second bottle's message: *"You shouldn't have come here. But if you're reading this... you already know why."*
  11. **Panorama Overview & Ending**:
      - Pull-back bird's-eye panorama of Kaldhara showing a distant glowing window where a watcher observes you.
      - *"DID YOU NOTICE?"* reflection screen with an **ENTER AGAIN** replay button.
- **Procedural Web Audio Engine**: Synthesizes atmospheric wind, eerie drones, crickets, temple bell chimes, glass clinks, and horror stings via native Web Audio API (100% offline, zero audio file downloads).
- **Separated Story Data**: All chapter descriptions, note texts, real rules, and hotspot clues are stored cleanly in [`js/storyData.js`](file:///Users/pj/the-village-that-remembers/js/storyData.js) for effortless narrative editing.

---

## 📁 Project Structure

```
the-village-that-remembers/
├── index.html              # Mobile-first viewport container, HUD, and modal shells
├── css/
│   ├── style.css           # UI layout, typography, HUD pill, dialogue cards & parchment
│   ├── scenes.css          # Vector SVG styling, day/night color grading & themes
│   └── animations.css      # Hardware-accelerated CSS transitions, bell sway & flicker
├── js/
│   ├── storyData.js        # Narrative text, notes, rules, and hotspot definitions
│   ├── audio.js            # Native procedural Web Audio synthesizer engine
│   ├── illustrations.js    # Layered vector SVG illustrations for all 11 scenes
│   └── app.js              # State engine: transitions, gestures, hotspots & twist logic
└── README.md
```

---

## 🚀 How to Run Locally

You can run the site using any static web server:

```bash
cd the-village-that-remembers
python3 -m http.server 8080
```

Then open your browser at:
[http://localhost:8080](http://localhost:8080)
