//https://www.youtube.com/watch?v=LAaf7-WuJJQ
let countdown;
const timerDisplay = document.querySelector(".displayTimeLeft");
const endTime = document.querySelector(".displayEndTime");
const buttons = document.querySelectorAll("[data-time]");

function timer(seconds) {
  //clear existing timer
  clearInterval(countdown);

  const now = Date.now();
  const then = now + seconds * 1000; //now is in milliseconds
  displayTimeLeft(seconds); //we run function once to get first number and then function continues

  countdown = setInterval(() => {
  const secondsLeft = Math.round((then - Date.now()) / 1000);
  //stop the interval
  if(secondsLeft < 0) {
    clearInterval(countdown);
    return;
  }
  //display it
displayTimeLeft(secondsLeft);

  }, 1000);
}

function displayTimeLeft(seconds) {
  const minutes = Math.floor(seconds / 60);
  const reminderSeconds = seconds % 60;
  const display = `${minutes}:${reminderSeconds < 10 ? "0" : ""} ${reminderSeconds}`; //we will have zero before seconds less than 10
  document.title = display;
  timerDisplay.textContent = display;
}

function displayEndTime(timestamp) {
  const end = new Date(timestamp);
  const hour = end.getHours();
  const minutes = end.getMinutes();
  endTime.textContent = `Be back at ${hour}:${minutes}`;
}
function startTimer() {
 const seconds = parseInt(this.dataset.time);
 timer(seconds);
}

buttons.forEach(button => button.addEventListener("click", startTimer));
document.customForm. addEventListener("submit", function (e) {
  e.preventDefault();
  const min = this.minutes.value;
  timer(mins * 60);
  this.reset();
})
timer(5);

