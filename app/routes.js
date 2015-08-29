var React = require('react');
var Router = require('react-router');
var { DefaultRoute, Route } = Router;

var routes = (
	<Route handler={require('./components/Layout.js')}>
		<Route name="form" path="/" handler={require('./components/ConstituencyForm.js')}>
			<Route name="info" path="/division/:divisionName" handler={require('./components/ConstituencyInfo.js')} />
		</Route>
		<Route name="ballot" path="/division/:name/vote" handler={require('./components/Ballot.js')} />
		<Route name="results" path="/results" handler={require('./components/ElectionResults.js')} />
	</Route>
);

module.exports = routes;