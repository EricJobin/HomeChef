// Chef Logic for HomeChef

// This function will check if there's any update to the database for the chef to see

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

//Dummy Data for dev & testing
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

//Render bookings data as Cards on Chef Home Page in #bookdiv
var tbd = bookdata;
console.log(tbd);

function renderBookings() {
	if (bookdata.length > 0){
		var rowCount =1;
		var colCount =0;
		$("#bookdiv").empty();
		$("#bookdiv").append(`<div class="row" id="bookRow${rowCount}"></div>`);
		for (var x = 0; x < bookdata.length; x++){
			$(`#bookRow${rowCount}`).append(`
			<div class="col-3">
				<div class="card shadow">
					<div class="card-body bookingCard" data-toggle="modal" data-target="#myBookingModal" id="booking${x}">
						<h4>${bookdata[x].client}</h4> 
			</div></div></div>`);
			colCount++;
			if (colCount == 4){
				colCount = 0;
				rowCount++
				$("#bookdiv").append(`<div class="row" id="bookRow${rowCount}"></div>`);
			}
		}
	}
}

function popUpBookingModal(){
	$(".bookingCard").on("click", function(){
		$(".modal-title").empty();
		$(".modal-body").empty();
		//viewid extracts the place in the array where what we're looking at occurs
		viewid = parseInt(event.path[1].id.replace('booking',''))
		clientInfo= bookdata[viewid];
		// $(".modal-title").empty();
		$(".modal-title").append(`${clientInfo.client}<br>`);
		$(".modal-body").append(`Location: ${clientInfo.address}, ${clientInfo.city}<br>`);
		$(".modal-body").append(`When: ${clientInfo.time} on ${clientInfo.date}<br>`);
		$(".modal-body").append(`Equipment: Stove: ${clientInfo.stove} with ${clientInfo.hobbs} hobs<br> Oven: ${clientInfo.oven}<br>`);
		$(".modal-body").append(`Desired Meal: ${clientInfo.meal} for ${clientInfo.numPeople} people<br>`);
		$(".modal-body").append(`Dietary Restrictions: ${clientInfo.diet}<br>`);
	});
}


$(document).ready(function() {
	renderBookings()
	popUpBookingModal()


	
});
//<div class="col-12"></div>



// $("#bffname").empty();
// $("#bffname").append(`${data.userName}`);

//Card Template:

// {/* <div class="card shadow">
// 	<div class="card-header">
// 		<h3>Calendar</h3>
// 	</div>
// 	<div class="card-body">
// 		<div class="row">
// 			<div class="col-12">
// 			</div>
// 		</div>
// 	</div>
// </div> */}

// For opening Modals: data-toggle="modal" data-target="#myBookingModal"

//<div class="card shadow"><div class="card-body"> content </div></div>