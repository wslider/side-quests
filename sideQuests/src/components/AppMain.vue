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

  alert(msg)

  const url = `https://www.openstreetmap.org/#map=14/${questLat}/${questLon}`
  window.open(url, '_blank')
}
</script>

<template>
  <div class="app-main">

        <section id="home" class="section container">
         
      </section>

      <section id="about" class="section container">
       
      </section>

    <section id="get-started" class="section container">
      <h2>Find a random side quest near you</h2>

      <p>{{ status }}</p>

      <button v-if="!showForm" id="get-started-button">
        Get Started
      </button>

      <div v-if="showForm" class="quest-form">
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
  </div>
</template>

<style scoped>
/* your existing styles */
.quest-form {
  margin-top: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
}

input {
  width: 80px;
  text-align: center;
}
</style>
