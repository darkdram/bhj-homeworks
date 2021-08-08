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
            // prevent reload page after click on link from list for testing multiple dropdowns
            // Array.from(sibling.querySelectorAll('a')).forEach((link) => {
            //     link.onclick = function (e) {
            //         e.preventDefault();
            //     }
            // });

            sibling.classList.toggle('dropdown__list_active');
        }
    };
});
