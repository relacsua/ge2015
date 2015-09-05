var AppDispatcher = require('../AppDispatcher.js');
var ConstituencyConstants = require('../constants/ConstituencyConstants.js');
var ElectionAPI = require('../utils/geAPI.js');

var ActionTypes = ConstituencyConstants.ActionTypes;

module.exports = {
	getDivisionData: function(divisionName, postalCode) {
		console.log('getDivisionData in ConstituencyActionCreators called');
		AppDispatcher.dispatch({
			type: ActionTypes.GET_CONSTITUENCY
		});
		if(divisionName)
			ElectionAPI.getDivisionWithName(divisionName);
		else
			ElectionAPI.getDivisionWithPostalCode(postalCode);
	}
}