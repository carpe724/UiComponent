// 문제제시
var 바디 = document.body;
var 결과 = document.createElement('h1')
바디.append(결과);


// div 구조
var 폼 = document.createElement('form');
바디.append(폼)
var 입력창 = document.createElement('input');
입력창.maxLength = 4;
입력창.type = 'number';
폼.append(입력창);
var 버튼 = document.createElement('button');
폼.append(버튼);
버튼.textContent = '입력!';
var 결과창 = document.createElement('div');
바디.append(결과창)



// 랜덤한 숫자
var 숫자후보;
var 숫자배열;

function 숫자뽑기(){
	숫자후보 = [1,2,3,4,5,6,7,8,9];
	숫자배열 = [];
	for (var i = 0; i< 4; i += 1){
		var 뽑은것 = 숫자후보.splice(Math.floor(Math.random() * (9 - i)), 1)[0];
		숫자배열.push(뽑은것)
	}
}
 
console.log(숫자배열)







// 버튼 구조
var 틀린횟수 = 0;
폼.addEventListener('submit',function 콜백함수 (이벤트){
	이벤트.preventDefault();
	var 답 = 입력창.value;
	console.log(틀린횟수+1+'틀린횟수')
	if(답 === 숫자배열.join('')){ // 답이 맞으면
		결과.textContent = '홈런';
		입력창.value = '';
		입력창.focus();
		숫자뽑기();
		틀린횟수 = 0; 
	}else{ // 오답일경우
		var 답배열 = 답.split('');
		var 스트라이크 = 0;
		var 볼 = 0;
		틀린횟수 += 1;
		for (var i = 0; i < 4; i+=1) {
			if (Number(답배열[i]) === 숫자배열[i]){
				스트라이크 += 1;
			}else if(숫자배열.indexOf(Number(답배열[i])) > -1){
				볼 += 1;
			}
		}
		결과.textContent = 스트라이크 + '스트라이크' + 볼 + '볼입니다.';
		입력창.focus();

		// 오답 횟수 카운트
		if (틀린횟수 > 9) {
			결과.textContent = '10 틀려서 실패! 답은' + 숫자배열.join(',') + '였습니다!';
			입력창.value = '';
			입력창.focus();
			숫자뽑기()
			i = 0;
			틀린횟수 = 0;
		}else{

		}
	}
});

