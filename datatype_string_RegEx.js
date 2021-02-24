/* 
 * Test regular expression
 */

var str1 = "Hello World\n";
var pt = /[abcdel]/g
var str2 = str1.replace(pt, "X")

console.log("Original string: ", str1)
console.log("Replaced string", str2)
