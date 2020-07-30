function checkIfDarkmode(){
	if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
		document.getElementById('page').setAttribute("class", "darkmode");
		//radios[1].checked = true;
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