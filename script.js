// Quiz functionality for index.html
let currentQuestion = 0;
const questions = [
    {
        question: "Who wrote the first standardized baseball rules in 1845?",
        options: ["Alexander Cartwright", "Abner Doubleday", "Babe Ruth", "Henry Chadwick"],
        correct: 0
    },
    {
        question: "Which was the first professional baseball team?",
        options: ["New York Yankees", "Boston Red Sox", "Cincinnati Red Stockings", "Chicago Cubs"],
        correct: 2
    },
    {
        question: "Who broke the color barrier in MLB in 1947?",
        options: ["Willie Mays", "Jackie Robinson", "Hank Aaron", "Satchel Paige"],
        correct: 1
    }
];

function checkAnswer(button, result) {
    const feedback = document.getElementById('quiz-feedback');
    const options = document.querySelectorAll('.quiz-option');
    
    options.forEach(opt => {
        opt.disabled = true;
        opt.style.pointerEvents = 'none';
    });
    
    if (result === 'correct') {
        button.classList.add('correct');
        feedback.textContent = "✓ Correct! Well done!";
        feedback.className = 'quiz-feedback correct';
    } else {
        button.classList.add('wrong');
        feedback.textContent = "✗ Not quite right. Try again!";
        feedback.className = 'quiz-feedback wrong';
        
        // Highlight correct answer
        const correctIndex = questions[currentQuestion].correct;
        options[correctIndex].classList.add('correct');
    }
}

function nextQuestion() {
    currentQuestion = (currentQuestion + 1) % questions.length;
    const questionElement = document.getElementById('quiz-question');
    const options = document.querySelectorAll('.quiz-option');
    const feedback = document.getElementById('quiz-feedback');
    
    questionElement.textContent = questions[currentQuestion].question;
    
    options.forEach((option, index) => {
        option.textContent = questions[currentQuestion].options[index];
        option.classList.remove('correct', 'wrong');
        option.disabled = false;
        option.style.pointerEvents = 'auto';
    });
    
    feedback.textContent = '';
    feedback.className = 'quiz-feedback';
}

// Latin America Quiz
function checkAnswerLA(button, result) {
    const feedback = document.getElementById('quiz-feedback-la');
    const options = document.querySelectorAll('.quiz-option');
    
    options.forEach(opt => {
        opt.disabled = true;
        opt.style.pointerEvents = 'none';
    });
    
    if (result === 'correct') {
        button.classList.add('correct');
        feedback.textContent = "✓ Correct! The Dominican Republic produces the most MLB players per capita.";
        feedback.className = 'quiz-feedback correct';
    } else {
        button.classList.add('wrong');
        feedback.textContent = "✗ Not quite. The correct answer is Dominican Republic.";
        feedback.className = 'quiz-feedback wrong';
    }
}

// Rules Quiz
function checkAnswerRules(button, result) {
    const feedback = document.getElementById('quiz-feedback-rules');
    const options = document.querySelectorAll('.quiz-option');
    
    options.forEach(opt => {
        opt.disabled = true;
        opt.style.pointerEvents = 'none';
    });
    
    if (result === 'correct') {
        button.classList.add('correct');
        feedback.textContent = "✓ Correct! Three strikes make an out in baseball.";
        feedback.className = 'quiz-feedback correct';
    } else {
        button.classList.add('wrong');
        feedback.textContent = "✗ Not quite. The correct answer is 3 strikes.";
        feedback.className = 'quiz-feedback wrong';
    }
}

// Position info for rules page
function showPositionInfo(position) {
    const infoBox = document.getElementById('position-info');
    const positionInfo = {
        'Pitcher': 'Throws the ball to the batter. Controls the game pace.',
        'Catcher': 'Catches pitches, signals pitches to pitcher, guards home plate.',
        'First Base': 'Covers first base, fields ground balls, makes catches.',
        'Second Base': 'Covers second base, turns double plays, has good range.',
        'Third Base': 'Covers third base, fields hard-hit balls, strong arm needed.',
        'Shortstop': 'Between second and third, covers large area, leader of infield.',
        'Left Field': 'Covers left field, catches fly balls, strong arm for throws.',
        'Center Field': 'Covers center field, fastest outfielder, catches most fly balls.',
        'Right Field': 'Covers right field, needs strongest arm for long throws.'
    };
    
    infoBox.innerHTML = `
        <h3>${position}</h3>
        <p>${positionInfo[position] || 'Click on positions to learn about them!'}</p>
        <small>Position abbreviation: ${getPositionAbbr(position)}</small>
    `;
}

function getPositionAbbr(position) {
    const abbreviations = {
        'Pitcher': 'P',
        'Catcher': 'C',
        'First Base': '1B',
        'Second Base': '2B',
        'Third Base': '3B',
        'Shortstop': 'SS',
        'Left Field': 'LF',
        'Center Field': 'CF',
        'Right Field': 'RF'
    };
    return abbreviations[position] || '';
}

// Initialize first question
document.addEventListener('DOMContentLoaded', function() {
    // Only run if quiz exists on page
    if (document.getElementById('quiz-question') && questions.length > 0) {
        document.getElementById('quiz-question').textContent = questions[0].question;
        const options = document.querySelectorAll('.quiz-option');
        options.forEach((option, index) => {
            option.textContent = questions[0].options[index];
        });
    }
});
