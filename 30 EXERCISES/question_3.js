// function combinator(str) {
//     let combinations = [];
//     for (let i = 0; i < str.length; i++) {
//         for (let j = i + 1; j < str.length + 1; j++) {
//             combinations.push(str.substring(i, j));
//         }
//     }
//     return combinations;
//     console.log(combinations);

// }
// console.log(combinator("dog"));
function combinator(str) {
    let combinations = [];
    for (let i = 0; i < str.length; i++) {
        for (let j = i + 1; j < str.length + 1; j++) {
            // combinations.push(str.substring(i, j));
            combinations.push(str.substring(i, j))
        }
    }
    return combinations;

    console.log(combinations);

}
console.log(combinator("NAME"));
console.log(all);