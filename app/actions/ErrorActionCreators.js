var AppDispatcher = require('../AppDispatcher.js');
var ConstituencyConstants = require('../constants/ConstituencyConstants.js');

var ActionTypes = ConstituencyConstants.ActionTypes;

module.exports = {
	removeErrorMessage: function () {
		console.log('removing error message');
		AppDispatcher.dispatch({
			type: ActionTypes.DELETE_ERROR_MESSAGE
		});
	},

	showErrorMessage: function (errorMessage) {
		console.log('showing error message');
		AppDispatcher.dispatch({
			type: ActionTypes.SHOW_ERROR_MESSAGE,
			errorMessage
		});
	}
}