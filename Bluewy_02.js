
function saveAnswerAndMove() {
    const selectedAnswer = document.querySelector('input[name="sharkswim"]:checked');
    
    if (selectedAnswer) {
        localStorage.setItem('sharkswim', selectedAnswer.value);
        window.location.href = 'Bluewy_03.html';
    } else {
        alert("กรุณาเลือกคำตอบก่อน!");
    }
}

window.onload = function() {
    const savedAnswer = localStorage.getItem('sharkswim');
    if (savedAnswer) {
        document.querySelector(`input[name="sharkswim"][value="${savedAnswer}"]`).checked = true;
    }
};