// Math

// Bitwise

// typeof operator
console.assert(typeof 42 == "number");
console.assert(typeof 'blubber', "string");
console.assert(typeof true == "boolean");
console.assert(typeof undeclaredVariable == "undefined")

// instanceof - operator to find match in protype chain
function Car(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
}
const auto = new Car('Honda', 'Accord', 1998);
console.assert(auto instanceof Car);
console.assert(auto instanceof Object);
