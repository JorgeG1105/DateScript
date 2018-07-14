/*Here we are selecting the select tag in question (year) that we will be
working with. As well as the day. Then we are dynamically creating an option tag template for later use*/

let selectYear = document.getElementById("year");
let selectMonth = document.getElementById("month");
let selectDay = document.getElementById("day");
let yrOptions = "<option value = '0'>-</option>";
let option1 = document.createElement("option");
let option2 = document.createElement("option");


/*This function will check to see if i is greater than 1921 and if so it will run what is inside the function and 
then reduce i by one until i is no longer greater than 1921. It will also add all of these as options under the year
select dropdown.*/

function populateYears() {

	for(var i = 2008; i > 1921; i--){
		yrOptions += "<option value= '"+i+"'>"+i+"</option>";
	}

	selectYear.innerHTML = yrOptions;
}
//Execution of populateYears function.
populateYears();


/*This function will determine, based on the month,
the appropriate days into the days dropdown, For example:
The month of Feb has 29 (including leap year in this case) days 
so if Feb is selected then you should only be able to select
up to and including the 29th day of the month..*/

selectMonth.addEventListener("change", () => {
	if (selectMonth.value === "02"){
		selectDay.remove("31");
		selectDay.remove("30");
	}
	else if (selectMonth.value === "04" || selectMonth.value === "06" || selectMonth.value === "09" || selectMonth.value === "11"){
		selectDay.remove("31");
		option1.text = "30";
		selectDay.add(option1);

	}
	else if (selectMonth.value ==="01" || selectMonth.value === "03" || selectMonth.value === "05" || selectMonth.value === "07" || selectMonth.value === "08" || selectMonth.value === "10" || selectMonth.value === "12") {
		option1.text = "30";
		selectDay.add(option1);
		option2.text = "31";
		selectDay.add(option2);
	}
});
	