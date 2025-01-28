
function saveAnswerAndMove() {
    const selectedAnswer = document.querySelector('input[name="sharkclass"]:checked');
    
    if (selectedAnswer) {
        localStorage.setItem('sharkclass', selectedAnswer.value);
        window.location.href = 'Bluewy_02.html';
    } else {
        alert("กรุณาเลือกคำตอบก่อน!");
    }
}

window.onload = function() {
    const savedAnswer = localStorage.getItem('sharkclass');
    if (savedAnswer) {
        document.querySelector(`input[name="sharkclass"][value="${savedAnswer}"]`).checked = true;
    }
};
