// generator - function* / yield
function* g() {
  var i;
  for (i=0; i<10; i++) {
    yield i;
  }
}

// Using generator.
// Note: After exhausted, you have to create new one to use.
var gen1 = g();
while (!(tr = gen1.next()).done) {
  console.log(tr.value);
}
