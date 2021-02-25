// string functions can use RE: match(), matchAll(), replace(), replaceAll(), search(), and split()

// Replace
var str1 = "Hello World";
var str2 = str1.replace(/[abcdel]/g, "X")
console.assert(str2 == "HXXXo WorXX");
