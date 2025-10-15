<template>
  <header class="site-header">
    <nav class="nav">
      <div class="logo-mark">🐾</div>

      <ul class="nav-links" role="navigation" aria-label="Main">
        <li :class="{ active: current === 'home' }">
          <a href="#/home" @click.prevent="$emit('navigate', 'home')">home</a>
        </li>
        <li :class="{ active: current === 'browse' }">
          <a href="#/browse" @click.prevent="$emit('navigate', 'browse')">browse</a>
        </li>
        <li :class="{ active: current === 'sell' }">
          <a href="#/sell" @click.prevent="$emit('navigate', 'sell')">sell</a>
        </li>
      </ul>

      <button class="cta">login</button>
    </nav>
  </header>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  currentRoute: { type: [String, Object], required: false }
})

const current = computed(() => {
  if (!props.currentRoute) return 'home'
  return typeof props.currentRoute === 'string'
    ? props.currentRoute
    : props.currentRoute.value || 'home'
})
</script>

<style scoped>
.site-header {
  position: sticky;
  top: 0;
  z-index: 20;
  padding: 0.08rem 1rem;
  background: white;
}
.nav {
  display: flex;
  align-items: center;
  gap: 2rem;
  justify-content: space-between;
  max-width: 1200px;
  margin-top: -40px;
  padding: 0.05rem 0;
}
.logo-mark { font-size: 2rem; font-weight: 900; }
.nav-links { display:flex; gap:1.9rem; list-style:none; margin:0; padding:0; }
.nav-links li { font-size:1.35rem; font-weight:900; }
.nav-links a { color: inherit; text-decoration: none; padding: 0.25rem 0; display:inline-block; }
.nav-links li.active a { color: #a7a1c9; }
.cta {
  background: #a7a1c9;
  color: #fff;
  padding: 0.5rem 1rem;
  border-radius: 999px;
  border: none;
}
</style>