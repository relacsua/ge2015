var React = require('react');
var Politician = require('./Politician.js')

var Party = React.createClass({

	renderPoliticans: function() {
		var Politicians = this.props.politicians.map(function(politician) {
			return <Politician key={politician._id} name={politician.name} desc={politician.desc} image={politician.image} />
		});

		return Politicians;
	},

	render: function() {
		return (
			<div>
				<img src={this.props.image} height="100" width="auto" />
				<h2>{this.props.name} ({this.props.abbr})</h2>
				<div>{this.renderPoliticans()}</div>
			</div>
		);
	}

});

module.exports = Party;