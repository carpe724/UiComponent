// target.parentNode


// dom
var body = document.body;
var result = document.createElement('div');
result.className = 'result';
body.append(result);
result.textContent = '틱텍토';
var table = document.createElement('table');
body.append(table);

// base
var lines = [];
var cells = [];
var turn = 'X';
var count = 0;


// game
function game (e){

	// 몇번째인지
	var countLine = lines.indexOf(e.target.parentNode);
	var countCell = cells[countLine].indexOf(e.target);

	if (e.target.textContent !== ''){
		return;
	}else{

		e.target.textContent = turn;
		var complite = false;

		// 가로줄완성
		if(
			cells[countLine][0].textContent === turn &&
			cells[countLine][1].textContent === turn &&
			cells[countLine][2].textContent === turn
		){
			complite = true;
		}
		// 세로줄완성
		if(
			cells[0][countCell].textContent === turn &&
			cells[1][countCell].textContent === turn &&
			cells[2][countCell].textContent === turn
		){
			complite = true;
		}

		// 대각선완성
		if(
			cells[0][0].textContent === turn &&
			cells[1][1].textContent === turn &&
			cells[2][2].textContent === turn
		){
			complite = true;
		}

		// 대각선완성
		if(
			cells[2][0].textContent === turn &&
			cells[1][1].textContent === turn &&
			cells[0][2].textContent === turn
		){
			complite = true;
		}


		if (complite) {
			result.textContent = turn + ' 턴 승리';
			reset();
		}

		// 턴돌리는거
		if (turn === 'X') {
			turn = 'O';
		}else{
			turn = 'X';
		}
		// 만땅찻을때
		count += 1
		if (count === 9 && complite !== true){
			result.textContent = '다시해바아';
			reset();
		}
		console.log(count)
	}
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


function reset (){
	setTimeout(function(){
		count = 0;
		turn = 'X';
		result.textContent = '';

		// document.querySelectorAll('td').forEach(
		// 	function(tds){
		// 		tds.textContent = '';
		// 	}
		// );

		cells.forEach(function(outDepth){
			outDepth.forEach(function(inDepth){
				inDepth.textContent = '';
			})
		})
		
	}, 1000);
}

