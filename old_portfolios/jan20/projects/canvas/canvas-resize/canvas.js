
var canvas = document.querySelector("canvas");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var c = canvas.getContext('2d');

//rectagle
/*
c.fillStyle = "rgba(255,0,0,0.9)";
c.fillRect(100,100,100,100);
c.fillRect(200,300,100,100);
*/

// line
/*
c.beginPath();
c.moveTo(50,300);
c.lineTo(300,100);
c.lineTo(400,300);
c.strokeStyle = "red";
c.stroke();
*/
// arc

//c.beginPath();
//c.arc(300,300,30,0,Math.PI *2,false);
//c.strokeStyle = "blue";
//c.stroke();

//-----
/*

for(var i=0; i<100; i++){

    var x = Math.random() * window.innerWidth;
    var y = Math.random()*window.innerHeight;

    var colors = ["red","green","blue"];

    var color = colors[Math.floor(Math.random()*colors.length)];

    c.beginPath();
    c.arc(x,y,30,0,Math.PI *2,false);
    c.strokeStyle = color;
    c.stroke();
}
*/

var mouse = {
    x: undefined,
    y: undefined
}

window.addEventListener('mousemove', 
    function(event){
        
        mouse.x = event.x;
        mouse.y = event.y;

        //console.log(mouse);
       
});


function Circle(x,y, dx, dy, radius){
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.radius = radius;

    this.draw = function(){
        c.beginPath();
        c.arc(this.x,this.y,30,0,Math.PI *2,false);
        c.strokeStyle = "black";
        c.stroke();
        //c.fillStyle(200,255,255,0.5);
        c.fill();
    }

    this.update = function(){
        if(this.x + this.radius>innerWidth || this.x- this.radius < 0){
            this.dx = -this.dx;
        }
    
        if(this.y + this.radius > innerHeight || this.y - this.radius < 0){
            this.dy = -this.dy;
        }
        
        this.x += this.dx;
        this.y += this.dy;

        //interaktivity
        if(mouse.x - this.x < 50 && mouse.x - this.x > -50 && mouse.y - this.y < 50 && mouse.y - this.y >-50){
            this.radius += 1;
            console.log("growing");
        }else if(this.radius >2){
            this.radius -= 1;
        }


        this.draw();
    }

}

var circleArray = [];

for(var i=0; i< 100; i++){

    var radius = 30;
    var x = Math.random() * (innerWidth-radius*2) + radius;
    var y = Math.random() * (innerHeight-radius*2) + radius;
    var dx = (Math.random() - 0.5)*2;
    var dy = (Math.random() - 0.5)*3;
    circleArray.push(new Circle(x,y,dx,dy,radius));
}

function animate(){
    requestAnimationFrame(animate);
    c.clearRect(0,0,innerWidth,innerHeight);
    
    for(var i=0; i<circleArray.length; i++){
        circleArray[i].update();
    }
}

animate();