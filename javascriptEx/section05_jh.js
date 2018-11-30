

// base
var number = [];
for(i=0;i<45;i+=1){
	number.push(i+1);
};
var randomNumber = [];
for(i=0;i<7;i+=1){
	randomNumber.push(
		number .splice(
			Math.floor(Math.random() * number.length)
		, 1)[0]
	)
};
var bonusNumber = randomNumber.splice(randomNumber.length - 1 , 1);
randomNumber.sort(function(a, b){
	return a - b;
});

// ballStyle
function ballStyle(thisBall, ballNumber){
	var ball = document.createElement('div');
	ball.style.display = 'inline-block';
	ball.style.width = '30px';
	ball.style.height = '30px';
	ball.style.lineHeight = '30px';
	ball.style.marginRight = '10px';
	ball.style.backgroundColor = '#ccc';
	ball.style.borderRadius = '50%';
	ball.style.textAlign = 'center';
	ball.textContent = ballNumber;

	if (ballNumber > 40) {
		ball.style.backgroundColor = 'green';
	}else if(ballNumber > 30){
		ball.style.backgroundColor = 'darkgreen';
	}else if(ballNumber > 20){
		ball.style.backgroundColor = 'chocolate';
	}else if(ballNumber > 10){
		ball.style.backgroundColor = 'blueviolet';
	}else{
		ball.style.backgroundColor = 'orange';
	}

	thisBall.append(ball)
}

// dom
var lottoBall = document.getElementById('결과창')
var bonusBall = document.getElementsByClassName('보너스')[0]

for(i=0; i < randomNumber.length; i+=1){
	ballStyle(lottoBall, randomNumber[i]);
}

ballStyle(bonusBall, bonusNumber[0]);	

// for(i=0; i < randomNumber.length; i+=1){
// 	(function(x){
// 		setTimeout(function(){
// 			ballStyle(lottoBall, randomNumber[x]);
// 		}, 500 * x)
// 	})(i);
// }
// setTimeout(function(){
// 	ballStyle(bonusBall, bonusNumber[0]);
// }, 500 * randomNumber.length)









console.log(randomNumber, bonusNumber);