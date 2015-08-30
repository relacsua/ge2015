var React = require('react');
var { RouteHandler } = require('react-router');

// TODO: Add a notification component and add it to thi, Layout component
var Layout = React.createClass({
	render: function() {
		return (
			<div>
				<RouteHandler />
			</div>
		);
	}
});

module.exports = Layout;