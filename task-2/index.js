let startTime;
let elapsedTime = 0;
let timerInterval;
let lapTimes = [];
let lapCount = 0;

function formatTime(milliseconds) {
  let hours = Math.floor(milliseconds / 3600000);
  let minutes = Math.floor((milliseconds % 3600000) / 60000);
  let seconds = Math.floor((milliseconds % 60000) / 1000);
  return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
}
function startTimer() {
  if (!timerInterval) { 
    startTime = Date.now() - elapsedTime;
    timerInterval = setInterval(() => {
      elapsedTime = Date.now() - startTime;
      document.querySelector('.display').textContent = formatTime(elapsedTime);
    }, 10);
  }
}

function pauseTimer() {
  clearInterval(timerInterval);
  timerInterval = null; 
}
function resetTimer() {
  clearInterval(timerInterval);
  timerInterval = null; 

  elapsedTime = 0;
  lapTimes = [];
  lapCount = 0;
  document.querySelector('.display').textContent = '00:00:00';
  document.getElementById('lap-times').innerHTML = '';
}
function recordLap() {
  lapCount++;
  lapTimes.push(elapsedTime);
  let lapItem = document.createElement('li');
  lapItem.textContent = `Lap ${lapCount}: ${formatTime(elapsedTime)}`;
  document.getElementById('lap-times').appendChild(lapItem);
}


document.getElementById('start').addEventListener('click', startTimer);
document.getElementById('pause').addEventListener('click', pauseTimer);
document.getElementById('reset').addEventListener('click', resetTimer);
document.getElementById('lap').addEventListener('click', recordLap);