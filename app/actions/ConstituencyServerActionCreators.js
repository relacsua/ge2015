var AppDispatcher = require('../AppDispatcher.js');
var ConstituencyConstants = require('../constants/ConstituencyConstants.js');

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
	
	var errorMessage = (errorCode === 404) ? "The division you're looking for doesn't exist." : "Something went wrong. Try again."

	AppDispatcher.dispatch({
		type: ActionTypes.GET_CONSTITUENCY_FAILURE,
		errorMessage: errorMessage
	});
}

module.exports = {
	getDivisionDataSuccess,
	getDivisionDataFailure
}