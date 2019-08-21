var db = require("../models");
var path = require("path");

module.exports = function(app) {
	// Load index page
	app.get("/", function(req, res) {
		/*db.Example.findAll({}).then(function(dbExamples) {
			res.render("food", {
				msg: "Welcome!",
				examples: dbExamples
			});*/
		res.sendFile(path.join(__dirname, "../views/food.html"));	
		//});
	});

	
  	// app.get("/example/:id", function(req, res) {
	// 	db.Example.findOne({ where: { id: req.params.id } }).then(function(dbExample) {
	// 		res.render("example", {
	// 			example: dbExample
	// 		});
	// 	});
  	// });

  	// Render 404 page for any unmatched routes
  	// app.get("*", function(req, res) {
	// 	res.render("404");
  	// });
	 
	// Load Login Page 
	app.get("/login", function(req, res) {
		// If the user already has an account send them to the members page
		console.log(req.user);
		if (req.userType === "Customers") {
		  res.redirect("/customers");
		}
		else if (req.userType === "Chefs"){
		  res.redirect("/chefs");
		}
		else{
		  res.sendFile(path.join(__dirname, "../views/login.html"));
		}
	  }); 	  
};
