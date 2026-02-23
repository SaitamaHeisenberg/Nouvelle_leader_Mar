/**
 * CONTACT PAGE - JavaScript
 * Form handling and FAQ accordion
 */

document.addEventListener('DOMContentLoaded', function() {
    initContactForm();
    initFAQ();
});

/**
 * Initialize contact form functionality
 */
function initContactForm() {
    const form = document.querySelector('.contact-form');

    if (!form) return;

    // Form validation is already handled by main.js
    // Here we can add specific contact form logic

    form.addEventListener('submit', function(e) {
        e.preventDefault();

        // Get form data
        const formData = new FormData(form);
        const data = Object.fromEntries(formData);

        console.log('Form data:', data);

        // Here you would typically send the data to your backend
        // For now, we'll simulate a successful submission

        // Show loading state
        const submitButton = form.querySelector('button[type="submit"]');
        const originalText = submitButton.innerHTML;
        submitButton.innerHTML = `
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="animation: spin 1s linear infinite;">
                <circle cx="12" cy="12" r="10" stroke-opacity="0.25"></circle>
                <path d="M12 2a10 10 0 0 1 10 10" stroke-opacity="0.75"></path>
            </svg>
            Envoi en cours...
        `;
        submitButton.disabled = true;

        // Simulate API call
        setTimeout(() => {
            // Reset button
            submitButton.innerHTML = originalText;
            submitButton.disabled = false;

            // Show success message
            showSuccessMessage(form);

            // Reset form
            form.reset();

            // Optional: Redirect to WhatsApp with pre-filled message
            // const phone = '225XXXXXXXXXX';
            // const message = encodeURIComponent(`Bonjour, je suis ${data.name} de ${data.company}. ${data.message}`);
            // window.open(`https://wa.me/${phone}?text=${message}`, '_blank');
        }, 1500);
    });
}

/**
 * Show success message after form submission
 */
function showSuccessMessage(form) {
    // Remove any existing messages
    const existingMessage = form.querySelector('.success-message');
    if (existingMessage) {
        existingMessage.remove();
    }

    // Create success message
    const successDiv = document.createElement('div');
    successDiv.className = 'success-message';
    successDiv.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: linear-gradient(135deg, #10b981 0%, #059669 100%);
        color: white;
        padding: 1.5rem 2rem;
        border-radius: 12px;
        box-shadow: 0 10px 30px rgba(16, 185, 129, 0.3);
        z-index: 9999;
        animation: slideInRight 0.5s ease;
        max-width: 400px;
    `;

    successDiv.innerHTML = `
        <div style="display: flex; align-items: start; gap: 1rem;">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="flex-shrink: 0;">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                <polyline points="22 4 12 14.01 9 11.01"></polyline>
            </svg>
            <div>
                <strong style="display: block; margin-bottom: 0.5rem;">Message envoyé !</strong>
                <p style="margin: 0; font-size: 14px; opacity: 0.9;">
                    Nous avons bien reçu votre demande. Notre équipe vous contactera dans les 24 heures.
                </p>
            </div>
            <button onclick="this.parentElement.parentElement.remove()" style="background: none; border: none; color: white; cursor: pointer; font-size: 24px; padding: 0; line-height: 1; margin-left: auto;">×</button>
        </div>
    `;

    document.body.appendChild(successDiv);

    // Add animation style
    if (!document.getElementById('successAnimationStyle')) {
        const style = document.createElement('style');
        style.id = 'successAnimationStyle';
        style.textContent = `
            @keyframes slideInRight {
                from {
                    transform: translateX(100%);
                    opacity: 0;
                }
                to {
                    transform: translateX(0);
                    opacity: 1;
                }
            }
            @keyframes spin {
                from { transform: rotate(0deg); }
                to { transform: rotate(360deg); }
            }
        `;
        document.head.appendChild(style);
    }

    // Auto-remove after 5 seconds
    setTimeout(() => {
        successDiv.style.animation = 'slideInRight 0.5s ease reverse';
        setTimeout(() => successDiv.remove(), 500);
    }, 5000);
}

/**
 * Initialize FAQ accordion
 */
function initFAQ() {
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');

        question.addEventListener('click', () => {
            // Close other items
            faqItems.forEach(otherItem => {
                if (otherItem !== item) {
                    otherItem.classList.remove('active');
                }
            });

            // Toggle current item
            item.classList.toggle('active');
        });
    });
}

/**
 * Phone number formatting (optional enhancement)
 */
function formatPhoneNumber(input) {
    // Remove all non-numeric characters
    let cleaned = input.value.replace(/\D/g, '');

    // Format as: +225 XX XX XX XX XX
    if (cleaned.startsWith('225')) {
        cleaned = '+' + cleaned;
    } else if (cleaned.startsWith('00225')) {
        cleaned = '+' + cleaned.substring(2);
    } else if (!cleaned.startsWith('+')) {
        cleaned = '+225' + cleaned;
    }

    // Apply formatting
    let formatted = cleaned;
    if (cleaned.length > 4) {
        formatted = cleaned.substring(0, 4) + ' ' + cleaned.substring(4);
    }
    if (cleaned.length > 6) {
        formatted = formatted.substring(0, 7) + ' ' + formatted.substring(7);
    }
    if (cleaned.length > 8) {
        formatted = formatted.substring(0, 10) + ' ' + formatted.substring(10);
    }

    input.value = formatted;
}

// Apply phone formatting (optional)
const phoneInput = document.getElementById('phone');
if (phoneInput) {
    phoneInput.addEventListener('blur', function() {
        formatPhoneNumber(this);
    });
}
