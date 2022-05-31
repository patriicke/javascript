let myFunction = new Promise((resolve, reject) => {
    let a = 5;
    if (a == 5) {
        resolve("Success");
    } else {
        reject("Failed")
    }
})
myFunction.then(data => {
    console.log(data);
}).catch((err) => {
    console.log(err);
})