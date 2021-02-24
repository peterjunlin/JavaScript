/* 
 * Test URI
 */

var uri = "http://www.treelin.com/hello/first of test"
console.log("URI = ", uri)
console.log("encoded URI = ", encodeURI(uri)) // http://www.treelin.com/hello/first%20of%20test
console.log("encoded URI component = ", encodeURIComponent(uri)) // http%3A%2F%2Fwww.treelin.com%2Fhello%2Ffirst%20of%20test
