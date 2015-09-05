var React = require('react');
require('../stylesheets/Party.css');

var Candidate = React.createClass({
	render: function() {
		return (
			<div className="candidate">
				<img src={this.props.image} />
				<span className="name">{this.props.name}</span>
				<span className="desc">{this.props.desc}</span>
			</div>
		);
	}
});

module.exports = Candidate;