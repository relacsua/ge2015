var mongoose = require('mongoose');

var divisionSchema = mongoose.Schema({
	divisionName: String,	// eg Holland-Bukit Timah GRC
	electors: String,	// Total number of voters
	seats: Number,				// Number of seats that is contested
	voters: Number,				// Number of voters
	parties: [{
		image: String,			// Url containing image of logo
		name: String,				// eg People's Action Party
		abbr: String,				// eg PAP
		status: String,
		candidates: [{
			image: String,		//Url containing image of politician
			name: String,			// Name of politician
			desc: String,			// Short desc of politician 
		}],
		votes: {
			13: Number,
			18: Number,
			21: Number
		}
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

var Ang_Mo_Kio_GRC = Division({
	divisionName: 'Ang Mo Kio GRC',
	electors: '187,652',
	seats: 6,
	voters: 0,
	parties: [{
		image: 'https://s3-ap-southeast-1.amazonaws.com/ge2015/Images/PAP.svg',
		name: 'People\'s Action Party',
		abbr: 'PAP',
		status: 'Incumbent',
		votes: {
			13: 0,
			18: 0,
			21: 0
		},
		candidates: [{
			image: 'https://s3-ap-southeast-1.amazonaws.com/ge2015/Images/LeeHsienLoong.jpg',
			name: 'Lee Hsien Loong',
			desc: ''
		},{
			image: 'https://s3-ap-southeast-1.amazonaws.com/ge2015/Images/AngHinKee.jpg',
			name: 'Ang Hin Kee',
			desc: ''
		},{
			image: 'https://s3-ap-southeast-1.amazonaws.com/ge2015/Images/DarrylDavid.jpg',
			name: 'Darryl David',
			desc: ''
		},{
			image: 'https://s3-ap-southeast-1.amazonaws.com/ge2015/Images/GanThiamPoh.jpg',
			name: 'Gan Thiam Poh',
			desc: ''
		},{
			image: 'https://s3-ap-southeast-1.amazonaws.com/ge2015/Images/IntanAzuraBinteMokhtar.jpg',
			name: 'Intan Azura Mokhtar',
			desc: ''
		},{
			image: 'https://s3-ap-southeast-1.amazonaws.com/ge2015/Images/KohPohKoon.jpg',
			name: 'Koh Poh Koon',
			desc: ''
		}]
	},{
		image: 'https://s3-ap-southeast-1.amazonaws.com/ge2015/Images/RP.svg',
		name: 'Reform Party',
		abbr: 'RP',
		status: 'Contender',
		votes: {
			13: 0,
			18: 0,
			21: 0
		},
		candidates: [{
			image: 'https://s3-ap-southeast-1.amazonaws.com/ge2015/Images/LeeHsienLoong.jpg',
			name: 'M. Ravi',
			desc: ''
		},{
			image: 'https://s3-ap-southeast-1.amazonaws.com/ge2015/Images/AngHinKee.jpg',
			name: 'Gilbert Goh',
			desc: ''
		},{
			image: 'https://s3-ap-southeast-1.amazonaws.com/ge2015/Images/DarrylDavid.jpg',
			name: 'Jesse Loo',
			desc: ''
		},{
			image: 'https://s3-ap-southeast-1.amazonaws.com/ge2015/Images/GanThiamPoh.jpg',
			name: 'Osman Sulaiman',
			desc: ''
		},{
			image: 'https://s3-ap-southeast-1.amazonaws.com/ge2015/Images/IntanAzuraBinteMokhtar.jpg',
			name: 'Roy Ngerng',
			desc: ''
		},{
			image: 'https://s3-ap-southeast-1.amazonaws.com/ge2015/Images/KohPohKoon.jpg',
			name: 'Siva Chandran',
			desc: ''
		}]
	}]
});

var Marsiling_YewTee_GRC = Division({
	divisionName: 'Marsiling-Yew Tee GRC',
	electors: '107,527',
	seats: 4,
	voters: 0,
	parties: [{
		image: 'https://s3-ap-southeast-1.amazonaws.com/ge2015/Images/PAP.svg',
		name: 'People\'s Action Party',
		abbr: 'PAP',
		status: 'Incumbent',
		candidates: [{
			image: 'https://s3-ap-southeast-1.amazonaws.com/ge2015/Images/HalimahYacob.jpg',
			name: 'Mdm Halimah Yacob',
			desc: 'Speaker of Parliament'
		},{
			image: 'https://s3-ap-southeast-1.amazonaws.com/ge2015/Images/LawrenceWong.jpg',
			name: 'Mr Lawrence Wong',
			desc: 'Culture, Community and Youth Minister'
		},{
			image: 'https://s3-ap-southeast-1.amazonaws.com/ge2015/Images/AlexYamZiming.jpg',
			name: 'Mr Alex Yam Ziming',
			desc: 'Executive Director, PAP HQ'
		},{
			image: 'https://s3-ap-southeast-1.amazonaws.com/ge2015/Images/OngTengKoon.jpg',
			name: 'Mr Ong Teng Koon',
			desc: 'Commodities trader, Morgan Stanley'
		}],
		votes: {
			13: 0,
			18: 0,
			21: 0
		}
	},{
		image: 'https://s3-ap-southeast-1.amazonaws.com/ge2015/Images/SDP.svg',
		name: 'Singapore Democratic Party',
		abbr: 'SDP',
		status: 'Contender',
		candidates: [],
		votes: {
			13: 0,
			18: 0,
			21: 0
		}
	}]
});


if(process.argv[2] === 'populateDB') {
	Marsiling_YewTee_GRC.save(function (err) {
		if(err) console.log('Upload Marsiling Yew Tee GRC: ERROR');
		else console.log('Upload Marsiling Yew Tee GRC: SUCCESS');
	});
	Ang_Mo_Kio_GRC.save(function (err) {
		if(err) console.log('Upload Ang Mo Kio GRC: ERROR');
		else console.log('Upload Ang Mo Kio GRC: SUCCESS');
	});
}

module.exports = Division; 