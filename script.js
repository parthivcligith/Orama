// Custom Cursor
const cursor = document.querySelector(".cursor")
const cursorBall = document.querySelector(".cursor-ball")

let mouseX = 0
let mouseY = 0
let ballX = 0
let ballY = 0
const speed = 0.2

function animate() {
  const distX = mouseX - ballX
  const distY = mouseY - ballY

  ballX += distX * speed
  ballY += distY * speed

  cursor.style.left = ballX + "px"
  cursor.style.top = ballY + "px"

  requestAnimationFrame(animate)
}

animate()

document.addEventListener("mousemove", (e) => {
  mouseX = e.clientX
  mouseY = e.clientY
})

// Cursor interactions
document.addEventListener("mousedown", () => {
  cursor.classList.add("click")
})

document.addEventListener("mouseup", () => {
  cursor.classList.remove("click")
})

// Hover effects for cursor
const hoverElements = document.querySelectorAll(
  "a, button, .service-card, .portfolio-item, .magnetic-btn, .magnetic-card",
)
hoverElements.forEach((el) => {
  el.addEventListener("mouseenter", () => {
    cursor.classList.add("hover")
  })

  el.addEventListener("mouseleave", () => {
    cursor.classList.remove("hover")
  })
})

// Text hover effect
const textElements = document.querySelectorAll("h1, h2, h3, p, span")
textElements.forEach((el) => {
  el.addEventListener("mouseenter", () => {
    cursor.classList.add("text")
  })

  el.addEventListener("mouseleave", () => {
    cursor.classList.remove("text")
  })
})

// Magnetic effect
const magneticElements = document.querySelectorAll(".magnetic-btn, .magnetic-card")
magneticElements.forEach((el) => {
  el.addEventListener("mousemove", (e) => {
    const rect = el.getBoundingClientRect()
    const x = e.clientX - rect.left - rect.width / 2
    const y = e.clientY - rect.top - rect.height / 2

    el.style.transform = `translate(${x * 0.1}px, ${y * 0.1}px)`
  })

  el.addEventListener("mouseleave", () => {
    el.style.transform = "translate(0, 0)"
  })
})

// Tilt effect for portfolio cards
const tiltCards = document.querySelectorAll(".tilt-card")
tiltCards.forEach((card) => {
  card.addEventListener("mousemove", (e) => {
    const rect = card.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top

    const centerX = rect.width / 2
    const centerY = rect.height / 2

    const rotateX = (y - centerY) / 10
    const rotateY = (centerX - x) / 10

    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.05, 1.05, 1.05)`
  })

  card.addEventListener("mouseleave", () => {
    card.style.transform = "perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)"
  })
})

// Preloader Enhanced
window.addEventListener("load", () => {
  const preloader = document.getElementById("preloader")
  setTimeout(() => {
    preloader.classList.add("hidden")
    setTimeout(() => {
      preloader.style.display = "none"
      // Start other animations after preloader
      initializeAnimations()
    }, 500)
  }, 3500)
})

function initializeAnimations() {
  // Animate hero stats bars
  setTimeout(() => {
    document.querySelectorAll(".stat-progress").forEach((bar, index) => {
      setTimeout(() => {
        bar.classList.add("active")
      }, index * 200)
    })
  }, 1000)

  // Start typing effect
  const heroSubtitle = document.querySelector(".hero-subtitle")
  if (heroSubtitle) {
    const originalText = heroSubtitle.textContent
    setTimeout(() => {
      typeWriter(heroSubtitle, originalText, 30)
    }, 2000)
  }
}

// Mobile Navigation Toggle
const hamburger = document.querySelector(".hamburger")
const navMenu = document.querySelector(".nav-menu")

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active")
  navMenu.classList.toggle("active")
})

// Close mobile menu when clicking on a link
document.querySelectorAll(".nav-link").forEach((n) =>
  n.addEventListener("click", () => {
    hamburger.classList.remove("active")
    navMenu.classList.remove("active")
  }),
)

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault()
    const target = document.querySelector(this.getAttribute("href"))
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
    }
  })
})

// Enhanced navbar on scroll
window.addEventListener("scroll", () => {
  const navbar = document.querySelector(".navbar")
  if (window.scrollY > 100) {
    navbar.style.background = "rgba(17, 17, 17, 0.98)"
    navbar.style.borderBottom = "1px solid rgba(255, 255, 255, 0.2)"
    navbar.style.transform = "translateY(0)"
  } else {
    navbar.style.background = "rgba(17, 17, 17, 0.95)"
    navbar.style.borderBottom = "1px solid rgba(255, 255, 255, 0.1)"
  }
})

// Advanced Intersection Observer for animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      // Reveal text animation
      if (entry.target.classList.contains("reveal-text")) {
        entry.target.classList.add("revealed")
      }

      // Slide animations
      if (entry.target.classList.contains("slide-in-left") || entry.target.classList.contains("slide-in-right")) {
        entry.target.classList.add("animated")
      }

      // Service card animations
      if (entry.target.classList.contains("service-card")) {
        const listItems = entry.target.querySelectorAll(".list-item")
        listItems.forEach((item, index) => {
          setTimeout(() => {
            item.style.transform = "translateX(0)"
            item.style.opacity = "1"
          }, index * 100)
        })
      }

      // Counter animations
      if (entry.target.classList.contains("counter")) {
        animateCounter(entry.target)
      }

      // General fade in
      entry.target.style.opacity = "1"
      entry.target.style.transform = "translateY(0)"
    }
  })
}, observerOptions)

// Observe elements for animation
document
  .querySelectorAll(
    ".reveal-text, .slide-in-left, .slide-in-right, .service-card, .portfolio-item, .timeline-item, .feature-item, .value-item, .team-stat, .contact-item, .counter",
  )
  .forEach((el) => {
    if (!el.classList.contains("counter")) {
      el.style.opacity = "0"
      el.style.transform = "translateY(30px)"
      el.style.transition = "all 0.8s ease"
    }
    observer.observe(el)
  })

// Enhanced parallax effect
window.addEventListener(
  "scroll",
  throttle(() => {
    const scrolled = window.pageYOffset
    const shapes = document.querySelectorAll(".floating-shape")

    shapes.forEach((shape, index) => {
      const speed = 0.2 + index * 0.05
      const rotation = scrolled * 0.02
      const scale = 1 + Math.sin(scrolled * 0.001 + index) * 0.1
      shape.style.transform = `translateY(${scrolled * speed}px) rotate(${rotation}deg) scale(${scale})`
    })

    // Parallax for animated lines
    const lines = document.querySelectorAll(".line")
    lines.forEach((line, index) => {
      const speed = 0.1 + index * 0.02
      line.style.transform = `translateY(${scrolled * speed}px)`
    })
  }, 16),
)

// Enhanced form submission
document.querySelector(".contact-form form").addEventListener("submit", function (e) {
  e.preventDefault()

  const submitBtn = this.querySelector(".submit-btn")
  const btnText = submitBtn.querySelector(".btn-text")
  const btnLoader = submitBtn.querySelector(".btn-loader")

  // Form validation
  const name = this.querySelector('input[type="text"]').value
  const email = this.querySelector('input[type="email"]').value
  const service = this.querySelector("select").value
  const message = this.querySelector("textarea").value

  if (!name || !email || !service || !message) {
    showNotification("Please fill in all required fields", "error")
    return
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(email)) {
    showNotification("Please enter a valid email address", "error")
    return
  }

  // Show loading state
  submitBtn.classList.add("loading")
  submitBtn.disabled = true

  // Simulate form submission
  setTimeout(() => {
    showNotification("Thank you for your message! We'll get back to you within 24 hours.", "success")
    this.reset()
    submitBtn.classList.remove("loading")
    submitBtn.disabled = false

    // Reset input lines
    this.querySelectorAll(".input-line").forEach((line) => {
      line.style.width = "0"
    })
  }, 2500)
})

// Enhanced notification system
function showNotification(message, type) {
  const notification = document.createElement("div")
  notification.className = `notification ${type}`
  notification.innerHTML = `
        <div class="notification-content">
            <span class="notification-icon">${type === "success" ? "✓" : "⚠"}</span>
            <span class="notification-text">${message}</span>
        </div>
    `

  notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 15px 20px;
        border-radius: 10px;
        color: white;
        font-weight: 500;
        z-index: 10001;
        transform: translateX(100%);
        transition: transform 0.3s ease;
        max-width: 350px;
        backdrop-filter: blur(10px);
        ${type === "success" ? "background: rgba(34, 197, 94, 0.9);" : "background: rgba(239, 68, 68, 0.9);"}
        border: 1px solid ${type === "success" ? "rgba(34, 197, 94, 0.3)" : "rgba(239, 68, 68, 0.3)"};
    `

  document.body.appendChild(notification)

  setTimeout(() => {
    notification.style.transform = "translateX(0)"
  }, 100)

  setTimeout(() => {
    notification.style.transform = "translateX(100%)"
    setTimeout(() => {
      document.body.removeChild(notification)
    }, 300)
  }, 4500)
}

// Enhanced counter animation
function animateCounter(element) {
  const target = Number.parseInt(element.getAttribute("data-target"))
  const duration = 2000
  const increment = target / (duration / 16)
  let current = 0

  const timer = setInterval(() => {
    current += increment
    if (current >= target) {
      element.textContent = target + (target === 100 ? "%" : target === 50 ? "+" : "+")
      clearInterval(timer)
    } else {
      element.textContent = Math.floor(current) + (target === 100 ? "%" : "+")
    }
  }, 16)
}

// Enhanced typing effect
function typeWriter(element, text, speed = 50) {
  let i = 0
  element.textContent = ""
  element.style.borderRight = "2px solid white"
  element.style.animation = "blink 1s infinite"

  function type() {
    if (i < text.length) {
      element.textContent += text.charAt(i)
      i++
      setTimeout(type, speed)
    } else {
      setTimeout(() => {
        element.style.borderRight = "none"
        element.style.animation = "none"
      }, 1000)
    }
  }

  type()
}

// Add blink animation for cursor
const blinkStyle = document.createElement("style")
blinkStyle.textContent = `
    @keyframes blink {
        0%, 50% { border-color: white; }
        51%, 100% { border-color: transparent; }
    }
`
document.head.appendChild(blinkStyle)

// Enhanced button interactions
document.querySelectorAll(".cta-button, .portfolio-link, .submit-btn").forEach((button) => {
  button.addEventListener("click", function (e) {
    // Create enhanced ripple effect
    const ripple = document.createElement("span")
    const rect = this.getBoundingClientRect()
    const size = Math.max(rect.width, rect.height) * 2
    const x = e.clientX - rect.left - size / 2
    const y = e.clientY - rect.top - size / 2

    ripple.style.cssText = `
            position: absolute;
            width: ${size}px;
            height: ${size}px;
            left: ${x}px;
            top: ${y}px;
            background: radial-gradient(circle, rgba(255, 255, 255, 0.3) 0%, transparent 70%);
            border-radius: 50%;
            transform: scale(0);
            animation: enhancedRipple 0.8s ease-out;
            pointer-events: none;
        `

    this.style.position = "relative"
    this.style.overflow = "hidden"
    this.appendChild(ripple)

    setTimeout(() => {
      ripple.remove()
    }, 800)
  })
})

// Add enhanced ripple animation
const enhancedRippleStyle = document.createElement("style")
enhancedRippleStyle.textContent = `
    @keyframes enhancedRipple {
        0% {
            transform: scale(0);
            opacity: 1;
        }
        50% {
            transform: scale(0.5);
            opacity: 0.8;
        }
        100% {
            transform: scale(1);
            opacity: 0;
        }
    }
`
document.head.appendChild(enhancedRippleStyle)

// Floating buttons enhanced interactions
document.querySelectorAll(".float-btn").forEach((btn) => {
  btn.addEventListener("mouseenter", function () {
    this.style.transform = "scale(1.2) rotate(10deg)"
    this.style.boxShadow = "0 10px 25px rgba(255, 255, 255, 0.2)"
  })

  btn.addEventListener("mouseleave", function () {
    this.style.transform = "scale(1) rotate(0deg)"
    this.style.boxShadow = "none"
  })
})

// Scroll progress indicator
const scrollProgress = document.createElement("div")
scrollProgress.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    width: 0%;
    height: 3px;
    background: linear-gradient(90deg, #ffffff, #cccccc);
    z-index: 10000;
    transition: width 0.1s ease;
`
document.body.appendChild(scrollProgress)

window.addEventListener(
  "scroll",
  throttle(() => {
    const scrollTop = window.pageYOffset
    const docHeight = document.body.offsetHeight - window.innerHeight
    const scrollPercent = (scrollTop / docHeight) * 100
    scrollProgress.style.width = scrollPercent + "%"
  }, 16),
)

// Performance optimization: Throttle function
function throttle(func, limit) {
  let inThrottle
  return function () {
    const args = arguments
    
    if (!inThrottle) {
      func.apply(this, args)
      inThrottle = true
      setTimeout(() => (inThrottle = false), limit)
    }
  }
}

// Enhanced service card interactions
document.querySelectorAll(".service-card").forEach((card) => {
  card.addEventListener("mouseenter", function () {
    this.style.transform = "translateY(-15px) scale(1.02)"
    this.style.boxShadow = "0 25px 50px rgba(255, 255, 255, 0.1)"

    // Animate service icon
    const icon = this.querySelector(".service-icon")
    icon.style.transform = "scale(1.2) rotate(5deg)"
    icon.style.transition = "transform 0.3s ease"
  })

  card.addEventListener("mouseleave", function () {
    this.style.transform = "translateY(0) scale(1)"
    this.style.boxShadow = "none"

    const icon = this.querySelector(".service-icon")
    icon.style.transform = "scale(1) rotate(0deg)"
  })
})

// Timeline animations
document.querySelectorAll(".timeline-item").forEach((item, index) => {
  item.addEventListener("mouseenter", function () {
    this.style.transform = "translateX(10px) scale(1.02)"
    this.style.borderColor = "rgba(255, 255, 255, 0.3)"

    const number = this.querySelector(".timeline-number")
    number.style.transform = "scale(1.1)"
    number.style.boxShadow = "0 0 20px rgba(255, 255, 255, 0.3)"
  })

  item.addEventListener("mouseleave", function () {
    this.style.transform = "translateX(0) scale(1)"
    this.style.borderColor = "rgba(255, 255, 255, 0.1)"

    const number = this.querySelector(".timeline-number")
    number.style.transform = "scale(1)"
    number.style.boxShadow = "none"
  })
})

// Add keyboard navigation support
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    hamburger.classList.remove("active")
    navMenu.classList.remove("active")
  }
})

// Initialize all animations and interactions
document.addEventListener("DOMContentLoaded", () => {
  document.body.classList.add("loaded")

  // Add stagger animation to grid items
  const gridItems = document.querySelectorAll(".services-grid .service-card, .portfolio-grid .portfolio-item")
  gridItems.forEach((item, index) => {
    item.style.animationDelay = `${index * 0.1}s`
  })
})

// Add final CSS for loaded state and additional animations
const additionalStyles = document.createElement("style")
additionalStyles.textContent = `
    body.loaded {
        animation: bodyFadeIn 0.5s ease forwards;
    }
    
    @keyframes bodyFadeIn {
        from { opacity: 0.9; }
        to { opacity: 1; }
    }
    
    .notification-content {
        display: flex;
        align-items: center;
        gap: 10px;
    }
    
    .notification-icon {
        font-size: 1.2rem;
        font-weight: bold;
    }
    
    .service-card, .portfolio-item {
        animation: itemFadeIn 0.8s ease forwards;
        opacity: 0;
        transform: translateY(30px);
    }
    
    @keyframes itemFadeIn {
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`
document.head.appendChild(additionalStyles)

console.log("🎬 ÒRAMA - Enhanced animations and custom cursor loaded successfully!")
