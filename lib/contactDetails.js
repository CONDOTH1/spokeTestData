var faker = require('Faker');
var zero = '0';
var twitter = 'http://twitter.com/';
var linkedIn = 'https://uk.linkedin.com/';
var facebook = 'https://www.facebook.com/';

function getRandomArbitrary(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

module.exports = {

  secondMobile: function(){
    var secondMobile = [zero + getRandomArbitrary(7000000000, 7777777777).toString(), null];
    return secondMobile;
  },

  primaryMobile: function(){
    var primaryMobile = zero + getRandomArbitrary(7000000000, 7777777777).toString();
    return primaryMobile;
  },

  secondEmail: function(){
    var secondEmail = [faker.Internet.email(), null];
    return secondEmail;
  },

  email: function(){
    var email = faker.Internet.email();
    return email;
  },

  twitter: function(name){
    var twitterProfile = [twitter + name, null];
    return twitterProfile;
  },

  linkedIn: function(name){
    var linkedInProfile = [linkedIn + name, null];
    return linkedInProfile;
  },

  facebook: function(name){
    var facebookProfile = [facebook + name, null];
    return facebookProfile;
  }

};
