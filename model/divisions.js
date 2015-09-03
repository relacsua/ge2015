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
			desc: 'Prime Minister'
		},{
			image: 'https://s3-ap-southeast-1.amazonaws.com/ge2015/Images/AngHinKee.jpg',
			name: 'Ang Hin Kee',
			desc: 'Assistant Secretary-General, NTUC'
		},{
			image: 'https://s3-ap-southeast-1.amazonaws.com/ge2015/Images/DarrylDavid.jpg',
			name: 'Darryl David',
			desc: 'Deputy director, Temasek Polytechnic'
		},{
			image: 'https://s3-ap-southeast-1.amazonaws.com/ge2015/Images/GanThiamPoh.jpg',
			name: 'Gan Thiam Poh',
			desc: 'Senior vice-president, DBS'
		},{
			image: 'https://s3-ap-southeast-1.amazonaws.com/ge2015/Images/IntanAzura.jpg',
			name: 'Intan Azura Mokhtar',
			desc: 'Member of Parliament'
		},{
			image: 'https://s3-ap-southeast-1.amazonaws.com/ge2015/Images/KohPohKoon.jpg',
			name: 'Koh Poh Koon',
			desc: 'Coloretal surgeon'
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
			image: 'https://s3-ap-southeast-1.amazonaws.com/ge2015/Images/MRavi.jpg',
			name: 'M. Ravi',
			desc: 'Lawyer'
		},{
			image: 'https://s3-ap-southeast-1.amazonaws.com/ge2015/Images/GilbertGoh.jpg',
			name: 'Gilbert Goh',
			desc: 'Career counsellor'
		},{
			image: 'https://s3-ap-southeast-1.amazonaws.com/ge2015/Images/JesseLoo.jpg',
			name: 'Jesse Loo',
			desc: 'Former banker'
		},{
			image: 'https://s3-ap-southeast-1.amazonaws.com/ge2015/Images/OsmanSulaiman.jpg',
			name: 'Osman Sulaiman',
			desc: 'Business director'
		},{
			image: 'https://s3-ap-southeast-1.amazonaws.com/ge2015/Images/RoyNgerng.jpg',
			name: 'Roy Ngerng',
			desc: 'Blogger'
		},{
			image: 'https://s3-ap-southeast-1.amazonaws.com/ge2015/Images/SivaChandran.jpg',
			name: 'Siva Chandran',
			desc: 'Former RC manager'
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
			name: 'Halimah Yacob',
			desc: 'Speaker of Parliament'
		},{
			image: 'https://s3-ap-southeast-1.amazonaws.com/ge2015/Images/LawrenceWong.jpg',
			name: 'Lawrence Wong',
			desc: 'Culture, Community and Youth Minister'
		},{
			image: 'https://s3-ap-southeast-1.amazonaws.com/ge2015/Images/AlexYam.jpg',
			name: 'Alex Yam Ziming',
			desc: 'Executive Director, PAP HQ'
		},{
			image: 'https://s3-ap-southeast-1.amazonaws.com/ge2015/Images/OngTengKoon.jpg',
			name: 'Ong Teng Koon',
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
		candidates: [{
			image: 'https://s3-ap-southeast-1.amazonaws.com/ge2015/Images/JohnTan.jpg',
			name: 'John Tan',
			desc: 'Psychology and statistics manager'
		},{
			image: 'https://s3-ap-southeast-1.amazonaws.com/ge2015/Images/BryanLim.jpg',
			name: 'Bryan Lim',
			desc: 'Manager at a local hospital'
		},{
			image: 'https://s3-ap-southeast-1.amazonaws.com/ge2015/Images/DamanhuriAbas.jpg',
			name: 'Damanhuri Abas',
			desc: 'Former islamic college director'
		},{
			image: 'https://s3-ap-southeast-1.amazonaws.com/ge2015/Images/WongSoukYee.jpg',
			name: 'Wong Souk Yee',
			desc: 'Adjunct lecturer, NUS'
		}],
		votes: {
			13: 0,
			18: 0,
			21: 0
		}
	}]
});

var Aljunied_GRC = Division({
	divisionName: 'Aljunied GRC',
	electors: '148,142',
	seats: 5,
	voters: 0,
	parties: [{
		image: 'https://s3-ap-southeast-1.amazonaws.com/ge2015/Images/WP.svg',
		name: 'Workers\' Party',
		abbr: 'WP',
		status: 'Incumbent',
		votes: {
			13: 0,
			18: 0,
			21: 0
		},
		candidates: [{
			image: 'https://s3-ap-southeast-1.amazonaws.com/ge2015/Images/LowThiaKiang.jpg',
			name: 'Low Thia Kiang',
			desc: 'Businessman'
		},{
			image: 'https://s3-ap-southeast-1.amazonaws.com/ge2015/Images/SylviaLim.jpg',
			name: 'Sylvia Lim',
			desc: 'Lecturer'
		},{
			image: 'https://s3-ap-southeast-1.amazonaws.com/ge2015/Images/ChenShowMao.jpg',
			name: 'Chen Show Mao',
			desc: 'Member of Parliament'
		},{
			image: 'https://s3-ap-southeast-1.amazonaws.com/ge2015/Images/PritamSingh.jpg',
			name: 'Pritam Singh',
			desc: 'Lawyer'
		},{
			image: 'https://s3-ap-southeast-1.amazonaws.com/ge2015/Images/MuhamadFaisalAbdulManap.jpg',
			name: 'Muhamad Faisal Abdul Manap',
			desc: 'Family Counsellor'
		}]
	},{
		image: 'https://s3-ap-southeast-1.amazonaws.com/ge2015/Images/PAP.svg',
		name: 'People\'s Action Party',
		abbr: 'PAP',
		status: 'Contender',
		votes: {
			13: 0,
			18: 0,
			21: 0
		},
		candidates: [{
			image: 'https://s3-ap-southeast-1.amazonaws.com/ge2015/Images/YeoGuatKwang.jpg',
			name: 'Yeo Guat Kwang',
			desc: 'Assistant Sec-Gen of NTUC'
		},{
			image: 'https://s3-ap-southeast-1.amazonaws.com/ge2015/Images/VictorLye.jpg',
			name: 'Victor Lye',
			desc: 'Chief Executive Officer, Shenton Insurance'
		},{
			image: 'https://s3-ap-southeast-1.amazonaws.com/ge2015/Images/ChuaEngLeong.jpg',
			name: 'Chua Eng Leong',
			desc: 'Private banker'
		},{
			image: 'https://s3-ap-southeast-1.amazonaws.com/ge2015/Images/KMuralidharanPillai.jpg',
			name: 'K Muralidharan Pillai',
			desc: 'Lawyer'
		},{
			image: 'https://s3-ap-southeast-1.amazonaws.com/ge2015/Images/ShamsulKamar.jpg',
			name: 'Shamsul Kamar',
			desc: 'Former HOD, Spectra Secondary'
		}]
	}]
});

var Bishan_Toa_Payoh_GRC = Division({
	divisionName: 'Bishan-Toa Payoh GRC',
	electors: '129,975',
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
			image: 'https://s3-ap-southeast-1.amazonaws.com/ge2015/Images/NgEngHen.jpg',
			name: 'Ng Eng Hen',
			desc: 'Minister for Defence Leader of the House'
		},{
			image: 'https://s3-ap-southeast-1.amazonaws.com/ge2015/Images/JosephineTeo.jpg',
			name: 'Josephine Teo',
			desc: 'Senior Minister of State (Finance, Transport)'
		},{
			image: 'https://s3-ap-southeast-1.amazonaws.com/ge2015/Images/CheeHongTat.jpg',
			name: 'Chee Hong Tat',
			desc: 'Ex Second Permanent Secretary (MTI)'
		},{
			image: 'https://s3-ap-southeast-1.amazonaws.com/ge2015/Images/ChongKeeHiong.jpg',
			name: 'Chong Kee Hiong',
			desc: 'Chief Executive Officer, OUE Hospitality REIT'
		},{
			image: 'https://s3-ap-southeast-1.amazonaws.com/ge2015/Images/SaktiandiSupaat.jpg',
			name: 'Saktiandi Supaat',
			desc: 'EVP, Head of FX Research, Maybank'
		}]
	},{
		image: 'https://s3-ap-southeast-1.amazonaws.com/ge2015/Images/SPP.svg',
		name: 'Singapore People\'s Party',
		abbr: 'SPP',
		status: 'Contender',
		votes: {
			13: 0,
			18: 0,
			21: 0
		},
		candidates: [{
			image: 'https://s3-ap-southeast-1.amazonaws.com/ge2015/Images/BenjaminPwee.jpg',
			name: 'Benjamin Pwee',
			desc: 'Former DPP Secretary-General'
		},{
			image: 'https://s3-ap-southeast-1.amazonaws.com/ge2015/Images/HamimAliyas.jpg',
			name: 'Hamim Aliyas',
			desc: 'Former DPP Chairman'
		},{
			image: 'https://s3-ap-southeast-1.amazonaws.com/ge2015/Images/LawKimHwee.jpg',
			name: 'Law Kim Hwee',
			desc: 'Former marketing manager'
		},{
			image: 'https://s3-ap-southeast-1.amazonaws.com/ge2015/Images/AbdillahZamzuri.jpg',
			name: 'Abdillah Zamzuri',
			desc: 'Training company manager'
		},{
			image: 'https://s3-ap-southeast-1.amazonaws.com/ge2015/Images/BryanLong.jpg',
			name: 'Bryan Long',
			desc: 'Tech entrepreneur'
		}]
	}]
});

var Bukit_Batok_SMC = Division({
	divisionName: 'Bukit Batok SMC',
	electors: '27,077',
	seats: 1,
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
			image: 'https://s3-ap-southeast-1.amazonaws.com/ge2015/Images/DavidOng.jpg',
			name: 'David Ong',
			desc: 'Managing director of a publishing firm'
		}]
	},{
		image: 'https://s3-ap-southeast-1.amazonaws.com/ge2015/Images/SDP.svg',
		name: 'Singapore Democratic Party',
		abbr: 'SDP',
		status: 'Contender',
		votes: {
			13: 0,
			18: 0,
			21: 0
		},
		candidates: [{
			image: 'https://s3-ap-southeast-1.amazonaws.com/ge2015/Images/SVeriyah.jpg',
			name: 'S Veriyah',
			desc: 'Businessman'
		}]
	},{
		image: '',
		name: 'Independent',
		abbr: 'I',
		status: 'Contender',
		votes: {
			13: 0,
			18: 0,
			21: 0
		},
		candidates: [{
			image: 'https://s3-ap-southeast-1.amazonaws.com/ge2015/Images/SamirSalimNeji.jpg',
			name: 'Samir Salim Neji',
			desc: 'Managing Director'
		}]
	}]
});

var Bukit_Panjang_SMC = Division({
	divisionName: 'Bukit Panjang SMC',
	electors: '34,317',
	seats: 1,
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
			image: 'https://s3-ap-southeast-1.amazonaws.com/ge2015/Images/TeoHoPin.jpg',
			name: 'Teo Ho Pin',
			desc: 'Mayor of North West District'
		}]
	},{
		image: 'https://s3-ap-southeast-1.amazonaws.com/ge2015/Images/SDP.svg',
		name: 'Singapore Democratic Party',
		abbr: 'SDP',
		status: 'Contender',
		votes: {
			13: 0,
			18: 0,
			21: 0
		},
		candidates: [{
			image: 'https://s3-ap-southeast-1.amazonaws.com/ge2015/Images/KhungWaiYeen.jpg',
			name: 'Khung Wai Yeen',
			desc: 'Accounts Manager'
		}]
	}]
});

var Choa_Chu_Kang_GRC = Division({
	divisionName: 'Choa Chu Kang GRC',
	electors: '119,931',
	seats: 4,
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
			image: 'https://s3-ap-southeast-1.amazonaws.com/ge2015/Images/GanKimYong.jpg',
			name: 'Gan Kim Yong',
			desc: 'Minister of Health'
		},{
			image: 'https://s3-ap-southeast-1.amazonaws.com/ge2015/Images/LowYenLing.jpg',
			name: 'Low Yen Ling',
			desc: 'Mayor, South West District'
		},{
			image: 'https://s3-ap-southeast-1.amazonaws.com/ge2015/Images/ZaqyMohamad.jpg',
			name: 'Zaqy Mohamad',
			desc: 'Director, ASEAN accounts and Business Dev, EY'
		},{
			image: 'https://s3-ap-southeast-1.amazonaws.com/ge2015/Images/YeeChiaHsing.jpg',
			name: 'Yee Chia Hsing',
			desc: 'Head of Catalist, CIMB Bank Singapore'
		}]
	},{
		image: 'https://s3-ap-southeast-1.amazonaws.com/ge2015/Images/PPP.svg',
		name: 'People\'s Power Party',
		abbr: 'PPP',
		status: 'Contender',
		votes: {
			13: 0,
			18: 0,
			21: 0
		},
		candidates: [{
			image: 'https://s3-ap-southeast-1.amazonaws.com/ge2015/Images/GohMengSeng.jpg',
			name: 'Goh Meng Seng',
			desc: 'Director'
		},{
			image: 'https://s3-ap-southeast-1.amazonaws.com/ge2015/Images/SyafarinSarif.jpg',
			name: 'Syafarin Sarif',
			desc: 'Project Manager'
		},{
			image: 'https://s3-ap-southeast-1.amazonaws.com/ge2015/Images/LeeTzeShih.jpg',
			name: 'Lee Tze Shih',
			desc: 'Property Consultant'
		},{
			image: 'https://s3-ap-southeast-1.amazonaws.com/ge2015/Images/LowWaiChoo.jpg',
			name: 'Low Wai Choo',
			desc: 'Finance Manager'
		}]
	}]
});

var East_Coast_GRC = Division({
	divisionName: 'East Coast GRC',
	electors: '99,118',
	seats: 4,
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
			image: 'https://s3-ap-southeast-1.amazonaws.com/ge2015/Images/LimSweeSay.jpg',
			name: 'Lim Swee Say',
			desc: 'Manpower Minister'
		},{
			image: 'https://s3-ap-southeast-1.amazonaws.com/ge2015/Images/LeeYiShyan.jpg',
			name: 'Lee Yi Shyan',
			desc: 'Senior Minister of State, MTI and MND'
		},{
			image: 'https://s3-ap-southeast-1.amazonaws.com/ge2015/Images/MohamadMalikiBinOsman.jpg',
			name: 'Mohamad Maliki Bin Osman',
			desc: 'Minister of State, Mindef and MND'
		},{
			image: 'https://s3-ap-southeast-1.amazonaws.com/ge2015/Images/JessicaTan.jpg',
			name: 'Jessica Tan',
			desc: 'Managing Director, Microsoft Singapore'
		}]
	},{
		image: 'https://s3-ap-southeast-1.amazonaws.com/ge2015/Images/WP.svg',
		name: 'Workers\' Party',
		abbr: 'WP',
		status: 'Contender',
		votes: {
			13: 0,
			18: 0,
			21: 0
		},
		candidates: [{
			image: 'https://s3-ap-southeast-1.amazonaws.com/ge2015/Images/GohMengSeng.jpg',
			name: 'Gerald Giam',
			desc: 'IT solutions architect'
		},{
			image: 'https://s3-ap-southeast-1.amazonaws.com/ge2015/Images/DanielGoh.jpg',
			name: 'Daniel Goh',
			desc: 'Lecturer'
		},{
			image: 'https://s3-ap-southeast-1.amazonaws.com/ge2015/Images/LeonPerera.jpg',
			name: 'Leon Perera',
			desc: 'CEO'
		},{
			image: 'https://s3-ap-southeast-1.amazonaws.com/ge2015/Images/MohamadFairozShariff.jpg',
			name: 'Mohamad Fairoz Shariff',
			desc: 'Former Librarian'
		}]
	}]
});

var Fengshan_SMC = Division({
	divisionName: 'Fengshan SMC',
	electors: '23,427',
	seats: 1,
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
			image: 'https://s3-ap-southeast-1.amazonaws.com/ge2015/Images/CherylChan.jpg',
			name: 'Cheryl Chan',
			desc: 'Head of secondary industries at Linde Group'
		}]
	},{
		image: 'https://s3-ap-southeast-1.amazonaws.com/ge2015/Images/WP.svg',
		name: 'Workers\' Party',
		abbr: 'WP',
		status: 'Contender',
		votes: {
			13: 0,
			18: 0,
			21: 0
		},
		candidates: [{
			image: 'https://s3-ap-southeast-1.amazonaws.com/ge2015/Images/DennisTan.jpg',
			name: 'Dennis Tan',
			desc: 'Lawyer'
		}]
	}]
});

var Holland_Bukit_Timah_GRC = Division({
	divisionName: 'Holland-Bukit Timah GRC',
	electors: '104,491',
	seats: 4,
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
			image: 'https://s3-ap-southeast-1.amazonaws.com/ge2015/Images/VivianBalakrishnan.jpg',
			name: 'Vivian Balakrishnan',
			desc: 'Minister, MEWR'
		},{
			image: 'https://s3-ap-southeast-1.amazonaws.com/ge2015/Images/SimAnn.jpg',
			name: 'Sim Ann',
			desc: 'Minister of State, MOE and MCI'
		},{
			image: 'https://s3-ap-southeast-1.amazonaws.com/ge2015/Images/LiangEngHwa.jpg',
			name: 'Liang Eng Hwa',
			desc: 'Managing Director, DBS Bank'
		},{
			image: 'https://s3-ap-southeast-1.amazonaws.com/ge2015/Images/ChristopherDeSouza.jpg',
			name: 'Christopher De Souza',
			desc: 'Lawyer'
		}]
	},{
		image: 'https://s3-ap-southeast-1.amazonaws.com/ge2015/Images/SDP.svg',
		name: 'Singapore Democratic Party',
		abbr: 'SDP',
		status: 'Contender',
		votes: {
			13: 0,
			18: 0,
			21: 0
		},
		candidates: [{
			image: 'https://s3-ap-southeast-1.amazonaws.com/ge2015/Images/CheeSoonJuan.jpg',
			name: 'Chee Soon Juan',
			desc: 'Secretary-General'
		},{
			image: 'https://s3-ap-southeast-1.amazonaws.com/ge2015/Images/PaulAnanthTambyah.jpg',
			name: 'Paul Ananth Tambyah',
			desc: 'Professor of medicine, NUS'
		},{
			image: 'https://s3-ap-southeast-1.amazonaws.com/ge2015/Images/ChongWaiFung.jpg',
			name: 'Chong Wai Fung',
			desc: 'Administrator at a nursing home'
		},{
			image: 'https://s3-ap-southeast-1.amazonaws.com/ge2015/Images/SidekMallek.jpg',
			name: 'Sidek Mallek',
			desc: 'Compliance auditor for a security company'
		}]
	}]
});

var Hong_Kah_North_SMC = Division({
	divisionName: 'Hong Kah North SMC',
	electors: '28,145',
	seats: 1,
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
			image: 'https://s3-ap-southeast-1.amazonaws.com/ge2015/Images/AmyKhor.jpg',
			name: 'Amy Khor',
			desc: 'Senior Minister of State, Health and Manpower'
		}]
	},{
		image: 'https://s3-ap-southeast-1.amazonaws.com/ge2015/Images/SPP.svg',
		name: 'Singapore People\'s Party',
		abbr: 'SPP',
		status: 'Contender',
		votes: {
			13: 0,
			18: 0,
			21: 0
		},
		candidates: [{
			image: 'https://s3-ap-southeast-1.amazonaws.com/ge2015/Images/RaviPhilemon.jpg',
			name: 'Ravi Philemon',
			desc: 'Social worker'
		}]
	}]
});

var Hougang_SMC = Division({
	divisionName: 'Hougang SMC',
	electors: '24,097',
	seats: 1,
	voters: 0,
	parties: [{
		image: 'https://s3-ap-southeast-1.amazonaws.com/ge2015/Images/WP.svg',
		name: 'Workers\' Party',
		abbr: 'WP',
		status: 'Incumbent',
		votes: {
			13: 0,
			18: 0,
			21: 0
		},
		candidates: [{
			image: 'https://s3-ap-southeast-1.amazonaws.com/ge2015/Images/PngEngHuat.jpg',
			name: 'Png Eng Huat',
			desc: 'Company Director'
		}]
	},{
		image: 'https://s3-ap-southeast-1.amazonaws.com/ge2015/Images/PAP.svg',
		name: 'People\'s Action Party',
		abbr: 'PAP',
		status: 'Contender',
		votes: {
			13: 0,
			18: 0,
			21: 0
		},
		candidates: [{
			image: 'https://s3-ap-southeast-1.amazonaws.com/ge2015/Images/LeeHongChuang.jpg',
			name: 'Lee Hong Chuang',
			desc: 'Senior IT manager, IBM'
		}]
	}]
});

var Jalan_Besar_GRC = Division({
	divisionName: 'Jalan Besar GRC',
	electors: '102,540',
	seats: 4,
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
			image: 'https://s3-ap-southeast-1.amazonaws.com/ge2015/Images/YaacobIbrahim.jpg',
			name: 'Yaacob Ibrahim',
			desc: 'Minister, Communications and Information'
		},{
			image: 'https://s3-ap-southeast-1.amazonaws.com/ge2015/Images/HengCheeHow.jpg',
			name: 'Heng Chee How',
			desc: 'Senior Minister of State, Prime Minister\'s Office'
		},{
			image: 'https://s3-ap-southeast-1.amazonaws.com/ge2015/Images/LilyNeo.jpg',
			name: 'Lily Neo',
			desc: 'Medical Practioner'
		},{
			image: 'https://s3-ap-southeast-1.amazonaws.com/ge2015/Images/DenisePhua.jpg',
			name: 'Denise Phua',
			desc: 'Mayor, Central Singapore District'
		}]
	},{
		image: 'https://s3-ap-southeast-1.amazonaws.com/ge2015/Images/WP.svg',
		name: 'Workers\' Party',
		abbr: 'WP',
		status: 'Contender',
		votes: {
			13: 0,
			18: 0,
			21: 0
		},
		candidates: [{
			image: 'https://s3-ap-southeast-1.amazonaws.com/ge2015/Images/LSomasundaram.jpg',
			name: 'L Somasundaram',
			desc: 'Polytechnic lecturer'
		},{
			image: 'https://s3-ap-southeast-1.amazonaws.com/ge2015/Images/AdrianSim.jpg',
			name: 'Adrian Sim',
			desc: 'Managing Director'
		},{
			image: 'https://s3-ap-southeast-1.amazonaws.com/ge2015/Images/FriedaChan.jpg',
			name: 'Frieda Chan',
			desc: 'Medical Social Worker'
		},{
			image: 'https://s3-ap-southeast-1.amazonaws.com/ge2015/Images/RedzwanHafidzAbdulRazak.jpg',
			name: 'Redzwan Hafidz Abdul Razak',
			desc: 'Engineer'
		}]
	}]
});

var Jurong_GRC = Division({
	divisionName: 'Jurong GRC',
	electors: '130,498',
	seats: 5,
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
			image: 'https://s3-ap-southeast-1.amazonaws.com/ge2015/Images/TharmanShanmugaratnam.jpg',
			name: 'Tharman Shanmugaratnam',
			desc: 'Deputy Prime Minister'
		},{
			image: 'https://s3-ap-southeast-1.amazonaws.com/ge2015/Images/DesmondLee.jpg',
			name: 'Desmond Lee',
			desc: 'Minister of State (National Development)'
		},{
			image: 'https://s3-ap-southeast-1.amazonaws.com/ge2015/Images/AngWeiNeng.jpg',
			name: 'Ang Wei Neng',
			desc: 'Senior VP, bus operations SBS Transit'
		},{
			image: 'https://s3-ap-southeast-1.amazonaws.com/ge2015/Images/RahayuMahzam.jpg',
			name: 'Rahayu Mahzam',
			desc: 'Ex-deputy registrar, Syriah Court'
		},{
			image: 'https://s3-ap-southeast-1.amazonaws.com/ge2015/Images/TanWuMeng.jpg',
			name: 'Tan Wu Meng',
			desc: 'Oncologist, Parkway Cancer Centre'
		}]
	},{
		image: 'https://s3-ap-southeast-1.amazonaws.com/ge2015/Images/SF.svg',
		name: 'Singaporeans First',
		abbr: 'SF',
		status: 'Contender',
		votes: {
			13: 0,
			18: 0,
			21: 0
		},
		candidates: [{
			image: 'https://s3-ap-southeast-1.amazonaws.com/ge2015/Images/DavidFoo.jpg',
			name: 'David Foo',
			desc: 'Chemist and logistics professional'
		},{
			image: 'https://s3-ap-southeast-1.amazonaws.com/ge2015/Images/TanPengAnn.jpg',
			name: 'Tan Peng Ann',
			desc: 'Social entrepreneur'
		},{
			image: 'https://s3-ap-southeast-1.amazonaws.com/ge2015/Images/SukdeuSingh.jpg',
			name: 'Sukdeu Singh',
			desc: 'Retired police officer'
		},{
			image: 'https://s3-ap-southeast-1.amazonaws.com/ge2015/Images/WongSoonHong.jpg',
			name: 'Wong Soon Hong',
			desc: 'Chemical sales director'
		},{
			image: 'https://s3-ap-southeast-1.amazonaws.com/ge2015/Images/WongCheeWai.jpg',
			name: 'Wong Chee Wai',
			desc: 'Self-employed'
		}]
	}]
});

var MacPherson_SMC = Division({
	divisionName: 'MacPherson SMC',
	electors: '28,511',
	seats: 1,
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
			image: 'https://s3-ap-southeast-1.amazonaws.com/ge2015/Images/TinPeiLing.jpg',
			name: 'Tin Pei Ling',
			desc: 'Full-time Member of Parliament'
		}]
	},{
		image: 'https://s3-ap-southeast-1.amazonaws.com/ge2015/Images/WP.svg',
		name: 'Workers\' Party',
		abbr: 'WP',
		status: 'Contender',
		votes: {
			13: 0,
			18: 0,
			21: 0
		},
		candidates: [{
			image: 'https://s3-ap-southeast-1.amazonaws.com/ge2015/Images/BernardChen.jpg',
			name: 'Bernard Chen',
			desc: 'Project Executive of a Charitable Foundation'
		}]
	},{
		image: 'https://s3-ap-southeast-1.amazonaws.com/ge2015/Images/NSP.svg',
		name: 'National Solidarity Party',
		abbr: 'NSP',
		status: 'Contender',
		votes: {
			13: 0,
			18: 0,
			21: 0
		},
		candidates: [{
			image: 'https://s3-ap-southeast-1.amazonaws.com/ge2015/Images/CheoChaiChen.jpg',
			name: 'Cheo Chai Chen',
			desc: 'Freelancer'
		}]
	}]
});

var Marine_Parade_GRC = Division({
	divisionName: 'Marine Parade GRC',
	electors: '146,244',
	seats: 5,
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
			image: 'https://s3-ap-southeast-1.amazonaws.com/ge2015/Images/GohChokTong.jpg',
			name: 'Goh Chok Tong',
			desc: 'Emeritus Senior Minister'
		},{
			image: 'https://s3-ap-southeast-1.amazonaws.com/ge2015/Images/TanChuanJin.jpg',
			name: 'Tan Chuan-Jin',
			desc: 'Minister for Social And Family Development'
		},{
			image: 'https://s3-ap-southeast-1.amazonaws.com/ge2015/Images/SeahKianPeng.jpg',
			name: 'Seah Kian Peng',
			desc: 'CEO of NTUC FairPrice'
		},{
			image: 'https://s3-ap-southeast-1.amazonaws.com/ge2015/Images/FatimahLateef.jpg',
			name: 'Fatimah Lateef',
			desc: 'Consultant, Singapore General Hospital'
		},{
			image: 'https://s3-ap-southeast-1.amazonaws.com/ge2015/Images/EdwinTong.jpg',
			name: 'Edwin Tong',
			desc: 'Lawyer'
		}]
	},{
		image: 'https://s3-ap-southeast-1.amazonaws.com/ge2015/Images/WP.svg',
		name: 'Workers\' Party',
		abbr: 'WP',
		status: 'Contender',
		votes: {
			13: 0,
			18: 0,
			21: 0
		},
		candidates: [{
			image: 'https://s3-ap-southeast-1.amazonaws.com/ge2015/Images/YeeJennJong.jpg',
			name: 'Yee Jenn Jong',
			desc: 'Businessman'
		},{
			image: 'https://s3-ap-southeast-1.amazonaws.com/ge2015/Images/TerenceTan.jpg',
			name: 'Terence Tan',
			desc: 'Lawyer'
		},{
			image: 'https://s3-ap-southeast-1.amazonaws.com/ge2015/Images/FiruzKhan.jpg',
			name: 'Firuz Khan',
			desc: 'Businessman'
		},{
			image: 'https://s3-ap-southeast-1.amazonaws.com/ge2015/Images/HeTingRu.jpg',
			name: 'He Ting Ru',
			desc: 'Lawyer'
		},{
			image: 'https://s3-ap-southeast-1.amazonaws.com/ge2015/Images/DylanNg.jpg',
			name: 'Dylan Ng',
			desc: 'Wealth Manager'
		}]
	}]
});

var Mountbatten_SMC = Division({
	divisionName: 'Mountbatten SMC',
	electors: '24,143',
	seats: 1,
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
			image: 'https://s3-ap-southeast-1.amazonaws.com/ge2015/Images/LimBiowChuan.jpg',
			name: 'Lim Biow Chuan',
			desc: 'Senior Minister of State, Health and Manpower'
		}]
	},{
		image: 'https://s3-ap-southeast-1.amazonaws.com/ge2015/Images/SPP.svg',
		name: 'Singapore People\'s Party',
		abbr: 'SPP',
		status: 'Contender',
		votes: {
			13: 0,
			18: 0,
			21: 0
		},
		candidates: [{
			image: 'https://s3-ap-southeast-1.amazonaws.com/ge2015/Images/JeannetteChongAruldoss.jpg',
			name: 'Jeannette Chong-Aruldoss',
			desc: 'Social worker'
		}]
	}]
});

var Nee_Soon_GRC = Division({
	divisionName: 'Nee Soon GRC',
	electors: '132,289',
	seats: 5,
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
			image: 'https://s3-ap-southeast-1.amazonaws.com/ge2015/Images/KShanmugam.jpg',
			name: 'K Shanmugam',
			desc: 'Minister for Foreign Affairs and Law'
		},{
			image: 'https://s3-ap-southeast-1.amazonaws.com/ge2015/Images/LeeBeeWah.jpg',
			name: 'Lee Bee Wah',
			desc: 'Group Director of Meinhardt Singapore'
		},{
			image: 'https://s3-ap-southeast-1.amazonaws.com/ge2015/Images/MuhamadFaishalIbrahim.jpg',
			name: 'Muhamad Faishal Ibrahim',
			desc: 'Parliamentary Secretary for Health and Transport'
		},{
			image: 'https://s3-ap-southeast-1.amazonaws.com/ge2015/Images/LouisNg.jpg',
			name: 'Louis Ng',
			desc: 'Founder of ACRES'
		},{
			image: 'https://s3-ap-southeast-1.amazonaws.com/ge2015/Images/HenryKwek.jpg',
			name: 'Henry Kwek',
			desc: 'Executive Director of Foodtraco Supplies'
		}]
	},{
		image: 'https://s3-ap-southeast-1.amazonaws.com/ge2015/Images/WP.svg',
		name: 'Workers\' Party',
		abbr: 'WP',
		status: 'Contender',
		votes: {
			13: 0,
			18: 0,
			21: 0
		},
		candidates: [{
			image: 'https://s3-ap-southeast-1.amazonaws.com/ge2015/Images/GurmitSingh.jpg',
			name: 'Gurmit Singh',
			desc: 'Legal Counsel'
		},{
			image: 'https://s3-ap-southeast-1.amazonaws.com/ge2015/Images/LukeKoh.jpg',
			name: 'Luke Koh',
			desc: 'CEO'
		},{
			image: 'https://s3-ap-southeast-1.amazonaws.com/ge2015/Images/CherylDeniseLoh.jpg',
			name: 'Cheryl Denise Loh',
			desc: 'Sales Consultant'
		},{
			image: 'https://s3-ap-southeast-1.amazonaws.com/ge2015/Images/KennethFoo.jpg',
			name: 'Kenneth Foo',
			desc: 'Manager, Public Education'
		},{
			image: 'https://s3-ap-southeast-1.amazonaws.com/ge2015/Images/RonTan.jpg',
			name: 'Ron Tan',
			desc: 'Property Agent'
		}]
	}]
});

var Pasir_Ris_Punggol_GRC = Division({
	divisionName: 'Pasir Ris-Punggol GRC',
	electors: '187,396',
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
			image: 'https://s3-ap-southeast-1.amazonaws.com/ge2015/Images/TeoCheeHean.jpg',
			name: 'Teo Chee Hean',
			desc: 'Deputy Prime Minister'
		},{
			image: 'https://s3-ap-southeast-1.amazonaws.com/ge2015/Images/TeoSerLuck.jpg',
			name: 'Teo Ser Luck',
			desc: 'Minister of State for Trade and Industry'
		},{
			image: 'https://s3-ap-southeast-1.amazonaws.com/ge2015/Images/ZainalSapari.jpg',
			name: 'Zainal Sapari',
			desc: 'Assistant sec-general, National Trades Union Congress'
		},{
			image: 'https://s3-ap-southeast-1.amazonaws.com/ge2015/Images/JPuthucheary.jpg',
			name: 'J Puthucheary',
			desc: 'Senior consultant, KK Women\'s and Children\'s Hospital'
		},{
			image: 'https://s3-ap-southeast-1.amazonaws.com/ge2015/Images/NgCheeMeng.jpg',
			name: 'Ng Chee Meng',
			desc: 'Former Chief of Defense Force'
		},{
			image: 'https://s3-ap-southeast-1.amazonaws.com/ge2015/Images/SunXueling.jpg',
			name: 'Sun Xueling',
			desc: 'Investment director at Temasek Holdings'
		}]
	},{
		image: 'https://s3-ap-southeast-1.amazonaws.com/ge2015/Images/SDP.svg',
		name: 'Singapore Democratic Party',
		abbr: 'SDP',
		status: 'Contender',
		votes: {
			13: 0,
			18: 0,
			21: 0
		},
		candidates: [{
			image: 'https://s3-ap-southeast-1.amazonaws.com/ge2015/Images/DesmondLim.jpg',
			name: 'Desmond Lim',
			desc: 'Principal Engineer'
		},{
			image: 'https://s3-ap-southeast-1.amazonaws.com/ge2015/Images/HarminderPalSingh.jpg',
			name: 'Harminder Pal Singh',
			desc: 'Motivational Speaker'
		},{
			image: 'https://s3-ap-southeast-1.amazonaws.com/ge2015/Images/AbuMohamed.jpg',
			name: 'Abu Mohamed',
			desc: 'Company Director'
		},{
			image: 'https://s3-ap-southeast-1.amazonaws.com/ge2015/Images/OngTeikSeng.jpg',
			name: 'Ong Teik Seng',
			desc: 'Sales Consultant'
		},{
			image: 'https://s3-ap-southeast-1.amazonaws.com/ge2015/Images/SunnyWong.jpg',
			name: 'Sunny Wong',
			desc: 'Quality Assurance Manager'
		},{
			image: 'https://s3-ap-southeast-1.amazonaws.com/ge2015/Images/ArtheroLim.jpg',
			name: 'Arthero Lim',
			desc: 'Film Director'
		}]
	}]
});

var Pioneer_SMC = Division({
	divisionName: 'Pioneer SMC',
	electors: '25,458',
	seats: 1,
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
			image: 'https://s3-ap-southeast-1.amazonaws.com/ge2015/Images/CedricFoo.jpg',
			name: 'Cedric Foo',
			desc: 'Group Deputy President Neptune Orient Lines'
		}]
	},{
		image: 'https://s3-ap-southeast-1.amazonaws.com/ge2015/Images/NSP.svg',
		name: 'National Solidarity Party',
		abbr: 'NSP',
		status: 'Contender',
		votes: {
			13: 0,
			18: 0,
			21: 0
		},
		candidates: [{
			image: 'https://s3-ap-southeast-1.amazonaws.com/ge2015/Images/ElvinOng.jpg',
			name: 'Elvin Ong',
			desc: 'Businessman'
		}]
	}]
});

var Potong_Pasir_SMC = Division({
	divisionName: 'Potong Pasir SMC',
	electors: '17,407',
	seats: 1,
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
			image: 'https://s3-ap-southeast-1.amazonaws.com/ge2015/Images/SitohYihPin.jpg',
			name: 'Sitoh Tih Pin',
			desc: 'Chairman, Nexia TS Public Accounting Corp'
		}]
	},{
		image: 'https://s3-ap-southeast-1.amazonaws.com/ge2015/Images/SPP.svg',
		name: 'Singapore People\'s Party',
		abbr: 'SPP',
		status: 'Contender',
		votes: {
			13: 0,
			18: 0,
			21: 0
		},
		candidates: [{
			image: 'https://s3-ap-southeast-1.amazonaws.com/ge2015/Images/LinaChiam.jpg',
			name: 'Lina Chiam',
			desc: 'Former legal secretary, registered nurse'
		}]
	}]
});

var Punggol_East_SMC = Division({
	divisionName: 'Punggol East SMC',
	electors: '34,366',
	seats: 1,
	voters: 0,
	parties: [{
		image: 'https://s3-ap-southeast-1.amazonaws.com/ge2015/Images/WP.svg',
		name: 'Workers\' Party',
		abbr: 'WP',
		status: 'Incumbent',
		votes: {
			13: 0,
			18: 0,
			21: 0
		},
		candidates: [{
			image: 'https://s3-ap-southeast-1.amazonaws.com/ge2015/Images/LeeLiLian.jpg',
			name: 'Lee Li Lian',
			desc: 'Financial trainer'
		}]
	},{
		image: 'https://s3-ap-southeast-1.amazonaws.com/ge2015/Images/PAP.svg',
		name: 'People\'s Action Party',
		abbr: 'PAP',
		status: 'Contender',
		votes: {
			13: 0,
			18: 0,
			21: 0
		},
		candidates: [{
			image: 'https://s3-ap-southeast-1.amazonaws.com/ge2015/Images/CharlesChong.jpg',
			name: 'Charles Chong',
			desc: 'Deputy Speaker of Parliament'
		}]
	}]
});

var Radin_Mas_SMC = Division({
	divisionName: 'Radin Mas SMC',
	electors: '28,906',
	seats: 1,
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
			image: 'https://s3-ap-southeast-1.amazonaws.com/ge2015/Images/SamTan.jpg',
			name: 'Sam Tan',
			desc: 'Minister of State for PMO and MCCY'
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
			image: 'https://s3-ap-southeast-1.amazonaws.com/ge2015/Images/KumarAppavoo.jpg',
			name: 'Kumar Appavoo',
			desc: 'Director of an oil and gas company'
		}]
	},{
		image: '',
		name: 'Independent',
		abbr: 'I',
		status: 'Contender',
		votes: {
			13: 0,
			18: 0,
			21: 0
		},
		candidates: [{
			image: 'https://s3-ap-southeast-1.amazonaws.com/ge2015/Images/HanHuiHui.jpg',
			name: 'Han Hui Hui',
			desc: 'Blogger'
		}]
	}]
});

var Sembawang_GRC = Division({
	divisionName: 'Sembawang GRC',
	electors: '144,672',
	seats: 5,
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
			image: 'https://s3-ap-southeast-1.amazonaws.com/ge2015/Images/KhawBoonWan.jpg',
			name: 'Khaw Boon Wan',
			desc: 'Minister for National Development'
		},{
			image: 'https://s3-ap-southeast-1.amazonaws.com/ge2015/Images/LimWeeKiak.jpg',
			name: 'Lim Wee Kiak',
			desc: 'Eye surgeon'
		},{
			image: 'https://s3-ap-southeast-1.amazonaws.com/ge2015/Images/VikramNair.jpg',
			name: 'Vikram Nair',
			desc: 'Lawyer'
		},{
			image: 'https://s3-ap-southeast-1.amazonaws.com/ge2015/Images/OngYeKung.jpg',
			name: 'Ong Ye Kung',
			desc: 'Director, group strategy, Keppel Corp'
		},{
			image: 'https://s3-ap-southeast-1.amazonaws.com/ge2015/Images/AmrinAmin.jpg',
			name: 'Amrin Amin',
			desc: 'Corporate lawyer'
		}]
	},{
		image: 'https://s3-ap-southeast-1.amazonaws.com/ge2015/Images/NSP.svg',
		name: 'National Solidarity Party',
		abbr: 'NSP',
		status: 'Contender',
		votes: {
			13: 0,
			18: 0,
			21: 0
		},
		candidates: [{
			image: 'https://s3-ap-southeast-1.amazonaws.com/ge2015/Images/EugeneYeo.jpg',
			name: 'Eugene Yeo',
			desc: 'Associate Director Real Estate'
		},{
			image: 'https://s3-ap-southeast-1.amazonaws.com/ge2015/Images/SpencerNg.jpg',
			name: 'Spencer Ng',
			desc: 'Project Director'
		},{
			image: 'https://s3-ap-southeast-1.amazonaws.com/ge2015/Images/AbdulRasheed.jpg',
			name: 'Abdul Rasheed',
			desc: 'Businessman'
		},{
			image: 'https://s3-ap-southeast-1.amazonaws.com/ge2015/Images/KevrynLim.jpg',
			name: 'Kevryn Lim',
			desc: 'Project Director'
		},{
			image: 'https://s3-ap-southeast-1.amazonaws.com/ge2015/Images/YadzethHaris.jpg',
			name: 'Yadzeth Haris',
			desc: 'Senior Technician'
		}]
	}]
});

var Sengkang_West_SMC = Division({
	divisionName: 'Sengkang West SMC',
	electors: '30,119',
	seats: 1,
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
			image: 'https://s3-ap-southeast-1.amazonaws.com/ge2015/Images/LamPinMin.jpg',
			name: 'Lam Pin Min',
			desc: 'Minister of State, Health'
		}]
	},{
		image: 'https://s3-ap-southeast-1.amazonaws.com/ge2015/Images/WP.svg',
		name: 'Workers\'Party',
		abbr: 'WP',
		status: 'Contender',
		votes: {
			13: 0,
			18: 0,
			21: 0
		},
		candidates: [{
			image: 'https://s3-ap-southeast-1.amazonaws.com/ge2015/Images/KohChoongYong.jpg',
			name: 'Koh Choong Yong',
			desc: 'Software engineer'
		}]
	}]
});

var Tampines_GRC = Division({
	divisionName: 'Tampines GRC',
	electors: '143,518',
	seats: 5,
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
			image: 'https://s3-ap-southeast-1.amazonaws.com/ge2015/Images/HengSweeKeat.jpg',
			name: 'Heng Swee Keat',
			desc: 'Minister for Education'
		},{
			image: 'https://s3-ap-southeast-1.amazonaws.com/ge2015/Images/MasagosZulkifli.jpg',
			name: 'Masagos Zulkifli',
			desc: 'Minister in the Prime Minister\'s Office'
		},{
			image: 'https://s3-ap-southeast-1.amazonaws.com/ge2015/Images/BaeyYamKeng.jpg',
			name: 'Baey Yam Keng',
			desc: 'Full-time Member of Parliament'
		},{
			image: 'https://s3-ap-southeast-1.amazonaws.com/ge2015/Images/DesmondChoo.jpg',
			name: 'Desmond Choo',
			desc: 'Director of youth develoopment, NTUC'
		},{
			image: 'https://s3-ap-southeast-1.amazonaws.com/ge2015/Images/ChengLiHui.jpg',
			name: 'Cheng Li Hui',
			desc: 'Deputy CEO, Hai Leck Holdings'
		}]
	},{
		image: 'https://s3-ap-southeast-1.amazonaws.com/ge2015/Images/NSP.svg',
		name: 'National Solidarity Party',
		abbr: 'NSP',
		status: 'Contender',
		votes: {
			13: 0,
			18: 0,
			21: 0
		},
		candidates: [{
			image: 'https://s3-ap-southeast-1.amazonaws.com/ge2015/Images/SebastianTeo.jpg',
			name: 'Sebastian Teo',
			desc: 'Consultant'
		},{
			image: 'https://s3-ap-southeast-1.amazonaws.com/ge2015/Images/RenoFong.jpg',
			name: 'Reno Fong',
			desc: 'Engineer / Director'
		},{
			image: 'https://s3-ap-southeast-1.amazonaws.com/ge2015/Images/NorLellaMardiiiah.jpg',
			name: 'Nor Lella Mardiiiah',
			desc: 'Business Consultant'
		},{
			image: 'https://s3-ap-southeast-1.amazonaws.com/ge2015/Images/LimTean.jpg',
			name: 'Lim Tean',
			desc: 'Legal Consultant'
		},{
			image: 'https://s3-ap-southeast-1.amazonaws.com/ge2015/Images/ChoongHonHeng.jpg',
			name: 'Choong Hon Heng',
			desc: 'Business Administrator'
		}]
	}]
});

var Tanjong_Pagar_GRC = Division({
	divisionName: 'Tanjong Pagar GRC',
	electors: '130,752',
	seats: 5,
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
			image: 'https://s3-ap-southeast-1.amazonaws.com/ge2015/Images/ChanChunSing.jpg',
			name: 'Chan Chun Sing',
			desc: 'Minister, PMO, and Sec-Gen of NTUC'
		},{
			image: 'https://s3-ap-southeast-1.amazonaws.com/ge2015/Images/IndraneeRajah.jpg',
			name: 'Indranee Rajah',
			desc: 'Senior Minister of State (Law and Education)'
		},{
			image: 'https://s3-ap-southeast-1.amazonaws.com/ge2015/Images/ChiaShiLu.jpg',
			name: 'Chia Shi-Lu',
			desc: 'Consultant surgeon, Singapore General Hospital'
		},{
			image: 'https://s3-ap-southeast-1.amazonaws.com/ge2015/Images/JoanPereira.jpg',
			name: 'Joan Pereira',
			desc: 'Assistant GM, Temasek Cares'
		},{
			image: 'https://s3-ap-southeast-1.amazonaws.com/ge2015/Images/MelvinYong.jpg',
			name: 'Melvin Yong',
			desc: 'Former Assistant Commissioner of Police'
		}]
	},{
		image: 'https://s3-ap-southeast-1.amazonaws.com/ge2015/Images/SF.svg',
		name: 'Singaporeans First',
		abbr: 'SF',
		status: 'Contender',
		votes: {
			13: 0,
			18: 0,
			21: 0
		},
		candidates: [{
			image: 'https://s3-ap-southeast-1.amazonaws.com/ge2015/Images/TanJeeSay.jpg',
			name: 'Tan Jee Say',
			desc: 'Secretary-General'
		},{
			image: 'https://s3-ap-southeast-1.amazonaws.com/ge2015/Images/AngYongGuan.jpg',
			name: 'Ang Yong Guan',
			desc: 'Psychiatrist'
		},{
			image: 'https://s3-ap-southeast-1.amazonaws.com/ge2015/Images/ChiragDesai.jpg',
			name: 'Chirag Desai',
			desc: 'Market rish manager'
		},{
			image: 'https://s3-ap-southeast-1.amazonaws.com/ge2015/Images/FahmiRais.jpg',
			name: 'Fahmi Rais',
			desc: 'Communications and media consultant'
		},{
			image: 'https://s3-ap-southeast-1.amazonaws.com/ge2015/Images/MelvynChiuWengHoe.jpg',
			name: 'Melvyn Chiu Weng Hoe',
			desc: 'Sales Executive'
		}]
	}]
});

var West_Coast_GRC = Division({
	divisionName: 'West Coast GRC',
	electors: '99,300',
	seats: 4,
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
			image: 'https://s3-ap-southeast-1.amazonaws.com/ge2015/Images/LimHngKiang.jpg',
			name: 'Lim Hng Kiang',
			desc: 'Minister for Trade and Industry'
		},{
			image: 'https://s3-ap-southeast-1.amazonaws.com/ge2015/Images/SIswaran.jpg',
			name: 'S Iswaran',
			desc: 'Minister Prime Minister\'s Office'
		},{
			image: 'https://s3-ap-southeast-1.amazonaws.com/ge2015/Images/FooMeeHar.jpg',
			name: 'Foo Mee Har',
			desc: 'CEO, Wealth Management Institute'
		},{
			image: 'https://s3-ap-southeast-1.amazonaws.com/ge2015/Images/PatrickTay.jpg',
			name: 'Patrick Tay',
			desc: 'Director, Legal Service Dept, NTUC'
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
			image: 'https://s3-ap-southeast-1.amazonaws.com/ge2015/Images/KennethJeyaretnam.jpg',
			name: 'Kenneth Jeyaretnam',
			desc: 'RP Secretary-General'
		},{
			image: 'https://s3-ap-southeast-1.amazonaws.com/ge2015/Images/AndyZhu.jpg',
			name: 'Andy Zhu',
			desc: 'Property agent, RP Chairman'
		},{
			image: 'https://s3-ap-southeast-1.amazonaws.com/ge2015/Images/DarrenSoh.jpg',
			name: 'Darren Soh',
			desc: 'Property Agent'
		},{
			image: 'https://s3-ap-southeast-1.amazonaws.com/ge2015/Images/NorainiYunus.jpg',
			name: 'Noraini Yunus',
			desc: 'Customer service executive'
		}]
	}]
});

var Yuhua_SMC = Division({
	divisionName: 'Yuhua SMC',
	electors: '22,617',
	seats: 1,
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
			image: 'https://s3-ap-southeast-1.amazonaws.com/ge2015/Images/GraceFu.jpg',
			name: 'Grace Fu',
			desc: 'Minister, PMO, and Second Minister, MEWR and MFA'
		}]
	},{
		image: 'https://s3-ap-southeast-1.amazonaws.com/ge2015/Images/SDP.svg',
		name: 'Singapore Democratic Party',
		abbr: 'SDP',
		status: 'Contender',
		votes: {
			13: 0,
			18: 0,
			21: 0
		},
		candidates: [{
			image: 'https://s3-ap-southeast-1.amazonaws.com/ge2015/Images/JaslynGo.jpg',
			name: 'Jaslyn Go',
			desc: 'Businesswoman'
		}]
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
	Aljunied_GRC.save(function (err) {
		if(err) console.log('Upload Aljunied GRC: ERROR');
		else console.log('Upload Aljunied GRC: SUCCESS');
	});
	Bishan_Toa_Payoh_GRC.save(function (err) {
		if(err) console.log('Upload Bishan_Toa_Payoh_GRC: ERROR');
		else console.log('Upload Bishan_Toa_Payoh_GRC: SUCCESS');
	});
	Bukit_Batok_SMC.save(function (err) {
		if(err) console.log('Upload Bukit_Batok_SMC: ERROR');
		else console.log('Upload Bukit_Batok_SMC: SUCCESS');
	});
	Bukit_Panjang_SMC.save(function (err) {
		if(err) console.log('Upload Bukit_Panjang_SMC: ERROR');
		else console.log('Upload Bukit_Panjang_SMC: SUCCESS');
	});
	Choa_Chu_Kang_GRC.save(function (err) {
		if(err) console.log('Upload Choa_Chu_Kang_GRC: ERROR');
		else console.log('Upload Choa_Chu_Kang_GRC: SUCCESS');
	});
	East_Coast_GRC.save(function (err) {
		if(err) console.log('Upload East_Coast_GRC: ERROR');
		else console.log('Upload East_Coast_GRC: SUCCESS');
	});
	Fengshan_SMC.save(function (err) {
		if(err) console.log('Upload Fengshan_SMC: ERROR');
		else console.log('Upload Fengshan_SMC: SUCCESS');
	});
	Holland_Bukit_Timah_GRC.save(function (err) {
		if(err) console.log('Upload Holland_Bukit_Timah_GRC: ERROR');
		else console.log('Upload Holland_Bukit_Timah_GRC: SUCCESS');
	});
	Hong_Kah_North_SMC.save(function (err) {
		if(err) console.log('Upload Hong_Kah_North_SMC: ERROR');
		else console.log('Upload Hong_Kah_North_SMC: SUCCESS');
	});
	Hougang_SMC.save(function (err) {
		if(err) console.log('Upload Hougang_SMC: ERROR');
		else console.log('Upload Hougang_SMC: SUCCESS');
	});
	Jalan_Besar_GRC.save(function (err) {
		if(err) console.log('Upload Jalan_Besar_GRC: ERROR');
		else console.log('Upload Jalan_Besar_GRC: SUCCESS');
	});
	Jurong_GRC.save(function (err) {
		if(err) console.log('Upload Jurong_GRC: ERROR');
		else console.log('Upload Jurong_GRC: SUCCESS');
	});
	MacPherson_SMC.save(function (err) {
		if(err) console.log('Upload MacPherson_SMC: ERROR');
		else console.log('Upload MacPherson_SMC: SUCCESS');
	});
	Marine_Parade_GRC.save(function (err) {
		if(err) console.log('Upload Marine_Parade_GRC: ERROR');
		else console.log('Upload Marine_Parade_GRC: SUCCESS');
	});
	Mountbatten_SMC.save(function (err) {
		if(err) console.log('Upload Mountbatten_SMC: ERROR');
		else console.log('Upload Mountbatten_SMC: SUCCESS');
	});
	Nee_Soon_GRC.save(function (err) {
		if(err) console.log('Upload Nee_Soon_GRC: ERROR');
		else console.log('Upload Nee_Soon_GRC: SUCCESS');
	});
	Pasir_Ris_Punggol_GRC.save(function (err) {
		if(err) console.log('Upload Pasir_Ris_Punggol_GRC: ERROR');
		else console.log('Upload Pasir_Ris_Punggol_GRC: SUCCESS');
	});
	Pioneer_SMC.save(function (err) {
		if(err) console.log('Upload Pioneer_SMC: ERROR');
		else console.log('Upload Pioneer_SMC: SUCCESS');
	});
	Punggol_East_SMC.save(function (err) {
		if(err) console.log('Upload Punggol_East_SMC: ERROR');
		else console.log('Upload Punggol_East_SMC: SUCCESS');
	});
	Potong_Pasir_SMC.save(function (err) {
		if(err) console.log('Upload Potong_Pasir_SMC: ERROR');
		else console.log('Upload Potong_Pasir_SMC: SUCCESS');
	});
	Radin_Mas_SMC.save(function (err) {
		if(err) console.log('Upload Radin_Mas_SMC: ERROR');
		else console.log('Upload Radin_Mas_SMC: SUCCESS');
	});
	Sembawang_GRC.save(function (err) {
		if(err) console.log('Upload Sembawang_GRC: ERROR');
		else console.log('Upload Sembawang_GRC: SUCCESS');
	});
	Sengkang_West_SMC.save(function (err) {
		if(err) console.log('Upload Sengkang_West_SMC: ERROR');
		else console.log('Upload Sengkang_West_SMC: SUCCESS');
	});
	Tampines_GRC.save(function (err) {
		if(err) console.log('Upload Tampines_GRC: ERROR');
		else console.log('Upload Tampines_GRC: SUCCESS');
	});
	Tanjong_Pagar_GRC.save(function (err) {
		if(err) console.log('Upload Tanjong_Pagar_GRC: ERROR');
		else console.log('Upload Tanjong_Pagar_GRC: SUCCESS');
	});
	West_Coast_GRC.save(function (err) {
		if(err) console.log('Upload West_Coast_GRC: ERROR');
		else console.log('Upload West_Coast_GRC: SUCCESS');
	});
	Yuhua_SMC.save(function (err) {
		if(err) console.log('Upload Yuhua_SMC: ERROR');
		else console.log('Upload Yuhua_SMC: SUCCESS');
	});
}

module.exports = Division; 