
        // Initialize AOS Animation
        document.addEventListener('DOMContentLoaded', function() {
            AOS.init({
                duration: 800,
                easing: 'ease-in-out',
                once: true,
                mirror: false
            });
            
            // Mobile Menu Toggle
            const menuToggle = document.getElementById('menu-toggle');
            const mobileMenu = document.getElementById('mobile-menu');
            
            if (menuToggle && mobileMenu) {
                menuToggle.addEventListener('click', function() {
                    mobileMenu.classList.toggle('hidden');
                });
            }
            
            // Close mobile menu when clicking on a link
            const mobileLinks = mobileMenu ? mobileMenu.querySelectorAll('a') : [];
            mobileLinks.forEach(link => {
                link.addEventListener('click', function() {
                    mobileMenu.classList.add('hidden');
                });
            });
            
            // Navbar scroll effect
            const navbar = document.querySelector('.navbar');
            window.addEventListener('scroll', function() {
                if (window.scrollY > 100) {
                    navbar.classList.add('shadow-md');
                } else {
                    navbar.classList.remove('shadow-md');
                }
            });
            
            // Smooth scrolling for anchor links
            document.querySelectorAll('a[href^="#"]').forEach(anchor => {
                anchor.addEventListener('click', function(e) {
                    e.preventDefault();
                    
                    const targetId = this.getAttribute('href');
                    if (targetId === '#') return;
                    
                    const targetElement = document.querySelector(targetId);
                    if (targetElement) {
                        const navbarHeight = navbar.offsetHeight;
                        const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - navbarHeight;
                        
                        window.scrollTo({
                            top: targetPosition,
                            behavior: 'smooth'
                        });
                    }
                });
            });
            
            // Add 3D tilt effect to cards
            const cards = document.querySelectorAll('.card');
            cards.forEach(card => {
                card.addEventListener('mousemove', function(e) {
                    const rect = card.getBoundingClientRect();
                    const x = e.clientX - rect.left;
                    const y = e.clientY - rect.top;
                    
                    const centerX = rect.width / 2;
                    const centerY = rect.height / 2;
                    
                    const angleX = (y - centerY) / 20;
                    const angleY = (centerX - x) / 20;
                    
                    card.style.transform = `perspective(1000px) rotateX(${angleX}deg) rotateY(${angleY}deg) translateZ(10px)`;
                });
                
                card.addEventListener('mouseleave', function() {
                    card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateZ(0)';
                });
            });
        });