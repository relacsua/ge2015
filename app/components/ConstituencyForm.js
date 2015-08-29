var React = require('react');
var { RouteHandler, Link } = require('react-router');
var ConstituencyStore = require('../stores/ConstituencyStore.js');
var ConstituencyActionCreators = require('../actions/ConstituencyActionCreators.js');

function getFromConstituencyStore() {
	return {
		anyPendingRequest: ConstituencyStore.anyPendingRequest()
	}
}

var ConstituencyForm = React.createClass({
	
	getInitialState: function() {
		return getFromConstituencyStore();
	},

	componentDidMount: function() {
		ConstituencyStore.addChangeListener(this._onChange);
	},

	componentWillUnmount: function() {
		ConstituencyStore.removeChangeListener(this._onChange);
	},

	_onChange: function() {
		console.log('change in store state');
		this.setState(getFromConstituencyStore());
	},

	handleClick: function(e) {
		if(!this.state.anyPendingRequest) {
			var button = e.target;
			ConstituencyActionCreators.fetchDivisionData(button.dataset.division);
		}
	},

  render: function() {
   return(
   	<div>
			<Link to="info" params={{divisionName: "Marsiling-Yew Tee GRC"}}>Marsiling-Yew Tee GRC</Link>
			<RouteHandler />
			</div>
		)
  }
});

module.exports = ConstituencyForm;