class LibisevKeskmine {
    private arvud: number[];
    private keskmised: number[];

    constructor() {
        this.arvud = [];
        this.keskmised = [];
    }

    lisaArv(arv: number): void {
        this.arvud.push(arv);
        const n = this.arvud.length;

        if (n >= 3) {
            if (n === 3) {
                this.keskmised.push((this.arvud[0] + this.arvud[1] + this.arvud[2]) / 3);
            } else {
                const uusKeskmine = (this.keskmised[n - 4] * 3 - this.arvud[n - 4] + this.arvud[n - 1]) / 3;
                this.keskmised.push(uusKeskmine);
            }
        }
    }

    saaKeskmised(): number[] {
        return this.keskmised;
    }
}


const libisevKeskmine = new LibisevKeskmine();
libisevKeskmine.lisaArv(1);
libisevKeskmine.lisaArv(2);
libisevKeskmine.lisaArv(3);
libisevKeskmine.lisaArv(4);
libisevKeskmine.lisaArv(5);
libisevKeskmine.lisaArv(6);
libisevKeskmine.lisaArv(7);

const keskmised = libisevKeskmine.saaKeskmised();
console.log( keskmised);
