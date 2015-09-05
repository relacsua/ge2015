var keyMirror = require('keymirror');

module.exports = {
	ActionTypes: keyMirror({
		GET_CONSTITUENCY: null,
		GET_CONSTITUENCY_SUCCESS: null,
		GET_CONSTITUENCY_FAILURE: null,

		GET_CONSTITUENCY_NAME_SUCCESS: null,
		GET_CONSTITUENCY_NAME_FAILURE: null,

		DELETE_ERROR_MESSAGE: null,
		SHOW_ERROR_MESSAGE: null
	})
};