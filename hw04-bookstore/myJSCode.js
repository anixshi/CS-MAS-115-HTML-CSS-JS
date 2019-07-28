/*
FILENAME: myJSCode.js
Date: 30 October 2017
Author: Steph Gall and Anika Shields
Purpose: Skeleton of the js file in HW4
*/

// This is a sample function
function sayHello()
{
  alert('hello!!');
}


/* Description: ask for number of books, and given number of books, determine 
total book cost. Used code from Assignment 3 (Steph) to create conditional.
/*
  This function asks the user for the number of books, using prompt(), and
  then computes the total cost, assuming $50 per book for orders < 25 and
  $40/book for larger orders. The result is reported in the console and also
  inserted into the document in #book_cost.
*/

function calculateBookCost() {

	var books = prompt("How many books do you want to order?" , 100);
	//Price per book which varies depending on how many books ordered
    var low = books < 25;
	var results1;
			
	if (low) {
		results1 = 50;
	} else {
		results1 = 40;
	}
	//Calculating the total cost of the books
	var book_cost = parseInt(results1) * parseInt(books);
			
    var message = "At $" + results1 + "/book, that will cost $" + book_cost + ".";
    console.log(message);
    document.getElementById("book_cost").innerHTML = message;
}


/* Description: Asking user to input a time, in hours and minutes, to see if 
breakfast, lunch, or dinner is being served or even if the kitchen is closed.
From the course website: "This function asks the user for a time (hour and minutes) 
and determines whether the kitchen is closed (before 8am or what meal is being served
(breakfast until 11:30, lunch until 4pm, dinner thereafter.  The result
is reported in the console and also inserted into the document in #hungry."
*/

function MealTime() {
	//Prompting user for time
	var hour = parseInt(prompt("Enter the current hour (0-23)"));
	var min = parseInt(prompt("Enter the current minute (0-59)"));
	/*This function looks at time in terms of minutes. Converting input hours 
	into minutes as well as defining meal times in terms of minutes.*/
	var startMin = 0*60;
	var inputMin = hour*60 + min;
	var stopMin = 24*60 - 1;
	var breakfast = 8*60;	
	var lunch = 11*60 + 30;
	var dinner = 16*60;	

	//Setting conditions for cascading if statements.
	var messaged;
	if ((inputMin >= startMin)&&(inputMin < breakfast)) {
		messaged = "The kitchen is closed.";
	} else if ((inputMin >= breakfast)&&(inputMin < lunch)) {
		messaged = "Breakfast is being served.";
	} else if ((inputMin >= lunch)&&(inputMin < dinner)) {
		messaged = "Lunch is being served.";
	} else {
		messaged = "Dinner is being served.";
	}

	//Console log reporting
	console.log(messaged);	
    document.getElementById("hungry").innerHTML = messaged;
	
} 


//Description: Task 3 -- broken up into many steps to make sure calculations were clear
/*
  This function asks the user for the width and height of an image and
  also the number of colors.  It then computes the bit depth and the
  approximate file size in KB. It reports both values using the console
  and also inserted into the document in #imgsize.
  */

function ImageSize() {
	//To find the height and width to calculate the number of pixels in the image
	var height = parseInt(prompt("What is the height of the image (in pixels)?"));
	var width = parseInt(prompt("What is the width of the image (in pixels)?"));
	var pixNum = (height * width);
	
	//Ask user for number of colors in the image
	var colorNum = parseInt(prompt("How many colors are in the image?"));
	
	//Cascading if statements to determine bit depth
	var bitDepth 
	if (((colorNum >= 1) && (colorNum < 3))) {
		bitDepth = 1;
	} else if (((colorNum >= 3) && (colorNum < 5))) {
		bitDepth = 2;
	} else if (((colorNum >= 5) && (colorNum < 9))) {
		bitDepth = 3;
	} else if (((colorNum >= 9) && (colorNum < 17))) {
		bitDepth = 4;
	} else if (((colorNum >= 17) && (colorNum < 33))) {
		bitDepth = 5;
	} else if (((colorNum >= 33) && (colorNum < 65))) {
		bitDepth = 6;
	} else if (((colorNum >= 65) && (colorNum < 129))) {
		bitDepth = 7;
	} else if (((colorNum >= 129) && (colorNum <= 256))) {
		bitDepth = 8;
	}
	
	//Image size in bits and then conversion to bytes
	var imgSize = parseInt(pixNum * bitDepth);
	var imgSizeBytes = imgSize * 8;
	
	//Determining the color table size (number of colors * 3 (3 bytes for RGB))
	var colorTableSize = colorNum * 3;
	
	//Sum of the image size and the color table size (in bytes)
	var fileSize = 	imgSizeBytes + colorTableSize;
	var fileSizeKB = fileSize * 0.001;
	
	//So that all calculations report to console
	var calculationLog = " image size: " + imgSize + "\n image size in bytes: " 
	+ imgSizeBytes + "\n color table size: " + colorTableSize + "\n file size: " 
	+ fileSize;
	
	console.log(calculationLog);
	//Defining message and giving it conditions
	var message;
		if (fileSizeKB > 100) { 
			message = "Image is too large.";
		} else if (fileSizeKB <=100) {
			message = "Image is just fine.";
		}

	console.log(message);
    document.getElementById("img_size").innerHTML = message;
}



/* Description: Asking user for date of birth so they can find out what day of 
the week they were born.
From course website: "This function asks the user for their month, day and year of birth and
uses a new Date() object to find and report the day they were born. 
This is reported as both a number and a name, and inserting it on
the page in #birthday"
*/

function DayIWasBorn()
{
	//Asking user for DOB.
	var birthday = prompt("What is your date of birth? (MM/DD/YYYY)","03/25/1998");
	//Creating new Date() object
	var dateObj = new Date(birthday);
	var day = dateObj.getDay();
	//Cascading if statements assigning English names to days.
	if (day == 0){
	dayName = "Sunday";
	} else if (day == 1){
	dayName = "Monday";
	} else if (day == 2){
	dayName = "Tuesday";
	} else if (day == 3){
	dayName = "Wednesday";
	} else if (day == 4){
	dayName = "Thursday";
	} else if (day == 5){
	dayName = "Friday";
	} else if (day == 6){
	dayName = "Saturday";
	}
	
	//Cascading if statements assigning French names to days.
	if (day == 0){
	dayNameFren = "Dimanche";
	} else if (day == 1){
	dayNameFren = "Lundi";
	} else if (day == 2){
	dayNameFren = "Mardi";
	} else if (day == 3){
	dayNameFren = "Mecredie";
	} else if (day == 4){
	dayNameFren = "Jeudi";
	} else if (day == 5){
	dayNameFren = "Vendredi";
	} else if (day == 6){
	dayNameFren = "Samedi";
	}
	
	//Console log reporting
	console.log(day);
	var bornDay = birthday + " was a " + dayName + ", or as they say in Paris, " 
	+ dayNameFren + ".";

    console.log(bornDay);
    document.getElementById("birthday").innerHTML = bornDay;
}
