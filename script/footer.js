/*var btn = $('#up_button');

btn.on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop:0}, '300');
});
*/



function renderFooter(){

	var links = ["https://www.instagram.com/hmkristiansen/", "https://www.linkedin.com/in/hmkristiansen/", "mailto:hei@hinken.no"];
	var names = ["instagram", "linkedIn", "hei@hinken.no"]; 

	var footer = document.querySelector('footer');
	
	var list = document.createElement('ul');
	var listItems = [];
	
	for(var i = 0; i < links.length; i++){
		listItems[i] = document.createElement('li');
		
		var atag = document.createElement('a');
		atag.href = links[i];
		atag.target = "_blank";
		atag.innerText = names[i];
		
		listItems[i].appendChild(atag);
		
		list.appendChild(listItems[i]);
	}
	
	var paragraph = document.createElement('p');
	paragraph.innerHTML = "built by "+"<a href='about.html'>me</a><br>hosted on "+"<a href='https://github.com/henkrist/henkrist.github.io' target='_blank'>github pages</a>";
	
	footer.appendChild(list);
	footer.appendChild(paragraph);
}


var body = document.querySelector('body');
body.classList.remove('fade-out');