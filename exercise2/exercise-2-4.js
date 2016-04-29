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

function createUser(name,lastName,age,dob){
    var userList = getJsonFile();
    userList.push(name,lastName,age,dob);
    var write = writeInFile(userList);
    var response = write;
    var deferred = Q.defer();
    deferred.resolve(response);
    return deferred.promise;
}

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

function deleteUser(name){
    var userList = getJsonFile();
    for(var i=0;i<userList.length;i++){
        if(userList[i].Name===name){
            userList.splice(i);
        }
    }
    var write = writeInFile(userList);
    var response = write;
    var deferred = Q.defer();
    deferred.resolve(response);
    return deferred.promise;
}

createUser("Jorge","Sanchez","45","12/10/2005").then(function(){
    console.log("User created");
}).catch(function(error){
    console.log("could not create user " + error);
});

/*getUserByName("Pedro").then(function(response){
    console.log(response);
}).catch(function(error){
    console.log(error);
});

updateUser("Name","Pedro","Ramiro").then(function(response){
    console.log("update success");
}).catch(function(error){
    console.log("couldn't update file " +error);
});*/
/*

deleteUser("Jorge").then(function(){
    console.log("The user was deleted");
}).catch(function(error){
    console.log("Could not delete the user " +error);
});*/
