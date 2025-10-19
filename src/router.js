import { createRouter, createWebHistory } from 'vue-router'
import Hero from './components/Hero.vue'
import Browse from './components/Browse.vue'
import Sell from './components/Sell.vue'

const routes = [
    { path: '/', component: Hero },
    { path: '/browse', component: Browse },
    { path: '/sell', component: Sell },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router
