let numbers=[2,4,5,1,2,1,4,6,9,5,6];
let dupRemoved=numbers.filter((value,index,arr)=>{
    return arr.indexOf(value)===index;
})
console.log(dupRemoved);