
function saveAnswerAndMove() {
    const selectedAnswer = document.querySelector('input[name="sharkorder"]:checked');
    
    if (selectedAnswer) {
        localStorage.setItem('sharkorder', selectedAnswer.value);
        window.location.href = 'Bluewy_04.html';
    } else {
        alert("กรุณาเลือกคำตอบก่อน!");
    }
}

window.onload = function() {
    const savedAnswer = localStorage.getItem('sharkorder');
    if (savedAnswer) {
        document.querySelector(`input[name="sharkorder"][value="${savedAnswer}"]`).checked = true;
    }
};
