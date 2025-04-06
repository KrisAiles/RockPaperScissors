<script setup lang="ts">
import HighScore from '@/components/HighScore.vue';
</script>

<template>
    <div id="high-score-container">
        <HighScore></HighScore>
        <span><RouterLink to="/">BACK</RouterLink></span>
    </div>
</template>

<style lang="scss" scoped>
@use "@/assets/variables";
@use "@/assets/mixins";

#high-score-container {
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