<template>
  <div>
    <MovieTableLayout>
      <template #default>
        <MovieDataTemplate />
      </template>
    </MovieTableLayout>
  </div>
</template>

<script lang="ts" setup>
import { MovieTableLayout } from "@/entities/movie";
import { MovieDataTemplate } from "@/features/movie";
</script>

<style lang="scss" scoped>
@import 'style.scss';
</style>
