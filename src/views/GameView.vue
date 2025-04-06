<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { useStartStore } from '@/stores/start';
import { useScoreStore } from '@/stores/score';
import GameData from '../components/GameData.vue';
import GameDisplay from '../components/GameDisplay.vue';
import GameButtons from '../components/GameButtons.vue';


const router = useRouter();
const scoreStore = useScoreStore();
const startStore = useStartStore();
const playerSelection = ref('');
const computerSelection = ref('');
const buttonClick = ref(false);
const roundStart = ref(true);
const roundEnd = ref(false);
const gameOver = ref(false);
const score = ref(0);
const round = ref(1);
const win = ref(0);
const lives = ref(['♥️', '♥️', '♥️', '♥️', '♥️']);
const selectionArray = ['👊', '✋', '✌️'];
const roundResult = ref('');

onMounted(() => {
  if (startStore.playerName === '') {
    if (localStorage.getItem('playerName')) {
      startStore.addName(localStorage.getItem('playerName'));
    } else {
      startStore.addName('PLAYER 1');
    }
  }
});

function playerSelect(selected: string) {
  buttonClick.value = !buttonClick.value;
  roundStart.value = !roundStart.value;
  playerSelection.value = selected;
  const num = Math.floor(Math.random() * selectionArray.length);
  computerSelection.value = selectionArray[num];
  if (playerSelection.value === computerSelection.value) {
    draw();
  } else {
    if (playerSelection.value === '👊' && computerSelection.value === '✌️') {
      playerWins();
    } else if (playerSelection.value === '✋' && computerSelection.value === '👊') {
      playerWins()
    } else if (playerSelection.value === '✌️' && computerSelection.value === '✋') {
      playerWins()
    } else {
      playerLoses();
    }
  }
};

function playerWins() {
  setTimeout(() => {
    roundResult.value = `${startStore.playerName} WINS`;
    win.value += 1;
    score.value += (100 * win.value);
    if (win.value % 5 === 0) {
      lives.value.push('♥️');
    }
    roundEnd.value = !roundEnd.value;

    setTimeout(() => {
      roundEnd.value = !roundEnd.value;
      round.value += 1;
      playerSelection.value = '';
      computerSelection.value = '';
      roundStart.value = !roundStart.value;
      buttonClick.value = !buttonClick.value;
    }, 5000)
    
  }, 2000)
};

function draw() {
  setTimeout(() => {
    roundResult.value = `DRAW`;
    roundEnd.value = !roundEnd.value;

    setTimeout(() => {
      roundEnd.value = !roundEnd.value;
      round.value += 1;
      playerSelection.value = '';
      computerSelection.value = '';
      roundStart.value = !roundStart.value;
      buttonClick.value = !buttonClick.value;
    }, 5000)
    
  }, 2000)
};

function playerLoses() {
  setTimeout(() => {
    roundResult.value = `${startStore.playerName} LOSES`;
    win.value = 0;
    lives.value.pop();
    if (lives.value.length > 0) {
      roundEnd.value = !roundEnd.value;

      setTimeout(() => {
        roundEnd.value = !roundEnd.value;
        round.value += 1;
        playerSelection.value = '';
        computerSelection.value = '';
        roundStart.value = !roundStart.value;
        buttonClick.value = !buttonClick.value;
      }, 5000)
    } else {
      scoreStore.addScore({name: startStore.playerName, score: score.value});
      scoreStore.sortScores();
      gameOver.value = !gameOver.value;
      playerSelection.value = '';
      computerSelection.value = '';
    }

    
  }, 2000)
};

function playAgain() {
  gameOver.value = !gameOver.value;
  score.value = 0;
  round.value = 1;
  win.value = 0;
  lives.value = ['♥️', '♥️', '♥️', '♥️', '♥️'];
  roundStart.value = !roundStart.value;
  buttonClick.value = !buttonClick.value;
}

function quit() {
  localStorage.removeItem('playerName');
  gameOver.value = !gameOver.value;
  startStore.$reset();
  score.value = 0;
  round.value = 1;
  win.value = 0;
  lives.value = ['♥️', '♥️', '♥️', '♥️', '♥️'];
  buttonClick.value = !buttonClick.value;
  router.push('/');
}

</script>

<template>
  <main>
    <GameData :winBonus="win" :lifeCount="lives" :roundNumber="round" :playerScore="score"></GameData>
    <GameDisplay @play="playAgain" @quit="quit" :playerName="startStore.playerName" :gameOver="gameOver" :roundNumber="round" :lifeCount="lives" :playerScore="score" :winBonus="win" :result="roundResult" :roundStart="roundStart" :roundEnd="roundEnd" :player="playerSelection" :computer="computerSelection"></GameDisplay> 
    <GameButtons :clickable="buttonClick" @selected="playerSelect"></GameButtons>
  </main>

</template>

<style lang="scss" scoped>
main {
  background-color: #000000;
  width: 98%;
  margin: 0 auto 0.625rem;
  border-bottom-left-radius: 0.9375rem;
  border-bottom-right-radius: 0.9375rem;
}
</style>