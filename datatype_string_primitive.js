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
var s1 = '\\n is a line feed.';
console.assert(s1 == String.raw`\n is a line feed.`); 

// Use back tick to inline variable
var my_name = "John";
console.assert(`My name is ${my_name}.` == "My name is John.");

// Replace
var s1 = 'hello hello'
console.assert(s1.replace("el", "abc") == "habclo habclo");
