/*
<div id="site_logo"><a href="index.html">hinken</a></div>
<ul id="site_nav">
    <li><a href="about.html">about</a></li>
    <li><a href="404.html">more work</a></li>
    <li><a href="mailto:hinkendesign@gmail.com">email me</a></li>
</ul>
*/

var folderExt = "";

function renderHeaderPort() {
	folderExt = "../";
	renderHeader();
}


function renderHeader(){

	var links = ["index.html", "about.html", "404.html","mailto:hei@hinken.no"];
	var names = ["hinken", "about", "more work", "email me"]; 

	var header = document.querySelector('header');
	
	var logo = document.createElement('div');
	logo.id = "site_logo";
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
		listItems[i].appendChild(atag);
		list.appendChild(listItems[i]);
	}
	
	header.appendChild(logo);
	header.appendChild(list);
}
