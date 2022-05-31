function addNumbers(...params) {
    let result;
    for (param of params) result += param;

    console.log(result);
    return result;

}
addNumbers(23, 34, 23, 43)