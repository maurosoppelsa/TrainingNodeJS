var Person = require('./person').Person;

function Teacher(teacherId,name,address,birth_date,friends){
    Person.call(this,name,address,birth_date,friends);
    this.id=teacherId;
    this.current_courses=[];
}

Teacher.prototype = Object.create(Person.prototype);

Teacher.prototype = {
    teachCourse : function(course){
        course.setTeacher(course);
        this.current_courses.push(course);
    },
    stopTeachingCourse: function(course){
        course.teacher=null;
    },
    gradeStudent: function(student,course,grade){

    }
};

module.exports.Teacher=Teacher;