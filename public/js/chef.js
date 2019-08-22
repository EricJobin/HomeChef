// Chef Logic for HomeChef

// This function will check if there's any update to the database for the chef to see
// ------------- Get Orders from DB - Not done --------------------------------------
// router.get("/api/chef", function(req, res) {
//   	burger.all(function(data) {
// 		var chefBooking = {
// 			//Data taken from booking db
// 		};
// 		var chefCalendar = {
// 			//Data from booking db
// 		};
//     	var logvar, t1t, t1, t2t, t2;
// 		t1t = "booking data:";
// 		t1 = chefBooking;
// 		t2t = "calendar data:";
// 		t2 = chefCalendar;
// 		logvar = [t1t, t1, t2t, t2];
// 		console.log(logvar);
// 		console.log("vars declared but not used: ");
// 		console.log(req + res + data);

// 		// Render booking requests to Chef's Page Here
// 	});
// });

// ------------ Update Order Status in database -------------------------------------

// *****  MAKE PUT REQUEST HERE *********




// ---------------  Dummy Data for dev & testing ----------------------------------
var bookdata = [
	{
		client: "Andrew Anderson",
		city: "Toronto",
		address: "1234 Bloor West",
		date: "August 26",
		time: "7pm",
		stove: "Electric",
		hobbs: 4,
		oven: "Electric",
		meal: "French",
		diet: "none",
		numPeople: "2",
		status: "pending",
	},
	{
		client: "Bob Brown",
		city: "Toronto",
		address: "4321 Yonge St.",
		date: "August 27",
		time: "8pm",
		stove: "Gas",
		hobbs: 4,
		oven: "Gas",
		meal: "Italian",
		diet: "Gluten Free",
		numPeople: "4",
		status: "pending",
	},
	{
		client: "Chad Conway",
		city: "Toronto",
		address: "333 Palmerston Blvd",
		date: "August 27",
		time: "8pm",
		stove: "None",
		hobbs: 0,
		oven: "None",
		meal: "Steak & Potatoes",
		diet: "Peanut Allergy",
		numPeople: "1",
		status: "pending",
	},
	{
		client: "Dave Dunway",
		city: "Toronto",
		address: "333 Palmerston Blvd",
		date: "August 27",
		time: "8pm",
		stove: "None",
		hobbs: 0,
		oven: "None",
		meal: "Steak & Potatoes",
		diet: "Peanut Allergy",
		numPeople: "1",
		status: "pending",
	},
	{
		client: "Eddie Edwards",
		city: "Toronto",
		address: "333 Palmerston Blvd",
		date: "August 27",
		time: "8pm",
		stove: "None",
		hobbs: 0,
		oven: "None",
		meal: "Steak & Potatoes",
		diet: "Peanut Allergy",
		numPeople: "1",
		status: "pending",
	}
];

// Sample data list for dev use
// {
// 	client: "",
// 	city: "",
// 	address: "",
// 	date: "",
// 	time: "",
// 	stove: "",
// 	hobbs: ,
// 	oven: "",
// 	meal: "",
// 	diet: "",
// 	numPeople: "",
// }

//------------------  End of Dummy Data Section ------------------------------------

//Render bookings data as Cards on Chef Home Page in #bookdiv
// console.log(bookdata);

function renderBookings() {
	if (bookdata.length > 0){
		$("#bookdiv").empty();
		$("#bookdiv").append(`<div class="row" id="bookRow"></div>`);
		for (var x = 0; x < bookdata.length; x++){
			$(`#bookRow`).append(`
				<div class="col-xs-12 col-sm-6 col-md-4 col-lg-3" id=card${x}>
					<div class="card shadow">
						<div class="card-body bookingCard" data-toggle="modal" data-target="#myBookingModal" id="booking${x}">
							<h4>${bookdata[x].client}</h4> 
				</div></div></div>`);
		}
	}
}

function popUpBookingModal(){
	$(".bookingCard").on("click", function(){
		$(".modal-title").empty();
		$(".modal-body").empty();
		$(".modal-footer").empty();
		//viewid extracts the place in the array where what we're looking at occurs
		var viewid = parseInt(this.id.replace('booking',''))
		var clientInfo= bookdata[viewid];
		$(".modal-title").append(`${clientInfo.client}<br>`);
		$(".modal-body").append(`Location: ${clientInfo.address}, ${clientInfo.city}<br>`);
		$(".modal-body").append(`When: ${clientInfo.time} on ${clientInfo.date}<br>`);
		$(".modal-body").append(`Equipment: Stove: ${clientInfo.stove} with ${clientInfo.hobbs} hobs<br> Oven: ${clientInfo.oven}<br>`);
		$(".modal-body").append(`Desired Meal: ${clientInfo.meal} for ${clientInfo.numPeople} people<br>`);
		$(".modal-body").append(`Dietary Restrictions: ${clientInfo.diet}<br>`);
		$(".modal-footer").append(`<button type="button" class="btn btn-outline-success" data-dismiss="modal" id="takeOrder" data-id="${viewid}">Accept Order</button>`);
		$(".modal-footer").append(`<button type="button" class="btn btn-outline-danger" data-dismiss="modal" id="rejectOrder" data-id="${viewid}">Decline Order</button>`);
	});
}

function takeBookings(){

	$(document).on("click", "#takeOrder, #rejectOrder", function() {
		var orderID = $("#rejectOrder").data("id")
		$(`#card${orderID}`).remove()
		if(this.id == "takeOrder"){
			console.log(`Order ${orderID} taken`);
			$(`#bookedOrders`).append(`
				<div class="col-xs-12 col-sm-6 col-md-4 col-lg-3" id=card${orderID}>
					<div class="card shadow">
						<div class="card-body bookingCard" data-toggle="modal" data-target="#myBookingModal" id="booking${orderID}">
							<h4>${bookdata[orderID].client}</h4> 
				</div></div></div>`);
		}
		else if(this.id == "rejectOrder"){console.log(`Order ${orderID} rejected and removed`);}
		else{console.log("If you see this error, tell Eric")}
		//Do stuff to updated order status in db here
	});
}

$(document).ready(function() {
	renderBookings();
	popUpBookingModal();
	takeBookings()
});