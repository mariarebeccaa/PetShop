import { reactive } from 'vue'

const categories = reactive({})

let loaded = false

async function load() {
  if (loaded) return
  try {
    const res = await fetch('/mock/categories.json')
    if (!res.ok) throw new Error(`HTTP ${res.status}`)
    const data = await res.json()
    // mutăm datele inițiale în obiectul reactiv
    Object.keys(data).forEach(k => {
      categories[k] = data[k]
    })
    loaded = true
  } catch (e) {
    console.error('Failed to load categories:', e)
  }
}

/**
 * Adaugă un post local (în memorie).
 * post: { title: string, img?: string }  — img poate fi nume de fișier sau dataURL
 */
function addPost(categoryKey, post) {
  if (!categories[categoryKey]) {
    categories[categoryKey] = { title: categoryKey, posts: [] }
  }
  categories[categoryKey].posts.unshift(post)
}

export { categories, load, addPost }