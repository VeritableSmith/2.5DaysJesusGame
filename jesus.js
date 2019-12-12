
var spr_jesus = new Image(); spr_jesus.src="Images/jesus.png";
var spr_beam = new Image(); spr_beam.src="Images/holy_beam.png";
// Populate a global variable for the spaceship
function InitializeJesus() {
  var canvas = document.getElementById('mainCanvas');
  var context = canvas.getContext('2d');
  context.scale(1,1);
  JESUS = {
    x : 300,
    y : 300,
    health : 3,
    xspeed : 0,
    yspeed : 0,
    XSPEEDMAX : 10,
    YSPEEDMAX : 10,
    xacc : 0.2,
    yacc : 0.2,
    initialized : true,
    bullets : []
  };
}

var beamLength, beamAngle;
function RenderBeam(context) {

  if(CONTROLS.beam) {
    beamLength=Math.sqrt(Math.pow(JESUS.x-29-CONTROLS.mouseX,2)+Math.pow(JESUS.y-74-CONTROLS.mouseY,2));
    beamAngle=Math.atan((JESUS.y-74-CONTROLS.mouseY)/(JESUS.x-29-CONTROLS.mouseX));
    if(CONTROLS.mouseX>JESUS.x-29){beamAngle+=Math.PI;}
    drawRotatedImage(context,spr_beam, JESUS.x-29, JESUS.y-74, 100, beamLength,-beamAngle);
  }
  /*if(CONTROLS.beam) {
    context.beginPath();
    context.strokeStyle='red';
    context.moveTo(JESUS.x,JESUS.y);
    context.lineTo(CONTROLS.mouseX,CONTROLS.mouseY);
    context.stroke();
    context.closePath();
  }*/

}

function animateJesus() {
  if(CONTROLS.right){if(JESUS.xspeed<JESUS.XSPEEDMAX){JESUS.xspeed+=JESUS.xacc;}}
  else if(CONTROLS.left){if(JESUS.xspeed>-JESUS.XSPEEDMAX){JESUS.xspeed-=JESUS.xacc;}}
  else {
    if(JESUS.xspeed>0){JESUS.xspeed-=0.1;}
    else if(JESUS.xspeed<0){JESUS.xspeed+=0.1;}
    if(Math.abs(JESUS.xspeed)<0.4){JESUS.xspeed=0;}
  }
  if(CONTROLS.down){if(JESUS.yspeed<JESUS.YSPEEDMAX){JESUS.yspeed+=JESUS.yacc;}}
  else if(CONTROLS.up){if(JESUS.yspeed>-JESUS.YSPEEDMAX){JESUS.yspeed-=JESUS.yacc;}}
  else {
    if(JESUS.yspeed>0){JESUS.yspeed-=0.1;}
    else if(JESUS.yspeed<0){JESUS.yspeed+=0.1;}
    if(Math.abs(JESUS.yspeed)<0.4){JESUS.yspeed=0;}
  }

  JESUS.x+=JESUS.xspeed;
  JESUS.y+=JESUS.yspeed;

  if(JESUS.x>GAME.canvas.width){JESUS.x=0;}
  else if(JESUS.x<0) {JESUS.x=GAME.canvas.width;}
  if(JESUS.y<0) {JESUS.y=GAME.canvas.height;}
  else if(JESUS.y>GAME.canvas.height){JESUS.y=0;}
}

function RenderJesus(context) {
  context.drawImage(spr_jesus, JESUS.x-50, JESUS.y+100,100,-200);
}
