class Kala {
    constructor(public liik: string, public kaal: number) {}
}

class VaikeParv {
    kalad: Kala[] = [];

    constructor(public asukoht: string) {}

    lisaKala(kala: Kala): void {
        this.kalad.push(kala);
    }

    koguMass(): number {
        return this.kalad.reduce((kokku, kala) => kokku + kala.kaal, 0);
    }

    keskmineKaal(): number {
        if (this.kalad.length === 0) return 0;
        return this.koguMass() / this.kalad.length;
    }
}

class SuurParv {
    vaikeParved: VaikeParv[] = [];

    lisaVaikeParv(vaikeParv: VaikeParv): void {
        this.vaikeParved.push(vaikeParv);
    }

    koguMass(): number {
        return this.vaikeParved.reduce((kokku, parv) => kokku + parv.koguMass(), 0);
    }

    keskmineKaalSuur(): number {
        const keskmisedKaaluSumma = this.vaikeParved.reduce((summa, parv) => summa + parv.keskmineKaal(), 0);
        return keskmisedKaaluSumma / this.vaikeParved.length;
    }

    asukohad(): string[] {
        return this.vaikeParved.map(parv => parv.asukoht);
    }

    liigutaParv(uusAsukoht: string): void {
        this.vaikeParved.forEach(parv => parv.asukoht = uusAsukoht);
    }
}

const vaikeParv1 = new VaikeParv("Riff A");
vaikeParv1.lisaKala(new Kala("Tuunikala", 5));
vaikeParv1.lisaKala(new Kala("Ahven", 3));

const vaikeParv2 = new VaikeParv("Riff B");
vaikeParv2.lisaKala(new Kala("Tursk", 2));
vaikeParv2.lisaKala(new Kala("Heeringas", 1));

const suurParv = new SuurParv();
suurParv.lisaVaikeParv(vaikeParv1);
suurParv.lisaVaikeParv(vaikeParv2);

console.log("Suure parve kogu mass:", suurParv.koguMass());
console.log("Väikeparvede asukohad:", suurParv.asukohad());

console.log("Väikeparv 1 keskmine kaal:", vaikeParv1.keskmineKaal());
console.log("Väikeparv 2 keskmine kaal:", vaikeParv2.keskmineKaal());

console.log("Suure parve keskmine kaal:", suurParv.keskmineKaalSuur());

suurParv.liigutaParv("Avameri");
console.log("Uued väikeparvede asukohad:", suurParv.asukohad());
