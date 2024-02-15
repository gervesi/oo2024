class Grupp1{
  eesnimed:string[]=[];
  lisaEesnimi(eesnimi: string){
    //Lisa eesnimi vaid juhul, kui seda veel pole
    if(this.eesnimed.includes(eesnimi)){
      console.log(eesnimi+" juba olemas");
    } else {
      this.eesnimed.push(eesnimi);
    }
  }
  kysiEesnimed():string[]{return this.eesnimed;}
}

let g1=new Grupp1();
g1.lisaEesnimi("Juku");
g1.lisaEesnimi("Juku");
g1.lisaEesnimi("Kati");
console.log(g1.kysiEesnimed());