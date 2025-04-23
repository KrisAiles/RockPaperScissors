<script setup lang="ts">
import { computed } from 'vue';
import GameDisplaySlot from './GameDisplaySlot.vue';
import HighScore from './HighScore.vue';

//const name = defineModel();
const emit = defineEmits(['play', 'quit', 'startClick']);
const props = defineProps<{
  player: string
  computer: string
  roundStart: boolean
  roundEnd: boolean
  result: string
  winBonus: number
  lifeCount: string[]
  playerScore: number
  roundNumber: number
  gameOver: boolean
  playerName: string | null
  //welcome: boolean
  //scoreDisplay: boolean
  //highScores: {name: string | null, score: number}[]
}>();

const displayVS = computed(() => {
    if (props.gameOver === true) {
        return false;
    } else {
        return true;
    }
})

</script>

<template>
    <div id="game-display-container">
        <GameDisplaySlot>
            <div id="player-display">
                <div id="round-end" v-if="roundEnd">
                    <p>{{ props.result }}</p>
                    <span>SCORE: {{ String(props.playerScore).padStart(6, '0') }}</span>
                    <span>BONUS: X {{ props.winBonus }}</span>
                    <span>LIVES: <div id="lives-display">{{ props.lifeCount.join('') }}</div></span>
                </div>
                <div id="round-start" v-if="roundStart">
                    <p>ROUND {{ props.roundNumber }}</p>
                    <p>make your selection</p>
                </div>
                <p>{{ props.player }}</p>
                <div id="vs" v-if="displayVS">
                    <span>VS</span>
                </div>
                <div id="game-over" v-if="gameOver">
                    <p>GAME OVER</p>
                    <span>SCORE: {{ String(props.playerScore).padStart(6, '0') }}</span>
                    <div class="play-quit" @click="emit('play')">PLAY AGAIN?</div>
                    <div class="play-quit" @click="emit('quit')">QUIT?</div>
                </div>
            </div>
        </GameDisplaySlot>
        <GameDisplaySlot>
            <div id="computer-display">
                <HighScore v-if="gameOver"></HighScore>
                <p>{{ props.computer }}</p>
            </div>            
        </GameDisplaySlot>
    </div>
</template>

<style lang="scss" scoped>
@use "@/assets/variables";
@use "@/assets/mixins";

#game-display-container {
    display: flex;
    box-sizing: border-box;
    min-height: 31.25rem;
    height: 55vh;
    width: 98%;
    border: 0.0625rem solid variables.$game-border;
    margin: 0 auto;

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
        min-height: 18.75rem;
        height: 40vh;

        p {
            font-size: 2rem;
        }
    }
}

#player-display {
    @include mixins.display;
    padding: variables.$display-padding;

    span {
        text-align: center;
        margin: 0.625rem;
        font-size: 1.875rem;
    }

    @include mixins.mobile {
        padding: variables.$display-padding-mobile;

        span {
            text-align: center;
            font-size: 1.5rem;
        }
    }
}

#computer-display {
    @include mixins.display;
    padding: variables.$display-padding;

    span {
        font-size: 2rem;
        text-decoration: underline;
    }

    @include mixins.mobile {
        padding: variables.$display-padding-mobile;
    }
}

#welcome {
    @include mixins.display;

    input {
        border: 0.0625rem solid #ffffff;
        background-color: #000000;
        color: #ffffff;
        font-family: "Jersey 10", sans-serif;
        font-size: 1.25rem;
        padding: 0 0.3125rem;
        width: 5rem;
    }

    @include mixins.mobile {
        justify-content: flex-start;
    }
}

#round-end {
    @include mixins.display;
}

#round-start {
    @include mixins.display;

    p {
        padding: 0 1.5625rem;
    }
}

#game-over {
    @include mixins.display;

    a {
        text-decoration: none;
        color: #ffffff
    }
}

#lives-display {
    display: inline-block;
    font-size: 1rem;
    
    @include mixins.mobile {
        font-size: 0.625rem;
    }
}

#start {
    cursor: pointer;

    span {
        margin: 0.625rem;
        font-size: 1.875rem;
    }
}

.play-quit {
    font-size: 1.5rem;
    padding: 0.625rem 0 0 0;
    cursor: pointer;
}

#vs {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: absolute;
    right: -4.15625rem;
    top: centre;
    background-color: #000000;
    border: 0.125rem solid variables.$game-border;
    height: 7.8125rem;
    width: 7.8125rem;
    z-index: 999;
    padding-left: 0.3125rem;

    span {
        font-size: 6.25rem;
    }

    @include mixins.mobile {
        height: 3.125rem;
        width: 3.125rem;
        right: -1.5625rem;

        span {
            font-size: 2.5rem;
        }
    }
}

</style>