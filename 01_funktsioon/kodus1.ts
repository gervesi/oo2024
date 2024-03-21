function rollDice(): number {
    return Math.floor(Math.random() * 6) + 1;
}

function diceGame(numRolls: number): number[] {
    const results: number[] = [];
    for (let i = 0; i < numRolls; i++) {
        const roll1 = rollDice();
        const roll2 = rollDice();
        results.push(roll1 + roll2);
    }
    return results;
}

const numRolls = 5;
const rollResults = diceGame(numRolls);
console.log(`Täringute veeretamise tulemused (${numRolls} korda):`, rollResults);
