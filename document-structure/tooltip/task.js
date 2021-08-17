let tooltipsButtons = document.querySelectorAll('.has-tooltip');

[...tooltipsButtons].forEach((tooltipButton, index) => {
    tooltipButton.addEventListener('click', (e) => {
        e.preventDefault();

        let letUnderElementPosition = e.target.offsetTop + e.target.offsetHeight,
            offsetTop =  letUnderElementPosition - window.scrollY, // calculate tooltip position considering window Y scroll
            offsetLeft = e.target.offsetLeft;

        let _target = e.target;
        let uniqId = 'tooltip-id-' + index,
            findExistedElement;

        // protect to creating 2 or more tooltipes for 1 button
        if (findExistedElement = document.querySelector('#' + uniqId)) {
            findExistedElement.remove(); // hide tooltip if shown
        } else {
            let otherTooltip;
            if (otherTooltip = document.querySelector('.tooltip')) {
                otherTooltip.remove(); // remove existed tooltip of another buttons
            }

            let tooltipElement = document.createElement('div');
            tooltipElement.classList.add('tooltip');
            tooltipElement.classList.add('tooltip_active');
            tooltipElement.style.top = offsetTop + 'px';
            tooltipElement.style.left = offsetLeft + 'px';
            tooltipElement.id = uniqId;
            tooltipElement.textContent = tooltipButton.getAttribute('title');
            tooltipButton.insertAdjacentElement('afterEnd', tooltipElement);
        }
   });
});