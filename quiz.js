// 1. Data Setup: Parallel Arrays for Questions and Answers
const questions = [
    "What is the capital of France?",
    "Which planet is known as the Red Planet?",
    "What is 10 multiplied by 5?"
];

const answers = [
    "paris",
    "mars",
    "50"
];
 function runQuiz() {
            const totalScore = quiz();
            
            //  Display the accumulated score
            const scoreSpan = document.getElementById('final-score');
            scoreSpan.innerText = totalScore + " / 9";
            scoreSpan.className = "score-text";
        }

// 2. The Quiz Function
function quiz() {
    let points = 0;

    // 3. The Outer For Loop (Iterate through the 3 questions)
    for (let i = 0; i < questions.length; i++) {
        
        let guesses = 3; // Reset guesses for each new question
        let answeredCorrectly = false;

        // 4. The Inner While Loop (Manage the 3 attempts)
        while (guesses > 0 && !answeredCorrectly) {
            
            // Prompt user (using loop counter 'i' to get the current question)
            // We show (guesses) remaining to be helpful
            let input = prompt(questions[i] + "\n(Attempts left: " + guesses + ")");
            
            // Normalize input to lowercase for easier comparison
            if (input) input = input.toLowerCase().trim();

            // 5. Conditional Check
            if (input === answers[i]) {
                // CORRECT: Award points equal to current guesses count
                // 1st try = 3 pts, 2nd try = 2 pts, 3rd try = 1 pt
                points += guesses;
                
                alert("Correct! You earned " + guesses + " points.");
                
                // Set guesses to 0 to break the while loop (as requested)
                guesses = 0; 
                answeredCorrectly = true;
            } else {
                // INCORRECT: Decrement guesses
                guesses--;
                
                if (guesses > 0) {
                    alert("Wrong answer. Try again!");
                } else {
                    alert("Out of guesses! The correct answer was " + answers[i]);
                }
            }
        }
    }

    // 6. Return the accumulated score
    return points;
}
