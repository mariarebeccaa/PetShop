<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import Navbar from './components/Navbar.vue'
import Hero from './components/Hero.vue'
import Browse from './components/Browse.vue'
import Sell from './components/Sell.vue'

const route = ref('home')

function updateRouteFromHash() {
  const h = window.location.hash.replace(/^#\/?/, '')
  route.value = h || 'home'
}

function go(target) {
  window.location.hash = '/' + target
  route.value = target
}

onMounted(() => {
  updateRouteFromHash()
  window.addEventListener('hashchange', updateRouteFromHash)
})
onUnmounted(() => window.removeEventListener('hashchange', updateRouteFromHash))
</script>

<template>
  <div id="app">
    <Navbar :current-route="route" @navigate="go" />
    <main>
      <Hero v-if="route === 'home'" />
      <Browse v-else-if="route === 'browse'" />
      <Sell v-else-if="route === 'sell'" />
      <Hero v-else />
    </main>
  </div>
</template>

<style scoped>
main { padding-bottom: 4rem; }
</style>
