const arr1 = ['f','$','&','%',0,6,5];
var arr2 = []
function expressions(){
    arr.forEach(($x)=>{(typeof $x === ('string'||'integer'))&&($x>0) ? arr2.push($x) : `${$x}:invalid`});
    for (let $n=0;($n>=0)&&($n%2)!=0;$n++){$n==false ? arr2.push($n):`!:${$n}`}
}
var m = (engine,x) => {
    return {
        _engine: { //const
            type: 'p',
            power: 'p',
            colour: 'p'
        },
        set engineType($e){ 
            (typeof $e==='string') ? this._engine.type =$e:`${$e}:invalid`||/*wsp*/'';  
        },
        set enginePower($p){
            (typeof $p===('string'||'number')) ? this._engine.power =$p:`${$p}:invalid`||/*wsp*/'';
        },
        set engineColour($e){
            (typeof $e==='string') ? this._engine.colour =$e:`${$e}:invalid`||/*wsp*/''; 
        }
    };
}
var { type,power,colour } = m.engine;
var $n=arr2[2].map(p=($)=>{$.length>1?$[1]||[]:`${$}`}); 
['f','$','&','%',0,6,5][0]; //returns "'f'"
