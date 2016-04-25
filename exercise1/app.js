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
var counterStId=0;
var counterCsId=0;

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
                var teacherLists=[];
                var teacher={};
                console.log('***New Teacher***');
                personView(teacher,'teacher');
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
                console.log('4­Teach a Course');
                MenuOptions.GetNewTeacher;
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
                console.log('5-5­ Exit');
                console.log("-------------- HAVE A NICE DAY :) -----------------");
                MenuOptions.ExitProgram(0);
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
        if(courseList[i].id=id){
            console.log(courseList[i]);
            return courseList[i];
        }
    }
}
function getStudentById(id){
    for(var i=0;i<studentsList.length;i++){
        if(studentsList[i].id=id){
            console.log(studentsList[i]);
            return studentsList[i];
        }
    }
}
