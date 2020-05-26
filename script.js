const watch = document.querySelector(".timer");
const btn = document.querySelector(".start");

//other
watch.innerText = "25:00";

// Listeners
btn.addEventListener("click", () => {
  let time = 25 * 60;
  btn.classList.toggle("disabled");
  btn.disabled = true;
  const timer = setInterval(() => {
    if (time <= 0) {
      btn.classList.toggle("disabled");
      btn.disabled = false;
      clearInterval(timer);
      watch.innerText = "25:00";
      return 0;
    }
    time--;
    let hour = Math.floor(time / 60);
    hour = hour >= 10 ? hour : "0" + hour;
    let sec = Math.floor(time % 60);
    sec = sec >= 10 ? sec : "0" + sec;

    console.log(`${hour}:${sec}`);

    watch.innerText = `${hour}:${sec}`;
  }, 1000);
});
