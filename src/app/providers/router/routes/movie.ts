import { RouteRecordRaw } from "vue-router";

export const routeName: string = "MoviePage";

export const route: RouteRecordRaw = {
    name: routeName,
    path: "/movie",
    component: () => import("@/page/movie-table")
}