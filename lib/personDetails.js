var faker = require('Faker');
var FirstName;
var MiddleName;
var Prefix;
var Sex;

function randomDate(start, end) {
  return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
}

module.exports = {

  firstName: function(data){
    FirstName = data;
    return FirstName;
  },

  preferredName: function(){
    return FirstName;
  },

  middleName: function(data){
    MiddleName = [data, null];
    return MiddleName;
  },

  lastName: function(data){
    return data;
  },

  prefix: function(data){
    Prefix = [data, null];
    return Prefix;
  },

  sex: function(){
    Sex = ['Male', 'Female'];
    return Sex;
  },

  dateOfBirth: function(){
    return randomDate(new Date(1948, 0, 1), new Date(1998, 0, 1));
  }

};
