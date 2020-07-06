function checkIfDarkmode(){
	if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
		document.getElementById('page').setAttribute("class", "darkmode");
		radios[1].checked = true;
		//document.getElementById('darkmode').classList.add("currentTheme");
	}
}

function changeTheme(theme){

	if(theme == 0){
		$('#page').removeClass('darkmode');
		$('#page').removeClass('terribleMode');
	}else if(theme == 1){
		$('#page').addClass('darkmode');
		$('#page').removeClass('terribleMode');
	}else if(theme == 2){
		$('#page').addClass('terribleMode');
		$('#page').removeClass('darkmode');
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