// dummy.js

// A dummy function that adds two numbers
function add(a, b) {
    return a + b;
}

// A dummy function that checks if a number is even
function isEven(num) {
    return num % 2 === 0;
}

// A dummy class
class Dummy {
    constructor(name) {
        this.name = name;
    }

    greet() {
        console.log(`Hello, ${this.name}!`);
    }
}

// Example usage
const dummy = new Dummy("SonarQube");
dummy.greet();
console.log("2 + 3 =", add(2, 3));
console.log("Is 4 even?", isEven(4));

