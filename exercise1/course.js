/**
 * Created by mauro.soppelsa on 21/04/16.
 */
function Course(id,name,minimum_avg_grade){
    this.id=id;
    this.name = name;
    this.students = [];
    this.teacher;
    this.minimum_avg_grade = minimum_avg_grade;
}

Course.prototype = {
 setTeacher:function(Teacher){
    this.teacher = Teacher.name;
 },
 addStudent:function(student){
    this.students.push(student);
 },
 removeStudent:function(student){
    this.students.remove(student);
 }
};

module.exports.Course= Course;