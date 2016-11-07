function drawAll() {
    drawSky();            
    drawHouse();
    drawWindows();
    drawDoor();
    drawChimney();
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
    ctx.fillRect(0, 0, 500, 400);

    var gradient2 = ctx.createRadialGradient(75, 50, 2, 74, 49, 3);
    gradient.addColorStop(0, "#ffffff");
    gradient.addColorStop(1, "#ffffff");
    ctx.fillStyle = gradient2;
    ctx.fillRect(50, 50, 10, 10);
}