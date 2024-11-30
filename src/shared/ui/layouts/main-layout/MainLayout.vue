<template>
  <div class="layout-default">
    <header class="layout-default__header">Header</header>

    <div class="layout-default__content">
      <div class="container">
        <slot name="deafult" />
      </div>
    </div>

    <footer class="layout-default__footer">footer</footer>
  </div>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
@import "style.scss";
</style>
