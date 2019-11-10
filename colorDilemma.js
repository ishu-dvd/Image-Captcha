

var colours = ['Black','Blue','Maroon','Yellow','Violet','Orange', 'Green']
var colourCode = ["#000000","#0000FF","#800000","#E5DF1D","#6114B9","#E98D23","#14BF2B"]
var correctChoice = Math.floor(Math.random()*3) + 1
var correctCount = 0
var totalCount = 0
var op1text = "Black"
var op2text = "Black"
var op3text = "Black"
var op1col = "#000000"
var op2col = "#000000"
var op3col = "#000000"
var temp = "Black"
var index
var correctIndex
var accuracy = 0
document.getElementById('opt1').style.fontSize = "250%"
document.getElementById('opt2').style.fontSize = "250%"
document.getElementById('opt3').style.fontSize = "250%"

genOptions()
function genOptions()
{
	document.getElementById('instr').innerHTML =
	 "Select the text that matches it's own colour"
	index = Math.floor(Math.random()*7)
	correctIndex = Math.floor(Math.random()*7)
	temp = colours[index]
	colours[index] = colours[correctIndex]
	colours[correctIndex] = temp
	temp = colourCode[index]
	colourCode[index] = colourCode[correctIndex]
	colourCode[correctIndex] = temp
	if (correctChoice==1){
		op1text = colours[correctIndex]
		op1col = colourCode[correctIndex]
		op2text = colours[(correctIndex+2)%7]
		op2col = colourCode[(correctIndex+1)%7]
		op3text = colours[(correctIndex+3)%7]
		op3col = colourCode[(correctIndex+4)%7]
	}
	else if (correctChoice==2){
		op1text = colours[(correctIndex+4)%7]
		op1col = colourCode[(correctIndex+2)%7]
		op2text = colours[correctIndex]
		op2col = colourCode[correctIndex]
		op3text = colours[(correctIndex+5)%7]
		op3col = colourCode[(correctIndex+6)%7]
	}
	else{
		op1text = colours[(correctIndex+3)%7]
		op1col = colourCode[(correctIndex+2)%7]
		op2text = colours[(correctIndex+4)%7]
		op2col = colourCode[(correctIndex+5)%7]
		op3text = colours[correctIndex]
		op3col = colourCode[correctIndex]
	}
	document.getElementById('opt1').value = op1text
	document.getElementById("opt1").style.color = op1col
	document.getElementById('opt2').value = op2text
	document.getElementById("opt2").style.color = op2col
	document.getElementById('opt3').value = op3text
	document.getElementById("opt3").style.color = op3col
}
function option1 ()
{
	totalCount = totalCount + 1
	if (correctChoice==1){
		correctCount = correctCount + 1
	}
	correctChoice = Math.floor(Math.random()*3) + 1
	accuracy = correctCount/totalCount
	if (totalCount<7){
		genOptions()
	}
	else{
		if (correctCount>=6){
			window.location.replace("correctCaptcha.html") ;
		}
		else{
			window.location.replace("incorrectCaptcha.html") ;
		}
	}
}
function option2 ()
{
	totalCount = totalCount + 1
	if (correctChoice==2){
		correctCount = correctCount + 1
	}
	else{

	}
	correctChoice = Math.floor(Math.random()*3) + 1
	accuracy = correctCount/totalCount
	if (totalCount<7)
		genOptions()
		else{
			if (correctCount>=6){
				window.location.replace("correctCaptcha.html") ;
			}
			else{
				window.location.replace("incorrectCaptcha.html") ;
			}
		}
}
function option3 ()
{
	totalCount = totalCount + 1
	if (correctChoice==3){
		correctCount = correctCount + 1
	}
	else{

	}
	correctChoice = Math.floor(Math.random()*3) + 1
	accuracy = correctCount/totalCount
	if (totalCount<7)
		genOptions()
	else{
		if (correctCount>=6){
			window.location.replace("correctCaptcha.html") ;
		}
		else{
			window.location.replace("incorrectCaptcha.html") ;
		}
	}
}
