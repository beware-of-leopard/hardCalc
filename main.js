//when button is pressed, add button's value to display div
//when = is pressed, use eval() to evaluate string in display and 
//show result in display screen

var display, evaluate, multiply, clear, decimal, plus,
 minus, multiply, divide, var0, var1, var2, var3, var4, var5, var6, var7, var8, var9;

display = document.querySelector('.displayScreen');
evaluate = document.querySelector('.evaluate');
var1 = document.querySelector('.row4 div:nth-child(1)');
var2 = document.querySelector('.row4 div:nth-child(2)');
var3 = document.querySelector('.row4 div:nth-child(3)');
var4 = document.querySelector('.row3 div:nth-child(1)');
var5 = document.querySelector('.row3 div:nth-child(2)');
var6 = document.querySelector('.row3 div:nth-child(3)');
var7 = document.querySelector('.row2 div:nth-child(1)');
var8 = document.querySelector('.row2 div:nth-child(2)');
var9 = document.querySelector('.row2 div:nth-child(3)');
clear = document.querySelector('.row1 div:nth-child(1)');
var0 = document.querySelector('.row5 div:nth-child(1)');
decimal = document.querySelector('.row5 div:nth-child(2)');
plus = document.querySelector('.row5 div:nth-child(4)');
minus = document.querySelector('.row4 div:nth-child(4)');
multiply = document.querySelector('.row3 div:nth-child(4)');
divide = document.querySelector('.row2 div:nth-child(4)');


function doSomeStuff(){
	display.textContent = eval(display.textContent);
}

function addToDisplay(event){
	var moreDisplay = event.currentTarget;
	display.textContent = display.textContent + moreDisplay.textContent;
}

function clearDisplay(){
	display.textContent = '';
}



var1.addEventListener('click', addToDisplay);
var2.addEventListener('click', addToDisplay);
var3.addEventListener('click', addToDisplay);
var4.addEventListener('click', addToDisplay);
var5.addEventListener('click', addToDisplay);
var6.addEventListener('click', addToDisplay);
var7.addEventListener('click', addToDisplay);
var8.addEventListener('click', addToDisplay);
var9.addEventListener('click', addToDisplay);
var0.addEventListener('click', addToDisplay);
multiply.addEventListener('click', addToDisplay);
decimal.addEventListener('click', addToDisplay);
divide.addEventListener('click', addToDisplay);
plus.addEventListener('click', addToDisplay);
minus.addEventListener('click', addToDisplay);
clear.addEventListener('click', clearDisplay);
evaluate.addEventListener('click', doSomeStuff);
