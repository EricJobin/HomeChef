$(document).ready(function() {

	// Sets a flag for whether or not we're updating a post to be false initially
	// var updating = false;
  
  
	// // Getting jQuery references to the post body, title, form, and category select
	// var firstName = $("#firstName");
	// var lastNameInput = $("#lastName");
	// var emailInput = $("#email");
	// var phoneInput = $("#phone");
	// var addressInput = $("#address");
	// var cityInput = $("#city");
	// var hobtype = $("#hobType");
	// var cityInput = $("#city");
	// var cityInput = $("#city");



	postCategorySelect.val("Personal");
	// Adding an event listener for when the data is submitted
	$("#submit").click(function(){
		event.preventDefault();
		var newCustomer = {
			lastName: $("#lastName").val().trim(),
			firstname: $("#firstName").val().trim(),
			email: $("#email").val().trim(),
			password:$("password").val().trim(),
			phone: $("#phone").val().trim(),
			address: $("#address").val().trim(),
			city: $("#city").val().trim(),
			hobType: $("#hobType").val().trim(),
			hobNumber: $("#hobNumber").val().trim(),
			Oven: $("#haveOven").val().trim(),
			foodRes: $("#foodRes").val().trim(),
			foodType: $("#foodType").val().trim()
		};
		console.log(newCustomer);

		var newUser = {
			userType:Customer,
			email: $("#email").val().trim(),
			password:$("password").val().trim()
		};
		console.log(newUser);



		// if (updating) {
		// 	newCustomer.id = CustomerId;
		// 	update(newPost);
		// }
		// else {
		// 	submitPost(newPost);
		// }
		submitCustomer(newCustomer);
		submitUser(newUser);
		
	}); 


  
	// Submits a new post and brings user to blog page upon completion
	function submitCustomer(customer) {
		$.post("/api/customers/", customer, function() {
			console.log("new customer added ");
		});
	}

	function submitUser(user) {
		$.post("/api/customerSignUp", user)
		  .then(function(data) {
			window.location.replace("/customers");
			// If there's an error, handle it by throwing up a bootstrap alert
		  })
		  .catch(handleLoginErr);
	  }
	
	  function handleLoginErr(err) {
		$("#alert .msg").text(err.responseJSON);
		$("#alert").fadeIn(500);
	  }
	
	
});
  