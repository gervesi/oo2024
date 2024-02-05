let intervallid:Map<string, number>=new Map();
intervallid.set("kvart",5);
intervallid.set("kvint",7);
intervallid.set("sekst",9);

console.log(intervallid.get("kvart"));


function intervallYles(noodinr:number, intervall:string){
  let nihe:number=0;
  if(intervall=="kvart"){nihe=5;}
  if(intervall=="kvint"){nihe=7;}
  if(intervall=="sekst"){nihe=9;}
  return noodinr+nihe
}

console.log(intervallYles(70, "kvart"));

function tahtnimetus(noodinr: number):string{
    if(noodinr==60){return "C";}
    if(noodinr==61){return "C#";}
    if(noodinr==62){return "D";}
    if(noodinr==63){return "Eb";}
    if(noodinr==64){return "E";}
    if(noodinr==65){return "F";}
    if(noodinr==66){return "F#";}
    if(noodinr==67){return "G";}
    if(noodinr==68){return "G#";}
    if(noodinr==69){return "A";}
    if(noodinr==70){return "B";}
    if(noodinr==71){return "H";}
    return "?";
}
console.log(tahtnimetus(intervallYles(65, "kvart")));