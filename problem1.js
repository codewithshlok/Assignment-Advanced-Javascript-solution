// Create an object constructor Person that takes name and age as parameters and initializes them. Also, add
// a method sayHello to greet the person.


function Person(name, age) {
    this.name = name;
    this.age = age;
}


Person.prototype.sayHello = function() {
    console.log('Hello, my name is ' + this.name + ' and I am ' + this.age + ' years old.');
};

var person1 = new Person('Alice', 30);
var person2 = new Person('Bob', 25);

person1.sayHello(); 
person2.sayHello(); 

