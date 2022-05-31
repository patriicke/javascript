class Person{
    constructor(name){
        this.name=name;
    }
    walk(){
        console.log("Walk");
    }
}
class Teacher extends Person{
    constructor(name,age){
        super(name);
        this.age=age;
    }
    teach(){
        console.log("Teach");
    }
}
const teacher1=new Teacher("Patrick",20);
console.log(teacher1)