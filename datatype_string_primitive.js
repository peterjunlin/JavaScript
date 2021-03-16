// String is immutable.

// String literal
s1 = 'abc';
s2 = "abc";
s3 = String.raw`\n is a line feed.`; // note: use back tick for raw string literal.

// String type
console.assert(typeof 'abc' == 'string');

// Length of string
var s1 = 'hello';
console.assert(s1.length == 5);

// Escape character
var s1 = '\\n is a line feed.';  // special character
console.assert(s1 == String.raw`\n is a line feed.`); 
var s1 = '\xA9';  // "©", hexadecimal sequence
var s1 = '\u{2F804}';  // unicode sequence method 1
var s1 = '\uD87E\uDC04';  // unicode sequence method 2

// Use back tick to inline variable
var my_name = "John";
console.assert(`My name is ${my_name}.` == "My name is John.");

// access by using indexer
var my_name = "John";
console.assert(my_name[0] == "J");

// Replace first found
var s1 = 'hello hello'
s2 = s1.replace("el", "abc");
console.assert(s2 == "habclo hello");
