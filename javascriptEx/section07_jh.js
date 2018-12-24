var dataset = [];
var exec = document.getElementById('exec');
var table = document.getElementById('table');
var hor = document.getElementById('hor');
var ver = document.getElementById('ver');
var mine = document.getElementById('mine');
var result = document.getElementById('result');
var openCount = 0;
var flag = false;
var onceFlag = true;
var flagCount = 0;

// 초기화
function reset(){
	dataset = [];
	table.innerHTML = '';
	openCount = 0;
	result.textContent = '';
	flag = false;
	onceFlag = true;
	flagCount = 0;
}

exec.addEventListener('click',function(){
	reset();
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
					if(dataset[targetTr][targetTd] !== 2){
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
						table.children[targetTr].children[targetTd].textContent = '';
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
						wrapTdRe.filter(function(v){
							return !!v;
						}).forEach(function(each){
							var eachTd = each.cellIndex;
							var eachTr = each.parentNode.rowIndex;
							if(dataset[eachTr][eachTd] === 1){
								each.click();
							}
						})
					}else{
						table.children[targetTr].children[targetTd].textContent = wrapTdCount;
					}


					// 클리어 조건
					if(openCount === tableHorValue * tableVerValue - mine.value && flagCount == mine.value)
					{
						result.textContent = '지뢰찾기 클리어!';
					}
				}
				
			});

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
	

	// 지뢰 만들기
	var boom = [];
	var boomArray = new Array(tableHorValue * tableVerValue).fill().map(function(x,index){
		return index;
	})
	for(i=0;i<mine.value;i+=1){
		boom = boom.concat(boomArray.splice(Math.floor(Math.random() * boomArray.length - i),1))
		var boomHor = Math.floor(boom[i] / tableHorValue); 
		var boomVer = boom[i] % tableHorValue;
		dataset[boomHor][boomVer] = 'X';
	}

})

exec.click();
