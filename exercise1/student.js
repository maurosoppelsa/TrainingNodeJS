
var Person = require('./person').Person;

    function Student(name,address,birth_date,friends){
        Person.call(this);
        this.student_Id += this.student_Id;
        this.avg_grade=0;
        this.current_grades = {
            courseName:'',
            grade:0
        };
        this.current_course=[];
        Person.name = name;
        Person.address = address;
        Person.birth_date = birth_date;
        Person.friends= friends;
    }

 Student.prototype = Object.create(Person.prototype);

 Student.prototype.enrollToCourse = function(course){
    this.current_course.push(course);
 };

 Student.prototype.leaveCourse = function(course){

 };

module.exports.Student=Student;
/*
enrollToCourse:function(newCourse){
    this.current_grades = newCourse.name;
},
leaveCourse:function(){
    this.current_grades = '';
},
setCourseGrade:function(){
}*/
  /*var friends =[];
  var person1 =  new person.person('pepe',"micasa",52,friends);
  console.log(person1.getName());
  console.log(person1.getAge());
*/
