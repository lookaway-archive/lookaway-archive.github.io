/**
 * ============================================
 * SPECIMEN: LOOKAWAY TANK
 * ORGAN: ORGANISM CONSTANTS ARCHIVE
 * RETRIEVAL: October 2025, Lookaway Archive
 * ============================================
 * 
 * STATUS: Operational - HOT AMBER PALETTE v3.0
 * FUNCTION: Container nervous system constants - preservation parameters
 * DEPENDENCIES: None (primary organ, all others feed from this)
 * 
 * SURGICAL NOTES:
 * Updated to HOT electric amber aesthetic - active preservation fluid
 * with energetic center radiating warmth. Color palette shifted from
 * stagnant formaldehyde to ALIVE electric amber: hot yellow-green center
 * (120, 100, 45) radiating through rich amber glow (180, 160, 90).
 * 
 * Flicker state BOOSTED for more dramatic power surge events.
 * Particles match new glow intensity for cohesive atmosphere.
 * ============================================
 */

const TANK_CONFIG = {
  
  // ==========================================
  // LIFECYCLE DNA - Metabolic timing sequences
  // (Technical: Duration of preservation cycles in milliseconds)
  // ==========================================
  
  timings: {
    // PRESERVATION METABOLISM - Stable container lifecycle
    preservation: 300000,  // 5 minutes - stable preservation cycle
    flicker: 10000,        // 10s - occasional power surge events
    
    // TOTAL STABILITY - No death cycle
    total: Infinity
  },
  
  // ==========================================
  // CHROMATIC GENETICS - HOT AMBER PRESERVATION FLUID
  // (Technical: RGB color values for electric amber system)
  // ==========================================
  
  colors: {
    // PRESERVATION STATE - HOT electric amber
    preservation: {
      core: { r: 120, g: 100, b: 45 },     // HOT yellow-green center
      glow: { r: 180, g: 160, b: 90 },     // Rich amber glow
      text: { r: 210, g: 170, b: 55 },     // Bright golden phosphor
      textOpacity: 1.0                      // Full visibility
    },
    
    // FLICKER STATE - BOOSTED power surge
    flicker: {
      core: { r: 140, g: 115, b: 55 },     // BRIGHTER surge
      glow: { r: 200, g: 175, b: 100 },    // Intensified glow
      text: { r: 230, g: 185, b: 70 },     // Brighter text
      textOpacity: 0.95                     // Nearly full
    },
    
    // SUBTITLE - Darker for hierarchy
    subtitle: { r: 140, g: 110, b: 30 },
    
    // POPUP SYSTEM - Match new glow
    popup: {
      container: { r: 90, g: 75, b: 50 },     // Keep warm base
      border: { r: 180, g: 150, b: 100 },     // Keep aged edge
      text: { r: 220, g: 200, b: 170 },       // Keep off-white
      glow: { r: 180, g: 160, b: 90 },        // Match new glow
      label: { r: 160, g: 130, b: 70 }        // Warmer labels
    },
    
    // BACKGROUND - Deep black
    background: { r: 0, g: 0, b: 0 },
    
    // AMBIENT GLOW - Match new richness
    ambientGlow: { r: 180, g: 160, b: 90 },
    
    // BEAM COLOR - Match new amber
    beam: { r: 180, g: 160, b: 90 },
    
    // PARTICLE COLOR - Match new glow
    particle: { r: 190, g: 165, b: 95 }
  },
  
  // ==========================================
  // MEMBRANE STATES - Specimen container properties
  // (Technical: Glass membrane visual parameters)
  // ==========================================
  
  membrane: {
    // ACTIVE SPECIMEN - Contains organism
    active: {
      borderColor: { r: 255, g: 224, b: 98 },  // Yellow glass edge
      saturation: 0.6,     // Moderate color intensity
      blur: 0.3,           // Slight glass distortion
      opacity: 0.8         // Visible but contained
    },
    
    // EMPTY SLOT - Vacant membrane
    empty: {
      borderColor: { r: 140, g: 130, b: 90 },  // Dim brownish edge
      saturation: 0.1,     // Heavily desaturated
      blur: 1.5,           // Heavy glass distortion
      opacity: 0.4         // More visible with warm palette
    },
    
    // HOVER STATE - Membrane activation
    hover: {
      borderColor: { r: 255, g: 240, b: 120 }, // Brighter yellow
      saturation: 0.9,     // Intensified color
      blur: 0.1,           // Sharp focus
      opacity: 1.0         // Full visibility
    }
  },
  
  // ==========================================
  // GRID LAYOUT - Membrane arrangement
  // (Technical: Responsive grid configuration)
  // ==========================================
  
  grid: {
    totalSlots: 12,      // 12 specimen compartments
    columns: {
      desktop: 3,        // 3×4 grid on large screens
      tablet: 2,         // 2×6 grid on medium screens
      mobile: 1          // 1×12 grid on small screens
    }
  },
  
  // ==========================================
  // PARTICLE ATMOSPHERE - Increased density
  // (Technical: Particle system configuration)
  // ==========================================
  
  particles: {
    // LAYER COUNTS - More visible murky fluid
    far: 40,             // Background layer
    mid: 30,             // Midground layer
    near: 12,            // Foreground layer
    
    // VISIBILITY - More visible suspended material
    baseOpacity: 0.12,   // 2x more visible
    
    // DRIFT SPEEDS - Slow viscous movement
    speeds: {
      far: 60,           // Slowest
      mid: 35,           // Medium
      near: 15           // Fastest
    }
  },
  
  // ==========================================
  // RESPIRATORY RHYTHM - Opacity pulsation cycles
  // (Technical: Breathing animation parameters)
  // ==========================================
  
  breathing: {
    preservation: {
      speed: 30,         // Very slow pulse (30s cycle)
      opacityMin: 0.7,   // Exhale depth
      opacityMax: 0.85   // Inhale peak
    },
    flicker: {
      speed: 28,         // Slightly faster during flicker
      opacityMin: 0.65,  // Deeper exhale
      opacityMax: 0.80   // Lower peak
    }
  },
  
  // ==========================================
  // PERIPHERAL VISION DECAY - Edge darkness
  // (Technical: CSS vignette effect parameters)
  // ==========================================
  
  vignette: {
    preservation: {
      radius: 85,        // Wide field of vision
      opacity: 0.02      // Minimal tunnel effect
    },
    flicker: {
      radius: 82,        // Slight constriction
      opacity: 0.05      // Increased darkness
    }
  },
  
  // ==========================================
  // ELECTRON SCAN LINES - CRT phosphor refresh
  // (Technical: Scanline animation settings)
  // ==========================================
  
  scanlines: {
    preservation: {
      opacity: 0.10,     // Subtle interference
      speed: 3.0         // Slow refresh
    },
    flicker: {
      opacity: 0.15,     // More visible during flicker
      speed: 2.5         // Faster refresh
    }
  },
  
  // ==========================================
  // OPTICAL DETERIORATION - Focus parameters
  // (Technical: CSS blur filter values in pixels)
  // ==========================================
  
  blur: {
    preservation: {
      title: 0.2,        // Sharp cognition
      text: 0.15,        // Clear perception
      membrane: 0.3      // Slight glass distortion
    },
    flicker: {
      title: 0.4,        // Momentary unfocus
      text: 0.3,         // Slight blur
      membrane: 0.5      // Increased distortion
    }
  },
  
  // ==========================================
  // PHOSPHOR GLOW INTENSITY - Text shadow emission
  // (Technical: CSS text-shadow spread and intensity)
  // ==========================================
  
  textShadow: {
    preservation: {
      spread: 40,        // Strong emission
      intensity: 0.3     // Moderate glow
    },
    flicker: {
      spread: 35,        // Reduced emission
      intensity: 0.25    // Dimmer glow
    }
  },
  
  // ==========================================
  // POWER FLUCTUATION - CRT voltage instability
  // (Technical: Flicker animation parameters)
  // ==========================================
  
  flicker: {
    preservation: {
      speed: 0.3,        // Stable voltage
      brightness: 1.0    // Full power
    },
    flicker: {
      speed: 0.15,       // Rapid fluctuation
      brightness: 0.88   // Power dip
    }
  },
  
  // ==========================================
  // SENSORY RESPONSE CONFIGURATION
  // (Technical: User interaction event settings)
  // ==========================================
  
  interaction: {
    resetEvents: [       // Stimuli that reset flicker cycle
      'scroll',          // Visual tracking
      'mousemove',       // Cursor presence
      'click',           // Direct contact
      'touchstart',      // Tactile input
      'keydown'          // Keyboard activity
    ],
    throttleMs: 100      // Reaction latency
  }
};

// ==========================================
// METABOLIC HELPER FUNCTIONS
// (Technical: Utility methods for accessing current state)
// ==========================================

TANK_CONFIG.getCurrentTimings = function() {
  return {
    preservation: this.timings.preservation,
    flicker: this.timings.flicker,
    total: this.timings.total
  };
};

TANK_CONFIG.getPreservationDuration = function() {
  return this.timings.preservation;
};

TANK_CONFIG.getFlickerInterval = function() {
  return this.timings.flicker;
};

TANK_CONFIG.getColors = function(state = 'preservation') {
  return this.colors[state] || this.colors.preservation;
};

TANK_CONFIG.getGridColumns = function() {
  const width = window.innerWidth;
  if (width >= 1025) return this.grid.columns.desktop;
  if (width >= 769) return this.grid.columns.tablet;
  return this.grid.columns.mobile;
};

TANK_CONFIG.validate = function() {
  const required = [
    'timings.preservation',
    'timings.flicker',
    'colors.preservation',
    'colors.popup',
    'membrane',
    'grid.totalSlots',
    'breathing',
    'vignette',
    'scanlines',
    'particles'
  ];
  
  let valid = true;
  required.forEach(path => {
    const parts = path.split('.');
    let obj = this;
    for (let part of parts) {
      if (!obj.hasOwnProperty(part)) {
        console.error(`❌ Missing required config: ${path}`);
        valid = false;
        break;
      }
      obj = obj[part];
    }
  });
  
  return valid;
};

// ==========================================
// EXPORT VERIFICATION
// (Technical: Confirm successful configuration load)
// ==========================================

if (typeof window !== 'undefined') {
  window.TANK_CONFIG = TANK_CONFIG;
}

console.log('✓ tank-config.js loaded - LOOKAWAY Tank configuration active (HOT AMBER PALETTE v3.0)');