var y = 160;
var y2 = 160;
var y3 = 160;
var radius = 5;
var radius2 = 5;
var radius3 = 5;
var opacity = 0.7;
var opacity2 = 0.7;
var opacity3 = 0.7;
var x = 280;
var x2 = 280;
var x3 = 280;
var counter = 0;
var smokeSpeed = 5;
var opacityRate = 0.015;
var direction = 2;
var direction2 = -2;
var direction3 = 2;

function speed() {
    smokeSpeed = document.getElementById("myRange").value;
    if (smokeSpeed > 7) {
        opacityRate = 0.03;
    }
}

function drawAll() {
    drawSky();            
    drawHouse();
    drawWindows();
    drawDoor();
    drawChimney();
    drawSmoke();
    speed();
}
function drawHouse() {
    
    var canvas = document.getElementById("myHouse");
    var ctx = canvas.getContext("2d");
    
    ctx.fillStyle="#006600";
    ctx.beginPath();
    ctx.fillRect(0, 400, 500, 100);
    ctx.closePath();
    ctx.fill();
    
    ctx.fillStyle="#4da6ff";
    ctx.beginPath();
    ctx.moveTo(50, 290);
    ctx.lineTo(50, 490);
    ctx.lineTo(300, 490);
    ctx.lineTo(300, 290);
    ctx.lineTo(175, 190);
    ctx.lineTo(50, 290); 
    ctx.closePath();
    ctx.fill();
    
    ctx.fillStyle="#1a8cff";
    ctx.beginPath();
    ctx.moveTo(300, 490);
    ctx.lineTo(300, 290);
    ctx.lineTo(400, 240);
    ctx.lineTo(400, 440);
    ctx.lineTo(300, 490);
    ctx.closePath();
    ctx.fill();
    
    ctx.fillStyle="#292724";
    ctx.beginPath();
    ctx.moveTo(168, 185);
    ctx.lineTo(30, 298);
    ctx.lineTo(40, 298);
    ctx.lineTo(175, 190);
    ctx.closePath();
    ctx.fill();
    
    ctx.fillStyle="#47433e"
    ctx.beginPath();
    ctx.moveTo(168, 185);
    ctx.lineTo(315, 305);
    ctx.lineTo(435, 275);
    ctx.lineTo(330, 170); 
    ctx.closePath();
    ctx.fill();
    ctx.closePath();   
}

function drawWindows() {
    
    var canvas = document.getElementById("myHouse");
    var ctx = canvas.getContext("2d");
    
    ctx.lineWidth="1";
    ctx.fillStyle="#ffd11a";
    ctx.beginPath();
    ctx.fillRect(70, 330, 50, 80);
    ctx.fillRect(230, 330, 50, 80);
    ctx.closePath();
    ctx.fill();
    
    ctx.beginPath();
    ctx.arc(175, 265, 30, 0, 2 * Math.PI);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
    
    ctx.fillStyle="#cca300";
    ctx.beginPath();
    ctx.moveTo(320, 330);
    ctx.lineTo(320, 405);
    ctx.lineTo(380, 380);
    ctx.lineTo(380, 315);
    ctx.lineTo(320, 330);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
    
    ctx.beginPath();
    ctx.moveTo(145, 265);
    ctx.lineTo(205, 265);
    ctx.closePath();
    ctx.stroke();
    
    ctx.beginPath();
    ctx.moveTo(175, 235);
    ctx.lineTo(175, 295);
    ctx.closePath();
    ctx.stroke();
    
    ctx.strokeRect(70, 330, 50, 80);
    ctx.strokeRect(230, 330, 50, 80);
    
}

function drawDoor() {
    
    var canvas = document.getElementById("myHouse");
    var ctx = canvas.getContext("2d");
    
    ctx.fillStyle="#e2dcc5";
    ctx.beginPath();
    ctx.fillRect(140, 370, 70, 120);
    ctx.closePath();
    ctx.fill();
    
    ctx.fillStyle="#ffd11a";
    ctx.beginPath();
    ctx.fillRect(155, 385, 40, 30);
    ctx.closePath();
    ctx.fill();
    
    ctx.fillStyle="#e8b80d";
    ctx.beginPath();
    ctx.arc(195, 435, 5, 0, 2 * Math.PI);
    ctx.closePath();
    ctx.fill();
    
    ctx.strokeRect(140, 370, 70, 120);
    ctx.strokeRect(143, 373, 64, 114);
    ctx.strokeRect(155, 385, 40, 30);
}

function drawChimney() {
    var canvas = document.getElementById("myHouse");
    var ctx = canvas.getContext("2d");
    
    ctx.fillStyle="#4da6ff";
    ctx.beginPath();
    ctx.moveTo(265, 210);
    ctx.lineTo(295, 235);
    ctx.lineTo(295, 170);
    ctx.lineTo(265, 170);
    ctx.closePath();
    ctx.fill();

    ctx.fillStyle="#1a8cff";
    ctx.beginPath();
    ctx.moveTo(295, 235);
    ctx.lineTo(295, 170);
    ctx.lineTo(320, 165);
    ctx.lineTo(320, 226);
    ctx.lineTo(295, 235);
    ctx.closePath();
    ctx.fill();

    ctx.fillStyle="#222222";
    ctx.beginPath();
    ctx.moveTo(265, 170);
    ctx.lineTo(295, 170);
    ctx.lineTo(320, 165);
    ctx.lineTo(295, 165);
    ctx.lineTo(265, 170);
    ctx.closePath();
    ctx.fill();

}

function drawSky() {
    var canvas = document.getElementById("myHouse");
    var ctx = canvas.getContext("2d");

    var gradient = ctx.createLinearGradient(0, 0, 0, 400);
    gradient.addColorStop(0, "#000000");
    gradient.addColorStop(1, "#000033");
    ctx.fillStyle = gradient;
    ctx.beginPath();
    ctx.fillRect(0, 0, 500, 400);
    ctx.closePath();

    var gradient2 = ctx.createRadialGradient(75,50,5,70,40,60);
    gradient2.addColorStop(0, "#ffffff");
    gradient2.addColorStop(1, "#000000");
    ctx.globalAlpha = 0.7;
    ctx.fillStyle = gradient2;
    ctx.beginPath();
    ctx.arc(50, 50, 30, 0, 2*Math.PI);
    ctx.closePath();
    ctx.fill();
    ctx.globalAlpha = 1;

    ctx.fillStyle = "#ffffff";
    ctx.beginPath();
    ctx.arc(400, 60, 1, 0, 2 * Math.PI);
    ctx.closePath();
    ctx.fill();
    ctx.beginPath();
    ctx.arc(120, 30, 1, 0, 2 * Math.PI);
    ctx.closePath();
    ctx.fill();
    ctx.beginPath();
    ctx.arc(80, 130, 1, 0, 2 * Math.PI);
    ctx.closePath();
    ctx.fill();
    ctx.beginPath();
    ctx.arc(200, 140, 1, 0, 2 * Math.PI);
    ctx.closePath();
    ctx.fill();
    ctx.beginPath();
    ctx.arc(250, 100, 1, 0, 2 * Math.PI);
    ctx.closePath();
    ctx.fill();
    ctx.beginPath();
    ctx.arc(180, 70, 1, 0, 2 * Math.PI);
    ctx.closePath();
    ctx.fill();
    ctx.beginPath();
    ctx.arc(230, 20, 1, 0, 2 * Math.PI);
    ctx.closePath();
    ctx.fill();
    ctx.beginPath();
    ctx.arc(300, 50, 1, 0, 2 * Math.PI);
    ctx.closePath();
    ctx.fill();
    ctx.beginPath();
    ctx.arc(320, 120, 1, 0, 2 * Math.PI);
    ctx.closePath();
    ctx.fill();
    ctx.beginPath();
    ctx.arc(450, 20, 1, 0, 2 * Math.PI);
    ctx.closePath();
    ctx.fill();
    ctx.beginPath();
    ctx.arc(470, 120, 1, 0, 2 * Math.PI);
    ctx.closePath();
    ctx.fill();
}

function drawSmoke() {
    var interval = setInterval(animateSmoke, 50);
    var timeout = setTimeout(smokes, 500); 
    var timeout2 = setTimeout(smokes2, 1000);
}

function smokes() {
    var interval = setInterval(animateSmoke2, 50);
}

function smokes2() {
    var interval = setInterval(animateSmoke3, 50);
}

function animateSmoke() {
    var canvas = document.getElementById("myHouse2");
    var ctx = canvas.getContext("2d");
    
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);

    ctx.fillStyle = "#888888";
    ctx.globalAlpha = opacity;
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, 2 * Math.PI);
    ctx.closePath();
    ctx.fill();
    ctx.globalAlpha = 1;
    y -= smokeSpeed;
    x += direction;
    radius += 1;
    opacity -= opacityRate;
    if (y <= -50) {
        y = 160;
        radius = 5;
        opacity = 0.7;
        opacityRate = 0.015;
    }  
    if (x > 320) {
        direction = -2;
    }
    if (x < 280) {
        direction = 2;
    }
}

function animateSmoke2() {
    var canvas = document.getElementById("myHouse3");
    var ctx = canvas.getContext("2d");
    
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);

    ctx.fillStyle = "#888888";
    ctx.globalAlpha = opacity2;
    ctx.beginPath();
    ctx.arc(x2, y2, radius2, 0, 2 * Math.PI);
    ctx.closePath();
    ctx.fill();
    ctx.globalAlpha = 1;
    y2 -= smokeSpeed;
    x2 += direction2;
    radius2 += 1;
    opacity2 -= opacityRate;
    if (y2 <= -50) {
        y2 = 160;
        radius2 = 5;
        opacity2 = 0.7;
        opacityRate = 0.015;
    }  
    if (x2 > 320) {
        direction2 = -2;
    }
    if (x2 < 280) {
        direction2 = 2;
    }
}

function animateSmoke3() {
    var canvas = document.getElementById("myHouse4");
    var ctx = canvas.getContext("2d");
    
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);

    ctx.fillStyle = "#888888";
    ctx.globalAlpha = opacity3;
    ctx.beginPath();
    ctx.arc(x3, y3, radius3, 0, 2 * Math.PI);
    ctx.closePath();
    ctx.fill();
    ctx.globalAlpha = 1;
    y3 -= smokeSpeed;
    x3 += direction3;
    radius3 += 1;
    opacity3 -= opacityRate;
    if (y3 <= -50) {
        y3 = 160;
        radius3 = 5;
        opacity3 = 0.7;
        opacityRate = 0.015;
    }  
    if (x3 > 320) {
        direction3 = -2;
    }
    if (x3 < 280) {
        direction3 = 2;
    }
}