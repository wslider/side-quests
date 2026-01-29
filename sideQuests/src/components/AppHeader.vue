<template>
  <div class="hero">
    <h1>Side Quests</h1>

    <div class="logo-container">
      <img
        src="@/assets/side-quests-logo.png"
        alt="Side Quests Portal Logo"
        class="logo"
        width="160"
        height="160"
      />
    </div>

    <blockquote class="blockquote">
      Your portal to micro-adventures, undiscovered gems and the road less traveled ... while living life.
    </blockquote>
  </div>
</template>

<style scoped>
.hero {
  text-align: center;
  padding: 8rem 2rem 6rem;
  background: linear-gradient(to bottom, var(--background-dark-trasparentGalaxyBlack), transparent);
}

.hero h1 {
  font-size: 4rem;
  margin-bottom: 2rem;
}

.logo-container {
  margin: 2rem 0;
}

.logo {
  border-radius: 50%;
  box-shadow: 0 0 40px rgba(102, 255, 153, 0.5);
}

.blockquote {
  font-style: italic;
  color: var(--textColor-light-moonlitSnow);
  opacity: 0.9;
  max-width: 800px;
  margin: 0 auto;
  font-size: 1.3rem;
}
</style>