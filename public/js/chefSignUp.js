// Java for signing up New Chefs to site

// ----------------- Functions for Passing New Chef -----------------------------
function signUpChef(newChef) {
	$.post("/api/chefsignup", newChef)
		.then(function(data) {
			window.location.replace("/chefhome");
			// If there's an error, handle it by throwing up a bootstrap alert
		})
		.catch(handleLoginErr);
}

function handleLoginErr(err) {
	$("#alert .msg").text(err.responseJSON);
	$("#alert").fadeIn(500);
}

// ----------------------- Creating New chef from form input ---------------------

function createChef() {
	var newChef ={
		firstName: $("#firstName").val().trim(),
		lastName: $("#lastName").val().trim(),
		emailChef: $("#emailChef").val().trim(),
		chefPic: $("#chefPic").val().trim(),
		chefBio: $("#chefBio").val().trim(),
		chefCity: $("#chefCity").val().trim(),
	};
	return newChef;
}

function createChefPassword() {
	var newChef ={
		chefPass: $("#chefPass").val().trim(),
	};
	return newChef;
}

// ----------------  Run Functions once DOM is ready  ----------------------------

$(document).ready(function() {
	$("#submit").on("click", function(){
		event.preventDefault();
		var newChef = createChef();
		var newPassword = createChefPassword();
		console.log(newChef, newPassword);
		signUpChef(newChef);
		// Insert function to pass newPassword to models here
	});
});