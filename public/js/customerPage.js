function getOrder(){
	$("#submit").click(function(){
		event.preventDefault();
		var newOrder = {
			chefid: x, //put stuff here
			date: $("#startDate").val().trim(),
			timing: $("#timing").val().trim(),
			meal:$("meal").val().trim(),
			noOfPeople: $("#noOfPeople").val().trim(),
			status: "pending"
		};
		console.log(newOrder);

		submitOrder(newOrder);
		
	}); 
}

function submitOrder(order) {
	$.post("/api/order/", order, function() {
		console.log("new order added ");
	});
}

$(document).ready(function() {

	getOrder();


});
  