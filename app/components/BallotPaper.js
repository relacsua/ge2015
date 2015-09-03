var React = require('react');
require('../stylesheets/Ballot.css');

var BallotPaper = React.createClass({
  render: function() {
    return(
      <div className="ballot-paper">
        <h1 className="text-center">Unofficial General Elections</h1>
        <h3 className="text-center text-italic">{this.props.name}</h3>

        <hr className="ballot-hr" />

        <BallotListItem/>

      </div>
    );
  }
});

module.exports = BallotPaper;