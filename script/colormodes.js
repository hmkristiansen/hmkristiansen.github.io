function checkIfDarkmode(){
	if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
		document.getElementById('page').setAttribute("class", "darkmode");
		//document.getElementById('darkmode').classList.add("currentTheme");
	}
}

/*
function changeTheme(){
	var target = event.target || event.srcElement;
	var id = target.id;

	document.getElementById('page').setAttribute("class", "");
	document.getElementById('page').setAttribute("class", id);

	document.getElementById('goLight').classList.remove("currentTheme");
	document.getElementById('goGray').classList.remove("currentTheme");
	document.getElementById('goDark').classList.remove("currentTheme");
	document.getElementById('goContrast').classList.remove("currentTheme");
	
	document.getElementById(id).setAttribute("class", "currentTheme");
}	
*/