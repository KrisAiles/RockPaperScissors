import { defineStore } from "pinia";

export const useStartStore = defineStore('start', {
    state: () => ({playerName: <string | null>''}),
    getters: {},
    actions: {
        startGame() {
            if (this.playerName === '') {
              this.playerName = 'PLAYER 1';
            }
          
            if (typeof this.playerName === 'string') {
                this.playerName = this.playerName.toUpperCase();
                localStorage.setItem('playerName', this.playerName);
            } else {
                this.playerName = 'PLAYER 1';
            }
            
        },
        addName(name: string | null) {
            this.playerName = name;
        }
    },
})