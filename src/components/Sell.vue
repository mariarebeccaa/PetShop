<template>
  <section class="page">
    <header class="page-header">
      <h1>Post an Ad</h1>
    </header>

    <div class="page-body">
      <form class="ad-form" @submit.prevent="submitForm" novalidate>
        <label>
          Title *
          <input v-model="form.title" type="text" required />
        </label>

        <label>
          Category *
          <select v-model="form.category" required>
            <option value="" disabled>Select a category</option>
            <option value="dogs">Dogs</option>
            <option value="cats">Cats</option>
            <option value="domestic">Domestic animals</option>
            <option value="birds">Birds / Fishes</option>
          </select>
        </label>

        <label>
          Age
          <input v-model="form.age" type="text" placeholder="e.g. 2 yrs" />
        </label>

        <label>
          Price
          <input v-model.number="form.price" type="number" min="0" />
        </label>

        <label>
          Contact (phone or email) *
          <input v-model="form.contact" type="text" required />
        </label>

        <label>
          Description
          <textarea v-model="form.description" rows="4"></textarea>
        </label>

        <label class="file">
          Image
          <input type="file" accept="image/*" @change="handleFile" />
        </label>

        <div v-if="preview" class="preview">
          <img :src="preview" alt="preview" />
        </div>

        <div class="actions">
          <button type="submit" class="primary">Submit</button>
          <button type="button" @click="resetForm" class="secondary">Reset</button>
        </div>

        <div v-if="success" class="success">Ad submitted (local demo). Check console.</div>
        <div v-if="error" class="error">{{ error }}</div>
      </form>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { addPost } from '../store.js'

const router = useRouter()

const form = ref({
  title: '',
  category: '',
  age: '',
  price: null,
  contact: '',
  description: '',
  imageFile: null,
})

const preview = ref(null)
const success = ref(false)
const error = ref(null)

function handleFile(e) {
  const file = e.target.files && e.target.files[0]
  form.value.imageFile = file || null
  preview.value = null
  if (!file) return
  const reader = new FileReader()
  reader.onload = () => {
    preview.value = reader.result
  }
  reader.readAsDataURL(file)
}

function validate() {
  if (!form.value.title.trim()) return 'Title is required.'
  if (!form.value.category) return 'Category is required.'
  if (!form.value.contact.trim()) return 'Contact is required.'
  return null
}

function submitForm() {
  error.value = null
  success.value = false
  const v = validate()
  if (v) {
    error.value = v
    return
  }

  // Demo: print payload to console (replace with API call)
  const payload = {
    title: form.value.title,
    category: form.value.category,
    age: form.value.age,
    price: form.value.price,
    contact: form.value.contact,
    description: form.value.description,
    imageName: form.value.imageFile ? form.value.imageFile.name : null,
  }
  console.log('Submitting ad (demo):', payload)
  success.value = true

  // add post to in-memory store so Category updates immediately
  addPost(form.value.category, {
    title: `${form.value.title}${form.value.age ? ' — ' + form.value.age : ''}`,
    img: form.value.imageFile ? form.value.imageFile.name : null
  })

  // optional: navigate back home after small delay
  setTimeout(() => {
    router.push('/')
  }, 900)
}

function resetForm() {
  form.value = {
    title: '',
    category: '',
    age: '',
    price: null,
    contact: '',
    description: '',
    imageFile: null,
  }
  preview.value = null
  success.value = false
  error.value = null
}
</script>

<style scoped>
.page { 
  max-width: 800px; 
  margin: 1.5rem auto; 
  padding: 0 1.5rem; 
  text-align: left; 
}
.page-header h1 { font-size: 1.6rem; margin: 0 0 1rem; text-transform: lowercase; }

.ad-form {
  display: grid;
  gap: 0.75rem;
}
.ad-form label { display: flex; flex-direction: column; font-weight: 600; font-size: 0.95rem; }
.ad-form input[type="text"],
.ad-form input[type="number"],
.ad-form select,
.ad-form textarea {
  margin-top: 0.35rem;
  padding: 0.5rem;
  border-radius: 6px;
  border: 1px solid #ddd;
  font-family: inherit;
}
.file input { margin-top: 0.4rem; }

.actions { display:flex; gap:0.5rem; margin-top:0.5rem; }
.primary { background: #8b84ff; color: #fff; padding: 0.6rem 1rem; border-radius: 8px; border: none; }
.secondary { background: transparent; color: #8b84ff; border: 1px solid #8b84ff; padding: 0.5rem 0.9rem; border-radius: 8px; }

.preview img { max-width: 160px; max-height: 160px; object-fit: cover; border-radius: 8px; margin-top: 0.5rem; }

.success { color: green; margin-top: 0.5rem; }
.error { color: #c0392b; margin-top: 0.5rem; }
</style>