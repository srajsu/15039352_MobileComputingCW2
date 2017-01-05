/*-------SHOPPING LIST-------*/

	var chosenItems = {};
	var counter = "0";
	var listCreated = false;

	$( document ).ready(function() {
		
	//localStorage.removeItem("SLINew");
	//localStorage.removeItem("hi");
	$("#shoppingLists").on("taphold",function(){
	$(this).hide();
	});   

	var q = localStorage.getItem("SLView");
	if (q!=null) chosenItems = JSON.parse(q);
	appendToList();
	
		// This button will increment the value
    $('.qtyplus').click(function(e){
    
     		  var qty = $(".qty").val();
    
          if(qty => 1){
	          $(".qtyminus").removeClass("qtyminusGrey");
          }
    
        // Stop acting like a button
        e.preventDefault();
        // Get the field name
        fieldName = $(this).attr('field');
        // Get its current value
        var currentVal = parseInt($('input[name='+fieldName+']').val());
        // If is not undefined
        if (!isNaN(currentVal)) {
            // Increment
            $('input[name='+fieldName+']').val(currentVal + 1);
        } else {
            // Otherwise put a 0 there
            $('input[name='+fieldName+']').val(1);
        }
    });
    // This button will decrement the value till 0
    $(".qtyminus").click(function(e) {
    		  var qty = $(".qty").val();
          if(qty <= 2){
          $(".qtyminus").addClass("qtyminusGrey");
          }
    
        // Stop acting like a button
        e.preventDefault();
        // Get the field name
        fieldName = $(this).attr('field');
        // Get its current value
        var currentVal = parseInt($('input[name='+fieldName+']').val());
        // If it isn't undefined or its greater than 0
        if (!isNaN(currentVal) && currentVal > 1) {
            // Decrement one
            $('input[name='+fieldName+']').val(currentVal - 1);
        } else {
            // Otherwise put a 0 there
            $('input[name='+fieldName+']').val(1);
        }
    });
    
    var qty = $(".qty").val();
    
    if(qty < 2)
		{$(".qtyminus").addClass("qtyminusGrey");} 
	
	});


/*-------Shopping list - adding a new list-------*/

	function appendToList(){
	$("#shoppingLists").empty();
	if ($("#SLNew").val()!="")  saveChoice();

	//iterate through the dictionary chosenItems
	$("pageone ul").empty();
	for (var key in chosenItems) {
	listvalue = chosenItems[key];
	
	//adding items to list
      	$('<li onclick="openShoppingList(this)">').append('<a href="#"><h3>' + listvalue + '</h3></a><a href="#" class="delete">Delete</a>').appendTo('#shoppingLists');
     // $('<li onclick="test()">').append('<a href="#"><h3>' + listvalue + '</h3></a><a href="#" class="delete">Delete</a>').appendTo('#shoppingLists');
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
	var addItems = {};
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
	    $("#SLItems tr").empty();
        $("#SLItems td").empty();
		
		$("#SLItems thead tr").append("<th value='datepicker1'>Date: </th>" + "<th colspan='3' class='edit' onclick='editBtton();'><span>edit</span></th>");
 
		//$('#SLItems').addClass('id').attr('id', $(obj).text());
		//$("#SLItems").removeClass('id').attr('id', 'SLItems');

		var w = localStorage.getItem(selectedShoppingList);
		if (w!=null) {
			addItems = JSON.parse(w);
			SIAdd();}
			else{
				
			}	
	}
	
	function SIAdd(){
	
		
		
		if ($("#SLINew").val()!="")  saveItemChoice();
		
		 $("#SLItems tr").empty();
         $("#SLItems td").empty();
	 
		for (var key in addItems) {
			
		listvalue = addItems[key].split(",")[0];
		quantityitem = addItems[key].split(",")[1];
		
		addItem(listvalue,quantityitem);
		
		 //var checkbox = "<div class=\"checkBoxLeft\"><input type=\"checkbox\" id=\"item" + counterItems + "\" class=\"box\"></div>";
		
		 //$(".cross").hide(); // hiding the delete icon
		
	     // var checkbox = "<div class='check'><input type='checkbox' class='box' id='item" + counterItems + "'/>" +  "<label for='item" + id + "' class='check-label'></label></div>";
	     // var delIcon = "<td><img src='img/cross.png' alt='cross' class='cross'></td>";
	     // var items = "<tr style='text-decoration:none;'><td>" + checkbox + "</td><td class='content'><span class>" + listvalue + "</span></td>" + delIcon + "</tr>";
	   
	     //	$("#SLItems").append(items + "</tbody>");
	
	    }

	
	}

	function saveItemChoice(){
		if (Object.keys(addItems).length == "0"){}
			else{
				counterItems = parseInt(Object.keys(addItems).length) + 1;
				}

				shoppingListItemAdd = $("#SLINew").val();
				addItems[counterItems] = shoppingListItemAdd + "," + $("#itemQuantity").val() ;
				localStorage.setItem(selectedShoppingList,JSON.stringify(addItems));
	}

		
	//
	function backToList(){
		$("#" + selectedShoppingList).empty();
		$.mobile.changePage("#SLView");}
		
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
       "Tomatoes",
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

// triggered on Enter
$(document).on("keydown", function(e) {
	if(e.keyCode === 13) {
		getInput();
	}
});

// Toggle delete icon when edit button is clicked
function editBtton() {
	// Method two: 

   $(".cross").toggle();

}

// Obtaining customer input and then calling addItem() with the input
function getInput() {
	var custInput = $(".custinput");
	var input = custInput.val();

	if ((input !== "") && ($.trim(input) !== "")) {
	  //  addItem(input);
		custInput.val("");
	}
}

/*--------------------------------------------------------------*/
	//adding item to the list increment id counter for unique id
/*--------------------------------------------------------------*/
function addItem(message,quantityitem) {

	 $(".cross").hide(); // hiding the delete icon
	 
	 $("#SLItems").append("<tbody>");

	var checkbox = "<td class=\"check\">" + "<input type=\"checkbox\" id=\"item" + id + "\" class=\"box\">" + "<label for=\"item" + id + "\" class=\"check-label\"></label></td>";

	var content = "<td class=\"content\"><span>" + message + "</span></td>";

	var quantity = "<td class=\"qty\"><span>" + quantityitem + "</span></td>";
	
	var delIcon = "<td align='center'><img src=\"img/cross.png\" alt=\"cross\" class=\"cross\"></td>";

	$("#SLItems").append("<tr>" + checkbox + content + quantity + delIcon + "</tr>");
	$("#SLItems").append("</tbody>");
	id++;
}

$(document).ready(function(e) {
	

	$("tbody").on("click", ".cross", function() {
		$(this).closest("tr").remove();
	});

	$("button").on("click", getInput);

	$("tbody").on("click", ".box", function() {
		$(this).closest("tr").find("span").toggleClass("checked");
	});
});


/*--------------------------------------------------------------*/
//List export

