<script setup lang="ts">
import { RouterLink } from 'vue-router';
import { useStartStore } from '@/stores/start';
import { useScoreStore } from '@/stores/score';
import { storeToRefs } from 'pinia';
import { onMounted } from 'vue';

const scoreStore = useScoreStore();
const startStore = useStartStore();
const { playerName } = storeToRefs(useStartStore());

onMounted(() => {
  if (startStore.playerName === '') {
    if (localStorage.getItem('playerName')) {
      startStore.addName(localStorage.getItem('playerName'));
    }
  }
  if (localStorage.getItem('scores')) {
      scoreStore.sortScores();
    }
});

</script>

<template>
    <div id="welcome">
        <span>WELCOME TO</span>
        <p>
            ROCK PAPER SCISSORS
        </p>
        <span>Can you beat the high score? Enter your name and click START to begin.</span>
        <form @submit.prevent>
            <input v-model="playerName" id="player-name" name="player-name" type="text" maxlength="8">
        </form>
        <div id="start">
            <span @click="startStore.startGame"><RouterLink to="/game">START</RouterLink></span>
        </div>    
        <nav>
            <span><RouterLink to="/about">HOW TO PLAY</RouterLink></span>
            <span><RouterLink to="/scores">HIGH SCORES</RouterLink></span>
        </nav>               
    </div>
</template>

<style lang="scss" scoped>
@use "@/assets/variables";
@use "@/assets/mixins";

nav {
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 100%;

    a {
        text-decoration: none;
        color: #ffffff
    }
}

#welcome {
    @include mixins.display;
    padding: variables.$display-padding;
    height: 75vh;
    width: 50%;
    border: 0.125rem solid variables.$game-border;
    margin: 0 auto;

    p {
        font-size: 6.25rem;
        text-align: center;
    }

    span {
        text-align: center;
        margin: 0.625rem;
        font-size: 1.875rem;
    }

    a {
        text-decoration: none;
        color: #ffffff
    }

    @include mixins.tablet {
        p {
            font-size: 5.3125rem;
        }
    }

    @include mixins.mobile {
        min-height: 40vh;
        padding: variables.$display-padding-mobile;

        p {
            font-size: 2rem;
        }

        span {
            text-align: center;
            font-size: 1.5rem;
        }
    }
}
</style>