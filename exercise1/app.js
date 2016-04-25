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
var studentsLists=[];
var counterId=0;

function init(){

    do{
        var keyOption = readlineSync.question("Select an option:\n" +
        "1­ Create a new student\n" +
        "2­ Create a new teacher\n" +
        "3­ Enroll student to a course\n" +
        "4­ Get teacher to teach a course\n" +
        "5­ Exit\n");

        switch(keyOption){
            case "1":
                counterId++;
                var student={};
                console.log('***New Student***');
                student = personView('student');
                student.id=counterId;
                studentsLists.push(MenuOptions.createNewStudent(student));
                console.log(studentsLists);
                break;
            case "2":
                stdin.removeAllListeners('data');

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
                for(var i= 0;i<studentsLists.length;i++){
                    console.log("("+studentsLists[i].id +")"+"-"+studentsLists[i].name+"\n");
                }
                studentId = readlineSync.question("student file:");
                courseId = readlineSync.question("course file:");
                MenuOptions.enrollStudent(studentsLists[studentId,courseId]);
                break;
            case "4":
                console.log('4­Teach a Course');
                MenuOptions.GetNewTeacher;
            case "5":
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
