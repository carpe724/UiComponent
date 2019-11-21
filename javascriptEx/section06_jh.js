var computerTurn = ['가위','바위','보'];
var youserSelect = document.getElementsByClassName('buttonWrap')[0].childNodes
for(i=0;i<youserSelect.length;i+=1){
	youserSelect[i].addEventListener('click',function(e){
		stopFunction()
		var myChoice = e.target.textContent;
		var computerChoice = computerDiv.textContent;
		if(myChoice === computerChoice){
			result.textContent = '비겻습니다. 나 : '+ myChoice + ' 컴퓨터 : ' + computerChoice 
		}else if(
			myChoice == '가위' && computerChoice == '바위' ||
			myChoice == '바위' && computerChoice == '보' ||
			myChoice == '보' && computerChoice == '가위')
		{
			result.textContent = '졌습니다. 나 :'+ myChoice + ' 컴퓨터 : ' + computerChoice 
		}else if(
			myChoice == '가위' && computerChoice == '보' ||
			myChoice == '바위' && computerChoice == '가위' ||
			myChoice == '보' && computerChoice == '바위')
		{
			result.textContent = '이겼습니다. 나 :'+ myChoice + ' 컴퓨터 : ' + computerChoice 
		}
	})
};

var computerDiv = document.getElementById('computer');

var computerCount = 0;
var computerRandom	= setInterval(computerRandomFunction, 100)

function stopFunction(){
	clearInterval(computerRandom);
}

function computerRandomFunction (){
	computerDiv.textContent = computerTurn[computerCount]
	computerCount += 1;
	if(computerCount === 3){
		computerCount = 0
	}
}



var result = document.getElementById('result');

var reBtn = document.getElementById('re');
reBtn.addEventListener('click', function(){
	computerRandom	= setInterval(computerRandomFunction, 100)
})
