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

		let workItem = document.createElement('div');
		workItem.classList += "workItem";

		let img = images[i];
		img.id = projects[i][0];
		workItem.appendChild(img);

		let h1 = document.createElement('h1');
		h1.innerHTML = projects[i][1].h1;
		workItem.appendChild(h1);

		workContainer.appendChild(workItem);

	}



	/*
	let row = document.createElement('div');
	row.className = "row";

	var projectCounter = 0;

	for (var i = 0; i<2; i++){
		let column = document.createElement('div');
		column.className = "column";
		for(var j = 0; j<(Math.ceil(projects.length/2)); j++){

			let img = images[projectCounter];
			img.id = projects[projectCounter][0];
			img.style.width = "100%";

			column.appendChild(img);

			if(projectCounter<projects.length-1){
				projectCounter++;
			}else{
				break;
			}
		}
		row.appendChild(column);
	}
	workContainer.appendChild(row);

	*/
}



