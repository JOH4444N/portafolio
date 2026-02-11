// ===== VARIABLES GLOBALES =====
let isMenuOpen = false;
let lastScrollY = 0;
let ticking = false;

// ===== INICIALIZACIÓN =====
document.addEventListener('DOMContentLoaded', function() {
  initializeApp();
});

function initializeApp() {
  // Ocultar loading screen
  hideLoadingScreen();
  
  // Inicializar AOS
  if (typeof AOS !== 'undefined') {
    AOS.init({
      once: true,
      duration: 800,
      easing: 'ease-out-cubic',
      offset: 100
    });
  }
  
  // Inicializar componentes
  initSmoothScroll();
  initMobileMenu();
  initScrollEffects();
  initSkillBars();
  initProjectModals();
  initContactForm();
  initScrollToTop();
  initTypingEffect();
  
  console.log('🚀 Portafolio inicializado correctamente');
}

// ===== LOADING SCREEN =====
function hideLoadingScreen() {
  const loadingScreen = document.getElementById('loading-screen');
  if (loadingScreen) {
    setTimeout(() => {
      loadingScreen.classList.add('hidden');
      setTimeout(() => {
        loadingScreen.remove();
      }, 500);
    }, 1000);
  }
}

// ===== SMOOTH SCROLL =====
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      if (!href || href === '#') return;
      
      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        closeMobileMenu();
        
        const headerHeight = document.querySelector('.nav-wrap').offsetHeight;
        const targetPosition = target.offsetTop - headerHeight - 20;
        
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
        
        // Actualizar URL sin recargar
        history.pushState(null, null, href);
      }
    });
  });
}

// ===== MENÚ MÓVIL =====
function initMobileMenu() {
  const menuToggle = document.getElementById('menu-toggle');
  const navMenu = document.getElementById('nav-menu');
  
  if (menuToggle && navMenu) {
    menuToggle.addEventListener('click', toggleMobileMenu);
    
    // Cerrar menú al hacer clic en enlaces
    document.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', closeMobileMenu);
    });
    
    // Cerrar menú al hacer clic fuera
    document.addEventListener('click', function(e) {
      if (isMenuOpen && !navMenu.contains(e.target) && !menuToggle.contains(e.target)) {
        closeMobileMenu();
      }
    });
    
    // Cerrar menú con ESC
    document.addEventListener('keydown', function(e) {
      if (e.key === 'Escape' && isMenuOpen) {
        closeMobileMenu();
      }
    });
  }
}

function toggleMobileMenu() {
  const menuToggle = document.getElementById('menu-toggle');
  const navMenu = document.getElementById('nav-menu');
  
  isMenuOpen = !isMenuOpen;
  
  menuToggle.classList.toggle('active', isMenuOpen);
  navMenu.classList.toggle('open', isMenuOpen);
  menuToggle.setAttribute('aria-expanded', isMenuOpen);
  
  // Prevenir scroll del body cuando el menú está abierto
  document.body.style.overflow = isMenuOpen ? 'hidden' : '';
}

function closeMobileMenu() {
  const menuToggle = document.getElementById('menu-toggle');
  const navMenu = document.getElementById('nav-menu');
  
  if (isMenuOpen) {
    isMenuOpen = false;
    menuToggle.classList.remove('active');
    navMenu.classList.remove('open');
    menuToggle.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  }
}

// ===== EFECTOS DE SCROLL =====
function initScrollEffects() {
  window.addEventListener('scroll', function() {
    if (!ticking) {
      requestAnimationFrame(updateScrollEffects);
      ticking = true;
    }
  });
}

function updateScrollEffects() {
  const currentScrollY = window.scrollY;
  const navbar = document.querySelector('.nav-wrap');
  const scrollTopBtn = document.getElementById('scroll-top');
  
  // Efecto navbar
  if (navbar) {
    if (currentScrollY > 100) {
      navbar.style.background = 'rgba(10, 25, 47, 0.98)';
      navbar.style.backdropFilter = 'blur(15px)';
      navbar.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.1)';
    } else {
      navbar.style.background = 'linear-gradient(180deg, rgba(10, 25, 47, 0.95), rgba(10, 25, 47, 0.85))';
      navbar.style.backdropFilter = 'blur(10px)';
      navbar.style.boxShadow = 'none';
    }
  }
  
  // Botón scroll to top
  if (scrollTopBtn) {
    if (currentScrollY > 500) {
      scrollTopBtn.classList.add('visible');
    } else {
      scrollTopBtn.classList.remove('visible');
    }
  }
  
  // Actualizar enlaces activos
  updateActiveNavLinks();
  
  lastScrollY = currentScrollY;
  ticking = false;
}

function updateActiveNavLinks() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');
  
  let currentSection = '';
  
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 150;
    const sectionHeight = section.offsetHeight;
    
    if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
      currentSection = section.getAttribute('id');
    }
  });
  
  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${currentSection}`) {
      link.classList.add('active');
    }
  });
}

// ===== SCROLL TO TOP =====
function initScrollToTop() {
  const scrollTopBtn = document.getElementById('scroll-top');
  
  if (scrollTopBtn) {
    scrollTopBtn.addEventListener('click', function() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }
}

// ===== BARRAS DE HABILIDADES =====
function initSkillBars() {
  const observerOptions = {
    threshold: 0.5,
    rootMargin: '0px 0px -100px 0px'
  };
  
  const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateSkillBars(entry.target);
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);
  
  document.querySelectorAll('.skills-section').forEach(section => {
    observer.observe(section);
  });
}

function animateSkillBars(section) {
  const skillBars = section.querySelectorAll('.skill-progress');
  
  skillBars.forEach((bar, index) => {
    const width = bar.getAttribute('data-width') || '0';
    
    setTimeout(() => {
      bar.style.width = width + '%';
    }, index * 200);
  });
}

// ===== MODALES DE PROYECTOS =====
function initProjectModals() {
  const openButtons = document.querySelectorAll('.js-open-project');
  const modal = document.getElementById('project-modal');
  const closeButton = document.querySelector('.js-close-modal');
  const modalBackdrop = document.querySelector('.modal-backdrop');
  
  if (!modal) return;
  
  // Abrir modal
  openButtons.forEach(button => {
    button.addEventListener('click', function() {
      const projectData = {
        title: this.dataset.title || 'Proyecto',
        desc: this.dataset.desc || '',
        tools: this.dataset.tools || '',
        role: this.dataset.role || '',
        activities: this.dataset.activities || '',
        duration: this.dataset.duration || '',
        bugs: this.dataset.bugs || '',
        cases: this.dataset.cases || ''
      };
      
      openProjectModal(projectData);
    });
  });
  
  // Cerrar modal
  if (closeButton) {
    closeButton.addEventListener('click', closeProjectModal);
  }
  
  if (modalBackdrop) {
    modalBackdrop.addEventListener('click', closeProjectModal);
  }
  
  // Cerrar con ESC
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && modal.getAttribute('aria-hidden') === 'false') {
      closeProjectModal();
    }
  });
}

function openProjectModal(data) {
  const modal = document.getElementById('project-modal');
  const elements = {
    title: document.getElementById('modal-title'),
    desc: document.getElementById('modal-desc'),
    tools: document.getElementById('modal-tools'),
    role: document.getElementById('modal-role'),
    activities: document.getElementById('modal-activities'),
    duration: document.getElementById('modal-duration'),
    bugs: document.getElementById('modal-bugs'),
    cases: document.getElementById('modal-cases')
  };
  
  // Llenar contenido
  Object.keys(elements).forEach(key => {
    if (elements[key] && data[key]) {
      elements[key].textContent = data[key];
    }
  });
  
  // Mostrar modal
  modal.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
  
  // Focus en el botón de cerrar
  setTimeout(() => {
    const closeBtn = modal.querySelector('.modal-close');
    if (closeBtn) closeBtn.focus();
  }, 100);
}

function closeProjectModal() {
  const modal = document.getElementById('project-modal');
  modal.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
}

// ===== FORMULARIO DE CONTACTO =====
function initContactForm() {
  const form = document.getElementById('contact-form');
  const feedback = document.getElementById('form-feedback');
  
  if (!form || !feedback) return;
  
  form.addEventListener('submit', async function(e) {
    e.preventDefault();
    
    const submitBtn = form.querySelector('.btn-submit');
    const btnText = submitBtn.querySelector('.btn-text');
    const btnLoading = submitBtn.querySelector('.btn-loading');
    
    // Mostrar estado de carga
    btnText.style.display = 'none';
    btnLoading.style.display = 'flex';
    submitBtn.disabled = true;
    
    // Limpiar feedback anterior
    feedback.className = 'form-feedback';
    feedback.textContent = '';
    
    try {
      // Simular envío (reemplazar con tu endpoint real)
      await simulateFormSubmission();
      
      // Éxito
      showFormFeedback('¡Gracias! Tu mensaje ha sido enviado correctamente. Te responderé pronto.', 'success');
      form.reset();
      
    } catch (error) {
      // Error
      showFormFeedback('Hubo un error al enviar el mensaje. Por favor, intenta de nuevo o contáctame directamente.', 'error');
      console.error('Error en formulario:', error);
      
    } finally {
      // Restaurar botón
      setTimeout(() => {
        btnText.style.display = 'flex';
        btnLoading.style.display = 'none';
        submitBtn.disabled = false;
      }, 1000);
    }
  });
}

function simulateFormSubmission() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // Simular éxito/error aleatorio para demo
      Math.random() > 0.2 ? resolve() : reject(new Error('Error simulado'));
    }, 2000);
  });
}

function showFormFeedback(message, type) {
  const feedback = document.getElementById('form-feedback');
  feedback.textContent = message;
  feedback.className = `form-feedback ${type}`;
  
  // Auto-ocultar después de 6 segundos
  setTimeout(() => {
    feedback.className = 'form-feedback';
    feedback.textContent = '';
  }, 6000);
}

// ===== EFECTO DE ESCRITURA =====
function initTypingEffect() {
  const cursor = document.querySelector('.typing-cursor');
  if (cursor) {
    // El efecto de parpadeo ya está en CSS
    // Aquí podrías agregar lógica adicional si necesitas
  }
}

// ===== UTILIDADES =====
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

function throttle(func, limit) {
  let inThrottle;
  return function() {
    const args = arguments;
    const context = this;
    if (!inThrottle) {
      func.apply(context, args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  };
}

// ===== MANEJO DE ERRORES =====
window.addEventListener('error', function(e) {
  console.error('Error en la aplicación:', e.error);
});

window.addEventListener('unhandledrejection', function(e) {
  console.error('Promise rechazada:', e.reason);
});

// ===== PERFORMANCE =====
if ('serviceWorker' in navigator) {
  window.addEventListener('load', function() {
    // Aquí podrías registrar un service worker si lo necesitas
  });
}

// ===== ANALYTICS (opcional) =====
function trackEvent(category, action, label) {
  // Aquí podrías integrar Google Analytics o similar
  console.log('Event tracked:', { category, action, label });
}

// Trackear clics en botones importantes
document.addEventListener('click', function(e) {
  if (e.target.matches('.btn-primary')) {
    trackEvent('Button', 'Click', 'Primary CTA');
  }
  
  if (e.target.matches('.cta-button')) {
    trackEvent('Button', 'Click', 'Download CV');
  }
});

console.log('📱 Script cargado completamente');
