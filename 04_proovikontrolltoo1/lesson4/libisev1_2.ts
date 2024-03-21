function arvuta1(a: number, b: number, c: number): number {
    return (a + b + c) / 3;
}

function arvuta2(sisendm:number[]){
  let vastus:number[]=[]
  for(let i=0; i<sisendm.lenght-2; i++){
    vastus.push(arvuta1(sisendm[i], sisend[i+1], sisendm[i+2]));
  }
  return vastus;
}

console.log(arvuta1(3, 4, 5));
Console.log(arvuta2([3,3,2,7,7,8]));