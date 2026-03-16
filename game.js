// 1. Trivia Data Array
const triviaData = [
    {
        question: "What does HTML stand for?",
        options: ["HyperText Markup Language", "High Tech Machine Language", "Hyperlink Text Management Law"],
        correct: 0
    },
    {
        question: "Which CSS property changes text color?",
        options: ["text-color", "font-color", "color"],
        correct: 2
    },
    {
        question: "Which tag is used for the largest heading?",
        options: ["<h6>", "<h1>", "<h3>"],
        correct: 1
    }
];

let currentQuestionIndex = 0;
let score = 0;

// Element Selectors
const startBtn = document.getElementById('start-btn');
const questionText = document.getElementById('question-text');
const answersList = document.getElementById('answers');
const feedback = document.getElementById('feedback');
const progressText = document.getElementById('progress-text');
const scoreDisplay = document.getElementById('score-display');

// 2. Initialize Game Function
function initGame() {
    currentQuestionIndex = 0;
    score = 0;
    startBtn.style.display = 'none';
    updateScoreDisplay();
    showQuestion();
}

// 3. Track Progress & Show Question
function showQuestion() {
    feedback.innerHTML = "";
    answersList.innerHTML = "";
    
    if (currentQuestionIndex < triviaData.length) {
        let currentQ = triviaData[currentQuestionIndex];
        questionText.innerText = currentQ.question;
        progressText.innerText = "Question " + (currentQuestionIndex + 1) + " of " + triviaData.length;

        currentQ.options.forEach((option, index) => {
            const li = document.createElement('li');
            const link = document.createElement('a');
            link.innerText = option;
            
            // Vanilla JS click listener
            link.addEventListener('click', function(e) {
                e.preventDefault();
                checkAnswer(index);
            });

            li.appendChild(link);
            answersList.appendChild(li);
        });
    } else {
        endGame();
    }
}

// 4. Check Response Function
function checkAnswer(selectedIndex) {
    const correctIndex = triviaData[currentQuestionIndex].correct;

    // Stop users from clicking other answers during feedback
    const links = answersList.getElementsByTagName('a');
    for (let i = 0; i < links.length; i++) {
        links[i].style.pointerEvents = 'none';
    }

    if (selectedIndex === correctIndex) {
        score++;
        feedback.innerHTML = '<span class="success">Correct!.</span>';
    } else {
        feedback.innerHTML = '<span class="error">Wrong! The answer was: ' + triviaData[currentQuestionIndex].options[correctIndex] + '</span>';
    }

    updateScoreDisplay();
    currentQuestionIndex++;
    
    // Use timeout to show next question after feedback
    setTimeout(showQuestion, 1500);
}

function updateScoreDisplay() {
    scoreDisplay.innerText = "Correct: " + score + " / " + triviaData.length;
}

// 5. Restart Logic
function endGame() {
    questionText.innerText = "Game Over!";
    answersList.innerHTML = "<li>Final Score: " + score + " out of " + triviaData.length + "</li>";
    progressText.innerText = "";
    
    const restartBtn = document.createElement('button');
    restartBtn.innerText = "Restart Game";
    restartBtn.addEventListener('click', initGame);
    
    feedback.innerHTML = "";
    feedback.appendChild(restartBtn);
}

// Initial Event Listener
startBtn.addEventListener('click', initGame);
