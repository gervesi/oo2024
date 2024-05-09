interface Ioni {
    nimetus: string;
    aatommassideSumma: number;
    loeng: number;
}

class Ioon implements Ioni {
    constructor(public nimetus: string, public aatommassideSumma: number, public loeng: number) {}
}

const naPositiivne: Ioni = new Ioon("Na+", 23, 1);
const no3Negatiivne: Ioni = new Ioon("NO3-", 62, -1);

function kysiAndmed(ioon: Ioni): void {
    console.log(`Iooni nimetus: ${ioon.nimetus}`);
    console.log(`Aatommasside summa: ${ioon.aatommassideSumma}`);
    console.log(`Laeng: ${ioon.loeng}`);
}

kysiAndmed(naPositiivne);
kysiAndmed(no3Negatiivne);