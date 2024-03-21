class Raamatukogu {
    private raamatud: Raamat[] = [];

    lisaRaamat(raamat: Raamat): void {
        this.raamatud.push(raamat);
    }

    trukiKataloog(): void {
        this.raamatud.forEach(raamat => console.log(raamat));
    }

    koguarv(): number {
        return this.raamatud.length;
    }

    otsiRaamat(pealkiri: string): void {
        const leitudRaamatud: Raamat[] = this.raamatud.filter(raamat =>
            raamat.pealkiri.toLowerCase().includes(pealkiri.toLowerCase())
        );
        if (leitudRaamatud.length > 0) {
            console.log(`Leitud raamatud pealkirjaga '${pealkiri}':`);
            leitudRaamatud.forEach(raamat => console.log(raamat));
        } else {
            console.log(`Raamatut pealkirjaga '${pealkiri}' ei leitud.`);
        }
    }
}

class Raamat {
    constructor(public pealkiri: string, public autor: string) {}

    toString(): string {
        return `${this.pealkiri} by ${this.autor}`;
    }
}

const raamatukogu = new Raamatukogu();
raamatukogu.lisaRaamat(new Raamat("Harry Potter and the Philosopher's Stone", "J.K. Rowling"));
raamatukogu.lisaRaamat(new Raamat("The Hobbit", "J.R.R. Tolkien"));
raamatukogu.lisaRaamat(new Raamat("The Lord of the Rings", "J.R.R. Tolkien"));

console.log("Raamatukogu koguarv:", raamatukogu.koguarv());
raamatukogu.trukiKataloog();

raamatukogu.otsiRaamat("the");
