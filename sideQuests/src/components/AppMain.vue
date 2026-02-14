<script setup>
import { onMounted, ref } from 'vue'

const status = ref('Click to begin')
const showForm = ref(false)
const distance = ref(10)

let userLat = null
let userLon = null

onMounted(() => {
  const btn = document.getElementById('get-started-button')
  if (!btn) return

  btn.addEventListener('click', () => {
    if (!navigator.geolocation) {
      status.value = "Geolocation not supported by this browser."
      return
    }

    status.value = "Getting your location…"

    navigator.geolocation.getCurrentPosition(
      (position) => {
        userLat = position.coords.latitude
        userLon = position.coords.longitude
        console.log(`User: ${userLat}, ${userLon}`)
        showForm.value = true
        status.value = "How far would you like to travel?"
      },
      (err) => {
        console.error(err)
        status.value = "Could not get location. Please allow location access or enter manually."
      }
    )
  })
})

function generateQuest() {
  if (!userLat || !userLon) return

  const miles = Number(distance.value)
  if (!miles || miles < 1) {
    alert("Please enter a valid distance (1–100 miles)")
    return
  }

  // Much better approximation for random point in circle
  const radiusDegrees = miles / 69           // rough lat scale
  const randomAngle = Math.random() * 2 * Math.PI
  const randomRadius = Math.random() * radiusDegrees   // uniform in disk

  const questLat = userLat + randomRadius * Math.cos(randomAngle)
  const questLon = userLon + randomRadius * Math.sin(randomAngle) * Math.cos(userLat * Math.PI / 180) // crude longitude correction

  console.log(`Quest @ ${questLat.toFixed(5)}, ${questLon.toFixed(5)}`)

  const msg = `Opening map to a random quest ~${miles} miles away!\n\n` +
              `Remember: only explore safe/public areas, respect private property & laws.`
              `Difficulty Level: {miles <= 5 ? 'EASY' : miles <= 20 ? 'MEDIUM' : 'HARD'}`

  alert(msg)

  const url = `https://www.openstreetmap.org/#map=19/${questLat}/${questLon}`
  window.open(url, '_blank')
}
</script>

<template>
  <div class="app-main">

        <section id="home" class="section container">
         
      </section>

      <section id="about" class="section container">
       
      </section>

    <section id="get-started" class="section container questSection">
      <h2>Find a random side quest near you</h2>

      <p>{{ status }}</p>

      <button v-if="!showForm" id="get-started-button">
        Get Started 
      </button>

      <div v-if="showForm" class="quest-form">

        <label>
          Get A Side Quest:
          <div class="questCard" id="questCard">
            <h3 id="questTitle"></h3>
            <p id="questDescription"></p>
          </div>
          <button @click="generateQuest" class="button" id="generateQuestButton">
            Generate Quest
          </button>
        </label>

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
      </div>
    </section>

    <section id="uploadSideQuests" class="section container">
        <form class="quest-form" :quest-form="true" > 
            <h2>Upload Your Own Side Quest</h2>
            <p>Share your favorite hidden gems and micro-adventures with the community! Submit your own side quests by filling out the form below. Please include a title, description, location (address or coordinates), and any tips or photos you'd like to share.</p>
    
            <label class="formItem">
                Title:
                <input type="text" name="title" required>
            </label>
    
            <label class="formItem">
                Description:
                <textarea name="description" rows="4" required></textarea>
            </label>
    
            <label class="formItem">
                Location (address or coordinates):
                <input type="text" name="location" required>
            </label>
    
            <label class="formItem">
                Tips/Photos (optional):
                <textarea name="tips" rows="3"></textarea>
            </label>
    
            <button type="submit" class="button" id="submitQuestButton">Submit Quest</button>
        </form>
    
    </section>
  </div>
</template>

<style scoped>
/* your existing styles */
.app-main {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 2rem 0;
  box-sizing: border-box;
}

.questSection {
  background-color: var(--background-dark-trasparentGalaxyBlack);
  align-self: center;
  text-align: center;
  padding: 2rem;
  border-radius: 8px;
  width: clamp(200px, 70%, 500px);
  margin-top: 2rem;
}

.quest-form {
  margin-top: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
  justify-content: center;
  width: clamp(300px, 80%, 500px);
  background-color: #0d111780;
  padding: 1rem;
  border-radius: 8px;
  box-sizing: border-box;
}

.formItem {
  display: flex;
  flex-direction: column;
  text-align: left;
  align-items: flex-start;
  justify-content: center;
  gap: 0.5rem;
  padding: 10px; 
  width: clamp(250px, 80%, 450px);
  box-sizing: border-box;
  font-weight: 600; 
  font-size: 1.1rem;
}

.formItem input, .formItem textarea {
  width: 100%;
  padding: 0.5rem;
  border: 2px solid var(--textColor-light-siriusStarBlue);
  border-radius: 4px;
  background-color: transparent;
  color: var(--textColor-light-moonlitSnow);
}

.button {
  font-size: 1.2rem;
  padding: 0.75rem 1.5rem;
  border-radius: 4px;
  border: none;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  cursor: pointer; 
}

.section {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    margin-top: 2rem;
    margin-bottom: 2rem; 
}

input {
  width: 80px;
  text-align: center;
}
</style>
