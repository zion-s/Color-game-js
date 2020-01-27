var numSquares=6;
var colour=generateRandomColour(numSquares);

var squares=document.querySelectorAll(".square");
var pickedColour=pickColour();
var colourDisplay=document.getElementById("colourDisplay");
var messageDisplay=document.getElementById("messageDisplay");
var h1=document.querySelector("h1");
var reset=document.getElementById("reset");
var easyBtn=document.getElementById("easyBtn");
var hardBtn=document.getElementById("hardBtn");

easyBtn.addEventListener("click", function(){
	easyBtn.classList.add("selected");
	hardBtn.classList.remove("selected");
	numSquares=3;
	colour=generateRandomColour(numSquares);
	pickedColour=pickColour();
	colourDisplay.textContent=pickedColour;
	for (var i = 0; i < squares.length; i++) {
		if(colour[i]){
			squares[i].style.backgroundColor=colour[i];
		}
		else{
			squares[i].style.display="none";
		}
	}
});

hardBtn.addEventListener("click", function(){
	easyBtn.classList.remove("selected");
	hardBtn.classList.add("selected");
	numSquares=6;
	colour=generateRandomColour(numSquares);
	pickedColour=pickColour();
	colourDisplay.textContent=pickedColour;
	for (var i = 0; i < squares.length; i++) {
		if(colour[i]){
			squares[i].style.backgroundColor=colour[i];
			squares[i].style.display="block";
		}
	}
});

reset.addEventListener("click", function(){
	colour=generateRandomColour(numSquares);
	pickedColour=pickColour();
	colourDisplay.textContent=pickedColour;
	messageDisplay.textContent="";
	for( var i=0; i<squares.length; i++){
	squares[i].style.backgroundColor=colour[i];
}
h1.style.backgroundColor= "#000";
reset.textContent="New Colours";
})

colourDisplay.textContent=pickedColour;

for(var i=0; i<squares.length; i++){
	squares[i].style.backgroundColor=colour[i];

	squares[i].addEventListener("click", function(){

		var clickedColour=this.style.backgroundColor;
		if(clickedColour===pickedColour){
			messageDisplay.textContent="Correct";
			changeColour(clickedColour);
			h1.style.backgroundColor=clickedColour;
			reset.textContent="Play Again";
		}else {
			this.style.backgroundColor="#000";
			messageDisplay.textContent="Try Again";
		}
	});
}

function changeColour(shade){
	for (var i = 0; i < squares.length; i++) {
		squares[i].style.backgroundColor=shade;
	}
}
function pickColour(){
	var pickColour=Math.floor(Math.random()*colour.length);
	return colour[pickColour];
}
function generateRandomColour(num){
	var arr=[];
	for (var i = 0; i < num; i++) {
		arr.push(randomColour());
	}
	return arr;
}
function randomColour(){
	var r = Math.floor(Math.random()*256);
	var g = Math.floor(Math.random()*256);
	var b = Math.floor(Math.random()*256);
	return "rgb("+r+", "+g+", "+b+")";
}