var React = require('react');
var { RouteHandler } = require('react-router');

var Layout = React.createClass({
	render: function() {
		return (
			<div>
				<p>Header</p>
				<RouteHandler />
				<p>footer</p>
			</div>
		);
	}
});

module.exports = Layout;