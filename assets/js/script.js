let instructions = document.querySelector(".quiz-intro");
let timeEl = document.getElementById("time-left");
let getScoresBtn = document.querySelectorAll("#options button")[0];
let startBtn = document.querySelectorAll("#options button")[1];
let scoreSection = document.querySelector(".score-section");
let scoreEl = document.querySelector(".score-section p");
let initialsInputEl = document.getElementById("initials-input");
let saveScoreBtn = document.getElementById("save-score");
let quizSection = document.querySelector(".quiz");
let questionCard = document.createElement("div");
let questionEl = document.createElement("p");
let answerList = document.createElement("ul");
let gradeEl = document.createElement("p");
let timeOverEl = document.createElement("img");
let totalQuestions = Object.keys(quiz).length;

questionCard.classList.add('question-card');
timeOverEl.src = "assets/img/time-is-over.png";
timeOverEl.alt = "Time is Over Image";

let qn = 1;
let secondsLeft = 225;
let points = 0;
let timerInterval

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
    timerInterval = setInterval(function () {
        secondsLeft--;
        timeEl.textContent = `Time: ${secondsLeft}`;

        if (secondsLeft === 0) {
            // Stops execution of action at set interval
            clearInterval(timerInterval);
            timeOver();
        }
    }, 1000);
}

//Function to getQuestions
function getQuestion() {
    setTimeout(function () {
        if (qn > totalQuestions) {
            clearInterval(timerInterval);
            timeEl.classList.add("hide")
            scoreForm();
            return;
        }

        let question = quiz[`q${qn}`]['q'];
        let totalAnswers = Object.keys(quiz[`q${qn}`]['ans']).length;

        if (document.querySelector('.grade')) questionCard.removeChild(gradeEl);

        questionEl.textContent = question;

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
        points = points + 10;
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

//timeOver function when time runs out elements are removed and replace for time over image
function timeOver() {
    setTimeout(function () {
        questionCard.removeChild(gradeEl);
        questionCard.removeChild(questionEl);
        questionCard.removeChild(answerList);
        questionCard.appendChild(timeOverEl);
    }, 1000);

    scoreForm();
}

//setScore function to set user score
function scoreForm(event) {
    quizSection.classList.add("hide")
    scoreSection.classList.remove("hide")
    scoreEl.textContent = `Your total score is ${points} of 150 possible`
}

function storeScore(event) {
    event.preventDefault();

    let score = {
        initials: initialsInputEl.value,
        totalPoints: points
    };

    localStorage.setItem("quizScore", JSON.stringify(score));

    getScores();
}

//getScores function if there are scores stored are going to be shown in a link
function getScores() {
    let lastScore = JSON.parse(localStorage.getItem("quizScore"));
    if (lastScore !== null) {
       
    }
}

//On Start Quiz clicked
getScoresBtn.addEventListener("click", getScores);
startBtn.addEventListener("click", startQuiz);
saveScoreBtn.addEventListener("click", storeScore);