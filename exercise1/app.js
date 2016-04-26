var MenuOptions = require('./menu-options').MenuOptions;
var personView = require('./peopleView').NewPersonView;
var Course = require('./course').Course;
var prompt = require('prompt');
var readlineSync = require('readline-sync');

var invalidOption = function(){
    console.log("The Option selected is invalid, please try again:\n");
};
var stdin = process.openStdin();
var onWorkingFlag=true;
var studentsList=[];
var courseList=[];
var teacherLists=[];
var counterStId=0;
var counterCsId=0;
var counterTchId=0;

function init(){

    do{
        var keyOption = readlineSync.question("Select an option:\n" +
        "1­ Create a new student\n" +
        "2­ Create a new teacher\n" +
        "3­ Enroll student to a course\n" +
        "4­ Get teacher to teach a course\n" +
        "5­ Add a new course\n" +
        "6­ Exit\n");

        switch(keyOption){
            case "1":
                counterStId++;
                var student={};
                console.log('***New Student***');
                student = personView('student');
                student.id=counterStId;
                studentsList.push(MenuOptions.createNewStudent(student));
                break;
            case "2":
                counterTchId++;
                var teacher={};
                console.log('***New Teacher***');
                teacher=personView('teacher');
                teacher.id=counterTchId;
                teacherLists.push(MenuOptions.createNewTeacher(teacher));
                break;
            case "3":
                var studentId;
                var courseId;
                console.log('***Enroll Students***');
                console.log("Select the student file and the course file in order to enroll:\n");
                console.log("**Students**");
                for(var i= 0;i<studentsList.length;i++){
                    console.log("("+studentsList[i].id +")"+"-"+studentsList[i].name+"\n");
                }
                console.log("**Courses**");
                for(var i=0;i<courseList.length;i++){
                    console.log("("+courseList[i].id +")"+"-"+courseList[i].name+"\n");
                }
                studentId = readlineSync.question("student file:");
                courseId = readlineSync.question("course file:");
                MenuOptions.enrollStudent(getStudentById(studentId),getCourseById(courseId));
                break;
            case "4":
                console.log('***Teach a Course***');
                var teacherId;
                var courseId;
                console.log("Select the teacher file and the course file in order to teach a course:\n");
                console.log("**Teachers**");
                for(var i= 0;i<teacherLists.length;i++){
                    console.log("("+teacherLists[i].id +")"+"-"+teacherLists[i].name+"\n");
                }
                console.log("**Courses**");
                for(var i=0;i<courseList.length;i++){
                    console.log("("+courseList[i].id +")"+"-"+courseList[i].name+"\n");
                }
                teacherId = readlineSync.question("teacher file:");
                courseId = readlineSync.question("course file:");
                MenuOptions.teachingCourses(getTeacherById(teacherId),getCourseById(courseId));
                break;
            case "5":
                counterCsId++;
                var course={};
                console.log("***Add new course***");
                course.id=counterCsId;
                course.name = readlineSync.question("course name:");
                course.minimum_avg_grade=readlineSync.question("minimum average:");
                courseList.push(MenuOptions.addNewCourse(course));
                console.log("New course added:");
                console.log("..."+course.name+"...\n");
                break;
            case "6":
                console.log('***Exit***');
                console.log("-------------- HAVE A NICE DAY :) -----------------");
                process.exit();
            default:
                invalidOption();
                selectOptionMessage();
                break;
        }

    }while(onWorkingFlag);
};

init();

function getCourseById(id){
    for(var i=0;i<courseList.length;i++){
        if(id==courseList[i].id){
            return courseList[i];
        }
    }
}
function getStudentById(id){
    for(var i=0;i<studentsList.length;i++){
        if(id==studentsList[i].id){
            return studentsList[i];
        }
    }
}
function getTeacherById(id){
    for(var i=0;i<teacherLists.length;i++){
        if(id==teacherLists[i].id){
            return teacherLists[i];
        }
    }
}
