
//var shake = ["this is a paragraph", "01", "this is another paragraph", "this is a third paragrap"];

var shake = [
	"shake",
	[["Client","Santander Bank"],["Role", "UX designer"],["Period", "Summer '19"]],
	["this is a paragraph","this is a paragraph"],
	["01", "02"]	
];

var tackl = [
	"tackl",
	[["Client","TACKL"],["Role", "Game designer"],["Period", "Spring '19"]],
	["this is a paragraph","this is a paragraph"],
	["01", "02"]	
];


var projectDatabase = [
	shake,
	tackl
]; 
	
var stringDatabase = [];

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
	
	console.log(projectIndex);

	var header_img = document.querySelector('#header_img');
	header_img.src = "img/" + currentProject + "/" + currentProject + ".jpg";
	
	var port_content = document.querySelector('.port_content');
	
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
	
	
}
