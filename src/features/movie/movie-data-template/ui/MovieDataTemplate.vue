<template>
  <div v-for="movie in movieList" :key="movie.id" class="movie-table__row">
    <div class="movie-table__cell">{{ movie.id }}</div>
    <div class="movie-table__cell">{{ movie.name }}</div>
    <div class="movie-table__cell">{{ movie.startTime }}</div>
    <div class="movie-table__cell">{{ movie.duration }}</div>
  </div>
</template>

<script setup lang="ts">
import { MovieModel } from "@/entities/movie";

const { movieList } = MovieModel.useMovieStore();
</script>

<style lang="scss" scoped>
@import "style.scss";
</style>
