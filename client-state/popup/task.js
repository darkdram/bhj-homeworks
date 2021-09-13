const modal = document.querySelector('#subscribe-modal'),
    closeModal = document.querySelector('.modal__close');

const getCookie = (name) => {
    const value = "; " + document.cookie;
    let parts=value.split("; " + name + "=");
    if(parts.length === 2) {
        return parts.pop().split(";").shift();
    }
};

closeModal.addEventListener('click', () => {
    document.cookie = 'notOpenModal=1';
    modal.classList.remove('modal_active');
});

let notOpenModal = getCookie('notOpenModal');

if (notOpenModal !== "1") {
    modal.classList.add('modal_active');
}