var mongoose = require('mongoose');

var divisionSchema = mongoose.Schema({
	divisionName: String,	// eg Holland-Bukit Timah GRC
	seats: Number,				// Number of seats that is contested
	voters: Number,				// Number of voters
	parties: [{
		image: String,			// Url containing image of logo
		name: String,				// eg People's Action Party
		abbr: String,				// eg PAP
		politicians: [{
			image: String,		//Url containing image of politician
			name: String,			// Name of politician
			desc: String,			// Short desc of politician 
		}],
		vote: [{
			minAge: Number		// minimum Age of voters
		}]
	}]
});

divisionSchema.pre('save', function(next) {
	var currentDate = new Date();
  this.updatedAt = currentDate;
  if (!this.created_at)
    this.createdAt = currentDate;
  next();
});

var Division = mongoose.model('Division', divisionSchema);

var Marsiling_YewTee_GRC = Division({
	divisionName: 'Marsiling-Yew Tee GRC',
	seats: 4,
	voters: 0,
	parties: [{
		image: 'https://s3-ap-southeast-1.amazonaws.com/ge2015/Images/pap.jpg',
		name: 'People\'s Action Party',
		abbr: 'PAP',
		politicians: [{
			image: 'https://s3-ap-southeast-1.amazonaws.com/ge2015/Images/MdmHalimahYacob.jpg',
			name: 'Mdm Halimah Yacob',
			desc: 'Speaker of Parliament'
		},{
			image: 'https://s3-ap-southeast-1.amazonaws.com/ge2015/Images/MrLawrenceWong.jpg',
			name: 'Mr Lawrence Wong',
			desc: 'Culture, Community and Youth Minister'
		},{
			image: 'https://s3-ap-southeast-1.amazonaws.com/ge2015/Images/MrAlexYamZiming.jpg',
			name: 'Mr Alex Yam Ziming',
			desc: 'Executive Director, PAP HQ'
		},{
			image: 'https://s3-ap-southeast-1.amazonaws.com/ge2015/Images/MrOngTengKoon.jpg',
			name: 'Mr Ong Teng Koon',
			desc: 'Commodities trader, Morgan Stanley'
		}],
		vote: []
	},{
		image: 'https://s3-ap-southeast-1.amazonaws.com/ge2015/Images/Logo_of_the_SDP.svg',
		name: 'Singapore Democratic Party',
		abbr: 'SDP',
		politicians: [{
			image: 'https://s3-ap-southeast-1.amazonaws.com/ge2015/Images/MdmHalimahYacob.jpg',
			name: 'Mdm Halimah Yacob',
			desc: 'Speaker of Parliament'
		},{
			image: 'https://s3-ap-southeast-1.amazonaws.com/ge2015/Images/MrLawrenceWong.jpg',
			name: 'Mr Lawrence Wong',
			desc: 'Culture, Community and Youth Minister'
		},{
			image: 'https://s3-ap-southeast-1.amazonaws.com/ge2015/Images/MrAlexYamZiming.jpg',
			name: 'Mr Alex Yam Ziming',
			desc: 'Executive Director, PAP HQ'
		},{
			image: 'https://s3-ap-southeast-1.amazonaws.com/ge2015/Images/MrOngTengKoon.jpg',
			name: 'Mr Ong Teng Koon',
			desc: 'Commodities trader, Morgan Stanley'
		}],
		vote: []
	}]
});

if(process.argv[2] === 'populateDB') {
	Marsiling_YewTee_GRC.save(function (err) {
		if(err) console.log('Upload Marsiling Yew Tee GRC: ERROR');
		else console.log('Upload Marsiling Yew Tee GRC: SUCCESS');
	});
}

module.export = Division; 