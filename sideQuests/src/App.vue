<script setup>
import { RouterLink, RouterView } from 'vue-router';
import AppNavbar from './components/AppNavbar.vue';
import AppHeader from './components/AppHeader.vue';
import AppFooter from './components/AppFooter.vue';

</script>

<template>

<div class="app-root" id="app-root">

  <AppNavbar />

  <AppHeader />

   <main class="app-main">

      <RouterView />

      <div class ="routerQuestButtons">
        <button class="button" id="viewQuest"></button>
        <button class="button" id="submitQuest"></button>
        <button class="button" id="locationQuest"></button>
      </div>


    </main>

  <AppFooter />

</div>

</template>

<style>

/* Reset default margin/padding */
  html, body {
  margin: 0;
  padding: 0;
  min-height: 100%;
  width: 100vw; 
  max-width: 100vw;
  font-family: system-ui, Verdana, Geneva, Tahoma, sans-serif;
  }

/* Root Variables */
  :root { 
    --background-dark-midnightBlue: #121b2b;
    --background-dark-trasparentGalaxyBlack: #0d111780;
    --background-dark-galaxyBlack: #0d1117;
    --textColor-light-moonlitSnow: #e1e6f0;
    --textColor-light-siriusStarBlue: #c3d1e5;
    --textColor-light-oldComputerGreen: #8bff8b;
  }

/* Root wrapper */
  .app-root {
    background-color: var(--background-dark-midnightBlue);
    color: var(--textColor-light-moonlitSnow);
    min-height: 100vh;
    width: 100vw; 
    max-width: 100vw;
    margin: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .app-main {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 2rem 0;
  box-sizing: border-box;
}
  
</style>
