var React = require('react');
var $ = require('jquery/dist/jquery.min.js');

var Notification = React.createClass({

	onClick: function () {
		if(this.props.onErrorClose)
			this.props.onErrorClose();
	},
	
	render: function() {
		
		var styles = {
			height: '20px',
    	padding: '20px',
    	backgroundColor: '#D04747',
    	zIndex: 2000,
    	position: 'fixed',
    	left: 0,
    	right: 0,
    	textAlign: 'center',
    	color: '#fff',
    	fontSize: '20px'
		};

		return (
			<span style={styles}>
				{this.props.message}
				<img style={{float: 'right', cursor: 'pointer'}} ref="close" src='/images/close.png' width="20" onClick={this.onClick} />
			</span>
		);
	}
});

module.exports = Notification;