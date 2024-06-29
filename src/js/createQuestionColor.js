export function createQuestionColor(obj) {
  console.log(obj.answers.value);
  const variants = obj.answers.value.map(el => {
    return `<label class="iq-test__label--color">
      <input type="radio" name="${obj.answers.name}" value="${Object.keys(
      el
    ).join()}" class="iq-test__input--color" style="background-color: ${Object.values(
      el
    ).join()}" data-color />
    </label>`;
  });

  return `<li class="iq-test__item">
    <p class="iq-test__question">${obj.question}</p>

    <div class="iq-test__label--color-container">${variants.join('')}</div>
  </li>`;
}
