console.log("Hello loggers");

/* DATABASE FOR PORTFOLIO */

var projects = [
	['shake'],
	['tackl'],
	['dcd'],
	['sustain'],
	['trends']		
];

/* Rendering elements in front-page portfolio */

function initilize() {
	addPortDivs();
}

function addPortDivs() {
	var currentRow;

	for(var i = 0; i < projects.length; i++){
	
		if(i%2 == 0){
			var divRow = document.createElement('div');
			divRow.className = 'row';
			var portSection = document.querySelector('.portfolio');
			portSection.appendChild(divRow);
			currentRow = divRow;
			console.log('row');
		}
		
		var divColumn = document.createElement('div');
		divColumn.className = 'column';
		currentRow.appendChild(divColumn);
		console.log('column');
	}	
	
	populateColumns();
	
}

function populateColumns(){

	var columnElements = document.querySelectorAll('.column');
	
	for(var i=0; i < columnElements.length; i++){
		
		
	
	}
	
	
}





/*
var columnElements = document.querySelectorAll('.column');

for (var i = 0; i < columnElements.length; i++){
	columnElements[i].id = projects[i][0];
	//console.log(columnElements[i].id);

*/

//console.log(0%2);

