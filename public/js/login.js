$(document).ready(function() {
	// Getting references to our form and inputs
	var loginForm = $("form.login");
	var emailInput = $("input#email-input");
	var passwordInput = $("input#password-input");
	var selectionInput = $("select#user-input");
  
	// When the form is submitted, we validate there's an email and password entered
	loginForm.on("submit", function(event) {
		event.preventDefault();
		var userData = {
			email: emailInput.val().trim(),
			password: passwordInput.val().trim(),
			userType: selectionInput.val().trim()
		};
  
	  	if (!userData.email || !userData.password|| !userData.userType) {
			return;
	  	}
  
		// If we have an email and password we run the loginUser function and clear the form
		loginUser(userData.userType,userData.email, userData.password);
		emailInput.val("");
		passwordInput.val("");
		selectionInput.val("");
	});
  
	// loginUser does a post to our "api/login" route and if successful, redirects us the the members page
	function loginUser(userType,email, password) {
		$.post("/api/login", {
			email: email,
			password: password,
			userType: userType
		})
			.then(function() {
			  	if(userType === "Customers")
				{		
					console.log("user type is :" +userType);
					window.location.replace("/customers");
				}
				else if(userType === "Chefs")
				{
					console.log("user type is :" +userType);
					window.location.replace("/chefs");
				}
				// If there's an error, log the error
			})
			.catch(function(err) {
				console.log(err);
			});
	}
});
  