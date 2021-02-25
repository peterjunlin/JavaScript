// 'var' defines scoped global variable.
// The variable declared by var can be re-declared.
var counter;
console.assert(counter == undefined);

// 'let' defines temporary variable.
// The variable declared by let can not be re-declared.
let i;

// To test if a variable has been defined.
console.assert(typeof ii == 'undefined');  // note: 'undefined' has to be quoted as string.

// To test if a defined variable is initialized.
console.assert(i == undefined);
console.assert(i == null);  // null == false.
