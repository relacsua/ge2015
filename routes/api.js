var express = require('express');
var router = express.Router();
var Division = require('../model/divisions.js');

router.get('/division/:name', function(req,res) {
	var divisionName = decodeURI(req.params.name);
	Division.findOne({divisionName: divisionName}, function(err, data) {
		if(err)
			res.status(500).json({message: 'Internal Server Error'});
		else
			if(data) {
				data['voters'] = null;
				for(var i=0;i<data['parties'].length;i++) {
					data['parties'][i].vote = null; // remove voting data
				}
				res.status(200).json(data);
			}
			else
				res.status(404).json({message: "Division not found"});
	});
});


module.exports = router;