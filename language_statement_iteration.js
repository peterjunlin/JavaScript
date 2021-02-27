// for / break / continue
for (let i = 0; i < 10; i++) {
    if (i === 3) {
        continue;
    }
    if (i === 6) {
        break;
    }
}

// do / while / break
var i = 0;
var result = 0;
do {
    i = i + 1;
    result = result + i;
} while (i < 5);

// while / break
var i = 0;
while (i < 6) {
    if (i == 3) {
        break;
    }
    i += 1;
}

// for each...in is deprecated.

// for ... in - iterate through enumerable properties in object.
const object = { a: 1, b: 2, c: 3 };
for (const property in object) {
  console.log(`${property}: ${object[property]}`);
}

// for ... of - iterate through iterable object.
const array1 = ['a', 'b', 'c'];
for (const element of array1) {
  console.log(element);
}

