// string functions can use RE: match(), matchAll(), replace(), replaceAll(), search(), and split()

// RE literal in forward slash
let r = /ab+c/;

// RE object
let re_object = new RegExp('ab+c');

// Replace
var str1 = "Hello World";
var str2 = str1.replace(/[abcdel]/g, "X")
console.assert(str2 == "HXXXo WorXX");
