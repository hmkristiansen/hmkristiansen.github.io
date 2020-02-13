
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
