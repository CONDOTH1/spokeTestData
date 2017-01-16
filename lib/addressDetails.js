
var googleAddresses = require('./googleAddress');

module.exports = {

  countryOfResidence: function(country){
    var cor = [country, null];
    return cor;
  },

  postcode: function(number){
    var postcode = [googleAddresses[number].postcode, null];
    return postcode;
  },

  addressLine1: function(number){
    var addressLine1 = [googleAddresses[number].ward, null];
    return addressLine1;
  },

  addressLine2: function(number){
    var addressLine2 = [googleAddresses[number].district, null];
    return addressLine2;
  },

  city: function(number){
    var city = [googleAddresses[number].city, null];
    return city;
  }

};
