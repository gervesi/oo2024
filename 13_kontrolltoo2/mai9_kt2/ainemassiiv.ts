interface Ioni {
    nimetus: string;
    aatommassideSumma: number;
    loeng: number;
}

class Ioon implements Ioni {
    constructor(public nimetus: string, public aatommassideSumma: number, public loeng: number) {}
}

interface Aine {
    nimetus: string;
    molekulmass: number;
}

class AineMassiiviKokkupanek implements Aine {
    constructor(public nimetus: string, public molekulmass: number) {}
    static kombineeri(ioonid: Ioni[]): AineMassiiviKokkupanek | null {
        let laengudeSumma = 0;
        for (const ioon of ioonid) {
            laengudeSumma += ioon.loeng;
        }
        if (laengudeSumma !== 0) {
            console.log("Laengute summa ei ole 0!");
            return null;
        }

        let nimetusMap = new Map<string, number>();
        for (const ioon of ioonid) {
            let iooniNimetus = ioon.nimetus.replace(/[0-9+−-]/g, '');
            if (nimetusMap.has(iooniNimetus)) {
                nimetusMap.set(iooniNimetus, nimetusMap.get(iooniNimetus)! + 1);
            } else {
                nimetusMap.set(iooniNimetus, 1);
            }
        }

        let nimetus = '';
        nimetusMap.forEach((kordusteArv, iooniNimetus) => {
            if (kordusteArv > 1) {
                nimetus += `${iooniNimetus}${kordusteArv}`;
            } else {
                nimetus += iooniNimetus;
            }
        });

        let molekulmass = 0;
        for (const ioon of ioonid) {
            molekulmass += ioon.aatommassideSumma;
        }

        return new AineMassiiviKokkupanek(nimetus, molekulmass);
    }
}


const ioonid: Ioni[] = [];

function lisaIoon(ioon: Ioni): void {
    ioonid.push(ioon);
    console.log(`Ioon "${ioon.nimetus}" lisatud.`);
}

function kombineeriAine(): void {
    const aine: AineMassiiviKokkupanek | null = AineMassiiviKokkupanek.kombineeri(ioonid);
    if (aine) {
        console.log(`Kombineeritud aine: ${aine.nimetus}`);
        console.log(`Molekulmass: ${aine.molekulmass}`);
    } else {
        console.log("Ioonide kombinatsioonist ei saa moodustada ainet!");
    }
}

lisaIoon({ nimetus: "Ca2+", aatommassideSumma: 40, loeng: 2 });
lisaIoon({ nimetus: "Cl-", aatommassideSumma: 35.5, loeng: -1 });
lisaIoon({ nimetus: "Cl-", aatommassideSumma: 35.5, loeng: -1 });

kombineeriAine();