import confetti from "canvas-confetti";

const myCanvas = document.createElement("canvas");
myCanvas.style.width = "100vw";
myCanvas.style.height = "100vh";
myCanvas.style.position = "fixed";
myCanvas.style.inset = 0;
myCanvas.style.zIndex = -10;

document.body.append(myCanvas);

const confettiBtn = document.getElementById("confettiBtn");

confettiBtn.addEventListener("click", () => {
  const myConfetti = confetti.create(myCanvas, {
    resize: true,
    useWorker: true,
  });

  myConfetti({
    particleCount: 100,
    spread: 160,
  });
});

const ltime = document.getElementById("ltime");

function localTime() {
  const d = new Date();
  let hour = d.getHours();
  let minutes = d.getMinutes();
  const second = d.getSeconds();

  // Check whether AM or PM
  let newformat = hour >= 12 ? "PM" : "AM";

  // Find current hour in AM-PM Format
  hour = hour % 12;

  // To display "0" as "12"
  hour = hour ? hour : 12;
  minutes = minutes < 10 ? "0" + minutes : minutes;

  ltime.textContent = `${hour}:${minutes}:${second} ${newformat}`;
}

setInterval(localTime, 1000);
