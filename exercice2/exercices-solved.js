/*
1­ What is wrong with this code?:

for(i = 0; i < 10; i++) {       <-- you shouldn't create global variables into the loop

    setTimeout(function() { console.log(i); }, 1000);   <-- closure is binding the value of the variable
                                                            outside the loop
}

Fix it. So it works as expected.*/
"use strict";
for(let i = 0; i < 10; i++) {    /* <-- The closure implies a reference to the variable, not to its value*/
                                                        /*Solved using let declaration*/
    setTimeout(function() { console.log(i); }, 1000);
}
/*
2­ Write a series function that executes a list of asynchronous functions and calls a

callback with the result of all of them only once they’ve all finished.

    Don’t use the async.js library for this. 3­ Write the same function using the events*/

