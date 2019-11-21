var 바디 = document.body;
var 테이블 = document.createElement('table');
var 줄들 = [];
var 칸들 = [];
var 턴 = 'X';
var 결과 = document.createElement('div');



var 비동기콜백 = function(이벤트) {
	var 몇줄 = 줄들.indexOf(이벤트.target.parentNode);
	var 몇칸 = 칸들[몇줄].indexOf(이벤트.target);

	if(칸들[몇줄][몇칸].textContent !== ''){//칸이 이미 채워져 있는가?

	}else{ // 빈칸이면
		칸들[몇줄][몇칸].textContent = 턴;

		// 세칸 다 채워졌는가?
		var 다참 = false;
		// 가로줄 검사
		if(
			칸들[몇줄][0].textContent === 턴 && 
			칸들[몇줄][1].textContent === 턴 && 
			칸들[몇줄][2].textContent === 턴
		){
			다참 = true;
		}
		// 세로줄 검사
		if(
			칸들[0][몇칸].textContent === 턴 && 
			칸들[1][몇칸].textContent === 턴 && 
			칸들[2][몇칸].textContent === 턴
		){
			다참 = true;
		}
		// 대각선 검사
		if(몇줄 - 몇칸 === 0){
			if(
				칸들[0][0].textContent === 턴 && 
				칸들[1][1].textContent === 턴 && 
				칸들[2][2].textContent === 턴
			){
				다참 = true;
			}
		}
		// 대각선 검사
		if(Math.abs(몇줄 + 몇칸) === 2){
			if(
				칸들[0][2].textContent === 턴 && 
				칸들[1][1].textContent === 턴 && 
				칸들[2][0].textContent === 턴
			){
				다참 = true;
			}
		}
		// 다 찼으면
		if (다참) {
			결과.textContent = 턴 + '님이 승리';
			//초기화
			턴 = 'X';
			칸들.forEach(function(줄){
				줄.forEach(function(칸){
					칸.textContent = '';
				});
			});
		} else{ // 다안찼으
			if (턴 === 'X'){
				턴 = 'O';
			}else{
				턴 = 'X';
			}
		}
	}
}




for(var i=1; i <= 3; i += 1){
	var 줄 = document.createElement('tr');
	줄들.push(줄);
	칸들.push([]);
	for(var j=1; j <= 3; j += 1){
		var 칸 = document.createElement('td');
		칸들[i - 1].push(칸);
		줄.append(칸);
		칸.addEventListener('click',function(){
			console.log('gd')
		});
	}
	테이블.append(줄)
}
console.log(칸)
바디.append(테이블);
바디.append(결과);


console.log(칸들,줄들)