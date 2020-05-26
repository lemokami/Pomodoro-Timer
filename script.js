const watch = document.querySelector(".timer");
const btn = document.querySelector(".start");
const icon = document.querySelector(".fas");
let timerId;
//other
watch.innerText = "25:00";

// Listeners
btn.addEventListener("click", () => {
  icon.classList[1] === "fa-chevron-right" ? startTime() : endTime();
});

//functions
const startTime = () => {
  let time = 25 * 60;
  icon.classList.toggle("fa-chevron-right");
  icon.classList.toggle("fa-stop");
  timerId = setInterval(() => {
    time--;
    let hour = Math.floor(time / 60);
    hour = hour >= 10 ? hour : "0" + hour;
    let sec = Math.floor(time % 60);
    sec = sec >= 10 ? sec : "0" + sec;

    console.log(`${hour}:${sec}`);

    watch.innerText = `${hour}:${sec}`;
    if (time <= 0) {
      endTime();
    }
  }, 1000);
};

const endTime = () => {
  console.log("End time()");
  clearInterval(timerId);
  watch.innerText = "25:00";
  icon.classList.toggle("fa-chevron-right");
  icon.classList.toggle("fa-stop");
};
