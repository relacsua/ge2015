var React = require('react');
var { State } = require('react-router');
var ConstituencyStore = require('../stores/ConstituencyStore.js');
var ConstituencyActionCreators = require('../actions/ConstituencyActionCreators.js');
var Party = require('./Party.js');

function getFromConstituencyStore() {
	return {
		anyPendingRequest: ConstituencyStore.anyPendingRequest(),
		currentDivisionData: ConstituencyStore.getCurrentDivisionData()
	}
}

var ConstituencyInfo = React.createClass({

	mixins: [State],

	getInitialState: function() {
		return {
			currentDivisionData: null
		}
	},

	componentWillMount: function() {
		var divisionName = this.getDivisionName();
		var divisionData = ConstituencyStore.containsDivisionData(divisionName); //check if the division date is already cache-ed
		if(divisionData) {
			console.log('info taken from cache'); // Need to test this.
			this.setState({currentDivisionData: divisionData});
		} else {
			this.setState({anyPendingRequest: true});
			ConstituencyActionCreators.fetchDivisionData(divisionName);
		}
	},

	componentDidMount: function() {
		ConstituencyStore.addChangeListener(this._onChange);
	},

	componentWillUnmount: function() {
		ConstituencyStore.removeChangeListener(this._onChange);
	},

	_onChange: function() {
		console.log('onChange: ', getFromConstituencyStore());
		this.setState(getFromConstituencyStore());
	},

	getDivisionName: function() {
		return this.getParams().divisionName;
	},

	renderDivisionData: function() {
		var data = this.state.currentDivisionData;
		return (
			<div>
				<h1>{data.divisionName}</h1>
				<p>Number of seats contested: {data.seats}</p>
				<div>
					{
						data.parties.map(function(party) {
							return <Party key={party._id} name={party.name} image={party.image} abbr={party.abbr} politicians={party.politicians} />
						})
					}
				</div>
			</div>
		)
	},

	render: function() {
		return (
			<div>
				{
					this.state.anyPendingRequest ? 
					<p>loading</p> : 
					<div>{this.renderDivisionData()}</div>
				}
			</div>
		);
	}
});

module.exports = ConstituencyInfo;