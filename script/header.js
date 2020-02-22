
/*Fade til sider*/
document.body.className += ' fade-out';


var folderExt = "";

function renderHeaderPort() {
	folderExt = "../";
	renderHeader();
}

function renderHeader(){

	var links = ["index.html", "about.html", "archive.html"];
	var names = ["hinken", "about", "archive"]; 
	
	var currentPage = document.title;
	nameString =  currentPage.split(" | ");	
	currentProject = nameString[0];

	var header = document.querySelector('header');
	
	var logo = document.createElement('div');
	logo.id = "site_logo";
	//logo.className ="text-focus-in"
	var atag_logo = document.createElement('a');
	atag_logo.href = folderExt + links[0];
	atag_logo.innerText = names[0];
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
