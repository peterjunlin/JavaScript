
// you can't replace object parameter with another object.
function replaceObjectParameter(obj) {
    obj = {name: 'Peter'};
}

// Object parameter internal value can be changed, but you can't replace the object with another object.
function editObjectParameter(obj) {
    obj['fouth'] = 4;  // add a member variable.
}

let myobj = {first: 1, second: 2, third: 3};

replaceObjectParameter(myobj);
console.log(myobj);

editObjectParameter(myobj);
console.log(myobj);
