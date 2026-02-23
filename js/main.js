/**
 * NOUVELLE LEADER MAR - MAIN JAVASCRIPT
 * Interactions & Animations
 */

// ============================================
// NAVIGATION
// ============================================

// Initialize on DOM loaded
document.addEventListener('DOMContentLoaded', function() {
    initNavigation();
    initHeroSlider();
    initScrollAnimations();
    initSmoothScroll();
    initAOS();
});

/**
 * Navigation functionality
 */
function initNavigation() {
    const navbar = document.getElementById('navbar');
    const burger = document.getElementById('burger');
    const navMenu = document.getElementById('navMenu');
    const navLinks = document.querySelectorAll('.nav-link');
    const dropdownItems = document.querySelectorAll('.nav-item-dropdown');

    // Sticky navbar on scroll
    let lastScroll = 0;
    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;

        if (currentScroll > 100) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }

        lastScroll = currentScroll;
    });

    // Mobile menu toggle
    if (burger && navMenu) {
        burger.addEventListener('click', () => {
            const isActive = burger.classList.toggle('active');
            navMenu.classList.toggle('active');
            burger.setAttribute('aria-expanded', isActive);
            document.body.style.overflow = isActive ? 'hidden' : '';
        });

        // Close menu when clicking nav link (but not dropdown parent)
        navLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                // Si c'est un lien de dropdown parent sur mobile, ne pas fermer
                if (window.innerWidth <= 992 && link.closest('.nav-item-dropdown')) {
                    return;
                }

                burger.classList.remove('active');
                navMenu.classList.remove('active');
                burger.setAttribute('aria-expanded', 'false');
                document.body.style.overflow = '';
            });
        });

        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!navMenu.contains(e.target) && !burger.contains(e.target)) {
                burger.classList.remove('active');
                navMenu.classList.remove('active');
                burger.setAttribute('aria-expanded', 'false');
                document.body.style.overflow = '';
            }
        });
    }

    // Dropdown menu sur mobile
    if (window.innerWidth <= 992) {
        dropdownItems.forEach(item => {
            const link = item.querySelector('.nav-link');
            link.addEventListener('click', (e) => {
                e.preventDefault();
                item.classList.toggle('active');

                // Fermer les autres dropdowns
                dropdownItems.forEach(otherItem => {
                    if (otherItem !== item) {
                        otherItem.classList.remove('active');
                    }
                });
            });
        });
    }

    // Re-initialiser les dropdowns sur redimensionnement
    window.addEventListener('resize', debounce(() => {
        if (window.innerWidth > 992) {
            dropdownItems.forEach(item => item.classList.remove('active'));
            burger.classList.remove('active');
            navMenu.classList.remove('active');
            document.body.style.overflow = '';
        }
    }, 250));

    // Active link on scroll
    updateActiveLink();
    window.addEventListener('scroll', updateActiveLink);
}

/**
 * Update active navigation link based on scroll position
 */
function updateActiveLink() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');

    let current = '';
    const scrollPosition = window.pageYOffset + 200;

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
}

// ============================================
// SMOOTH SCROLL
// ============================================

/**
 * Smooth scroll for anchor links
 */
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');

            // Skip if href is just "#"
            if (href === '#') {
                e.preventDefault();
                return;
            }

            const target = document.querySelector(href);

            if (target) {
                e.preventDefault();
                const offsetTop = target.offsetTop - 80; // Navbar height offset

                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// ============================================
// SCROLL ANIMATIONS
// ============================================

/**
 * Initialize custom scroll animations
 */
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
            }
        });
    }, observerOptions);

    // Observe elements with animate class
    document.querySelectorAll('.animate').forEach(el => {
        observer.observe(el);
    });
}

// ============================================
// AOS (Animate On Scroll) INITIALIZATION
// ============================================

/**
 * Initialize AOS library
 */
function initAOS() {
    if (typeof AOS !== 'undefined') {
        AOS.init({
            duration: 800,
            easing: 'ease-in-out',
            once: true,
            offset: 100,
            delay: 0,
        });
    }
}

// ============================================
// FORM VALIDATION & HANDLING
// ============================================

/**
 * Form validation for contact forms
 */
function initFormValidation() {
    const forms = document.querySelectorAll('form[data-validate]');

    forms.forEach(form => {
        form.addEventListener('submit', function(e) {
            e.preventDefault();

            // Clear previous errors
            clearFormErrors(form);

            // Validate form
            if (validateForm(form)) {
                // If valid, you can submit via AJAX or allow normal submission
                console.log('Form is valid, ready to submit');
                // form.submit(); // Uncomment to actually submit
                showFormSuccess(form);
            }
        });

        // Real-time validation on blur
        const inputs = form.querySelectorAll('input, textarea, select');
        inputs.forEach(input => {
            input.addEventListener('blur', function() {
                validateField(this);
            });
        });
    });
}

/**
 * Validate entire form
 */
function validateForm(form) {
    let isValid = true;
    const requiredFields = form.querySelectorAll('[required]');

    requiredFields.forEach(field => {
        if (!validateField(field)) {
            isValid = false;
        }
    });

    return isValid;
}

/**
 * Validate single field
 */
function validateField(field) {
    const value = field.value.trim();
    const type = field.type;
    const fieldName = field.name || field.id;

    // Check if required
    if (field.hasAttribute('required') && !value) {
        showFieldError(field, 'Ce champ est obligatoire');
        return false;
    }

    // Email validation
    if (type === 'email' && value) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value)) {
            showFieldError(field, 'Veuillez entrer une adresse email valide');
            return false;
        }
    }

    // Phone validation (basic)
    if (type === 'tel' && value) {
        const phoneRegex = /^[\d\s\+\-\(\)]+$/;
        if (!phoneRegex.test(value)) {
            showFieldError(field, 'Veuillez entrer un numéro de téléphone valide');
            return false;
        }
    }

    // Clear error if valid
    clearFieldError(field);
    return true;
}

/**
 * Show error message for field
 */
function showFieldError(field, message) {
    field.classList.add('error');

    // Remove existing error message
    const existingError = field.parentElement.querySelector('.error-message');
    if (existingError) {
        existingError.remove();
    }

    // Add error message
    const errorDiv = document.createElement('div');
    errorDiv.className = 'error-message';
    errorDiv.style.color = '#dc2626';
    errorDiv.style.fontSize = '14px';
    errorDiv.style.marginTop = '5px';
    errorDiv.textContent = message;
    field.parentElement.appendChild(errorDiv);
}

/**
 * Clear error for field
 */
function clearFieldError(field) {
    field.classList.remove('error');
    const errorMessage = field.parentElement.querySelector('.error-message');
    if (errorMessage) {
        errorMessage.remove();
    }
}

/**
 * Clear all form errors
 */
function clearFormErrors(form) {
    const errors = form.querySelectorAll('.error-message');
    errors.forEach(error => error.remove());

    const errorFields = form.querySelectorAll('.error');
    errorFields.forEach(field => field.classList.remove('error'));
}

/**
 * Show success message
 */
function showFormSuccess(form) {
    const successDiv = document.createElement('div');
    successDiv.className = 'form-success';
    successDiv.style.cssText = `
        padding: 1rem;
        background: #10b981;
        color: white;
        border-radius: 8px;
        margin-top: 1rem;
        text-align: center;
    `;
    successDiv.textContent = 'Votre message a été envoyé avec succès ! Nous vous contacterons bientôt.';

    form.appendChild(successDiv);
    form.reset();

    // Remove success message after 5 seconds
    setTimeout(() => {
        successDiv.remove();
    }, 5000);
}

// ============================================
// UTILITY FUNCTIONS
// ============================================

/**
 * Debounce function for performance
 */
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

/**
 * Check if element is in viewport
 */
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// ============================================
// PERFORMANCE OPTIMIZATIONS
// ============================================

/**
 * Lazy load images
 */
function initLazyLoading() {
    const images = document.querySelectorAll('img[data-src]');

    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
                observer.unobserve(img);
            }
        });
    });

    images.forEach(img => imageObserver.observe(img));
}

// ============================================
// WHATSAPP BUTTON
// ============================================

/**
 * WhatsApp button functionality
 */
function initWhatsAppButton() {
    const whatsappButton = document.querySelector('.whatsapp-float');

    if (whatsappButton) {
        // Hide on scroll down, show on scroll up
        let lastScrollTop = 0;

        window.addEventListener('scroll', debounce(() => {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

            if (scrollTop > lastScrollTop && scrollTop > 300) {
                whatsappButton.style.transform = 'scale(0)';
            } else {
                whatsappButton.style.transform = 'scale(1)';
            }

            lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
        }, 100));
    }
}

// Initialize WhatsApp button
document.addEventListener('DOMContentLoaded', initWhatsAppButton);

// ============================================
// STATS COUNTER ANIMATION
// ============================================

/**
 * Animate numbers counting up
 */
function initStatsCounter() {
    const statNumbers = document.querySelectorAll('.stat-number');

    const counterObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCounter(entry.target);
                counterObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    statNumbers.forEach(stat => counterObserver.observe(stat));
}

/**
 * Animate counter from 0 to target number
 */
function animateCounter(element) {
    const text = element.textContent;
    const hasPlus = text.includes('+');
    const number = parseInt(text.replace(/[^\d]/g, ''));

    if (isNaN(number)) return;

    const duration = 2000;
    const steps = 60;
    const increment = number / steps;
    let current = 0;

    const timer = setInterval(() => {
        current += increment;
        if (current >= number) {
            element.textContent = hasPlus ? `+${number}` : number;
            clearInterval(timer);
        } else {
            element.textContent = hasPlus ? `+${Math.floor(current)}` : Math.floor(current);
        }
    }, duration / steps);
}

// Initialize stats counter
document.addEventListener('DOMContentLoaded', initStatsCounter);

// ============================================
// HERO SLIDER
// ============================================

/**
 * Hero Slider - Diaporama automatique
 */
function initHeroSlider() {
    const slides = document.querySelectorAll('.hero-slide');
    const indicators = document.querySelectorAll('.indicator');
    const prevBtn = document.querySelector('.slider-btn.prev');
    const nextBtn = document.querySelector('.slider-btn.next');

    if (!slides.length) return;

    let currentSlide = 0;
    const totalSlides = slides.length;
    let autoplayInterval;

    // Fonction pour changer de slide
    function goToSlide(index) {
        // Retirer active de tous
        slides.forEach(slide => slide.classList.remove('active'));
        indicators.forEach(ind => ind.classList.remove('active'));

        // Ajouter active au slide actuel
        slides[index].classList.add('active');
        indicators[index].classList.add('active');

        currentSlide = index;
    }

    // Slide suivante
    function nextSlide() {
        const next = (currentSlide + 1) % totalSlides;
        goToSlide(next);
    }

    // Slide précédente
    function prevSlide() {
        const prev = (currentSlide - 1 + totalSlides) % totalSlides;
        goToSlide(prev);
    }

    // Autoplay
    function startAutoplay() {
        autoplayInterval = setInterval(nextSlide, 5000); // Change toutes les 5 secondes
    }

    function stopAutoplay() {
        clearInterval(autoplayInterval);
    }

    // Event listeners
    if (nextBtn) {
        nextBtn.addEventListener('click', () => {
            nextSlide();
            stopAutoplay();
            startAutoplay(); // Redémarre l'autoplay après clic
        });
    }

    if (prevBtn) {
        prevBtn.addEventListener('click', () => {
            prevSlide();
            stopAutoplay();
            startAutoplay();
        });
    }

    // Indicateurs
    indicators.forEach((indicator, index) => {
        indicator.addEventListener('click', () => {
            goToSlide(index);
            stopAutoplay();
            startAutoplay();
        });
    });

    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowLeft') {
            prevSlide();
            stopAutoplay();
            startAutoplay();
        } else if (e.key === 'ArrowRight') {
            nextSlide();
            stopAutoplay();
            startAutoplay();
        }
    });

    // Pause sur hover
    const sliderContainer = document.querySelector('.hero-slider');
    if (sliderContainer) {
        sliderContainer.addEventListener('mouseenter', stopAutoplay);
        sliderContainer.addEventListener('mouseleave', startAutoplay);
    }

    // Démarrer l'autoplay
    startAutoplay();
}

// ============================================
// CONSOLE MESSAGE
// ============================================

console.log('%c Nouvelle Leader Mar ', 'background: #0033CC; color: white; padding: 5px 10px; border-radius: 5px; font-weight: bold;');
console.log('%c Site Web Développé avec ❤️ ', 'color: #00BFCC; font-weight: bold;');
