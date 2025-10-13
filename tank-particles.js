/**
 * ============================================
 * SPECIMEN: LOOKAWAY TANK
 * ORGAN: ATMOSPHERIC DRIFT MECHANISM
 * RETRIEVAL: October 2025, Lookaway Archive
 * ============================================
 * 
 * STATUS: Operational - v3.0 MORE VISIBLE + INCREASED DENSITY
 * FUNCTION: Preservation fluid particle system - creates depth through drift
 * DEPENDENCIES: tank-decay.js (lifecycle sync), tank-beam.js (collision reveal)
 * 
 * SURGICAL NOTES:
 * The tank generates its own atmosphere - a 3-layer particle field
 * that simulates preservation fluid depth. Particles drift upward
 * slowly, like phosphor compounds suspended in viscous amber-green
 * fluid, rising from the container's metabolic processes.
 * 
 * Each layer moves at different speeds (parallax effect):
 * - FAR: 40 particles, smallest, heavily blurred (background fluid)
 * - MID: 30 particles, medium size, moderate blur (midground suspension)
 * - NEAR: 12 particles, largest, sharpest (foreground proximity)
 * 
 * Particle density increased from leak-worm (82 vs 50) and opacity
 * doubled (0.12 vs 0.06) to create murky formaldehyde aesthetic.
 * Drift speeds match leak-worm: 60/35/15 for viscous fluid feel.
 * 
 * Critical behavior: Particles illuminate when the electron beam
 * passes over them, revealing trace phosphor compounds in the fluid.
 * During flicker events, particles may dim slightly with power dip.
 * ============================================
 */

class TankParticleDrift {
  constructor() {
    // ATMOSPHERIC CONSTANTS - Fluid parameters
    // (Technical: Configuration and DOM references)
    this.root = document.documentElement;
    
    // DEVICE DETECTION - Mobile optimization
    // (Technical: Reduce particle count on mobile devices)
    this.isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    
    const particleMultiplier = this.isMobile ? 0.6 : 1.0;
    
    // STRATOSPHERIC LAYERS - Three depth planes
    // (Technical: Particle layer configuration - INCREASED DENSITY)
    this.layers = {
      far: { 
        count: Math.floor(40 * particleMultiplier),  // Increased from 25
        sizeRange: [1.5, 3],                         // Smallest particles
        blurRange: [3, 5],                           // Heavy fluid distortion
        speed: 60,                                    // Slowest drift (viscous)
        field: null                                  // DOM container
      },
      mid: { 
        count: Math.floor(30 * particleMultiplier),  // Increased from 18
        sizeRange: [2, 4],                           // Medium particles
        blurRange: [1, 2],                           // Moderate blur
        speed: 35,                                    // Medium drift
        field: null                                  // DOM container
      },
      near: { 
        count: Math.floor(12 * particleMultiplier),  // Increased from 7
        sizeRange: [3, 5],                           // Largest particles
        blurRange: [0, 0.5],                         // Sharpest focus
        speed: 15,                                    // Fastest drift (still slow)
        field: null                                  // DOM container
      }
    };
    
    // METABOLIC STATE - Tracks container health
    // (Technical: Current preservation stage)
    this.preservationState = 'preservation';
  }
  
  // ==========================================
  // ATMOSPHERIC GENERATION - Initialize system
  // (Technical: Create particle fields and start drift)
  // ==========================================
  
  init() {
    // ATMOSPHERE SYNTHESIS - Begin particle generation
    // (Technical: Setup DOM and create all particles)
    
    this.createParticleFields();
    this.createAllParticles();
    
    // METABOLIC COUPLING - Link to container lifecycle
    // (Technical: Subscribe to preservation state changes)
    if (window.tankDecay) {
      window.tankDecay.subscribe((stage, progress) => {
        this.syncToPreservation(stage, progress);
      });
    }
    
    // BEAM INTERACTION - Phosphor excitation on contact
    // (Technical: Setup collision detection with electron beam)
    if (window.tankBeam) {
      this.integrateWithBeam();
    }
    
    console.log('🌫️ Tank particle system initialized (82 particles, 2x visibility)');
  }
  
  // ==========================================
  // SPATIAL SCAFFOLDING - Container structure
  // (Technical: Create DOM containers for particle layers)
  // ==========================================
  
  createParticleFields() {
    // ATMOSPHERIC CHAMBERS - Layer containers
    // (Technical: Build HTML structure for particle fields)
    
    const container = document.createElement('div');
    container.className = 'particle-container';
    container.innerHTML = `
      <div class="particle-field" id="particles-far"></div>
      <div class="particle-field" id="particles-mid"></div>
      <div class="particle-field" id="particles-near"></div>
    `;
    document.body.appendChild(container);
    
    // LAYER REGISTRATION - Store field references
    // (Technical: Cache DOM elements for each layer)
    this.layers.far.field = document.getElementById('particles-far');
    this.layers.mid.field = document.getElementById('particles-mid');
    this.layers.near.field = document.getElementById('particles-near');
  }
  
  // ==========================================
  // PARTICLE SYNTHESIS - Generate all layers
  // (Technical: Create particles for each depth plane)
  // ==========================================
  
  createAllParticles() {
    // ATMOSPHERIC POPULATION - Fill all layers
    // (Technical: Loop through layers and create particles)
    
    Object.entries(this.layers).forEach(([name, layer]) => {
      this.createLayerParticles(name, layer);
    });
  }
  
  createLayerParticles(name, layer) {
    // PARTICLE GENERATION - Individual layer creation
    // (Technical: Generate particles with random properties)
    
    layer.field.innerHTML = '';
    
    for (let i = 0; i < layer.count; i++) {
      const particle = document.createElement('div');
      particle.className = 'particle';
      particle.dataset.layer = name;
      
      // HORIZONTAL DISTRIBUTION - Gaussian clustering
      // (Technical: Bell curve distribution for natural look)
      const x = this.gaussianRandom(50, 20);
      particle.style.left = Math.max(5, Math.min(95, x)) + '%';
      
      // SIZE VARIATION - Random within range
      // (Technical: Vary particle size for organic feel)
      const size = layer.sizeRange[0] + 
                   Math.random() * (layer.sizeRange[1] - layer.sizeRange[0]);
      particle.style.width = size + 'px';
      particle.style.height = size + 'px';
      
      // FLUID BLUR - Depth simulation
      // (Technical: Apply blur based on layer depth)
      const blur = layer.blurRange[0] + 
                  Math.random() * (layer.blurRange[1] - layer.blurRange[0]);
      particle.style.filter = `blur(${blur}px)`;
      particle.dataset.baseBlur = blur; // Store for beam interaction
      
      // DRIFT PHASE - Staggered animation start
      // (Technical: Random delay for natural movement)
      const delay = -Math.random() * layer.speed;
      particle.style.animationDelay = `${delay}s`;
      particle.style.animationDuration = `${layer.speed}s`;
      
      layer.field.appendChild(particle);
    }
  }
  
  // ==========================================
  // STATISTICAL DISTRIBUTION - Natural clustering
  // (Technical: Gaussian random number generator)
  // ==========================================
  
  gaussianRandom(mean, stdDev) {
    // BELL CURVE GENERATOR - Natural distribution
    // (Technical: Box-Muller transform for normal distribution)
    
    const u1 = Math.random();
    const u2 = Math.random();
    const z0 = Math.sqrt(-2 * Math.log(u1)) * Math.cos(2 * Math.PI * u2);
    return mean + z0 * stdDev;
  }
  
  // ==========================================
  // FLUID STATE SYNC - Lifecycle synchronization
  // (Technical: Adjust particle opacity based on container state)
  // ==========================================
  
  syncToPreservation(stage, progress) {
    // FLUID DENSITY ADJUSTMENT - Opacity modulation
    // (Technical: Map preservation stages to particle visibility)
    
    this.preservationState = stage;
    
    const opacityMultipliers = {
      preservation: 1.0,   // Full fluid density
      flicker: 0.85        // Slight dimming during power dip
    };
    
    const multiplier = opacityMultipliers[stage] || 1.0;
    this.root.style.setProperty('--particle-decay-multiplier', multiplier);
  }
  
  // ==========================================
  // PHOSPHOR EXCITATION - Beam interaction
  // (Technical: Illuminate particles near electron beam)
  // ==========================================
  
  integrateWithBeam() {
    // COLLISION DETECTION - Beam proximity check
    // (Technical: Check particle distance from beam position)
    
    if (!window.tankBeam || !window.tankBeam.body) {
      // Retry after delay if beam not ready yet
      setTimeout(() => this.integrateWithBeam(), 500);
      return;
    }
    
    setInterval(() => {
      const beamBody = window.tankBeam.body;
      if (!beamBody) return;
      
      // BEAM POSITION - Current scan location
      // (Technical: Get beam Y coordinate)
      const beamRect = beamBody.getBoundingClientRect();
      const beamY = beamRect.top + beamRect.height / 2;
      
      // PARTICLE ILLUMINATION - Check each particle
      // (Technical: Calculate distance and apply glow)
      document.querySelectorAll('.particle').forEach(particle => {
        const rect = particle.getBoundingClientRect();
        const particleY = rect.top + rect.height / 2;
        const distance = Math.abs(beamY - particleY);
        
        const layer = particle.dataset.layer;
        
        // EXCITATION RANGE - Layer-specific sensitivity
        // (Technical: Different ranges for depth layers)
        const range = layer === 'far' ? 120 : 
                     layer === 'mid' ? 90 : 60;
        
        if (distance < range) {
          // PHOSPHOR ACTIVATION - Brightness boost
          // (Technical: Apply glow based on proximity)
          const intensity = 1 - (distance / range);
          particle.classList.add('beam-revealed');
          
          // LUMINOSITY CALCULATION - Preserve base blur
          // (Technical: Brighten without losing depth blur)
          const baseBlur = parseFloat(particle.dataset.baseBlur) || 0;
          const brightness = 1 + (intensity * 0.8);
          particle.style.filter = `blur(${baseBlur}px) brightness(${brightness})`;
          
        } else {
          // RELAXATION STATE - Return to normal
          // (Technical: Remove glow when beam passes)
          particle.classList.remove('beam-revealed');
          const baseBlur = parseFloat(particle.dataset.baseBlur) || 0;
          particle.style.filter = `blur(${baseBlur}px)`;
        }
      });
    }, 40);
  }
  
  // ==========================================
  // DISPOSAL PROTOCOL - Clean removal
  // (Technical: Cleanup method)
  // ==========================================
  
  destroy() {
    // ATMOSPHERIC EVACUATION - Complete removal
    // (Technical: Remove all particle containers)
    const container = document.querySelector('.particle-container');
    if (container) container.remove();
    console.log('🔌 Tank particles destroyed');
  }
}

// ==========================================
// DEPENDENCY VERIFICATION
// (Technical: Check required organs present)
// ==========================================

if (typeof TANK_CONFIG === 'undefined') {
  console.error('❌ tank-particles.js requires tank-config.js');
}
if (typeof tankDecay === 'undefined') {
  console.error('❌ tank-particles.js requires tank-decay.js');
}

// ==========================================
// EXPORT VERIFICATION
// (Technical: Confirm successful load)
// ==========================================

if (typeof window !== 'undefined') {
  window.TankParticleDrift = TankParticleDrift;
}

console.log('✓ tank-particles.js loaded - Preservation fluid active (82 particles, 2x visibility)');