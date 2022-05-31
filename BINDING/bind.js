const person={
    name:"Patrick",
    talk(){
        console.log(this);
    }
}
person.talk()
const talk=person.talk.bind(person);
talk()