var React = require('react');
var { RouteHandler, Navigation } = require('react-router');
var ConstituencyActionCreators = require('../actions/ConstituencyActionCreators.js');
var ErrorActionCreators = require('../actions/ErrorActionCreators.js');
var ConstituencyStore = require('../stores/ConstituencyStore.js');
var ErrorStore = require('../stores/ErrorStore.js');
require('../../public/stylesheets/main.css');
require('../stylesheets/ConstituencyForm.css');

var ConstituencyForm = React.createClass({

	mixins: [Navigation],

	getInitialState: function() {
		return {
			loading: false 
		};
	},

	componentWillUnmount: function() {
		ConstituencyStore.removeChangeListener(this._onChange);
		ErrorStore.removeChangeListener(this._onChange);
	},

	_onChange: function () {
		var data = ConstituencyStore.getCurrentDivisionData();
		var error = ErrorStore.getErrorMessage();
		if(data)
			this.setState({loading: false});
		if(this.state.loading && error)
			this.setState({loading: false});
	},

	componentDidMount: function() {
		ConstituencyStore.addChangeListener(this._onChange);
		ErrorStore.addChangeListener(this._onChange);
		var nlform = new NLForm(document.getElementById('nl-form'));
	},

	handleSubmit: function (e) {
		e.preventDefault();
		if(this.state.loading) return;
		var inputs = document.getElementsByClassName('nl-field-toggle');
		var constituencyInput = inputs[0].innerText;
		var postalCodeinput = inputs[1].innerText;
		
		if(constituencyInput === 'constituency' && postalCodeinput === 'postal code') {
			// none of the inputs were selected
			ErrorActionCreators.showErrorMessage('Please select either one of the inputs');
			return;
		} else if (constituencyInput !== 'constituency' && postalCodeinput !== 'postal code') {
			// both inputs were selected
			ErrorActionCreators.showErrorMessage('Only choose 1 of the options');
			return;
		} else {
			if(constituencyInput !== 'constituency') {
				// Constituency was selected
				this.setState({loading: true});
				this.transitionTo('info', {name: constituencyInput});
			} else {
				// Postal code was selected
				if(postalCodeinput.length === 6) {
					// valid
					this.setState({loading: true});
					ConstituencyActionCreators.getDivisionData(null, postalCodeinput);
				} else {
					ErrorActionCreators.showErrorMessage('Invalid postal code');
					return;
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
							<option value="Aljunied GRC">Aljunied GRC</option>
							<option value="Ang Mo Kio GRC">Ang Mo Kio GRC</option>
							<option value="Bishan-Toa Payoh GRC">Bishan-Toa Payoh GRC</option>
							<option value="Bukit Batok SMC">Bukit Batok SMC</option>
							<option value="Bukit Panjang SMC">Bukit Panjang SMC</option>
							<option value="Choa Chu Kang GRC">Choa Chu Kang GRC</option>
							<option value="East Coast GRC">East Coast GRC</option>
							<option value="Fengshan SMC">Fengshan SMC</option>
							<option value="Holland-Bukit Timah GRC">Holland-Bukit Timah GRC</option>
							<option value="Hong Kah North SMC">Hong Kah North SMC</option>
							<option value="Hougang SMC">Hougang SMC</option>
							<option value="Jalan Besar GRC">Jalan Besar GRC</option>
							<option value="Jurong GRC">Jurong GRC</option>
							<option value="MacPherson SMC">MacPherson SMC</option>
							<option value="Marine Parade GRC">Marine Parade GRC</option>
							<option value="Marsiling-Yew Tee GRC">Marsiling-Yew Tee GRC</option>
							<option value="Mountbatten SMC">Mountbatten SMC</option>
							<option value="Nee Soon GRC">Nee Soon GRC</option>
							<option value="Pasir Ris-Punggol GRC">Pasir Ris-Punggol GRC</option>
							<option value="Pioneer SMC">Pioneer SMC</option>
							<option value="Potong Pasir SMC">Potong Pasir SMC</option>
							<option value="Punggol East SMC">Punggol East SMC</option>
							<option value="Radin Mas SMC">Radin Mas SMC</option>
							<option value="Sembawang GRC">Sembawang GRC</option>
							<option value="Sengkang West SMC">Sengkang West SMC</option>
							<option value="Tampines GRC">Tampines GRC</option>
							<option value="Tanjong Pagar GRC">Tanjong Pagar GRC</option>
							<option value="West Coast GRC">West Coast GRC</option>
							<option value="Yuhua SMC">Yuhua SMC</option>
						</select>
						<span className="block-text">or</span>
						<input type="text" value="" placeholder="postal code" data-subline="For example: <em>271030</em> or <em>160131</em>"/>
						<div className="nl-submit-wrap">
							<button className="nl-submit" type="submit">{this.state.loading ? 'Loading ...'  : 'Find my constituency'}</button>
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