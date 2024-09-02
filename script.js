let timer;
    let seconds = 0;
    let minutes = 0;
    let hours = 0;

    function startStopwatch() {
      if (!timer) {
        timer = setInterval(updateTime, 1000);
      }
    }

    function pauseStopwatch() {
      clearInterval(timer);
      timer = null;
    }

    function resetStopwatch() {
      clearInterval(timer);
      timer = null;
      seconds = -1;
      minutes = 0;
      hours = 0;
      updateTime();
    }

    function updateTime() {
      seconds++;
      if (seconds === 60) {
        seconds = 0;
        minutes++;
        if (minutes === 60) {
          minutes = 0;
          hours++;
        }
      }

      const timeString = `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
      document.getElementById('time').innerText = timeString;
    }

    function pad(value) {
      return value < 10 ? `0${value}` : value;
    }