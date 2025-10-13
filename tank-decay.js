/**
 * ============================================
 * SPECIMEN: LOOKAWAY TANK
 * ORGAN: LIFECYCLE CONTROLLER
 * RETRIEVAL: October 2025, Lookaway Archive
 * ============================================
 * 
 * STATUS: Operational
 * FUNCTION: Container heartbeat - regulates preservation cycles
 * DEPENDENCIES: tank-config.js (vital signs), all other organs subscribe
 * 
 * SURGICAL NOTES:
 * Unlike individual specimen decay systems (which progress through
 * panic/decay/death), the tank maintains indefinite preservation.
 * This controller manages a stable "preservation" state with periodic
 * power flicker events that create a "living container" aesthetic.
 * 
 * The tank does not die - it preserves. Flicker events occur every
 * ~10 seconds, causing brief visual changes (dimming, blur) before
 * returning to normal preservation state. This creates the sense of
 * an active electrical system without dramatic decay.
 * 
 * The controller broadcasts state changes to all subscribed organs
 * via neural pathways (pub-sub pattern). User interaction resets
 * the flicker cycle, maintaining clean preservation during active
 * observation.
 * ============================================
 */

const tankDecay = {
  
  // ==========================================
  // VITAL SIGNS MONITORING
  // (Technical: State tracking variables)
  // ==========================================
  
  stage: 'preservation',   // Current metabolic phase (always preservation)
  progress: 0,             // Flicker cycle progress (0-1)
  lastInteraction: null,   // Last stimulus timestamp
  timer: null,             // Heartbeat interval ID
  listeners: [],           // Neural pathway subscribers
  flickerTimer: null,      // Flicker event timer
  isFlickering: false,     // Currently in flicker state
  
  // ==========================================
  // BIRTH SEQUENCE - Container initialization
  // (Technical: Starts the preservation cycle)
  // ==========================================
  
  start() {
    // CONTAINER ACTIVATION - First power-on
    // (Technical: Initialize state and start 100ms heartbeat)
    this.stage = 'preservation';
    this.lastInteraction = Date.now();
    this.isFlickering = false;
    
    // HEARTBEAT ACTIVATION - Primary metabolic pulse
    // (Technical: Update loop every 100ms)
    this.timer = setInterval(() => this.update(), 100);
    
    // FLICKER CYCLE - Periodic power surge events
    // (Technical: Trigger flicker every 10 seconds)
    this.startFlickerCycle();
    
    // NEURAL BROADCAST - Alert all organs of awakening
    // (Technical: Notify subscribers of initial state)
    this.notify();
    
    console.log('🔋 Tank preservation system started');
  },
  
  // ==========================================
  // INTERACTION RESPONSE - Stimulus processing
  // (Technical: Reset flicker on user interaction)
  // ==========================================
  
  reset() {
    // STABILIZATION PROTOCOL - User presence detected
    // (Technical: Reset flicker timer on interaction)
    this.lastInteraction = Date.now();
    
    // If currently flickering, return to preservation immediately
    if (this.isFlickering) {
      this.isFlickering = false;
      this.stage = 'preservation';
      this.progress = 0;
      this.notify();
    }
  },
  
  // ==========================================
  // METABOLIC PULSE - Core preservation loop
  // (Technical: Main update function, runs every 100ms)
  // ==========================================
  
  update() {
    // PRESERVATION CHECK - Maintain stable state
    // (Technical: Tank always stays in preservation)
    
    // Calculate time since last interaction
    const elapsed = Date.now() - this.lastInteraction;
    
    // If flickering, show flicker progress
    if (this.isFlickering) {
      // Flicker lasts 1 second
      const flickerElapsed = Date.now() - this.flickerStartTime;
      this.progress = Math.min(flickerElapsed / 1000, 1.0);
      
      // Return to preservation after 1 second
      if (this.progress >= 1.0) {
        this.isFlickering = false;
        this.stage = 'preservation';
        this.progress = 0;
      }
      
      this.notify();
      return;
    }
    
    // Normal preservation state
    this.stage = 'preservation';
    
    // Calculate progress through 5-minute preservation cycle
    const preservationDuration = TANK_CONFIG.timings.preservation;
    this.progress = Math.min(elapsed / preservationDuration, 1.0);
    
    // Cycle restarts automatically (no death)
    if (this.progress >= 1.0) {
      this.lastInteraction = Date.now();
      this.progress = 0;
    }
    
    // SYNAPTIC TRANSMISSION - Broadcast state
    // (Technical: Notify all subscribers of current state)
    this.notify();
  },
  
  // ==========================================
  // FLICKER CYCLE - Power surge events
  // (Technical: Periodic voltage fluctuation)
  // ==========================================
  
  startFlickerCycle() {
    // POWER MONITORING - Begin flicker timer
    // (Technical: Trigger flicker every 10 seconds)
    
    const flickerInterval = TANK_CONFIG.timings.flicker;
    
    this.flickerTimer = setInterval(() => {
      this.triggerFlicker();
    }, flickerInterval);
  },
  
  triggerFlicker() {
    // VOLTAGE DIP - Brief power fluctuation
    // (Technical: Enter flicker state for 1 second)
    
    // Only flicker if not already flickering
    if (this.isFlickering) return;
    
    this.isFlickering = true;
    this.flickerStartTime = Date.now();
    this.stage = 'flicker';
    this.progress = 0;
    
    this.notify();
    
    console.log('⚡ Tank flicker event');
  },
  
  // ==========================================
  // NEURAL NETWORK - Pub/sub system
  // (Technical: Observer pattern implementation)
  // ==========================================
  
  subscribe(callback) {
    // SYNAPTIC CONNECTION - Add neural pathway
    // (Technical: Register callback for state updates)
    if (typeof callback !== 'function') {
      console.error('❌ Subscribe requires a function callback');
      return;
    }
    this.listeners.push(callback);
  },
  
  notify() {
    // NEURAL BROADCAST - Transmit state to all organs
    // (Technical: Call all registered listeners)
    this.listeners.forEach(callback => {
      try {
        callback(this.stage, this.progress);
      } catch (error) {
        console.error('❌ Listener error:', error);
      }
    });
  },
  
  // ==========================================
  // SURGICAL TOOLS - Manual intervention
  // (Technical: Debug methods for testing)
  // ==========================================
  
  setStage(stage, progress = 0) {
    // FORCED MUTATION - Manual stage override
    // (Technical: Set stage directly for testing)
    this.stage = stage;
    this.progress = progress;
    this.notify();
  },
  
  forceFlicker() {
    // MANUAL FLICKER - Test flicker event
    // (Technical: Trigger flicker immediately)
    this.triggerFlicker();
  },
  
  pause() {
    // METABOLIC SUSPENSION - Freeze lifecycle
    // (Technical: Stop timers without destroying state)
    if (this.timer) {
      clearInterval(this.timer);
      this.timer = null;
    }
    if (this.flickerTimer) {
      clearInterval(this.flickerTimer);
      this.flickerTimer = null;
    }
    console.log('⏸️ Tank preservation paused');
  },
  
  resume() {
    // REVIVAL PROTOCOL - Restart metabolism
    // (Technical: Resume timers)
    if (!this.timer) {
      this.timer = setInterval(() => this.update(), 100);
    }
    if (!this.flickerTimer) {
      this.startFlickerCycle();
    }
    console.log('▶️ Tank preservation resumed');
  },
  
  // ==========================================
  // DISPOSAL PROTOCOL - Clean termination
  // (Technical: Cleanup method)
  // ==========================================
  
  destroy() {
    // CONTAINER SHUTDOWN - Complete cleanup
    // (Technical: Clear all timers and listeners)
    if (this.timer) {
      clearInterval(this.timer);
      this.timer = null;
    }
    if (this.flickerTimer) {
      clearInterval(this.flickerTimer);
      this.flickerTimer = null;
    }
    this.listeners = [];
    this.stage = 'preservation';
    this.isFlickering = false;
    console.log('🔌 Tank preservation system shutdown');
  },
  
  // ==========================================
  // STATUS REPORT - Current state
  // (Technical: Debug information)
  // ==========================================
  
  getStatus() {
    return {
      stage: this.stage,
      progress: this.progress,
      isFlickering: this.isFlickering,
      listeners: this.listeners.length,
      timeSinceInteraction: Date.now() - this.lastInteraction
    };
  }
};

// ==========================================
// DEPENDENCY VERIFICATION
// (Technical: Check required organs present)
// ==========================================

if (typeof TANK_CONFIG === 'undefined') {
  console.error('❌ tank-decay.js requires tank-config.js to be loaded first!');
}

// ==========================================
// EXPORT VERIFICATION
// (Technical: Confirm successful load)
// ==========================================

if (typeof window !== 'undefined') {
  window.tankDecay = tankDecay;
}

console.log('✓ tank-decay.js loaded - Preservation system ready');