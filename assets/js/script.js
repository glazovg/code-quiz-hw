let instructions = document.querySelector(".quiz-intro");
let quizSection = document.querySelector(".quiz")
let getScoresBtn = document.querySelectorAll("#options button")[0];
let startBtn = document.querySelectorAll("#options button")[1];
let timeEl = document.getElementById("time-left");

const questionCard = document.createElement("div");
const questionEl = document.createElement("p");
const answerList = document.createElement("ul");
const gradeEl = document.createElement("p");
const totalQuestions = Object.keys(quiz).length;

let qn = 1;
let secondsLeft = 225;
let score = 0;

//getScores();

//Function to start Quiz
function startQuiz(event) {
    startTimer();

    instructions.classList.add("hide");
    quizSection.appendChild(questionCard);
    questionCard.appendChild(questionEl);
    questionCard.appendChild(answerList);

    getQuestion();
}

//Timer function 
function startTimer() {
    var timerInterval = setInterval(function () {
        secondsLeft--;
        timeEl.textContent = `Time: ${secondsLeft}`;

        if (secondsLeft === 0) {
            // Stops execution of action at set interval
            clearInterval(timerInterval);
        }
    }, 1000);
}

//Function to getQuestions
function getQuestion() {
    setTimeout(function () {
        let question = quiz[`q${qn}`]['q'];
        let totalAnswers = Object.keys(quiz[`q${qn}`]['ans']).length;

        if (document.querySelector('.grade')) questionCard.removeChild(gradeEl);
        if (qn > totalQuestions) gameOver();

        questionEl.textContent = question

        for (let i = 1; i <= totalAnswers; i++) {
            let answerEl = document.createElement("li");
            answerEl.classList.add("answer");
            answerEl.textContent = quiz[`q${qn}`]['ans'][`a${i}`];
            answerList.appendChild(answerEl);

            document.querySelectorAll('.answer').forEach(el => {
                el.addEventListener('click', checkAnswer)
            })
        }
    }, 500);
}

//Function to Check answer
function checkAnswer(event) {
    let answerSelected = event.target;

    if (answerSelected.textContent === quiz[`q${qn}`]['s']) {
        gradeEl.textContent = "Correct!";
        gradeEl.style.color = "green";
        gradeEl.classList.add("grade")
        questionCard.appendChild(gradeEl);
        qn++;
        score = score + 100;
        removeChilds(answerList)
        getQuestion();
    } else {
        gradeEl.textContent = "Wrong!";
        gradeEl.style.color = "red";
        gradeEl.classList.add("grade")
        questionCard.appendChild(gradeEl);
        qn++;
        secondsLeft = secondsLeft - 10;
        removeChilds(answerList)
        getQuestion();
    }
}

//Function to remove childs
function removeChilds(parent) {
    while (parent.lastChild) {
        parent.removeChild(parent.lastChild);
    }
};

//Game Over function
function gameOver() {

}

//On Start Quiz clicked
startBtn.addEventListener("click", startQuiz);
