<script setup>

import AppNav from './components/AppNav.vue';
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';
import AppFooter from './components/AppFooter.vue';

</script>

<template>

<div class="app-root" id="app-root">

  <AppNav />
  
  <AppHeader />

  <main>
    <AppMain />
  </main>
  

  <AppFooter />

</div>

</template>

<style>

/* Reset default margin/padding */
  html, body {
  margin: 0;
  padding: 0;
  height: 100%;
  font-family: system-ui, Verdana, Geneva, Tahoma, sans-serif;
  }

/* Root Variables */
  :root { 
    --background-dark-midnightBlue: #121b2b;
    --textColor-light-moonlitSnow: #e1e6f0;
  }

/* Root wrapper */
  .app-root {
    background-color: var(--background-dark-midnightBlue);
    color: var(--textColor-light-moonlitSnow);
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  main {  
    flex: 1;
    width: 100%;
    max-width: 1000px;
    padding: 1rem; 
  }
  
</style>
