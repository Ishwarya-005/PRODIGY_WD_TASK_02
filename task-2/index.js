let startTime;
let elapsedTime = 0;
let timerInterval;

// Function to format time in HH:MM:SS format
function formatTime(milliseconds) {
  let hours = Math.floor(milliseconds / 3600000);
  let minutes = Math.floor((milliseconds % 3600000) / 60000);
  let seconds = Math.floor((milliseconds % 60000) / 1000);
  return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
}

// Function to start the timer
function startTimer() {
  if (!timerInterval) { // Prevent multiple intervals
    startTime = Date.now() - elapsedTime;
    timerInterval = setInterval(() => {
      elapsedTime = Date.now() - startTime;
      document.querySelector('.display').textContent = formatTime(elapsedTime);
    }, 10);
  }
}

// Function to pause the timer
function pauseTimer() {
  clearInterval(timerInterval);
  timerInterval = null; // Reset the interval variable
}

// Function to reset the timer
function resetTimer() {
  clearInterval(timerInterval);
  timerInterval = null; // Reset the interval variable
  elapsedTime = 0;
  document.querySelector('.display').textContent = '00:00:00';
}

// Add event listeners to buttons
document.getElementById('start').addEventListener('click', startTimer);
document.getElementById('pause').addEventListener('click', pauseTimer);
document.getElementById('reset').addEventListener('click', resetTimer);