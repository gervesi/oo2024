class Die {
    sides: number;

    constructor(sides: number) {
        this.sides = sides;
    }

    roll(): number {
        return Math.floor(Math.random() * this.sides) + 1;
    }
}

class DiceGame {
    player1: Die;
    player2: Die;

    constructor() {
        this.player1 = new Die(6); 
        this.player2 = new Die(6); 
    }

    playRound(): void {
        const roll1 = this.player1.roll();
        const roll2 = this.player2.roll();

        console.log("Player 1 rolled: ${roll1}");
        console.log("Player 2 rolled: ${roll2}");

        if (roll1 > roll2) {
            console.log("Player 1 wins!");
        } else if (roll2 > roll1) {
            console.log("Player 2 wins!");
        } else {
            console.log("It's a tie!");
        }
    }
}


const game = new DiceGame();


for (let i = 0; i < 3; i++) {
    console.log("Round ${i + 1}:");
    game.playRound();
}
