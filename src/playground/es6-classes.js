class Person{
    constructor(name='Anonymous',age=0){
        this.age=age;
        this.name=name;
    }
    getDescription(){
        return `This is ${this.name} and he is ${this.age} year(s) Old.`;
    }
    getGreetings(){
        return `This is ${this.name}!`;
    }
}

class Travellar extends Person{
    constructor(name,age,homelocation){
        super(name,age);
        this.homelocation=homelocation;
    }
    hasHomelocation(){
        return !!this.homelocation;
    }
    getGreetings(){
        let greetings = super.getGreetings();
        /* if(this.hasHomelocation()){
            greetings+=`I am visiting from ${this.homelocation}.`;
        } */
        return (this.hasHomelocation())?(greetings+=`I am visiting from ${this.homelocation}.`):(greetings);
        //return greetings;
    }
}
const me=new Person('Azman Hossain',23);
const him=new Travellar('Antora',22,'Mirpur');
console.log(me.getGreetings());
console.log(me.getDescription());
console.log(him.getGreetings());