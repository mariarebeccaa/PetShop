<script setup>
import { useRoute, useRouter } from 'vue-router'
import { computed } from 'vue'
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

const route = useRoute()
const router = useRouter()

const slug = computed(() => route.params.slug || 'unknown')

const meta = {
  dogs: {
    title: 'Dogs',
    posts: [
      { title: 'Buddy — 2 yrs', img: dogPost1 },
      { title: 'Rex — 4 yrs', img: dogPost2 },
      { title: 'Milo — 1 yr', img: dogPost3 },
    ],
  },
  cats: {
    title: 'Cats', 
    posts: [ { title: 'Luna — 3 yrs', img: catPost1  },
   { title: 'Simba — 2 yrs', img: catPost2 },
    { title: 'Misty — 5 yrs',  img: catPost3 } ] },
  domestic: { title: 'Domestic animals', posts: [ { title: 'Bunny — 1 yr', img: daPost1 }, { title: 'Hamster — 6 mo', img: daPost2 } ] },
  birds: { title: 'Birds / Fishes', posts: [ { title: 'Tweety — parrot', img: parrotPost1 }, { title: 'Goldie — fish', img: fishPost1 } ] },
}
const data = computed(() => meta[slug.value] || { title: slug.value, posts: [] })

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
        <h1>{{ data.title }}</h1>
      </div>

      <div class="posts-grid">
        <article v-for="(p, i) in data.posts" :key="i" class="post-card">
          <template v-if="p.img">
            <img :src="p.img" alt="" class="thumb" />
          </template>
          <template v-else>
            <div class="thumb" aria-hidden="true"></div>
          </template>
          <div class="post-meta">
            <strong>{{ p.title }}</strong>
            <!-- <small>Sample post • placeholder</small> -->
          </div>
        </article>
        <div v-if="!data.posts.length" class="empty">No posts yet for "{{ slug }}"</div>
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