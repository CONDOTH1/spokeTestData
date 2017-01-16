var faker = require('Faker');
var personDetails = require('./personDetails');
var addressDetails = require('./addressDetails');
var uuid = require('node-uuid');
var contactDetails = require('./contactDetails');

function randomAddressNumber() {
  return Math.floor(Math.random() * 2063);
}

function chooseRandom(array){
  return array[Math.floor(Math.random() * array.length)];
}

function getUserDetails(addressNumberOne, addressNumberTwo){
  var secondaryAddress = chooseRandom([0,1]);
  var primaryAddress = 0;
  var firstName = personDetails.firstName(faker.Name.firstName());
  var details = {
    uid: uuid.v4(),
    prefix: chooseRandom(personDetails.prefix(faker.random.name_prefix())),
    firstName: firstName,
    middleName: chooseRandom(personDetails.middleName(faker.Name.firstName())),
    lastName: personDetails.lastName(faker.Name.lastName()),
    preferredName: personDetails.preferredName(),
    sex: chooseRandom(personDetails.sex()),
    dateOfBirth: personDetails.dateOfBirth(),
    countryOfResidence: addressDetails.countryOfResidence('United Kingdom')[primaryAddress],
    residingAddressLine1: addressDetails.addressLine1(addressNumberOne)[primaryAddress],
    residingAddressLine2: addressDetails.addressLine2(addressNumberOne)[primaryAddress],
    residingAddressCity: addressDetails.city(addressNumberOne)[primaryAddress],
    residingAddressPostcode: addressDetails.postcode(addressNumberOne)[primaryAddress],
    secondHomeAddressLine1: addressDetails.addressLine1(addressNumberTwo)[secondaryAddress],
    secondHomeAddressLine2: addressDetails.addressLine2(addressNumberTwo)[secondaryAddress],
    secondHomeCity: addressDetails.city(addressNumberTwo)[secondaryAddress],
    secondHomeCountry: addressDetails.countryOfResidence('United Kingdom')[secondaryAddress],
    secondHomePostcode: addressDetails.postcode(addressNumberTwo)[secondaryAddress],
    primaryMobileNumber: contactDetails.primaryMobile(),
    secondaryMobileNumber: chooseRandom(contactDetails.secondMobile()),
    email: faker.Internet.email(),
    secondaryEmail: chooseRandom(contactDetails.secondEmail()),
    twitterProfile: chooseRandom(contactDetails.twitter(firstName)),
    linkedInProfile: chooseRandom(contactDetails.linkedIn(firstName)),
    facebookProfile: chooseRandom(contactDetails.facebook(firstName))
  };
  return details;
}


module.exports = {

  setAddress: function(addressObject){
    return new Promise(function(resolve, reject){
      var detailsToReturn = getUserDetails(randomAddressNumber(), randomAddressNumber());
      resolve(detailsToReturn);
      resolve();
    });
  }
};
