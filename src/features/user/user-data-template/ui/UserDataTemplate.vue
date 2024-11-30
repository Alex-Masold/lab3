<template>
  <div v-for="user in userList" :key="user.id" class="user-table__row">
    <div class="user-table__cell">{{ user.id }}</div>
    <div class="user-table__cell">{{ user.name }}</div>
    <div class="user-table__cell">{{ user.email }}</div>
    <div class="user-table__cell">{{ user.dataCreated }}</div>
  </div>
</template>

<script setup lang="ts">
import { UserModel } from "@/entities/user";
const { userList } = UserModel.useUserStore();
</script>

<style lang="scss" scoped>
@import "style.scss";
</style>
