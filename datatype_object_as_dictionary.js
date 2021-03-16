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
console.assert(dict['firstname'] == "Thomas");  // use key as indexer
console.assert(dict.lastname == "Hank");  // use dot property

// Add member
dict["age"] = 30;
dict["favorite color"] = "blue";  // add if not exists
dict["favorite color"] = "green";  // change value if exists

// Delete member
delete dict['age'];
delete dict['age'];  // no warning if 'age' does not exist

// Iterating through key/value pairs.
for (let k in dict) {
    console.log(k, "--", dict[k]);
}
