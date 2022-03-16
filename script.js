// global constants
const cluePauseTime = 333; //how long to pause in between clues
const nextClueWaitTime = 1000; //how long to wait before starting playback of the clue sequence

//Global Variables
var clueHoldTime = 1000;
var pattern = new Array();
var progress = 0;
var mistakes = 0;
var timerRunning = false;
var gamePlaying = false;
var tonePlaying = false;
var volume = 0.5; //must be between 0.0 and 1.0
var guessCounter = 0;
var length = 4;
var mode = 1;
var myTimer;
document.getElementById("timer").innerHTML = "00:";
function selection(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function startGame() {
  //initialize game variables
  progress = 0;
  mistakes = 0;
  gamePlaying = true;
  showHearts();
  clueHoldTime = 1000;
  //playMyAudio("letsGo");
  //randomizing the pattern
  for (let i = 0; i <= 8; i++) {
    pattern[i] = selection(1, length);
    console.log(pattern[i]);
  }
  console.log(pattern);
  // swap the Start and Stop buttons
  document.getElementById("startBtn").classList.add("hidden");
  document.getElementById("stopBtn").classList.remove("hidden");
  playClueSequence();
}

function stopGame() {
  //initialize game variables
  gamePlaying = false;
  stopTimer();
  clueHoldTime = 1000;
  // swap the Start and Stop buttons
  document.getElementById("stopBtn").classList.add("hidden");
  document.getElementById("startBtn").classList.remove("hidden");
}

function lightButton(btn) {
  document.getElementById("button" + btn).classList.add("lit");
}
function clearButton(btn) {
  document.getElementById("button" + btn).classList.remove("lit");
}

function playSingleClue(btn) {
  if (gamePlaying) {
    lightButton(btn);
    playTone(btn, clueHoldTime);
    setTimeout(clearButton, clueHoldTime, btn);
  }
}

function playClueSequence() {
  stopTimer();
  guessCounter = 0;
  clueHoldTime -= 75;
  context.resume();
  let delay = nextClueWaitTime; //set delay to initial wait time
  console.log("1");
  for (let i = 0; i <= progress; i++) {
    // for each clue that is revealed so far
    console.log("play single clue: " + pattern[i] + " in " + delay + "ms");
    setTimeout(playSingleClue, delay, pattern[i]); // set a timeout to play that clue
    delay += clueHoldTime;
    delay += cluePauseTime;
  }
  console.log("2");
  setTimeout(startTimer, delay - 1000);
}

function guess(btn) {
  console.log("user guessed: " + btn);
  if (!gamePlaying) {
    return;
  }
  // Game Logic
  if (btn != pattern[guessCounter]) {
    mistakes += 1;
    console.log("mistake");
    removeHeart(mistakes);
    if (mistakes == 3) {
      removeHeart(mistakes);
      loseGame();
    }
  } else {
    console.log("not a mistake");
    if (progress == guessCounter) {
      progress += 1;
      playClueSequence();
    } else {
      guessCounter += 1;
    }
  }
  if (progress == 8) {
    winGame();
  }
}

function winGame() {
  stopGame();
  alert("Congratulations. You win.");
}
function loseGame() {
  stopGame();
  alert("Game Over. You lost.");
}
function playMyAudio(audio) {
  console.log("play");
  document.getElementById(audio).play();
  setTimeout(pauseMyAudio(audio), 2000);
}
function pauseMyAudio(audio) {
  console.log("pause");
  document.getElementById(audio).pause();
}

function easyMode() {
  stopGame();
  document.getElementById("button5").classList.remove("visible");
  document.getElementById("button6").classList.remove("visible");
  document.getElementById("button7").classList.remove("visible");
  document.getElementById("button8").classList.remove("visible");
  length = 5;
  mode = 1;
}
function mediumMode() {
  stopGame();
  document.getElementById("button5").classList.add("visible");
  document.getElementById("button6").classList.add("visible");
  document.getElementById("button7").classList.remove("visible");
  document.getElementById("button8").classList.remove("visible");
  length = 6;
  mode = 2;
}

function hardMode() {
  stopGame();
  document.getElementById("button5").classList.add("visible");
  document.getElementById("button6").classList.add("visible");
  document.getElementById("button7").classList.add("visible");
  document.getElementById("button8").classList.add("visible");
  length = 8;
  mode = 3;
}

function showHearts() {
  document.getElementById("heart1").classList.remove("hidden");
  document.getElementById("heart2").classList.remove("hidden");
  document.getElementById("heart3").classList.remove("hidden");
}
function removeHeart(hrt) {
  console.log("mistake: " + hrt);
  if (!gamePlaying) {
    return;
  }
  document.getElementById("heart" + hrt).classList.add("hidden");
}
//timer

function startTimer() {
  if (gamePlaying){
    console.log("start Timer");
    var time = 15;
    myTimer = setInterval(function () {
      document.getElementById("timer").innerHTML = "00:" + time;
      document.getElementById("timer").classList.add("visible");
      time -= 1;

      // If the count down is over, write some text
      if (time < 0) {
        clearInterval(myTimer);
        loseGame();
      }
    }, 1000);
  }
}

function stopTimer() {
  document.getElementById("timer").classList.remove("visible");
  clearInterval(myTimer);
}

// Sound Synthesis Functions
const freqMap = {
  1: 200,
  2: 319.6,
  3: 400,
  4: 489.2,
  5: 570.1,
  6: 600,
  7: 700,
  8: 800,
};
function playTone(btn, len) {
  o.frequency.value = freqMap[btn];
  g.gain.setTargetAtTime(volume, context.currentTime + 0.05, 0.025);
  context.resume();
  tonePlaying = true;
  setTimeout(function () {
    stopTone();
  }, len);
}
function startTone(btn) {
  if (!tonePlaying) {
    context.resume();
    o.frequency.value = freqMap[btn];
    g.gain.setTargetAtTime(volume, context.currentTime + 0.05, 0.025);
    context.resume();
    tonePlaying = true;
  }
}
function stopTone() {
  g.gain.setTargetAtTime(0, context.currentTime + 0.05, 0.025);
  tonePlaying = false;
}

// Page Initialization
// Init Sound Synthesizer
var AudioContext = window.AudioContext || window.webkitAudioContext;
var context = new AudioContext();
var o = context.createOscillator();
var g = context.createGain();
g.connect(context.destination);
g.gain.setValueAtTime(0, context.currentTime);
o.connect(g);
o.start(0);
