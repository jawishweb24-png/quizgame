
// 1. Array of Quotes
const quotes = [
    "The best way to predict the future is to create it.",
    "Code is like humor. When you have to explain it, it’s bad.",
    "Fix the cause, not the symptom.",
    "Simplicity is the soul of efficiency.",
    "Before software can be reusable it first has to be usable."
];

function displayQuoteLogic() {
    // 2. Prompt and Conversion
    const userInput = prompt("Enter a number:");
    const number = Number(userInput);
    const outputDiv = document.getElementById('number-output');

    // 3. Validation and Calculation
    // We use quotes.length so the modulus always stays within the array bounds
    if (userInput !== null && userInput.trim() !== "" && !isNaN(number)) {
        
        // Calculate index: handle negatives and ensure it fits the array
        const index = Math.abs(number % quotes.length);

        // 4. Update the HTML
        outputDiv.innerHTML = `
            <div class='result-container'>
                <h3>Your Number: ${number}</h3>
                <h3>Remainder: ${index}</h3>
                <p><strong>Quote:</strong> "${quotes[index]}"</p>
                <hr>
            </div>`;
    } else {
        outputDiv.innerHTML = `
            <div class='result-container'>
                <p style="color: red;"><strong>Invalid input.</strong> Please enter a valid number to see your quote.</p>
            </div>`;
    }
}


/*if (userInput !== null && !isNaN(number)) {
    document.write("<h3>Your Number: " + number + "</h3>");
    document.write("<h3>Remainder: " + index + "</h3>");
    document.write("<p><strong>Quote:</strong> " + quotes[index] + "</p>");
} else {
    document.write("Invalid input. Please refresh and enter a number.");
}*/
    // 6. Display the quote based on the index
////////////////////////////////////////// TRIVIA QUIZ CODE BELOW //////////
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
function validateAndProcessEmail() {
    let email = "";
    let isValid = false;
    
    // Simple email regex pattern
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Loop until a valid email is provided
    while (!isValid) {
        email = prompt("Please enter your email address:");
        
        // Handle if user clicks "Cancel"
        if (email === null) {
            alert("Email is required to proceed!");
            continue;
        }

        if (emailRegex.test(email)) {
            isValid = true;
        } else {
            alert("Error: That is not a valid email address. Please try again.");
        }
    }

    // Process the email using split()
    const parts = email.split("@");
    const username = parts[0].toUpperCase(); // Convert first part to uppercase
    const domain = parts[1];

    // Display the results in the HTML
    const emailDisplay = document.getElementById('email-info');
    if (emailDisplay) {
        emailDisplay.innerHTML = `<strong>User:</strong> ${username}<br><strong>Domain:</strong> ${domain}`;
    }
}

function personalizeGreeting() {
    // 1. Prompt for name
    let name = prompt("Please enter your name:");
    if (!name) name = "Friend"; // Fallback if they cancel or leave blank

    // 2. Function to capitalize the first letter
    const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
    const formattedName = capitalize(name.trim());

    // 3. Determine greeting based on hour (0-23)
    const hour = new Date().getHours();
    let greeting = "";

    switch (true) {
        case (hour >= 5 && hour < 12):
            greeting = "Good Morning";
            break;
        case (hour >= 12 && hour < 17):
            greeting = "Good Afternoon";
            break;
        default:
            greeting = "Good Evening";
            break;
    }

    // 4. Display on the page
    const displayElement = document.getElementById('user-greeting');
    if (displayElement) {
        displayElement.innerText = `${greeting}, ${formattedName}!`;
    }
}

function getDateTime() {
    const now = new Date(); // Creates a new Date object with current date and time
    
    // Formats both date and time (e.g., "3/7/2026, 9:23:45 PM")
    const dateTimeString = now.toLocaleString(); 
    
    // Update an element in your HTML
    const dateDisplay = document.getElementById('quiz-timestamp');
    if (dateDisplay) {
        dateDisplay.innerText = "Started on: " + dateTimeString;
    }
}

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
