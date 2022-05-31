class Person{
    constructor(name){
        this.name=name;
        }
    walk(){
        console.log("Walk");
    }
} person();
class Teacher extends person(){
    constructor(name,age){
        super(name);
        this.age=age;
    }
    teach(){
        console.log("Teach");
    }
}
const teacher1=new Teacher("Patrick",23)
console.log(teacher1);