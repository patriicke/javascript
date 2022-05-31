let numbers=[1,2,3,4,5,6,7,8,9];
numbers.every((value,index,array)=>{
    console.log(`index: = ${index} value:${value}`);
    return array.length>10
})