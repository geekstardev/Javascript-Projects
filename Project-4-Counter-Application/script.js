
document.getElementById("incrementBtn").addEventListener("click",incrementCounter);

document.getElementById("decrementBtn").addEventListener("click",decremetnCounter);

document.getElementById("resetBtn").addEventListener("click",resetCounter);

let counterDisplay = document.getElementById("counterDisplay");
let counterValue = 0;

function updateCounterDisplay(){
    counterDisplay.textContent = counterValue;
}



function incrementCounter(){
    counterValue++;
    updateCounterDisplay();

}

function decremetnCounter(){
    if(counterValue>0){
        counterValue--;
        updateCounterDisplay();
    }
    
    
}

function resetCounter(){
    counterValue = 0;
    updateCounterDisplay();

}