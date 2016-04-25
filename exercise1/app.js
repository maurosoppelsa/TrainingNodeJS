var MenuOptions = require('./menu-options').MenuOptions;
var personView = require('./peopleView').NewPersonView;
var prompt = require('prompt');

var selectOptionMessage = function(){
    console.log("Select an option:\n" +
    "1­ Create a new student\n" +
    "2­ Create a new teacher\n" +
    "3­ Enroll student to a course\n" +
    "4­ Get teacher to teach a course\n" +
    "5­ Exit");
};

var invalidOption = function(){
    console.log("The Option selected is invalid, please try again:\n");
};
var stdin = process.openStdin();
var keyOption;
var onWorkingFlag=false;

function init(){

    selectOptionMessage();

    prompt.start();

    prompt.get(['key'], function (err, result) {
        if (err) { return onErr(err); }

        keyOption = result.key;

        console.log(keyOption);

        return keyOption;
    });

    function onErr(err) {
        console.log(err);
        return 1;
    }

/*
    var stdin = process.openStdin();

    stdin.addListener("data", function(d) {

            keyOption = d.toString().trim();
        switch(keyOption){
            case "1":
                stdin.removeAllListeners('data');

                var studentsLists=[];
                var student={};

                console.log('***New Student***');
                personView(student,'student');

                studentsLists.push(MenuOptions.createNewStudent(student));
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
                console.log('***Enroll Students***');
                MenuOptions.enrollStudent();
                break;
            case "4":
                console.log('4­Teach a Course');
                MenuOptions.GetNewTeacher;
            case "5":
                console.log('5-5­ Exit');
                console.log("-------------- HAVE A NICE DAY :) -----------------");
                MenuOptions.ExitProgram();
            default:
                invalidOption();
                selectOptionMessage();
                break;
        }
    });
*/

};

init();
