
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
	paragraph.innerHTML = "<br>"+"<a href='https://github.com/henkrist/henkrist.github.io' target='_blank'>hosted on github pages</a><br>"+"<a href='https://forms.gle/R1CpqJjBmg6Ls1Rq6' target='_blank'>site feedback survey</a>";
	
	footer.appendChild(list);
	footer.appendChild(paragraph);
}


var body = document.querySelector('body');
body.classList.remove('fade-out');