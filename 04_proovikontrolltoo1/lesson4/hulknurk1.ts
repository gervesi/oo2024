class Kolmnurk {
    xkoord: number[];
    ykoord: number[];

    constructor(xkoord: number[], ykoord: number[]) {
        this.xkoord = xkoord;
        this.ykoord = ykoord;
    }
    lisaPunkt(x: number, y: number) {
            this.xkoord.push(x);
            this.ykoord.push(y);
        }

        ümbermõõt(): number {
            let ümbermõõt = 0;
            const punktideArv = this.xkoord.length;
            for (let i = 0; i < punktideArv; i++) {
                
                const järgmineIndeks = (i + 1) % punktideArv; 
                const xErinevus = this.xkoord[järgmineIndeks] - this.xkoord[i];
                const yErinevus = this.ykoord[järgmineIndeks] - this.ykoord[i];
                ümbermõõt += Math.sqrt(xErinevus ** 2 + yErinevus ** 2); 
            }
            return ümbermõõt;
        }
            nihuta(dx: number, dy: number) {
        for (let i = 0; i < this.xkoord.length; i++) {
            this.xkoord[i] += dx;
            this.ykoord[i] += dy;
        }
    }

    suurendaVähenda(suurendusKordaja: number) {
        for (let i = 0; i < this.xkoord.length; i++) {
            this.xkoord[i] *= suurendusKordaja;
            this.ykoord[i] *= suurendusKordaja;
        }
    }

    küsiUuedAsukohad(uuedXKoord: number[], uuedYKoord: number[]) {
        this.xkoord = uuedXKoord;
        this.ykoord = uuedYKoord;
    }

    küsiKülgedePikkused(uuedKüljepikkused: number[]) {
        console.log("Uued küljepikkused:", uuedKüljepikkused);
    }

    trükiKoord() {
        console.log("X koordinaadid:", this.xkoord);
        console.log("Y koordinaadid:", this.ykoord);
    }
}

const kolmnurk = new Kolmnurk([0, 1, 2], [0, 1, 0]);

kolmnurk.lisaPunkt(3, 0);
kolmnurk.trükiKoord();

console.log("Kolmnurga ümbermõõt:", kolmnurk.ümbermõõt());

kolmnurk.nihuta(2, 3);
console.log("Pärast nihutamist:");
kolmnurk.trükiKoord();

kolmnurk.suurendaVähenda(2);
console.log("Pärast suurendamist:");
kolmnurk.trükiKoord();

kolmnurk.küsiUuedAsukohad([1, 3, 5], [1, 3, 1]);
kolmnurk.küsiKülgedePikkused([2, 4, 6]);
console.log("Pärast uute asukohtade ja külgede pikkuste küsimist:");
kolmnurk.trükiKoord();

console.log("Kolmnurga ümbermõõt:", kolmnurk.ümbermõõt());
