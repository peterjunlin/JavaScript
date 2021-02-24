/* 
 * Test data type
 */

console.log("\nDefault value")
var a1;
console.log("[var a1]", a1)

console.log("\nCreate Boolean")
var tf = new Boolean();
console.log("Type of [new Boolean()]:", typeof tf)
console.log("Value of tf:", tf)

console.log("\nTest Number")
console.log("Number.MAX_SAFE_INTEGER", Number.MAX_SAFE_INTEGER)
console.log("Number.MIN_SAFE_INTEGER", Number.MIN_SAFE_INTEGER)

console.log("\nTest float number")
console.log("10e1 = ", 10e1)
console.log("Number.MAX_VALUE = ", Number.MAX_VALUE)
console.log("Number.MIN_VALUE = ", Number.MIN_VALUE)
console.log("Number.EPSILON = ", Number.EPSILON)
a = 1.123
b = a + 0.0001
b = b - 0.0001
console.log(a, b)
a==b ? console.log("equal") : console.log("not equal")
