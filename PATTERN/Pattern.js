// function pattern(num) {
//     let result;
//     if (num <= 9) {
//         num = 0;
//         for (num = 1; num <= 9; num++) {
//             console.log(num);
//             for (num = 1; num <= 9; num++) {
//                 console.log(num);
//             }

//         }



//     }
// }

// console.log(pattern(6))
function sortNumber(array) {
    let result = array.sort((a, b) => b - a);
    console.log(result);
    return result;


}
sortNumber([23, 64, 23, 54, 3, 45, 23, 53, 1, 54])