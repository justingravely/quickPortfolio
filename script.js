var progressBarOuter = document.getElementById("progressBarOuter");
var progressBarInner = document.getElementById("progressBarInner");
var percent = document.getElementById("percent");
var percentTog = false;

var calcScreen = document.getElementById("calcScreen");
var calcMod = document.getElementsByClassName("calcMod");
var calcNum = document.getElementsByClassName("calcNum");
var currentNum = null;
var numArr = [];

for (let i = 0; i < calcMod.length; i++) {
    calcMod[i].addEventListener("click", ()=>{
        numArr.push(calcMod[i].textContent);
        calculator();
    })
}
for (let i = 0; i < calcNum.length; i++) {
    calcNum[i].addEventListener("click", ()=>{
        numArr.push(calcNum[i].textContent);
        calculator();
    })
}

function calculator() {
    let val = 0;
    if (numArr.length == 4) {
        if (numArr[1] == "+") {
            calcScreen.innerHTML = parseInt(numArr[0]) + parseInt(numArr[2])
            numArr = [];
        }
        if (numArr[1] == "-") {
            calcScreen.innerHTML = parseInt(numArr[0]) - parseInt(numArr[2])
            numArr = [];
        }
        if (numArr[1] == "x") {
            calcScreen.innerHTML = parseInt(numArr[0]) * parseInt(numArr[2])
            numArr = [];
        }
        if (numArr[1] == "÷") {
            calcScreen.innerHTML = parseInt(numArr[0]) / parseInt(numArr[2])
            numArr = [];
        }
    }
    console.log(numArr)
}


function percentFunc(){
    let percentNum = 0;
    let percentInt = setInterval(() => {
        percentNum += 1;
        percent.innerHTML = percentNum.toString();
        if (percentNum >= 60) clearInterval(percentInt);
    }, 20);
}

window.addEventListener("scroll", ()=>{
    if (scrollY >= 284) {
        progressBarInner.classList.add("progressBarAnimation")
        if (percentTog == false) {
            percentTog = true;
            percentFunc();
        }
    }
    if (scrollY <= 284) {
        percentTog = false;
        progressBarInner.classList.remove("progressBarAnimation")
    }
})
