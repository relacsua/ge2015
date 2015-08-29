var AppDispatcher = require('../AppDispatcher.js');
var ConstituencyConstants = require('../constants/ConstituencyConstants.js');
var ElectionAPI = require('../utils/geAPI.js');

var ActionTypes = ConstituencyConstants.ActionTypes;

module.exports = {
	fetchDivisionData: function(divisionName) {
		console.log('fetchDivisionData in ConstituencyActionCreators called');
		AppDispatcher.dispatch({
			type: ActionTypes.GET_CONSTITUENCY,
		});
		ElectionAPI.getDivisionData(divisionName);
	}
}