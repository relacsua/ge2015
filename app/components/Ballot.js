var React = require('react');
var { State } = require('react-router');
var BallotPaper = require('./BallotPaper.js');
require('../stylesheets/Ballot.css');

var Ballot = React.createClass({

  mixins: [State],

  _getDivisionName: function() {
    return this.getParams().name;
  },

	render: function() {
		return (
      <div className="container">
			 <BallotPaper name={this._getDivisionName()} />

       <a href="#"className="facebook-btn">Login with facebook</a>
      </div>
		);
	}
});

module.exports = Ballot;