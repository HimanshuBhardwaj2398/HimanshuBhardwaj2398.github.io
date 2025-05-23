// Theme Toggle
const themeToggle = document.getElementById('theme-toggle');
const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');

function setTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  localStorage.setItem('theme', theme);
}

function toggleTheme() {
  const currentTheme = document.documentElement.getAttribute('data-theme');
  const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
  setTheme(newTheme);
}

// Initialize theme
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
  setTheme(savedTheme);
} else {
  setTheme(prefersDarkScheme.matches ? 'dark' : 'light');
}

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// Intersection Observer for animations
const observerOptions = {
  root: null,
  rootMargin: '0px',
  threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animate-fade-in');
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

// Observe elements with animation classes
document.querySelectorAll('.animate-on-scroll').forEach((element) => {
  observer.observe(element);
});

// Typing animation for hero section
function typeWriter(element, text, speed = 50) {
  let i = 0;
  element.innerHTML = '';
  
  function type() {
    if (i < text.length) {
      element.innerHTML += text.charAt(i);
      i++;
      setTimeout(type, speed);
    }
  }
  
  type();
}

// Initialize typing animation if element exists
const typingElement = document.querySelector('.typing-animation');
if (typingElement) {
  const text = typingElement.getAttribute('data-text');
  if (text) {
    typeWriter(typingElement, text);
  }
}

// Mobile navigation toggle
const mobileNavToggle = document.getElementById('mobile-nav-toggle');
const navLinks = document.querySelector('.nav-links');

if (mobileNavToggle && navLinks) {
  mobileNavToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    mobileNavToggle.setAttribute('aria-expanded', 
      mobileNavToggle.getAttribute('aria-expanded') === 'true' ? 'false' : 'true'
    );
  });
}

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
  if (navLinks && navLinks.classList.contains('active') && 
      !e.target.closest('.nav-links') && 
      !e.target.closest('#mobile-nav-toggle')) {
    navLinks.classList.remove('active');
    mobileNavToggle.setAttribute('aria-expanded', 'false');
  }
});

// Add active class to current section in navigation
const sections = document.querySelectorAll('section[id]');
const navItems = document.querySelectorAll('.nav-links a');

function highlightNavigation() {
  const scrollY = window.pageYOffset;
  
  sections.forEach(section => {
    const sectionHeight = section.offsetHeight;
    const sectionTop = section.offsetTop - 100;
    const sectionId = section.getAttribute('id');
    
    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      navItems.forEach(item => {
        item.classList.remove('active');
        if (item.getAttribute('href') === `#${sectionId}`) {
          item.classList.add('active');
        }
      });
    }
  });
}

window.addEventListener('scroll', highlightNavigation);

// Initialize tooltips
const tooltips = document.querySelectorAll('[data-tooltip]');
tooltips.forEach(tooltip => {
  tooltip.addEventListener('mouseenter', (e) => {
    const text = e.target.getAttribute('data-tooltip');
    const tooltipEl = document.createElement('div');
    tooltipEl.className = 'tooltip';
    tooltipEl.textContent = text;
    document.body.appendChild(tooltipEl);
    
    const rect = e.target.getBoundingClientRect();
    tooltipEl.style.top = `${rect.bottom + 5}px`;
    tooltipEl.style.left = `${rect.left + (rect.width / 2) - (tooltipEl.offsetWidth / 2)}px`;
  });
  
  tooltip.addEventListener('mouseleave', () => {
    const tooltipEl = document.querySelector('.tooltip');
    if (tooltipEl) {
      tooltipEl.remove();
    }
  });
}); 