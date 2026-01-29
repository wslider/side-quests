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
    <!-- Small logo left -->
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
  max-width: 100vw;
  min-height: fit-content; 
  box-sizing: border-box;
  margin: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: var(--background-dark-galaxyBlack);
  backdrop-filter: blur(8px);
  transition: padding 0.3s ease;
}

.nav-logo img {
  border-radius: 50%;
  object-fit: cover;
}

.nav-links {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  gap: 2rem;
}

.nav-links a {
  text-decoration: none;
  color: var(--textColor-light-moonlitSnow);
  font-weight: 500;
  transition: color 0.3s;
}

.nav-links a:hover {
  color: var(--textColor-light-oldComputerGreen);
}

/* Hamburger styles (copy from your previous) */
.hamburger {
  display: none;
  flex-direction: column;
  justify-content: space-around;
  width: 36px;
  height: 36px;
  background: transparent;
  border: none;
  cursor: pointer;
  gap: 7px;
}

.hamburger span {
  width: 100%;
  height: 4px;
  background: var(--textColor-light-moonlitSnow);
  transition: all 0.3s ease;
}

.hamburger span.open:nth-child(1) { transform: rotate(45deg) translate(6px, 6px); }
.hamburger span.open:nth-child(2) { opacity: 0; }
.hamburger span.open:nth-child(3) { transform: rotate(-45deg) translate(6px, -6px); }

/* Mobile menu */
.mobile {
  display: none;
  flex-direction: column;
  position: absolute;
  top: 100%;
  right: 1rem;
  background-color: var(--background-dark-galaxyBlack);
  padding: 1.5rem;
  border-radius: 8px;
  gap: 1.2rem;
  min-width: 180px;
}

/* Responsive */
@media only screen and (max-width: 768px) {
  .desktop { display: none; }
  .hamburger { display: flex; }
}
</style>