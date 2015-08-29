var React = require('react');

var Politician = React.createClass({
	render: function() {
		return (
			<div>
				<img src={this.props.image} height='80' width='auto' />
				<p>Name: {this.props.name}</p>
				<p>{this.props.desc}</p>
			</div>
		);
	}
});

module.exports = Politician;