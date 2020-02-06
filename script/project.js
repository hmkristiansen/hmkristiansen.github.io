var shake = [
	"shake",
	[["Client","Santander Bank"],["Role", "UX designer"],["Period", "Summer '19"]],
	["During an internship at " + '<a href="https://www.itera.no" taget= "_blank">Itera</a>'+ " in the summer of 2019, I worked in a multidisciplinary team at Santander Consumer Bank with the service SHAKE."],
	["01", "02","03","04"]	
];

var tackl = [
	"tackl",
	[["Client","TACKL"],["Role", "Game designer"],["Period", "Spring '19"]],
	["In the spring of 2019, I was tasked with my hardest problem to date; making a game aimed at kids with school refusal. <br>&quotWhat is school refusal?&quot you ask. It's very complicated, and my solution revolved around Cognitive Behavioural Therapy and responding to possible scenarios."],
	["01", "02"]
	[""]	
];

var dcd = [
	"dcd",
	[["Course","GUI"],["Role", "UI designer"],["Period", "Autmn '18"]],
	["this is a paragraph","this is a paragraph"],
	["01", "02"]	
];

var sustain = [
	"sustain",
	[["Course","Sustainable design"],["Role", "Design & research"],["Period", "Spring '19"]],
	["this is a paragraph","this is a paragraph"],
	["01", "02"]	
];

var projectDatabase = [
	shake,
	tackl,
	dcd,
	sustain
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
			td.innerHTML = projectDatabase[projectIndex][1][i][j];
			tr.appendChild(td);
		}
		table.appendChild(tr);
	}
	project_faq.appendChild(table);
	port_content.appendChild(project_faq);
	
	/*RENDERING TEXT (& IMAGES?)*/
	
		
	var text = document.createElement('p');
	text.innerHTML = projectDatabase[projectIndex][2];
	text.className = "project_text";
	port_content.appendChild(text);
	
	var k = 0;
	
	while(projectDatabase[projectIndex][3][k] != null){
		var img = document.createElement('img');
		img.className = "project_img";
		img.id = projectDatabase[projectIndex][3][k];
		img.src = "img/" + currentProject + "/" + projectDatabase[projectIndex][3][k] +".jpg";
		
		port_content.appendChild(img);
		
		k++;	
	}
	
	var moreLink
		
	
}
