var React = require('react');
var Router = require('react-router');
var { DefaultRoute, Route, Redirect } = Router;

var routes = (
	<Route handler={require('./components/Layout.js')}>
		<Route name="form" path="/" handler={require('./components/ConstituencyForm.js')}>
			<Route name="info" path="/division/:name" handler={require('./components/ConstituencyInfo.js')} />
		</Route>
		<Redirect from="/_=_" to="/" />
	</Route>
);

module.exports = routes;