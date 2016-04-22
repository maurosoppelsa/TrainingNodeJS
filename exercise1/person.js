/**
 * Created by mauro.soppelsa on 20/04/16.
 */

function Person(name,address,birth_date,friends){
    this.name = name;
    this.address = address;
    this.birth_date = birth_date;
    this.friends = friends;
};

Person.prototype={
     getName: function(){
         return this.name;
     },
     getAge:function(){
       return this.birth_date;
    }
}

module.exports.Person=Person;

