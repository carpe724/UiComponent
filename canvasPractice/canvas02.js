const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let flag = false;


canvas.addEventListener('mousedown', function(e){
    console.log('mousedown');
    let positionX = e.clientX;
    let positionY = e.clientY;
    flag = true;
    ctx.beginPath();
    ctx.moveTo(positionX, positionY);
})


// canvas.addEventListener('mousemove', function(e){
//     let positionX = e.clientX;
//     let positionY = e.clientY;

//     if(flag){
//         ctx.lineTo(positionX, positionY);
//         // ctx.stroke();
//     }
// })


canvas.addEventListener('mouseup', function(e){
    console.log('mouseup')
    let positionX = e.clientX;
    let positionY = e.clientY;
    ctx.lineTo(positionX, positionY);
    ctx.stroke();
    flag = false;
    ctx.closePath();
})

function canvasClear(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
}


document.getElementById('mode').addEventListener('click', function(e){
    e.target.classList.toggle('active')
    if(e.target.classList.value){
        canvasLine();
    }
})

function canvasLine(){
    console.log('gdgd')
}

function colorChoose(color_value){
    console.log('gd')
    if(color_value === 'red'){
        ctx.strokeStyle = 'red';
    }else if(color_value === 'blue'){
        ctx.strokeStyle = 'blue';
    }else if(color_value === 'black'){
        ctx.strokeStyle = 'black';
    }
}