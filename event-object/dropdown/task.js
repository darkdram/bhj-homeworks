let dropdownAll = document.querySelectorAll('.dropdown');

Array.from(dropdownAll).forEach((dropdown) => {
    dropdown.querySelector('.dropdown__value').onclick = function() {
        let activeList = document.querySelector('.dropdown__list_active'),
            sibling = this.nextElementSibling;

        // hide active list if any dropdown is opened
        if (activeList && activeList !== sibling) {
            activeList.classList.remove('dropdown__list_active');
        }

        // toggle visibility if next sibling is dropdown list
        if (sibling && sibling.classList.contains('dropdown__list')) {
            sibling.classList.toggle('dropdown__list_active');
        }
    };

    // prevent reload page after click on link from list for testing multiple dropdowns
    Array.from(dropdown.querySelectorAll('.dropdown__list a')).forEach((link) => {
        link.onclick = function (e) {
            // prevent click event after click on the link
            e.preventDefault();
            let dropdown_parent;
            if (dropdown_parent = link.parentElement?.parentElement?.parentElement) { // if
                let dropdown_value = dropdown_parent.querySelector('.dropdown__value')
                if (dropdown_value) {
                    dropdown_value.textContent = e.target.textContent.trim()
                    // close dropdown after change value
                    dropdown_value.dispatchEvent(new Event('click'))
                    // dropdown_value.click() // dispatch click event
                }
            }
        }
    });
});
