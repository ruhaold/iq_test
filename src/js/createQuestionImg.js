export function createQuestionImg(obj) {
  // console.log(obj.answers.value);
  const variants = obj.answers.value.map(el => {
    return `<label class="iq-test__label--figure">
      <input type="radio" name="${obj.answers.name}" value="${el}" class="iq-test__input--figure" data-figure />${el}
    </label>`;
  });

  return `<li class="iq-test__item">
    <p class="iq-test__question">${obj.question}</p>
    <div class="iq-test__img-container">
    <img src='${obj.image.src}' alt='${obj.image.alt}' class="iq-test__image" />
    </div>
     
    <div class="iq-test__label--figure-container">${variants.join('')}</div>
  </li>`;
}
