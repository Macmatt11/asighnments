//You are to create a collection of employee's information for your company. Each employee has the following attributes:

// 1. Name
// 2. Job title
// 3. Salary
// 4. Status

// First, you will create an empty array named `employees`

// Next, you will create an `Employee` constructor with the first three attributes defined at the time of instantiation and the fourth will be defaulted to `"Full Time"`.

// This constructor will also have a method called `printEmployeeForm` that prints the employee's information to the console.

// (e.g. `"Name: Bob, Job Title: V School Instructor, Salary: $3000/hour, Status: Part time"`)

// You will then:

// 1. Instantiate three employees
// 2. Override the status attribute of one of them to either "Part Time" or "Contract"
// 3. Call the `printEmployeeForm` method for each employee
// 4. Put the generated employees into the `employees` array using whichever method you prefer.

const employeesArray = []
var employee = new Employee ("Tony Stark", "entrepreneur", "300mil/year")
var employee2 = new Employee ("Bruce Wayne", "entrepreneur", "200mil/year")
var employee3 = new Employee ("Peter Parker", "photographer", "30/year")
function Employee(name, jobTitle, salary ){
    this.name = name
    this.jobTitle = jobTitle
    this.salary = salary
    this.status = "full time"
}

Employee.prototype.overrideStatus = function(monkey){
    this.status = monkey
}
Employee.prototype.prinEmployeeForm = function(){
    console.log(this)
}

employee.prinEmployeeForm()
employee2.overrideStatus("contract")
employee2.prinEmployeeForm()
employee3.prinEmployeeForm()

employeesArray.push(employee, employee2, employee3)
console.log("here is the employees array" , employeesArray)