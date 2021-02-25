// Type of boolean - boolean.
tf = false;
console.assert(typeof tf == 'boolean');

// Built-in falsy values - false, undefined, null, NaN, 0, "".
// Use Boolean(...) to convert other types to boolean. 
console.assert(false == false);
console.assert(Boolean(undefined) == false);
console.assert(Boolean(null) == false);
console.assert(Boolean(NaN) == false);
console.assert(Boolean(0) == false);
console.assert(Boolean("") == false);

// Assertion most likely fails if comparing two different types, no mater what the eval result is.
// Both assertions failed.
console.assert(-1 == true, "-1 == true");
console.assert(-1 == false, "-1 == false");

