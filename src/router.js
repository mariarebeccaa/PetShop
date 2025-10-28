import { createRouter, createWebHistory } from 'vue-router'
import Hero from './components/Hero.vue'
import Sell from './components/Sell.vue'
import Category from './components/Category.vue' // new

const routes = [
    { path: '/', component: Hero },
    { path: '/browse', redirect: '/' },
    { path: '/sell', component: Sell },
    { path: '/category/:slug', name: 'category', component: Category, props: true },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router
