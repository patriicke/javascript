//We use strin.raw to get backslashes in the string without modification
const string=`a\\a`;
console.log(string)// output is a\a;
const stringRaw=String.raw`a\\a`;
console.log(stringRaw)