// JS for rendering Chefs in Area and taking a Client order - EJ

// ---------------  Dummy Data for dev & testing ----------------------------------
// var chefData = [
// 	{
// 		id: 4,
// 		firstName: "Matty",
// 		lastName: "Matheson",
// 		emailChef: "matty@hotmail.com",
// 		chefCity: "Toronto",
// 		chefPic: "http://apparelmagazine.co.nz/restaurantandcafe/wp-content/uploads/sites/3/2019/06/Matty-Matheson.jpeg",
// 		chefBio: "Matty The Flavor Lord Matheson was the executive chef of Parts & Labour, and regularly appeared on Vice's show Munchies and hosts Viceland's It's Suppertime.",
// 	},
// 	{
// 		id: 3,
// 		firstName: "Susur",
// 		lastName: "Lee",
// 		emailChef: "slee@hotmail.com",
// 		chefCity: "Toronto",
// 		chefPic: "https://1843784937.rsc.cdn77.org/wp-content/uploads/2017/08/Susur-Lee-400x200.jpg",
// 		chefBio: "Susur's awards include the prestigious CAA Five Diamond Award, Cannes, France; the American Academy of Hospitality Services' 5 Diamond Award and being named one of the Ten Chefs of the Millennium by Food & Wine.",
// 	},
// 	{
// 		id: 6,
// 		firstName: "Swedish",
// 		lastName: "Chef",
// 		emailChef: "bork@hotmail.com",
// 		chefCity: "Toronto",
// 		chefPic: "https://americanhistory.si.edu/sites/default/files/blog_files/a/6a00e553a80e10883401a3fcc7aa9f970b-800wi.png",
// 		chefBio: "Børk! Børk! Børk!",
// 	},
// ];

//------------------  End of Dummy Data Section ------------------------------------

//===============get data from chef db============
var chefData=[];
function getData(){

$.get("/api/chefs/", function(data) {
	console.log(data);
	for(var i =0;i<data.length;i++){
		var id = data[i].id;
		var fn = data[i].firstName;
		var ln = data[i].lastName;
		var em = data[i].email;
		var city = data[i].chefCity;
		var pic = data[i].chefPic;
		var bio = data[i].chefBio;

		var newchef = new chef(id,fn,ln,em,city,pic,bio);
		function chef(id,first,last,email,city,pic,bio){
			this.id =id;
			this.firstName = first;
			this.lastName =last;
			this.emailChef = email;
			this.chefCity = city;
			this.chefPic = pic;
			this.chefBio = bio;
		}
		console.log(newchef);
		chefData.push(newchef);
	}
});

setTimeout( function(){
    renderChefs()
  }, 30 );

}



// -----------------  Global Varialbes  --------------------------------------------
var chosenChef; //chosenChef will be used to keep track of which chef has been chosen by the user to make a booking with, and it will be the chef id primary key number

// Renders cards of local Chefs -- From database when complete, currently dummy data
function renderChefs() {

	if (chefData.length > 0){
		$("#areaChefs").empty();
		for (var x = 0; x < chefData.length; x++){
			$(`#areaChefs`).append(`
				<div class="col-xs-12 col-sm-6 col-md-4 col-lg-3" id=card${x}>
					<div class="card shadow">
						<div class="card-body chefCard" data-toggle="modal" data-target="#myChefModal" data-arraynum="${x}" id="chef${chefData[x].id}">
							<img class="chefPic" src=${chefData[x].chefPic}><br>${chefData[x].firstName} ${chefData[x].lastName} 
				</div></div></div>`);
		}
	}
}

// Populates Modal with data from selected chef card
function popUpChefModal(){
	$(".chefCard").on("click", function(){


		$(".modal-title").empty();
		$(".modal-body").empty();
		$(".modal-footer").empty();

		//viewid is the id of the chef from the database, chefNum is the place in the array the chef is at
		var viewid = parseInt(this.id.replace('chef',''));
		console.log("id: "+viewid);
		var chefNum = $(`#chef${viewid}`).data("arraynum");
		var chefInfo= chefData[chefNum];

		
		$(".modal-title").append(`${chefInfo.firstName} ${chefInfo.lastName}`);
		$(".modal-body").append(`<img class="chefPic" src=${chefInfo.chefPic}><br>`);
		$(".modal-body").append(`${chefInfo.chefBio}`);
		$(".modal-footer").append(`<button type="button" class="btn btn-outline-success" data-dismiss="modal" id="bookChef" data-array=${chefNum} data-id="${viewid}">Choose this Chef</button>`);

	});
}

function chooseChef(){
	$(document).on("click", "#bookChef", function() {
		chosenChef=this.dataset.id;
		$("#submit").removeAttr("disabled");
		$("#chosenChefName").removeAttr("placeholder");
		$("#chosenChefName").attr("placeholder", `${chefData[this.dataset.array].firstName} ${chefData[this.dataset.array].lastName}`);
	});
}

function getOrder(){
	$("#submit").click(function(){
		event.preventDefault();
		var newOrder = {
			chefid: chosenChef,
			orderDate: $("#orderDate").val(),
			orderTime: $("#orderTime").val(),
			meal:$("#meal").val().trim(),
			noOfPeople: $("#noOfPeople").val(),
			status: "pending"
		};
		console.log(newOrder);
		// submitOrder(newOrder);
	}); 
}

// function submitOrder(order) {
// 	$.post("/api/order/", order, function() {
// 		console.log("new order added ");
// 	});
// }

$(document).ready(function() {
	getData();
	// renderChefs();
	popUpChefModal();
	chooseChef();
	getOrder();

});
  