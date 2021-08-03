let _dead = document.querySelector('#dead'),
    _lost = document.querySelector('#lost'),
    _deadCounter = parseInt(_dead.textContent),
    _lostCounter = parseInt(_lost.textContent);

let holes = document.querySelectorAll('.hole');

holes.forEach(function(currentElement) {
    currentElement.onclick = function() {
        if (this.className.indexOf('hole_has-mole') !== -1) {
            _deadCounter++;
        } else {
            _lostCounter++;
        }
    
        _dead.textContent = _deadCounter;
        _lost.textContent = _lostCounter;
    };
});
