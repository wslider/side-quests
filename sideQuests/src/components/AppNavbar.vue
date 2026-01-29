<script setup>
import { ref } from 'vue'

const isMenuOpen = ref(false)

function scrollTo(id) {
  const element = document.getElementById(id)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
}

function closeAndScroll(id) {
  isMenuOpen.value = false
  scrollTo(id)
}
</script>

<template>
  <nav class="app-navbar">
    <div class="nav-logo">
      <img
        src="@/assets/side-quests-logo.png"
        alt="Side Quests Nav Logo"
        width="48"
        height="48"
      />
    </div>

    <!-- Desktop links -->
    <ul class="nav-links desktop">
      <li><a href="#home" @click.prevent="scrollTo('home')">Home</a></li>
      <li><a href="#about" @click.prevent="scrollTo('about')">About</a></li>
      <li><a href="#get-started" @click.prevent="scrollTo('get-started')">Get Started</a></li>
    </ul>

    <!-- Hamburger -->
    <button class="hamburger" @click="isMenuOpen = !isMenuOpen" aria-label="Toggle menu">
      <span :class="{ open: isMenuOpen }"></span>
      <span :class="{ open: isMenuOpen }"></span>
      <span :class="{ open: isMenuOpen }"></span>
    </button>

    <!-- Mobile dropdown -->
    <ul v-if="isMenuOpen" class="nav-links mobile">
      <li><a href="#home" @click="closeAndScroll('home')">Home</a></li>
      <li><a href="#about" @click="closeAndScroll('about')">About</a></li>
      <li><a href="#get-started" @click="closeAndScroll('get-started')">Get Started</a></li>
    </ul>
  </nav>
</template>

<style scoped>
.app-navbar {
  position: sticky;
  top: 0;
  z-index: 1000;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.8rem 1rem;             /* tighter padding to avoid clipping */
  background-color: var(--background-dark-galaxyBlack);
  backdrop-filter: blur(8px);
  box-sizing: border-box;
  overflow: visible;                 /* allow dropdown to extend outside */
}

/* Prevent any clipping from parent elements */
.app-navbar * {
  box-sizing: border-box;
}

/* Logo */
.nav-logo img {
  border-radius: 50%;
  object-fit: cover;
  flex-shrink: 0;                    /* prevent logo from shrinking too much */
}

/* Links */
.nav-links {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  gap: 1.2rem;                       /* smaller gap on desktop/mobile */
}

.nav-links a {
  text-decoration: none;
  color: var(--textColor-light-moonlitSnow);
  font-weight: 500;
  font-size: 1.5rem;
  transition: color 0.3s;
  white-space: nowrap;
}

.nav-links a:hover {
  color: var(--textColor-light-oldComputerGreen);
}

/* Hamburger – make sure it's fully visible */
.hamburger {
  display: none;
  flex-direction: column;
  justify-content: space-around;
  width: 40px;                       /* slightly larger for touch */
  height: 40px;
  background: transparent;
  border: none;
  cursor: pointer;
  gap: 8px;
  padding: 8px;
  margin-left: auto;                 /* push to right edge */
  flex-shrink: 0;
}

.hamburger span {
  width: 100%;
  height: 4px;
  background: var(--textColor-light-moonlitSnow);
  transition: all 0.3s ease;
  border-radius: 2px;                /* optional: softer edges */
}

.hamburger span.open:nth-child(1) { transform: rotate(45deg) translate(7px, 7px); }
.hamburger span.open:nth-child(2) { opacity: 0; }
.hamburger span.open:nth-child(3) { transform: rotate(-45deg) translate(7px, -7px); }

/* Mobile menu – ensure it's visible when rendered */
.mobile {
  display: none !important;          /* strong hide by default */
  flex-direction: column;
  position: absolute;
  top: calc(100% + 4px);             /* small gap below navbar */
  right: 1rem;
  background-color: var(--background-dark-galaxyBlack);
  padding: 1rem;
  border-radius: 8px;
  gap: 1rem;
  width: clamp(70vw, 80vw, 270px);
  box-shadow: 0 8px 16px rgba(0,0,0,0.5);
  z-index: 999;
  overflow: visible;
}

/* On mobile: show hamburger, hide desktop, FORCE mobile menu visible when open */
@media only screen and (max-width: 768px) {
  .desktop {
    display: none !important;
  }
  .hamburger {
    display: flex !important;
  }
  
  .mobile {
    display: flex !important;
  }
  .app-navbar {
    padding: 0.6rem 0.8rem;         
  }
}

/* Extra safety for tiny screens */
@media only screen and (max-width: 480px) {
  .hamburger {
    width: 36px;
    height: 36px;
    gap: 6px;
  }
  .mobile {
    right: 0.5rem;
    min-width: 140px;
    padding: 0.8rem;
  }
}
</style>