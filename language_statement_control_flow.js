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

// Loop - while / break
let i = 0;
while (i < 6) {
    if (i == 3) {
        break;
    }
    i += 1;
}

// Loop - for / break / continue
for (let i = 0; i < 10; i++) {
    if (i === 3) {
      continue;
    }
    if (i === 6) {
        break;
    }
  }

// Exception - throw / try / catch
try {
    throw 'Parameter is not a number!';
} catch (e) {
    console.error(e);
    // expected output: "Parameter is not a number!"
}