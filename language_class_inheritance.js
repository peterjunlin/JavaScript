// Base class
class Employee {
  // property
  g_name = 'employee';

  // static property
  static className = "Employee";

  // constructor
  constructor(name, dept) {
    // member variable
    this.name = name || "";
    this.dept = dept || "general";
  }

  // method
  sayHi() {
    console.log('Hi');
  }

  // generator method
  *getSides() {
    for(const i of [1, 2, 3, 4]){
      yield i;
    }
  }

  static party() {
    return 'party';
  }

}

// Inheritance is prototype based.
class Manager extends Employee {
  constructor(name, dept, reports) 
  {
    super(name, dept);  // call super constructor must at top before use 'this'.
    this.reports = reports || "reportsDefault";
  }
}

// Create instance
var m1 = new Manager('John Smith', 'HR', 'ok');
var m2 = new Manager('Nemo Smith', 'HR', 'ok');

// Access property
m2.g_name = 'VP';
console.assert(m1.g_name == 'employee');
console.assert(m2.g_name == 'VP');

// Instance member variable
console.assert(m1.name == 'John Smith'); 

// Access static member
console.assert(Manager.className == 'Employee');

// Call static function.
console.assert(Manager.party() == 'party');
