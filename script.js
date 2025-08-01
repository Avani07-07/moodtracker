let lastTime = Date.now();
let lastKeyCount = 0;
let speed = 0;

const input = document.getElementById("inputBox");
const result = document.getElementById("result");
const fan = document.getElementById("fanLevel");

let keyCount = 0;

input.addEventListener("input", () => {
  keyCount++;
});

setInterval(() => {
    // Add spinning effect based on fan speed
fan.classList.remove("spin");
if (speed >= 1) {
  fan.classList.add("spin");
}
  const now = Date.now();
  const diff = (now - lastTime) / 1000;
  const typed = keyCount - lastKeyCount;
  speed = typed / diff;

  let mood = "", level = "";

  if (speed < 1) {
    mood = "😴 Sleepy - Fan Speed 1";
    level = "🌀";
  } else if (speed < 3) {
    mood = "😌 Chill - Fan Speed 2";
    level = "🌀🌀";
  } else if (speed < 5) {
    mood = "🧐 Focused - Fan Speed 3";
    level = "🌀🌀🌀";
  } else if (speed < 8) {
    mood = "😬 Tensed - Fan Speed 4";
    level = "🌀🌀🌀🌀";
  } else {
    mood = "😡 Angry - MAX Fan Speed 5!";
    level = "🌀🌀🌀🌀🌀";
  }

  result.textContent = mood;
  fan.textContent = level;

  lastTime = now;
  lastKeyCount = keyCount;
}, 1000);