/**
 * Created by mauro.soppelsa on 21/04/16.
 */
var Student = require('./student').Student;
var Teacher = require('./teacher').Teacher;
var Course = require('./course').Course;
var MenuOptions= {
    createNewStudent:function (student) {
        return new Student(student.id,student.name, student.address, student.brirth_date, student.friends);
    },
    createNewTeacher:function (name, address, birth_date, friends) {
        this.Teacher = new Teacher(name, address, birth_date, friends);
        return {
            Teacher: {
                name: this.Teacher.name,
                address: this.Teacher.address,
                age: this.Teacher.birth_date,
                friends: this.Teacher.friends
            }
        };
    },
    enrollStudent:function(StudentId,CourseId){
        Student.enrollToCourse(StudentId,CourseId);
        console.log("Course added:\n");
        console.log("This student currently are in the followings courses:\n");
        console.log(Student.current_course);
    }

};
module.exports.MenuOptions=MenuOptions;