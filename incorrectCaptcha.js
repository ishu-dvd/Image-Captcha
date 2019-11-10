function startCaptcha(){
  var captchaList = ["colorSpree.html" , "colorDilemma.html" , "dragIt.html"];
  var choice = Math.floor(((Math.random())*1000)%3) ;
  console.log(captchaList[choice]);
  // choice = 0 ; //Change the hard coded with random values .....

  var firstCaptcha = captchaList[choice] ;
  window.location.replace(firstCaptcha) ;
}

var count = 6 ;

function counter(){
  count = count - 1 ;
  document.getElementById('msg').innerHTML = "Starting back in " + count + " seconds ....." ;
}

setInterval(counter , 1000);
setTimeout(startCaptcha,5000);
