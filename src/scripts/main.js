'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

wall.style.position = 'relative';
spider.style.position = 'absolute';

document.addEventListener('click', (e) => {
  const wallRect = wall.getBoundingClientRect();

  const currentPosition = {
    x: e.clientX - wallRect.left - wall.clientLeft,
    y: e.clientY - wallRect.top - wall.clientTop,
  };

  const isClickInsideWall =
    currentPosition.x >= 0 &&
    currentPosition.x <= wall.clientWidth &&
    currentPosition.y >= 0 &&
    currentPosition.y <= wall.clientHeight;

  if (!isClickInsideWall) {
    return;
  }

  let x = currentPosition.x - spider.offsetWidth / 2;
  let y = currentPosition.y - spider.offsetHeight / 2;

  x = Math.max(0, Math.min(x, wall.clientWidth - spider.offsetWidth));
  y = Math.max(0, Math.min(y, wall.clientHeight - spider.offsetHeight));

  spider.style.left = `${x}px`;
  spider.style.top = `${y}px`;
});
