let menu = document.querySelector('.menu_main');

[...menu.children].forEach((menuitem) => {
    let link = menuitem.querySelector('.menu__link');
    let submenu = menuitem.querySelector('.menu_sub');

    if (submenu) {
        link.addEventListener('click', (e) => {
            e.preventDefault();

            submenu.classList.toggle('menu_active');
        });
    }
});