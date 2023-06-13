window.onload = () => {
  document.querySelector("#calculate").onclick = calculate;
  document.querySelector("#reset").onclick = resetTimer;
};

const calculate = () => {
  const date = document.querySelector("#date").value;
  const time = document.querySelector("#time").value;

  const stop = document.querySelector("#stop");

  const endTime = new Date(date + " " + time);

  const intervel = setInterval(() => calculateTime(endTime), 1000);

  stop.addEventListener("click", () => {
    clearInterval(intervel);
  });
};

const calculateTime = (endTime) => {
  const currentTime = new Date();

  const days = document.querySelector("#days");
  const hours = document.querySelector("#hours");
  const minutes = document.querySelector("#minutes");
  const seconds = document.querySelector("#seconds");

  if (endTime > currentTime) {
    const timeLeft = (endTime - currentTime) / 1000;

    const day = Math.floor(timeLeft / (3600 * 24));
    const hour = Math.floor((timeLeft / 3600) % 24);
    const minute = Math.floor((timeLeft / 60) % 60);
    const second = Math.floor(timeLeft % 60);

    seconds.style.color = "aqua";

    days.innerText = day;
    hours.innerText = hour;
    minutes.innerText = minute;
    seconds.innerText = second;
  }
};

const resetTimer = () => {
  document.querySelector("#days").innerText = 0;
  document.querySelector("#hours").innerText = 0;
  document.querySelector("#minutes").innerText = 0;
  document.querySelector("#seconds").innerText = 0;
};
