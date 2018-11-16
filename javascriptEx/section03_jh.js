// dom 구조 생성
var Bbody = document.body;

var Bdesc = document.createElement('h1');
Bbody.append(Bdesc);
Bdesc.textContent = '숫자 야구게임';

var Bform = document.createElement('form');
Bbody.append(Bform);

var Binput = document.createElement('input');
Bform.append(Binput);
Binput.setAttribute('type','number');
Binput.setAttribute('max','9999');
Binput.setAttribute('min','1000');
Binput.focus();

var Bbutton = document.createElement('button');
Bbutton.textContent = '확인';
Bform.append(Bbutton);

var Bround = document.createElement('h2');
Bbody.append(Bround);
Bround.textContent = '1회';

// 4개의 랜덤 숫자 배열
var BrandomNumber
var BrandomNumberArea

var setNumber = function(){
	BrandomNumber = [];
	BrandomNumberArea = [];
	for (i = 0; i < 9; i += 1){
		BrandomNumberArea.push(i + 1);
	}
	for (i = 0; i < 4; i +=1){
		BrandomNumber.push(
			BrandomNumberArea.splice(Math.floor(Math.random()*(9 - i)),1)[0]
		)
	}
}
setNumber();


var round = 1;

Bform.addEventListener('submit',function(e){
	e.preventDefault();

	var str = 0;
	var ball = 0;

	// 정답일때
	if(BrandomNumber.join('') === Binput.value){
		Bdesc.textContent = '홈런! 정답은 : ' + BrandomNumber.join('') + ' 였습니다.';
		Binput.value = '';
		setNumber();
	} 

	// 틀렷을때
	else {
		for(i = 0; i < 4; i += 1){
			if(BrandomNumber[i] === Number(Binput.value.slice(',')[i])){
				str += 1;
			} else if(BrandomNumber.indexOf(Number(Binput.value[i])) > -1){
				ball += 1;
			}
		}

		Bdesc.textContent = str + '스트라이크, ' + ball + '볼';

		if(round === 9){
			Bround.textContent = '야구 종료! 정답은 : ' + BrandomNumber.join('') + ' 였습니다.';
			Binput.value = '';
			round = 1;
			Bdesc.textContent ='삐이이익~!';
			setNumber();
		} else{
			round += 1;
			Bround.textContent = round +'회';
		}
	}

})


// console check
// console.log(BrandomNumber)


// to do 
var moreTodoList = document.createElement('ul');
Bbody.append(moreTodoList);
var z = 0;
while(z < 5){
	var moreTodo = document.createElement('li');
	moreTodo.className = 'mm0' + (z + 1);
	moreTodoList.append(moreTodo);
	z+=1
}

document.getElementsByClassName('mm01')[0].textContent = 
'중복숫자 불가하기';
document.getElementsByClassName('mm02')[0].textContent = 
' ';



