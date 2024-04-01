// Create an object Calculator with methods add, subtract, multiply, and divide. Demonstrate the usage of this
// within these methods such that method chaining of add, subtract, multiply and divide is possible.


var Calculator = {
    // Method to add numbers
    add: function(num) {
        this.result += num;
        return this; // Return the Calculator object to enable method chaining
    },
    // Method to subtract numbers
    subtract: function(num) {
        this.result -= num;
        return this; // Return the Calculator object to enable method chaining
    },
    // Method to multiply numbers
    multiply: function(num) {
        this.result *= num;
        return this; // Return the Calculator object to enable method chaining
    },
    // Method to divide numbers
    divide: function(num) {
        this.result /= num;
        return this; // Return the Calculator object to enable method chaining
    },
    // Method to initialize result
    initialize: function(num) {
        this.result = num;
        return this; // Return the Calculator object to enable method chaining
    },
    // Method to get the result
    getResult: function() {
        return this.result;
    }
};


var result = Calculator.initialize(10)
                        .add(5)
                        .subtract(3)
                        .multiply(2)
                        .divide(4)
                        .getResult();

console.log("Result:", result); 
