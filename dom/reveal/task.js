window.addEventListener('scroll', (event) => {
    const revealElement = document.querySelector('.reveal');
    const revealBounding = revealElement.getBoundingClientRect();

    // if reveal element position located at half of screen viewport
    // then we show element
    if (revealBounding.top < window.outerHeight / 2 && revealBounding.top > -revealBounding.height) {
        if (!revealElement.classList.contains('reveal_active')) {
            revealElement.classList.add('reveal_active');
        }
    } else {
        // if element is not on the screen
        // then remove active class
        if (revealElement.classList.contains('reveal_active')) {
            revealElement.classList.remove('reveal_active');
        }
    }
});