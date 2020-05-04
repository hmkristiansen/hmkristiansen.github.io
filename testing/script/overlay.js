
$( "#work img" ).click(function() {
    $('#overlay').removeClass('hidden');
    $('#overlay').addClass('visible');
    $('body').addClass('noScroll');
	$('#work, header ,footer').addClass('blur');
	$('#close_btn').removeClass('hideCloseBtn');
    renderProject(this);
});

$( "#close_btn" ).click(function() {
    $('#overlay').addClass('hidden');
    $('#overlay').removeClass('visible');
    $('body').removeClass('noScroll');
    $('#work, header ,footer').removeClass('blur');
    setTimeout(function() {
		$('#close_btn').addClass('hideCloseBtn');
		document.getElementById("port_img").remove();	
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
	parentDiv.insertBefore(img, ref)

	$("#content h1").html(targetObj.h1);
	$("#content #client").html(targetObj.item_info.client);
	$("#content #role").html(targetObj.item_info.role);
	$("#content #period").html(targetObj.item_info.period);
	$("#content #cont_ing").html(targetObj.text.text0);
}