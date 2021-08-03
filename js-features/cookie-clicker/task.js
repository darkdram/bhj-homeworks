let _cookieElement = document.querySelector('#cookie'),
    _initialCookieWidth = _cookieElement.width;

let _counter = 0,
    _firstClickTime = new Date();

_cookieElement.onclick = function() {
    this.width = this.width == _initialCookieWidth ? _initialCookieWidth * 1.2 : _initialCookieWidth;

    document.querySelector('#clicker__counter').textContent = ++_counter;

    let _now = new Date(),
        _msDifference = _now - _firstClickTime;
        console.log(_now, _firstClickTime, _msDifference)
        document.querySelector('#clicker__speed').textContent = (1000 / _msDifference).toFixed(2);

    _firstClickTime = _now;
};