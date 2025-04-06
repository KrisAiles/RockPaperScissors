<script setup lang="ts">

</script>

<template>
    <button id="game-button-slot">
        <slot></slot>
    </button>
</template>

<style lang="scss" scoped>
@use "@/assets/variables";
@use "@/assets/mixins";

#game-button-slot {
    display: flex;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
    height: 7.8125rem;
    width: 7.8125rem;
    border: 0.125rem solid variables.$game-border;
    background-color: #000000;
    font-size: 6.25rem;
    cursor: pointer;
    padding: 0;
    margin: 0;

    @include mixins.mobile {
        height: 6.25rem;
        width: 6.25rem;
        font-size: 4.6875rem;
    }
}

</style>