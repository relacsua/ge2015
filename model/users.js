var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
	name: { type: String, required: true },
	facebookId: { type: String, required: true},
	minAge: Number,
	image: String,
	vote: {
		division: String,
		party: String
	},
	createdAt: Date,
	updatedAt: Date
});

userSchema.pre('save', function(next) {
	var currentDate = new Date();
  this.updatedAt = currentDate;
  if (!this.created_at)
    this.createdAt = currentDate;
  next();
});

var User = mongoose.model('User', userSchema);

module.exports = User;

