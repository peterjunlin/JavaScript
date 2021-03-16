// generator - function* / yield
function* g() {
  var i;
  for (i=0; i<10; i++) {
    yield i;
  }
}

// Using generator.
// Note: generator can not be reused after it exhausted.
var gen1 = g();
while (!(tr = gen1.next()).done) {
  console.log(tr.value);
}
