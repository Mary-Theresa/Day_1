var Register = function(firstName, lastName, regYear) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.regYear = regYear;
}

Register.prototype.showDuration = function(currentYear) {
	var years = currentYear - this.regYear;
}


function Teacher(firstName, lastName, regYear, department) {
  
  Register.call(this, firstName, lastName, regYear);
  this.department = department;
}

Teacher.prototype = new Register();
Teacher.prototype.constructor = Teacher;


Teacher.prototype.getSalary = function() {
    	return 20000 + (this.years() * 2000);
    }



function Student(firstName, lastName, regYear, grade, total, numOfSubjects) {
  
  Register.call(this, firstName, lastName, regYear);
  this.grade = grade;
  this.total = total;
  this.numOfSubjects = numOfSubjects;
}

Student.prototype = new Register();
Student.prototype.constructor = Student;


Student.prototype.getAverage = function() {
		return (Number(this.total)/Number(this.numOfSubjects));
	}

module.exports = Register;
module.exports = Teacher;
module.exports = Student;