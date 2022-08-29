var circle = document.getElementById("circle");
var upbtn = document.getElementById("upbtn");
var dnbtn = document.getElementById("dnbtn");

var rotateValue = circle.style.transform;
var rotateSum;

upbtn.onclick = function()
{
    rotateSum = rotateValue + "rotate(90deg)";
    circle.style.transform = rotateSum;
    rotateValue = rotateSum;
}

dnbtn.onclick = function()
{
    rotateSum = rotateValue + "rotate(-90deg)";
    circle.style.transform = rotateSum;
    rotateValue = rotateSum;    
}