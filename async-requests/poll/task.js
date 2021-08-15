let pollUrl = 'https://netology-slow-rest.herokuapp.com/poll.php';

let xhr = new XMLHttpRequest();
xhr.open('GET', pollUrl);
xhr.send();

xhr.onreadystatechange = () => {
    let pollTitleElement = document.querySelector('#poll__title'),
        pollAnswersElement = document.querySelector('#poll__answers');

    if (xhr.readyState === 4) {
        let response = JSON.parse(xhr.responseText);

        pollTitleElement.textContent = response.data.title;
        response.data.answers.forEach((answer) => {
            let newButtonElement = document.createElement('button');
            newButtonElement.classList.add('poll__answer');
            newButtonElement.textContent = answer;
            newButtonElement.onclick = () => {
              alert('Спасибо, ваш голос засчитан!');
            };
            pollAnswersElement.appendChild(newButtonElement);
        });
    }
};
