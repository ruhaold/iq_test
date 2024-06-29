const refs = {
  timer: document.querySelector('.result__timer'),
  time: document.querySelector('.result__time'),
  button: document.querySelector('.result__call-button'),
};

const count = 10;
let countdown = null;

export function countDown(started) {
  if (!started) return;

  const startTime = new Date();
  const stopTime = startTime.setMinutes(startTime.getMinutes() + count);

  countdown = setInterval(() => {
    const now = new Date().getTime();
    const remain = stopTime - now;

    let min = Math.floor((remain % (1000 * 60 * 60)) / (1000 * 60));
    let sec = Math.floor((remain % (1000 * 60)) / 1000);

    if (min === 0) {
      refs.time.innerHTML = 'секунд';
    }

    min = min < 10 ? '0' + min : min;
    sec = sec < 10 ? '0' + sec : sec;

    refs.timer.innerHTML = min + ':' + sec;

    if (remain < 0) {
      clearInterval(countdown);
    }
  }, 1000);
}

refs.button.addEventListener('click', () => {
  clearInterval(countdown);
});
