import Vue from 'vue'
import VueRouter from 'vue-router'
import pokedex from '../components/pokedex.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/pokemon/:id',
    name: 'pokedex',
    component: pokedex
  },
]

const router = new VueRouter({
  routes
})

export default router
