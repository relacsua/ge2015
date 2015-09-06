var React = require('react');
var { State, Navigation } = require('react-router');
var ConstituencyStore = require('../stores/ConstituencyStore.js');
var ConstituencyActionCreators = require('../actions/ConstituencyActionCreators.js');
var Party = require('./Party.js');
var SingaporeMap = require('./SingaporeMap.js');
require('../stylesheets/ConstituencyInfo.css');
var $ = require('jquery/dist/jquery.min.js');

function getFromConstituencyStore() {
	return {
		currentDivisionData: ConstituencyStore.getCurrentDivisionData()
	}
}

var ConstituencyInfo = React.createClass({

	mixins: [State, Navigation],

	getInitialState: function() {
		return getFromConstituencyStore();
	},

	_getDivisionName: function() {
		return this.getParams().name;
	},

	_init: function () {
		var currentDivisionName = null;
		if(ConstituencyStore.getCurrentDivisionData())
			currentDivisionName = ConstituencyStore.getCurrentDivisionData().divisionName;
		var divisionName = this._getDivisionName();
		if(currentDivisionName === null || currentDivisionName !== divisionName)
			ConstituencyActionCreators.getDivisionData(divisionName);
	},

	componentWillMount: function() {
		this._init();
	},

	componentWillReceiveProps: function(nextProps) {
		if(nextProps.params.name !== this.props.params.name)
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
		if(this.state.currentDivisionData !== null) {
      $('html, body').animate({
          scrollTop: $('.content').outerHeight()
      }, 1000);
		}
	},

	_underscore: function(title) {
		return title.toLowerCase().split(' ').join('-');
	},

	renderDivisionData: function() {
		var data = this.state.currentDivisionData;
		return (
			<div className="container">
				<div className="row constituency-info">
					<div className="twelve columns division-info">
						<h1 className="constituency-name">{data.divisionName}</h1>
						<p className="constituency-details">{data.seats} seats | {data.electors} electors</p>
						<SingaporeMap grc={this._underscore(data.divisionName)}/>
					</div>
					<div className="twelve columns party-info">
						<div className="row">
							{
								data.parties.map(function(party) {
									return <Party key={party._id} name={party.name} image={party.image} candidates={party.candidates} status={party.status} />
								})
							}
						</div>
					</div>
				</div>
			</div>
		)
	},

	render: function() {
		return (
			<div>
   			{this.state.currentDivisionData === null ? null: this.renderDivisionData()}
   		</div>
		);
	}
});

module.exports = ConstituencyInfo;