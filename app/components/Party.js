var React = require('react');
var Candidate = require('./Candidate.js')
// var $ = require('jquery/dist/jquery');

var Party = React.createClass({

	renderCandidates: function () {
		var candidates = this.props.candidates.map(function(candidate) {
			return <Candidate key={candidate._id} name={candidate.name} desc={candidate.desc} image={candidate.image} />
		});

		return (
			<div>
				{candidates}
			</div>
		);
	},


	render: function() {
		return (
			<div className="six columns">
				<div className="party-card">
					<div className="party-card-header">
						<img className="party-image" src={this.props.image} />
						<div className="party-name">
							<p>{this.props.name}</p>
						</div>
					</div>
					<div className="party-card-content">
						{this.renderCandidates()}
					</div>
				</div>
			</div>
		);
	}

});

module.exports = Party;