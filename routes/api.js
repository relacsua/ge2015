var express = require('express');
var router = express.Router();
var Division = require('../model/divisions.js');
var request = require('request');

router.get('/division/:name', function(req,res) {
	var divisionName = decodeURI(req.params.name);
	Division.findOne({divisionName: divisionName}, function(err, data) {
		if(err)
			res.status(500).json({message: 'Internal Server Error'});
		else
			if(data) {
				data['voters'] = null;
				for(var i=0;i<data['parties'].length;i++) {
					data['parties'][i].votes = null; // remove voting data
				}
				res.status(200).json(data);
			}
			else
				res.status(404).json({message: "Division not found"});
	});
});

// callback hell!!!
router.get('/code/:code', function (req, res) {
	var postalCode = parseInt(req.params.code);
	if(postalCode.toString().length !== 6)
		res.status(400).json({message: 'Invalid postal code'});
	else {
		var googleURL = "https://maps.googleapis.com/maps/api/geocode/json?&components=country:SG&sensor=false&key=AIzaSyAgd5JPNfDA7GvJaSJb2LOIf9q8o6ZAbvc&address=" + postalCode;
		request({url: googleURL, json: true}, function(error, response, body) {
			if(!error && response.statusCode == 200) {
				if(body.results.length > 0 && body.results[0].types.length > 0 && body.results[0].types[0] == 'postal_code') {
					var lat = body.results[0].geometry.location.lat;
					var lng = body.results[0].geometry.location.lng;
					var idURL = "https://straitstimes.cartodb.com/api/v2/sql?q=SELECT cartodb_id FROM elections2015 where ST_Contains(elections2015.the_geom, ST_POINTFROMTEXT(%27POINT(" + lng + " " + lat + ")%27,%204326))"
					request({url: idURL, json: true}, function(error, response, body) {
						if(!error && response.statusCode == 200) {
							if(body.rows.length > 0) {
								var cartodb_id = body.rows[0].cartodb_id;
								var resultURL = "https://straitstimes.cartodb.com/api/v2/sql?q=SELECT name FROM elections2015 where cartodb_id=" + cartodb_id;
								request({url: resultURL, json: true}, function (error, response, body) {
									if(!error && response.statusCode == 200) {
										var result = body.rows[0];
										res.status(200).json(result);
									} else {
										res.status(500).json({message: 'Please try again'});
									}
								});
							} else {
								res.status(400).json({message: 'Invalid postal code'});
							}
						} else {
							res.status(500).json({message: 'Please try again'});
						}
					});
				} else {
					res.status(400).json({message: 'Invalid postal code'});
				}
			} else {
				res.status(500).json({message: 'Please try again'});
			}
		});
	}
});


module.exports = router;