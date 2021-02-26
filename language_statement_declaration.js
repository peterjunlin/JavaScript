// Function-scoped or globally-scoped variable - declaration. Var will be hoisted to top.
var i = 0, k = 0;

// Block-scoped local variable - declaration.
let p = 0;

// Constant - declaration. Normally uses uppercase. The name of constant can not be reassigned.
const NUMBER = 42;

// Constant - use Destructuring Assignment to set value of constant.
foo = { baz:10, bar:12 };
const { bar } = foo;
console.assert(bar == 12);

// Constant - the internal value can be changed.
const PARR = [1, 2, 3];
PARR.push(4);
console.assert(JSON.stringify(PARR) == JSON.stringify([1, 2, 3, 4]));
