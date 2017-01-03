/*-------SHOPPING LIST-------*/

	var chosenItems = {};
	var listCreated = false;
	var counter = "0";

	$( document ).ready(function() {
		
	//localStorage.removeItem("SLINew");
	//localStorage.removeItem("monday");
	$("#shoppingLists").on("taphold",function(){
	$(this).hide();
	});   

	var q = localStorage.getItem("SLView");
	if (q!=null) chosenItems = JSON.parse(q);
	appendToList();
	});


/*-------Shopping list - adding a new list-------*/

	function appendToList(){
	
	if ($("#SLNew").val()!="")  saveChoice();

	//iterate through the dictionary chosenItems
	$("pageone ul").empty();
	for (var key in chosenItems) {
	listName = chosenItems[key];
	
	//adding items to list
      	$('<li onclick="openShoppingList(this)">').append('<a href="#"><h3>' + listName + '</h3></a><a href="#" class="delete">Delete</a>').appendTo('#shoppingLists');
     // $('<li onclick="test()">').append('<a href="#"><h3>' + listName + '</h3></a><a href="#" class="delete">Delete</a>').appendTo('#shoppingLists');
		}
	$("#shoppingLists").listview('refresh');
		}

	function saveChoice(){
		if (Object.keys(chosenItems).length == "0"){}
		else
			{counter =  parseInt(Object.keys(chosenItems).length) + 1}

						shoppingListAdd = $("#SLNew").val();
						chosenItems[counter] = shoppingListAdd;
						localStorage.setItem("SLView",JSON.stringify(chosenItems));
		}
	

/*-------SHOPPING LIST ITEMS-------*/

	var selectedShoppingList; 
	var addNewItems = {};
	var counterItems = "0";

	//access shopping list items
	function openShoppingList(obj){
	
		//show page with selected list
		$.mobile.changePage("#SLItem");

		//refresh the items list
		$("#SLINew").val('');
		selectedShoppingList = "";
		$("#lblSLName").empty();
	
		//provide a name to the selected shopping list
		$("#lblSLName").append($(obj).text());
		selectedShoppingList = $(obj).text();

		$("#" + selectedShoppingList).empty();
		 $("#SLItems").empty();

		//$('#SLItems').addClass('id').attr('id', $(obj).text());
		//$("#SLItems").removeClass('id').attr('id', 'SLItems');

		var w = localStorage.getItem(selectedShoppingList);
		if (w!=null) {
			addNewItems = JSON.parse(w);
			SIAdd();}
			else{
				//some kind of alert
			}	
	}
	
	function SIAdd(){
		
	//	$("#SLItems > tbody").empty();
	//	$("#SLItems > tr").remove();
	//	$("#SLItems > tbody").html("");
		
		
		if ($("#SLINew").val()!="")  saveItemChoice();
		
		
		//add edit button in table
		 var editbutton = "<thead><tr><td><th class='edit' colspan='3'><span>edit</span></th></td></tr></thead><tbody>";
		 $("#SLItems").append(editbutton);
		
		
		for (var key in addNewItems) {
		listName = addNewItems[key];
		
		
		//var checkbox = "<div class=\"checkBoxLeft\"><input type=\"checkbox\" id=\"item" + counterItems + "\" class=\"box\"></div>";
		
		//$(".cross").hide(); // hiding the delete icon
		
	   var checkbox = "<div class='check'><input type='checkbox' class='box' id='item" + counterItems + "'/>" +  "<label for='item" + id + "' class='check-label'></label></div>";
	   var delIcon = "<td><img src='img/cross.png' alt='cross' class='cross'></td>";
	   var items = "<tr style='text-decoration:none;'><td>" + checkbox + "</td><td class='content'><span class>" + listName + "</span></td>" + delIcon + "</tr>";
	   
	  	$("#SLItems").append(items + "</tbody>");
	
	    }
		
		$("#SLItems").listview('refresh');

		
		
	//	$("#SLItems").listview('refresh');
	
	//<td></a><a href='#' class='delete'>Delete</a></td>

	  //adding items to list
	
     //	$('<li>').append('<a href="#">' + checkbox + '<h3>' + listName + '</h3><span class="ui-li-count ui-body-inherit">12</span></a><a href="#" class="delete">Delete</a>').appendTo("#SLItems");
	
	}

	function saveItemChoice(){
		if (Object.keys(addNewItems).length == "0"){}
			else{
				counterItems = parseInt(Object.keys(addNewItems).length) + 1;
				}

				shoppingListItemAdd = $("#SLINew").val();
				addNewItems[counterItems] = shoppingListItemAdd;
				localStorage.setItem(selectedShoppingList,JSON.stringify(addNewItems));
	}

		
	//
	function backToList(){
		$("#" + selectedShoppingList).empty();
		$.mobile.changePage("#SLView");}


	//Delete saved shopping lists
	//function removeshoppinglists() {
    //var elem = document.getElementById('shoppingLists');
    //elem.parentNode.removeChild(elem);
    //return false;
	//}
		
		
/*-------Shopping list available items - to be used in autocomplete field-------*/

 $( function() {
    var availableItems = [
       "Asparagus",
       "Broccoli",
       "Carrots",
       "Cauliflower",
       "Celery",
       "Corn",
       "Cucumbers",
       "Lettuce",
       "Mushrooms",
       "Onions",
       "Peppers",
       "Potatoes",
       "Spinach",
       "Squash",
       "Zucchini",
       "Tomatoes*",
       "BBQ sauce",
       "Gravy",
       "Honey",
       "Hot sauce",
       "Jam",
	   "Jelly",
	   "Preserves",
       "Ketchup",
	   "Mustard",
       "Mayonnaise",
       "Pasta sauce",
       "Relish",
       "Salad dressing",
       "Salsa",
       "Soy sauce",
       "Steak sauce",
       "Syrup",
       "Worcestershire sauce",
       "Butter",
	   "Margarine",
       "Cottage cheese",
       "Milk",
       "Sour cream",
       "Whipped cream",
       "Yogurt",
       "Bagels",
	   "Croissants",
       "Buns",
       "Cake",
       "Cookies",
       "Donuts",
       "Fresh bread",
       "Pie",
       "Pita bread",
       "Sliced bread",
       "Antiperspirant",
	   "Deodorant",
       "Bath soap",
	   "Hand soap",
       "Cosmetics",
       "Cotton swabs",
       "Facial cleanser",
       "Facial tissue",
       "Feminine products",
       "Floss",
       "Hair gel",
       "Lip balm",
       "Moisturizing lotion",
       "Mouthwash",
       "Razors",
	   "Shaving cream",
       "Shampoo",
	   "Conditioner",
       "Sunblock",
       "Toilet paper",
       "Toothpaste",
       "Vitamins",
       "Air freshener",
       "Bathroom cleaner",
       "Detergent",
       "Dishwasher soap",
       "Garbage bags",
       "Glass cleaner",
       "Mop head",
	   "Vacuum bags",
       "Sponges",
       "Apples",
       "Avocados",
       "Bananas",
       "Berries",
       "Cherries",
       "Grapefruit",
       "Grapes",
       "Kiwis",
       "Lemons",
       "Melon",
       "Nectarines",
       "Oranges",
       "Peaches",
       "Pears",
       "Plums",
       "Bouillon cubes",
       "Cereal",
       "Coffee",
       "Instant potatoes",
       "Lime juice",
       "Mac & cheese",
       "Olive oil",
       "Packaged meals",
       "Pancake mix",
       "Pasta",
       "Peanut butter",
       "Pickles",
       "Rice",
       "Tea",
       "Vegetable oil",
       "Vinegar",
       "Bacon",
	   "Sausage",
       "Beef",
       "Chicken",
       "Ground beef",
       "Ham",
       "Hot dogs",
       "Lunchmeat",
       "Turkey",
       "Bleu cheese",
       "Cheddar",
       "Cottage cheese",
       "Cream cheese",
       "Feta",
       "Goat cheese",
       "Mozzarella",
       "Parmesan",
       "Provolone",
       "Ricotta",
       "Sandwich slices",
       "Swiss",
       "Flour",
       "Shortening",
       "Sugar",
       "Sugar substitute",
       "Yeast",
       "Catfish",
       "Crab",
       "Lobster",
       "Mussels",
       "Oysters",
       "Salmon",
       "Shrimp",
       "Tilapia",
       "Tuna",
       "Basil",
       "Black pepper",
       "Cilantro",
       "Cinnamon",
       "Garlic",
       "Ginger",
       "Mint",
       "Oregano",
       "Paprika",
       "Parsley",
       "Red pepper",
       "Salt",
       "Vanilla extract",
       "Beer",
       "Tonic",
       "Champagne",
       "Gin",
       "Juice",
       "Mixers",
       "Red wine",
	   "White wine",
       "Rum",
       "Saké",
       "Soda pop",
       "Sports drink",
       "Whiskey",
       "Vodka",
       "Baby food",
       "Diapers",
       "Formula",
       "Lotion",
       "Baby wash",
       "Wipes",
       "Cat food",
	   "Cat Treats",
       "Cat litter",
       "Dog food",
	   "Dog Treats",
       "Flea treatment",
       "Pet shampoo",
       "Aluminum foil",
       "Napkins",
       "Non-stick spray",
       "Paper towels",
       "Plastic wrap",
       "Freezer bags",
       "Wax paper",
    ];
    $( "#SLINew" ).autocomplete({
      source: availableItems
    });
  } );
  
/*--------------------------------------------------------------*/

var id = 1; // unique id for list items

$(document).ready(function(e) {
	
	editButton();

	$("tbody").on("click", ".cross", function() {
		$(this).closest("tr").remove();
	});

	$("button").on("click", getInput);

	$("tbody").on("click", ".box", function() {
		$(this).closest("tr").find("span").toggleClass("checked");
	});
	
	

});

// triggered on Enter
$(document).on("keydown", function(e) {
	if(e.keyCode === 13) {
		getInput();
	}
});

// Toggle delete icon when edit button is clicked
function editButton() {
	// Method two: 
$(".edit").delegate("span", "click", function(){
   $(".cross").toggle();
    alert('you clicked me!');
});
}



// Obtaining customer input and then calling addItem() with the input
function getInput() {
	var custInput = $(".custinput");
	var input = custInput.val();

	if ((input !== "") && ($.trim(input) !== "")) {
	//	addItem(input);
		custInput.val("");
	}
}

/*--------------------------------------------------------------*/
	//adding item to the list increment id counter for unique id
/*--------------------------------------------------------------*/
function addItem(message) {

	$(".cross").hide(); // hiding the delete icon

	var checkbox = "<td class=\"check\">" + "<input type=\"checkbox\" id=\"item" + id + "\" class=\"box\">" + "<label for=\"item" + id + "\" class=\"check-label\"></label></td>";

	var content = "<td class=\"content\"><span>" + message + "</span></td>";

	var delIcon = "<td><img src=\"img/cross.png\" alt=\"cross\" class=\"cross\"></td>";

	$("tbody").append("<tr>" + checkbox + content + delIcon + "</tr>");

	id++;
}

/*--------------------------------------------------------------*/