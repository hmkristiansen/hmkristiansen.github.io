
$( "#work img" ).click(function() {

	if(currentBrowser == "firefox"){
		alert("I'm using an overlay to display the projects, and it is simply broken on Firefox 😔\nPlease try Safari, Opera or Chrome! 🥳");
		return;
	}
    $('#overlay').removeClass('hidden');
    $('#overlay').addClass('visible');
	$('body').addClass('noScroll');
	setTimeout(function() {
		$('section, header,footer').addClass('blur');
	}, 50);
	renderProject(this);
});

$( "#close_btn" ).click(function() {
    $('#overlay').addClass('hidden');
    $('#overlay').removeClass('visible');
    $('body').removeClass('noScroll');
    $('section, header ,footer').removeClass('blur');
    setTimeout(function() {
		$("#port_img").remove();
		$('.extraImage').remove();
		$('.extraVideo').remove();
		$('#content').removeClass('exp_overlay');
	}, 300);
});

$( "#exp_btn" ).click(function() {

	if( $('#content').hasClass('exp_overlay')){
		$('#content').removeClass('exp_overlay');
		$('#content').addClass('dexp_overlay');
		$("#exp_btn img").attr("src","assets/max.svg");
	}else{
		$('#content').removeClass('dexp_overlay');
		$('#content').addClass('exp_overlay');
		$("#exp_btn img").attr("src","assets/min.svg");
	}

	/*
    setTimeout(function() {
		$("#port_img").remove();
		$('.extraImage').remove();
	}, 300);*/
});

$('#overlay').on('click', function(e) {
	if (e.target !== this){
		return;
	}
    $('#overlay').addClass('hidden');
    $('#overlay').removeClass('visible');
    $('body').removeClass('noScroll');
    $('section, header ,footer').removeClass('blur');
    setTimeout(function() {
		$("#port_img").remove();
		$('.extraImage').remove();
		$('.extraVideo').remove();
	}, 300);
});

function renderProject(event){
    //console.log(event);
	let targetId = event.id;
	let targetObj;
	let currentIndex;	
	for(var i = 0; i<projects.length; i++){
		if(targetId == projects[i][0]){
			currentIndex = i;
			targetObj = projects[i][1];
		}
	}
	let img = images[currentIndex];
	let ref = document.getElementById("imageSelector");
	let parentDiv = ref.parentNode;
	parentDiv.insertBefore(img, ref);

	$("#content h1").html(targetObj.h1);
	$("#content #client").html(targetObj.item_info.client);
	$("#content #role").html(targetObj.item_info.role);
	$("#content #period").html(targetObj.item_info.period);
	$("#content #cont_ing").html(targetObj.text.text0);

	$currentImages = targetObj.images;
	for (var image in $currentImages) {
		if ($currentImages.hasOwnProperty(image)) {
			let img = document.createElement('img');
			img.className = "extraImage";
			img.src = $currentImages[image];

			var overlay = document.getElementById("extraImages");
			overlay.appendChild(img);
		}
	}

	$video = targetObj.video;
	for (var video in $video) {
		if ($video.hasOwnProperty(video)) {
			let vid = document.createElement('video');
			vid.className = "projectVideo";
			vid.src = $video[video];
			vid.type = "video/mp4";
			vid.className="extraVideo";
			//vid.width = "400";
			vid.controls = true;
			var overlay = document.getElementById("endVideo");
			overlay.appendChild(vid);
		}
	}
}