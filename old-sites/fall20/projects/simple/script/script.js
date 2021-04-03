/* CONTENT */
var body = document.body;

/* INIT */

checkIfTouch();
renderPage();

function checkIfTouch(){
	touchsupport = ('ontouchstart' in window) || (navigator.maxTouchPoints > 0) || (navigator.msMaxTouchPoints > 0)
	if (!touchsupport){
        body.classList.add("non-touch");
    }
}

/* RENDER CONTENT */

function renderPage(){

    /* creating sections */ 

    let aboutSection = document.createElement('section');
    let workSection = document.createElement('section');

    aboutSection.id = "about";
    workSection.id = "work";

    body.appendChild(aboutSection);
    body.appendChild(workSection);

    addAboutContent();
    addWorkContent();
}

/* SUPPORTING FUNCTIONS */  

function addAboutContent(){
    let about = document.getElementById("about");

    let h1 = document.createElement("h1");
    h1.innerHTML = "Heisann!";
    about.appendChild(h1);

    let p = document.createElement("p");
    
}

function addWorkContent(){
     let work = document.getElementById("work");
}

var shake,ctrl,futura,nn,aw;

var projects = [
	["aw",aw],
	["ctrl",ctrl],
	["futura",futura],
	["shake",shake],
	["nn",nn]
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
				'url': "../assets/"+projects[i][0]+"/"+projects[i][0]+".json",
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