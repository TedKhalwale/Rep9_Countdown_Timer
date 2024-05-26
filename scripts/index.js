function startCountdown() {
    var inputNumber = document.getElementById("inputNumber").value;
    var countdownElement = document.getElementById("countdown");
    var count = parseInt(inputNumber);
    
    if (isNaN(count)) {
        alert("Please enter a valid number.");
        return;
    }
    
    var timer = setInterval(function() {
        count--;
        countdownElement.innerHTML = count;
        
        if (count <= 0) {
            clearInterval(timer);
            countdownElement.innerHTML = "Time's up!";
        }
    }, 1000);
}