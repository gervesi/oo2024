class Sonum {
   constructor(protected sisu: string, protected autor: string, 
   protected aeg: number, protected likes: number){

    }

    kysiPopulaarsus(): number {
      return this.likes / this.aeg;
    }
    kysiSisu(){return this.sisu;}
    lisaMeeldimine(){
//     this.likes=this.likes+1;
      this.likes++;
    }
}

let s1 = new Sonum("Tere maailm!", "Kasutaja123", 4, 2);
let s2 = new Sonum("Tere!", "Kasutaja123", 5, 1);
console.log(s1.kysiSisu(), s1.kysiPopulaarsus());
s1.lisaMeeldimine();
console.log(s1.kysiPopulaarsus(), s2.kysiPopulaarsus());
