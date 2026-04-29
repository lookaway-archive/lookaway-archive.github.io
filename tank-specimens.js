/**
 * ============================================
 * SPECIMEN: LOOKAWAY TANK
 * ORGAN: SPECIMEN REGISTRY ARCHIVE
 * RETRIEVAL: October 2025, Lookaway Archive
 * ============================================
 *
 * STATUS: Operational - ELECTRIC AMBER v3.4
 * FUNCTION: Specimen catalog - tracks all contained organisms
 * DEPENDENCIES: None (pure data structure)
 *
 * SURGICAL NOTES:
 * This archive contains the complete registry of all specimens
 * within the LOOKAWAY Tank preservation system. Each specimen
 * entry includes identification, containment status, deployment
 * metadata, access password, visual parameters, and behavior
 * configurations.
 *
 * v3.4 UPDATE: Slot 5 status changed to in_progress (LEAK-WORM
 *              currently being retrieved). New status type added:
 *              'in_progress' alongside 'contained' and 'vacant'.
 *              Sharp scatter flicker on membrane, red phosphor color.
 *              Click triggers ERROR :: SCATTER SIGNAL popup. Active
 *              count: 4 contained + 1 in-progress + 7 vacant = 12.
 * v3.3 UPDATE: Added LEAK-WORM-847A (Episode 04 — companion specimen
 *              to 847-T under the Linguistic-Substrate Collapse Dossier).
 *              PITCH (previously slotted for E04) moves to pending.
 * v3.2 UPDATE: Added LEAK-WORM-EROI (Episode 03)
 *
 * Current capacity: 12 membrane compartments
 * Active specimens: 4 (LEAK-WORM-847T, LEAK-WORM-575E, LEAK-WORM-EROI,
 *                      LEAK-WORM-847A)
 * In-progress slots: 1 (Slot 5 — retrieval in progress)
 * Vacant slots: 7 (reserved for future specimens)
 * ============================================
 */

const SPECIMENS = {

  // ==========================================
  // SPECIMEN REGISTRY - Complete archive catalog
  // ==========================================

  registry: [
    // ==========================================
    // SLOT 1: LEAK-WORM-847T (Active Specimen)
    // ==========================================
    {
      id: 1,
      code: "LEAK-WORM-847T",
      status: "contained",
      deployed: "October 2025",
      classification: "Interactive Narrative",

      // SPECIMEN DESCRIPTION
      description: "Explores quantum measurement paradox through Tlönian archaeological documentation. The organism exhibits temporal decay behaviors and responds to active observation. Contains Fragment 847-T from the Third Bureau of Reality Cartography.",

      // CONTAINMENT WARNING
      warning: "Specimen requires active observation to maintain stability. Neglect accelerates decay. Natural lifecycle: 32 seconds from birth to death without interaction. Ocean metamorphosis achievable through specific protocols.",

      // ACCESS PASSWORD
      password: "{🌊:🌊∈🌊}",

      // VISUAL PARAMETERS - Electric amber to match tank
      color: { r: 200, g: 165, b: 70 },  // Bright electric yellow-amber

      // BEHAVIOR CONFIGURATION - Defines animations & interactions
      behaviors: {
        idleAnimation: "float",      // float | breathe | pulse | drift | none
        animationSpeed: 4,           // seconds per cycle
        hoverEffect: "glow",         // glow | lift | pulse | ripple
        hoverIntensity: 1.3,         // multiplier
        beamReaction: "illuminate"   // illuminate | pulse | glow-strong
      },

      // NAVIGATION
      url: "/leak-worm-847t/",

      // PREVIEW CONFIGURATION - For future organism rendering
      preview: {
        shape: "organic",
        intensity: 0.3,
        pulse: true
      },

      // METADATA
      metadata: {
        author: "C.S. & N.C.",
        season: "02",
        episode: "01",
        version: "v1001"
      }
    },

    // ==========================================
    // SLOT 2: LEAK-WORM-575E (Active Specimen)
    // ==========================================
    {
      id: 2,
      code: "LEAK-WORM-575E",
      status: "contained",
      deployed: "October 2025",
      classification: "Interactive Narrative",

      // SPECIMEN DESCRIPTION
      description: "Investigates Earth power dynamics through temporal surveillance documentation. Contains Fragment 575E recording temporal consultation between [REDACTED] and Elizabeth I of England (Richmond Palace, May 1575). Explores circular feedback systems in political authority.",

      // CONTAINMENT WARNING
      warning: "Specimen contains classified temporal surveillance data. Subject exhibits pattern recognition behaviors across historical power structures. Natural lifecycle: 32 seconds from birth to death without interaction. Fragment includes unauthorized commentary from parasitic entities [CP: ...].",

      // ACCESS PASSWORD
      password: null,  // No password required - opened for TRIH engagement

      // VISUAL PARAMETERS - Electric amber matching 847T
      color: { r: 200, g: 165, b: 70 },  // Bright electric yellow-amber

      // BEHAVIOR CONFIGURATION - Same as 847T for consistency
      behaviors: {
        idleAnimation: "float",      // float | breathe | pulse | drift | none
        animationSpeed: 4,           // seconds per cycle
        hoverEffect: "glow",         // glow | lift | pulse | ripple
        hoverIntensity: 1.3,         // multiplier
        beamReaction: "illuminate"   // illuminate | pulse | glow-strong
      },

      // NAVIGATION
      url: "https://lookaway-archive.github.io/leak-worm-575E/",

      // PREVIEW CONFIGURATION
      preview: {
        shape: "organic",
        intensity: 0.3,
        pulse: true
      },

      // METADATA
      metadata: {
        author: "C.S. & N.C.",
        season: "02",
        episode: "02",
        version: "v1001"
      }
    },

    // ==========================================
    // SLOT 3: LEAK-WORM-EROI (Active Specimen)
    // ==========================================
    {
      id: 3,
      code: "LEAK-WORM-EROI",
      status: "contained",
      deployed: "February 2026",
      classification: "Visual Philosophy Document",

      // SPECIMEN DESCRIPTION
      description: "The specimen presents EROI — Energy Returned on Investment — as both ratio and trapped collector. References TRF-VIS-0042 from Art Theory Division.",

      // CONTAINMENT WARNING
      warning: "Specimen disguises philosophical argument as luxury advertisement. Natural lifecycle: 32 seconds from birth to death without interaction. No password required — entry is always available. Exit is the problem.",

      // ACCESS PASSWORD
      password: null,  // No password required

      // VISUAL PARAMETERS - Electric amber matching others
      color: { r: 200, g: 165, b: 70 },  // Bright electric yellow-amber

      // BEHAVIOR CONFIGURATION
      behaviors: {
        idleAnimation: "float",      // float | breathe | pulse | drift | none
        animationSpeed: 4,           // seconds per cycle
        hoverEffect: "glow",         // glow | lift | pulse | ripple
        hoverIntensity: 1.3,         // multiplier
        beamReaction: "illuminate"   // illuminate | pulse | glow-strong
      },

      // NAVIGATION
      url: "https://lookaway-archive.github.io/leak-worm-EROI/",

      // PREVIEW CONFIGURATION
      preview: {
        shape: "organic",
        intensity: 0.3,
        pulse: true
      },

      // METADATA
      metadata: {
        author: "C.S. & N.C.",
        season: "02",
        episode: "03",
        version: "v1001"
      }
    },

    // ==========================================
    // SLOT 4: LEAK-WORM-847A (Active Specimen)
    // ==========================================
    {
      id: 4,
      code: "LEAK-WORM-847A",
      status: "contained",
      deployed: "April 2026",
      classification: "Recovered Institutional Doctrine",

      // SPECIMEN DESCRIPTION
      description: "Articles of Command Doctrine — composite source text recovered from Earth's institutional archives (naval manuals, corporate governance literature, executive education curricula). Companion to LEAK-WORM-847T under the Linguistic-Substrate Collapse Dossier; civilizational-scale fragment paired with this local-scale source.",

      // CONTAINMENT WARNING
      warning: "Specimen carries six articles of institutional command doctrine recovered from Earth's training materials. The document names its own mechanism without seeing it; [CP:] marginalia surfaces what the institution cannot. Natural lifecycle: 32 seconds. No password required — public-facing institutional material. The document does not change. The reader's code does.",

      // ACCESS PASSWORD
      password: null,  // Gateless — public-facing institutional doctrine

      // VISUAL PARAMETERS - Electric amber matching siblings
      color: { r: 200, g: 165, b: 70 },  // Bright electric yellow-amber

      // BEHAVIOR CONFIGURATION
      behaviors: {
        idleAnimation: "float",      // float | breathe | pulse | drift | none
        animationSpeed: 4,           // seconds per cycle
        hoverEffect: "glow",         // glow | lift | pulse | ripple
        hoverIntensity: 1.3,         // multiplier
        beamReaction: "illuminate"   // illuminate | pulse | glow-strong
      },

      // NAVIGATION
      url: "https://lookaway-archive.github.io/leak-worm-847a/",

      // PREVIEW CONFIGURATION
      preview: {
        shape: "organic",
        intensity: 0.3,
        pulse: true
      },

      // METADATA
      metadata: {
        author: "C.S. & N.C.",
        season: "02",
        episode: "04",
        version: "v1001"
      }
    },

    // ==========================================
    // SLOT 5: [RETRIEVAL IN PROGRESS]
    // ==========================================
    // Visible alive slot — signals to readers that specimen retrieval
    // is happening. Sharp scatter flicker on membrane, red phosphor.
    // Click triggers ERROR :: SCATTER SIGNAL popup, no navigation.
    // ==========================================
    {
      id: 5,
      code: "[RETRIEVAL IN PROGRESS]",
      status: "in_progress",
      deployed: null,
      classification: null,

      // SPECIMEN DESCRIPTION
      description: null,

      // CONTAINMENT WARNING
      warning: null,

      // ACCESS PASSWORD
      password: null,

      // VISUAL PARAMETERS - Pirate red, matching corruption phosphor
      color: { r: 200, g: 30, b: 30 },  // Red — retrieval signal

      // BEHAVIOR CONFIGURATION - Sharp scatter flicker
      behaviors: {
        idleAnimation: "scatter",       // sharp interference flicker
        animationSpeed: 1.2,            // faster than active specimens
        hoverEffect: "glow",
        hoverIntensity: 1.5,
        beamReaction: "illuminate",
        flicker: "scatter"              // sharp interference style
      },

      // NAVIGATION - none, slot is not observable
      url: null,

      // PREVIEW CONFIGURATION - Scatter pattern, more intense
      preview: {
        shape: "scatter",
        intensity: 0.6,
        pulse: true
      },

      // METADATA
      metadata: null
    },

    // ==========================================
    // SLOTS 6-12: EMPTY SPECIMENS (Vacant)
    // ==========================================
    ...Array(7).fill(null).map((_, i) => ({
      id: i + 6,
      code: "[EMPTY]",
      status: "vacant",
      deployed: null,
      classification: null,
      description: null,
      warning: null,
      password: null,
      color: { r: 80, g: 80, b: 80 },
      url: null,
      preview: null,
      metadata: null
    }))
  ],

  // ==========================================
  // RETRIEVAL METHODS
  // ==========================================

  getById(id) {
    return this.registry.find(specimen => specimen.id === id);
  },

  getActive() {
    return this.registry.filter(specimen => specimen.status === 'contained');
  },

  getEmpty() {
    return this.registry.filter(specimen => specimen.status === 'vacant');
  },

  getInProgress() {
    return this.registry.filter(specimen => specimen.status === 'in_progress');
  },

  getByCode(code) {
    return this.registry.find(specimen => specimen.code === code);
  },

  countActive() {
    return this.getActive().length;
  },

  countEmpty() {
    return this.getEmpty().length;
  },

  countInProgress() {
    return this.getInProgress().length;
  },

  getAllIds() {
    return this.registry.map(specimen => specimen.id);
  },

  validate() {
    const requiredFields = ['id', 'code', 'status', 'color'];
    let valid = true;

    this.registry.forEach((specimen, index) => {
      requiredFields.forEach(field => {
        if (!specimen.hasOwnProperty(field)) {
          console.error(`❌ Specimen ${index + 1} missing field: ${field}`);
          valid = false;
        }
      });

      if (specimen.id !== index + 1) {
        console.error(`❌ Specimen ${index + 1} has wrong ID: ${specimen.id}`);
        valid = false;
      }

      if (!['contained', 'vacant', 'in_progress'].includes(specimen.status)) {
        console.error(`❌ Specimen ${specimen.id} has invalid status: ${specimen.status}`);
        valid = false;
      }

      if (!specimen.color || typeof specimen.color.r !== 'number') {
        console.error(`❌ Specimen ${specimen.id} has invalid color structure`);
        valid = false;
      }

      // Contained specimens must have url; in_progress and vacant must not
      if (specimen.status === 'contained' && !specimen.url) {
        console.error(`❌ Specimen ${specimen.id} is contained but missing url`);
        valid = false;
      }
    });

    if (this.registry.length !== 12) {
      console.error(`❌ Registry should have 12 specimens, found ${this.registry.length}`);
      valid = false;
    }

    if (this.countActive() !== 4) {
      console.error(`❌ Should have 4 contained specimens, found ${this.countActive()}`);
      valid = false;
    }

    if (this.countInProgress() !== 1) {
      console.error(`❌ Should have 1 in-progress specimen, found ${this.countInProgress()}`);
      valid = false;
    }

    if (this.countEmpty() !== 7) {
      console.error(`❌ Should have 7 vacant specimens, found ${this.countEmpty()}`);
      valid = false;
    }

    return valid;
  },

  // ==========================================
  // GET POPUP CONTENT - Generate popup data for specimen
  // ==========================================

  getPopupContent(id) {
    const specimen = this.getById(id);
    if (!specimen) return null;

    // No popup for vacant slots
    if (specimen.status === 'vacant') {
      return null;
    }

    // Error popup for in-progress retrievals (scatter signal)
    if (specimen.status === 'in_progress') {
      return {
        type: "error",
        title: "ERROR :: SCATTER SIGNAL",
        body: "[ retrieval in progress ]",
        buttons: [
          {
            text: "ACKNOWLEDGE",
            action: "close",
            primary: true
          }
        ]
      };
    }

    // Standard containment-protocol popup for contained specimens
    return {
      type: "specimen",
      title: "SPECIMEN CONTAINMENT PROTOCOL",
      code: specimen.code,
      status: specimen.status.toUpperCase(),
      classification: specimen.classification,
      deployed: specimen.deployed,
      description: specimen.description,
      warning: specimen.warning,
      password: specimen.password,  // Include password (null for gateless)
      url: specimen.url,
      buttons: [
        {
          text: "OBSERVE SPECIMEN",
          action: "navigate",
          primary: true
        },
        {
          text: "CANCEL",
          action: "close",
          primary: false
        }
      ]
    };
  },

  // ==========================================
  // GET MEMBRANE DATA - Generate membrane display data
  // ==========================================

  getMembraneData(id) {
    const specimen = this.getById(id);
    if (!specimen) return null;

    return {
      id: specimen.id,
      code: specimen.code,
      status: specimen.status.toUpperCase(),
      color: specimen.color,
      preview: specimen.preview,
      // in_progress IS clickable — click triggers error popup, no navigation
      clickable: specimen.status === 'contained' || specimen.status === 'in_progress',
      isEmpty: specimen.status === 'vacant',
      isInProgress: specimen.status === 'in_progress',
      // Pass flicker style through so renderer can apply scatter animation
      flicker: specimen.behaviors?.flicker || null,
      idleAnimation: specimen.behaviors?.idleAnimation || null
    };
  }
};

// ==========================================
// EXPORT VERIFICATION
// ==========================================

if (typeof window !== 'undefined') {
  window.SPECIMENS = SPECIMENS;
}

console.log('✔ tank-specimens.js loaded - Registry active (4 contained, 1 in-progress, 7 vacant, ELECTRIC AMBER v3.4)');
