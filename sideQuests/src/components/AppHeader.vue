<template>
  <div class="hero">
    <h1>Side Quests</h1>

    <div class="logo-container">
      <img
        src="@/assets/side-quests-logo.png"
        alt="Side Quests Portal Logo"
        class="logo"
      />
    </div>

    <blockquote class="blockquote">
      Your portal to micro-adventures, undiscovered gems and the road less traveled ... while living life.
    </blockquote>
  </div>
</template>

<style scoped>
.hero {
  width: clamp(300px, 80%, 800px);
  padding: 8rem 2rem 4rem 2rem;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: linear-gradient(to bottom, var(--background-dark-trasparentGalaxyBlack), transparent);
}

.hero h1 {
  font-size: 4rem;
  margin-bottom: 2rem;
  text-align: center;
}

.logo-container {
  margin: 2rem 0;
}

.logo {
  border-radius: 50%;
  width: clamp(150px, 50vw, 500px);
  height: auto;
}

.blockquote {
  font-style: italic;
  color: var(--textColor-light-moonlitSnow);
  opacity: 0.9;
  width: 80vw; 
  max-width: 800px;
  height: auto;
  text-align: center;
  box-sizing: border-box;
  margin: 0;
  font-size: 1rem;
}
</style>