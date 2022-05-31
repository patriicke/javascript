let letters = ['a', 'b', 'a', 'c', 'c', 'a', 'd', 'e'];
let count = {};
letters.forEach(item => {
    if (count[item]) {
        count[item] = count[item] + 1;
    } else {
        count[item] = 1;
    }
})
console.log(count);