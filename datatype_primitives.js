// Note: primitives are not objects.

// Number
console.assert(typeof 5 == 'number');

a_number = new Number(5);
console.assert(typeof a_number == 'object');

// String
console.assert(typeof 'abc' == 'string');
a_string = new String('abc');
console.assert(typeof a_string == 'object');

// Boolean
tf = false;
console.assert(typeof tf == 'boolean');
a_boolean = new Boolean('false');
console.assert(typeof a_boolean == 'object');

// undefined, which defined in global.
console.assert(typeof undefined == 'undefined');

// null == false, which is not defined in global.
console.assert(typeof null == 'object');
