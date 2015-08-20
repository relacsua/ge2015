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

// TODO: write a CSV and write the data into Division model;

module.export = Division; 