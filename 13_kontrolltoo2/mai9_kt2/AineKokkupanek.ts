export interface Ioni {
    nimetus: string;
    aatommassideSumma: number;
    loeng: number;
}

export class Ioon implements Ioni {
    constructor(public nimetus: string, public aatommassideSumma: number, public loeng: number) {}
}

export interface Aine {
    nimetus: string;
    molekulmass: number;
}

export class AineKokkupanek implements Aine {
    constructor(public nimetus: string, public molekulmass: number) {}

    static kombineeri(ioon1: Ioni | Ioon, ioon2: Ioni | Ioon): AineKokkupanek | null {
        // laengud on võrdsed ja vastasmärgilised
        if (ioon1.loeng !== -ioon2.loeng) {
            console.log("Laengud ei ole võrdsed ja vastasmärgilised!");
            return null;
        }

        // laengude summa on null
        if (ioon1.loeng + ioon2.loeng !== 0) {
          console.log("Laengude summa ei ole null!");
          return null;
        }

        // ioonide nimetused vastavad ainetele
        const nimetus: string = ioon1.nimetus.includes(ioon2.nimetus) ? ioon1.nimetus : `${ioon1.nimetus}${ioon2.nimetus}`;

        // molekulmassi arvutamine
        const molekulmass = ioon1.aatommassideSumma + ioon2.aatommassideSumma;

        return new AineKokkupanek(nimetus, molekulmass);
    }
}

const naPositiivne: Ioni = { nimetus: "Na+", aatommassideSumma: 23, loeng: 1 };
const clNegatiivne: Ioni = { nimetus: "Cl-", aatommassideSumma: 35.5, loeng: -1 };
const caPositiivne: Ioni = { nimetus: "Ca2+", aatommassideSumma: 40, loeng: 2 };
const oNegatiivne: Ioni = { nimetus: "O2-", aatommassideSumma: 16, loeng: -2 };

const nacl: AineKokkupanek | null = AineKokkupanek.kombineeri(naPositiivne, clNegatiivne);
if (nacl) {
    console.log(`Kombineeritud aine: ${nacl.nimetus}`);
    console.log(`Molekulmass: ${nacl.molekulmass}`);
}

const cao: AineKokkupanek | null = AineKokkupanek.kombineeri(caPositiivne, oNegatiivne);
if (cao) {
    console.log(`Kombineeritud aine: ${cao.nimetus}`);
    console.log(`Molekulmass: ${cao.molekulmass}`);
}
