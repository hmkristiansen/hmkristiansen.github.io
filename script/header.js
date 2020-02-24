
/*Fade til sider*/
document.body.className += ' fade-out';


var folderExt = "";

function renderHeaderPort() {
	folderExt = "../";
	renderHeader();
}

function renderHeader(){

	var links = ["index.html", "about.html", "archive.html"];
	var names = ["Henrik M. Kristiansen", "about", "archive"]; 
	
	var currentPage = document.title;
	nameString =  currentPage.split(" | ");	
	currentProject = nameString[0];

	var header = document.querySelector('header');
	
	var logo = document.createElement('div');
	logo.id = "site_logo";
	var atag_logo = document.createElement('a');
	atag_logo.id = "site_logo_cont";
	atag_logo.href = folderExt + links[0];
	atag_logo.innerText = names[0];
	
	/*
	var logo_hinken = document.createElement('div');
	logo_hinken.id ="logo_hinken";
	logo_hinken.className = "logo";
	logo_hinken.innerText = "hinken";
	
	var logo_name = document.createElement('div');
	logo_name.id ="logo_name";
	logo_name.className = "logo";
	logo_name.innerText = "Henrik M. Kristiansen";
		
	atag_logo.appendChild(logo_hinken);	
	atag_logo.appendChild(logo_name);
	*/
	
	logo.appendChild(atag_logo);
	
	var list = document.createElement('ul');
	list.id = "site_nav";
	var listItems = [];
	
	for(var i = 1; i < links.length; i++){
		listItems[i] = document.createElement('li');
		var atag = document.createElement('a');
		atag.href = folderExt + links[i];
		atag.innerText = names[i];
		
		if(names[i] == currentProject){
			atag.className="currentPage";
		}
		
		listItems[i].appendChild(atag);
		list.appendChild(listItems[i]);
	}
	
	header.appendChild(logo);
	header.appendChild(list);
}