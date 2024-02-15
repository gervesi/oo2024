class Isik{
  constructor(protected eesnimi:string, protected synniaasta:number){}
  toString(){return this.eesnimi+" aastast "+this.synniaasta;}
  kasSarnane(isik:Isik){return this.eesnimi==isik.eesnimi;}
  kysiSynniaasta(){return this.synniaasta;}
}
//console.log(new Isik("Juku", 2010).toString());
console.log("teade: "+new Isik("Juku", 2010));

class Grupp{
  isikud:Isik[]=[];
  lisaIsik(isik: Isik){
    let puudu=true;
    for(let i of this.isikud){
      if(i.kasSarnane(isik)){puudu=false;}
    }
    if(puudu){
      this.isikud.push(isik);
    }
  }
  //Lisa käsklus suurima sünniaasta kuvamiseks
  kysiSuurimSynniaasta(){
    let suurim:number=-1;
    for(let isik of this.isikud){
      if(isik.kysiSynniaasta()>suurim){suurim=isik.kysiSynniaasta();}
    }
    return suurim;
  }
  kysiNoorimad():Isik[]{
    let noorimad:Isik[]=[];
    let suurimSynniaasta=this.kysiSuurimSynniaasta();
    if(suurimSynniaasta==-1){return noorimad;}
    for(let isik of this.isikud){
      if(isik.kysiSynniaasta()==suurimSynniaasta){
        noorimad.push(isik);
      }
    }
    return noorimad
  }
  kysiIsikud():Isik[]{return this.isikud;}
}

let g1=new Grupp();
g1.lisaIsik(new Isik("Juku", 2007));
g1.lisaIsik(new Isik("Juku", 2009));
g1.lisaIsik(new Isik("Kati", 2008));
g1.lisaIsik(new Isik("Mati", 2008));
console.log(g1.kysiIsikud());
console.log(g1.kysiSuurimSynniaasta());
console.log(g1.kysiNoorimad());