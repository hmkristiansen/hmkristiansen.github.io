
var projects = [
	["shake",shake],
	["ctrl",ctrl],
	["nn",nn],
    ["pb",pb],
	["bb",bb],
	["boo",boo],
	["ss",ss]
];

var images=[];


getProjects();
preload();

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
}

function preload(){
	for(var i=0; i<projects.length; i++){
		preloadImage(projects[i][1].header_img);
	}
}
function preloadImage(url){
    var img = new Image();
    img.src = url;
    img.id = "port_img";
    images.push(img);
}


