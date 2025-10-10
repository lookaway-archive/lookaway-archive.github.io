/**
 * ============================================
 * HUNTERIAN TANK AUDIO MODULE v1.0
 * Adapted from: LEAK-WORM-847T audio DNA
 * Integration: tank-decay.js lifecycle
 * ============================================
 * 
 * SOUND MAP:
 * - 60Hz CRT hum (preservation/flicker states)
 * - Beam sweep + text/membrane contact + fizz
 * - Membrane click (specimen selection)
 * - Flicker surge (power fluctuation event)
 * - Popup open/close
 * 
 * VOLUME SYSTEM:
 * - Level 0: OFF (default)
 * - Level 1: LOW (30% base)
 * - Level 2: MEDIUM (60% base)
 * - Level 3: HIGH (100% base)
 */

class TankAudio {
    constructor() {
        this.volumeLevel = 1; // Default to LOW volume
        this.context = null;
        this.nodes = {};
        this.ready = false;
        this.baseVolume = 0.04;
        this.currentStage = 'preservation';
        this.isFlickering = false;
        this.baseBeamGain = 0.015; // Prevent gain stacking
    }
    
    // ==========================================
    // INITIALIZATION
    // ==========================================
    
    async init() {
        if (this.context) {
            if (this.context.state === 'suspended') {
                await this.context.resume();
            }
            return true;
        }
        
        try {
            this.context = new (window.AudioContext || window.webkitAudioContext)();
            
            this.nodes.masterGain = this.context.createGain();
            this.nodes.masterGain.connect(this.context.destination);
            
            this.ready = true;
            console.log('🔊 Tank audio initialized');
            return true;
        } catch (error) {
            console.error('Audio initialization failed:', error);
            return false;
        }
    }
    
    // ==========================================
    // 60HZ CRT HUM (preservation/flicker)
    // ==========================================
    
    setupCRTHum() {
        this.cleanupCRTHum();
        
        console.log('🔆 Setting up CRT hum (preservation fluid atmosphere)');
        
        // Primary 60Hz hum
        this.nodes.hum = this.context.createOscillator();
        this.nodes.humGain = this.context.createGain();
        this.nodes.hum.type = 'sine';
        this.nodes.hum.frequency.value = 60;
        
        // Second harmonic (120Hz)
        this.nodes.harmonic2 = this.context.createOscillator();
        this.nodes.harmonic2Gain = this.context.createGain();
        this.nodes.harmonic2.type = 'sine';
        this.nodes.harmonic2.frequency.value = 120;
        
        // Third harmonic (180Hz)
        this.nodes.harmonic3 = this.context.createOscillator();
        this.nodes.harmonic3Gain = this.context.createGain();
        this.nodes.harmonic3.type = 'sine';
        this.nodes.harmonic3.frequency.value = 180;
        
        // Set volumes
        const volumeMultipliers = [0, 0.3, 0.6, 1.0];
        const baseLevel = this.baseVolume * volumeMultipliers[this.volumeLevel];
        
        this.nodes.humGain.gain.value = baseLevel;
        this.nodes.harmonic2Gain.gain.value = baseLevel * 0.3;
        this.nodes.harmonic3Gain.gain.value = baseLevel * 0.15;
        
        // Connect
        this.nodes.hum.connect(this.nodes.humGain);
        this.nodes.humGain.connect(this.nodes.masterGain);
        this.nodes.harmonic2.connect(this.nodes.harmonic2Gain);
        this.nodes.harmonic2Gain.connect(this.nodes.masterGain);
        this.nodes.harmonic3.connect(this.nodes.harmonic3Gain);
        this.nodes.harmonic3Gain.connect(this.nodes.masterGain);
        
        // Start
        this.nodes.hum.start();
        this.nodes.harmonic2.start();
        this.nodes.harmonic3.start();
    }
    
    cleanupCRTHum() {
        ['hum', 'harmonic2', 'harmonic3'].forEach(name => {
            if (this.nodes[name]) {
                try {
                    this.nodes[name].stop();
                    this.nodes[name].disconnect();
                } catch (e) {}
                this.nodes[name] = null;
            }
        });
        
        ['humGain', 'harmonic2Gain', 'harmonic3Gain'].forEach(name => {
            if (this.nodes[name]) {
                try {
                    this.nodes[name].disconnect();
                } catch (e) {}
                this.nodes[name] = null;
            }
        });
    }
    
    // ==========================================
    // VOLUME CONTROL
    // ==========================================
    
    setVolumeLevel(level) {
        this.volumeLevel = level;
        
        if (this.volumeLevel === 0) {
            this.cleanupCRTHum();
            this.cleanupBeam();
        } else {
            if (!this.nodes.hum) {
                this.setupCRTHum();
            } else {
                this.updateHumVolumes();
            }
        }
    }
    
    updateHumVolumes() {
        const volumeMultipliers = [0, 0.3, 0.6, 1.0];
        const targetVolume = this.baseVolume * volumeMultipliers[this.volumeLevel];
        
        if (this.nodes.humGain) {
            this.nodes.humGain.gain.exponentialRampToValueAtTime(
                Math.max(0.001, targetVolume),
                this.context.currentTime + 0.1
            );
        }
        if (this.nodes.harmonic2Gain) {
            this.nodes.harmonic2Gain.gain.exponentialRampToValueAtTime(
                Math.max(0.001, targetVolume * 0.3),
                this.context.currentTime + 0.1
            );
        }
        if (this.nodes.harmonic3Gain) {
            this.nodes.harmonic3Gain.gain.exponentialRampToValueAtTime(
                Math.max(0.001, targetVolume * 0.15),
                this.context.currentTime + 0.1
            );
        }
    }
    
    // ==========================================
    // DECAY STAGE SYNC (preservation/flicker)
    // ==========================================
    
    syncToDecayStage(stage, progress) {
        this.currentStage = stage;
        this.isFlickering = (stage === 'flicker');
        
        if (!this.ready || this.volumeLevel === 0) return;
        
        // Map stage to frequency/volume changes
        const stageMap = {
            preservation: { freq: 60, volume: 1.0 },
            flicker: { freq: 57, volume: 0.75 } // Dim during power dip
        };
        
        const config = stageMap[stage] || stageMap.preservation;
        
        // Update CRT hum frequencies
        if (this.nodes.hum) {
            this.nodes.hum.frequency.exponentialRampToValueAtTime(
                config.freq,
                this.context.currentTime + 0.3
            );
        }
        if (this.nodes.harmonic2) {
            this.nodes.harmonic2.frequency.exponentialRampToValueAtTime(
                config.freq * 2,
                this.context.currentTime + 0.3
            );
        }
        if (this.nodes.harmonic3) {
            this.nodes.harmonic3.frequency.exponentialRampToValueAtTime(
                config.freq * 3,
                this.context.currentTime + 0.3
            );
        }
        
        // Update volumes
        const volumeMultipliers = [0, 0.3, 0.6, 1.0];
        const baseLevel = this.baseVolume * volumeMultipliers[this.volumeLevel];
        const modulated = baseLevel * config.volume;
        
        if (this.nodes.humGain) {
            this.nodes.humGain.gain.exponentialRampToValueAtTime(
                Math.max(0.001, modulated),
                this.context.currentTime + 0.3
            );
        }
        if (this.nodes.harmonic2Gain) {
            this.nodes.harmonic2Gain.gain.exponentialRampToValueAtTime(
                Math.max(0.001, modulated * 0.3),
                this.context.currentTime + 0.3
            );
        }
        if (this.nodes.harmonic3Gain) {
            this.nodes.harmonic3Gain.gain.exponentialRampToValueAtTime(
                Math.max(0.001, modulated * 0.15),
                this.context.currentTime + 0.3
            );
        }
    }
    
    // ==========================================
    // VISUAL SYNC (audio icon decay matching)
    // ==========================================
    
    syncDecayVisuals(stage, progress) {
        const audioBtn = document.getElementById('audio-toggle');
        if (!audioBtn) return;
        
        if (stage === 'preservation') {
            audioBtn.style.filter = 'blur(0.03px)';
            audioBtn.style.opacity = '0.7';
        } else if (stage === 'flicker') {
            audioBtn.style.filter = 'brightness(0.85) blur(0.15px)';
            audioBtn.style.opacity = '0.6';
        }
    }
    
    // ==========================================
    // SOUND EFFECTS
    // ==========================================
    
    // Flicker surge (power fluctuation)
    triggerFlickerSurge() {
        if (!this.ready || this.volumeLevel === 0) return;
        
        console.log('⚡ Flicker surge');
        
        // Brief frequency wobble + volume dip
        const osc = this.context.createOscillator();
        const gain = this.context.createGain();
        
        osc.type = 'sine';
        osc.frequency.setValueAtTime(60, this.context.currentTime);
        osc.frequency.exponentialRampToValueAtTime(48, this.context.currentTime + 0.15);
        osc.frequency.exponentialRampToValueAtTime(60, this.context.currentTime + 0.4);
        
        const volumeMultipliers = [0, 0.3, 0.6, 1.0];
        const volume = 0.06 * volumeMultipliers[this.volumeLevel];
        
        gain.gain.setValueAtTime(volume, this.context.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, this.context.currentTime + 0.5);
        
        osc.connect(gain);
        gain.connect(this.nodes.masterGain);
        
        osc.start();
        osc.stop(this.context.currentTime + 0.5);
    }
    
    // Water drop (copy to clipboard) - Descending chord like LEAK-WORM
    triggerWaterDrop() {
        if (!this.ready || this.volumeLevel === 0) return;
        
        console.log('💧 Password copied - data leak sound');
        
        // Descending chord: C5→C4, E5→E4, G5→G4
        const frequencies = [
            [523.25, 261.63],  // C5 → C4
            [659.25, 329.63],  // E5 → E4
            [783.99, 392.00]   // G5 → G4
        ];
        
        const volumeMultipliers = [0, 0.3, 0.6, 1.0];
        const volume = 0.08 * volumeMultipliers[this.volumeLevel];
        
        frequencies.forEach((freqPair, i) => {
            const osc = this.context.createOscillator();
            const gain = this.context.createGain();
            
            osc.type = 'sine';
            
            // Start high, sweep down
            osc.frequency.setValueAtTime(freqPair[0], this.context.currentTime);
            osc.frequency.exponentialRampToValueAtTime(freqPair[1], this.context.currentTime + 0.3);
            
            gain.gain.setValueAtTime(0, this.context.currentTime);
            gain.gain.linearRampToValueAtTime(volume * (1 - i * 0.2), this.context.currentTime + 0.02);
            gain.gain.exponentialRampToValueAtTime(0.001, this.context.currentTime + 0.35);
            
            osc.connect(gain);
            gain.connect(this.nodes.masterGain);
            
            osc.start();
            osc.stop(this.context.currentTime + 0.4);
        });
    }
    
    // Membrane click (specimen selection)
    triggerMembraneClick() {
        if (!this.ready || this.volumeLevel === 0) return;
        
        // Soft glass tap
        const osc = this.context.createOscillator();
        const gain = this.context.createGain();
        
        osc.type = 'sine';
        osc.frequency.value = 800 + (Math.random() * 200);
        
        const volumeMultipliers = [0, 0.3, 0.6, 1.0];
        const volume = 0.05 * volumeMultipliers[this.volumeLevel];
        
        gain.gain.setValueAtTime(volume, this.context.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, this.context.currentTime + 0.08);
        
        osc.connect(gain);
        gain.connect(this.nodes.masterGain);
        
        osc.start();
        osc.stop(this.context.currentTime + 0.1);
    }
    
    // Popup open
    triggerPopupOpen() {
        if (!this.ready || this.volumeLevel === 0) return;
        
        // Ascending tone (gate opening)
        const osc = this.context.createOscillator();
        const gain = this.context.createGain();
        
        osc.type = 'sine';
        osc.frequency.setValueAtTime(200, this.context.currentTime);
        osc.frequency.exponentialRampToValueAtTime(400, this.context.currentTime + 0.15);
        
        const volumeMultipliers = [0, 0.3, 0.6, 1.0];
        const volume = 0.04 * volumeMultipliers[this.volumeLevel];
        
        gain.gain.setValueAtTime(volume, this.context.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, this.context.currentTime + 0.2);
        
        osc.connect(gain);
        gain.connect(this.nodes.masterGain);
        
        osc.start();
        osc.stop(this.context.currentTime + 0.2);
    }
    
    // Popup close
    triggerPopupClose() {
        if (!this.ready || this.volumeLevel === 0) return;
        
        // Descending tone (gate closing)
        const osc = this.context.createOscillator();
        const gain = this.context.createGain();
        
        osc.type = 'sine';
        osc.frequency.setValueAtTime(400, this.context.currentTime);
        osc.frequency.exponentialRampToValueAtTime(200, this.context.currentTime + 0.12);
        
        const volumeMultipliers = [0, 0.3, 0.6, 1.0];
        const volume = 0.03 * volumeMultipliers[this.volumeLevel];
        
        gain.gain.setValueAtTime(volume, this.context.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, this.context.currentTime + 0.15);
        
        osc.connect(gain);
        gain.connect(this.nodes.masterGain);
        
        osc.start();
        osc.stop(this.context.currentTime + 0.15);
    }
    
    // Beam fizz on text contact
    triggerBeamFizz() {
        if (!this.ready || this.volumeLevel === 0) return;
        
        // White noise burst
        const bufferSize = this.context.sampleRate * 0.004;
        const buffer = this.context.createBuffer(1, bufferSize, this.context.sampleRate);
        const data = buffer.getChannelData(0);
        
        for (let i = 0; i < bufferSize; i++) {
            data[i] = (Math.random() - 0.5) * 0.2;
        }
        
        const source = this.context.createBufferSource();
        const filter = this.context.createBiquadFilter();
        const gain = this.context.createGain();
        
        source.buffer = buffer;
        
        filter.type = 'highpass';
        filter.frequency.value = 3000;
        filter.Q.value = 0.7;
        
        const volumeMultipliers = [0, 0.3, 0.6, 1.0];
        const volume = 0.01 * volumeMultipliers[this.volumeLevel];
        
        gain.gain.setValueAtTime(volume, this.context.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, this.context.currentTime + 0.01);
        
        source.connect(filter);
        filter.connect(gain);
        gain.connect(this.nodes.masterGain);
        
        source.start();
    }
    
    // Beam sweep (continuous drone with pitch variation)
    triggerBeamSweep(beamY) {
        if (!this.ready || this.volumeLevel === 0) return;
        
        const baseFreq = 67.83;
        const variation = (beamY / window.innerHeight - 0.5) * 4;
        const frequency = baseFreq + variation;
        
        if (!this.nodes.beamOsc) {
            this.nodes.beamOsc = this.context.createOscillator();
            this.nodes.beamGain = this.context.createGain();
            
            this.nodes.beamOsc.type = 'sine';
            this.nodes.beamOsc.frequency.value = frequency;
            this.nodes.beamGain.gain.value = this.baseBeamGain;
            
            this.nodes.beamOsc.connect(this.nodes.beamGain);
            this.nodes.beamGain.connect(this.nodes.masterGain);
            this.nodes.beamOsc.start();
        } else {
            this.nodes.beamOsc.frequency.exponentialRampToValueAtTime(
                frequency,
                this.context.currentTime + 0.1
            );
        }
    }
    
    // UI/membrane contact (frequency bend + volume boost)
    triggerUIContact() {
        if (!this.ready || this.volumeLevel === 0 || !this.nodes.beamOsc) return;
        
        const currentFreq = this.nodes.beamOsc.frequency.value;
        
        // Frequency drop
        this.nodes.beamOsc.frequency.setValueAtTime(currentFreq, this.context.currentTime);
        this.nodes.beamOsc.frequency.exponentialRampToValueAtTime(
            currentFreq * 0.2,
            this.context.currentTime + 0.1
        );
        this.nodes.beamOsc.frequency.exponentialRampToValueAtTime(
            currentFreq,
            this.context.currentTime + 0.4
        );
        
        // Volume boost (absolute value to prevent stacking)
        this.nodes.beamGain.gain.setValueAtTime(this.baseBeamGain, this.context.currentTime);
        this.nodes.beamGain.gain.linearRampToValueAtTime(
            this.baseBeamGain * 3,
            this.context.currentTime + 0.1
        );
        this.nodes.beamGain.gain.exponentialRampToValueAtTime(
            Math.max(0.001, this.baseBeamGain),
            this.context.currentTime + 0.4
        );
    }
    
    cleanupBeam() {
        if (this.nodes.beamOsc) {
            try {
                this.nodes.beamOsc.stop();
                this.nodes.beamOsc.disconnect();
            } catch (e) {}
            this.nodes.beamOsc = null;
        }
        if (this.nodes.beamGain) {
            try {
                this.nodes.beamGain.disconnect();
            } catch (e) {}
            this.nodes.beamGain = null;
        }
    }
}

// ==========================================
// INTEGRATION
// ==========================================

function integrateTankAudio() {
    const audio = new TankAudio();
    
    // Create volume control button
    const volumeBtn = document.createElement('button');
    volumeBtn.id = 'audio-toggle';
    volumeBtn.innerHTML = `
        <span class="volume-bars">
            <span class="bar bar-1"></span>
            <span class="bar bar-2"></span>
            <span class="bar bar-3"></span>
        </span>
    `;
    volumeBtn.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        width: 32px;
        height: 20px;
        padding: 3px 6px;
        background: rgba(185, 140, 36, 0.056);
        border: 1px solid rgba(185, 140, 36, 0.245);
        border-radius: 2px;
        z-index: 500;
        transition: all 0.3s;
        cursor: crosshair;
        display: flex;
        align-items: center;
        justify-content: center;
        opacity: 0.7;
        filter: blur(0.03px);
    `;
    
    // Volume bar styles
    const style = document.createElement('style');
    style.textContent = `
        .volume-bars {
            display: flex;
            gap: 2px;
            align-items: flex-end;
            height: 10px;
        }
        .bar {
            width: 2px;
            background: rgb(185, 140, 36);
            transition: all 0.3s;
            opacity: 0.125;
        }
        .bar-1 { height: 3px; }
        .bar-2 { height: 6px; }
        .bar-3 { height: 10px; }
        
        .volume-0 .bar { opacity: 0.125; }
        .volume-1 .bar { opacity: 0.125; }
        .volume-1 .bar-1 { opacity: 0.6; }
        .volume-2 .bar { opacity: 0.125; }
        .volume-2 .bar-1,
        .volume-2 .bar-2 { opacity: 0.7; }
        .volume-3 .bar { opacity: 0.85; }
        
        #audio-toggle:hover {
            background: rgba(185, 140, 36, 0.096);
            border-color: rgba(185, 140, 36, 0.32);
            opacity: 0.8;
        }
        
        #audio-toggle.beam-contact {
            opacity: 0.9 !important;
            filter: brightness(1.3) blur(0px) !important;
            border-color: rgba(var(--glow-r), var(--glow-g), var(--glow-b), 0.6) !important;
        }
        
        #audio-toggle.beam-contact .bar {
            background: rgb(var(--glow-r), var(--glow-g), var(--glow-b)) !important;
            box-shadow: 0 0 8px rgba(var(--glow-r), var(--glow-g), var(--glow-b), 0.8) !important;
        }
    `;
    document.head.appendChild(style);
    
    // Start at volume 1 (LOW) by default
    volumeBtn.className = 'volume-1';
    
    // Auto-initialize audio on first user interaction
    const autoInit = async () => {
        if (!audio.ready) {
            const initialized = await audio.init();
            if (initialized) {
                audio.setVolumeLevel(1);
                console.log('🔊 Audio auto-initialized at LOW volume');
            }
        }
        // Remove listeners after first interaction
        document.removeEventListener('click', autoInit);
        document.removeEventListener('keydown', autoInit);
        document.removeEventListener('touchstart', autoInit);
    };
    
    // Listen for first user interaction
    document.addEventListener('click', autoInit);
    document.addEventListener('keydown', autoInit);
    document.addEventListener('touchstart', autoInit);
    
    // Volume cycling: 1→2→3→0→1
    volumeBtn.onclick = async function() {
        if (!audio.ready) {
            const initialized = await audio.init();
            if (!initialized) {
                console.error('Audio failed to initialize');
                return;
            }
            audio.setVolumeLevel(1);
            volumeBtn.className = 'volume-1';
            return;
        }
        
        // Cycle: 1→2→3→0→1
        let nextLevel = audio.volumeLevel + 1;
        if (nextLevel > 3) nextLevel = 0;
        
        audio.setVolumeLevel(nextLevel);
        volumeBtn.className = `volume-${nextLevel}`;
        
        if (nextLevel > 0) {
            const osc = audio.context.createOscillator();
            const gain = audio.context.createGain();
            osc.frequency.value = 800 + (nextLevel * 200);
            osc.type = 'sine';
            gain.gain.setValueAtTime(0, audio.context.currentTime);
            gain.gain.linearRampToValueAtTime(0.1 * (nextLevel / 3), audio.context.currentTime + 0.01);
            gain.gain.exponentialRampToValueAtTime(0.001, audio.context.currentTime + 0.1);
            osc.connect(gain);
            gain.connect(audio.nodes.masterGain);
            osc.start();
            osc.stop(audio.context.currentTime + 0.1);
        }
    };
    
    document.body.appendChild(volumeBtn);
    
    // Hook into decay lifecycle
    if (typeof tankDecay !== 'undefined') {
        window.tankAudio = audio;
        
        tankDecay.subscribe((stage, progress) => {
            audio.syncToDecayStage(stage, progress);
            audio.syncDecayVisuals(stage, progress);
            
            // Trigger flicker sound on flicker events
            if (stage === 'flicker' && progress < 0.1) {
                audio.triggerFlickerSurge();
            }
        });
        
        console.log('✔ Audio hooked to tank decay lifecycle');
    }
    
    // Hook membrane clicks
    document.addEventListener('click', (e) => {
        const membrane = e.target.closest('.membrane:not(.empty)');
        if (membrane) {
            audio.triggerMembraneClick();
        }
    });
    
    // Hook popup open/close
    const originalOpenPopup = window.openPopup;
    if (originalOpenPopup) {
        window.openPopup = function(...args) {
            audio.triggerPopupOpen();
            return originalOpenPopup.apply(this, args);
        };
    }
    
    const originalClosePopup = window.closePopup;
    if (originalClosePopup) {
        window.closePopup = function(...args) {
            audio.triggerPopupClose();
            return originalClosePopup.apply(this, args);
        };
    }
    
    // Hook "RETRIEVE PASSWORD" button (copy to clipboard sound)
    const originalLeakData = window.leakSpecimenData;
    if (originalLeakData) {
        window.leakSpecimenData = function(...args) {
            audio.triggerWaterDrop();
            return originalLeakData.apply(this, args);
        };
    }
    
    // Beam interaction tracking
    let lastUIContact = null;
    const lastTextContact = new Map();
    
    setInterval(() => {
        const beam = document.getElementById('beamBody');
        const audioToggle = document.getElementById('audio-toggle');
        
        if (beam) {
            const beamRect = beam.getBoundingClientRect();
            const beamY = beamRect.top + beamRect.height / 2;
            
            audio.triggerBeamSweep(beamY);
            
            // Audio toggle contact
            if (audioToggle) {
                const toggleRect = audioToggle.getBoundingClientRect();
                if (beamY >= toggleRect.top && beamY <= toggleRect.bottom) {
                    audioToggle.classList.add('beam-contact');
                    if (lastUIContact !== 'audio-toggle') {
                        audio.triggerUIContact();
                        lastUIContact = 'audio-toggle';
                    }
                } else {
                    audioToggle.classList.remove('beam-contact');
                    if (lastUIContact === 'audio-toggle') {
                        lastUIContact = null;
                    }
                }
            }
            
            // Title/subtitle contact (impact sound)
            const impactElements = document.querySelectorAll(
                '.archive-title, .archive-subtitle, .date-tag, ' +
                '.popup-title'
            );
            
            impactElements.forEach(el => {
                const rect = el.getBoundingClientRect();
                if (beamY >= rect.top && beamY <= rect.bottom) {
                    const elementId = el.className + el.textContent.substring(0, 10);
                    const now = Date.now();
                    const lastTime = lastTextContact.get(elementId) || 0;
                    
                    if (now - lastTime > 1000) {
                        audio.triggerUIContact();
                        lastTextContact.set(elementId, now);
                    }
                }
            });
            
            // Popup text contact (fizz sound)
            const fizzElements = document.querySelectorAll(
                '.popup-label, .popup-value, .popup-description, ' +
                '.popup-warning, .popup-button, .password-note, .membrane-code'
            );
            
            fizzElements.forEach(el => {
                const rect = el.getBoundingClientRect();
                if (beamY >= rect.top && beamY <= rect.bottom) {
                    const elementId = el.className + el.textContent.substring(0, 10);
                    const now = Date.now();
                    const lastTime = lastTextContact.get(elementId) || 0;
                    
                    if (now - lastTime > 1000) {
                        audio.triggerBeamFizz();
                        lastTextContact.set(elementId, now);
                    }
                }
            });
        }
    }, 25);
    
    return audio;
}

// Auto-integrate
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', integrateTankAudio);
} else {
    integrateTankAudio();
}

console.log('✔ tank-audio.js loaded (v1.0 - Preservation fluid atmosphere)');