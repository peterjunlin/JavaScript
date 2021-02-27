// Inheritance is prototype based.

class Employee
{
  constructor(name, dept) {
    this.name = name || "";
    this.dept = dept || "general";
  }
}

class Manager extends Employee
{
  constructor(name, dept, reports) 
  {
    this.reports = reports || "reportsDefault";
    super(name, dept);
  }
}
