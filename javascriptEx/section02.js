// 문제
var 숫자1 = Math.ceil(Math.random() * 9);
var 숫자2 = Math.ceil(Math.random() * 9);
var 결과 = 숫자1 * 숫자2;

// 문제제시
var 바디 = document.body;
var 단어 = document.createElement('div');
단어.textContent = String(숫자1) + ' * ' + String(숫자2) + ' 은(는)?';
document.body.append(단어);


// div 구조
var 폼 = document.createElement('form');
document.body.append(폼)
var 입력창 = document.createElement('input');
폼.append(입력창);
var 버튼 = document.createElement('button');
폼.append(버튼);
버튼.textContent = '입력!';
var 결과창 = document.createElement('div');
document.body.append(결과창)

// 버튼 구조
폼.addEventListener('submit',function 콜백함수 (이벤트){
	이벤트.preventDefault();
	if (결과 === Number(입력창.value)) {
		결과창.textContent = '딩';
		setTimeout(function(){
			결과창.textContent = '동';
		},250)
		setTimeout(function(){
			결과창.textContent = '댕';
		},500)
		숫자1 = Math.ceil(Math.random() * 9);
		숫자2 = Math.ceil(Math.random() * 9);
		결과 = 숫자1 * 숫자2;
		setTimeout(function(){
			결과창.textContent = '오케이 다음!';
			단어.textContent = String(숫자1) + ' * ' + String(숫자2) + ' 은(는)?';
			입력창.value = '';
			입력창.focus();
		}, 1000)
		setTimeout(function(){
			결과창.textContent = '';
		}, 1500)
		
	}else{
		결과창.textContent = '땡';	
		입력창.value = '';
		입력창.focus();
	}
});

