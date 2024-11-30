import type { RouteRecordRaw } from "vue-router";

export const routeName: string = 'UserPage';

export const route: RouteRecordRaw = {
    name: routeName,
    path: "/",
    component: () => import("@/page/user-page")
}