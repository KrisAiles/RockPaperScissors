import { defineStore } from "pinia";

export const useScoreStore = defineStore('score', {
    state: () => ({highScores: <{name: string | null, score: number}[]>[{name: 'KRIS', score: 2900}, {name: 'TODD', score: 120000}, {name: 'FRED', score: 3800}, {name: 'FRANKIE', score: 2500}, {name: 'ROXY', score: 2400}, {name: 'MEG', score: 2200}, {name: 'PLAYER 1', score: 1000}, {name: 'PLAYER 1', score: 7000}, {name: 'PLAYER 1', score: 2000}, {name: 'PLAYER 1', score: 100}]}),
    getters: {},
    actions: {
        sortScores() {
            if (localStorage.getItem('scores')) {
                const storedScores = localStorage.getItem('scores');
                if (typeof storedScores === 'string') {
                    const parsedScores = JSON.parse(storedScores);
                    this.highScores = parsedScores;
                }
              }
            this.highScores.sort((a, b) => b.score - a.score);
            if (this.highScores.length > 10) {
              this.highScores.pop();
            }
            const stringifiedScores = JSON.stringify(this.highScores);
            localStorage.setItem('scores', stringifiedScores);
        },
        addScore(newScore: {name: string | null, score: number}) {
            this.highScores.push(newScore);
            const stringifiedScores = JSON.stringify(this.highScores);
            localStorage.setItem('scores', stringifiedScores);
        },
    },
})