/**
 * ============================================
 * SPECIMEN: LOOKAWAY TANK
 * ORGAN: SPECIMEN REGISTRY ARCHIVE
 * RETRIEVAL: October 2025, Lookaway Archive
 * ============================================
 * 
 * STATUS: Operational - ELECTRIC AMBER v3.0
 * FUNCTION: Specimen catalog - tracks all contained organisms
 * DEPENDENCIES: None (pure data structure)
 * 
 * SURGICAL NOTES:
 * This archive contains the complete registry of all specimens
 * within the LOOKAWAY Tank preservation system. Each specimen
 * entry includes identification, containment status, deployment
 * metadata, access password, visual parameters (NOW USED!),
 * and behavior configurations.
 * 
 * Updated to ELECTRIC AMBER palette - specimens glow with hot
 * yellow-amber instead of orange flesh tones, matching the new
 * energetic preservation fluid aesthetic.
 * 
 * ARCHITECTURE UPDATE:
 * All visual styling and animations now pulled from specimen data.
 * Adding a new specimen requires ONLY updating this file - no
 * CSS or HTML changes needed. Each organism can have unique:
 * - Colors (applied to membrane borders/glow)
 * - Idle animations (float, breathe, pulse, drift)
 * - Hover effects (glow, lift, pulse, ripple)
 * - Animation speeds (customizable per specimen)
 * 
 * Current capacity: 12 membrane compartments
 * Active specimens: 1 (LEAK-WORM-847T)
 * Vacant slots: 11 (reserved for future specimens)
 * ============================================
 */

const SPECIMENS = {
  
  // ==========================================
  // SPECIMEN REGISTRY - Complete archive catalog
  // ==========================================
  
  registry: [
    // SLOT 1: LEAK-WORM-847T (Active Specimen)
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
    
    // SLOTS 2-12: EMPTY SPECIMENS (Vacant)
    ...Array(11).fill(null).map((_, i) => ({
      id: i + 2,
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
    
    if (this.countActive() !== 1) {
      console.error(`❌ Should have 1 active specimen, found ${this.countActive()}`);
      valid = false;
    }
    
    return valid;
  },
  
  // GET POPUP CONTENT - Generate popup data for specimen
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
      password: specimen.password,  // Include password
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
  
  // GET MEMBRANE DATA - Generate membrane display data
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

console.log('✔ tank-specimens.js loaded - Registry active (1 contained, 11 vacant, ELECTRIC AMBER)');