<template>
  <div>
    <UserTableLayout>
        <template #default>
            <UserDataTemplate />
        </template>
    </UserTableLayout>
  </div>
</template>

<script lang="ts" setup>
import { UserTableLayout } from "@/entities/user";
import { UserDataTemplate } from "@/features/user";
</script>

<style lang="scss" scoped>
@import "style.scss";
</style>
