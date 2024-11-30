<script setup lang="ts">
import { MainLayout } from "@/shared/ui/layouts";
import { RouterView } from "vue-router";
</script>

<template>
  <MainLayout>
    <template #deafult>
      <RouterView />
    </template>
  </MainLayout>
</template>

<style>
@import "./index.scss";
</style>
