// Create a constructor Employee that inherits from the Person constructor of problem 1. Add an additional
// property designation and a method getDetails to display the employee details.


function Person(name, age) {
    this.name = name;
    this.age = age;
}


Person.prototype.sayHello = function() {
    console.log('Hello, my name is ' + this.name + ' and I am ' + this.age + ' years old.');
};


function Employee(name, age, designation) {
    Person.call(this, name, age);
    this.designation = designation;
}


Employee.prototype = Object.create(Person.prototype);
Employee.prototype.constructor = Employee;


Employee.prototype.getDetails = function() {
    console.log('Employee Name:', this.name);
    console.log('Employee Age:', this.age);
    console.log('Employee Designation:', this.designation);
};

var employee1 = new Employee('John', 35, 'Software Engineer');
var employee2 = new Employee('Alice', 28, 'Product Manager');

employee1.sayHello(); 
employee1.getDetails(); 

employee2.sayHello(); 
employee2.getDetails(); 
