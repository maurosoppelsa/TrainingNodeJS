/**
 * Created by mauro.soppelsa on 21/04/16.
 */
var Student = require('./student').Student;
var Teacher = require('./teacher').Teacher;
var Course = require('./course').Course;

var MenuOptions= {
    createNewStudent: function (name, address, birth_date, friends) {
        this.student = new Student(name, address, birth_date, friends);
        return {
            student: {
                name: this.student.name,
                address: this.student.address,
                age: this.student.birth_date,
                friends: this.friends
            }
        };
    },
    createNewTeacher: function (name, address, birth_date, friends) {
        this.Teacher = new Teacher(name, address, birth_date, friends);
        return {
            Teacher: {
                name: this.Teacher.name,
                address: this.Teacher.address,
                age: this.Teacher.birth_date,
                friends: this.Teacher.friends
            }
        };
    }

};
module.exports.MenuOptions=MenuOptions;