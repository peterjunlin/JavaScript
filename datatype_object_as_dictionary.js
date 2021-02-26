// There’s no “Dictionary” type in JavaScript.
// You can use Object as dictionary.

// Object initialization.
let my_object1 = new Object();
let my_object2 = {};

// Key/Value pairs
let dict = {
    firstname: "Thomas",
    lastname: "Hank"
}

// Access value by key.
console.log(dict['firstname']);  // use key as indexer
console.log(dict.lastname);  // use dot property

// Iterating through key/value pairs.
for (let k in dict) {
    console.log(k, dict[k]);
}
