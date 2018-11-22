// target.parentNode


// dom
var body = document.body;
var result = document.createElement('div');
body.append(result);
var table = document.createElement('table');
body.append(table);

// base
var lines = [];
var cells = [];
var turn = 'X';


// game
function game (e){
	// 몇번째인지
	var countLine = lines.indexOf(e.target.parentNode);
	var countCell = cells[countLine].indexOf(e.target);
	console.log()

}


// board setting
for(i = 0; i < 3; i++){
	var lineObject = document.createElement('tr');
	lines.push(lineObject);
	cells.push([]);
	table.append(lineObject);
	for(j=0; j < 3; j++){
		var cellObject = document.createElement('td');
		cells[i].push(cellObject);
		lineObject.append(cellObject);
		cellObject.addEventListener('click', game )
	}
}

console.log(cells)