/**
 * Intersection Observer for fade-in animations
 */
export function initFadeInAnimations() {
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    document.querySelectorAll('.fade-in').forEach(el => {
        observer.observe(el);
    });
}

/**
 * Staggered animation for list items
 */
export function initStaggeredAnimations() {
    const staggerItems = document.querySelectorAll('.stagger-item');
    const staggerObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.classList.add('visible');
                }, index * 100);
            }
        });
    }, { threshold: 0.1 });

    staggerItems.forEach(item => staggerObserver.observe(item));
}

/**
 * Initialize floating icon stagger delays
 */
export function initFloatingIcons() {
    document.querySelectorAll('.float-icon').forEach((icon, index) => {
        icon.style.animationDelay = `${index * 0.5}s`;
    });
}
