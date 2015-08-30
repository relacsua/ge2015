var RSVP = require('rsvp');
var ConstituencyServerActionCreators = require('../actions/ConstituencyServerActionCreators.js');

var getJSON = function(url) {
  var promise = new RSVP.Promise(function(resolve, reject){
    var client = new XMLHttpRequest();
    client.open("GET", url);
    client.onreadystatechange = handler;
    client.responseType = "json";
    client.setRequestHeader("Accept", "application/json");
    client.send();

    function handler() {
      if (this.readyState === this.DONE) {
        if (this.status === 200) { 
          resolve(this.response);
        } else {
          reject(this);
        }
      }
    };
  });

  return promise;
};

function getDivisionWithName(divisionName) {
  console.log('get division api called with ', divisionName);
  var url = "/api/division/" + divisionName;
  getJSON(url).then(function(divisionData) {
    ConstituencyServerActionCreators.getDivisionDataSuccess(divisionData);
  }, function(error) {
    ConstituencyServerActionCreators.getDivisionDataFailure(error.status);
  });
}

function getDivisionWithPostalCode(postalCode) {
  var url = "/api/code/" + postalCode;
  getJSON(url).then(function(divisionData) {
    ConstituencyServerActionCreators.getDivisionNameSuccess(divisionData);
  }, function(error) {
    ConstituencyServerActionCreators.getDivisionNameFailure(error.status);
  });
}

module.exports = {
  getDivisionWithName,
  getDivisionWithPostalCode
}
