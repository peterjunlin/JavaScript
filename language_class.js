/* 
 * Testing class and inheritance
 */

"use strict";

console.log("Create object by using initializer");
var obj1 = 
{
  Name1 : "Name1",
  Name2 : "Name2"
}
console.log("obj1.Name1 = ", obj1.Name1);

console.log("\nCreate object by new");
function func1()
{
  this.name1 = "name1";
  function getName()
  {
    return this.name1;
  }
}
var obj2 = new func1();
console.log("typeof obj2 = ", typeof obj2)
obj2.favorites = "skiing";
console.log(obj2.name1)
console.log(obj2.favorites)
var obj3 = obj2;
var tf = obj3===obj2;
console.log(tf);

console.log("\nCreate object by using Object.create");
var obj3 = Object.create(func1);
//var obj3 = new func1;
console.log("obj3.prototype = ", obj3.prototype);
console.log("obj3.__proto__ = ", obj3.__proto__);
console.log("obj3.constructor = ", obj3.constructor);
console.log("obj3.name1 = ", obj3.name1);

console.log("\nTest constructor")
function employee(name,job,born)
{
this.name=name;
this.job=job;
this.born=born;
}
var bill=new employee("Bill Gates","Engineer",1985);
console.log(bill.constructor);

if (typeof f=="undefined")
  console.log("f is not defined")
else
  console.log("f is defined")

var e;
if (e === undefined)
    console.log("e is empty")
else
  console.log("e is not empty")

e = 0;
if (e)
    console.log("e is true")
else
  console.log("e is false")

console.log("\nTest constructor")
function car() 
{
  this.model = "car";
  console.log("hello, this is in the car constructor")
}
function truck()
{
  this.load = 1000;
  console.log("hello, this is in the truck constructor");
}
//car.prototype.gear = function() {return "gear"}
//console.log("car.prototype = ", car.prototype)
//var car1 = new car;
//console.log("typeof car1.gear = ", typeof car1.gear, car1.gear())
//console.log("call car1.gear(), return = ", car1.gear())
//console.log("car1.model = ", car1.model)
//car1.model = "Mazda"
//console.log("car1.model = ", car1.model)
truck.prototype = new car;
//truck.prototype.model = "truck"
var truck1 = new truck;
console.log(JSON.stringify(truck1))
//console.log("truck1.model = ", truck1.model)
//console.log("typeof car.model", typeof car.model)
//car.model = "Lexus"
//console.log("typeof car.model", typeof car.model)
//console.log("typeof car.constructor", typeof car.constructor)
//console.log("car.constructor = ", car.constructor)
//console.log("car1.model = ", car1.model)
//console.log("truck1.model = ", truck1.model)
//var car2 = new car;
////console.log("car2.model = ", car2.model)
//console.log(JSON.stringify(car.model))
//console.log(JSON.stringify(car2))
//
//function normalFunc()
//{
//  console.log("here is in normalFunc")
//}
//normalFunc()
//console.log(normalFunc.prototype.constructor)
//normalFunc.prototype.constructor = function() {console.log("changed constructor")}
//console.log(normalFunc.prototype.constructor)
//var norm1 = new normalFunc()

//class Employee
//{
//  constructor(name, dept) {
//    this.name = name || "";
//    this.dept = dept || "general";
//  }
//}
//class Manager extends Employee
//{
//  constructor(name, dept, reports) 
//  {
//   this.reports = reports || "reportsDefault";
//   super(name, dept);
//  }
//}
//var manager1 = new Manager("Aladin", "Kindom", "reported");
//console.log(JSON.stringify(manager1));
var mods = {};
var exps = mods.exps = {}
exps.test1 = function() {console.log("test1")};
console.log(exps)
console.log(mods.exps)
exps.test1();

