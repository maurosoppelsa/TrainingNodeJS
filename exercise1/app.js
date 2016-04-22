var MenuOptions = require('./menu-options').MenuOptions;
var personView = require('./peopleView').NewPersonView;

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

function init(){
    var temporalPerson = {};
    var keyOption;

    selectOptionMessage();

    switch(keyOption){
        case "1":
            var studentsLists=[];
            var student={};

            console.log('***New Student***');
            personView(student,'student');

            studentsLists.push(MenuOptions.createNewStudent(student));
            console.log(studentsLists);
            break;
        case "2":
            console.log('***New Teacher***');
            MenuOptions.createNewTeacher();
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

};

init();
