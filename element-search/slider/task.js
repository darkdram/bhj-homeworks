class  Slider {
    constructor(element) {
        this.root = element;
        let sliders = this.root.querySelectorAll('.slider__item');
        this.sliders = [...sliders];
        this.nav = [...this.root.querySelectorAll('.slider__dot')];
        this.slidersCount = this.sliders.length;
        this.sliders.forEach((slider, index) => {
            if (slider.classList.contains('slider__item_active')) {
                this.currentSlide = index;
            }
        });

        this.root.querySelector('.slider__arrow_prev').addEventListener('click', (e) => {
            this.prevSlide();
        });

        this.root.querySelector('.slider__arrow_next').addEventListener('click', (e) => {
            this.nextSlide();
        });

        this.nav.forEach((element, index) => {
           element.addEventListener('click', () => {
               this.showSlide(index)
           });
        });

        // console.log(element, this.sliders, this.nav);

        this.showSlide(this.currentSlide);
    }

    showSlide(index) {
        this.sliders[this.currentSlide].classList.remove('slider__item_active');
        this.nav[this.currentSlide].classList.remove('slider__dot_active');

        // console.log(this.currentSlide, index);

        this.sliders[index].classList.add('slider__item_active');
        this.nav[index].classList.add('slider__dot_active');

        this.currentSlide = index;
    }

    nextSlide() {
        let newSlideIndex = this.currentSlide + 1;

        if (newSlideIndex == this.slidersCount) {
            newSlideIndex = 0;
        }

        this.showSlide(newSlideIndex);
    }

    prevSlide() {
        let newSlideIndex = this.currentSlide - 1;

        if (newSlideIndex == -1) {
            newSlideIndex = this.slidersCount - 1;
        }

        this.showSlide(newSlideIndex);
    }
}

new Slider(document.querySelector('.slider'));