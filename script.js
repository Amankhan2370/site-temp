// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    hamburger.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        hamburger.classList.remove('active');
    });
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offsetTop = target.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// Navbar background on scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.boxShadow = '0 4px 6px -1px rgb(0 0 0 / 0.1)';
    } else {
        navbar.style.boxShadow = 'none';
    }
});

// Active navigation link highlighting
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.clientHeight;
        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// Scroll reveal – modern, engaging animations (phone, tablet, laptop)
function getRevealOptions() {
    const w = typeof window !== 'undefined' ? window.innerWidth : 1024;
    const rootMargin = w <= 480 ? '0px 0px -15px 0px' : w <= 768 ? '0px 0px -25px 0px' : '0px 0px -40px 0px';
    return { threshold: 0.08, rootMargin };
}

let revealObserver = null;

function createRevealObserver() {
    if (revealObserver) return revealObserver;
    revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                revealObserver.unobserve(entry.target);
            }
        });
    }, getRevealOptions());
    return revealObserver;
}

document.addEventListener('DOMContentLoaded', initScrollReveal);

const STAGGER_MS = 80; // Same delay for all sections (phone, tablet, laptop)

function addReveal(el, delayMs = 0) {
    el.classList.add('scroll-reveal');
    if (delayMs) el.style.transitionDelay = `${delayMs}ms`;
    createRevealObserver().observe(el);
}

function initScrollReveal() {
    // Section titles and subsection titles – every section (About, Experience, Projects, Skills, Education, Contact)
    document.querySelectorAll('.section-title, .subsection-title').forEach(el => addReveal(el));

    // About – intro block + staggered stat items
    const aboutMain = document.querySelector('.about-main');
    if (aboutMain) addReveal(aboutMain);
    document.querySelectorAll('.about-stats .stat-item').forEach((el, i) => addReveal(el, (i + 1) * STAGGER_MS));

    // Experience – staggered timeline items (all devices)
    document.querySelectorAll('.timeline-item').forEach((el, i) => addReveal(el, (i + 1) * STAGGER_MS));

    // Projects – staggered project cards
    document.querySelectorAll('.project-card').forEach((el, i) => addReveal(el, (i + 1) * STAGGER_MS));

    // Skills – staggered skill categories
    document.querySelectorAll('.skill-category').forEach((el, i) => addReveal(el, (i + 1) * STAGGER_MS));

    // Education – staggered education + leadership cards
    document.querySelectorAll('.education-card').forEach((el, i) => addReveal(el, (i + 1) * STAGGER_MS));
    document.querySelectorAll('.leadership-card').forEach((el, i) => addReveal(el, (i + 1) * STAGGER_MS));

    // Contact – description + staggered contact items
    const contactDesc = document.querySelector('.contact-description');
    if (contactDesc) addReveal(contactDesc);
    document.querySelectorAll('.contact-item').forEach((el, i) => addReveal(el, (i + 1) * STAGGER_MS));

    // Footer – apply motion to footer content (every section including footer)
    const footerContent = document.querySelector('.footer .footer-content');
    if (footerContent) addReveal(footerContent);
}

// ----------------------------
// "AI-like" Auto Theme Engine
// ----------------------------
const THEME_STORAGE_KEY = 'portfolio:autoThemeEnabled';
const THEME_INDEX_KEY = 'portfolio:themeIndex';
const THEME_SLICE_MINUTES = 15; // change palette every N minutes

// Original 8 theme palettes
const themes = [
    {
        name: 'Aurora Purple',
        vars: {
            '--primary-color': '#8b5cf6',
            '--primary-dark': '#7c3aed',
            '--primary-light': '#a78bfa',
            '--secondary-color': '#ec4899',
            '--accent-color': '#06b6d4',
            '--tertiary-color': '#f59e0b',
            '--bg-secondary': '#faf5ff',
            '--bg-tertiary': '#f3e8ff',
            '--text-primary': '#1e1b4b',
            '--text-secondary': '#5b21b6',
            '--text-muted': '#8b5cf6',
            '--border-color': '#e9d5ff',
            '--border-light': '#f3e8ff',
            '--gradient-1': 'linear-gradient(135deg, #8b5cf6 0%, #ec4899 100%)',
            '--gradient-2': 'linear-gradient(135deg, #06b6d4 0%, #8b5cf6 100%)',
            '--gradient-3': 'linear-gradient(135deg, #ec4899 0%, #f59e0b 100%)',
            '--gradient-hero': 'linear-gradient(135deg, #faf5ff 0%, #ffffff 50%, #f3e8ff 100%)'
        }
    },
    {
        name: 'Ocean Teal',
        vars: {
            '--primary-color': '#14b8a6',
            '--primary-dark': '#0f766e',
            '--primary-light': '#5eead4',
            '--secondary-color': '#3b82f6',
            '--accent-color': '#22c55e',
            '--tertiary-color': '#f97316',
            '--bg-secondary': '#ecfeff',
            '--bg-tertiary': '#cffafe',
            '--text-primary': '#0f172a',
            '--text-secondary': '#0f766e',
            '--text-muted': '#14b8a6',
            '--border-color': '#99f6e4',
            '--border-light': '#cffafe',
            '--gradient-1': 'linear-gradient(135deg, #14b8a6 0%, #3b82f6 100%)',
            '--gradient-2': 'linear-gradient(135deg, #22c55e 0%, #14b8a6 100%)',
            '--gradient-3': 'linear-gradient(135deg, #3b82f6 0%, #f97316 100%)',
            '--gradient-hero': 'linear-gradient(135deg, #ecfeff 0%, #ffffff 50%, #cffafe 100%)'
        }
    },
    {
        name: 'Sunset',
        vars: {
            '--primary-color': '#f97316',
            '--primary-dark': '#c2410c',
            '--primary-light': '#fdba74',
            '--secondary-color': '#ef4444',
            '--accent-color': '#a855f7',
            '--tertiary-color': '#22c55e',
            '--bg-secondary': '#fff7ed',
            '--bg-tertiary': '#ffedd5',
            '--text-primary': '#1f2937',
            '--text-secondary': '#9a3412',
            '--text-muted': '#f97316',
            '--border-color': '#fed7aa',
            '--border-light': '#ffedd5',
            '--gradient-1': 'linear-gradient(135deg, #f97316 0%, #ef4444 100%)',
            '--gradient-2': 'linear-gradient(135deg, #a855f7 0%, #f97316 100%)',
            '--gradient-3': 'linear-gradient(135deg, #ef4444 0%, #fdba74 100%)',
            '--gradient-hero': 'linear-gradient(135deg, #fff7ed 0%, #ffffff 50%, #ffedd5 100%)'
        }
    },
    {
        name: 'Midnight Indigo',
        vars: {
            '--primary-color': '#6366f1',
            '--primary-dark': '#4338ca',
            '--primary-light': '#a5b4fc',
            '--secondary-color': '#06b6d4',
            '--accent-color': '#22c55e',
            '--tertiary-color': '#f59e0b',
            '--bg-secondary': '#eef2ff',
            '--bg-tertiary': '#e0e7ff',
            '--text-primary': '#0f172a',
            '--text-secondary': '#3730a3',
            '--text-muted': '#6366f1',
            '--border-color': '#c7d2fe',
            '--border-light': '#e0e7ff',
            '--gradient-1': 'linear-gradient(135deg, #6366f1 0%, #06b6d4 100%)',
            '--gradient-2': 'linear-gradient(135deg, #22c55e 0%, #6366f1 100%)',
            '--gradient-3': 'linear-gradient(135deg, #06b6d4 0%, #f59e0b 100%)',
            '--gradient-hero': 'linear-gradient(135deg, #eef2ff 0%, #ffffff 50%, #e0e7ff 100%)'
        }
    },
    {
        name: 'Slate',
        vars: {
            '--primary-color': '#475569',
            '--primary-dark': '#334155',
            '--primary-light': '#64748b',
            '--secondary-color': '#0ea5e9',
            '--accent-color': '#10b981',
            '--tertiary-color': '#f59e0b',
            '--bg-secondary': '#f8fafc',
            '--bg-tertiary': '#f1f5f9',
            '--text-primary': '#0f172a',
            '--text-secondary': '#334155',
            '--text-muted': '#475569',
            '--border-color': '#e2e8f0',
            '--border-light': '#f1f5f9',
            '--gradient-1': 'linear-gradient(135deg, #475569 0%, #0ea5e9 100%)',
            '--gradient-2': 'linear-gradient(135deg, #10b981 0%, #475569 100%)',
            '--gradient-3': 'linear-gradient(135deg, #0ea5e9 0%, #f59e0b 100%)',
            '--gradient-hero': 'linear-gradient(135deg, #f8fafc 0%, #ffffff 50%, #f1f5f9 100%)'
        }
    },
    {
        name: 'Azure',
        vars: {
            '--primary-color': '#2563eb',
            '--primary-dark': '#1d4ed8',
            '--primary-light': '#3b82f6',
            '--secondary-color': '#06b6d4',
            '--accent-color': '#8b5cf6',
            '--tertiary-color': '#f59e0b',
            '--bg-secondary': '#eff6ff',
            '--bg-tertiary': '#dbeafe',
            '--text-primary': '#0f172a',
            '--text-secondary': '#1e40af',
            '--text-muted': '#2563eb',
            '--border-color': '#bfdbfe',
            '--border-light': '#dbeafe',
            '--gradient-1': 'linear-gradient(135deg, #2563eb 0%, #06b6d4 100%)',
            '--gradient-2': 'linear-gradient(135deg, #8b5cf6 0%, #2563eb 100%)',
            '--gradient-3': 'linear-gradient(135deg, #06b6d4 0%, #f59e0b 100%)',
            '--gradient-hero': 'linear-gradient(135deg, #eff6ff 0%, #ffffff 50%, #dbeafe 100%)'
        }
    },
    {
        name: 'Forest',
        vars: {
            '--primary-color': '#059669',
            '--primary-dark': '#047857',
            '--primary-light': '#10b981',
            '--secondary-color': '#0d9488',
            '--accent-color': '#3b82f6',
            '--tertiary-color': '#f59e0b',
            '--bg-secondary': '#f0fdf4',
            '--bg-tertiary': '#dcfce7',
            '--text-primary': '#0f172a',
            '--text-secondary': '#065f46',
            '--text-muted': '#059669',
            '--border-color': '#a7f3d0',
            '--border-light': '#dcfce7',
            '--gradient-1': 'linear-gradient(135deg, #059669 0%, #0d9488 100%)',
            '--gradient-2': 'linear-gradient(135deg, #3b82f6 0%, #059669 100%)',
            '--gradient-3': 'linear-gradient(135deg, #0d9488 0%, #f59e0b 100%)',
            '--gradient-hero': 'linear-gradient(135deg, #f0fdf4 0%, #ffffff 50%, #dcfce7 100%)'
        }
    },
    {
        name: 'Rose',
        vars: {
            '--primary-color': '#e11d48',
            '--primary-dark': '#be123c',
            '--primary-light': '#fb7185',
            '--secondary-color': '#ec4899',
            '--accent-color': '#8b5cf6',
            '--tertiary-color': '#f59e0b',
            '--bg-secondary': '#fff1f2',
            '--bg-tertiary': '#ffe4e6',
            '--text-primary': '#1f2937',
            '--text-secondary': '#9f1239',
            '--text-muted': '#e11d48',
            '--border-color': '#fecdd3',
            '--border-light': '#ffe4e6',
            '--gradient-1': 'linear-gradient(135deg, #e11d48 0%, #ec4899 100%)',
            '--gradient-2': 'linear-gradient(135deg, #8b5cf6 0%, #e11d48 100%)',
            '--gradient-3': 'linear-gradient(135deg, #ec4899 0%, #f59e0b 100%)',
            '--gradient-hero': 'linear-gradient(135deg, #fff1f2 0%, #ffffff 50%, #ffe4e6 100%)'
        }
    }
];

function applyTheme(theme) {
    if (!theme || !theme.vars) return;
    const root = document.documentElement;

    // Smooth transitions when variables update
    root.style.transition = 'background-color 800ms ease, color 800ms ease';
    document.body.style.transition = 'background-color 800ms ease, color 800ms ease';

    Object.entries(theme.vars).forEach(([k, v]) => root.style.setProperty(k, v));
}

function getHourBasedThemeIndex() {
    const hour = new Date().getHours();
    // Map 24h to 8 themes (3h each): Aurora Purple, Ocean Teal, Sunset, Midnight Indigo, Slate, Azure, Forest, Rose
    const index = Math.floor(hour / 3) % themes.length;
    return index;
}

function getTimeSliceThemeIndex(date = new Date()) {
    const minutesSinceMidnight = date.getHours() * 60 + date.getMinutes();
    const slice = Math.floor(minutesSinceMidnight / THEME_SLICE_MINUTES);
    return slice % themes.length;
}

function readBool(key, fallback = false) {
    const v = localStorage.getItem(key);
    if (v === null) return fallback;
    return v === 'true';
}

function setToggleUI(enabled) {
    const stateEl = document.getElementById('theme-toggle-state');
    if (stateEl) stateEl.textContent = enabled ? 'On' : 'Off';
}

let autoThemeInterval = null;

function stopAutoTheme() {
    if (autoThemeInterval) {
        clearInterval(autoThemeInterval);
        autoThemeInterval = null;
    }
}

function startAutoTheme() {
    stopAutoTheme();
    // Apply theme based on the real clock (time slices), and keep it updated.
    let idx = getTimeSliceThemeIndex();
    applyTheme(themes[idx]);
    localStorage.setItem(THEME_INDEX_KEY, String(idx));

    autoThemeInterval = setInterval(() => {
        const nextIdx = getTimeSliceThemeIndex();
        if (nextIdx !== idx) {
            idx = nextIdx;
            applyTheme(themes[idx]);
            localStorage.setItem(THEME_INDEX_KEY, String(idx));
        }
    }, 30_000); // check twice per minute (lightweight)
}

document.addEventListener('DOMContentLoaded', () => {
    const toggleBtn = document.getElementById('theme-toggle');
    const prefersReducedMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Default: OFF (and also off for reduced-motion users unless they enable)
    const enabled = !prefersReducedMotion && readBool(THEME_STORAGE_KEY, false);
    setToggleUI(enabled);
    if (enabled) startAutoTheme();
    else applyTheme(themes[getHourBasedThemeIndex()]);

    if (toggleBtn) {
        toggleBtn.addEventListener('click', () => {
            const next = !readBool(THEME_STORAGE_KEY, false);
            localStorage.setItem(THEME_STORAGE_KEY, String(next));
            setToggleUI(next);
            if (next && !prefersReducedMotion) startAutoTheme();
            else {
                stopAutoTheme();
                applyTheme(themes[getHourBasedThemeIndex()]);
            }
        });
    }
});

// Resume view – open viewer page in new tab (has X to close and return to site)
(function () {
    const RESUME_VIEWER = 'resume-viewer.html';
    const viewBtn = document.getElementById('resume-view-btn');

    if (viewBtn) {
        viewBtn.addEventListener('click', function (e) {
            e.preventDefault();
            window.open(RESUME_VIEWER, '_blank', 'noopener,noreferrer');
        });
    }
})();

