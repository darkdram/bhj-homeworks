let xhr = new XMLHttpRequest();
xhr.open('GET', 'https://netology-slow-rest.herokuapp.com/');
xhr.send();

xhr.onreadystatechange = () =>  {
    if (xhr.readyState === 4) {
        document.getElementById('loader').classList.remove('loader_active');

        let response = JSON.parse(xhr.responseText),
            valutes = response.response.Valute;

        let htmlMarkup = '';
        for(let valuteCode in valutes) {
            let valute = valutes[valuteCode];
            let itemHtml = `<div class="item">
                <div class="item__code">
                    ${valute.CharCode}
                </div>
                <div class="item__value">
                    ${valute.Value}
                </div>
                <div class="item__currency">
                    руб.
                </div> 
            </div>`;

            htmlMarkup += itemHtml;
        }

        document.querySelector('#items').innerHTML = htmlMarkup;
    }
};