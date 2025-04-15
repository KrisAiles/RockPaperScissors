<script setup lang="ts">
import { useScoreStore } from '@/stores/score';

const scoreStore = useScoreStore();
const highScores = scoreStore.highScores;

</script>

<template>
    <div id="high-scores">
        <p>HIGH SCORES</p>
        <span>TOP 10</span>
        <ul>
            <li v-for="item in highScores" :key="item.score">
                {{ item.name }}: {{ String(item.score).padStart(6, '0') }} 
            </li>                   
        </ul>   
    </div>
</template>

<style lang="scss" scoped>
@use "@/assets/variables";
@use "@/assets/mixins";

#high-scores {
    @include mixins.display;

    span {
        font-size: 2rem;
        text-decoration: underline;
    }

    ul {
        text-align: center;
        list-style: none;
        font-size: 1.5rem;
        padding: 0;
        margin: 0;
    }

    p {
        font-size: 6.25rem;
        text-align: center;
    }

    @include mixins.tablet {
        p {
            font-size: 5.3125rem;
        }
    }

    @include mixins.mobile {
        justify-content: flex-start;

        p {
            font-size: 2rem;
        }

        ul {
            font-size: 1.25rem;
        }
    }
}

</style>