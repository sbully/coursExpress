function Employee(_name, _dept) {
	this.name = _name || "Anonymous";
	this.dept = _dept || "";
}

Employee.prototype.display = function () {
	console.log(this.name);
	console.log(this.dept);
};

function Manager(_name, _dept) {
	this.base = Employee;
	this.base(_name, _dept);
	this.team = [];
}

Manager.prototype = new Employee;

function Developer(_name) {
	Employee.call(this, _name, 'IT');

}

Developer.prototype = new Employee;

module.exports = {
	Employee: Employee,
	Manager: Manager,
	Developer: Developer
}