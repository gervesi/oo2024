function mündivise(): string {
    // Genereerime suvalise arvu vahemikus 0 kuni 1
    const tulemus = Math.random();

    // Kui tulemus on alla 0.5, siis saab mängija "Kiri", vastasel juhul "Kull"
    if (tulemus < 0.5) {
        return "Kiri";
    } else {
        return "Kull";
    }
}

// Demonstreerime mängu tulemust 5 mündiviske korral
const visked: string[] = [];
for (let i = 0; i < 5; i++) {
    visked.push(mündivise());
}

console.log("Mündiviske tulemused:", visked);


function rollDice(): number {
    // Simuleerime täringu veeretamist, genereerides juhusliku arvu vahemikus 1 kuni 6
    return Math.floor(Math.random() * 6) + 1;
}

function diceGame(numRolls: number): number[] {
    const results: number[] = [];
    // Veeretame täringuid 'numRolls' korda ja salvestame tulemused
    for (let i = 0; i < numRolls; i++) {
        const roll1 = rollDice();
        const roll2 = rollDice();
        results.push(roll1 + roll2); // Lisame kahe täringu veeretamise tulemuse summa tulemuste massiivi
    }
    return results;
}

// Demonstreerime funktsiooni tööd, veeretades 5 korda täringuid
const numRolls = 5;
const rollResults = diceGame(numRolls);
console.log(`Täringute veeretamise tulemused (${numRolls} korda):`, rollResults);

