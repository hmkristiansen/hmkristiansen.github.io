function preloadAnimation(){
	let container = document.getElementById("preloader");
	lottie.loadAnimation({
		container: container, // the dom element that will contain the animation
		renderer: 'svg',
		loop: true,
		autoplay: true,
		path: 'script/preloader.json' // the path to the animation json
	});
}

var shake,ctrl,futura,nn,aw,play;
var projects = [
	["play",play],
	["aw",aw],
	["shake",shake],
	["nn",nn],
	["futura",futura],
	["ctrl",ctrl]
];

var images=[];

getProjects();

function getProjects(){
	for(var i = 0; i<projects.length; i++){
		var json = (function () {
			var json = null;
			$.ajax({
				'async': false,
				'global': false,
				'url': "assets/"+projects[i][0]+"/"+projects[i][0]+".json",
				'dataType': "json",
				'success': function (data) {
					json = data;
				}
			});
			return json;
		})(); 
		projects[i][1] = json;
	}
	preloadImages();
	renderPhotogrid();
}

function preloadImages(){
	for(var i=0; i<projects.length; i++){
		preloadImage(projects[i][1].header_img);
	}
}
function preloadImage(url){
    var img = new Image();
	img.src = url;
	images.push(img);
}

function renderPhotogrid(){

	let workContainer = document.getElementById("work");

	for(var i=0; i<projects.length; i++){

		let workItemContainer = document.createElement('div');
		workItemContainer.classList += "workItemContainer";

		let workItem = document.createElement('div');
		workItem.classList += "workItem";
		workItem.id = "item"+i;

		let img = images[i];
		img.id = projects[i][0];
		workItem.appendChild(img);

		let h1 = document.createElement('h1');
		h1.innerHTML = projects[i][1].h1;
		workItem.appendChild(h1);

		workItemContainer.appendChild(workItem);

		workContainer.appendChild(workItemContainer);
	}
}



