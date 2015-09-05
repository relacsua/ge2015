var AppDispatcher = require('../AppDispatcher.js');
var ConstituencyConstants = require('../constants/ConstituencyConstants.js');
var router = require('../router.js');

var ActionTypes = ConstituencyConstants.ActionTypes;

function getDivisionDataSuccess(divisionData) {
	console.log('getDivisionDataSuccess called in ConstituencyServerActionCreators');
	AppDispatcher.dispatch({
		type: ActionTypes.GET_CONSTITUENCY_SUCCESS,
		data: divisionData
	});
}

function getDivisionDataFailure(errorCode) {
	console.log('getDivisionDataFailure called in ConstituencyServerActionCreators');
	
	var errorMessage = (errorCode === 404) ? "The constituency you're looking for doesn't exist." : "Something went wrong. Try again."

	AppDispatcher.dispatch({
		type: ActionTypes.GET_CONSTITUENCY_FAILURE,
		errorMessage: errorMessage
	});
}

function getDivisionNameSuccess(divisionData) {
	console.log('getDivisionNameSuccess called in ConstituencyServerActionCreators');
	// AppDispatcher.dispatch({
	// 	type: ActionTypes.GET_CONSTITUENCY_NAME_SUCCESS,
	// 	name: toTitleCase(divisionData.name)
	// });
	router.transitionTo('info', {name: toTitleCase(divisionData.name)});
}

function getDivisionNameFailure(errorCode) {
	console.log('getDivisionNameFailure called in ConstituencyServerActionCreators');
	
	var errorMessage = (errorCode === 400) ? "You have typed an invalid postal code" : "Something went wrong. Try again."

	AppDispatcher.dispatch({
		type: ActionTypes.GET_CONSTITUENCY_NAME_FAILURE,
		errorMessage: errorMessage
	});
}

function toTitleCase (str) {
	var arrayOfString = str.split(' ');
	var grc = arrayOfString.pop();
	var newString = arrayOfString.join(' ');
	newString = newString.replace(/\b\w+/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});	
	return newString + ' ' + grc;
}

module.exports = {
	getDivisionDataSuccess,
	getDivisionDataFailure,
	getDivisionNameSuccess,
	getDivisionNameFailure
}