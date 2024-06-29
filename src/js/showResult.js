import { countDown } from './timer';

const refs = {
  main: document.querySelector('.main-content'),
  result: document.querySelector('.result'),
  test: document.querySelector('.test'),
  headerTitle: document.querySelector('.header__title'),
};

export const showResult = () => {
  refs.main.classList.add('is-none');
  refs.test.classList.add('is-none');
  refs.result.classList.remove('is-none');
  refs.headerTitle.textContent = 'Готово!';
  refs.headerTitle.style.fontSize = '20px';

  countDown(true);
};
