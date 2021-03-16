// Use back tick to inline variable
var my_name = "John";
var s = `My name is ${my_name}.`
console.assert(s == "My name is John.");

// String concatenation.
var i = 5;
var s2 = s + "I'm " + i + " years old.";
console.assert(s2 = "My name is John.I'm 5 years old.");
