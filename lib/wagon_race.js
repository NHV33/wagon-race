// TODO: write your code here

const resetButton = document.querySelector(".play-again");

const p1Progress = document.getElementById("p1-progress");
const p2Progress = document.getElementById("p2-progress");
p1Progress.style.width = "15%";
p2Progress.style.width = "15%";

let finished = false;

resetButton.addEventListener('click', () => {
  window.location.reload();
});

const declareWinner = (elem) => {
  const player = elem.attributes.player.value;
  console.log(elem);
  if (!finished) {
    finished = true;
    const winMessage = elem.parentElement.querySelector(".win-message");
    winMessage.style.visibility = "visible";
  }
  resetButton.style.visibility = "visible";
};

const winPercent = 95;

const incrementProgress = (elem) => {
  if (finished) { return; }
  elem.style.visibility = "visible";
  const moveAmount = 1;
  const progress = parseInt(elem.style.width, 10);
  elem.style.width = `${progress + moveAmount}%`;
  // console.log(elem, progress);
  if (progress + moveAmount >= winPercent) {
    declareWinner(elem);
  }
};

document.addEventListener("keyup", (event) => {
  switch (event.key) {
    case "1":
      incrementProgress(p1Progress);
      break;
    case "0":
      incrementProgress(p2Progress);
      break;
    default:
      console.log('other key');
  }
});
