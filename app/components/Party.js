var React = require('react');
var Candidate = require('./Candidate.js')
// var $ = require('jquery/dist/jquery');

var Party = React.createClass({

	renderCandidates: function () {
		var candidates = this.props.candidates.map(function(candidate) {
			return <Candidate key={candidate._id} name={candidate.name} desc={candidate.desc} image={candidate.image} />
		});

		return (
			<div className="candidate-panel u-cf">
				{candidates}
			</div>
		)
	},


	render: function() {
		return (
			<div className="twelve columns">
				<div className="party-header u-cf">
					<img className="party-image" src={this.props.image} />
					<h3>{this.props.name}</h3>
					<span>({this.props.status})</span>
				</div>
				<div className="party-content u-cf">
					{this.renderCandidates()}
				</div>
			</div>
		);
	}

});

module.exports = Party;