<script setup>
import { computed } from 'vue'

const props = defineProps({
  date: {
    type: [String, Date, Number],
    default: () => new Date()
  }
})

const titleDate = computed(() => {
  return new Date(props.date).toLocaleString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric'
  })
})


</script>

<template>
  <footer class="app-footer">
    <time :title="titleDate" :datetime="new Date(date).toISOString()">
      {{ titleDate }}
    </time>
    <p>© 2026 Side Quests. All rights reserved (at least for now).</p>
    <p>Developed by William Slider.</p>
  </footer>
</template>

<style scoped>
.app-footer {
    text-align: center;
    padding: 1rem 0;
    font-size: 0.9rem;
    border-top: 1px solid var(--textColor-light-moonlitSnow);
    margin-top: 1rem;
    font-size: 1rem;
}
</style>