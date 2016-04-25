var Person = require('./person').Person;

function Teacher(name,address,birth_date,friends){
    Person.call(this,name,address,birth_date,friends);
}

Teacher.prototype = Object.create(Person.prototype);

Teacher.prototype = {
    teachCourse : function(course){
        course.setTacher(this.name);
    },
    stopTeachingCourse: function(course){
        course.teacher=null;
    },
    gradeStudent: function(student,course,grade){

    }
};

module.exports.Teacher=Teacher;