<!-- quest card using data from quests.json database -->
<!-- seperate form later to create your own quest card -->


<template>
  <div class="quest-card" :class="{ 'completed': quest.completed }">
    <div class="quest-header">
      <h3>{{ quest.title }}</h3>
      <span class="quest-difficulty" :class="difficulty">
        {{ quest.difficulty || 'Medium' }}
      </span>
      <span class="quest-location">{{ quest.location }}</span> <!-- if value is " " in json pre-filled with curent location or fill in after completed-->
    </div>
    <!-- Main content -->
    <p class="quest-description">{{ quest.description }}</p>

    <textarea v-if="quest.notes" v-model="quest.notes" placeholder="Add your notes here..."></textarea>

    <!-- XP reward line -->
    <div v-if="quest.xp" class="quest-xp">
      XP: <strong>{{ quest.xp }}</strong>
    </div>

     <!-- Footer / actions -->
    <div class="quest-actions">
      <button 
        v-if="!quest.completed"
        @click="completeQuest"
        class="btn-complete"
      >
        Mark Complete 🎉
      </button>
      <span v-else class="completed-badge">✓ Done!</span>
      <!-- Add edit button later -->
    </div>
     

  </div>
</template>

<script setup></script>

<style scoped>
.quest-card {
  background-color: var(--background-dark-trasparentGalaxyBlack);
  border: 1px solid var(--textColor-light-moonlitSnow);
  border-radius: 8px;
  padding: 1rem;
  margin-bottom: 1rem;
}
</style>