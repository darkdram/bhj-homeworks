let _timerElement = document.querySelector('#timer');
    _timerDefaultValue = _timerElement.textContent;

let _timer = new Date(),
    _timeParts = _timerDefaultValue.split(':');

_timer.setHours(parseInt(_timeParts[0]));
_timer.setMinutes(parseInt(_timeParts[1]));
_timer.setSeconds(parseInt(_timeParts[2]));

let _intervalId = setInterval(() => {
    let _hours = _timer.getHours(),
        _minutes = _timer.getMinutes(),
        _seconds = _timer.getSeconds();

    if (_hours == 0 && _minutes == 0 && _seconds == 0) {
        clearInterval(_intervalId);
        alert("Вы победили в конкурсе!");
        location.href = "https://u.netology.ngcdn.ru/backend/uploads/legacy/program_families/image/365/Mask_Group-18-min.jpg";

    } else {
        if (_seconds > 0) {
            _seconds--;
        } else {
            if (_minutes > 0) {
                _minutes--;
                _seconds = 59;
            } else {
                _hours--;
                _minutes = 59;
                _seconds = 59;
            }
        }

        _timer.setHours(_hours);
        _timer.setMinutes(_minutes);
        _timer.setSeconds(_seconds);

        let _hoursExtFormat = (_hours > 9 ? '' : '0') + _hours,
            _minutesExtFormat = (_minutes > 9 ? '' : '0') + _minutes,
            _secondsExtFormat = (_seconds > 9 ? '' : '0') + _seconds;
        _timerElement.textContent = _hoursExtFormat + ':' + _minutesExtFormat + ':' + _secondsExtFormat;
    }
}, 1000);
