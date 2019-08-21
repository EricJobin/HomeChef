var db = require("../models");
var passport = require("../config/passport");

module.exports = function(app) {
	// Get all examples
	app.get("/api/examples", function(req, res) {
		db.Example.findAll({}).then(function(dbExamples) {
			res.json(dbExamples);
		});
	});

	// Create a new example
	app.post("/api/examples", function(req, res) {
		db.Example.create(req.body).then(function(dbExample) {
			res.json(dbExample);
		});
	});

	// Delete an example by id
	app.delete("/api/examples/:id", function(req, res) {
		db.Example.destroy({ where: { id: req.params.id } }).then(function(dbExample) {
			res.json(dbExample);
		});
	});

	//Login Api 

	app.post("/api/login", passport.authenticate("local"), function(req, res) {
		res.json(req.user);
		 
		 
	});

	//apiroute file for Chef Signup

	app.post("/api/chefsignup", function(req, res) {
		db.User.create({
			chefBio: req.chefBio,
			chefCity: req.chefCity,
			chefPass: req.chefPass,
			chefPic: req.chefPic,
			emailChef: req.emailChef,
			firstName: req.firstName,
			lastName: req.lastName,
			userType: "Chefs",
		})
			.then(function() {
				res.redirect(307, "/api/login");
			})
			.catch(function(err) {
				res.status(401).json(err);
			});
	});

};
