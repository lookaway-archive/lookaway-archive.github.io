/**
 * ============================================
 * SPECIMEN: HUNTERIAN TANK
 * ORGAN: ORGANISM CONSTANTS ARCHIVE
 * RETRIEVAL: October 2025, Lookaway Archive
 * ============================================
 * 
 * STATUS: Operational - WARM PALETTE v2.0
 * FUNCTION: Container nervous system constants - preservation parameters
 * DEPENDENCIES: None (primary organ, all others feed from this)
 * 
 * SURGICAL NOTES:
 * Updated from military green CRT to warm formaldehyde amber aesthetic.
 * Color palette shifted to evoke Hunterian Museum preservation jars:
 * nicotine-stained glass, oxidized flesh tones, yellowed specimen labels.
 * 
 * Particle density increased for murky preservation fluid effect.
 * The tank exhibits indefinite preservation with periodic flicker events.
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
  // CHROMATIC GENETICS - Preservation fluid spectra
  // (Technical: RGB color values for warm amber-brown system)
  // ==========================================
  
  colors: {
    // PRESERVATION STATE - Nicotine glass / formaldehyde amber
    preservation: {
      core: { r: 70, g: 60, b: 35 },       // Dark amber-brown base
      glow: { r: 150, g: 130, b: 70 },     // Warm amber glow
      text: { r: 185, g: 140, b: 36 },     // Golden amber phosphor (title/tag)
      textOpacity: 1.0                      // Full visibility
    },
    
    // FLICKER STATE - Momentary power drop
    flicker: {
      core: { r: 60, g: 50, b: 30 },       // Darker momentarily
      glow: { r: 130, g: 110, b: 60 },     // Dimmed glow
      text: { r: 165, g: 120, b: 30 },     // Reduced brightness
      textOpacity: 0.9                      // Slight fade
    },
    
    // SUBTITLE - Darker brown for hierarchy
    subtitle: { r: 118, g: 77, b: 10 },
    
    // POPUP SYSTEM - Preserved tissue aesthetic
    // (Technical: Warm peachy-brown decay flesh tones)
    popup: {
      container: { r: 90, g: 75, b: 50 },    // Peachy-brown flesh base
      border: { r: 180, g: 150, b: 100 },    // Aged flesh edge
      text: { r: 220, g: 200, b: 170 },      // Off-white decay flesh
      glow: { r: 160, g: 140, b: 90 },       // Subtle amber glow
      label: { r: 140, g: 120, b: 80 }       // Dim brown-amber
    },
    
    // BACKGROUND - Deep black
    background: { r: 0, g: 0, b: 0 },
    
    // AMBIENT GLOW - Overall atmosphere
    ambientGlow: { r: 150, g: 130, b: 70 },
    
    // BEAM COLOR - Scanning electron beam (amber)
    beam: { r: 150, g: 130, b: 70 },
    
    // PARTICLE COLOR - Suspended tissue fragments
    particle: { r: 170, g: 150, b: 90 }
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
    far: 40,             // Background layer (was 25)
    mid: 30,             // Midground layer (was 18)
    near: 12,            // Foreground layer (was 7)
    
    // VISIBILITY - More visible suspended material
    baseOpacity: 0.12,   // 2x more visible (was 0.06)
    
    // DRIFT SPEEDS - Keep same as leak-worm
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

console.log('✓ tank-config.js loaded - Hunterian Tank configuration active (WARM PALETTE)');