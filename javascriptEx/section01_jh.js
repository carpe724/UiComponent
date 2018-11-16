// 끝말잇기 요소생성
var EWbody = document.body;

var EWword = document.createElement('div');
EWword.textContent = '제시어 투나잇';
EWbody.append(EWword);

var EWform = document.createElement('form');
EWbody.append(EWform);

var EWinput = document.createElement('input');
EWform.append(EWinput);
EWinput.focus();

var EWbutton = document.createElement('button');
EWbutton.textContent = '입력';
EWform.append(EWbutton);

var EWresult = document.createElement('div');
EWbody.append(EWresult);


EWbutton.addEventListener('click',function callbackFunction(e){
	e.preventDefault()
	if(EWword.textContent[EWword.textContent.length - 1] === EWinput.value[0]){
		EWword.textContent = EWinput.value;
		EWinput.value = '';
		EWinput.focus();
		if (EWresult.textContent === '' || EWresult.textContent === '땡') {
			EWresult.textContent = '히릿';
		} else if(EWresult.textContent === '히릿'){
			EWresult.textContent = '게로올라잇';	
		} else if(EWresult.textContent === '게로올라잇'){
			EWresult.textContent = '삐유삘롱나잇';
		} else if(EWresult.textContent === '삐유삘롱나잇'){
			EWresult.textContent = '히릿';
		}
	}
	else{
		EWinput.value = '';
		EWinput.focus();
		EWresult.textContent = '땡';
	}
});