const calculateTime = () => {
  const time = new Date();

  // selecting the divs
  const hours = document.querySelector("#hour");
  const minutes = document.querySelector("#minute");
  const seconds = document.querySelector("#second");

  //getting time
  let hour = time.getHours() - 12;
  let minute = time.getMinutes();
  let second = time.getSeconds();

  //getting digits in double digits
  hour = hour < 10 ? "0" + hour : hour;
  minute = minute < 10 ? "0" + minute : minute;
  second = second < 10 ? "0" + second : second;

  //editing inner html to update time

  hours.innerText = hour;
  minutes.innerText = minute;
  seconds.innerText = second;
};

setInterval(() => calculateTime(), 1000);
