import type { RouteRecordRaw } from "vue-router";

import { route as UserPage } from './user'
import { route as MoviePage } from './movie'
import { route as NotFound } from "./not-found";

export const routes: readonly RouteRecordRaw[] = [
    UserPage,
    MoviePage,
    NotFound
]