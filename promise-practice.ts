{                                        //1  contains type error - line#04  (idk why)
    let [rejHandler,resHandler] = [
        (reason:string):void =>{console.error(`exception> ${reason}`)},
        (value:string):void =>{console.warn(`success> ${value}`)}];
    let myPromise = new Promise((resolve:any,reject:any):void =>{
        let dataRetrieval:boolean = (function(x:number,y:number):boolean {return (Math.floor(Math.random()*(x-y+1)+y))==0?false:true})(1,0);
        setTimeout(()=>{
            dataRetrieval ? reject('error-message') : resolve('requested-data')},Math.floor(((Math.floor(99999)-Math.ceil(999))*Math.random())+Math.ceil(999)));
        });
        myPromise.then(resHandler).catch(rejHandler);
}
{                                        //2  type error resolved - line#15
    let [rejHandler,resHandler] = [
        (reason:string):void =>{console.error(`exception> ${reason}`)},
        (value:any):void =>{console.warn(`success> ${value}`)}];
    let myPromise = new Promise((resolve:any,reject:any):void =>{
        let dataRetrieval:boolean = (function(x:number,y:number):boolean {return (Math.floor(Math.random()*(x-y+1)+y))==0?false:true})(1,0);
        setTimeout(()=>{
            dataRetrieval ? reject('error-message') : resolve('requested-data')},Math.floor(((Math.floor(99999)-Math.ceil(999))*Math.random())+Math.ceil(999)));
        });
        myPromise.then(resHandler).catch(rejHandler);
}
