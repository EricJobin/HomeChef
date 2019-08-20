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

console.log(bookdata);




//Card Template:

{/* <div class="card shadow">
	<div class="card-header">
		<h3>Calendar</h3>
	</div>
	<div class="card-body">
		<div class="row">
			<div class="col-12">
			</div>
		</div>
	</div>
</div> */}

// For opening Modals: data-toggle="modal" data-target="#myModal"