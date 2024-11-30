import type { RouteRecordRaw } from "vue-router";

export const routeName: string = "NotFound";

export const route: RouteRecordRaw = {
    name: routeName,
    path: '/:pathMatch(.*)*', // ?
    component: () => import("@/page/not-found")
}   