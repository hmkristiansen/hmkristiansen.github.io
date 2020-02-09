var projectDatabase = [
	shake,
	trends,
	tackl,
	sustain,
	dcd,
	players,
	alice,
	boo,
	blackboard,
	expo,
	proto,
	sportscenteret,
	lighting,
	spire
]; 
	
var currentProject = "";

function getProject(){
	var queryString = decodeURIComponent(window.location.search);
	queryString = queryString.substring(1);
	nameString =  queryString.split("=");	
	currentProject = nameString[1];	
	renderProject();
}

function renderProject(){
		
	var projectIndex = -1;
	
	for(var i=0; i < projectDatabase.length; i++){
		if(projectDatabase[i][0] == currentProject){
			projectIndex = i;
		}
	}
	
	/*SETTING PAGE TITLE*/
	document.title = currentProject + " | Henrik Kristiansen";
	
	/*Intro text*/
	
	var h1 = document.querySelector('.page_header');
	h1.innerHTML = projectDatabase[projectIndex][2];
	
	var h3 = document.querySelector('.page_subheader');
	h3.innerHTML = projectDatabase[projectIndex][1];
	

	
	/*RENDERING HEADER IMG*/
	var header_img = document.querySelector('#header_img');
	header_img.src = "img/" + currentProject + "/" + currentProject + ".jpg";
	
	var port_content = document.querySelector('.port_content');
	
	/*RENDERING FAQ TABLE*/
	var project_faq = document.createElement('div');
	var table = document.createElement('table');
	table.className = "tg";
	
	for(var i=0; i<3; i++){
		var tr = document.createElement('tr');
		for(var j=0; j<2; j++){
			var td = document.createElement('td');
			if(j==0){
				td.className = "tg-bold";	
			}else{
				td.className = "tg-reg";
			}
			td.innerHTML = projectDatabase[projectIndex][3][i][j];
			tr.appendChild(td);
		}
		table.appendChild(tr);
	}
	project_faq.appendChild(table);
	port_content.appendChild(project_faq);
	
	/*RENDERING TEXT*/		
	var text = document.createElement('p');
	text.innerHTML = projectDatabase[projectIndex][4];
	text.className = "project_text";
	port_content.appendChild(text);
	
	
	/*RENDERING IMAGES*/
	var k = 0;
	while(projectDatabase[projectIndex][5][k] != null){
		var img = document.createElement('img');
		img.className = "project_img";
		img.id = projectDatabase[projectIndex][5][k];
		img.src = "img/" + currentProject + "/" + projectDatabase[projectIndex][5][k] +".jpg";
		
		port_content.appendChild(img);
		
		k++;	
	}
	
	/*Adding next project button*/
	
	var nextLink = document.querySelector('#moreProjectLink');
	nextLink.href = "project.html?project=" + projectDatabase[projectIndex+1][0];
	
	console.log(nextLink.href);
	
		
}
