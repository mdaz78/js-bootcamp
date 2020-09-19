function isTouching(a, b) {
  const aRect = a.getBoundingClientRect();
  const bRect = b.getBoundingClientRect();

  return !(
    aRect.top + aRect.height < bRect.top ||
    aRect.top > bRect.top + bRect.height ||
    aRect.left + aRect.width < bRect.left ||
    aRect.left > bRect.left + bRect.width
  );
}

const avatar = document.querySelector("#player");
const coin = document.querySelector("#coin");

window.addEventListener("keyup", function (e) {
  switch (e.keyCode) {
    case 40:
      move.down();
      break;

    case 38:
      move.up();
      break;

    case 37:
      move.left();
      break;

    case 39:
      move.right();
      break;

    default:
      break;
  }

  if (isTouching(avatar, coin)) {
    move.coin();
  }
});

const extractPos = (pos) => {
  if (!pos) return 100;
  return parseInt(pos.slice(0, -2));
};

const move = {
  left() {
    const currentLeft = extractPos(avatar.style.left);
    avatar.style.left = `${currentLeft - 50}px`;
    avatar.style.transform = "scale(-1, 1)";
  },

  right() {
    const currentLeft = extractPos(avatar.style.left);
    avatar.style.left = `${currentLeft + 50}px`;
    avatar.style.transform = "scale(1, 1)";
  },

  up() {
    const currentTop = extractPos(avatar.style.top);
    avatar.style.top = `${currentTop - 50}px`;
  },

  down() {
    const currentTop = extractPos(avatar.style.top);
    avatar.style.top = `${currentTop + 50}px`;
  },

  coin() {
    const x = Math.floor(Math.random() * window.innerWidth);
    const y = Math.floor(Math.random() * window.innerHeight);
    coin.style.top = `${y}px`;
    coin.style.left = `${x}px`;
  },
};

move.coin();
