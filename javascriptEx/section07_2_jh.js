var dataset = [];
var exec = document.getElementById('exec');
var table = document.getElementById('table');
var hor = document.getElementById('hor');
var ver = document.getElementById('ver');
var mine = document.getElementById('mine');
var result = document.getElementById('result');
var tableHorValue;
var tableVerValue;
var openCount = 0;
var flag = false;
var onceFlag = true;
var flagCount = 0;
var boom;
var boomArray;
var tableTr;
var tableTd;

// 데이터셋
function makeDataset () {
	for(i=0;i<tableVerValue;i++){
		dataset[i] = new Array();
		for(j=0;j<tableHorValue ;j++){
			dataset[i][j] = 1;
		}
	}
}

// 초기화
function reset(){
	table.innerHTML = '';
	openCount = 0;
	result.textContent = '';
	flag = false;
	onceFlag = true;
	flagCount = 0;
	tableHorValue = hor.value;
	tableVerValue = ver.value;
	dataset = [];
	makeDataset();
}
// Pollyfill
function travelEmptyCells(dataset, i, j, visited) {
	if (i < 0 || i >= tableVerValue) return;
	if (j < 0 || j >= tableHorValue) return;
	if (visited[i + "," + j] || dataset[i][j] !== 1) {
		return;
	}
	visited[i + "," + j] = true; // I have visited i, j  !!!
	// up
	travelEmptyCells(dataset, i - 1, j, visited);
	travelEmptyCells(dataset, i + 1, j, visited);
	travelEmptyCells(dataset, i, j - 1, visited);
	travelEmptyCells(dataset, i, j + 1, visited);
	console.log("Travelled to " + i  + ", " + j);
}

// 지뢰 만들기
function makeMine(){
	boom = [];
	boomArray = new Array(tableHorValue * tableVerValue).fill().map(function(x,index){
		return index;
	})
	for(i=0;i<mine.value;i+=1){
		boom = boom.concat(boomArray.splice(Math.floor(Math.random() * boomArray.length - i),1))
		var boomHor = Math.floor(boom[i] / tableHorValue); 
		var boomVer = boom[i] % tableHorValue;
		dataset[boomHor][boomVer] = 'X';
	}
}

function leftClick(e){
	if(flag){
		return
	}

	e.currentTarget.classList.add('opened');
	var targetTr = e.currentTarget.parentNode.rowIndex;
	var targetTd = e.currentTarget.cellIndex;	

	if(onceFlag){
		var excludeNumber = targetTr * tableHorValue + targetTd;

		if(boom.indexOf(excludeNumber) !== -1){
			dataset[targetTr][targetTd] = 2;

			// 기존 폭탄들중 선택한 폭탄을 제외한다
			boom.splice(boom.indexOf(excludeNumber),1);
				
			// 2 : 폭탄에 넣는다.
			boom = boom.concat(
				// 1 : 폭탄이 아닌 남은 숫자들중에서 하나를 랜덤으로 골라 
				boomArray.splice(Math.floor(Math.random() * boomArray.length),1)
			)

			// 데이터에 해당내용을 업데이트.
			var boomAddHor = Math.floor((boom[boom.length - 1]) / tableHorValue); 
			var boomAddVer = (boom[boom.length - 1]) % tableHorValue;
			dataset[boomAddHor][boomAddVer] = 'X';

		}
		onceFlag = false;
		
	}
	
	if(dataset[targetTr][targetTd] === 'X'){
		result.textContent = '펑! 실패';
		e.currentTarget.classList.replace('opened','over')
		for(i=0;i<mine.value;i+=1){
			var boomHor = Math.floor(boom[i] / tableHorValue); 
			var boomVer = boom[i] % tableHorValue;
			table.children[boomHor].children[boomVer].classList.add('over');
		}
		flag = true;
	}else{
		// 1. dataset 에서 1(클릭이 안된상태)인지 체크 = > 아니라면 내 데이터셋 2(클릭이된)로변경
		if(dataset[targetTr][targetTd] == 1){
			openCount++ ;
		}		
		dataset[targetTr][targetTd] = 2;

		// 주변 폭탄 갯수파악
		var wrapTd = [
			dataset[targetTr][targetTd - 1], 
			dataset[targetTr][targetTd + 1]
		]
		if(dataset[targetTr - 1]){
			wrapTd = wrapTd.concat(
				dataset[targetTr - 1][targetTd - 1], 
				dataset[targetTr - 1][targetTd], 
				dataset[targetTr - 1][targetTd + 1]
			)
		}
		if(dataset[targetTr + 1]){
			wrapTd = wrapTd.concat(
				dataset[targetTr + 1][targetTd - 1], 
				dataset[targetTr + 1][targetTd], 
				dataset[targetTr + 1][targetTd + 1]
			)
		}
		var wrapTdCount = wrapTd.filter(function(non){
			if(non === 'X'){
				return true;
			}else{
				return;
			}
		}).length

		if(wrapTdCount === 0){

			// ============================================================ //

			table.children[targetTr].children[targetTd].textContent = '';

			// ============================================================ //

			var wrapTdRe = [];
			if(dataset[targetTr - 1]){
				wrapTdRe = wrapTdRe.concat(
					table.children[targetTr - 1].children[targetTd - 1],
					table.children[targetTr - 1].children[targetTd],
					table.children[targetTr - 1].children[targetTd + 1]
				)
			};
			if(dataset[targetTr + 1]){
				wrapTdRe = wrapTdRe.concat(
					table.children[targetTr + 1].children[targetTd - 1],
					table.children[targetTr + 1].children[targetTd],
					table.children[targetTr + 1].children[targetTd + 1]
				)
			};
			wrapTdRe = wrapTdRe.concat(
				table.children[targetTr].children[targetTd - 1],
				table.children[targetTr].children[targetTd + 1]
			)

			// ============================================================ //

			wrapTdRe.filter(function(v){
				return !!v;
			}).forEach(function(each){
				var eachTd = each.cellIndex;
				var eachTr = each.parentNode.rowIndex;
				if(dataset[eachTr][eachTd] === 1) {
					// flood fill algorithm
					debugger;
					let visited = {};
					travelEmptyCells(dataset, eachTr - 1, eachTd, visited);
					travelEmptyCells(dataset, eachTr + 1, eachTd, visited);
					travelEmptyCells(dataset, eachTr, eachTd - 1, visited);
					travelEmptyCells(dataset, eachTr, eachTd + 1, visited);
					// console.log('each')
				}
			})

			// ============================================================ //

		}else{
			table.children[targetTr].children[targetTd].textContent = wrapTdCount;
		}


		// 클리어 조건
		if(openCount === tableHorValue * tableVerValue - mine.value && flagCount == mine.value){
			result.textContent = '지뢰찾기 클리어!';
		}
	}
	
}

// 테이블 생성
function makeTable(){
	for (i=0;i<tableVerValue;i+=1){
		tableTr = document.createElement('tr');
		table.append(tableTr);
		for(j=0;j<tableHorValue;j+=1){
			tableTd = document.createElement('td');
			tableTr.appendChild(tableTd);


			// 칸마다 이벤트 생성 (좌클릭, 우클릭)
			// 1. 좌클릭
			tableTd.addEventListener('click', leftClick);

			// 2. 우클릭
			tableTd.addEventListener('contextmenu', function(e){
				e.preventDefault();
				if(flag){
					return
				}
				var targetTr = e.currentTarget.parentNode.rowIndex;
				var targetTd = e.currentTarget.cellIndex;
				var rightClickTd = table.children[targetTr].children[targetTd];
				if(!rightClickTd.classList.contains('opened')){
					if(e.currentTarget.classList.contains('flagCheck')){
						rightClickTd.classList.replace('flagCheck','questionCheck');
						flagCount --;
					}else if (e.currentTarget.classList.contains('questionCheck')) {
						rightClickTd.classList.remove('questionCheck');
					}else if(!e.currentTarget.classList.contains('flagCheck')){
						rightClickTd.classList.add('flagCheck');
						flagCount ++;
					}
				}

				// 클리어 조건
				if( openCount === tableHorValue * tableVerValue - mine.value && flagCount == mine.value )
				{
					result.textContent = '지뢰찾기 클리어!';
				}
			})
		}
	}
}

exec.addEventListener('click',function(){
	reset();
	makeMine();
	makeTable();
	
})

exec.click();


