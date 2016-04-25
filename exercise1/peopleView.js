var readlineSync = require('readline-sync');

var moreFriendsFlag=true;
var person={};
function NewPersonView(type){

    person.name = readlineSync.question("Name:\n");
    person.address = readlineSync.question("Address:\n");
    person.brirth_date = readlineSync.question("Birth date:\n");
    person.friends = readlineSync.question("Friends:\n");

    console.log("A new " +type+" was created:\n");
    console.log(person);
    console.log("\n");

    return person;
}

module.exports.NewPersonView = NewPersonView;
