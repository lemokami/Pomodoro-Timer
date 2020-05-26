const watch = document.querySelector(".timer");
const btn = document.querySelector(".start");

//other
watch.innerText = "00:06";
// Listeners
btn.addEventListener("click", () => {
  let time = 0.1 * 60;
  btn.disabled = true;
  const timer = setInterval(() => {
    time--;
    if (time <= 0) {
      btn.disabled = false;
      clearInterval(timer);
    }
    let hour = Math.floor(time / 60);
    hour = hour >= 10 ? hour : "0" + hour;
    let sec = Math.floor(time % 60);
    sec = sec >= 10 ? sec : "0" + sec;

    console.log(`${hour}:${sec}`);

    watch.innerText = `${hour}:${sec}`;
  }, 1000);
  watch.innerText = "00:06";
});
