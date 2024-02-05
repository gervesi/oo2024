let ridu:number=7, veerge:number=8;
for(let rida:number=1; rida<=ridu; rida++){
  let reastr:string="";
  for(let veerg:number=1; veerg<=veerge; veerg++){
    //reastr+=rida*veerg+" ";
      reastr+=(rida*veerg).toString().padStart(4);
  }
  console.log(reastr);
}