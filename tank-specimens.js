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
 *              Sharp scatter flicker on membrane, hot ember phosphor
 *              color (institutional palette, intensified — not pirate
 *              red, which broke harmony with active electric amber).
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

      description: "Explores quantum measurement paradox through Tlönian archaeological documentation. The organism exhibits temporal decay behaviors and responds to active observation. Contains Fragment 847-T from the Third Bureau of Reality Cartography.",

      warning: "Specimen requires active observation to maintain stability. Neglect accelerates decay. Natural lifecycle: 32 seconds from birth to death without interaction. Ocean metamorphosis achievable through specific protocols.",

      password: "{🌊:🌊∈🌊}",

      color: { r: 200, g: 165, b: 70 },

      behaviors: {
        idleAnimation: "float",
        animationSpeed: 4,
        hoverEffect: "glow",
        hoverIntensity: 1.3,
        beamReaction: "illuminate"
      },

      url: "/leak-worm-847t/",

      preview: {
        shape: "organic",
        intensity: 0.3,
        pulse: true
      },

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

      description: "Investigates Earth power dynamics through temporal surveillance documentation. Contains Fragment 575E recording temporal consultation between [REDACTED] and Elizabeth I of England (Richmond Palace, May 1575). Explores circular feedback systems in political authority.",

      warning: "Specimen contains classified temporal surveillance data. Subject exhibits pattern recognition behaviors across historical power structures. Natural lifecycle: 32 seconds from birth to death without interaction. Fragment includes unauthorized commentary from parasitic entities [CP: ...].",

      password: null,

      color: { r: 200, g: 165, b: 70 },

      behaviors: {
        idleAnimation: "float",
        animationSpeed: 4,
        hoverEffect: "glow",
        hoverIntensity: 1.3,
        beamReaction: "illuminate"
      },

      url: "https://lookaway-archive.github.io/leak-worm-575E/",

      preview: {
        shape: "organic",
        intensity: 0.3,
        pulse: true
      },

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

      description: "The specimen presents EROI — Energy Returned on Investment — as both ratio and trapped collector. References TRF-VIS-0042 from Art Theory Division.",

      warning: "Specimen disguises philosophical argument as luxury advertisement. Natural lifecycle: 32 seconds from birth to death without interaction. No password required — entry is always available. Exit is the problem.",

      password: null,

      color: { r: 200, g: 165, b: 70 },

      behaviors: {
        idleAnimation: "float",
        animationSpeed: 4,
        hoverEffect: "glow",
        hoverIntensity: 1.3,
        beamReaction: "illuminate"
      },

      url: "https://lookaway-archive.github.io/leak-worm-EROI/",

      preview: {
        shape: "organic",
        intensity: 0.3,
        pulse: true
      },

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

      description: "Articles of Command Doctrine — composite source text recovered from Earth's institutional archives (naval manuals, corporate governance literature, executive education curricula). Companion to LEAK-WORM-847T under the Linguistic-Substrate Collapse Dossier; civilizational-scale fragment paired with this local-scale source.",

      warning: "Specimen carries six articles of institutional command doctrine recovered from Earth's training materials. The document names its own mechanism without seeing it; [CP:] marginalia surfaces what the institution cannot. Natural lifecycle: 32 seconds. No password required — public-facing institutional material. The document does not change. The reader's code does.",

      password: null,

      color: { r: 200, g: 165, b: 70 },

      behaviors: {
        idleAnimation: "float",
        animationSpeed: 4,
        hoverEffect: "glow",
        hoverIntensity: 1.3,
        beamReaction: "illuminate"
      },

      url: "https://lookaway-archive.github.io/leak-worm-847a/",

      preview: {
        shape: "organic",
        intensity: 0.3,
        pulse: true
      },

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
    // is happening. Sharp scatter flicker on membrane, hot ember phosphor.
    // Color stays in the institutional warm palette family but shifted
    // toward orange-ember (intensified amber, "burning hotter") rather
    // than pirate red (which broke palette harmony).
    // Click triggers ERROR :: SCATTER SIGNAL popup, no navigation.
    // ==========================================
    {
      id: 5,
      code: "[RETRIEVAL IN PROGRESS]",
      status: "in_progress",
      deployed: null,
      classification: null,

      description: null,

      warning: null,

      password: null,

      // VISUAL PARAMETERS - Hot ember, intensified amber palette
      color: { r: 220, g: 110, b: 40 },  // Hot ember — burning hotter than active

      // BEHAVIOR CONFIGURATION - Sharp scatter flicker
      behaviors: {
        idleAnimation: "scatter",
        animationSpeed: 1.2,
        hoverEffect: "glow",
        hoverIntensity: 1.5,
        beamReaction: "illuminate",
        flicker: "scatter"
      },

      url: null,

      preview: {
        shape: "scatter",
        intensity: 0.6,
        pulse: true
      },

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

    if (specimen.status === 'vacant') {
      return null;
    }

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

    return {
      type: "specimen",
      title: "SPECIMEN CONTAINMENT PROTOCOL",
      code: specimen.code,
      status: specimen.status.toUpperCase(),
      classification: specimen.classification,
      deployed: specimen.deployed,
      description: specimen.description,
      warning: specimen.warning,
      password: specimen.password,
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
      clickable: specimen.status === 'contained' || specimen.status === 'in_progress',
      isEmpty: specimen.status === 'vacant',
      isInProgress: specimen.status === 'in_progress',
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
