// DOM ready
document.addEventListener('DOMContentLoaded', function() {
    // Accordion functionality
    const accordionHeaders = document.querySelectorAll('.accordion-header');
    
    // Set initial state - first item open
    const firstAccordion = accordionHeaders[0];
    if (firstAccordion) {
        const firstContent = firstAccordion.nextElementSibling;
        const firstIcon = firstAccordion.querySelector('.accordion-icon');
        
        firstAccordion.setAttribute('aria-expanded', 'true');
        firstContent.style.maxHeight = firstContent.scrollHeight + "px";
        firstContent.setAttribute('aria-hidden', 'false');
        firstIcon.textContent = "-";
    }

    accordionHeaders.forEach(button => {
        button.addEventListener('click', (event) => {
            const btn = event.currentTarget;
            const content = btn.nextElementSibling;
            const icon = btn.querySelector('.accordion-icon');
            const isOpen = btn.getAttribute('aria-expanded') === 'true';

            if (isOpen) {
                // Close current accordion
                content.style.maxHeight = null;
                content.setAttribute('aria-hidden', 'true');
                btn.setAttribute('aria-expanded', 'false');
                icon.textContent = "+";
            } else {
                // Close all other accordions
                document.querySelectorAll('.accordion-content').forEach(item => {
                    item.style.maxHeight = null;
                    item.setAttribute('aria-hidden', 'true');
                });

                document.querySelectorAll('.accordion-header').forEach(item => {
                    item.setAttribute('aria-expanded', 'false');
                    const itemIcon = item.querySelector('.accordion-icon');
                    if (itemIcon) itemIcon.textContent = "+";
                });

                // Open clicked accordion
                content.style.maxHeight = content.scrollHeight + "px";
                content.setAttribute('aria-hidden', 'false');
                btn.setAttribute('aria-expanded', 'true');
                icon.textContent = "-";
            }
        });
    });

    // Tabs functionality
    const tabs = document.querySelectorAll('.tab-button');
    const contents = document.querySelectorAll('.tab-content');

    // Ensure first tab is active by default
    if (tabs.length > 0) {
        tabs[0].classList.add('active', 'text-white', 'bg-[#A89987]');
        tabs[0].classList.remove('text-[#4A4A4A]', 'hover:bg-[#c7b8a6]');
        tabs[0].setAttribute('aria-selected', 'true');
    }

    if (contents.length > 0) {
        contents[0].classList.add('active');
        contents[0].setAttribute('aria-hidden', 'false');
    }

    // Event to change tab
    tabs.forEach(button => {
        button.addEventListener('click', () => {
            const tabId = button.getAttribute('data-tab');

            // Remove active class from all buttons and restore styles
            tabs.forEach(btn => {
                btn.classList.remove('active', 'text-white', 'bg-[#A89987]');
                btn.classList.add('text-[#4A4A4A]', 'hover:bg-[#c7b8a6]');
                btn.setAttribute('aria-selected', 'false');
            });

            // Enable clicked tab
            button.classList.add('active', 'text-white', 'bg-[#A89987]');
            button.classList.remove('text-[#4A4A4A]', 'hover:bg-[#c7b8a6]');
            button.setAttribute('aria-selected', 'true');

            // Remove active class from all contents
            contents.forEach(content => {
                content.classList.remove('active');
                content.setAttribute('aria-hidden', 'true');
            });

            // Enable correct content
            const content = document.querySelector(`.tab-content[data-tab="${tabId}"]`);
            if (content) {
                content.classList.add('active');
                content.setAttribute('aria-hidden', 'false');
            }
        });
    });

    // Scroll animations
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('.animate-on-scroll').forEach(element => {
        observer.observe(element);
    }); 

});
