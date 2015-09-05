var React = require('react');
var { RouteHandler } = require('react-router');
var Notification = require('./Notification.js');
var ErrorStore = require('../stores/ErrorStore.js');
var ErrorActionCreators = require('../actions/ErrorActionCreators');

var Layout = React.createClass({

	getInitialState: function() {
		return {
			errorMessage: null 
		};
	},

	componentDidMount: function() {
		ErrorStore.addChangeListener(this._onChange);
	},

	componentWillUnmount: function() {
		ErrorStore.removeChangeListener(this._onChange);
	},

	_onChange: function () {
		this.setState({errorMessage: ErrorStore.getErrorMessage()})
	},

	onErrorClose: function() {
		ErrorActionCreators.removeErrorMessage();
	},

	render: function() {
		return (
			<div>
				{ !!this.state.errorMessage ? <Notification message={this.state.errorMessage} onErrorClose={this.onErrorClose} /> : null}
				<RouteHandler />
			</div>
		);
	}
});

module.exports = Layout;