var React = require('react');

var Candidate = React.createClass({
	render: function() {
		return (
			<div>
				<img src={this.props.image} height='80' width='auto' />
				<p>Name: {this.props.name}</p>
			</div>
		);
	}
});

module.exports = Candidate;