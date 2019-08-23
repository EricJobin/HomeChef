// Java for signing up New Chefs to site

// ----------------- Functions for Passing New Chef -----------------------------
function signUpChef(newChef) {
	$.post("/api/chefsignup", newChef)
		.then(function(data) {
			window.location.replace("/chefs");
			// If there's an error, handle it by throwing up a bootstrap alert
		})
		.catch(handleLoginErr);
}

function handleLoginErr(err) {
	// $("#alert .msg").text(err.responseJSON);
	// $("#alert").fadeIn(500);
	console.log(err);
}

// ----------------------- Creating New chef from form input ---------------------

// function createChef() {
// 	var newChef ={
// 		firstName: $("#firstName").val().trim(),
// 		lastName: $("#lastName").val().trim(),
// 		email: $("#emailChef").val().trim(),
// 		chefPic: $("#chefPic").val().trim(),
// 		chefBio: $("#chefBio").val().trim(),
// 		chefCity: $("#chefCity").val().trim(),

// 	};
// 	return newChef;
// }

// function createChefPassword() {
// var newChef ={
// 	chefPass: $("#chefPass").val().trim(),
// };
// return newChef;
// }

// =================Brian edit====================
function createChef() {
	var newChef ={
		firstName: $("#firstName").val().trim(),
		lastName: $("#lastName").val().trim(),
		email: $("#emailChef").val().trim(),
		chefPic: $("#chefPic").val().trim(),
		chefBio: $("#chefBio").val().trim(),
		chefCity: $("#chefCity").val().trim(),
		password: $("#chefPass").val().trim(),

	};
	return newChef;
}
function createUser() {
	var newUser ={
		userType:"Chef",
		email: $("#emailChef").val().trim(),
		password: $("#chefPass").val().trim(),
	};
	return newUser;
}



function signUpChef(chef) {
	$.post("/api/chefsignup/", chef, function() {
		console.log("new chef added ");
	});
}

function signUpUser(user) {
	$.post("/api/customerSignUp", user)
	  .then(function(data) {
		window.location.replace("/chefs");
		// If there's an error, handle it by throwing up a bootstrap alert
	  })
	  .catch(handleLoginErr);
}

function handleLoginErr(err) {
	$("#alert .msg").text(err.responseJSON);
	$("#alert").fadeIn(500);
}















// =================Brian edit end====================










// ----------------  Run Functions once DOM is ready  ----------------------------

$(document).ready(function() {
	$("#submit").on("click", function(){
		event.preventDefault();
		var newChef = createChef();
		// var newPassword = createChefPassword();
		console.log(newChef);

		var newUser = createUser();
		console.log(newUser);
		signUpChef(newChef);
		signUpUser(newUser);
		// Insert function to pass newPassword to models here

	});
});