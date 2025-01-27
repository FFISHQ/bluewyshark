// Function to save the selected answer for Question 5 (final) to localStorage
function saveFinalAnswer() {
    const selectedAnswer = document.querySelector('input[name="final"]:checked');
    
    if (selectedAnswer) {
        localStorage.setItem('final', selectedAnswer.value); // Save the selected answer
    } else {
        alert("กรุณาเลือกคำตอบก่อน!"); // Alert if no answer is selected
    }
}

// Save the selected answers for all questions to localStorage
document.querySelectorAll('input[name="final"]').forEach((radio) => {
    radio.addEventListener('change', function() {
        const selectedAnswer = document.querySelector('input[name="final"]:checked').value;
        localStorage.setItem('final', selectedAnswer); // Save selected answer for Question 5
    });
});

window.onload = function() {
    const savedAnswer = localStorage.getItem('final');
    if (savedAnswer) {
        document.querySelector(`input[name="final"][value="${savedAnswer}"]`).checked = true;
    }
};

// Function to calculate the score for all questions when the user clicks "Submit"
function calculateScore() {
    let score = 0;

    const correctAnswers = {
        'sharkclass': 'Chondrichthyes',      // Correct answer for Question 1
        'sharkswim': 'ATBF',                 // Correct answer for Question 2
        'sharkorder': 'Cetorhinus_maximus',  // Correct answer for Question 3
        'sharkriver': 'Chiloscyllium',       // Correct answer for Question 4
        'final': ['Option1', 'Option4']     // Correct answers for Question 5
    };

    // Get the answers for all questions from localStorage
    const selectedAnswers = {
        'sharkclass': localStorage.getItem('sharkclass'),
        'sharkswim': localStorage.getItem('sharkswim'),
        'sharkorder': localStorage.getItem('sharkorder'),
        'sharkriver': localStorage.getItem('sharkriver'),
        'final': localStorage.getItem('final')
    };

    // Compare selected answers with the correct answers
    if (selectedAnswers['sharkclass'] === correctAnswers['sharkclass']) score += 1;
    if (selectedAnswers['sharkswim'] === correctAnswers['sharkswim']) score += 1;
    if (selectedAnswers['sharkorder'] === correctAnswers['sharkorder']) score += 1;
    if (selectedAnswers['sharkriver'] === correctAnswers['sharkriver']) score += 1;

    // Check if the correct answer for 'final' is selected (Option1 or Option4)
    if (correctAnswers['final'].includes(selectedAnswers['final'])) {
        score += 1;
    }

    // Show the total score (out of 5)
    alert(`คะแนนของคุณคือ ${score} /5 คะแนน`);
}

// Add event listener to the submit button to trigger the score calculation
window.onload = function() {
    // Add event listener for the submit button
    document.getElementById('submitButton').addEventListener('click', function() {
        saveFinalAnswer(); // Save the answer for Question 5
        calculateScore(); // Calculate the score
    });

    // Add event listener for the clear button
    document.getElementById('clearButton').addEventListener('click', function() {
        localStorage.clear(); // Clears all data in localStorage
        alert("Local storage has been cleared!");
    });
};


