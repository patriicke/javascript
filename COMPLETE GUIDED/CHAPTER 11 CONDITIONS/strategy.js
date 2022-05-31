const animalSays={
    dog(){
        return 'woof';
    },
    cat(){
        return 'meow';
    },
    lion(){
        return 'roar';
    },
    default(){
        return 'has no sound in our program';
    }
}
function makeAnimalSpeak(animal){
    const speak=animalSays[animal]||animalSays.default;
    console.log(animal + " says " + speak());
}
makeAnimalSpeak('lion');