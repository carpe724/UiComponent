// 랜덤숫자 뽑기
var randomNumber01
var randomNumber02
var Qresult

var QuestionNumber = function(){
	randomNumber01 = Math.floor((Math.random() * 9) + 1);
	randomNumber02 = Math.floor((Math.random() * 9) + 1);
	Qresult = randomNumber01 * randomNumber02;
};
QuestionNumber();

var Qreset = function(){
	Qdesc.textContent = '';
	Qinput.value = '';
	Qinput.focus();
};

// html 만들기
var Qbody = document.body;

var Qtext = document.createElement('div');
Qtext.textContent = randomNumber01 + " * " + randomNumber02 + '는?';
Qbody.append(Qtext);

var Qform = document.createElement('form');
Qbody.append(Qform);

var Qinput = document.createElement('input');
Qform.append(Qinput);
Qinput.focus();

var Qbutton = document.createElement('button');
Qbutton.textContent = '확인';
Qform.append(Qbutton);

var Qdesc = document.createElement('div');
Qbody.append(Qdesc);

// 큺릭시(엔터시) 함수 실행
Qbutton.addEventListener('click',function (e){
	e.preventDefault()
	if(Qresult === Number(Qinput.value)){
		Qdesc.textContent = '정답입니다.';
		setTimeout(function(){
			Qreset();
			QuestionNumber();
			Qtext.textContent = randomNumber01 + " * " + randomNumber02 + '는?';
		},500)
	}else{
		Qinput.value = '';
		Qdesc.textContent = '틀렷습니다.';
		setTimeout(function(){
			Qreset();
		},500)
	}

})