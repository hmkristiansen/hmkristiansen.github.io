/*var btn = $('#up_button');

btn.on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop:0}, '300');
});
*/



function renderFooter(){

	var links = ["https://www.instagram.com/hmkristiansen/", "https://www.linkedin.com/in/hmkristiansen/", "mailto:hinkendesign@gmail.com"];
	var names = ["instagram", "linkedIn", "contact"]; 

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
	paragraph.innerHTML = "Built by me using GitHub Pages and iPad Pro<br>Pages are using JavaScript for rendering the content (so please don't disable it 🥺";
	
	footer.appendChild(list);
	footer.appendChild(paragraph);
}
