/**
 * ============================================
 * SPECIMEN: HUNTERIAN TANK
 * ORGAN: ELECTRON SENSORY SYSTEM
 * RETRIEVAL: October 2025, Lookaway Archive
 * ============================================
 * 
 * STATUS: Operational - v2.1 PASSWORD NOTE INTERACTION
 * FUNCTION: Container vision apparatus - electron beam scanning for membrane detection
 * DEPENDENCIES: tank-decay.js (lifecycle sync), tank-config.js (visual parameters)
 * 
 * SURGICAL NOTES:
 * The tank's scanning system manifests as a vertical electron beam,
 * continuously scanning the viewport from top to bottom. When the beam
 * intersects with membrane containers, phosphor excitation occurs -
 * creating a brief luminous contact that reveals preserved specimens.
 * 
 * Updated to interact with:
 * - Active membranes (specimens)
 * - Title and subtitle text
 * - Date tag footer
 * - Popup text elements (including password note)
 * 
 * Empty membranes are excluded - they are dead, no phosphor response.
 * ============================================
 */

class TankBeamModule {
  constructor() {
    // OPTICAL COMPONENTS - Beam anatomy
    this.system = null;
    this.body = null;
    this.glow = null;
    this.hotspot = null;
    this.root = document.documentElement;
    
    // NEURAL STATE - Vision processing
    this.isPaused = false;
    this.collisionCheckInterval = null;
    this.currentSpeed = 12;
  }
  
  // ==========================================
  // OPTICAL NERVE ACTIVATION
  // ==========================================
  
  init() {
    this.createBeamElements();
    this.setRandomStart();
    this.startCollisionDetection();
    
    // METABOLIC COUPLING - Link to container lifecycle
    if (window.tankDecay) {
      window.tankDecay.subscribe((stage, progress) => {
        this.syncToPreservation(stage, progress);
      });
    }
    
    console.log('👁️ Tank beam system initialized');
  }
  
  // ==========================================
  // RETINAL STRUCTURE GENERATION
  // ==========================================
  
  createBeamElements() {
    const container = document.createElement('div');
    container.className = 'beam-system';
    container.id = 'beamSystem';
    container.innerHTML = `
      <div class="beam-glow" id="beamGlow"></div>
      <div class="beam-body" id="beamBody"></div>
      <div class="beam-hotspot" id="beamHotspot"></div>
    `;
    
    document.body.appendChild(container);
    
    this.system = document.getElementById('beamSystem');
    this.body = document.getElementById('beamBody');
    this.glow = document.getElementById('beamGlow');
    this.hotspot = document.getElementById('beamHotspot');
  }
  
  // ==========================================
  // SACCADIC VARIATION - Random starting position
  // ==========================================
  
  setRandomStart() {
    const startPercent = Math.random() * 0.5;
    this.root.style.setProperty('--beam-start-position', `-${startPercent * 100}%`);
    
    const delay = Math.random() * -this.currentSpeed;
    [this.body, this.glow, this.hotspot].forEach(el => {
      el.style.animationDelay = `${delay}s`;
    });
  }
  
  // ==========================================
  // METABOLIC SYNCHRONIZATION
  // ==========================================
  
  syncToPreservation(stage, progress) {
    const speeds = {
      preservation: 12,
      flicker: 10
    };
    
    const newSpeed = speeds[stage] || 12;
    
    if (newSpeed !== this.currentSpeed) {
      this.currentSpeed = newSpeed;
      this.root.style.setProperty('--beam-speed', newSpeed + 's');
    }
  }
  
  // ==========================================
  // PATTERN RECOGNITION ENGINE - Membrane detection
  // ==========================================
  
  startCollisionDetection() {
    const isMobile = window.innerWidth < 768;
    const checkInterval = isMobile ? 50 : 25;
    
    this.collisionCheckInterval = setInterval(() => {
      if (this.isPaused || !this.body) return;
      
      // FOCAL POINT CALCULATION
      const beamRect = this.body.getBoundingClientRect();
      const beamY = beamRect.top + beamRect.height / 2;
      
      // PERIPHERAL VISION LIMITS
      const buffer = isMobile ? 100 : 200;
      const viewportTop = window.scrollY - buffer;
      const viewportBottom = window.scrollY + window.innerHeight + buffer;
      
      // PATTERN LIBRARY - All detectable elements
      // NOTE: Excludes .membrane.empty - dead slots have no phosphor response
      const targets = document.querySelectorAll(
        '.membrane:not(.empty), ' +           // Active membranes only
        '.archive-title, .archive-subtitle, ' +  // Header text
        '.date-tag, ' +                          // Footer date
        '.popup-title, .popup-label, .popup-value, ' +
        '.popup-description, .popup-warning, .popup-button, ' +
        '.password-note'                         // Password message
      );
      
      let hitSomething = false;
      
      targets.forEach(target => {
        const rect = target.getBoundingClientRect();
        const elementTop = rect.top + window.scrollY;
        
        // EFFICIENCY OPTIMIZATION
        if (elementTop < viewportTop || elementTop > viewportBottom) {
          return;
        }
        
        const targetY = rect.top + rect.height / 2;
        
        // CONTACT THRESHOLD
        const minHeight = 40;
        const effectiveHeight = Math.max(rect.height, minHeight);
        const padding = (effectiveHeight - rect.height) / 2;
        
        const topBound = rect.top - padding;
        const bottomBound = rect.bottom + padding;
        const isInBounds = beamY >= topBound && beamY <= bottomBound;
        const distance = Math.abs(beamY - targetY);
        
        // PHOSPHOR EXCITATION
        if (isInBounds && distance < 60) {
          this.glow.classList.add('approaching');
          target.classList.add('beam-approaching');
          
          // DIRECT CONTACT
          if (distance < Math.max(20, rect.height / 2)) {
            target.classList.add('beam-contact');
            this.hotspot.classList.add('active');
            hitSomething = true;
            
            // SPECIMEN REVELATION (for membranes only)
            const organism = target.querySelector('.membrane-organism');
            if (organism) {
              organism.style.opacity = '1';
            }
          } else {
            target.classList.remove('beam-contact');
            
            const organism = target.querySelector('.membrane-organism');
            if (organism) {
              organism.style.opacity = '0.3';
            }
          }
        } else {
          target.classList.remove('beam-contact', 'beam-approaching');
          
          const organism = target.querySelector('.membrane-organism');
          if (organism) {
            organism.style.opacity = '0';
          }
        }
      });
      
      // RELAXATION STATE
      if (!hitSomething) {
        this.hotspot.classList.remove('active');
        this.glow.classList.remove('approaching');
      }
    }, checkInterval);
  }
  
  // ==========================================
  // VISION CONTROL
  // ==========================================
  
  pause() {
    this.isPaused = true;
    [this.body, this.glow, this.hotspot].forEach(el => {
      if (el) el.style.animationPlayState = 'paused';
    });
    console.log('⏸️ Tank beam paused');
  }
  
  resume() {
    this.isPaused = false;
    [this.body, this.glow, this.hotspot].forEach(el => {
      if (el) el.style.animationPlayState = 'running';
    });
    console.log('▶️ Tank beam resumed');
  }
  
  // ==========================================
  // DISPOSAL PROTOCOL
  // ==========================================
  
  destroy() {
    if (this.collisionCheckInterval) {
      clearInterval(this.collisionCheckInterval);
    }
    if (this.system) {
      this.system.remove();
    }
    console.log('🔌 Tank beam destroyed');
  }
}

// ==========================================
// DEPENDENCY VERIFICATION
// ==========================================

if (typeof TANK_CONFIG === 'undefined') {
  console.error('❌ tank-beam.js requires tank-config.js');
}
if (typeof tankDecay === 'undefined') {
  console.error('❌ tank-beam.js requires tank-decay.js');
}

// ==========================================
// EXPORT VERIFICATION
// ==========================================

if (typeof window !== 'undefined') {
  window.TankBeamModule = TankBeamModule;
}

console.log('✔ tank-beam.js loaded - Scanning system ready (password note interaction enabled)');