// Define a base class Shape with a method draw. Create two subclasses Circle and Rectangle that override
// the draw method. Demonstrate polymorphism using instances of these classes.


class Shape {
    // Method to draw shape
    draw() {
        console.log("Drawing a generic shape.");
    }
}

// Subclass Circle
class Circle extends Shape {
    // Override draw method for Circle
    draw() {
        console.log("Drawing a circle.");
    }
}

// Subclass Rectangle
class Rectangle extends Shape {
    // Override draw method for Rectangle
    draw() {
        console.log("Drawing a rectangle.");
    }
}

// Demonstrate polymorphism
const shape1 = new Shape();
const circle1 = new Circle();
const rectangle1 = new Rectangle();

shape1.draw();      
circle1.draw();     
rectangle1.draw();  
