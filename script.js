// Simple JavaScript for interactive elements
document.addEventListener('DOMContentLoaded', function() {
    // Upload area interaction
    const uploadArea = document.querySelector('.upload-area');
    uploadArea.addEventListener('click', function() {
        alert('File upload dialog would open here in a real application');
    });
    
    // Tool buttons interaction
    const toolButtons = document.querySelectorAll('.tool-btn, .sidebar-option');
    toolButtons.forEach(button => {
        button.addEventListener('click', function() {
            const text = this.querySelector('span').textContent;
            alert(`"${text}" feature would be activated here`);
        });
    });
    
    // Feature cards interaction
    const featureCards = document.querySelectorAll('.feature-card');
    featureCards.forEach(card => {
        card.addEventListener('click', function() {
            const title = this.querySelector('h3').textContent;
            alert(`Opening ${title} tool`);
        });
    });
    
    // Contact form submission
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form values
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const phone = document.getElementById('phone').value;
            const message = document.getElementById('message').value;
            
            // In a real application, you would send this data to a server
            // For now, we'll just show a success message
            alert(`Thank you ${name}! Your message has been sent successfully. We will contact you at ${email} or ${phone} soon.`);
            
            // Reset the form
            contactForm.reset();
        });
    }
    
    // Smooth scrolling for navigation links
    document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
});