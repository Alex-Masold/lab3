<template>
  <div class="movie-table">
    <div class="movie-table__row">
        <div class="movie-table__cell">id</div>
        <div class="movie-table__cell">Name</div>
        <div class="movie-table__cell">Start Time</div>
        <div class="movie-table__cell">Duration</div>
    </div>
    <slot name="default"/>
  </div>
</template>

<script setup lang="ts">

</script>

<style lang="scss" scoped>
@import "style.scss";
</style>
