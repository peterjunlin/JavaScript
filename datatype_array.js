// Create array literal
var arr1 = [1, 2, 3]
console.assert(arr1.length == 3);

// Create array by size
var arr2 = new Array(3);
console.assert(arr2.length == 3);

return;

// map to function.
let sum = 0;
[1, 2].forEach((element) => {sum += element});
console.assert(sum == 3);

// Concat two array.
var arr1 = new Array(3)
arr1[0] = "George"
arr1[1] = "John"
arr1[2] = "Thomas"
var arr2 = new Array(4)
arr2[0] = "James"
arr2[1] = "Adrew"
arr2[2] = "Martin"
arr2[3] = "John"
var arr3 = arr1.concat(arr2)
console.log(arr1)
console.log(arr2)
console.log(arr3)

console.log("\nJoin two string arrays as string")
var arr1 = new Array(3)
arr1[0] = "George"
arr1[1] = "John"
arr1[2] = "Thomas"
var s1 = arr1.join('.')
console.log(s1)

console.log("\nPop last element")
var arr1 = new Array(3)
arr1[0] = "George"
arr1[1] = "John"
arr1[2] = "Thomas"
var s1 = arr1.pop()
console.log(s1)

console.log("\nPush one element")
var arr1 = new Array(3)
arr1[0] = "George"
arr1[1] = "John"
arr1[2] = "Thomas"
var i = arr1.push("Pushed element")
console.log("Returned value = ", i)
console.log(arr1)

console.log("\nReverse the order")
var arr1 = new Array(3)
arr1[0] = "George"
arr1[1] = "John"
arr1[2] = "Thomas"
console.log(arr1)
arr1.reverse()
console.log(arr1)

console.log("\nShift to left")
var arr1 = new Array(3)
arr1[0] = "George"
arr1[1] = "John"
arr1[2] = "Thomas"
console.log(arr1)
var s = arr1.shift()
console.log(arr1)
console.log("Returned: ", s)

console.log("\nShift to right")
var arr1 = new Array(3)
arr1[0] = "George"
arr1[1] = "John"
arr1[2] = "Thomas"
console.log(arr1)
var l = arr1.unshift("abc")
console.log(arr1)
console.log("Returned: ", l)

console.log("\nSlice")
var arr1 = new Array(3)
arr1[0] = "George"
arr1[1] = "John"
arr1[2] = "Thomas"
console.log(arr1)
var arr2 = arr1.slice(1,2)
console.log(arr2)

console.log("\nSort")
var arr1 = new Array(3)
arr1[0] = "George"
arr1[1] = "Thomas"
arr1[2] = "John"
console.log(arr1)
var arr2 = arr1.sort()
console.log(arr2)

console.log("\nSort by function")
function sortMethod(a,b)
{
  return (a < b ? 1 : -1)
}
var arr1 = new Array(3)
arr1[0] = "George"
arr1[1] = "Thomas"
arr1[2] = "John"
console.log(arr1)
var arr2 = arr1.sort(sortMethod)
console.log(arr2)

console.log("\nReplace splice")
var arr1 = new Array(3)
arr1[0] = "George"
arr1[1] = "Thomas"
arr1[2] = "John"
console.log(arr1)
arr1.splice(1, 1, "abc", "def")
console.log(arr1)

console.log("\nGet length")
var arr1 = new Array(3)
arr1[0] = "George"
arr1[1] = "Thomas"
arr1[2] = "John"
console.log(arr1)
console.log("Length: ", arr1.length)

console.log("\nType of Array")
console.log(typeof arr1)
