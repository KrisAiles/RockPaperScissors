<script setup lang="ts">

</script>

<template>
    <div id="game-data-slot">
        <slot></slot>
    </div>
</template>

<style lang="scss" scoped>
@use "@/assets/variables";

#game-data-slot {
    box-sizing: border-box;
    height: 4.6875rem;
    width: 25%;
    font-size: 1.5rem;
    text-align: center;
}

</style>