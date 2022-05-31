// let json='{"age":30,"name": "Patrick"}';
let json='{"age":30}';
try {
    let user=JSON.parse(json);
    if(!user.name){
        throw new SyntaxError("Incomplete date: There is no username");
    }
    console.log(user.name);
} catch (error) {
    console.log(`JSON error: ${error.message}`)
}finally{
    console.log("There was a certain error")
}