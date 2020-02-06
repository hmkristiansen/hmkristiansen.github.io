var shake = [
	"shake",
	[["Client","Santander Bank"],["Role", "UX designer"],["Period", "Summer '19"]],
	["During an internship at " + '<a href="https://www.itera.no" target="_blank">Itera</a>'+ " in the summer of 2019, I worked in a multidisciplinary team at Santander Consumer Bank with the service SHAKE.<br>My contributions to the project included end-user testing, UI design and some front end development.<br><br>Due to this project still being in development, specific details are not to be disclosed just yet 😇"],
	["02","03"]	
];

var tackl = [
	"tackl",
	[["Client","TACKL"],["Role", "Game designer"],["Period", "Spring '19"]],
	["In the spring of 2019, I was tasked with my hardest problem to date; making a game aimed at kids with school refusal. <br>&quotWhat is school refusal?&quot you ask. It's very complicated, and my solution revolved around Cognitive Behavioural Therapy and responding to possible scenarios.<br><br>The end report PDF can be read " + '<a href="other/tackl.pdf" target="_blank">here</a>'+" (in Norwegian 😎)"],
	["04","01", "02","03"]	
];

var dcd = [
	"dcd",
	[["Course","GUI"],["Role", "UI designer"],["Period", "Autmn '18"]],
	["Graphic User Interface design is a course where one designer is put into a group with three computer developers and are tasked with making an application concept. <br>In 2018 year we were making a concept for Trondheim Kommune where users could send in suggestions to help improve the public areas in the city.<br>The course proved to be a good experience in working in a team across disciplines and usage of tools to improve overall usability for mobile devices."],
	["01", "02","03","04"]	
];

var sustain = [
	"sustain",
	[["Course","Sustainable design"],["Role", "Design & research"],["Period", "Spring '19"]],
	["In the subject Sustainable Design, my group and I were tasked with finding a daily practice to which we were to analyse and improve from a sustainability point of view. We chose the practice of online shopping, and the result was a graphic representation of the different impacts the clothes have in certain categories (as you can see above).<br>The full report can be read " + '<a href="other/sustain_rapport.pdf" target="_blank">here</a>'+" (in English 🥳)" ],
	["01"]	
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
	
	/*SETTING PAGE TITLE*/
	document.title = currentProject + " | Henrik Kristiansen";
	
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
	
	/*RENDERING TEXT*/		
	var text = document.createElement('p');
	text.innerHTML = projectDatabase[projectIndex][2];
	text.className = "project_text";
	port_content.appendChild(text);
	
	
	/*RENDERING IMAGES*/
	var k = 0;
	while(projectDatabase[projectIndex][3][k] != null){
		var img = document.createElement('img');
		img.className = "project_img";
		img.id = projectDatabase[projectIndex][3][k];
		img.src = "img/" + currentProject + "/" + projectDatabase[projectIndex][3][k] +".jpg";
		
		port_content.appendChild(img);
		
		k++;	
	}
	
		
	
}
