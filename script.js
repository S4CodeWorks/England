document.addEventListener('DOMContentLoaded', () => {
  // Initialize GSAP
  gsap.registerPlugin(ScrollTrigger);

  // Custom cursor
  const cursor = document.querySelector('.cursor');
  
  document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
  });

  document.addEventListener('mousedown', () => {
    cursor.style.transform = 'translate(-50%, -50%) scale(0.8)';
  });

  document.addEventListener('mouseup', () => {
    cursor.style.transform = 'translate(-50%, -50%) scale(1)';
  });

  // Enhanced Navigation toggle
  const navToggle = document.querySelector('.nav-toggle');
  const navMenu = document.querySelector('.nav-menu');

  navToggle.addEventListener('click', () => {
    navToggle.classList.toggle('active');
    navMenu.classList.toggle('active');
    document.body.classList.toggle('menu-open');
  });

  // Header scroll effect
  const navbar = document.querySelector('.navbar');
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

  // Menu items hover effect
  const navLinks = document.querySelectorAll('.nav-link');
  
  navLinks.forEach(link => {
    link.addEventListener('mouseenter', (e) => {
      const letters = e.target.textContent.split('');
      e.target.textContent = '';
      letters.forEach((letter, i) => {
        const span = document.createElement('span');
        span.textContent = letter;
        span.style.animationDelay = `${i * 50}ms`;
        e.target.appendChild(span);
      });
    });
  });

  // Smooth scroll
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        gsap.to(window, {
          duration: 1,
          scrollTo: {
            y: target,
            offsetY: 80
          },
          ease: "power3.inOut"
        });
        navMenu.classList.remove('active');
        navToggle.classList.remove('active');
      }
    });
  });

  // GSAP Animations
  // Hero section
  gsap.from('.hero-content', {
    duration: 1,
    y: 100,
    opacity: 0,
    ease: "power3.out"
  });

  // Enhanced About Cards Interaction
  const aboutCards = document.querySelectorAll('.about-card');
  
  aboutCards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      const mouseX = (x / card.offsetWidth) * 100;
      const mouseY = (y / card.offsetHeight) * 100;
      
      card.style.setProperty('--mouse-x', `${mouseX}%`);
      card.style.setProperty('--mouse-y', `${mouseY}%`);
      
      const rotateY = ((x / card.offsetWidth) - 0.5) * 10;
      const rotateX = ((y / card.offsetHeight) - 0.5) * -10;
      
      card.style.transform = `
        perspective(1000px)
        rotateX(${rotateX}deg)
        rotateY(${rotateY}deg)
        translateZ(10px)
      `;
    });
    
    card.addEventListener('mouseleave', () => {
      card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateZ(0)';
    });
  });

  // About cards animation
  gsap.utils.toArray('.about-card').forEach((card, i) => {
    gsap.from(card, {
      scrollTrigger: {
        trigger: card,
        start: "top bottom-=100",
        toggleActions: "play none none reverse"
      },
      duration: 0.8,
      y: 50,
      opacity: 0,
      delay: i * 0.2,
      ease: "power3.out"
    });
  });

  // Staff cards animation
  gsap.utils.toArray('.staff-card').forEach((card, i) => {
    gsap.from(card, {
      scrollTrigger: {
        trigger: card,
        start: "top bottom-=100",
        toggleActions: "play none none reverse"
      },
      duration: 0.8,
      y: 50,
      opacity: 0,
      delay: i * 0.2,
      ease: "power3.out"
    });
  });

  // News card animation
  gsap.from('.news-card', {
    scrollTrigger: {
      trigger: '.news-card',
      start: "top bottom-=100",
      toggleActions: "play none none reverse"
    },
    duration: 1,
    y: 50,
    opacity: 0,
    ease: "power3.out"
  });

  // Section titles animation
  gsap.utils.toArray('.section-title').forEach(title => {
    gsap.from(title, {
      scrollTrigger: {
        trigger: title,
        start: "top bottom-=100",
        toggleActions: "play none none reverse"
      },
      duration: 1,
      y: 30,
      opacity: 0,
      ease: "power3.out"
    });
  });

  // Intersection Observer for general animations
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, {
    threshold: 0.1
  });

  document.querySelectorAll('section').forEach(section => {
    observer.observe(section);
  });
});