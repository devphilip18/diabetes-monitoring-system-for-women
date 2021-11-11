var glucose = document.getElementById("gluc").value;
localStorage.setItem("Glucose", glucose);
console.log("Glucose: ",glucose);


var low = [ ['Fruit juice or regular soda pop','1/2 - 3/4 cup'],
			['Fat-free milk','1 cup'],
			['Honey','1 tablespoon (3 teaspoons)'],
			['Jellybeans','10-15'], 
			['Raisins','2 tablespoons'],
			['Candy','5-7 pieces'],
			['Hard candy','3 pieces']];
			
var high = [ ['Most fruits','1 medium whole fruit (such as a banana, apple, or orange),fruit juice (180 ml) '], 
			 ['Milk and Dairy','1 cup (240 ml) milk or yogurt, 49 gm cheese'],
			 ['Vegetables','spinach,sweet potatoes, broccoli, romaine lettuce, carrots, and peppers(1/2 cup chopped, cooked or raw)'],
			 ['Proteins','1 egg, (55 to 84 grams) cooked meat, poultry, or fish(bake, roast, broil, grill, or boil instead of frying)'],
			 ['Grains and Beans','Whole-grain breads,cereals,oats,beans,whole-wheat pasta,nuts'] ];

var normal = [ ['Non-starchy vegetables','carrots ,bean sprouts,corn,cucumber,cabbage,salad greens,spinach and lettuce'],
			   ['Whole-grain foods','breads,popcorn,brown rice,pasta,cereals,whole oats or oatmeal,cornmeal'],
			   ['Fatty fish','almon, mackerel and tuna'],
			   ['Meat','Chicken ']];

if(glucose <90){
	//low
	document.getElementById("warn1").innerHTML="You need to have some quick-sugar foods to improve sugar levels.";
	makeTable(low);
	document.getElementById("warn_msg2").style.display = "inline-block";
	
}

if(glucose > 90 && glucose <= 150){
	//normal
	
	document.getElementById("warn1").innerHTML = "The diet suggested for you.";
	makeTable(normal);
	document.getElementById("warn_msg2").style.display = "inline-block";

	
}

if(glucose > 150 && glucose <= 240){
	//high
	document.getElementById("warn1").innerHTML="You  need to include more vegetables,fruits,grains and protein rich foods to your diet.";
	makeTable(high);
	document.getElementById("warn_msg2").style.display = "inline-block";

}

if(glucose > 240 && glucose <= 300){
	//very high
	document.getElementById("warn1").innerHTML="Consult doctor immediately.";
	
}






function makeTable(array) {
	var div = document.getElementById("warn_msg");
    var table = document.createElement('table');
	table.style.width  = '50%';
    table.style.border = '1px  black';
	table.setAttribute("id", "warn_table");
	
	
	for (var i = 0; i < array.length; i++) 
	{
		var row = document.createElement('tr');
		for (var j = 0; j < array[i].length; j++) 
		{
           var cell = document.createElement('td');
           cell.textContent = array[i][j];
		   cell.style.border = '1px solid black';
           row.appendChild(cell);
		}
		table.appendChild(row);
	}
	
		
	
    div.appendChild(table);
	div.appendChild(document.createElement("br"));
	
}




