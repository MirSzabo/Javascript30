//https://www.youtube.com/watch?v=dlEPkLSDQi0&t=247s

const questions = [
    {
        question: "What you will eat for christmas dinner?",
        options: ["Pizza", "Spagethy"],
        answer: "Pizza"
    },
    {
        question: "How your christmas tree will look like?",
        options: ["img1", "img2"],
        answer: "img1"
    },
    {
        question: "Did you enjoy this quiz?",
        options: ["Yes, I love to procastinate!", "Seriously?"],
        answer: "Yes, I love to procastinate!"
    }
]

let questionNumber = 0;
let correct = 0;

document.addEventListener("DOMContentLoaded", () => {
    loadQuestion();
});

function loadQuestion() {
    document.querySelector("#question").innerHTML = questions[questionNumber].question;
    const options = document.querySelector("#options");
    options.innerHTML = "";
   for(const option of questions[questionNumber].options){
    options.innerHTML += `<button class="option">${option}</button>`;
   }

   document.querySelectorAll(".option").forEach(option => {
        option.onclick = () => {
            alert(option.textContent);
        }
   })
}

let timer = new Timer();
timer.start();
timer.addEventListener('secondsUpdated', function (e) {
    $('#basicUsage').html(timer.getTimeValues().toString());
});
         