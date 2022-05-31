let startTime,endTime;
function slowFunction(n){
    let x=2, y=3 ,z=0;
    for(let i=0;i<n;i++){
        for(let j=0; j<n; j++){
            z = x*y;
        }
    }
    return z+n;
}
startTime=performance.now()
console.log(slowFunction(100000))
endTime=performance.now();
console.log(`Elapsed time is: ${Math.round(endTime -startTime)/1000} seconds`)