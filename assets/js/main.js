// Import modules
import { initFadeInAnimations, initStaggeredAnimations, initFloatingIcons } from './modules/animations.js';
import { initSmoothScroll, initMobileMenu } from './modules/navigation.js';
import { initTiltCards, init3DCards, initRippleEffect, initMouseGlow, initLightMouseGlow, initMagneticButtons } from './modules/effects.js';
import { initWaveAnimation } from './modules/canvas.js';

// Initialize all features when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
    // Animations
    initFadeInAnimations();
    initStaggeredAnimations();
    initFloatingIcons();

    // Navigation
    initSmoothScroll();
    initMobileMenu();

    // Visual effects
    initTiltCards();
    init3DCards();
    initRippleEffect();
    initMouseGlow();
    initLightMouseGlow();
    initMagneticButtons();

    // Canvas animation
    initWaveAnimation();
});
