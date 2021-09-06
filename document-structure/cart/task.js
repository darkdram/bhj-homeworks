const cartProducts = document.querySelector('.cart__products'),
    avaiableProducts = document.querySelectorAll('.product');

[...avaiableProducts].forEach((product) => {
    const controlButtons = product.querySelectorAll('.product__quantity-control'),
    controlValueElement = product.querySelector('.product__quantity-value'),
    addToCartButton = product.querySelector('.product__add');

    addToCartButton.addEventListener('click', (event) => {
        let id = product.getAttribute('data-id');

        let selector = 'div.cart__product[data-id="' + id + '"]';

        let itemInCart = document.querySelector(selector);

        if (itemInCart) {
            const counter = itemInCart.querySelector('.cart__product-count');

            counter.textContent = parseInt(counter.textContent) + parseInt(controlValueElement.textContent);
        } else {

            const cartProduct = document.createElement('div'),
                cartProductImage = document.createElement('img'),
                cartProductCount = document.createElement('div');

            cartProduct.setAttribute('data-id', id);
            cartProduct.classList.add('cart__product');

            cartProductImage.src = product.querySelector('.product__image').src;
            cartProductImage.classList.add('cart__product-image');

            cartProductCount.textContent = controlValueElement.textContent;
            cartProductCount.classList.add('cart__product-count');

            cartProduct.appendChild(cartProductImage);
            cartProduct.appendChild(cartProductCount);

            cartProducts.appendChild(cartProduct);

            // <div class="cart__product" data-id="1">
            //     <img class="cart__product-image" src="image.png">
            //     <div class="cart__product-count">20</div>
            // </div>

        }
    });

   [...controlButtons].forEach((button) => {
        button.addEventListener('click', (event) => {
            let addedValue = 0;

            if (button.classList.contains('product__quantity-control_dec')) {
                addedValue = -1;
            } else if (button.classList.contains('product__quantity-control_inc')) {
                addedValue = 1;
            }

            let currentValue = parseInt(controlValueElement.textContent),
                newValue = currentValue + addedValue;

            if (newValue < 1) {
                newValue = 1;
            }

            controlValueElement.textContent = newValue;
        });
   });
});

