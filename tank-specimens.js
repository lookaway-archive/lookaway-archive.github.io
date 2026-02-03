/**
 * ============================================
 * SPECIMEN: LOOKAWAY TANK
 * ORGAN: SPECIMEN REGISTRY ARCHIVE
 * RETRIEVAL: October 2025, Lookaway Archive
 * ============================================
 * 
 * STATUS: Operational - ELECTRIC AMBER v3.2
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
 * v3.2 UPDATE: Added LEAK-WORM-EROI (Episode 03)
 * 
 * Current capacity: 12 membrane compartments
 * Active specimens: 3 (LEAK-WORM-847T, LEAK-WORM-575E, LEAK-WORM-EROI)
 * Vacant slots: 9 (reserved for future specimens)
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
    // SLOTS 4-12: EMPTY SPECIMENS (Vacant)
    // ==========================================
    ...Array(9).fill(null).map((_, i) => ({
      id: i + 4,
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
  
  getByCode(code) {
    return this.registry.find(specimen => specimen.code === code);
  },
  
  countActive() {
    return this.getActive().length;
  },
  
  countEmpty() {
    return this.getEmpty().length;
  },
  
  getAllIds() {
    return this.registry.map(specimen => specimen.id);
  },
  
  validate() {
    const requiredFields = ['id', 'code', 'status', 'color', 'url'];
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
      
      if (!['contained', 'vacant'].includes(specimen.status)) {
        console.error(`❌ Specimen ${specimen.id} has invalid status: ${specimen.status}`);
        valid = false;
      }
      
      if (!specimen.color || typeof specimen.color.r !== 'number') {
        console.error(`❌ Specimen ${specimen.id} has invalid color structure`);
        valid = false;
      }
    });
    
    if (this.registry.length !== 12) {
      console.error(`❌ Registry should have 12 specimens, found ${this.registry.length}`);
      valid = false;
    }
    
    if (this.countActive() !== 3) {
      console.error(`❌ Should have 3 active specimens, found ${this.countActive()}`);
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
    
    // Don't show popup for empty slots
    if (specimen.status === 'vacant') {
      return null;
    }
    
    return {
      title: "SPECIMEN CONTAINMENT PROTOCOL",
      code: specimen.code,
      status: specimen.status.toUpperCase(),
      classification: specimen.classification,
      deployed: specimen.deployed,
      description: specimen.description,
      warning: specimen.warning,
      password: specimen.password,  // Include password (null for EROI)
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
      clickable: specimen.status === 'contained',
      isEmpty: specimen.status === 'vacant'
    };
  }
};

// ==========================================
// EXPORT VERIFICATION
// ==========================================

if (typeof window !== 'undefined') {
  window.SPECIMENS = SPECIMENS;
}

console.log('✔ tank-specimens.js loaded - Registry active (3 contained, 9 vacant, ELECTRIC AMBER v3.2)');
