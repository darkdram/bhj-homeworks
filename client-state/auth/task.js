const signInButton = document.querySelector('#signin__btn'),
    singInForm = document.querySelector('#signin'),
    welcomeModal = document.querySelector('#welcome');

const xhr = new XMLHttpRequest();

function welcome() {
    singInForm.classList.remove('signin_active');
    welcomeModal.querySelector('#user_id').textContent = localStorage.getItem('userId');
    welcomeModal.classList.add('welcome_active');
}

function signIn() {
    singInForm.classList.add('signin_active');
    welcomeModal.classList.remove('welcome_active');
}

console.log(localStorage.getItem('userId'));

if (localStorage.getItem('userId')) {
    welcome();
}

signInButton.addEventListener('click', (event) => {
    event.preventDefault();

    let form = document.querySelector('#signin__form');

    let formData = new FormData(form),
        formAction = form.getAttribute('action');

    xhr.open('POST', formAction);
    // xhr.responseType = 'json';
    // ошибка Uncaught DOMException: Failed to read the 'responseText' property from 'XMLHttpRequest':
    // The value is only accessible if the object's 'responseType' is '' or 'text' (was 'json').

    xhr.addEventListener('load', (event) => {
        if (xhr.readyState === 4 && xhr.status === 200) {
            let response = JSON.parse(xhr.responseText);
            if(response.success) {
                localStorage.setItem('userId', response.user_id);
                welcome();
            } else {
                alert('Неверные логин/пароль');
            }
        }
    });

    xhr.send(formData);
});

document.querySelector('#signout__btn').addEventListener('click', (event) => {
    delete localStorage.userId;
    signIn();
});


