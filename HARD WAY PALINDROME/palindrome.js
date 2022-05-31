function palindrome(string){
let result="";
let strLength=string.length;
if(strLength%2==0){
let strConcat=string.substring(0,strLength/2);
let strConcat1=string.substring(strLength/2);
let strConcat1rev=strConcat1.split('').reverse().join('');
if(strConcat===strConcat1rev){
result="This is a palindrome ";
}else{
    result="This is not a palindrome";
}
}else if(strLength%2!=0){
    let strConcatodd=string.substring(0,Math.floor(strLength/2));
    let strConcatodd1=string.substring(Math.floor(strLength/2+1));
    let strConcatodd1rev=strConcatodd1.split('').reverse().join('');
    if(strConcatodd===strConcatodd1rev){
        result="This is a palindrome";
    }else{
        result="This is not a palindrome"
    }
}
else{
    result="This is not a palindrome"
        }
console.log(result);
return result;
}
palindrome("man");
