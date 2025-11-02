<script setup>
import { ref, computed, onMounted, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'

import dogPost1 from '../assets/images/dog_post1.jpg'
import dogPost2 from '../assets/images/dog_post2.jpg'
import dogPost3 from '../assets/images/dog_post3.jpg'
import catPost1 from '../assets/images/cat_post1.jpg'
import catPost2 from '../assets/images/cat_post2.jpg'
import catPost3 from '../assets/images/cat_post3.jpg'
import daPost1 from '../assets/images/da_post1.jpg'
import daPost2 from '../assets/images/da_post2.jpg'
import parrotPost1 from '../assets/images/parrot_post1.jpg'
import fishPost1 from '../assets/images/fish_post1.jpg'

import { categories, load } from '../store.js'

const imageMap = {
  'dog_post1.jpg': dogPost1,
  'dog_post2.jpg': dogPost2,
  'dog_post3.jpg': dogPost3,
  'cat_post1.jpg': catPost1,
  'cat_post2.jpg': catPost2,
  'cat_post3.jpg': catPost3,
  'da_post1.jpg': daPost1,
  'da_post2.jpg': daPost2,
  'parrot_post1.jpg': parrotPost1,
  'fish_post1.jpg': fishPost1
}

const route = useRoute()
const router = useRouter()
const slug = computed(() => route.params.slug || 'unknown')

// încărcăm datele inițiale o singură dată
onMounted(() => load())

const title = computed(() => {
  const c = categories[slug.value]
  return c ? c.title : slug.value
})

const posts = computed(() => {
  const c = categories[slug.value]
  if (!c || !Array.isArray(c.posts)) return []
  return c.posts.map(p => ({
    title: p.title,
    img: p.img ? (imageMap[p.img] || p.img) : null
  }))
})

const loading = ref(false)
const error = ref(null)

function goBack() {
  router.push('/')
  setTimeout(() => {
    const el = document.getElementById('browse-section')
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }, 80)
}
</script>

<template>
  <section class="category-page">
    <div class="container">
      <div class="category-header">
        <button @click="goBack">← Home</button>
        <h1>{{ title }}</h1>
      </div>

      <div v-if="loading">Loading...</div>
      <div v-else-if="error">Error: {{ error }}</div>

      <div v-else class="posts-grid">
        <article v-for="(p, i) in posts" :key="i" class="post-card">
          <img v-if="p.img" :src="p.img" alt="" class="thumb" />
          <div v-else class="thumb" aria-hidden="true"></div>
          <div class="post-meta">
            <strong>{{ p.title }}</strong>
          </div>
        </article>

        <div v-if="!posts.length" class="empty">No posts yet for "{{ slug }}"</div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.container { max-width: 1200px; margin: 1.5rem auto; padding: 0 1.5rem; }
.category-header { display:flex; align-items:center; gap:1rem; margin-bottom:1rem; }
.category-header h1 { margin:0; font-size:1.6rem; text-transform:capitalize; }
.posts-grid { display:grid; grid-template-columns: repeat(3, 1fr); gap:1rem; }
.post-card { background:#fff; border-radius:10px; padding:1rem; box-shadow:0 6px 18px rgba(0,0,0,0.20); display:flex; gap:1rem; align-items:center; }
.thumb { width: 152px; height: 228px; background:#f0f0f0; border-radius:8px; flex-shrink:0; object-fit:cover; }
.thumb[alt=""] { /* if using img with empty alt, keep styling */ }
.post-meta strong { display:block; }
.empty { color:rgba(0,0,0,0.6) }
@media (max-width:900px) { .posts-grid { grid-template-columns: repeat(2, 1fr); } }
@media (max-width:480px) { .posts-grid { grid-template-columns: 1fr; } }
</style>