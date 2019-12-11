$('.EggTimerSlider').slick({
    dots: false,
    arrows: false,
    infinite: false
});

let eggSizeBtn = document.querySelector('#eggSizeChange');
let eggTemperatureBtn = document.querySelector('#eggTemperatureChange');

const eggSize = ['소란', '중란', '대란', '특란', '왕란'];
const eggTemperature = ['실온', '냉장고'];

eggSizeBtn.addEventListener('click', changeEggSize);
eggTemperatureBtn.addEventListener('click', changeTemperature);


let eggStep = 0,
    temperatureStep = 0;

eggSizeBtn.children[1].innerText = eggSize[eggStep];
eggSizeBtn.children[1].innerText = eggSize[temperatureStep];


function changeEggSize(){
    if(eggStep < eggSize.length - 1){
        eggStep++;
        this.children[1].innerText = eggSize[eggStep];
    } else{
        eggStep = 0;
        this.children[1].innerText = eggSize[eggStep];
    }
}

function changeTemperature(){
    console.log(temperatureStep)
    if(temperatureStep < eggTemperature.length - 1){
        temperatureStep++;
        console.log(temperatureStep)
        this.children[1].innerText = eggTemperature[temperatureStep];
    } else{
        temperatureStep = 0;
        this.children[1].innerText = eggTemperature[temperatureStep];
    }
}



// counter

const timeArray = [1000 * 60 * 4, 1000 * 60 * 5, 1000 * 60 * (8 + 5/6)]

const eggCounterTimer = document.querySelector('#eggCounterTimer');
const eggCounterPlayBtn = document.querySelector('#eggCounterPlayBtn');

eggCounterPlayBtn.addEventListener('click', eggCounterPlay);

let timerInterval
let togglePlay = true;

function eggCounterPlay(){
    if(togglePlay){
        timerInterval = setInterval(timerFnc, 1000 )
        togglePlay = false;
    }else{
        clearInterval(timerInterval)
        togglePlay = true;
    }
}

let resultTime = timeArray[0];

let mm = 0;
let ss = 0;

if(resultTime){
    mm = Math.floor(resultTime / 60 / 1000);
    ss = (resultTime % 60000) / 1000;
}

eggCounterTimer.innerText = `${mm} : ${ss}`;

function timerFnc(){

    eggCounterTimer.innerText = `${mm} : ${ss}`;

    resultTime = resultTime - 1000;


    mm = Math.floor(resultTime / 60 / 1000);
    ss = (resultTime % 60000) / 1000;
}

let time = new Date();
let endtime = time + 1000 + 500;

let endTime = (+new Date) + 1000 + 500;
let msLeft = endTime - (+new Date);

console.log(endTime, msLeft)