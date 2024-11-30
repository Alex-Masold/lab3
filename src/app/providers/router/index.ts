import { routes } from "./routes"
import { createRouter, createWebHistory } from "vue-router"

export const router = createRouter({
    history: createWebHistory(import.meta.env.Base_URL),
    routes,
  });