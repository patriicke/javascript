const names=["Patrick","Pacifique","Prince","Promise","Pedrazza","Alice","Benitha"];
const sortedNames=names.sort((a,b)=>{
    return a.localeCompare(b);
})
console.log(sortedNames);