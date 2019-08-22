$(document).ready(function() {

	// Adding an event listener for when the data is submitted
	$("#submit").click(function(){
		
		event.preventDefault();
		var newOrder = {
			startdate: $("#startDate").val().trim(),
			enddate: $("#endDate").val().trim(),
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
		$.post("/api/order/", order, function() {
			console.log("new order added ");
		});
	}

});
  