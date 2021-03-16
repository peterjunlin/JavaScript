// Function as class.

// Define constructor function.
function Person() {
    this.firstname = 'John';
    this.lastname = 'Smith';
}

// Add methods to prototype.
Person.prototype.sayHi = function() {
    console.log('Hi');
}

var john = new Person();
john.sayHi();
