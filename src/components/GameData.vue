<script setup lang="ts">
import GameDataSlot from './GameDataSlot.vue';

const props = defineProps<{
   playerScore: number
   roundNumber: number
   winBonus: number
   lifeCount: string[]
}>();

</script>

<template>
    <div id="game-data-container">
        <GameDataSlot>
            <h2>SCORE</h2>
            <p>{{ String(props.playerScore).padStart(6, '0') }}</p>
        </GameDataSlot>
        <GameDataSlot>
            <h2>BONUS</h2>
            <p>X {{ props.winBonus }}</p>
        </GameDataSlot>
        <GameDataSlot>
            <h2>ROUND</h2>
            <p>{{ props.roundNumber }}</p>
        </GameDataSlot>
        <GameDataSlot>
            <h2>LIVES</h2>
            <span id="lives">{{ props.lifeCount.join('') }}</span>
        </GameDataSlot>
    </div>
</template>

<style lang="scss" scoped>
@use "@/assets/variables";
@use "@/assets/mixins";

#game-data-container {
    display: flex;
    flex-wrap: nowrap;
    box-sizing: border-box;
    height: 4.6875rem;
    width: 100%;

}

#lives {
    font-size: 1rem;

    @include mixins.mobile {
        font-size: 0.75rem;
    }
}

</style>