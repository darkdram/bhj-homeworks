const mainListElements = document.querySelectorAll('.interests_main > ul > li');

[...mainListElements].forEach((list) => {
    let elementCheckbox = list.querySelector('label input[type=checkbox]');
    let sublistElement = list.querySelector('.interests'),
        listCheckboxes = [...sublistElement.querySelectorAll('input[type=checkbox]')];

    elementCheckbox.addEventListener('change', (e) => {
        listCheckboxes.forEach((subcheckbox) => {
            subcheckbox.checked = e.target.checked;
        });
    });

    [...listCheckboxes].forEach((element) => {
        element.addEventListener('change', (e) => {
            let siblingsWrapper = element.parentElement.parentElement.parentElement;
            let siblingsArray = [...siblingsWrapper.querySelectorAll('input[type=checkbox]')];
            siblingsWrapper.parentElement.firstElementChild.firstElementChild.checked = siblingsArray.every(siblingCheckbox => siblingCheckbox.checked);
        });
    });
});
