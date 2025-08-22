// Modern Portfolio Effects - Diego Gomes

// Initialize all effects when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    initParticles();
    initScrollEffects();
    initTypingEffect();
    initMatrixEffect();
    initSmoothScrolling();
    initMobileMenu();
    initThemeToggle();
    initContactForm();
    initSkillsAnimation();
    initProjectsAnimation();
});

// Particles.js Configuration
function initParticles() {
    if (typeof particlesJS !== 'undefined') {
        particlesJS('particles-js', {
            particles: {
                number: {
                    value: 80,
                    density: {
                        enable: true,
                        value_area: 800
                    }
                },
                color: {
                    value: '#00d4ff'
                },
                shape: {
                    type: 'circle',
                    stroke: {
                        width: 0,
                        color: '#000000'
                    }
                },
                opacity: {
                    value: 0.5,
                    random: false,
                    anim: {
                        enable: false,
                        speed: 1,
                        opacity_min: 0.1,
                        sync: false
                    }
                },
                size: {
                    value: 3,
                    random: true,
                    anim: {
                        enable: false,
                        speed: 40,
                        size_min: 0.1,
                        sync: false
                    }
                },
                line_linked: {
                    enable: true,
                    distance: 150,
                    color: '#00d4ff',
                    opacity: 0.4,
                    width: 1
                },
                move: {
                    enable: true,
                    speed: 6,
                    direction: 'none',
                    random: false,
                    straight: false,
                    out_mode: 'out',
                    bounce: false,
                    attract: {
                        enable: false,
                        rotateX: 600,
                        rotateY: 1200
                    }
                }
            },
            interactivity: {
                detect_on: 'canvas',
                events: {
                    onhover: {
                        enable: true,
                        mode: 'repulse'
                    },
                    onclick: {
                        enable: true,
                        mode: 'push'
                    },
                    resize: true
                },
                modes: {
                    grab: {
                        distance: 400,
                        line_linked: {
                            opacity: 1
                        }
                    },
                    bubble: {
                        distance: 400,
                        size: 40,
                        duration: 2,
                        opacity: 8,
                        speed: 3
                    },
                    repulse: {
                        distance: 200,
                        duration: 0.4
                    },
                    push: {
                        particles_nb: 4
                    },
                    remove: {
                        particles_nb: 2
                    }
                }
            },
            retina_detect: true
        });
    }
}

// Scroll Effects
function initScrollEffects() {
    const navbar = document.querySelector('.navbar');
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');
    
    // Navbar scroll effect
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            navbar.style.background = 'rgba(10, 10, 10, 0.98)';
            navbar.style.backdropFilter = 'blur(20px)';
        } else {
            navbar.style.background = 'rgba(10, 10, 10, 0.95)';
            navbar.style.backdropFilter = 'blur(20px)';
        }
    });
    
    // Section reveal animation
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                entry.target.classList.add('visible'); // Add visible class for lighting effects
                
                // Update active nav link
                const id = entry.target.getAttribute('id');
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${id}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }, observerOptions);
    
    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(30px)';
        section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(section);
    });
}

// Typing Effect for Hero Section
function initTypingEffect() {
    const roles = [
        'Data Engineer',
        'Software Developer',
        'Cloud Architect',
        'Python Developer',
        'AI Enthusiast'
    ];
    
    const roleElement = document.querySelector('.role');
    if (!roleElement) return;
    
    let currentRoleIndex = 0;
    let currentCharIndex = 0;
    let isDeleting = false;
    
    function typeRole() {
        const currentRole = roles[currentRoleIndex];
        
        if (isDeleting) {
            roleElement.textContent = currentRole.substring(0, currentCharIndex - 1);
            currentCharIndex--;
        } else {
            roleElement.textContent = currentRole.substring(0, currentCharIndex + 1);
            currentCharIndex++;
        }
        
        let typeSpeed = isDeleting ? 50 : 100;
        
        if (!isDeleting && currentCharIndex === currentRole.length) {
            typeSpeed = 2000;
            isDeleting = true;
        } else if (isDeleting && currentCharIndex === 0) {
            isDeleting = false;
            currentRoleIndex = (currentRoleIndex + 1) % roles.length;
            typeSpeed = 500;
        }
        
        setTimeout(typeRole, typeSpeed);
    }
    
    typeRole();
}

// Matrix Rain Effect
function initMatrixEffect() {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    
    // Create matrix background for hero section
    const heroSection = document.querySelector('.hero');
    if (!heroSection) return;
    
    canvas.style.position = 'absolute';
    canvas.style.top = '0';
    canvas.style.left = '0';
    canvas.style.width = '100%';
    canvas.style.height = '100%';
    canvas.style.zIndex = '0';
    canvas.style.opacity = '0.1';
    
    heroSection.appendChild(canvas);
    
    function resizeCanvas() {
        canvas.width = heroSection.offsetWidth;
        canvas.height = heroSection.offsetHeight;
    }
    
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    
    const matrix = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ123456789@#$%^&*()*&^%+-/~{[|`]}'
    const matrixArray = matrix.split('');
    
    const fontSize = 10;
    const columns = canvas.width / fontSize;
    
    const drops = [];
    for (let x = 0; x < columns; x++) {
        drops[x] = 1;
    }
    
    function drawMatrix() {
        ctx.fillStyle = 'rgba(0, 0, 0, 0.04)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        
        ctx.fillStyle = '#00d4ff';
        ctx.font = fontSize + 'px monospace';
        
        for (let i = 0; i < drops.length; i++) {
            const text = matrixArray[Math.floor(Math.random() * matrixArray.length)];
            ctx.fillText(text, i * fontSize, drops[i] * fontSize);
            
            if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
                drops[i] = 0;
            }
            drops[i]++;
        }
    }
    
    setInterval(drawMatrix, 35);
}

// Smooth Scrolling
function initSmoothScrolling() {
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            
            const targetId = link.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 70;
                
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Mobile Menu
function initMobileMenu() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    if (!hamburger || !navMenu) return;
    
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });
    
    // Close menu when clicking on a link
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });
}

// Theme Toggle (for future enhancement)
function initThemeToggle() {
    // Placeholder for theme toggle functionality
    // Can be expanded to include light/dark mode switching
}

// Contact Form Enhancement
function initContactForm() {
    const contactMethods = document.querySelectorAll('.contact-method');
    
    contactMethods.forEach(method => {
        method.addEventListener('mouseenter', () => {
            method.style.transform = 'translateX(10px) scale(1.02)';
        });
        
        method.addEventListener('mouseleave', () => {
            method.style.transform = 'translateX(0) scale(1)';
        });
    });
}

// Skills Animation
function initSkillsAnimation() {
    const skillCategories = document.querySelectorAll('.skill-category');
    
    const skillsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const skills = entry.target.querySelectorAll('.skill');
                skills.forEach((skill, index) => {
                    setTimeout(() => {
                        skill.style.opacity = '1';
                        skill.style.transform = 'translateY(0)';
                    }, index * 100);
                });
            }
        });
    }, { threshold: 0.5 });
    
    skillCategories.forEach(category => {
        const skills = category.querySelectorAll('.skill');
        skills.forEach(skill => {
            skill.style.opacity = '0';
            skill.style.transform = 'translateY(20px)';
            skill.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
        });
        skillsObserver.observe(category);
    });
}

// Projects Animation
function initProjectsAnimation() {
    const projectCards = document.querySelectorAll('.project-card');
    
    const projectsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.2 });
    
    projectCards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`;
        projectsObserver.observe(card);
    });
}

// Terminal Simulation
function initTerminalSimulation() {
    const terminalContent = document.querySelector('.terminal-content');
    if (!terminalContent) return;
    
    const commands = [
        { prompt: 'diego@portfolio:~$', command: 'whoami', output: 'Data Engineer & Software Developer' },
        { prompt: 'diego@portfolio:~$', command: 'ls -la skills/', output: 'Python  PySpark  AWS  Docker  Kubernetes  Django  Flask' },
        { prompt: 'diego@portfolio:~$', command: 'cat experience.txt', output: 'TCS/Itau: Senior Data Engineer (2022-Present)\nNT Consult: Lead Developer (2021-2022)' },
        { prompt: 'diego@portfolio:~$', command: 'echo $PASSION', output: 'Building scalable data solutions & AI systems' }
    ];
    
    let currentCommand = 0;
    
    function typeCommand() {
        if (currentCommand >= commands.length) return;
        
        const cmd = commands[currentCommand];
        const line = document.createElement('div');
        line.className = 'terminal-line';
        
        const prompt = document.createElement('span');
        prompt.className = 'prompt';
        prompt.textContent = cmd.prompt;
        
        const command = document.createElement('span');
        command.className = 'command';
        
        line.appendChild(prompt);
        line.appendChild(command);
        terminalContent.appendChild(line);
        
        // Type command
        let i = 0;
        const typeInterval = setInterval(() => {
            command.textContent = cmd.command.substring(0, i + 1);
            i++;
            
            if (i >= cmd.command.length) {
                clearInterval(typeInterval);
                
                // Add output
                setTimeout(() => {
                    const output = document.createElement('div');
                    output.className = 'terminal-output';
                    output.textContent = cmd.output;
                    terminalContent.appendChild(output);
                    
                    currentCommand++;
                    setTimeout(typeCommand, 1000);
                }, 500);
            }
        }, 50);
    }
    
    // Start terminal simulation when in view
    const terminalObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                setTimeout(typeCommand, 1000);
                terminalObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });
    
    terminalObserver.observe(terminalContent);
}

// Code Window Animation
function initCodeWindowAnimation() {
    const codeContent = document.querySelector('.code-content');
    if (!codeContent) return;
    
    const codeLines = [
        '# Data Engineering Pipeline',
        'import pyspark',
        'from pyspark.sql import SparkSession',
        '',
        'def process_data():',
        '    spark = SparkSession.builder \\',
        '        .appName("DataPipeline") \\',
        '        .getOrCreate()',
        '    ',
        '    # Transform and analyze data',
        '    df = spark.read.parquet("data/")',
        '    result = df.groupBy("category") \\',
        '              .agg(sum("amount"))',
        '    ',
        '    return result'
    ];
    
    codeContent.innerHTML = '';
    
    const codeObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                let lineIndex = 0;
                
                const typeCode = () => {
                    if (lineIndex >= codeLines.length) return;
                    
                    const line = document.createElement('div');
                    const lineContent = codeLines[lineIndex];
                    
                    // Apply syntax highlighting
                    if (lineContent.includes('import') || lineContent.includes('from')) {
                        line.innerHTML = `<span class="keyword">${lineContent}</span>`;
                    } else if (lineContent.includes('def ') || lineContent.includes('class ')) {
                        line.innerHTML = lineContent.replace(/(def|class)/, '<span class="keyword">$1</span>');
                    } else if (lineContent.includes('#')) {
                        line.innerHTML = `<span class="comment">${lineContent}</span>`;
                    } else if (lineContent.includes('"')) {
                        line.innerHTML = lineContent.replace(/"([^"]*)"/g, '<span class="string">"$1"</span>');
                    } else {
                        line.textContent = lineContent;
                    }
                    
                    codeContent.appendChild(line);
                    lineIndex++;
                    
                    setTimeout(typeCode, 200);
                };
                
                setTimeout(typeCode, 500);
                codeObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });
    
    codeObserver.observe(codeContent);
}

// Initialize additional effects
document.addEventListener('DOMContentLoaded', function() {
    initTerminalSimulation();
    initCodeWindowAnimation();
});

// Performance optimization
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

// Optimized scroll handler
const optimizedScrollHandler = debounce(() => {
    // Handle scroll-based animations here
}, 16); // ~60fps

window.addEventListener('scroll', optimizedScrollHandler);

// Preload critical resources
function preloadResources() {
    const criticalImages = [
        'assets/images/profile.jpg',
        'assets/images/hero-bg.jpg'
    ];
    
    criticalImages.forEach(src => {
        const img = new Image();
        img.src = src;
    });
}

preloadResources();