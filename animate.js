var spr_eyes = new Image(); spr_eyes.src="Images/eyes_of_god.png";
var spr_mouth = new Image(); spr_mouth.src="Images/mouth_of_god.png";
//rotates an image
function drawRotatedImage(context, image, x, y, width, height, angle) {
	context.save();
	context.translate(x, y);
	context.rotate(Math.PI/2-angle);
	context.drawImage(image, -width/2, 0, Math.abs(width), Math.abs(height)) ;
	context.restore();
}

var mouth=false;
function checkReligionChoice() {
	if(CONTROLS.beam) {
		if(CONTROLS.mouseX>20&&CONTROLS.mouseX<145&&CONTROLS.mouseY>130&&CONTROLS.mouseY<160){
			GAME.religion="Christian";
		}
		else if(CONTROLS.mouseX>480&&CONTROLS.mouseX<585&&CONTROLS.mouseY>125&&CONTROLS.mouseY<157){
			GAME.religion="Muslim";
		}
		else if(CONTROLS.mouseX>20&&CONTROLS.mouseX<125&&CONTROLS.mouseY>525&&CONTROLS.mouseY<555){
			GAME.religion="Jewish";
		}
		else if(CONTROLS.mouseX>430&&CONTROLS.mouseX<590&&CONTROLS.mouseY>525&&CONTROLS.mouseY<555){
			GAME.religion="Atheist";
		}
		else if(CONTROLS.mouseX>200&&CONTROLS.mouseX<400&&CONTROLS.mouseY>300&&CONTROLS.mouseY<350) {
			mouth=true;
		}
	}
}
var blinkTimer=0;

function renderReligionChoices(context) {
	context.fillStyle='black';
	context.fillText("SELECT FAITH", 190, 30);
	context.fillStyle='red';
	if(CONTROLS.mouseX>20&&CONTROLS.mouseX<145&&CONTROLS.mouseY>130&&CONTROLS.mouseY<160){
		context.fillStyle='green';
	}
	context.fillText("Christian", 20, 140);
	context.fillStyle='red';
	if(CONTROLS.mouseX>480&&CONTROLS.mouseX<585&&CONTROLS.mouseY>125&&CONTROLS.mouseY<157){
		context.fillStyle='green';
	}
	context.fillText("Muslim", 480, 140);
	context.fillStyle='red';
	if(CONTROLS.mouseX>20&&CONTROLS.mouseX<125&&CONTROLS.mouseY>525&&CONTROLS.mouseY<555){
		context.fillStyle='green';
	}
	context.fillText("Jewish", 20, 540);
	context.fillStyle='red';
	if(CONTROLS.mouseX>430&&CONTROLS.mouseX<590&&CONTROLS.mouseY>525&&CONTROLS.mouseY<555){
		context.fillStyle='green';
	}
	context.fillText("Dirty Atheist", 420, 540);
	if(blinkTimer==0){context.drawImage(spr_eyes, 180, 240, 240, 180);}
	else{blinkTimer--;}
	if(mouth){context.drawImage(spr_mouth, 200, 360, 190, 110);}
}


function runGame() {
  var canvas = document.getElementById('mainCanvas');
  var context = canvas.getContext('2d');
	context.font = "30px Arial";
  if (GAME.started) {
		if(GAME.religion=="unselected") {
			checkReligionChoice();

		 context.clearRect(0, 0, 600, 300);
		 context.fillStyle='grey';
		 context.fillRect(0,0,GAME.canvas.width,GAME.canvas.height);

		 renderReligionChoices(context);


		}
		else if(GAME.religion=="Christian") {
	    animateJesus();

	    // 2 - Clear the CANVAS
	    context.clearRect(0, 0, 600, 300);
	    context.fillStyle='black';
	    context.fillRect(0,0,GAME.canvas.width,GAME.canvas.height);

	    RenderJesus(context);
			RenderBeam(context);
		}
		else {
			context.clearRect(0, 0, 600, 300);
	    context.fillStyle='grey';
	    context.fillRect(0,0,GAME.canvas.width,GAME.canvas.height);

			context.fillStyle='black';
			context.fillText("God doesn't like you.", 170, 280);
		}

  } else {
    context.font = "30px Arial";
    context.fillText("Game Over      Level " + GAME.level, 135, 200);
  }
  window.requestAnimationFrame(runGame);
}

window.requestAnimationFrame(runGame);
