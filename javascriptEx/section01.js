var 바디 = document.body;
var 단어 = document.createElement('div');
단어.textContent = '유재호';
바디.append(단어);

var 폼 = document.createElement('form');
바디.append(폼)

var 입력창 = document.createElement('input');
폼.append(입력창);
var 버튼 = document.createElement('button');
폼.append(버튼);
버튼.textContent = '입력!';

var 결과창 = document.createElement('div');
바디.append(결과창)



버튼.addEventListener('click',function 콜백함수 (이벤트){
	이벤트.preventDefault();
	if(단어.textContent[단어.textContent.length - 1] === 입력창.value[0]){
		결과창.textContent = '딩동댕';
		단어.textContent = 입력창.value;
		입력창.value = '';
		입력창.focus();
	}else{
		결과창.textContent = '땡';
		입력창.value = '';
		입력창.focus();
	}
});



// var 문제이자대답 = '유재호';
// var i = 0;
// while(i === 0){
// 	var 대답 = prompt(문제이자대답);
// 	if(문제이자대답[문제이자대답.length - 1] === 대답[0]){
// 		alert('정답');
// 		문제이자대답 = 대답;
// 	}else{
// 		alert('땡');
// 		i++;
// 	}
// }