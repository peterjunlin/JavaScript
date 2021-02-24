"strict mode";

/* 
 * Test prototype
 */

var v1 = function (){};
console.log(v1);
console.log(v1.prototype);
console.log("----------")

var v2 = new v1();
console.log(v2);
console.log("v2 = " + v2);
console.log("v2.prototype = " +  v2.prototype);
console.log("----------")

const cat = {
  init: function(sound) {
    this.sound = sound;
    return this;
  },
  makeSound: function() {
    console.log(this.sound)
  }
}
console.log("Type of cat is: " + typeof cat)
const mark = Object.create(cat)
mark.makeSound();
console.log("----------")

let dog = {
  color: "red",
  bark: function () {
    console.log(this.color)
  }
}
dog.bark()
barkf = new dog.bark
console.log('this is barkf')
console.log(typeof barkf)
console.log("this is: " + this)
console.log("----------")

let talk1 = {
  barkSound: "bark",
  sound: function () {
    //console.log(barkSound)
    console.log(this.barkSound)
    return "abc";
  }
}
console.log(typeof talk1)
console.log(talk1.sound())
console.log("----------")

function talk() {
  console.log("log in talk function")
}

talk();
talk1 = new talk();

talk1();
