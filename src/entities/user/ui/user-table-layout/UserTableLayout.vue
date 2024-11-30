<template>
    <div class="user-table">
        <div class="user-table__row">
            <div class="user-table__cell">id</div>
            <div class="user-table__cell">Name</div>
            <div class="user-table__cell">Email</div>
            <div class="user-table__cell">Data Create</div>
        </div>
        <slot name="default"/>
    </div>
</template>

<script setup lang="ts">

</script>

<style lang="scss" scoped>
 @import 'style.scss';
</style>