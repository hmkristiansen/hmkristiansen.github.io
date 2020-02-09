var archiveItems = [
	
	dcd,
	players,
	alice,
	boo,
	blackboard,
	expo,
	proto,
	sportscenteret,
	lighting,
	spire

];

var selectedItem = "";

function renderArchive(){
	
	addGrid();

}

function addGrid(){

	var archiveSection = document.querySelector('.archive_content');
	
	var numRows = Math.ceil(archiveItems.length / 2);
	var itemCounter = 0;
	
	for(var i=0; i<numRows; i++){
	
		var row = document.createElement('div');
		row.className = "row";
		
		for(var j=0; j<2; j++){
		
			if(itemCounter == archiveItems.length){
				break;
			}
			
			var column = document.createElement('div');
			column.className = "column";
			//column.id = archiveItems[itemCounter][0];
			
			var atag = document.createElement('a');
			
			atag.id = archiveItems[itemCounter][0];
			atag.className = "portItemTag";
			atag.href = "project.html?project=" + atag.id;
					
			var img = document.createElement('img'); 
			var h1 = document.createElement('h1');
			var h3 = document.createElement('h3');
			
			img.src = "img/" + archiveItems[itemCounter][0] + "/" + archiveItems[itemCounter][0] + ".jpg";
			
			h1.innerHTML = archiveItems[itemCounter][2];
			h3.innerHTML = archiveItems[itemCounter][1];
			
			atag.appendChild(img);
			atag.appendChild(h1);
			atag.appendChild(h3);
			
			column.appendChild(atag);
			row.appendChild(column);
			
			itemCounter++;
		}
		archiveSection.appendChild(row);
	}
}

/*
function openProject(){	
	var queryString = "?project=" + selectedItem;
	window.location.href = "project.html" + queryString;
}

$(document).ready(function(){
	$(".column").click(function() {
		selectedItem = $(this).attr('id');
		openProject();
	});
});
*/

/*
var archiveItems = [
	['trends','CTRL frame','Minimal spendings tracker for families'],
	['players','Lisbon Players','Re-designing a historic theatre'+'&#39'+'s public outreach'],
	['alice','Alice in Wonderland','Telling a children'+'&#39'+'s story using type'],
	['boo','Boo','Pencil sharpener for kids'],
	['blackboard','BlackBoard 2.0','Making our university learning platform user-centric'],
	['expo','Design Expo 2019','Web Design for student arranged event'],
	['proto','Dirigenten','Interactive conductor simulator'],
	['sportscenteret', 'Sportsenteret', 'Web re-design for my fathers company'],
	['lighting','Regi','Lighting design for local student society'],
	['spire','Spire','Coffee maker concept inspired by nordic design']		
];*/
