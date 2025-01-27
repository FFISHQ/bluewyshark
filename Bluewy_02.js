// Function to save the selected answer for Question 2 to localStorage
function saveAnswerAndMove() {
    const selectedAnswer = document.querySelector('input[name="sharkswim"]:checked');
    
    if (selectedAnswer) {
        localStorage.setItem('sharkswim', selectedAnswer.value); // Save the selected answer
        window.location.href = 'Bluewy_03.html';  // Move to next page
    } else {
        alert("กรุณาเลือกคำตอบก่อน!");
    }
}

// Function to load the saved answer for Question 2 when the page loads
window.onload = function() {
    const savedAnswer = localStorage.getItem('sharkswim');
    if (savedAnswer) {
        document.querySelector(`input[name="sharkswim"][value="${savedAnswer}"]`).checked = true;
    }
};