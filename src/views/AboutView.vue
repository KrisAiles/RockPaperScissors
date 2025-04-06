<script setup lang="ts">
import { RouterLink } from 'vue-router';
</script>

<template>
    <div id="how-to-container">
        <p>HOW TO PLAY:</p>
        <ul>
            <li>Rock beats Scissors, Paper beats Rock, Scissors beats Paper</li>
            <li>Make your selection by clicking the icons at the bottom of the screen</li>
            <li>Each win will earn you 100 points</li>
            <li>Each win in a row will increase the win bonus and the points you earn for that round will be multiplied by the bonus</li>
            <li>If you win 5 games in a row you will get a bonus life</li>
            <li>If you lose the win bonus will be reset to zero and you will lose a life</li>
            <li>If you lose all of your lives it will be GAME OVER</li>
        </ul>
        <span><RouterLink to="/">BACK</RouterLink></span>
    </div>
</template>

<style lang="scss" scoped>
@use "@/assets/variables";
@use "@/assets/mixins";

#how-to-container {
    @include mixins.display;
    padding: variables.$display-padding;
    min-height: 75vh;
    width: 50%;
    border: 0.125rem solid variables.$game-border;
    margin: 0 auto;

    ul {
        font-size: 1.25rem;
        padding: 0;
        margin: 0 auto;
        width: 50%;
    }

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

        ul {
            font-size: 1.25rem;
            padding: 0 0 0 0.9375rem;
        }

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