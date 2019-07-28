/*
FILENAME: assign6JS.js
Date: 12/6/2017
Author: Anika Shields
Purpose: MAS/CS115 HW Assignment 6
*/


// Task 1: Practice with loops of movies
// Start with initial collection of 3 movies
// Have interface to add one movie
// Button to suggest a random movie
var myMovies = ["A", "B", "C"]; // sample movies to start with

// function addMovie() reads the value from the newMovieId field, 
// and adds it at the end of the myMovies array.
// Finally it calls listMovies() so the change appears on the page as a new <li> 
function addMovie(){
	
	var newMovie = document.getElementById("newMovieId").value;
	myMovies.push(newMovie);
	listMovies();
}

// function randommovie() picks a random movie from tha array 
// and presents on the page, in the area with id "randomMovieId"

function randomMovie(){
	
	var ranDom = Math.floor(Math.random() * myMovies.length);
	
// extracting index values
	var index = myMovies[ranDom]; 
	document.getElementById("randomMovieId").innerHTML=index;
	
}

//function addElementToList() adds a new <li> with content 
//It is provided to you completed
function addElementToList(content){
   var ul = document.getElementById("moviesId");
   var newLI = document.createElement("LI");
   ul.appendChild(newLI);
   newLI.innerHTML = content;
}

//function listMovies() goes through your collection of movies, stored in the myMovies array, 
//and for each movie, it adds a <li> containing it, to the page
function listMovies(){

	//first clear the moviesId, in case there is already old stuff in there
	document.getElementById("moviesId").innerHTML= ""; 
	
	// using a for-loop, add movie-by-movie from the array myMovies 
	// to the list on the page
	for (i = 0; i < myMovies.length; i++) { 
		addElementToList(myMovies[i])
	}
	
	}
	






