let array = [
    ["name: Pazzo", "class: 1A", "number: 23"],
    ["name: Precieux", "class: 1B", "number: 30"],
    ["name: Prince", "class: 1C", "number: 34"],
    ["name: Paccy", "class: 2A", "number: 43", "age: 34 "],
    ["name: Promisse", "class: 3A", "number: 53"]
];
for (let i = 0; i < array.length; i++) {
    if (i > 0) {
        console.log("-------------------------------------------")
    }
    for (let j = 0; j, j < array[i].length; j++) {
        console.log(array[i][j]);
    }
}