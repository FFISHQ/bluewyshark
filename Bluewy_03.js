// Function to save the selected answer for Question 3 to localStorage
function saveAnswerAndMove() {
    const selectedAnswer = document.querySelector('input[name="sharkorder"]:checked');
    
    if (selectedAnswer) {
        localStorage.setItem('sharkorder', selectedAnswer.value); // Save the selected answer
        window.location.href = 'Bluewy_04.html';  // Move to next page
    } else {
        alert("กรุณาเลือกคำตอบก่อน!");
    }
}

// Function to load the saved answer for Question 3 when the page loads
window.onload = function() {
    const savedAnswer = localStorage.getItem('sharkorder');
    if (savedAnswer) {
        document.querySelector(`input[name="sharkorder"][value="${savedAnswer}"]`).checked = true;
    }
};
