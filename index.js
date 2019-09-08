var onload = setInterval(randomise, 1000) ;
var flag = 0 ;
var color ;
var correctClick = 0 ;
var totalClick = 0 ;

var threshold = 0.6 ;
var clickThreshold = 10 ;

function randomise() {
  canvas = document.getElementById('canvas');
  ctx = canvas.getContext('2d');
  var rr = 100;
  if(flag){
    drawBlackCircle(rr) ;
  }
  else{
    drawCircle(rr);
  }

  flag = !flag ;
}

function drawCircle(rr) {
  var myColors = ['red', 'green'];
  var colorPicker = Math.ceil(2 * Math.random() - 1);
  color = myColors[colorPicker] ;
  ctx.strokeStyle = myColors[colorPicker];
  ctx.beginPath();
  ctx.arc(150, 150, rr, 0, 2 * Math.PI,false);
  ctx.fillStyle = myColors[colorPicker];
  ctx.fill();
  ctx.stroke();
  ctx.closePath();
}

function drawBlackCircle(rr) {
  ctx.strokeStyle = "black" ;
  color = 'black' ;
  ctx.beginPath();
  ctx.arc(150, 150, rr, 0, 2 * Math.PI,false);
  ctx.fillStyle = "black";
  ctx.fill();
  ctx.stroke();
  ctx.closePath();
}

document.onkeydown = function(evt) {
    evt = evt || window.event;
    if (evt.ctrlKey) {
        if(color === 'green'){
          correctClick = correctClick + 1 ;
        }
        totalClick = totalClick + 1 ;

        console.log("click");

        var accuracy = correctClick / totalClick ;
        if(accuracy >= threshold && totalClick >= clickThreshold){
          alert("Captcha Correct -> total clicks = " + totalClick + " correct clicks = " + correctClick ) ;
        }
    }
};
