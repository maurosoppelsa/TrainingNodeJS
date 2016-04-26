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
    createNewTeacher:function (teacher) {
        return new Teacher(teacher.id,teacher.name, teacher.address, teacher.birth_date, teacher.friends);
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
        return new Course(course.id,course.name,course.minimum_avg_grade);
    }

};
module.exports.MenuOptions=MenuOptions;