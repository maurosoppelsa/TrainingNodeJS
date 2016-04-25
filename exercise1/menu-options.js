/**
 * Created by mauro.soppelsa on 21/04/16.
 */
var Student = require('./student').Student;
var Teacher = require('./teacher').Teacher;
var Course = require('./course').Course;
var MenuOptions= {
    createNewStudent:function (student) {
        console.log(student.id);
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
    enrollStudent:function(student,course){
        student.enrollToCourse(course);
        console.log("Course added:\n");
        console.log(student.name.toUpperCase()+" currently are in the followings courses:\n");
        for(var i=0;i<student.current_course.length;i++){
            console.log("*"+student.current_course[i].name+"\n");
        }

    },
    addNewCourse:function(course){
        console.log("menu option");
        console.log(course);
        console.log(course.id);
        return new Course(course.id,course.name,course.minimum_avg_grade);
    }

};
module.exports.MenuOptions=MenuOptions;