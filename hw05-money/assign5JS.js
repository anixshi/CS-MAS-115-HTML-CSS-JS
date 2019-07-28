/*
FILENAME: assign5JS.js
Date: 11/18/17
Author: Anika Shields
Purpose: Assignment 5
*/

// Task 1:
//breakMoney() takes an amount and a bill denomination as inputs.
//Computes the number of whole such denominations go into the amount, 
//as well as the remaining. It presents the results on the web page.

//Defining breakMoney
function breakMoney(amount, bill){
	var denom = parseInt(amount/bill)
	var remDenom = parseInt(amount % bill)
	
//Defining result message to be printed on page.
	var result;
	result = "Break $" + amount + " using $" + bill + " bills: give " + denom + " bill(s). The remainder will be $" + remDenom + ".";

//Reporting results to console log
console.log(result);
document.getElementById("results").innerHTML = result;

}

// Task 2: 
// updatePage() reads from the web page the actual amount the user would like to break,
// and the actual denomination she wants to use. Then calls the breakMoney() 
// to do the computation and present the results.

function updatePage(){
	var amount = document.getElementById("amountText").value;
	var bill = document.getElementById("denominationText").value;

//Calling breakMoney function.
	breakMoney(amount, bill)

}


