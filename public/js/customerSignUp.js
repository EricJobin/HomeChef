function createChef() {
	var newChef ={
		firstName: $("#firstName").val().trim(),
		lastName: $("#lastName").val().trim(),
		emailChef: $("#emailChef").val().trim(),
		chefPass: $("#chefPass").val().trim(),
		chefPic: $("#chefPic").val().trim(),
		chefBio: $("#chefBio").val().trim(),
	};
	return newChef;
}

$(document).ready(function() {
	$("#submit").on("click", function(){
		event.preventDefault();
		console.log("click");

		var newChef = createChef();
		console.log(newChef);
	});
});