let n = 6;
let string = "";
for (let i = 1; i <= n; i++) {
    for (let j = 0; j < n - 1; j++) {
        string += " "
    }
    for (let k = 0; k < i; k++) {
        string += "*"
    }
    string += "\n"
}
console.log(string)