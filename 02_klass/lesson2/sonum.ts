class Sonum {
    sisu: string;
    autor: string;
    aeg: number;
    likes: number;

    constructor(sisu: string, autor: string, aeg: number, likes: number) {
        this.sisu = sisu;
        this.autor = autor;
        this.aeg = aeg;
        this.likes = likes;
    }

    kysiPopulaarsus(): number {
      return this.likes / this.aeg;
    }
}

let s1 = new Sonum("Tere maailm!", "Kasutaja123", 4, 2);
console.log(s1.sisu, s1.kysiPopulaarsus());
