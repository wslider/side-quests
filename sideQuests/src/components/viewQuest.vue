<template> 
<label>
          Distance from your location:
          <input
            v-model.number="distance"
            type="number"
            min="1"
            max="100"
            placeholder="10"
          >
          miles
        </label>

        <button @click="generateQuest">Find Quest!</button>
</template>
<script setup>
</script>
<style scoped>
</style>