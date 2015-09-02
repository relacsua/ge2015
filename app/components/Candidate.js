var React = require('react');
require('../stylesheets/Party.css');

var Candidate = React.createClass({
	render: function() {
		return (
			<div className="candidate">
				<img src={this.props.image} />
				<span>{this.props.name}</span>
			</div>
		);
	}
});

module.exports = Candidate;