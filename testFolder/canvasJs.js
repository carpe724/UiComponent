var canvas = document.getElementById('canvas');
var clearBtn = document.getElementById('clear');
var rect = canvas.getBoundingClientRect();
var flag = false;
var linePathX = [];
var linePathY = [];

var PathX, PathY;
var lastX, lastY, startX, startY;

function draw(){

if (canvas.getContext){
    var ctx = canvas.getContext('2d');

    canvas.addEventListener('mousemove', int);
    canvas.addEventListener('mousedown', drawImg);
    canvas.addEventListener('mouseup', drawEndImg);
    canvas.addEventListener('mouseleave', drawEndImg);
    clearBtn.addEventListener('click', clearCanvas)

    ctx.beginPath();
    ctx.moveTo(100, 100);
    ctx.lineTo(200, 100);
    ctx.lineTo(200, 200);
    ctx.lineTo(100, 200);
    ctx.lineTo(100, 100);
    ctx.stroke();

    function int(event){  
        if(flag){
            PathX = event.clientX - rect.x;
            PathY = event.clientY - rect.y;  

            ctx.beginPath();
            ctx.moveTo(lastX, lastY);
            ctx.lineTo(PathX, PathY);
            ctx.closePath();
            ctx.strokeStyle = "skyblue";
            ctx.stroke();
            
            linePathX.push(PathX);
            linePathY.push(PathY);
        }
        lastX = PathX;
        lastY = PathY;
    }

    function drawImg(){
        flag = true;   
        lastX = event.clientX - rect.x;
        lastY = event.clientY - rect.y;  
        startX = event.clientX - rect.x;
        startY = event.clientY - rect.y; 
    }

    function drawEndImg(){
        flag = false;
        ctx.beginPath();
        ctx.moveTo(lastX, lastY);
        

        for (i = 0; i < linePathX.length; i++){
            ctx.lineTo(linePathX[i],linePathY[i])
        }
        ctx.lineTo(startX, startY);
        
        ctx.closePath();
        ctx.fillStyle = "green"
        ctx.fill();

        console.log(linePathX,linePathY)
        

        linePathX = [];
        linePathY = [];
    }

    function clearCanvas(){
        ctx.setTransform(1, 0, 0, 1, 0, 0);
        ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    }

}


}

