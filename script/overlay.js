
$( "#work img" ).click(function() {
	
	/*
	if(currentBrowser == "firefox" || currentBrowser == "chrome"){
		alert("I'm using an overlay to display the projects, and it is simply broken when using Firefox and Google Chrome 😔\nI'm working on a fix, but in the meanwhile please try Safari, Opera or Microsoft Edge! 🥳");
		return;
	}*/

    $('#overlay').removeClass('hidden');
    $('#overlay').addClass('visible');
	$('body').addClass('noScroll');
	setTimeout(function() {
		$('section, header,footer').addClass('blur');
	}, 50);
	renderProject(this);

});

$( "#close_btn" ).click(function() {
	closeOverlay();
});

$('#overlay').on('click', function(e) {
	if (e.target !== this){
		return;
	}else{
		closeOverlay();
	}
});

function closeOverlay(){
	$('#overlay').addClass('hidden');
    $('#overlay').removeClass('visible');
    $('body').removeClass('noScroll');
    $('section, header ,footer').removeClass('blur');
    setTimeout(function() {
		$("#port_img").remove();
		$('.contentQuote').remove();
		$('.contentText').remove();
		$('.contentHr').remove();
		$('.contentCaption').remove();
		$('.contentHeader').remove();
		$('.contentImage').remove();
		$('.contentVideo').remove();
		$('#more_link').remove();
	}, 300);
}

$( "#exp_btn" ).click(function() {
	if( $('#content').hasClass('exp_overlay')){
		$('#content').removeClass('exp_overlay');
		$('#content').addClass('dexp_overlay');
		$("#exp_btn img").attr("src","assets/svg/max.svg");
	}else{
		$('#content').removeClass('dexp_overlay');
		$('#content').addClass('exp_overlay');
		$("#exp_btn img").attr("src","assets/svg/min.svg");
	}
});

function renderProject(event){
	let targetId = event.id;
	let targetObj;
	let currentIndex;	
	for(var i = 0; i<projects.length; i++){
		if(targetId == projects[i][0]){
			currentIndex = i;
			targetObj = projects[i][1];
		} 
	}

	var img = event.cloneNode(true);
	img.id="port_img";
	let ref = document.getElementById("imageSelector");
	let parentDiv = ref.parentNode;
	parentDiv.insertBefore(img, ref);

	$("#content h1").html(targetObj.h1);
	$("#content #client").html(targetObj.item_info.client);
	$("#content #role").html(targetObj.item_info.role);
	$("#content #period").html(targetObj.item_info.period);


	$currentContent = targetObj.content;
	let parent = document.getElementById("parentNode");

	for(var item in $currentContent){
		if ($currentContent.hasOwnProperty(item)) {
			if(item[0] == "t"){
				let p = document.createElement('p');
				p.className="contentText";
				p.innerHTML = $currentContent[item];
				parent.appendChild(p);
			}else if(item[0] == "i"){
				let img = document.createElement('img');
				img.className = "contentImage";
				img.src =$currentContent[item];
				parent.appendChild(img);
			}else if(item[0] =="v"){
				let vid = document.createElement('video');
				vid.className = "projectVideo";
				vid.poster = $currentContent[item].poster;
				vid.src = $currentContent[item].video;
				vid.type = "video/mp4";
				vid.className="contentVideo";
				vid.controls = true;
				parent.appendChild(vid);
			}else if(item[0]+item[1] == "h2"){
				let h2 = document.createElement('h2');
				h2.className="contentHeader";
				h2.innerHTML = $currentContent[item];
				parent.appendChild(h2);
			}else if(item[0] == "q"){
				let h3 = document.createElement('h3');
				h3.className="contentQuote";
				h3.innerHTML = $currentContent[item];
				parent.appendChild(h3);
			}else if(item[0] == "c"){
				let p = document.createElement('p');
				p.className="contentCaption";
				p.innerHTML = $currentContent[item];
				parent.appendChild(p);

				/*
				let hr = document.createElement('hr');
				hr.className = "contentHr";
				parent.appendChild(hr);
				*/
			}
		}
	}

	let bottomBtn = document.createElement('div');
	bottomBtn.id = "more_link";
	let bottomLink = document.createElement('a');
	bottomLink.id="notion_link";
	bottomLink.innerHTML = "Back";
	bottomBtn.appendChild(bottomLink);
	parent.appendChild(bottomBtn);

	$('#notion_link').removeAttr('onclick');
	$('#notion_link').attr('onClick', 'closeOverlay();');
}