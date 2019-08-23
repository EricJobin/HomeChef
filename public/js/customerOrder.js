$(document).ready(function() {
	// debugger;
	// displayCustomer();

	// renderBookings();
	// popUpBookingModal();
	// takeBookings()
	// Adding an event listener for when the data is submitted
	$("#submit").click(function(){
		console.log("hello");
		event.preventDefault();
		var newOrder = {
			date: $("#orderDate").val(),
			timing: $("#timing").val().trim(),
			meal:$("#meal").val().trim(),
			noofPeople: $("#noOfPeople").val().trim(),
			status: "pending"
		};
		console.log(newOrder);

		submitOrder(newOrder);
		
	}); 


  
	// Submits a new post and brings user to blog page upon completion
	function submitOrder(order) {
		$.post("/api/order/", order).
			then(function(data) {
				console.log("new order added ");
				window.location.replace("/customers");
			})
			.catch(handleLoginErr);
	}
	function handleLoginErr(err) {
		$("#alert .msg").text(err.responseJSON);
		$("#alert").fadeIn(500);
		  }

	
		
});
  
// function displayCustomer(){
// 	$.get("/api/customers/", function(data){
// 		console.log(data);
// 		for()
// 		$("#userInfo").append(data[0].email);
// 		$("#userInfo").append(data[0].id);
// 	});
// }

