// Primitive number
console.assert(typeof 5 == 'number');

// Use isNaN() instead of x == NaN
console.assert("abc" != NaN);  // this won't be able to check.

console.assert(isNaN("abc"));
console.assert(isNaN("123.123a"));
console.assert(isNaN("123 123"));

console.assert(!isNaN("123"));
console.assert(!isNaN("123.123"));

// float number
f = 10e1;
f = 1.123;
