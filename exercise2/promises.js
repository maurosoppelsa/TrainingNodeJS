// readFileUsingPromises.js
var FS = require('fs'),
    Q = require('q');

function getUserList(){
    Q.nfcall(FS.readFile, "user.json", "utf-8")
        .then(function(data) {
            return data;
        })
        .fail(function(err) {
            console.error('Error received:', err);
        })
        .done();
}
function getUserByName(name){
    var userList;
    getUserList().then(function(data){
        for(var i=0;i<data.length;i++){
            if(userList[i].Name===name){
                response = userList[i];
            }
        }
    });
    var response;

    var deferred = Q.defer();
    deferred.resolve(response);
    return deferred.promise;
}

var userList;
getUserList(userList);