<script setup lang="ts">
import { RouterView } from 'vue-router';
import MainHeader from './components/MainHeader.vue';

</script>

<template>
  <header>
    <MainHeader></MainHeader>
  </header>
  <main>
        <RouterView />
  </main>
</template>

<style lang="scss" scoped>
@use "@/assets/variables";
@use "@/assets/mixins";

main {
  background-color: #000000;
  width: 98%;
  margin: 0 auto 0.625rem;
  border-bottom-left-radius: 0.9375rem;
  border-bottom-right-radius: 0.9375rem;
  min-height: 80vh;
}

</style>