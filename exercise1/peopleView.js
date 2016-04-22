var prompt = require('prompt');

var person1={};
var moreFriendsFlag=true;

function NewPersonView(person,type){

    prompt.start();

    prompt.get(['name', 'address','birth_date','friends'], function (err, result) {
        if (err) { return onErr(err); }

        person={
            name:result.name,
            address:result.address,
            birth_date:result.birth_date,
            friends:result.friends,
            type:type
        }
        console.log(person);
        return person;
    });

    function onErr(err) {
        console.log(err);
        return 1;
    }
}

module.exports.NewPersonView = NewPersonView;
