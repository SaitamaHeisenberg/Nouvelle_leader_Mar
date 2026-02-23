/**
 * NOUVELLE LEADER MAR - ANIMATIONS 2026
 * Modern micro-interactions & smooth animations
 */

(function() {
    'use strict';

    // ============================================
    // PRELOADER
    // ============================================
    function initPreloader() {
        const preloader = document.querySelector('.preloader');
        if (!preloader) return;

        window.addEventListener('load', () => {
            setTimeout(() => {
                preloader.classList.add('loaded');
                document.body.classList.add('loaded');

                // Trigger hero reveal after preloader
                setTimeout(() => {
                    triggerHeroReveal();
                }, 300);

                // Remove preloader from DOM after animation
                setTimeout(() => {
                    preloader.remove();
                }, 1000);
            }, 800);
        });

        // Fallback: force remove after 4s
        setTimeout(() => {
            if (!preloader.classList.contains('loaded')) {
                preloader.classList.add('loaded');
                document.body.classList.add('loaded');
                triggerHeroReveal();
            }
        }, 4000);
    }

    // ============================================
    // HERO TEXT REVEAL
    // ============================================
    function triggerHeroReveal() {
        const title = document.querySelector('.hero-title');
        const subtitle = document.querySelector('.hero-subtitle');
        const cta = document.querySelector('.hero-cta');

        if (title) title.classList.add('reveal');
        if (subtitle) subtitle.classList.add('reveal');
        if (cta) cta.classList.add('reveal');
    }

    // ============================================
    // SCROLL PROGRESS BAR
    // ============================================
    function initScrollProgress() {
        const progressBar = document.querySelector('.scroll-progress');
        if (!progressBar) return;

        window.addEventListener('scroll', () => {
            const scrollTop = window.pageYOffset;
            const docHeight = document.documentElement.scrollHeight - window.innerHeight;
            const progress = (scrollTop / docHeight) * 100;
            progressBar.style.width = progress + '%';
        }, { passive: true });
    }

    // ============================================
    // SCROLL REVEAL OBSERVER
    // ============================================
    function initScrollReveal() {
        const revealElements = document.querySelectorAll(
            '.reveal-on-scroll, .reveal-left, .reveal-right, .reveal-scale, .reveal-blur, .reveal-rotate'
        );

        if (!revealElements.length) return;

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('revealed');
                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '0px 0px -40px 0px'
        });

        revealElements.forEach(el => observer.observe(el));
    }

    // ============================================
    // SECTION PARALLAX
    // ============================================
    function initSectionParallax() {
        if (window.innerWidth < 768) return;
        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

        var parallaxSections = document.querySelectorAll('.stats-section, .why-choose-section, .cta-section');
        if (!parallaxSections.length) return;

        window.addEventListener('scroll', function() {
            var scrollTop = window.pageYOffset;
            parallaxSections.forEach(function(section) {
                var rect = section.getBoundingClientRect();
                if (rect.top < window.innerHeight && rect.bottom > 0) {
                    var speed = 0.03;
                    var offset = (rect.top - window.innerHeight / 2) * speed;
                    section.style.backgroundPositionY = offset + 'px';
                }
            });
        }, { passive: true });
    }

    // Auto-apply reveal classes to sections
    function autoApplyRevealClasses() {
        // Stats
        document.querySelectorAll('.stat-item').forEach((el, i) => {
            el.classList.add('reveal-on-scroll', 'stagger-' + (i + 1));
        });

        // Service cards
        document.querySelectorAll('.service-card').forEach((el, i) => {
            el.classList.add('reveal-on-scroll', 'stagger-' + (i + 1));
        });

        // Why cards
        document.querySelectorAll('.why-card').forEach((el, i) => {
            el.classList.add('reveal-on-scroll', 'stagger-' + (i + 1));
        });

        // Process steps
        document.querySelectorAll('.process-step').forEach((el, i) => {
            el.classList.add('reveal-on-scroll', 'stagger-' + (i + 1));
        });

        // Section headers
        document.querySelectorAll('.section-header').forEach(el => {
            el.classList.add('reveal-on-scroll');
        });

        // About
        const aboutContent = document.querySelector('.about-content');
        const aboutImage = document.querySelector('.about-image');
        if (aboutContent) aboutContent.classList.add('reveal-left');
        if (aboutImage) aboutImage.classList.add('reveal-right');

        // Section CTA
        document.querySelectorAll('.section-cta').forEach(el => {
            el.classList.add('reveal-on-scroll');
        });

        // CTA section
        const ctaContent = document.querySelector('.cta-content');
        if (ctaContent) ctaContent.classList.add('reveal-scale');

        // Contact
        const contactForm = document.querySelector('.contact-form-wrapper');
        const contactInfo = document.querySelector('.contact-info');
        if (contactForm) contactForm.classList.add('reveal-left');
        if (contactInfo) contactInfo.classList.add('reveal-right');

        // FAQ
        document.querySelectorAll('.faq-item').forEach((el, i) => {
            el.classList.add('reveal-on-scroll', 'stagger-' + Math.min(i + 1, 4));
        });
    }

    // ============================================
    // ENHANCED STAT COUNTER
    // ============================================
    function initEnhancedCounters() {
        const statNumbers = document.querySelectorAll('.stat-number');

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    animateCounterSmooth(entry.target);
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });

        statNumbers.forEach(stat => observer.observe(stat));
    }

    function animateCounterSmooth(element) {
        const text = element.textContent;
        const hasPlus = text.includes('+');
        const number = parseInt(text.replace(/[^\d]/g, ''));

        if (isNaN(number)) return;

        const duration = 2500;
        const startTime = performance.now();

        function easeOutExpo(t) {
            return t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
        }

        function update(currentTime) {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const easedProgress = easeOutExpo(progress);
            const currentValue = Math.floor(easedProgress * number);

            element.textContent = hasPlus ? `+${currentValue}` : currentValue;

            if (progress < 1) {
                requestAnimationFrame(update);
            } else {
                element.textContent = hasPlus ? `+${number}` : text;
            }
        }

        requestAnimationFrame(update);
    }

    // ============================================
    // BUTTON RIPPLE EFFECT
    // ============================================
    function initRippleEffect() {
        document.querySelectorAll('.btn, .btn-cta-primary, .btn-cta-secondary').forEach(btn => {
            btn.addEventListener('click', function(e) {
                const ripple = document.createElement('span');
                ripple.classList.add('ripple');

                const rect = this.getBoundingClientRect();
                const size = Math.max(rect.width, rect.height);
                ripple.style.width = ripple.style.height = size + 'px';
                ripple.style.left = (e.clientX - rect.left - size / 2) + 'px';
                ripple.style.top = (e.clientY - rect.top - size / 2) + 'px';

                this.appendChild(ripple);

                setTimeout(() => ripple.remove(), 600);
            });
        });
    }

    // ============================================
    // CURSOR FOLLOWER
    // ============================================
    function initCursorFollower() {
        if (window.innerWidth < 1024) return;
        if ('ontouchstart' in window) return;

        const cursor = document.createElement('div');
        cursor.classList.add('cursor-follower');
        document.body.appendChild(cursor);

        let mouseX = 0, mouseY = 0;
        let cursorX = 0, cursorY = 0;

        document.addEventListener('mousemove', (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;

            if (!cursor.classList.contains('visible')) {
                cursor.classList.add('visible');
            }
        });

        // Smooth follow
        function animateCursor() {
            cursorX += (mouseX - cursorX) * 0.15;
            cursorY += (mouseY - cursorY) * 0.15;
            cursor.style.left = cursorX + 'px';
            cursor.style.top = cursorY + 'px';
            requestAnimationFrame(animateCursor);
        }
        animateCursor();

        // Hover effect on interactive elements
        const interactiveElements = document.querySelectorAll(
            'a, button, .btn, .service-card, .why-card, .stat-item, .faq-question, .contact-info-card'
        );

        interactiveElements.forEach(el => {
            el.addEventListener('mouseenter', () => cursor.classList.add('hover-active'));
            el.addEventListener('mouseleave', () => cursor.classList.remove('hover-active'));
        });
    }

    // ============================================
    // NAVBAR ENHANCED SCROLL
    // ============================================
    function initNavbarEnhanced() {
        const navbar = document.getElementById('navbar');
        if (!navbar) return;

        let ticking = false;

        window.addEventListener('scroll', () => {
            if (!ticking) {
                requestAnimationFrame(() => {
                    const currentScroll = window.pageYOffset;

                    if (currentScroll > 100) {
                        navbar.classList.add('scrolled');
                    } else {
                        navbar.classList.remove('scrolled');
                    }

                    ticking = false;
                });
                ticking = true;
            }
        }, { passive: true });

        // Smooth transition for background change on scroll
        navbar.style.transition = 'background 0.3s ease, box-shadow 0.3s ease, backdrop-filter 0.3s ease';
    }

    // ============================================
    // SMOOTH PARALLAX ON ABOUT IMAGE
    // ============================================
    function initParallaxImage() {
        const aboutImg = document.querySelector('.about-image');
        if (!aboutImg) return;

        window.addEventListener('scroll', () => {
            const rect = aboutImg.getBoundingClientRect();
            if (rect.top < window.innerHeight && rect.bottom > 0) {
                const offset = (rect.top - window.innerHeight / 2) * 0.05;
                aboutImg.style.transform = `translateY(${offset}px)`;
            }
        }, { passive: true });
    }

    // ============================================
    // FAQ ACCORDION (overrides basic version)
    // ============================================
    function initFAQ() {
        const faqItems = document.querySelectorAll('.faq-item');

        faqItems.forEach(item => {
            const question = item.querySelector('.faq-question');
            if (!question) return;

            question.addEventListener('click', () => {
                const isActive = item.classList.contains('active');

                // Close all
                faqItems.forEach(other => other.classList.remove('active'));

                // Open clicked if it wasn't active
                if (!isActive) {
                    item.classList.add('active');
                }
            });
        });
    }

    // ============================================
    // SERVICE CARDS - 3D TILT EFFECT
    // ============================================
    function initCardTilt() {
        if (window.innerWidth < 1024) return;
        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

        const cards = document.querySelectorAll('.service-card');
        if (!cards.length) return;

        cards.forEach(card => {
            card.addEventListener('mousemove', function(e) {
                const rect = this.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                const centerX = rect.width / 2;
                const centerY = rect.height / 2;

                const rotateX = ((y - centerY) / centerY) * -8;
                const rotateY = ((x - centerX) / centerX) * 8;

                this.style.transform = 'perspective(800px) rotateX(' + rotateX + 'deg) rotateY(' + rotateY + 'deg) translateY(-8px)';

                // Move the glow pseudo-element
                this.style.setProperty('--mouse-x', x + 'px');
                this.style.setProperty('--mouse-y', y + 'px');
            });

            card.addEventListener('mouseleave', function() {
                this.style.transform = 'perspective(800px) rotateX(0) rotateY(0) translateY(0)';
                this.style.removeProperty('--mouse-x');
                this.style.removeProperty('--mouse-y');
            });
        });
    }

    // ============================================
    // BACK TO TOP BUTTON
    // ============================================
    function initBackToTop() {
        var btn = document.getElementById('backToTop');
        if (!btn) return;

        window.addEventListener('scroll', function() {
            if (window.pageYOffset > 500) {
                btn.classList.add('visible');
            } else {
                btn.classList.remove('visible');
            }
        }, { passive: true });

        btn.addEventListener('click', function(e) {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    // ============================================
    // REMOVE AOS ATTRIBUTES (we use our own system)
    // ============================================
    function removeAOSAttributes() {
        document.querySelectorAll('[data-aos]').forEach(el => {
            el.removeAttribute('data-aos');
            el.removeAttribute('data-aos-duration');
            el.removeAttribute('data-aos-delay');
            el.style.opacity = '';
            el.style.transform = '';
        });
    }

    // ============================================
    // INITIALIZE ALL
    // ============================================
    document.addEventListener('DOMContentLoaded', () => {
        try {
            // Remove AOS data attributes to prevent conflicts
            removeAOSAttributes();

            // Auto-apply reveal classes
            autoApplyRevealClasses();

            // Initialize all modules
            initPreloader();
            initScrollProgress();
            initScrollReveal();
            initEnhancedCounters();
            initRippleEffect();
            initCursorFollower();
            initNavbarEnhanced();
            initParallaxImage();
            initFAQ();
            initCardTilt();
            initSectionParallax();
            initBackToTop();
        } catch (e) {
            // Ensure page is always visible even if animations fail
            console.error('Animation init error:', e);
            document.body.classList.add('loaded');
            var preloader = document.querySelector('.preloader');
            if (preloader) preloader.classList.add('loaded');
        }
    });

})();
