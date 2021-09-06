if (!sessionStorage.text) {
    sessionStorage.setItem('text', '');
}

const editor = document.querySelector('#editor');

editor.value = sessionStorage.getItem('text');

editor.addEventListener('keyup', (event) => {
   sessionStorage.setItem('text', editor.value);
});