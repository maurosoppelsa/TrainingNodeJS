/*This function return 7, because variables declarations is moving into the top of their scope*/

/*(function () {

    test = 5;

    if (false) {

        var test;

    } else {

        console.log(test + 2);

    }

}());*/

/*This function return 6, JavaScript only hoists declarations, not initializations.*/
/*(function () {

    test = 5;

    if (false) {

        var test = 3;

    } else {

        console.log(one(test));

    }

    function one(value) {

        return value + 1;

    }

}());*/

/*it can't compile, because cannot assign test into the function at the same time that it is declared*/
/*
(function () {

    var test = 5,

        one = (function one(value) {

            if (value > 2) {

                return one(value ­ 1);

            };

            return value ­ 1;

        }(test));

    console.log(one);

}());*/

/*TODO I'm not sure why is failing but it can't compile
(function () {

    console.log(one(3));

    var test = 5,

        one = (function one(value) {

            if (value > 2) {

                return one(value ­ 1);

            }

            return value ­ 1;

        });

    console.log(one(test));

    var identity = (x => x)(4);

}());*/
