function palindrome(string){
    let strLength=string.length;
    let lastIndex=strLength-1;
    let firstIndex=0;
    while(lastIndex>firstIndex){
        if(string[lastIndex--]!=string[firstIndex++]){
            console.log(" is not  a palindrome");
            return;
        }
    }
    console.log("is a palindrome");
}
palindrome("madam")
