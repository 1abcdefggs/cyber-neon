import { ADVANCED_PRESETS } from './presets.js';
import { FONT_CATEGORIES } from './fonts.js';

document.addEventListener('alpine:init', () => {
  Alpine.data('neonGenerator', () => ({
    // ==========================================
    // 1. DATA IMPORT & UI STATE
    // ==========================================
    fontCategories: FONT_CATEGORIES,
    advancedPresets: ADVANCED_PRESETS,
    uiTheme: 'pink',
    isPreviewExpanded: false,   // 
    isPresetExpanded: false,    // 
    expandedCategories: [],     // 
    activePresetId: null,
    isAdvanced: false,
    dynamicHeight: 450,

    // ==========================================
    // 2. TEXT CORE & TYPOGRAPHY
    // ==========================================
    text: 'CYBER\nPINKS',
    selectedFont: 'Orbitron',
    fontWeight: '400',
    textAlign: 'center',
    lineHeight: 1.2,
    letterSpacing: 0.05,
    letterCase: 'none',   // 'none' | 'uppercase' | 'lowercase'
    textRotate: 0,
    textSkew: 0,
    perspective: 0,
    verticalOffset: 0,    
    letterJitter: 0,    

    // ==========================================
    // 3. SCALE SYSTEM (Default: Base 32px)
    // ==========================================
    baseSize: 32,      
    mdStepIndex: 0, 
    fontSize: 40, // Manual
    mdSteps: [
      { tag: 'H1', scale: 3.0 }, // 96px
      { tag: 'H2', scale: 2.2 }, // 70px
      { tag: 'H3', scale: 1.5 }, // 48px
      { tag: 'H4', scale: 1.0 }, // 32px 
      { tag: 'H5', scale: 0.8 }, // 25px
      { tag: 'H6', scale: 0.6 }  // 19px
    ],

    // ==========================================
    // 4. COLOR & NEON SURFACE
    // ==========================================
    fillColor: '#ffffff',
    bgColor: '#0a0a0a',
    isHollow: false,
    fillOpacity: 1.0,
    outlineColor: '#ff1493',
    outlineWidth: 0,
    outlineOpacity: 1.0,
    glow: 0,
    innerGlow: 0,
    textBlur: 0,
    glowSpread: 1.0,
    gradientMode: 'none',
    gradientColor: '#ff1493',
    doubleTube: false, 
    doubleTubeOffset: 2, 

    // ==========================================
    // 5. FX & DEGRADATION
    // ==========================================
    chromaticOffset: 0,
    noiseFreq: 0,
    noiseScale: 10,
    scanlineOpacity: 0,
    scanlineDensity: 1.0,
    scanlineSpeed: 0,    
    pixelate: 0,        
    vignette: 0,          
    grainIntensity: 0,    
    dustOpacity: 0,       

    // ==========================================
    // 6. ANIMATION DYNAMICS
    // ==========================================
    anim: 'none', 
    animSpeed: 1.0,
    glitchIntensity: 0,
    scanningPulse: 0,
    isFlickerBroken: false,

    // ==========================================
    // 7. PALETTES
    // ==========================================
    bgPalette: ['#000000', '#0a0a0a', '#1a1a2e', '#16213e', '#0f3460', '#222222', '#2d132c'],
    textPalette: ['#ffffff', '#ff1493', '#00ffff', '#00ff00', '#ffff00', '#ff4500', '#9400d3'],

    // ==========================================
    // 8. LOGIC & METHODS
    // ==========================================
    
    initSvgJs() {
      this.$watch('text', () => this.updateHeight());
      this.$watch('baseSize', () => this.updateHeight());
      this.$watch('mdStepIndex', () => this.updateHeight());
      this.$watch('lineHeight', () => this.updateHeight());
      this.updateHeight();
    },

    toggleUiTheme() {
      this.uiTheme = this.uiTheme === 'pink' ? 'cyan' : 'pink';
      this.outlineColor = this.uiTheme === 'cyan' ? '#00ffff' : '#ff1493';
    },

    togglePreviewExpand() {
      this.isPreviewExpanded = !this.isPreviewExpanded;
      // updateHeight(div)(viewBox)
      this.updateHeight();
    },

    toggleCategory(categoryName) {
      if (this.expandedCategories.includes(categoryName)) {
        this.expandedCategories = this.expandedCategories.filter(c => c !== categoryName);
      } else {
        this.expandedCategories.push(categoryName);
      }
    },

    updateHeight() {
      const lines = this.text.split('\n').length;
      const currentSize = this.isAdvanced ? this.fontSize : Math.round(this.baseSize * this.mdSteps[this.mdStepIndex].scale);
      
      // 
      let h = Math.max(350, lines * currentSize * this.lineHeight + 200);
      
      // dynamicHeightSVGviewBox（）
      // 、viewBoxh「」
      this.dynamicHeight = h;
    },

    applyAdvancedPreset(preset) {
      this.activePresetId = preset.id;
      Object.assign(this, preset.params);
      this.updateHeight();
    },

    resetAllFX() {
      this.activePresetId = null;
      this.glow = 0;
      this.innerGlow = 0;
      this.textBlur = 0;
      this.perspective = 0;
      this.textRotate = 0;
      this.textSkew = 0;
      this.noiseFreq = 0;
      this.chromaticOffset = 0;
      this.isHollow = false;
      this.outlineWidth = 0;
      this.scanlineOpacity = 0;
      this.vignette = 0;
      this.isFlickerBroken = false;
      this.letterJitter = 0;
      this.fillOpacity = 1.0;
      this.updateHeight();
    },

    getTextX() {
      if (this.textAlign === 'left') return '10%';
      if (this.textAlign === 'right') return '90%';
      return '50%';
    },

    getTextAnchor() {
      if (this.textAlign === 'left') return 'start';
      if (this.textAlign === 'right') return 'end';
      return 'middle';
    },

    getSvgTextHtml() {
      let t = this.text || ''; 
      if (this.letterCase === 'uppercase') t = t.toUpperCase();
      if (this.letterCase === 'lowercase') t = t.toLowerCase();
      const lines = t.split('\n');
      return lines.map((line, i) => {
        const safeLine = line.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#039;');
        const dy = i === 0 ? `-${(lines.length - 1) * (this.lineHeight / 2)}em` : `${this.lineHeight}em`;
        return `<tspan x="${this.getTextX()}" dy="${dy}">${safeLine}</tspan>`;
      }).join('');
    },

    downloadSVG() {
      const svg = document.getElementById('export-svg').cloneNode(true);
      const serializer = new XMLSerializer();
      let source = serializer.serializeToString(svg);
      if(!source.match(/^<svg[^>]+xmlns="http\:\/\/www\.w3\.org\/2000\/svg"/)){
          source = source.replace(/^<svg/, '<svg xmlns="http://www.w3.org/2000/svg"');
      }
      source = '<?xml version="1.0" standalone="no"?>\r\n' + source;
      const url = "data:image/svg+xml;charset=utf-8," + encodeURIComponent(source);
      const link = document.createElement("a");
      link.href = url;
      link.download = `neon-${this.text.substring(0,10).replace(/\s+/g, '_')}.svg`;
      link.click();
    }
  }));
});