var keyMirror = require('keymirror');

module.exports = {
	ActionTypes: keyMirror({
		GET_CONSTITUENCY: null,
		GET_CONSTITUENCY_SUCCESS: null,
		GET_CONSTITUENCY_FAILURE: null,
		
		VOTE_CONSTITUENCY: null,
		VOTE_CONSTITUENCY_SUCCESS: null,
		VOTE_CONSTITUENCY_FAILURE: null,

		GET_ELECTION_RESULTS: null,
		GET_ELECTION_RESULTS_SUCCESS: null,
		GET_ELECTION_RESULTS_FAILURE: null,

	})
};