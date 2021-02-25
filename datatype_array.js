// Array literal
var arr1 = [1, 2, 3]
console.assert(arr1.length == 3);

// Create array by size
var arr2 = new Array(3);
console.assert(arr2.length == 3);
console.assert(arr2[0] == undefined);

// Get length
var arr1 = ["George", "Thomas Edson", "John"];
console.assert(arr1.length == 3);

// map to function.
let sum = 0;
[1, 2].forEach((element) => {sum += element});
console.assert(sum == 3);

// Concat two array.
var arr1 = ["George", "John", "Thomas"];
var arr2 = ["James", "Adrew", "Martin", "John"];
var arr3 = arr1.concat(arr2)
console.assert(
  JSON.stringify(arr3) == JSON.stringify(['George', 'John', 'Thomas', 'James', 'Adrew',  'Martin', 'John']));

// Join two string arrays as a string.
var arr1 = ["George", "John", "Thomas"];
console.assert(arr1.join('.') == "George.John.Thomas");

// Pop last element.
var arr1 = ["George", "John", "Thomas"];
console.assert(arr1.pop() == "Thomas");

// Push one element to the end and return new length.
var arr1 = ["George", "John", "Thomas"];
var i = arr1.push("Pushed element")
console.assert(i == 4);
console.assert(arr1[i - 1] == "Pushed element");

// Shift to left, return outed element
var arr1 = ["George", "John", "Thomas"];
var s = arr1.shift()
console.assert(s == "George");
console.assert(arr1.length == 2);

// Shift to right
var arr1 = ["George", "John", "Thomas"];
var i = arr1.unshift("Peter")
console.assert(i == 4);
console.assert( JSON.stringify(arr1) == JSON.stringify(["Peter", "George", "John", "Thomas"]));

// Reverse the order in place.
var arr1 = ["George", "John", "Thomas"];
arr1.reverse()
console.assert(JSON.stringify(arr1) == JSON.stringify(["Thomas", "John", "George"]))

// Slice
var arr1 = ["George", "John", "Thomas"];
console.assert(JSON.stringify(arr1.slice(1,2)) == JSON.stringify(["John"]));

// Sort in place
var arr1 = ["George", "Thomas", "John"];
arr1.sort()
console.assert(JSON.stringify(arr1) == JSON.stringify(["George", "John", "Thomas"]))

// Supply comparison function to Sort, in place.
var arr1 = ["George", "Thomas Edson", "John"];
function sortMethod(a,b) {
  return (a.length < b.length ? 1 : -1)
}
arr1.sort(sortMethod);
console.assert(JSON.stringify(arr1) == JSON.stringify([ 'Thomas Edson', 'George', 'John' ]))

// Replace
var arr1 = ["George", "Thomas Edson", "John"];
arr1.splice(1, 1, "abc", "def")
console.assert(JSON.stringify(arr1) == JSON.stringify([ 'George', 'abc', 'def', 'John' ]))
