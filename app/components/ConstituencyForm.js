var React = require('react');
var { RouteHandler, Navigation } = require('react-router');
var ConstituencyActionCreators = require('../actions/ConstituencyActionCreators.js');
require('../../public/stylesheets/main.css');
require('../stylesheets/ConstituencyForm.css');

var ConstituencyForm = React.createClass({

	mixins: [Navigation],

	componentDidMount: function() {
		var nlform = new NLForm(document.getElementById('nl-form'));
	},

	handleSubmit: function (e) {
		e.preventDefault();
		var inputs = document.getElementsByClassName('nl-field-toggle');
		var constituencyInput = inputs[0].innerText;
		var postalCodeinput = inputs[1].innerText;
		
		if(constituencyInput === 'constituency' && postalCodeinput === 'postal code') {
			// none of the inputs were selected
			console.log('Please select either of the inputs');
		} else if (constituencyInput !== 'constituency' && postalCodeinput !== 'postal code') {
			// both inputs were selected
			console.log('Only choose 1 of the option');
		} else {
			if(constituencyInput !== 'constituency') {
				// Constituency was selected
				this.transitionTo('info', {name: constituencyInput});
			} else {
				// Postal code was selected
				if(postalCodeinput.toString().length === 6) {
					// valid
					ConstituencyActionCreators.getDivisionData(null, postalCodeinput);
				} else {
					console.log('Invalid postal code');
				}
				
			}
		}
	},

  render: function() {
   return(
   	<div>
   		<div className="content">
   			<div className="container">
					<form onSubmit={this.handleSubmit} id="nl-form" className="nl-form row">
						<span className="block-text">I am from</span>
						<select>
							<option value="">constituency</option>
							<option value="Ang Mo Kio GRC">Ang Mo Kio GRC</option>
							<option value="Marsiling-Yew Tee GRC">Marsiling-Yew Tee GRC</option>
						</select>
						<span className="block-text">or</span>
						<input type="text" value="" placeholder="postal code" data-subline="For example: <em>Singapore 271030</em> or <em>131 Jalan Bukit Merah</em>"/>
						<div className="nl-submit-wrap">
							<button className="nl-submit" type="submit">Find my constituency</button>
						</div>
						<div className="nl-overlay"></div>
					</form>
				</div>
			</div>
			<RouteHandler />
		</div>
	)}
});

module.exports = ConstituencyForm;