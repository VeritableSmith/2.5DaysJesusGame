/**
 *  Keydown event listener runs every time ANY key is pressed!
 *
 */

var CONTROLS = {
  right : false,
  left : false,
  up : false,
  down : false,
  beam : false,
  fireTimer : 0,
  mouseX : -1,
  mouseY : -1

};

document.addEventListener('keydown', function(event) {
  switch (event.key) {
    case "w":
      CONTROLS.up = true;
      break;
    case "s":
      CONTROLS.down = true;
      break;
    case "a":
      CONTROLS.left = true;
      break;
    case "d":
      CONTROLS.right = true;
      break;
    default:
      break;
  }
});


document.addEventListener('keyup', function(event) {
  switch (event.key) {
    case "w":
      CONTROLS.up = false;
      break;
    case "s":
      CONTROLS.down = false;
      break;
    case "a":
      CONTROLS.left = false;
      break;
    case "d":
      CONTROLS.right = false;
      break;
    default:
      break;
  }
});

document.addEventListener('mousedown', function(event) {
CONTROLS.beam=true;
});

document.addEventListener('mousemove', function(event) {
CONTROLS.mouseX=event.x;
CONTROLS.mouseY=event.y;
});

document.addEventListener('mouseup', function(event) {
  CONTROLS.beam=false;
});
