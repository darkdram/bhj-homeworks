let mainModal = document.getElementById('modal_main'),
    successModal = document.getElementById('modal_success')

mainModal.className += ' modal_active' // показываем после загрузки страницы главное модальное окно

let modals = document.querySelectorAll('.modal');
modals.forEach(function(currentElement) {
    let closeButtons = currentElement.getElementsByClassName('modal__close');
    // добавляем обработчики закрытия модального окна для всех окон
    console.log(currentElement, closeButtons)
    for(let closeButtonIdx in closeButtons) {
        closeButtons[closeButtonIdx].onclick = function() {
            currentElement.className = 'modal'
            if(this.className.indexOf('show-success') !== -1) {
                successModal.className += ' modal_active'
            }
        }
    }
})