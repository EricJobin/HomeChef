$(document).ready(function() {

	// Sets a flag for whether or not we're updating a post to be false initially
	// var updating = false;
  
  
	// Getting jQuery references to the post body, title, form, and category select
	var firstName = $("#firstName");
	var lastNameInput = $("#lastName");
	var emailInput = $("#email");
	var phoneInput = $("#phone");
	var locationInput = $("#location");

	postCategorySelect.val("Personal");
	// Adding an event listener for when the data is submitted
	$("#submit").click(function(){
		event.preventDefault();
		var newCustomer = {
			lastName: lastNameInput.val().trim(),
			firstname: firstName.val().trim(),
			email: emailInput.val().trim(),
			phone: phoneInput.val().trim(),
			location: locationInput.val().trim()
		};
		console.log(newCustomer);
		// if (updating) {
		// 	newCustomer.id = CustomerId;
		// 	update(newPost);
		// }
		// else {
		// 	submitPost(newPost);
		// }
		submitCustomer(newCustomer);

	}); 


  
	// Submits a new post and brings user to blog page upon completion
	function submitCustomer(customer) {
		$.post("/api/customers/", customer, function() {
			console.log("new customer added ");
		});
	}

});
  