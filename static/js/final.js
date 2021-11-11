var global_calorie;

window.onload = function (){

var item = document.getElementById("foodType").value;

if(item == "food_detect"){
	
	
document.getElementById("detectDiv").style.display="block";


var test = localStorage.getItem("Calorie");
console.log("Previous Calorie :"+parseInt(test));

if(test>0){
	var calorie = document.getElementById("calorie").value;
	test = parseInt(test)+parseInt(calorie)
	localStorage.setItem("Calorie", parseInt(test));
	console.log("Total Calorie:"+ test);
	if(test > 1800){
		alert("Above calorie limit.");
		return;
	}
	document.getElementById("result").innerHTML = "Today's calorie consumption is " + test;
	global_calorie=parseInt(test);
}

else{
	var calorie = document.getElementById("calorie").value;
	localStorage.setItem("Calorie", parseInt(calorie));	
	console.log("First Calorie:"+ calorie);
	document.getElementById("result").innerHTML = "Today's calorie consumption is " + calorie;
	global_calorie=parseInt(calorie);
}
	
google.charts.load("current", {packages:["corechart"]});
google.load("visualization", "1", {packages:["corechart"], callback: drawChart});
	
}

} 



function drawChart() {
        var data = google.visualization.arrayToDataTable([
          ['Calorie', 'Daily Consumption'],
          ['Remaining  Today', 1800-global_calorie],
          ['Consumed Today', global_calorie]
        ]);

        var options = {
          title: "Today"+"'"+"s Calorie Consumption",
          pieHole: 0.4,
		  pieSliceTextStyle: {
            color: 'black',
          }
		 
        };

        var chart = new google.visualization.PieChart(document.getElementById('chart'));
        chart.draw(data, options);
}







