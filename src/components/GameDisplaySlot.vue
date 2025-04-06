<script setup lang="ts">

</script>

<template>
    <div id="game-display-slot">
        <slot></slot>
    </div>
</template>

<style lang="scss" scoped>
@use "@/assets/variables";

#game-display-slot {
    display: flex;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
    width: 50%;
    border: 0.0625rem solid variables.$game-border;
}

</style>