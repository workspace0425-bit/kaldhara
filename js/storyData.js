/**
 * storyData.js
 * "The Village That Remembers" - Kaldhara Story Engine
 * 
 * Separates all narrative content, chapters, multi-step hotspot dialogues,
 * and notes from rendering and UI code for effortless editing.
 */

const STORY_DATA = {
  title: "The Village That Remembers",
  subtitle: "Kaldhara",

  // Opening Parchment Note
  openingNote: {
    heading: "THE VILLAGE OF KALDHARA",
    paragraphs: [
      "They say this village was abandoned 47 years ago.",
      "Nobody remembers exactly why.",
      "The people who left never spoke about what happened here.",
      "But some still return.", // Second playthrough subtle variation: "Some are still returning."
      "And those who return always leave something behind."
    ],
    warningHeading: "IF YOU ENTER THE VILLAGE",
    warningRules: [
      "Do not ring the temple bell after sunset.",
      "Do not drink from the old well.",
      "Do not knock on the red door.",
      "And whatever you hear behind you... don't turn around."
    ],
    buttonText: "ENTER THE VILLAGE →"
  },

  // Second Note & Real Rules (Discovered at Scene 13)
  secondNote: {
    heading: "FOUND IN THE WOODEN BOX",
    paragraphs: [
      "I found the first note too.",
      "I thought it was a story.",
      "It wasn't.",
      "The village wasn't abandoned.",
      "The villagers were told to leave.",
      "Nobody knows who gave the order.",
      "But every house was left exactly as it was.",
      "Food on tables.",
      "Clothes hanging outside.",
      "Lamps still burning.",
      "And 47 years later...",
      "the village still looks like everyone left yesterday."
    ],
    revealLead: "There's one thing the first note didn't tell you.",
    rulesHeading: "THE REAL RULES",
    rules: [
      "Don't answer if someone calls your name.",
      "Don't look inside the well.",
      "Don't enter the red house.",
      "Don't follow the woman beneath the banyan tree.",
      "If you see yourself walking ahead of you... turn off the lights."
    ],
    buttonText: "CONTINUE WALKING →"
  },

  // Canonical Story Locations (Scenes 01 to 19)
  scenes: [
    {
      id: "entrance",
      number: 1,
      sceneCode: "KALDHARA • 01",
      title: "Village Entrance",
      location: "Kaldhara Border Gate",
      dayAtmosphere: "Dusty pathway stretching into the quiet village. The air smells of sun-baked earth and dry leaves.",
      nightAtmosphere: "Dense violet shadows settle over the stone walls. An unnatural stillness grips the border.",
      hotspots: [
        {
          id: "stone-marker",
          label: "Boundary Milestone",
          x: 22,
          y: 68,
          dayLines: [
            "An ancient milestone reads: 'KALDHARA - 1978'.",
            "The distance markings below the name were scraped off long ago."
          ],
          nightLines: [
            "The stone feels colder than the night air.",
            "Fresh claw-like scratch marks trace the outline of the letters."
          ]
        },
        {
          id: "abandoned-cycle",
          label: "Rusty Bicycle",
          x: 76,
          y: 74,
          dayLines: [
            "A rusted bicycle rests against the crumbling brick wall.",
            "Dried mud still clings to the pedals, as if it was ridden here yesterday."
          ],
          nightLines: [
            "The front wheel shifts by half an inch in the silence.",
            "The corroded metal gives off a faint, metallic warmth."
          ]
        },
        {
          id: "hanging-cloth",
          label: "Torn Fabric",
          x: 48,
          y: 28,
          dayLines: [
            "A sun-bleached saffron cloth hangs from the archway.",
            "It flutters lazily in the warm dry breeze."
          ],
          nightLines: [
            "The cloth sways rhythmically, though the night air is completely still."
          ]
        }
      ]
    },
    {
      id: "tea-stall",
      number: 2,
      sceneCode: "KALDHARA • 02",
      title: "Old Tea Stall",
      location: "Chai Shack Crossroads",
      dayAtmosphere: "A weathered wooden shack under a rusted tin roof. An empty chair sits by the table.",
      nightAtmosphere: "The shack creaks softly. A faint shadow rests motionless in the gloom.",
      hotspots: [
        {
          id: "tea-chair",
          label: "The Wooden Chair",
          x: 64,
          y: 62,
          dayLines: [
            "The last customer used to sit here every evening.",
            "He stopped coming in 1978."
          ],
          nightLines: [
            "He still waits for his tea.",
            "Some say he isn't waiting for tea.",
            "And some say he's waiting for someone to sit opposite him."
          ]
        },
        {
          id: "tea-kettle",
          label: "Cold Brass Kettle",
          x: 42,
          y: 65,
          dayLines: [
            "A dented brass kettle sits on an unlit clay stove.",
            "Inside, dried tea leaves have turned to gray ash."
          ],
          nightLines: [
            "A whisper of cold steam drifts from the spout.",
            "The brass is freezing to the touch."
          ]
        },
        {
          id: "tea-counter",
          label: "Wooden Counter",
          x: 24,
          y: 54,
          dayLines: [
            "Faded tally marks carved with a knife into the timber.",
            "Forty-seven marks. None after."
          ],
          nightLines: [
            "A fresh, damp forty-eighth scratch cuts across the wood."
          ]
        }
      ]
    },
    {
      id: "well",
      number: 3,
      sceneCode: "KALDHARA • 03",
      title: "Village Well",
      location: "Central Stone Well",
      dayAtmosphere: "Sunlight glints on the weathered masonry. The pulley rope hangs perfectly still.",
      nightAtmosphere: "Deep darkness pools inside the stone cylinder. A faint sound echoes from deep below.",
      hotspots: [
        {
          id: "well-rim",
          label: "The Well Rim",
          x: 50,
          y: 58,
          isWell: true,
          dayLines: [
            "Deep scratch marks trace around the inner lip.",
            "They point inward, toward the bottom."
          ],
          nightLines: [
            "Something moved beneath the water.",
            "...",
            "Don't look again."
          ]
        },
        {
          id: "well-warning",
          label: "Weathered Warning",
          x: 32,
          y: 72,
          dayLines: [
            "Faded red paint on the stones reads: 'DO NOT USE'.",
            "The letters were painted with trembling hands."
          ],
          nightLines: [
            "The red letters glisten wet in the moonlight, as if painted moments ago."
          ]
        },
        {
          id: "well-rope",
          label: "Frayed Rope",
          x: 44,
          y: 38,
          dayLines: [
            "A thick hemp rope wrapped around the wooden pulley beam.",
            "It drops down into pitch-black stillness."
          ],
          nightLines: [
            "The rope is pulled taut as a bowstring.",
            "A slow rhythmic tug pulls it deeper into the abyss."
          ]
        }
      ]
    },
    {
      id: "temple",
      number: 4,
      sceneCode: "KALDHARA • 04",
      title: "Temple Road",
      location: "Shrine of Kaldhara",
      dayAtmosphere: "A peaceful ancient stone mandir with carved pillars and scattered marigolds.",
      nightAtmosphere: "The temple stands quiet and dark. The hanging bell moves slightly.",
      hotspots: [
        {
          id: "temple-bell",
          label: "The Brass Bell",
          x: 50,
          y: 34,
          isTempleBell: true,
          dayLines: [
            "A heavy brass bell hangs from the stone beam.",
            "A peaceful chime echoes softly across the quiet steps."
          ],
          nightLines: [
            "DONG.",
            "...",
            "Another bell answered, slightly closer."
          ]
        },
        {
          id: "temple-warning",
          label: "Carved Inscription",
          x: 28,
          y: 62,
          dayLines: [
            "A stone inscription reads: 'RING ONLY AT DAWN'.",
            "The rest of the carving was chipped away."
          ],
          nightLines: [
            "The chipped stones look wet, like fresh wounds."
          ]
        },
        {
          id: "temple-steps",
          label: "Stone Steps",
          x: 68,
          y: 76,
          dayLines: [
            "Weathered stone steps strewn with dried orange marigold petals.",
            "Incense ash rests in the crevices of the carved guardians."
          ],
          nightLines: [
            "The petals have turned black as charcoal.",
            "Bare footprints in gray ash lead up into the dark inner sanctum."
          ]
        }
      ]
    },
    {
      id: "red-house",
      number: 5,
      sceneCode: "KALDHARA • 05",
      title: "The Red House",
      location: "Isolated Compound",
      dayAtmosphere: "An old isolated house with faded cream walls and a striking red door. Cracked plaster and overgrown creepers frame the narrow veranda.",
      nightAtmosphere: "A faint amber light glows behind the curtain of the small window. Occasionally, a subtle shadow crosses the glass.",
      hotspots: [
        {
          id: "red-door",
          label: "The Red Door",
          x: 50,
          y: 60,
          isRedDoor: true,
          dayLines: [
            "Nobody has lived here for 47 years.",
            "At least, that's what the villagers say."
          ],
          nightLines: [
            "The red paint looks wet, like fresh blood.",
            "A faint scuffling comes from the other side of the wood."
          ]
        },
        {
          id: "red-house-warning",
          label: "Weathered Marking",
          x: 68,
          y: 50,
          dayLines: [
            "Carved into the lintel in faded red ochre:",
            "DO NOT KNOCK."
          ],
          nightLines: [
            "The carving glows faintly in the dark:",
            "DO NOT KNOCK."
          ]
        },
        {
          id: "red-house-window",
          label: "Curtained Window",
          x: 26,
          y: 44,
          dayLines: [
            "Sun-bleached linen curtains hung across a small wooden frame.",
            "Dust coats the sill. No signs of life."
          ],
          nightLines: [
            "A warm oil lamp burns inside.",
            "A shadow glides slowly behind the linen, pausing as you watch."
          ]
        }
      ]
    },
    {
      id: "banyan-tree",
      number: 6,
      sceneCode: "KALDHARA • 06",
      title: "The Banyan Tree",
      location: "Sacred Crossroads",
      dayAtmosphere: "A massive ancient banyan tree with aerial roots reaching the ground like hanging ropes. Sacred red threads hang faded in the dusty air.",
      nightAtmosphere: "The tree seems larger in the dark. Deep violet fog sweeps across the roots, revealing a solitary silhouette beneath.",
      hotspots: [
        {
          id: "banyan-roots",
          label: "Hanging Roots",
          x: 20,
          y: 68,
          dayLines: [
            "Thick aerial roots forming a natural wooden cage.",
            "The roots feel pulse-like against the dust.",
            "Cold air radiates from the sacred stones."
          ],
          nightLines: [
            "The roots sway slowly with no breeze.",
            "A faint rustling sounds from within the heart of the trunk."
          ]
        },
        {
          id: "banyan-figure",
          label: "The Silhouette",
          x: 58,
          y: 54,
          isBanyanWoman: true,
          dayLines: [
            "Quiet sunbeams filter through the dense leaves onto old prayer stones."
          ],
          nightLines: [
            "She has been pointing toward that road for longer than anyone remembers.",
            "Don't follow her."
          ]
        },
        {
          id: "banyan-threads",
          label: "Sacred Threads",
          x: 28,
          y: 44,
          dayLines: [
            "Faded red threads tied to the aerial roots.",
            "Prayers tied by villagers whose descendants never returned."
          ],
          nightLines: [
            "The red threads sway rhythmically in the still night air."
          ]
        }
      ]
    },
    {
      id: "empty-road",
      number: 7,
      sceneCode: "KALDHARA • 07",
      title: "The Empty Road",
      location: "Outer Boundary Road",
      dayAtmosphere: "A long dusty road winding into the vast horizon. Rolling scrub hills stretch into the pale sky. Kaldhara remains visible behind.",
      nightAtmosphere: "Dense crawling mist swallows the road ahead. No matter how far you walk, the distant village lights never fade.",
      hotspots: [
        {
          id: "empty-road-path",
          label: "The Dusty Road",
          x: 50,
          y: 65,
          dayLines: [
            "The empty road leads out of Kaldhara toward the distant desert hills.",
            "The heat shimmers over the cracked earth."
          ],
          nightLines: [
            "The road stretches ahead into dense, rolling mist.",
            "No matter how far you walk, the horizon never seems to get closer."
          ]
        },
        {
          id: "road-tree",
          label: "Crooked Acacia",
          x: 72,
          y: 48,
          dayLines: [
            "A solitary, thorny acacia tree stands twisted against the sky.",
            "Dry pods rattle softly in the warm desert breeze."
          ],
          nightLines: [
            "The twisted branches cast long, skeletal shadows across the dust.",
            "You feel like you've passed this exact tree before."
          ]
        },
        {
          id: "road-village-view",
          label: "Distant Kaldhara",
          x: 22,
          y: 52,
          dayLines: [
            "Looking back, the sandstone roofs and temple shikhara of Kaldhara fade into the haze."
          ],
          nightLines: [
            "Faint amber lights flicker in the dark haveli windows behind you.",
            "You thought you were walking away from the village.",
            "You're not."
          ]
        }
      ]
    },
    {
      id: "village-square",
      number: 8,
      sceneCode: "KALDHARA • 08",
      title: "Village Square",
      location: "Central Chauk",
      dayAtmosphere: "A sunlit central square surrounded by old houses. Benches, carts, and abandoned belongings suggest people fled abruptly.",
      nightAtmosphere: "Faint amber lights burn in several upper windows that were dark by day. The square feels subtly occupied.",
      hotspots: [
        {
          id: "notice-board",
          label: "Old Notice Board",
          x: 50,
          y: 64,
          isNoticeBoard: true,
          dayLines: [
            "ALL RESIDENTS MUST LEAVE BEFORE SUNSET.",
            "DO NOT RETURN UNTIL FURTHER NOTICE.",
            "...THE VILLAGE IS NOT EMPTY."
          ],
          nightLines: [
            "The paper edges flutter, though the night air is still.",
            "ALL RESIDENTS MUST LEAVE BEFORE SUNSET.",
            "The final torn note feels damp: '...THE VILLAGE IS NOT EMPTY.'"
          ]
        },
        {
          id: "square-cart",
          label: "Bullock Cart",
          x: 24,
          y: 70,
          isSquareCart: true,
          dayLines: [
            "A loaded wooden cart with grain sacks, abandoned in the center of the road.",
            "Whoever packed it never hitched the bullocks."
          ],
          nightLines: [
            "The wooden cart groans softly under its weight.",
            "The grain sacks look freshly tied."
          ]
        },
        {
          id: "hanging-clothes",
          label: "Hanging Clothes",
          x: 78,
          y: 38,
          dayLines: [
            "Faded cotton kurtas and saris hanging on a coir line.",
            "Stiff and bleached from decades under the harsh desert sun."
          ],
          nightLines: [
            "The clothes hang completely rigid in the dead stillness.",
            "One small child's sleeve is still damp."
          ]
        }
      ]
    },
    {
      id: "abandoned-house",
      number: 9,
      sceneCode: "KALDHARA • 09",
      title: "The Abandoned House",
      location: "South Lane Veranda",
      dayAtmosphere: "A faded blue haveli with an open veranda and doors left wide open, as if the family stepped out for just a minute.",
      nightAtmosphere: "A soft glow appears in the upper window. For a second, a dark silhouette crosses the glass.",
      hotspots: [
        {
          id: "house-window",
          label: "Veranda Window",
          x: 50,
          y: 38,
          isHouseWindow: true,
          dayLines: [
            "Someone left the door open.",
            "But they took nothing with them."
          ],
          nightLines: [
            "A warm oil lamp flickers on an upper sill.",
            "A hand presses lightly against the glass from inside."
          ]
        },
        {
          id: "children-toy",
          label: "Wooden Pull-Toy",
          x: 28,
          y: 74,
          isChildrenToy: true,
          dayLines: [
            "A child's carved wooden horse on little wheels, resting on the steps.",
            "A frayed jute string trails toward the open doorway."
          ],
          nightLines: [
            "The wooden toy sits rotated toward you.",
            "The wheels are freshly greased."
          ]
        },
        {
          id: "family-photo",
          label: "Framed Photograph",
          x: 72,
          y: 56,
          dayLines: [
            "A silver-framed family portrait resting on an outdoor stone niche.",
            "The faces have been scratched out with sharp stone."
          ],
          nightLines: [
            "In the dark, the scratched faces seem to stare directly into your eyes."
          ]
        }
      ]
    },
    {
      id: "old-school",
      number: 10,
      sceneCode: "KALDHARA • 10",
      title: "The Old School",
      location: "Courtyard & Veranda",
      dayAtmosphere: "An open courtyard with cracked slate floors, an old blackboard on the veranda wall, and wooden benches rotting under sunbeams.",
      nightAtmosphere: "The iron chains of an old swing creak rhythmically. Chalk dust floats glowing in the cold moonlight.",
      hotspots: [
        {
          id: "school-blackboard",
          label: "The Blackboard",
          x: 52,
          y: 50,
          isSchoolBlackboard: true,
          dayLines: [
            "Faded Hindi vowels written in white chalk across the slate.",
            "At the bottom, half-erased: 'DO NOT STAY AFTER DARK'."
          ],
          nightLines: [
            "A line of fresh chalk dust rests below the slate.",
            "The board reads: 'TODAY IS YOUR TURN'."
          ]
        },
        {
          id: "school-swing",
          label: "The Old Swing",
          x: 78,
          y: 62,
          isSchoolSwing: true,
          dayLines: [
            "A wooden plank suspended from a rusted iron chain attached to the neem tree.",
            "The seat is smooth from years of children playing."
          ],
          nightLines: [
            "The swing rocks gently back and forth.",
            "Two small indentations press down into the wood as if someone is sitting there."
          ]
        },
        {
          id: "school-bell",
          label: "Iron Gong",
          x: 22,
          y: 42,
          dayLines: [
            "A circular iron rail plate used as the school period bell.",
            "A wooden mallet hangs beside it on a coir rope."
          ],
          nightLines: [
            "The gong vibrates with a faint, silent hum.",
            "It feels warm to the touch."
          ]
        }
      ]
    },
    {
      id: "forest-edge",
      number: 11,
      sceneCode: "KALDHARA • 11",
      title: "The Forest Edge",
      location: "Outer Boundary Road",
      dayAtmosphere: "The village lane leaves the stone houses behind and reaches the edge of a dense, towering forest.",
      nightAtmosphere: "The woods beyond the path are pitch black. The silence is heavy and suffocating.",
      hotspots: [
        {
          id: "forest-sign",
          label: "Weathered Warning Sign",
          x: 30,
          y: 64,
          isForestSign: true,
          dayLines: [
            "A weathered wooden board planted deep into the verge:",
            "'DO NOT ENTER AFTER DARK.'"
          ],
          nightLines: [
            "The words 'AFTER DARK' have been scratched away by deep claw marks.",
            "The sign now simply reads:",
            "'DO NOT ENTER.'"
          ]
        },
        {
          id: "forest-path",
          label: "Path into Trees",
          x: 58,
          y: 70,
          dayLines: [
            "The narrow dirt trail enters the towering sal and teak trees.",
            "Peaceful, but deeply isolated from the rest of the world."
          ],
          nightLines: [
            "Something in the forest is listening.",
            "The path ahead into the forest is swallowed by blackness. You cannot enter.",
            "Follow the village lane along the verge."
          ]
        },
        {
          id: "forest-trees",
          label: "Dense Canopy",
          x: 50,
          y: 28,
          dayLines: [
            "High branches filter the sunlight into shimmering golden motes.",
            "Distant mountain crests loom beyond the green canopy."
          ],
          nightLines: [
            "The canopy forms a solid ceiling of black leaves.",
            "Pairs of unblinking yellow eyes reflect the moon from high in the boughs."
          ]
        }
      ]
    },
    {
      id: "small-shrine",
      number: 12,
      sceneCode: "KALDHARA • 12",
      title: "The Small Shrine",
      location: "Forest Verge Altar",
      dayAtmosphere: "A peaceful ancient stone shrine beside the road, adorned with fresh marigolds and red cloth.",
      nightAtmosphere: "Incense smoke curls into the night air. A solitary oil lamp burns with a steady, quiet flame.",
      hotspots: [
        {
          id: "shrine-plate",
          label: "Tarnished Metal Plate",
          x: 44,
          y: 72,
          dayLines: [
            "An old brass plate tarnished green with decades of weather:",
            "'FOR THOSE WHO COULD NOT LEAVE.'"
          ],
          nightLines: [
            "The tarnished metal is hot to the touch.",
            "'FOR THOSE WHO COULD NOT LEAVE.'"
          ]
        },
        {
          id: "shrine-lamp",
          label: "Burning Diya Lamp",
          x: 34,
          y: 56,
          isShrineLamp: true,
          dayLines: [
            "A small terracotta lamp resting among dried orange petals.",
            "Incense ash settles gently on the stone ledge."
          ],
          nightLines: [
            "It was lit recently.",
            "The mustard oil is fresh and warm.",
            "But the village has been empty for 47 years."
          ]
        },
        {
          id: "shrine-flowers",
          label: "Fresh Marigolds",
          x: 50,
          y: 64,
          isShrineFlowers: true,
          dayLines: [
            "Fresh marigold petals strewn across the stone threshold.",
            "They seem completely fresh, as if plucked this morning."
          ],
          nightLines: [
            "Bright orange petals resting in the dust.",
            "Why did someone place them here tonight?"
          ]
        },
        {
          id: "shrine-incense",
          label: "Incense Burner",
          x: 62,
          y: 52,
          dayLines: [
            "A sweet fragrance of sandalwood and rose hangs in the warm afternoon air."
          ],
          nightLines: [
            "Fragrant white smoke rises into the motionless night.",
            "Nobody is here to tend it."
          ]
        }
      ]
    },
    {
      id: "second-note",
      number: 13,
      sceneCode: "KALDHARA • 13",
      title: "The Second Note",
      location: "Shrine Boundary Stone",
      dayAtmosphere: "Beside the stone shrine boundary, an antique wooden box bound in brass lies waiting in the grass.",
      nightAtmosphere: "A cold mist settles over the boundary stone. The wooden box sits quiet and propped slightly open.",
      hotspots: [
        {
          id: "second-note-box",
          label: "The Wooden Box",
          x: 50,
          y: 62,
          isSecondNoteBox: true,
          dayLines: [
            "An old wooden box bound in weathered brass, resting beside the shrine boundary.",
            "Something is tucked inside."
          ],
          nightLines: [
            "An old wooden box bound in weathered brass.",
            "Inside lies another rolled piece of paper."
          ]
        },
        {
          id: "shrine-boundary",
          label: "Boundary Stone",
          x: 26,
          y: 50,
          dayLines: [
            "The stone boundary separating Kaldhara from the wild forest.",
            "Carved markers indicate the end of the inhabited village."
          ],
          nightLines: [
            "The boundary stones are ice cold.",
            "Beyond this point, no footsteps return."
          ]
        }
      ]
    },
    {
      id: "forgotten-street",
      number: 14,
      sceneCode: "KALDHARA • 14",
      title: "The Forgotten Street",
      location: "Hidden Alleyway",
      dayAtmosphere: "A narrow, forgotten stone lane that wasn't visible before. The high walls seem closer together than any normal street.",
      nightAtmosphere: "The lane is suffocated in deep shadow. Several wooden doors are cracked open by inches.",
      hotspots: [
        {
          id: "street-whisper",
          label: "Hidden Lane",
          x: 50,
          y: 72,
          dayLines: [
            "Have you seen this street before?",
            "No."
          ],
          nightLines: [
            "The stone alley seems to tighten behind you as you walk.",
            "Nobody in Kaldhara ever spoke of this street."
          ]
        },
        {
          id: "street-doors",
          label: "Ajar Doors",
          x: 26,
          y: 54,
          dayLines: [
            "Heavy weathered wooden doors padlocked from the outside.",
            "Dead silence behind the stone."
          ],
          nightLines: [
            "One of the doors has swung open by three inches.",
            "A faint draft of cold cellar air spills into the lane."
          ]
        },
        {
          id: "street-figure",
          label: "Distant Figure",
          x: 52,
          y: 44,
          isStreetFigure: true,
          dayLines: [
            "The far end of the alley bends into a dark archway."
          ],
          nightLines: [
            "A silhouetted figure stands motionless at the end of the alley.",
            "It doesn't move. It is watching you."
          ]
        }
      ]
    },
    {
      id: "house-at-end",
      number: 15,
      sceneCode: "KALDHARA • 15",
      title: "The House at the End",
      location: "Cul-de-sac Entrance",
      dayAtmosphere: "At the end of the forgotten street stands an ancient solitary house. Unlike every other house, a warm presence lingers within.",
      nightAtmosphere: "A warm golden light glows behind the curtained window. A dark silhouette passes slowly across the glass.",
      hotspots: [
        {
          id: "end-house-bottle",
          label: "The Glass Bottle",
          x: 64,
          y: 74,
          isEndHouseBottle: true,
          dayLines: [
            "YOU'VE SEEN THIS BEFORE.",
            "But not this one."
          ],
          nightLines: [
            "An old glass bottle resting on the cold stone step.",
            "Inside is a rolled piece of paper, sealed in red cord."
          ]
        },
        {
          id: "end-house-door",
          label: "The Weathered Door",
          x: 48,
          y: 58,
          isEndHouseDoor: true,
          dayLines: [
            "The carved wooden door is closed tight.",
            "A faint warmth bleeds through the ancient timber."
          ],
          nightLines: [
            "The door is slightly ajar.",
            "A golden beam of lantern light spills across the stone threshold."
          ]
        }
      ]
    },
    {
      id: "room",
      number: 16,
      sceneCode: "KALDHARA • 16",
      title: "The Documentation Room",
      location: "The House at the End",
      dayAtmosphere: "A dusty study preserved across time. Maps, bottles, and manuscripts cover every surface.",
      nightAtmosphere: "A brass lantern burns on the desk, casting long shadows. It feels as if someone stepped away seconds ago.",
      hotspots: [
        {
          id: "room-notes",
          label: "Rolled Notes",
          x: 42,
          y: 68,
          isRoomNotes: true,
          dayLines: [
            "Scattered handwritten pages and rolled notes across the desk.",
            "The ink is faded brown with age."
          ],
          nightLines: [
            "I came here in 1981.",
            "I found the same note.",
            "I thought I could leave.",
            "I was wrong.",
            "The village doesn't keep people.",
            "It keeps memories."
          ]
        },
        {
          id: "room-photo",
          label: "Old Photograph",
          x: 68,
          y: 62,
          isRoomPhoto: true,
          dayLines: [
            "A vintage framed silver photograph resting against the lantern.",
            "It depicts the dusty road of Kaldhara."
          ],
          nightLines: [
            "A faded photograph of the village road.",
            "A person stands in the foreground, facing away from the camera.",
            "Wearing the exact clothes you have on right now.",
            "There is no date on the back."
          ]
        },
        {
          id: "room-maps",
          label: "Village Maps",
          x: 50,
          y: 35,
          dayLines: [
            "Hand-drawn maps of Kaldhara pinned to the crumbling plaster wall.",
            "Detailed paths connecting the well, the temple, the banyan tree, and the square."
          ],
          nightLines: [
            "Dozens of routes charted across Kaldhara from 1978 to today.",
            "Every single trail loops back and terminates at this exact desk."
          ]
        }
      ]
    },
    {
      id: "road-figure",
      number: 17,
      sceneCode: "KALDHARA • 17",
      title: "The Person on the Road",
      location: "The Outskirts Road",
      dayAtmosphere: "The road stretches through the desolate landscape. The air is quiet and still.",
      nightAtmosphere: "Pitch-black stillness. Ahead on the road, a silhouette is walking away into the cold mist.",
      hotspots: [
        {
          id: "road-walker",
          label: "Walking Silhouette",
          x: 50,
          y: 55,
          isRoadWalker: true,
          dayLines: [
            "The lonely road stretching into the desert hills."
          ],
          nightLines: [
            "A figure walking alone ahead of you in the dark.",
            "It continues walking into the mist.",
            "It looks strangely familiar."
          ]
        },
        {
          id: "road-night-stones",
          label: "Border Stones",
          x: 25,
          y: 68,
          dayLines: [
            "Crumbling roadside stone boundary."
          ],
          nightLines: [
            "Ancient boundary stones covered in dried salt and dust.",
            "'If you see yourself walking ahead of you... turn off the lights.'"
          ]
        }
      ]
    },
    {
      id: "final-house",
      number: 18,
      sceneCode: "KALDHARA • 18",
      title: "The Final House",
      location: "Revisiting Kaldhara",
      dayAtmosphere: "The village lane feels altered. Subtle warmth radiates from several open doorways.",
      nightAtmosphere: "Warm amber lights burn in windows that were dark before. The front door of the final house stands wide open.",
      hotspots: [
        {
          id: "final-desk-note",
          label: "The First Note",
          x: 50,
          y: 62,
          isFinalDeskNote: true,
          dayLines: [
            "The original rolled note rests upon the desk inside the open doorway."
          ],
          nightLines: [
            "The parchment lies unrolled beneath the lantern light.",
            "The words have shifted."
          ]
        }
      ]
    },
    {
      id: "ending",
      number: 19,
      sceneCode: "KALDHARA • 19",
      title: "Kaldhara",
      location: "Valley of Kaldhara",
      dayAtmosphere: "A wide panorama of the silent desert village under the endless desert sky.",
      nightAtmosphere: "The entire village of Kaldhara viewed from the ridge. One by one, every window in the valley begins to burn with warm light.",
      hotspots: [
        {
          id: "ending-view",
          label: "The Awakened Village",
          x: 50,
          y: 50,
          isEndingView: true,
          dayLines: [
            "The silent houses of Kaldhara spread across the ancient sands."
          ],
          nightLines: [
            "Every window glows warmly in the night.",
            "The village is no longer empty."
          ]
        }
      ]
    }
  ]
};

if (typeof Object.freeze === 'function') {
  Object.freeze(STORY_DATA);
}
