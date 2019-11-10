function startCaptcha(){
  var captchaList = ["colorSpree.html" , "colorDilemma.html" , "dragIt.html"];
  var choice = Math.floor(((Math.random())*1000)%3) ;
  console.log(captchaList[choice]);
  // choice = 0 ; //Change the hard coded with random values .....

  var firstCaptcha = captchaList[choice] ;
  window.location.replace(firstCaptcha) ;
}
