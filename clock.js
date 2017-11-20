const clockSection = document.getElementById("clock");

function getTime() {
  function display(number) {
    if (number < 10) {
      return "0" + number;
    } else {
      return number;
    }
  }

  const timeNow = new Date();

  const hour = display(timeNow.getHours());
  const minute = display(timeNow.getMinutes());
  const second = display(timeNow.getSeconds());

  return `${hour}:${minute}:${second}`;
}

function tickClock() {
  clockSection.textContent = getTime();
}

tickClock();
setInterval(tickClock, 1000);