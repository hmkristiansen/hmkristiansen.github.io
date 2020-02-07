var archiveItems = [
	['trends','CTRL frame','Minimalistic spendings tracker for families'],
	['players','Lisbon Players','Re-designing a historic theatre&lsquos out']
	['boo','Boo','Pencil sharpener for kids'],
	['blackboard','BlackBoard 2.0','Redesigning our university learning platform'],
	['expo','Design Expo 2019','Web Design for student arranged event'],
	['proto','Dirigenten','Interactive conductor simulator'],
	['sportscenteret', 'Sportsenteret', 'Web re-design for my fathers company'],
	['lighting','Regi','Lighting design for local student society'],
	['spire','Spire','Coffee maker concept inspired by nordic design']		
];

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
			
			var atag = document.createElement('a');
			
			var img = document.createElement('img'); 
			var h1 = document.createElement('h1');
			var h3 = document.createElement('h3');
			
			img.src = "img/" + archiveItems[itemCounter][0] + "/" + archiveItems[itemCounter][0] + ".jpg";
			h1.innerText = archiveItems[itemCounter][2];
			h3.innerText = archiveItems[itemCounter][1];
			
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




/*function openProject(){	
	var queryString = "?project=" + selectedProject;
	//console.log(queryString);
	window.location.href = "project.html" + queryString;
}

$(document).ready(function(){

	$(".portItemTag").click(function() {
		selectedProject = $(this).attr('id');
		openProject();
	});

});
*/