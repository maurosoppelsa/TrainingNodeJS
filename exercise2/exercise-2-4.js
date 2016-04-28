/*4­ Considering the following definition of “user”:
 ● Name: Pedro
 ● LastName: Rodriguez
 ● Age: 25
 ● DOB: 02/08/2001
 Create an Object using promises that meets the following goals:
 1. Create an user
 2. Update user’s data
 3. Retrieve an user by name
 4. Delete an user
 You should keep in mind the following:
 ● All representations of all resources should be specified as JSON.
 ● Use a simple file I/O to store the data.
 ● In the update / delete operation, you’ve to trigger an error in case the specified
 user does not exist.
 ● If you’re trying to create an existing user, you’ve to return the corresponding
 message.*/


var fs = require('fs');
var Q = require('q');
var getJsonFile = function(){
    return JSON.parse(fs.readFileSync('user.json', 'utf8'));
};

var writeInFile = function(content){
    fs.writeFileSync('user.json', JSON.stringify(content));
};

function getUserByName(name){
    var userList = getJsonFile();
    var response;
    for(var i=0;i<userList.length;i++){
        if(userList[i].Name===name){
            response = userList[i];
        }
    }
    var deferred = Q.defer();
    deferred.resolve(response);
    return deferred.promise;
}
function updateUser(property,oldValue,newValue){
    var userList = getJsonFile();
    for(var i=0;i<userList.length;i++){
        console.log(userList[i][property]);
        if(userList[i][property]==oldValue){
            userList[i][property]=newValue;
        }
    }
    var write = writeInFile(userList);
    var response = write;
    var deferred = Q.defer();
        deferred.resolve(response);
          return deferred.promise;
}

getUserByName("Pedro").then(function(response){
    console.log(response);
}).catch(function(error){
    console.log(error);
});

updateUser("Name","Pedro","Ramiro").then(function(response){
    console.log("update success");
}).catch(function(error){
    console.log("couldn't update file " +error);
});