import { createRouter, createWebHistory } from "vue-router"
import Home from "../pages/Home.vue"
import Equipe from "../pages/Equipe.vue"
import Funcionario from "../pages/Funcionario.vue"

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/equipe",
    name: "Equipe",
    component: Equipe
  },
  {
    path: "/equipe/:id",
    name: "Funcionario",
    component: Funcionario
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router