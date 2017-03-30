function Student (name, grade, age) {
	this.name = name;
	this.grade = grade;
	this.age = age;

	this.printDetails = function () {
		return 'Name: ' + this.name + ', age: ' + this.age + ', grade: ' + this.grade;
	};
}

function classroom () {

	var students = [];

	return {
		addStudent: function (student) {
			students.push(student);
			return ({ student: student, count: students.length });
		},
		getStudents: function () {
			return students;
		}
	};
}

var class1 = classroom();
var class2 = classroom();

class1.addStudent(new Student('Dror', 90, 46));
class1.addStudent(new Student('Anat', 110, 46));

class2.addStudent(new Student('Roey', 150, 15));
class2.addStudent(new Student('Jordan', 80, 14));
class2.addStudent(new Student('Inbar', 100, 12));
class2.addStudent(new Student('Daniel', 100, 1));

class1.getStudents().forEach(function (student) {
	console.log ('Class 1, student: ' + student.printDetails());
});

class2.getStudents().forEach(function (student) {
	console.log ('Class 2, student: ' + student.printDetails());
});
