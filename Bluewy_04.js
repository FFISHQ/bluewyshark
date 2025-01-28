
function saveAnswerAndMove() {
    const selectedAnswer = document.querySelector('input[name="sharkriver"]:checked');
    
    if (selectedAnswer) {
        localStorage.setItem('sharkriver', selectedAnswer.value);
        window.location.href = 'Bluewy_05.html';
    } else {
        alert("กรุณาเลือกคำตอบก่อน!");
    }
}

window.onload = function() {
    const savedAnswer = localStorage.getItem('sharkriver');
    if (savedAnswer) {
        document.querySelector(`input[name="sharkriver"][value="${savedAnswer}"]`).checked = true;
    }
};