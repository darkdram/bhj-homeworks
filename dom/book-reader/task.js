let controls = document.querySelectorAll('.book__control'),
    book = document.querySelector('.book ');

function returnClass(prop, color) {
    let newClass = '';

    if (prop == 'font') {
        switch (color) {
            case 'small':
                newClass = 'book_fs-small';
                break;
            case 'big':
                newClass = 'book_fs-big';
                break;
            default:
                newClass = ''
        }
    } else if (prop == 'color') {
        switch (color) {
            case 'gray':
                newClass = 'book_color-gray';
                break;
            case 'whitesmoke':
                newClass = 'book_color-whitesmoke';
                break;
            case 'black':
                newClass = 'book_color-black';
                break;
        }
    } else if (prop == 'background') {
        switch (color) {
            case 'gray':
                newClass = 'book_bg-gray';
                break;
            case 'white':
                newClass = 'book_bg-white';
                break;
            case 'black':
                newClass = 'book_bg-black';
                break;
        }
    }

    return newClass;
}


[...controls].forEach((controlGroup) => {
    let activeClass,
        attribute,
        type;

    if (controlGroup.classList.contains('book__control_font-size')) {
        activeClass = 'font-size_active';
        attribute = 'data-size';
        type = 'font';
    } else if (controlGroup.classList.contains('book__control_color')) {
        activeClass = 'color_active';
        attribute = 'data-text-color';
        type = 'color';
    } if (controlGroup.classList.contains('book__control_background')) {
        activeClass = 'color_active';
        attribute = 'data-bg-color';
        type = 'background';
    }

    let activeButtonSelector = '.book__control .' + activeClass,
        switchButtonsSelector = '.book__control a',
        switchButtons = controlGroup.querySelectorAll(switchButtonsSelector);

    [...switchButtons].forEach((button) => {
        button.addEventListener('click', event => {
            event.preventDefault();
            let active = controlGroup.querySelector(activeButtonSelector);
            if (active !== button) {
                let lastSize = active.getAttribute(attribute),
                    newSize = button.getAttribute(attribute),
                    lastClass = returnClass(type, lastSize),
                    newClass = returnClass(type, newSize);

                active.classList.remove(activeClass);
                button.classList.add(activeClass);

                if (lastClass) {
                    book.classList.remove(lastClass);
                }

                if (newClass) {
                    book.classList.add(newClass);
                }
            }
        });
    });

});