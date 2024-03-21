function libisevKeskmine(sisend: number[]): number[] {
    const keskmised: number[] = [];
    
    for (let i = 0; i < sisend.length - 2; i++) {
        const keskmine = (sisend[i] + sisend[i + 1] + sisend[i + 2]) / 3;
        keskmised.push(keskmine);
    }
    
    return keskmised;
}

const sisendMassiiv: number[] = [1, 2, 3, 4, 5, 6, 7];
const keskmised = libisevKeskmine(sisendMassiiv);
console.log(keskmised);
