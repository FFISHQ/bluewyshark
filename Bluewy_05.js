
function saveFinalAnswer() {
    const selectedAnswer = document.querySelector('input[name="final"]:checked');
    
    if (selectedAnswer) {
        localStorage.setItem('final', selectedAnswer.value);
    } else {
        alert("กรุณาเลือกคำตอบก่อน!");
    }
}

document.querySelectorAll('input[name="final"]').forEach((radio) => {
    radio.addEventListener('change', function() {
        const selectedAnswer = document.querySelector('input[name="final"]:checked').value;
        localStorage.setItem('final', selectedAnswer);
    });
});

window.onload = function() {
    const savedAnswer = localStorage.getItem('final');
    if (savedAnswer) {
        document.querySelector(`input[name="final"][value="${savedAnswer}"]`).checked = true;
    }
};

function calculateScore() {
    let score = 0;

    const correctAnswers = {
        'sharkclass': 'Chondrichthyes',
        'sharkswim': 'ATBF',
        'sharkorder': 'Cetorhinus_maximus',
        'sharkriver': 'Chiloscyllium',
        'final': ['Option1', 'Option4']
    };

    const selectedAnswers = {
        'sharkclass': localStorage.getItem('sharkclass'),
        'sharkswim': localStorage.getItem('sharkswim'),
        'sharkorder': localStorage.getItem('sharkorder'),
        'sharkriver': localStorage.getItem('sharkriver'),
        'final': localStorage.getItem('final')
    };

    if (selectedAnswers['sharkclass'] === correctAnswers['sharkclass']) score += 1;
    if (selectedAnswers['sharkswim'] === correctAnswers['sharkswim']) score += 1;
    if (selectedAnswers['sharkorder'] === correctAnswers['sharkorder']) score += 1;
    if (selectedAnswers['sharkriver'] === correctAnswers['sharkriver']) score += 1;

    if (correctAnswers['final'].includes(selectedAnswers['final'])) {
        score += 1;
    }

    alert(`คะแนนของคุณคือ ${score} /5 คะแนน`);
}

window.onload = function() {
    document.getElementById('submitButton').addEventListener('click', function() {
        saveFinalAnswer();
        calculateScore();
    });

    document.getElementById('clearButton').addEventListener('click', function() {
        localStorage.clear();
        alert("Local storage has been cleared!");
    });
};


