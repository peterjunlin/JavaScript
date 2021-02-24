/* 
 * Test data code structure
 */

console.log("\nTest constant")
const HI = 123
console.log("HI = ", HI)
////HI = 1234
////console.log("HI = ", HI)

console.log("\nTest labmda expression")
var f1 = ()=>console.log("labmda")
f1()

console.log("\nTest generator")
function* g() {
  var i;
  for (i=0; i<10; i++) {
    yield i
  }
}
var gen1 = g()
while (!(tr = gen1.next()).done) {
  console.log(tr.value)
}
