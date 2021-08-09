class Rotator {
    constructor(rotatorElement) {
        this.elements = [...rotatorElement.querySelectorAll('.rotator__case')];

        this.elements.forEach((element) => {
            element.style.color = element.getAttribute('data-color');
        });

        this.currentSlide = 0;
        this.timeout = null;

        this.nextSlide()
    }

    nextSlide() {
        this.elements[this.currentSlide].classList.remove('rotator__case_active')

        this.currentSlide++;
        if (this.currentSlide == this.elements.length) {
            this.currentSlide = 0;
        }

        this.elements[this.currentSlide].classList.add('rotator__case_active')

        const time = this.elements[this.currentSlide].getAttribute('data-speed');
        this.timeout = setTimeout(() => {
            this.nextSlide();
        }, time);
    }
};

new Rotator(document.querySelector('.rotator'));