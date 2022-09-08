function returnFilledArray<T>(value: T[], n: number): T[] {
  return Array(n).fill(value[0]);
}
  
function map<T1,T2>(arr:T1[],func:(arg: T1)=>T2):T2[] | undefined {
  return arr.map(func);
}
map(['3','1','4'],(n='1')=>{parseFloat(n)}); 
