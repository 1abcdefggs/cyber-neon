export const ADVANCED_PRESETS = [
  { id: 'aging', name: 'Vintage Decay', icon: '🏚️', params: { noiseFreq: 0.05, noiseScale: 20, textBlur: 1.5, isFlickerBroken: true, scanlineOpacity: 0.2 } },
  { id: 'reflection', name: 'Glass Reflection', icon: '💎', params: { innerGlow: 8, glowSpread: 1.5, fillOpacity: 0.7, textBlur: 0.5, isHollow: false } },
  { id: 'perspective', name: '3D Billboard', icon: '📐', params: { perspective: 800, textRotate: -20, textSkew: 15, dropShadowDistance: 25 } },
  { id: 'chromatic', name: 'Glitch/RGB', icon: '📺', params: { chromaticOffset: 5, glitchIntensity: 3, scanlineDensity: 2.5, noiseFreq: 0.01 } },
  { id: 'hollow', name: 'Pure Tube', icon: '⭕', params: { isHollow: true, outlineWidth: 3, outlineOpacity: 1, glow: 15, innerGlow: 2 } },
  { id: 'pixel', name: '8-bit Retro', icon: '👾', params: { pixelate: 10, scanlineDensity: 4, isHollow: false, letterSpacing: 0.2 } },
  { id: 'gradient', name: 'Dual Phase', icon: '🌈', params: { gradientMode: 'linear', gradientColor: '#ff00ff', innerGlow: 5 } },
  { id: 'fog', name: 'Deep Mist', icon: '🌫️', params: { textBlur: 4, glow: 30, glowSpread: 2.0, fillOpacity: 0.6 } },
  { id: 'jitter', name: 'Punk Jitter', icon: '🎸', params: { letterJitter: 5, textRotate: 5, isFlickerBroken: true } },
  { id: 'cyber_scan', name: 'Active Scan', icon: '📡', params: { scanlineOpacity: 0.4, scanlineSpeed: 2.0, scanningPulse: 3.0 } },
  { id: 'double_tube', name: 'Dual Neon', icon: '➰', params: { doubleTube: true, doubleTubeOffset: 4, glow: 20 } },
  { id: 'overexposure', name: 'White Heat', icon: '🔥', params: { fillColor: '#ffffff', glow: 50, textBlur: 2, glowSpread: 3 } },
  { id: 'dust', name: 'Old Film', icon: '🎞️', params: { dustOpacity: 0.5, grainIntensity: 0.3, noiseFreq: 0.08 } },
  { id: 'monoreel', name: 'Coded Line', icon: '💻', params: { scanlineDensity: 10, scanlineOpacity: 0.8, letterSpacing: 0.4 } },
  { id: 'ghost', name: 'Spirit Light', icon: '👻', params: { fillOpacity: 0.2, glow: 40, textBlur: 5, chromaticOffset: 10 } },
  { id: 'heavy_metal', name: 'Industrial', icon: '🏗️', params: { fontWeight: '900', contrast: 1.5, tubeConnectors: true } },
  { id: 'soft_touch', name: 'Luxury Glow', icon: '💄', params: { textBlur: 0.5, innerGlow: 10, glowSpread: 0.8 } },
  { id: 'vacuum', name: 'Deep Space', icon: '🌌', params: { bgColor: '#000000', dropShadowDistance: 50, shadowBlur: 20, vignette: 0.8 } },
  { 
  id: 'cyber_speed', 
  name: 'Cyber Speed', 
  icon: '⚡', 
  params: { 
    textSkew: -25, 
    chromaticOffset: 8, 
    glow: 20, 
    glowSpread: 2.0, 
    letterSpacing: 0.15,
    scanlineOpacity: 0.3 
  } 
},
{ 
  id: 'toxic_hazard', 
  name: 'Toxic Hazard', 
  icon: '☣️', 
  params: { 
    fillColor: '#39ff14', 
    noiseFreq: 0.08, 
    noiseScale: 30, 
    innerGlow: 12, 
    isFlickerBroken: true, 
    glow: 25 
  } 
}
];