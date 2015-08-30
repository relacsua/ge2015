var React = require('react');
var { State } = require('react-router');
var ConstituencyStore = require('../stores/ConstituencyStore.js');
var ConstituencyActionCreators = require('../actions/ConstituencyActionCreators.js');
var Party = require('./Party.js');

function getFromConstituencyStore() {
	return {
		currentDivisionData: ConstituencyStore.getCurrentDivisionData()
	}
}

var ConstituencyInfo = React.createClass({

	mixins: [State],

	getInitialState: function() {
		return getFromConstituencyStore();
	},

	_getDivisionName: function() {
		return this.getParams().name;
	},

	_init: function () {
		var divisionName = this._getDivisionName();
		ConstituencyActionCreators.getDivisionData(divisionName);
	},

	componentWillMount: function() {
		this._init();
	},

	componentWillReceiveProps: function(nextProps) {
		this._init();
	},

	componentDidMount: function() {
		ConstituencyStore.addChangeListener(this._onChange);
	},

	componentWillUnmount: function() {
		ConstituencyStore.removeChangeListener(this._onChange);
	},

	_onChange: function() {
		this.setState(getFromConstituencyStore());
	},

	renderDivisionData: function() {
		var data = this.state.currentDivisionData;
		console.log(data);
		return (
			<div>
				<h1>{data.divisionName}</h1>
				<p>Number of seats contested: {data.seats}</p>
				<p>Number of electors: {data.electors}</p>
				<div>
					{
						data.parties.map(function(party) {
							return <Party key={party._id} name={party.name} image={party.image} abbr={party.abbr} candidates={party.candidates} />
						})
					}
				</div>
			</div>
		)
	},

	render: function() {
		var Loading = <p>Loading...</p>
		return (
			<div className="content">
   			<div className="container">
   				{this.state.currentDivisionData === null ? {Loading} : this.renderDivisionData()}
   			</div>
   		</div>
		);
	}
});

module.exports = ConstituencyInfo;