let letters = ['a', 'a', 'b', 'a', 'b', 'c', 'd', 'd'];
let count = {};
letters.forEach(item => {
    if (count[item]) {
        count[item]++;
    } else {
        count[item] = 1;
    }
})
console.log(count)