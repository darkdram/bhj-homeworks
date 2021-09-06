const modal = document.querySelector('#subscribe-modal'),
    closeModal = document.querySelector('.modal__close');

closeModal.addEventListener('click', () => {
   sessionStorage.setItem('notOpenModal', 1);
    modal.classList.remove('modal_active');
});

if (sessionStorage.getItem('notOpenModal') != 1) {
    modal.classList.add('modal_active');
}