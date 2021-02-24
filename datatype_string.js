/* 
 * Test string
 */

console.log("\nTest template")
var s1 = `\\n is a line feed: a\nbc`
console.log(s1)
var name = "John"
var s1 = `name is \${name}: ${name}`
console.log(s1)

console.log("\nTest string properties")
var s1 = 'hello'
console.log(s1, "length is", s1.length)

console.log("\nTest string replace")
var s1 = 'hello hello'
var s2 = s1.replace("el", "abc")
console.log("Original string is: ", s1) 
console.log("Replaced string is", s2)
