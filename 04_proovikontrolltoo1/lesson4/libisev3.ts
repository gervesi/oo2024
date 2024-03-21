class libisevArvutus{
  sisend:number[]=[];
  valjund:number[]=[];
  lisa(arv:number){
    this.sisend.push(arv);
    if(this.sisend.length>2){
      let n=this.sisend.length;
      this.valjund.push((this.sisend[n-1]+ this.sisend[n-2]+ this.sisend[n-3])/3);
    }
  }
  kysiValjund(){return this.valjund;}
}

let arvutaja=new libisevArvutus();
arvutaja.lisa(3);
arvutaja.lisa(3);
arvutaja.lisa(4);
arvutaja.lisa(5);
arvutaja.lisa(5);
console.log(arvutaja.kysiValjund());