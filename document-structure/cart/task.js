const products = document.querySelectorAll('.product');


products.forEach(product => {
    const quantityControls = product.querySelector('.product__quantity-controls');
    const quantityValue = quantityControls.querySelector('.product__quantity-value');
    const decrementButton = quantityControls.querySelector('.product__quantity-control_dec');
    const incrementButton = quantityControls.querySelector('.product__quantity-control_inc');
    const cart = document.querySelector('.cart__products');
    const addToCart = product.querySelector('.product__add');
    
    // Обработчик для кнопки уменьшения кол-ва товаров
    decrementButton.addEventListener('click', () => {
        const currentVal = parseInt(quantityValue.textContent)
        if (currentVal > 1) {
            quantityValue.textContent = currentVal - 1;
        }
    });
    // Обработчик для кнопки увеличения кол-ва товаровв
    incrementButton.addEventListener('click', () => {
        const currentVal = parseInt(quantityValue.textContent)
        quantityValue.textContent = currentVal + 1;
    });
    // Обработчик для добавления в корзину
    addToCart.addEventListener('click', () => {
        const productId = product.getAttribute('data-id');
        const productImage = product.querySelector('.product__image').getAttribute('src');
        const quantity = parseInt(quantityValue.textContent);
        const cartProduct = document.querySelector(`.cart__product[data-id="${productId}"]`);

        if (cartProduct) {
            const cartQuantity = cartProduct.querySelector('.cart__product-count');
            cartQuantity.textContent = parseInt(cartQuantity.textContent) + quantity;
        } else {
            
            const newCartProduct = document.createElement('div');
            newCartProduct.classList.add('cart__product');
            newCartProduct.setAttribute('data-id', productId)
            newCartProduct.innerHTML = `
            <img class="cart__product-image" src="${productImage}">
            <div class="cart__product-count">${quantity}</div>
            <a href="#" class="product__remove">&times;</a>
            `;
            cart.appendChild(newCartProduct);
        }
    })
    // Обработчик для удаления из корзины
    cart.addEventListener('click', (event) => {
        if (event.target.classList.contains('product__remove')) {
            event.target.closest('.cart__product').remove();
        }
    })
    
})





