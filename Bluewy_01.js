// Function to save the selected answer for Question 1 to localStorage
function saveAnswerAndMove() {
    const selectedAnswer = document.querySelector('input[name="sharkclass"]:checked');
    
    if (selectedAnswer) {
        localStorage.setItem('sharkclass', selectedAnswer.value); // Save the selected answer
        window.location.href = 'Bluewy_02.html';  // Move to next page
    } else {
        alert("กรุณาเลือกคำตอบก่อน!");
    }
}

// Function to load the saved answer for Question 1 when the page loads
window.onload = function() {
    const savedAnswer = localStorage.getItem('sharkclass');
    if (savedAnswer) {
        document.querySelector(`input[name="sharkclass"][value="${savedAnswer}"]`).checked = true;
    }
};
