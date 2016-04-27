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

// readFileUsingPromises.js
var FS = require('fs'),
    Q = require('q');

Q.nfcall(FS.readFile, "user.json", "utf-8")
    .then(function(data) {
        console.log('File has been read:', data);
    })
    .fail(function(err) {
        console.error('Error received:', err);
    })
    .done();