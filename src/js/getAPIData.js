const refs = {
  button: document.querySelector('.result__call-button'),
  container: document.querySelector('.api-data'),
};

refs.button.addEventListener('click', showData);

function showData() {
  refs.container.classList.remove('is-none');
  refs.container.innerHTML = `<div class="loader-container"><span class="loader"></span></div>`;
  getData()
    .then(obj => {
      renderUserList(obj);
    })
    .catch(error => console.log(error));
}

function getData() {
  return fetch('https://swapi.dev/api/people/1/').then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  });
}

function renderUserList(obj) {
  const info = `
          <p class="api-data__text"><b>Имя</b>: ${obj.name}</p>
          <p class="api-data__text"><b>Рост</b>: ${obj.height}</p>
          <p class="api-data__text"><b>Вес</b>: ${obj.mass}</p>
          <p class="api-data__text"><b>Пол</b>: ${obj.gender}</p>
        `;

  refs.container.innerHTML = info;
}
