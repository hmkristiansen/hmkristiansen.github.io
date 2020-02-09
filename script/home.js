
var projects = [
	
	shake,
	trends,
	tackl,
	sustain

];

var selectedProject = "";

/* Rendering elements in front-page portfolio */

function renderProjects() {
	addPortDivs();
}

function addPortDivs(){
	
	var portSection = document.querySelector('.portfolio'); 

	for(var i=0; i < projects.length; i++){
		var div = document.createElement('div');
		div.className = 'portItem right';
		
		if(i%2 == 0){
			div.className = 'portItem';
		}
		portSection.appendChild(div);
	}
	populatePort();	
}

function populatePort(){

	var portElements = document.querySelectorAll('.portItem');
	
	for(var i=0; i < portElements.length; i++){
	
		var atag = document.createElement('a');
		atag.id = projects[i][0];
		atag.className = "portItemTag";
		atag.href = "project.html?project=" + atag.id; 
		
		var img = document.createElement('img');
		img.src = "img/" + projects[i][0] + "/" + projects[i][0] + ".jpg"; 
		
		var h1 = document.createElement('h1');
		h1.innerText = projects[i][2];
		
		var h3 = document.createElement('h3');
		h3.innerText = projects[i][1];
		
		atag.appendChild(img);
		atag.appendChild(h1);
		atag.appendChild(h3);
		
		portElements[i].appendChild(atag);
	}
}

/*
function openProject(){	
	var queryString = "?project=" + selectedProject;
	window.location.href = "project.html" + queryString;
}

$(document).ready(function(){

	$(".portItemTag").click(function() {
		selectedProject = $(this).attr('id');
		openProject();
	});

});
*/


/*
class User {

  constructor(name) {
    this.name = name;
  }

  sayHi() {
    alert(this.name);
  }

}

// Usage:
let user = new User("John");
user.sayHi();
*/


/*
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
	
}*/

/*
function populateColumns(){

	var columnElements = document.querySelectorAll('.column');
	
	for(var i=0; i < columnElements.length; i++){
	
		var atag = document.createElement('a');
		
		var img = document.createElement('img');
		img.src = "img/" + projects[i][0] + "/" + projects[i][0] + ".jpg"; 
		
		var h1 = document.createElement('h1');
		h1.innerText = projects[i][2];
		
		var h3 = document.createElement('h3');
		h3.innerText = projects[i][1];
		
		atag.appendChild(img);
		atag.appendChild(h1);
		atag.appendChild(h3);
		
		columnElements[i].appendChild(atag);
	}
}
*/




/*
var columnElements = document.querySelectorAll('.column');

for (var i = 0; i < columnElements.length; i++){
	columnElements[i].id = projects[i][0];
	//console.log(columnElements[i].id);

*/

//console.log(0%2);

/* DATABASE FOR PORTFOLIO */

/*
var projects = [
	['shake','SHAKE','Safer 2nd hand purchase of cars'],
	['tackl','TACKL','Helping children with school refusal'],
	['dcd','Trondheim Kommune','Democratize urban development'],
	['sustain','Research project','Making shopping more sustainable']		
];*/


