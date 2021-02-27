// Code block
{
}

// Empty statement
;

// Condition - if / else if / else
if ( 0 == false) {
    console.assert(true);
} else if (1 == false) {
    console.assert(true);
} else {
    console.assert(true);
}

// Condition - switch / case / break / default
const expr = 'Papayas';
switch (expr) {
  case 'Oranges':
    console.log('Oranges are $0.59 a pound.');
    break;
  case 'Mangoes':
  case 'Papayas':
    console.log('Mangoes and papayas are $2.79 a pound.');
    // expected output: "Mangoes and papayas are $2.79 a pound."
    break;
  default:
    console.log(`Sorry, we are out of ${expr}.`);
}

// Exception - throw / try / catch
try {
    throw 'Parameter is not a number!';
} catch (e) {
    console.error(e);
    // expected output: "Parameter is not a number!"
}

// Return - return nothing
let f1 = function() {
  return;
}

// Return - return value
let f2 = function() {
  let x = 8;
  return x;
}

// Return - return function
let f3 = (function() {
  return () => { console.log("This is the function returned.") };
})();

f3();
