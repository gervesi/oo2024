function aritmeetilineKeskmine(a: number, b: number, c: number): number {
    return (a + b + c) / 3;
}

const arvud = [10, 20, 100];
const keskmine = aritmeetilineKeskmine(arvud[0], arvud[1], arvud[2]);
console.log( keskmine);