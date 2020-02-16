var archiveItems = [
	
	shake,
	trends,
	tackl,
	sustain,
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
