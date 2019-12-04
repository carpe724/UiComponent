const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// function canvasSize(el, event, fn){
//     var test = event.split(' ').forEach(e => {
//         el.addEventListener(e, fn);
//     });
// }

// canvasSize(window, 'resize load', function(){
//     canvas.width = window.innerWidth;
//     canvas.height = window.innerHeight;

//     ctx.fillStyle = 'black';
//     ctx.fillRect(100,100,200,200);

//     ctx.fillStyle = '#aaa';
//     ctx.fillRect(110,110,180,180);

//     ctx.strokeStyle = 'black';
//     ctx.lineWidth = 3
//     ctx.strokeRect(120,120, 160, 160);

//     ctx.beginPath();
//     ctx.moveTo(205, 140);
//     ctx.lineTo(140, 260);
//     ctx.lineTo(260, 192);
//     ctx.stroke();

//     ctx.beginPath();
//     ctx.arc(140, 260, 137, -0.52, -1.08, true);
//     ctx.stroke();

//     ctx.beginPath();
//     ctx.arc(140, 260, 130, -0.52, -1.08, true);
//     ctx.stroke();

//     ctx.beginPath();
//     ctx.arc(190, 190, 5, 0, Math.PI * 2, true);
//     ctx.stroke();

//     ctx.beginPath();
//     ctx.arc(210, 205, 5, 0, Math.PI * 2, true);
//     ctx.stroke();

//     ctx.beginPath();
//     ctx.arc(230, 185, 5, 0, Math.PI * 2, true);
//     ctx.stroke();
// })

let pathX = 300,
    pathY = 300;

function draw(){
    ctx.beginPath();
    ctx.arc(pathX,300,5,0,Math.PI * 2, true);
    ctx.fill();
    pathX = pathX + 3;
    console.log('gd')
    
    if(pathX < 900){
        requestAnimationFrame(draw)
    }
}


draw();

function draw2(){
    ctx.beginPath();
    ctx.arc(300,pathY,5,0,Math.PI * 2, true);
    ctx.fill();
    pathY = pathY + 3;
    console.log('gg')
    
    if(pathY < 900){
        requestAnimationFrame(draw2)
    }
}

draw2();