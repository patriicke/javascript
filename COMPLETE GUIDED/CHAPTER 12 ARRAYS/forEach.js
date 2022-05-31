//Find how many times a letter appears in an array
let letters=['a','b','c','a','a','b','a'];
let count={};
letters.forEach((item)=>{
    if(count[item]){
        count[item]++;
    }else{
        count[item]=1;
    }
})
console.log(count)