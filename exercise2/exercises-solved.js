"use strict";
/*
1­ What is wrong with this code?:

for(i = 0; i < 10; i++) {       <-- you shouldn't create global variables into the loop

    setTimeout(function() { console.log(i); }, 1000);   <-- closure is binding the value of the variable
                                                            outside the loop
}

Fix it. So it works as expected.*/

for(let i = 0; i < 10; i++) {    /* <-- The closure implies a reference to the variable, not to its value*/
                                                        /*Solved using let declaration*/
    setTimeout(function() { console.log(i); }, 1000);
}
/*
2­ Write a series function that executes a list of asynchronous functions and calls a

callback with the result of all of them only once they’ve all finished.

    Don’t use the async.js library for this. */

/*function firstFunction(value){
    console.log("this is the first function " + value);
    secondFunction(function(){
        callTheCallBack();
    });
}

function secondFunction(){
    console.log("this is the second function ");
    callTheCallBack(function(){
        console.log("hello I'm the callback! : )");
    });
}

function callTheCallBack(callback){
    console.log("i will call the callback");
    setTimeout(callback,1000);
}

firstFunction(5);*/

/*3­ Write the same function using the events*/

var EventEmitter = require("events").EventEmitter;

var ee = new EventEmitter();
ee.on("firstEvent", function () {
    console.log("this is the first event");
    ee.emit("secondEvent",function(){
        ee.emit("callToCallback");
    });
});

ee.on("secondEvent",function(){
    console.log("this is the second event");
    ee.emit("callToCallback",theCallBack);
});
ee.on("callToCallback",function(callback){
    console.log("I will call a callback");
    callback();
});

function theCallBack(){
  console.log("I'm a callBack");
};

ee.emit("firstEvent");

