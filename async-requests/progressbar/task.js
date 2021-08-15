let progress = document.querySelector('#progress'),
    form = document.forms.form;

form.addEventListener('submit', (e) => {
    let formData = new FormData(),
        file = form.file.files[0];
    formData.append('file', file);

    let xhr = new XMLHttpRequest();
    xhr.open('POST', form.action);
    xhr.upload.addEventListener('progress', (e) => {
        progress.value = e.loaded / e.total;
    });
    xhr.send(formData);

    e.preventDefault();
});