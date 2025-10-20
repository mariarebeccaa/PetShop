import { createRouter, createWebHistory } from 'vue-router'
import Hero from './components/Hero.vue'
import Sell from './components/Sell.vue'

const routes = [
    { path: '/', component: Hero },
    // păstrăm redirect pentru /browse astfel încât vechile linkuri să meargă la home
    { path: '/browse', redirect: '/' },
    { path: '/sell', component: Sell },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router
