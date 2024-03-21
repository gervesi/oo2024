interface Player {
    name: string;
    score: number;
    play(): void;
}

class DicePlayer implements Player {
    name: string;
    score: number;

    constructor(name: string) {
        this.name = name;
        this.score = 0;
    }

    play(): void {
        const roll = Math.floor(Math.random() * 6) + 1;
        console.log(`${this.name} veeretas ${roll}.`);
        this.score += roll;
    }
}

class Game {
    players: Player[];

    constructor(players: Player[]) {
        this.players = players;
    }

    playRound(): void {
        console.log("Voor on alanud!");
        for (const player of this.players) {
            player.play();
        }
        console.log("Voor lõppes!");
    }

    getWinner(): Player | null {
        let maxScore = -1;
        let winner: Player | null = null;
        for (const player of this.players) {
            if (player.score > maxScore) {
                maxScore = player.score;
                winner = player;
            }
        }
        return winner;
    }
}


const player1 = new DicePlayer("Mina");
const player2 = new DicePlayer("Keegi teine");
const game = new Game([player1, player2]);

for (let i = 0; i < 3; i++) {
    game.playRound();
}

const winner = game.getWinner();
if (winner) {
    console.log(`Võitja on ${winner.name} punktidega ${winner.score}!`);
} else {
    console.log("Võitjat pole!");
}
