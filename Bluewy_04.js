// Function to save the selected answer for Question 4 to localStorage
function saveAnswerAndMove() {
    const selectedAnswer = document.querySelector('input[name="sharkriver"]:checked');
    
    if (selectedAnswer) {
        localStorage.setItem('sharkriver', selectedAnswer.value); // Save the selected answer
        window.location.href = 'Bluewy_05.html';  // Move to next page
    } else {
        alert("กรุณาเลือกคำตอบก่อน!");
    }
}

// Function to load the saved answer for Question 4 when the page loads
window.onload = function() {
    const savedAnswer = localStorage.getItem('sharkriver');
    if (savedAnswer) {
        document.querySelector(`input[name="sharkriver"][value="${savedAnswer}"]`).checked = true;
    }
};