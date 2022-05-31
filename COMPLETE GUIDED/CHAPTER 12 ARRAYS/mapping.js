const names=['Patrick','Pacifique','Prince','Fabrice','Aliane','Jane'];
const mapped=names.map((value,index,array)=>{
    return value.length;
})
console.log(mapped)
const colors=['red','green','blue'];
let liColors=colors.map(value=>`<li>${value}</li>`);
console.log(liColors);