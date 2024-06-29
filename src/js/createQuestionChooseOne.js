export function createQuestionChooseOne(obj) {
  const variants = obj.answers.value.map(el => {
    return `<label class="iq-test__label">
      <input type="radio" name="${obj.answers.name}" value="${Object.keys(
      el
    ).join()}" class="iq-test__input" data-figure />${Object.values(el).join()}
    </label>`;
  });

  return `<li class="iq-test__item">
    <p class="iq-test__question">${obj.question}</p>

${
  obj.image
    ? ` <div class="iq-test__image-container">
    <img src='${obj.image.src}' alt='${obj.image.alt}' class="iq-test__image" />
    </div> `
    : ''
}

    <div class="iq-test__label-container">${variants.join('')}</div>
  </li>`;
}
