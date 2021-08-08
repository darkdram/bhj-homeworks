let _dead = document.querySelector('#dead'),
    _lost = document.querySelector('#lost'),
    holes = document.querySelectorAll('.hole');

let game = {
    finishDeadCounter: 10,
    finishLostCounter: 5,
    deadCounter: 0,
    lostCounter: 0,
    congratzMessage: "Вы выиграли! :)",
    comfortingMessage: "Вы проиграли! :(",
    init: function() {
        this.resetStat();
    },
    resetStat: function() {
        this.deadCounter = 0;
        this.lostCounter = 0;

        this.updateScoreTable();
    },
    updateScoreTable: function() {
        _dead.textContent = this.deadCounter;
        _lost.textContent = this.lostCounter;
    },
    isEnd: function() {
        return this.deadCounter == this.finishDeadCounter || this.lostCounter == this.finishLostCounter;
    },
    finish: function () {
        let message = this.deadCounter == this.finishDeadCounter ? this.congratzMessage : this.comfortingMessage;
        alert(message);
        this.resetStat();
    }
};

game.init();

holes.forEach(function(currentElement) {
    currentElement.onclick = function() {
        if (this.classList.contains('hole_has-mole')) {
            game.deadCounter++;
        } else {
            game.lostCounter++;
        }

        game.updateScoreTable();

        if (game.isEnd()) {
            game.finish();
        }
    };
});
