'use strict';

import { questionsArr } from '../data.js';
import { createQuestionImg } from './createQuestionImg.js';
import { createQuestionChooseOne } from './createQuestionChooseOne.js';
import { createQuestionColor } from './createQuestionColor.js';
import { resultsProcessing } from './resultsProcessing.js';
import { showResult } from './showResult.js';

const dataResult = {};

const test = document.querySelector('.test');
const iqTest = document.querySelector('.iq-test__list');
const form = document.querySelector('.iq-test');
const nextBtn = document.querySelector('.test__btn-next');
const progressBar = document.querySelector('.progress');

let size = 100 / (questionsArr.length + 1);
progressBar.style.width = `${size}%`;

let curQuestion = 0;

function showQuestion() {
  if (curQuestion === questionsArr.length) {
    form.remove();
    test.insertAdjacentHTML('beforeend', resultsProcessing());
    setTimeout(() => {
      showResult();
    }, 3000);
    return;
  }

  if (questionsArr[curQuestion].type === 'choose-one') {
    iqTest.innerHTML = createQuestionChooseOne(questionsArr[curQuestion]);
    return;
  }

  if (questionsArr[curQuestion].type === 'data-figures') {
    iqTest.innerHTML = createQuestionImg(questionsArr[curQuestion]);
    return;
  }

  if (questionsArr[curQuestion].type === 'choose-color') {
    iqTest.innerHTML = createQuestionColor(questionsArr[curQuestion]);

    return;
  }
}

form.addEventListener('submit', nextQuestion);
form.addEventListener('change', getValue);

showQuestion();

function nextQuestion(event) {
  event.preventDefault();

  if (curQuestion === questionsArr.length - 1) {
    // nextBtn.classList.add('is-none');
    nextBtn.remove();
  }

  curQuestion += 1;

  showQuestion();
  size += 100 / (questionsArr.length + 1);
  progressBar.style.width = `${size}%`;

  nextBtn.setAttribute('disabled', 'disabled');
}

let curValue = null;

function getValue(event) {
  if (event.target.hasAttribute('data-color')) {
    nextBtn.removeAttribute('disabled');
    dataResult[event.target.name] = event.target.value;
    return;
  }

  if (event.target.checked) {
    nextBtn.removeAttribute('disabled');
    dataResult[event.target.name] = event.target.value;
    event.target.parentNode.style.backgroundColor = '#FFC700';
    event.target.parentNode.style.color = '#272727';
  }

  if (
    event.target.parentNode.classList.contains('iq-test__label') &&
    curValue !== null &&
    curValue !== event.target
  ) {
    curValue.parentNode.style.backgroundColor = 'rgba(242, 243, 243, 0.15)';
    curValue.parentNode.style.color = '#ffffff';
  }

  curValue = event.target;
  // console.log(dataResult);
}
