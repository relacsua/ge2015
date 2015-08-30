var React = require('react');
var Candidate = require('./Candidate.js')

var Party = React.createClass({

	renderCandidates: function() {
		var Candidates = this.props.candidates.map(function(candidate) {
			return <Candidate key={candidate._id} name={candidate.name} desc={candidate.desc} image={candidate.image} />
		});

		return Candidates;
	},

	render: function() {
		return (
			<div>
				<img src={this.props.image} height="100" width="auto" />
				<h2>{this.props.name} ({this.props.abbr})</h2>
				<p>{this.props.current}</p>
				<div>{this.renderCandidates()}</div>
			</div>
		);
	}

});

module.exports = Party;