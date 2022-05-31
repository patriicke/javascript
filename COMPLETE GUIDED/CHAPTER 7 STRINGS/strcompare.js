function strcompare(str1,str2){
    if(str1===str2){
        return 0;
    }
    if(str1>str2){
        return 1;
    }
    return -1;
}
console.log(strcompare("hello","hello"));
console.log(strcompare("hello","world"));
console.log(strcompare("world","hello"));

//This is also another simple way of using localeCompare();


const str1="hello";
const str2="world";
console.log(str1.localeCompare(str2));