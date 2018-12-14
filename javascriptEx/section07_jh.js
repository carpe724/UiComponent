var dataset = [];
var exec = document.getElementById('exec');
var table = document.getElementById('table');
var hor = document.getElementById('hor');
var ver = document.getElementById('ver');
var mine = document.getElementById('mine');

exec.addEventListener('click',function(){
	dataset = [];
	table.innerHTML = '';
	var tableHorValue = hor.value;
	var tableVerValue = ver.value;

	
	// 테이블 생성
	for (i=0;i<tableVerValue;i+=1){
		var tableTr = document.createElement('tr');
		table.append(tableTr);
		dataset.push([]);	
		for(j=0;j<tableHorValue;j+=1){
			var tableTd = document.createElement('td');
			tableTr.appendChild(tableTd);
			dataset[i].push(1);

			// 칸마다 이벤트 생성 (좌클릭, 우클릭)
			// 1. 좌클릭
			tableTd.addEventListener('click', function(e){
				var targetTr = e.currentTarget.parentNode.rowIndex;
				var targetTd = e.currentTarget.cellIndex;

				e.currentTarget.classList.add('opened')

				if(dataset[targetTr][targetTd] === 'X'){
					table.children[targetTr].children[targetTd].textContent = '펑';
				}else{
					var wrapTd = [
						dataset[targetTr][targetTd - 1], dataset[targetTr][targetTd + 1]
					]
					if(dataset[targetTr - 1]){
						wrapTd = wrapTd.concat(dataset[targetTr - 1][targetTd - 1], dataset[targetTr - 1][targetTd], dataset[targetTr - 1][targetTd + 1])
					}
					if(dataset[targetTr + 1]){
						wrapTd = wrapTd.concat(dataset[targetTr + 1][targetTd - 1], dataset[targetTr + 1][targetTd], dataset[targetTr + 1][targetTd + 1])
					}
					var wrapTdCount = wrapTd.filter(function(non){
						if(non === 'X'){
							return true;
						}else{
							return;
						}
					}).length
					if(wrapTdCount === 0){
						table.children[targetTr].children[targetTd].textContent = '';
					}else{
						table.children[targetTr].children[targetTd].textContent = wrapTdCount;
					}
				}
			})
		}
	}
	

	// 지뢰 만들기
	// 1. 후보군 숫자 배열에 담기
	var boom = [];
	var boomRandom = new Array(tableHorValue * tableVerValue).fill().map(function(x,index){
		return index;
	})
	for(i=0;i<mine.value;i+=1){
		boom = boom.concat(boomRandom.splice(Math.floor(Math.random() * boomRandom.length - i),1))
		var boomHor = Math.floor(boom[i] / 10); 
		var boomVer = boom[i] % 10;
		dataset[boomHor][boomVer] = 'X';
		table.children[boomHor].children[boomVer].textContent = 'X';
	}

	console.log(boom)

	console.log(dataset)


})