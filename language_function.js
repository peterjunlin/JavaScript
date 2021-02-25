
// Parameters are passed by value.
// Object parameter is passed by address, so you can't replace object parameter with another object.
function replaceObjectParameter(obj) {
    obj = {name: 'Peter'};  // this has no effect on original object.
}

// Object parameter internal value can be changed.
function editObjectParameter(obj) {
    obj['fouth'] = 4;  // add a member variable to original object.
}

let myobj = {first: 1, second: 2, third: 3};

replaceObjectParameter(myobj);
console.log(myobj);

editObjectParameter(myobj);
console.log(myobj);
