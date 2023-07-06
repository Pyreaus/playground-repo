function getScriptName() {
    var error = new Error()
      , source
      , lastStackFrameRegex = new RegExp(/.+\/(.*?):\d+(:\d+)*$/)
      , currentStackFrameRegex = new RegExp(/getScriptName \(.+\/(.*):\d+:\d+\)/);

    if((source = lastStackFrameRegex.exec(error.stack.trim())) && source[1] != "")
        return source[1];
    else if((source = currentStackFrameRegex.exec(error.stack.trim())))
        return source[1];
    else if(error.fileName != undefined)
        return error.fileName;
}
console.warn(`successfully loaded:\u00A0${getScriptName()}`)

var x = 100, [d,n]=[0,2], fd;
var [n
    , dd
    , fdd
] = [101,01];
// console.log(`G1:${n}${dd}${fdd}\u00A0G2:${x}${d}{fd}`);
                                                                     //delete later 
const tuple: [string,number,boolean] = ['0',0,false]; 
let par: any[] = [0,0,0];

let xor: boolean[] = [];
for (let i = 0; i < 4; i++) {
    xor[i] = Math.random() < 0.5 ? true : false; 
}
type Family<T> = {
    parents: [T, T], mate: T, children: T[]
  };
let theObj: {par1:string,par2:number};
theObj = {par1:'1',par2:1000};         //the object past must be completely identical

(function test(par2:number=2,myObj3:{par1:string,par2:number},par1?:string):number {
    console.warn(myObj3); 
    return par2;
})(10000,theObj,'x');
