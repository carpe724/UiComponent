const eggSizeBtn = document.querySelector('#eggSizeChange');
const eggTemperatureBtn = document.querySelector('#eggTemperatureChange');
const eggCounterTimer = document.querySelector('#eggCounterTimer');
const eggCounterPlayBtn = document.querySelector('#eggCounterPlayBtn');

const eggSize = ['대란', '특란', '왕란'];
const eggTemperature = ['실온', '냉장고'];
const timeArray = [
    [(1000 * 60 * 3) + (10000 * 4), (1000 * 60 * 4) + (10000 * 4), (1000 * 60 * 8) + (10000 * 4)],
    [(1000 * 60 * 4) + (10000 * 1), (1000 * 60 * 5) + (10000 * 1), (1000 * 60 * 9) + (10000 * 3)],
    [(1000 * 60 * 4) + (10000 * 3), (1000 * 60 * 5) + (10000 * 4), (1000 * 60 * 10) + (10000 * 2)]
]
let timeArrayX = 0; //계란 사이즈변경
let timeArrayY = 0; //계란 굽기변경

// 계란 굽기 (반숙, 중숙, 완숙)
$('.EggTimerSlider').slick({
    dots: false,
    arrows: false,
    infinite: false
});

$('.EggTimerSlider').on('afterChange', function(event, slick, currentSlide, nextSlide){
    if(timeArrayY !== currentSlide){
        timeArrayY = currentSlide;
        changeNumber(timeArray[timeArrayX][timeArrayY]);
    }
});

// 계란 사이즈, 보관온도 변경
eggSizeBtn.children[1].innerText = eggSize[0];
eggTemperatureBtn.children[1].innerText = eggTemperature[0];

eggSizeBtn.addEventListener('click', changeEggSize);
eggTemperatureBtn.addEventListener('click', changeTemperature);

function changeEggSize(){
    eggSize.push(eggSize[0]);
    eggSize.splice(0,1);
    this.children[1].innerText = eggSize[0];
    if(timeArrayX < timeArray.length - 1){
        timeArrayX++
    }else{
        timeArrayX = 0;
    }
    changeNumber(timeArray[timeArrayX][timeArrayY]);
}

let temperatureStep = false;
function changeTemperature(){
    if(temperatureStep){
        this.children[1].innerText = eggTemperature[0];
        temperatureStep = false;

        for(let i = 0; i < timeArray.length; i++){
            for(let j = 0; j < timeArray[i].length; j++){
                if(i === 0){
                    timeArray[0][j] = timeArray[0][j] - 60000;
                }else{
                    timeArray[i][j] = timeArray[i][j] - 70000;
                }
            }
        }
        changeNumber(timeArray[timeArrayX][timeArrayY]);
    } 
    else{
        this.children[1].innerText = eggTemperature[1];
        temperatureStep = true;

        for(let i = 0; i < timeArray.length; i++){
            for(let j = 0; j < timeArray[i].length; j++){
                if(i === 0){
                    timeArray[0][j] = timeArray[0][j] + 60000;
                }else{
                    timeArray[i][j] = timeArray[i][j] + 70000;
                }
            }
        }
        changeNumber(timeArray[timeArrayX][timeArrayY]);
    }
}

let prevNumber = timeArray[timeArrayX][timeArrayY];
function changeNumber(number){
    let timerUnit = function(unitTime){
        return (unitTime < 10) ? `0${unitTime}` : unitTime; 
    }
    let tobeNumber = number;
    let standNumber = tobeNumber - prevNumber;

    if(standNumber > 0){
        increaseNumber();
    }else if(standNumber < 0){
        decreaseNumber();
    }else{
        timeFnc(number);
    }

    function timeFnc(number){
        let time = new Date(number);
        let timeMin = time.getUTCMinutes();
        let timeSec = time.getUTCSeconds();
        eggCounterTimer.innerHTML = (timeMin) ? `${timerUnit(timeMin)}:${timerUnit(timeSec)}` : `00:${timerUnit(timeSec)}`;
    }

    function increaseNumber(){
        if(prevNumber < tobeNumber){
            prevNumber = prevNumber + (standNumber/10/2);
            timeFnc(prevNumber);
            setTimeout(increaseNumber, 10)
        }else{
            prevNumber = number;
        }
    }

    function decreaseNumber(){
        if(prevNumber > tobeNumber){
            prevNumber = prevNumber + (standNumber/10/2);
            timeFnc(prevNumber);
            setTimeout(decreaseNumber, 10)
        }else{
            prevNumber = number;
        }
    }
}
changeNumber(timeArray[timeArrayX][timeArrayY])

// 시계
eggCounterPlayBtn.addEventListener('click', eggCounterPlay);

let eggSetTimer;
let timerToggle = true;

function eggCounterPlay(){
    if(timerToggle){
        countTimer(timeArray[timeArrayX][timeArrayY]);
        eggCounterPlayBtn.classList.add('pause');
        timerToggle = false;
    }else{
        clearTimeout(eggSetTimer);
        changeNumber(timeArray[timeArrayX][timeArrayY]);
        locking(false);
        eggCounterPlayBtn.classList.remove('pause');
        timerToggle = true;
    }
}

const countTimer = function(time){
    locking(true);
    let distanceTime = (+new Date) + time + 500;
    let timerUnit = function(unitTime){
        return (unitTime < 10) ? `0${unitTime}` : unitTime; 
    }
    let timerRepeat = function(){
        let leftTime = distanceTime - (+new Date);
        if(leftTime < 0){
            alert('완료');
            locking(false);
            changeNumber(timeArray[timeArrayX][timeArrayY]);
            eggCounterPlayBtn.classList.remove('pause');
            timerToggle = true;
        }else{
            let time = new Date(leftTime);
            let timeMin = time.getUTCMinutes();
            let timeSec = time.getUTCSeconds();
            eggCounterTimer.innerHTML = (timeMin) ? `${timerUnit(timeMin)}:${timerUnit(timeSec)}` : `00:${timerUnit(timeSec)}`;
            eggSetTimer = setTimeout(timerRepeat, time.getUTCMilliseconds() + 500);
        }
    }
    timerRepeat()
}

// 락기능
function locking(lock){
    if(lock){
        document.querySelector('.EggTimerCountrol').style.pointerEvents = 'none';
    }else{
        document.querySelector('.EggTimerCountrol').style.pointerEvents = 'auto';
    }
}