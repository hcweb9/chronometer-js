window.addEventListener("DOMContentLoaded", (event) => {
  // minutes and seconds counters' variables

  let chronoMin = document.querySelector(".chrono__min");

  let chronoSec = document.querySelector(".chrono__sec");

  // buttons selection variables

  let btnStart = document.querySelector(".layout__btn-start");

  let btnStop = document.querySelector(".layout__btn-stop");

  let btnReset = document.querySelector(".layout__btn-reset");

  // minutes and seconds counter variables, time variable

  let minutes = 0;
  let seconds = 0;
  let time = null;

  // start chronometer function

  let start = () => {
    if (!time) {
      time = setInterval(() => {
        seconds++;

        if (seconds == 60) {
          minutes++;
          seconds = 0;
        }

        if (minutes >= 60) {
          alert("You have exceeded the 60 minute time limit!");
          clearInterval(time);

          minutes = 0; // Reset minutes after exceeding limit
          seconds = 0; // Reset seconds after exceeding limit
          chronoMin.innerHTML = "00"; // Reset display to 00:00
          chronoSec.innerHTML = "00";
        }

        // adding 0 for the first 10 sec and min

        if (seconds < 10) {
          chronoSec.innerHTML = "0" + seconds;
        } else {
          chronoSec.innerHTML = seconds;
        }

        if (minutes < 10) {
          chronoMin.innerHTML = "0" + minutes;
        } else {
          chronoMin.innerHTML = minutes;
        }
      }, 1000);
    }
  };

  // start button
  btnStart.addEventListener("click", () => {
    start();
  });

  // stop button

  btnStop.addEventListener("click", () => {
    if(time){
        clearInterval(time);
        time = null;
    }
  });

    // Reset button
    btnReset.addEventListener("click", () => {
        if (time) {
          clearInterval(time); // Stop timer if running
          time = null;
        }
        minutes = 0; // Reset minutes
        seconds = 0; // Reset seconds
        chronoMin.innerHTML = "00"; // Reset display to 00:00
        chronoSec.innerHTML = "00";
      });

});
