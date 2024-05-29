class Toode {
    constructor(
        public id: number,
        public nimi: string,
        public kirjeldus: string,
        public hind: number
    ) {}
}

class Hoidla {
    private tooted: Toode[] = [];
    private jargmineId: number = 1;

    lisaToode(nimi: string, kirjeldus: string, hind: number): Toode {
        const toode = new Toode(this.jargmineId++, nimi, kirjeldus, hind);
        this.tooted.push(toode);
        return toode;
    }

    saaToodeIdJargi(id: number): Toode | undefined {
        return this.tooted.find(toode => toode.id === id);
    }

    saaKoikTooted(): Toode[] {
        return this.tooted;
    }

    uuendaToode(id: number, nimi: string, kirjeldus: string, hind: number): Toode | undefined {
        const toode = this.saaToodeIdJargi(id);
        if (toode) {
            toode.nimi = nimi;
            toode.kirjeldus = kirjeldus;
            toode.hind = hind;
        }
        return toode;
    }

    kustutaToode(id: number): boolean {
        const indeks = this.tooted.findIndex(toode => toode.id === id);
        if (indeks !== -1) {
            this.tooted.splice(indeks, 1);
            return true;
        }
        return false;
    }
}

const hoidla = new Hoidla();

const toode1 = hoidla.lisaToode("Leib", "Rukkileib", 1.20);
const toode2 = hoidla.lisaToode("Piim", "Täispiim 1L", 0.80);

console.log("Kõik tooted peale lisamist:");
console.log(hoidla.saaKoikTooted());

hoidla.uuendaToode(toode2.id, "Piim", "Täispiim 1L", 0.85);

console.log("Kõik tooted peale teise toote uuendamist:");
console.log(hoidla.saaKoikTooted());

hoidla.kustutaToode(toode1.id);

console.log("Kõik tooted peale esimese toote kustutamist:");
console.log(hoidla.saaKoikTooted());

const kustutatudToode = hoidla.saaToodeIdJargi(toode1.id);
if (!kustutatudToode) {
    console.log(`Toodet ID-ga ${toode1.id} ei leitud`);
}
