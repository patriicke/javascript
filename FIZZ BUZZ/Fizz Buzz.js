function fizzBuzz(range) {
    let array = [];
    for (let i = 1; i <= range; i++) {
        array.push(i);
    }
    let arrLength = array.length;
    let counter;
    for (counter = 0; counter <= arrLength - 1; counter++) {
        // if (array[counter] % 5 == 0 && array[counter] % 3 == 0) you can also use this but it's not professonal since we've discoverd that the numbet that is...
        if (array[counter] % 15 == 0) {

            console.log(`${array[counter]}: Fizz Buzz`)
        } else if (array[counter] % 3 == 0) {
            console.log(`${array[counter]}: Is Fizz`)
        } else if (array[counter] % 5 == 0) {
            console.log(`${array[counter]}: Is Buzz`)
        } else {
            console.log(`${array[counter]}: Is not Fizz or Buzz`)
        }

    }
}
fizzBuzz(100)