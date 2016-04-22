var Person = require('./person').Person;

function Teacher(name,address,birth_date,friends){
    Person.call(this);
    Person.name = name;
    Person.addess=address;
    Person.birth_date=birth_date;
    Person.friends=friends;
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