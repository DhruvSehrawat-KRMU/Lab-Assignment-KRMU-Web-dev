// Question array
let questions = [
    "What is 69 + 67 ?",
    "What color is of space ?",
    "How many fingers are there in one hand ?",
];
// Answers array
let answers = ["136", "Nothing", "5"];

function quiz() {
    let score = 0;

    alert("Start Quiz!");
    alert("Make sure to type the first letter of your answer is in Uppercase")

    for (let i = 0; i < 3; i++) {
        let input = prompt(questions[i]);
        let cleanInput = input.toLowerCase().trim();
        if (cleanInput == "") {
            alert("You didn't answer the question");
            alert("You got 0 points for this question")
            continue;
        }
        if (cleanInput == answers[i]) {
            score++;
            alert("Right!");
        } else {
            alert("Wrong!");
        }
    }

    alert("Your Score is : " + score + "/3");
}
quiz();
