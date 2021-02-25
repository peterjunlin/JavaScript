// Note: primitives are not objects.

// undefined, which defined in global.
console.assert(typeof undefined == 'undefined');

// null == false, which is not defined in global.
console.assert(typeof null == 'object');
