// Chef Logic for HomeChef

// This function will check if there's any update to the database for the chef to see
router.get("/api/chef", function(req, res) {
  	burger.all(function(data) {
		var chefBooking = {
			//Data taken from booking db
		};
		var chefCalendar = {
			//Data from booking db
		};
    	var logvar, t1t, t1, t2t, t2;
		t1t = "booking data:";
		t1 = chefBooking;
		t2t = "calendar data:";
		t2 = chefCalendar;
		logvar = [t1t, t1, t2t, t2];
		console.log(logvar);
		console.log("vars declared but not used: ");
		console.log(req + res + data);

		// Render booking requests to Chef's Page Here
	});
});

