
const initialCart = JSON.parse(localStorage.getItem("cart"));
const cart = initialCart;

function select(selector) {
    return document.querySelector(selector);
}

function createCartItems(cart) {
    const cartTable = document.getElementsByTagName('tbody')[0];
    const cartTotalPrice = document.querySelector('.cart-total-price');
    const itemTemplate = document.querySelector('.item-template');
    const itemFragment = document.createDocumentFragment();

    cart.forEach(item => {
        const newItem = itemTemplate.content.cloneNode(true);
        const imgSrc = item.thumb_url.substr(1);
        newItem.querySelector('.cart__item-img').setAttribute('src', `${imgSrc}.jpg`);
        newItem.querySelector('.cart__item-img').setAttribute('alt', item.name);
        newItem.querySelector('.cart__item-name').textContent = item.name;
        newItem.querySelector('.field-num__input').setAttribute('value', 1);
        newItem.querySelector('.cart__item-price').textContent = `${item.price} ₽`;

        itemFragment.appendChild(newItem);
        cartTable.insertBefore(itemFragment, cartTotalPrice);
    })
}




function showCartTotal() {
    document.querySelectorAll('.page-header__cart-num').forEach(cartTotal => {
        cartTotal.textContent = cart.length;
    });
    document.querySelector('.cart__total').textContent = cart.length;
}






function removeCartItemButtons() {
    let removeCartItemButtons = document.querySelectorAll('.cart__product-del-btn');
    removeCartItemButtons.forEach(button => {
        button.addEventListener('click', removeCartItem)
    })
    let quantityInputs = document.querySelectorAll('.field-num__input');
    quantityInputs.forEach(input => {
        input.addEventListener('change', quantityChanged);
    })
}



function quantityChanged(event) {
    let input = event.target;
    if (isNaN(input.value) || input.value <= 0) {
        input.value = 1;
    }
    updateCartTotal();
}

function decreaseItemQuantity() {
    let buttonMinus = document.querySelectorAll('.field-num__btn-minus');
    buttonMinus.forEach(button => {
        button.addEventListener('click', function (e) {
            --e.target.parentElement.querySelector('.field-num__input').value;
            updateCartTotal();
        })
    })
}


function increaseItemQuantity() {
    let buttonPlus = document.querySelectorAll('.field-num__btn-plus');
    buttonPlus.forEach(button => {
        button.addEventListener('click', function (e) {
            ++e.target.parentElement.querySelector('.field-num__input').value;
            updateCartTotal();
        })
    })
}



function removeCartItem(event) {
    let buttonClicked = event.target;
    buttonClicked.parentElement.parentElement.remove();
    updateCartTotal();
}

function updateCartTotal() {
    let cartItemContainer = document.querySelector('.cart__table');
    let cartRows = cartItemContainer.querySelectorAll('.cart__product');
    let total = 0;
    cartRows.forEach(cartRow => {
        let priceElement = cartRow.querySelector('.cart__item-price');
        let quantityElement = cartRow.querySelector('.field-num__input');
        let price = parseFloat(priceElement.innerText.replace('₽', '').replace(' ', ''));
        let quantity = quantityElement.value;
        total = total + (price * quantity);
    })
    document.querySelector('#cart-products-price-num').innerText = `${total} ₽`;
    document.querySelector('.checkout__price').textContent = `${total} ₽`;
}


function removeAllItemsFromCart() {
    document.querySelector('.cart__clear-btn').addEventListener('click', function(e) {
        e.stopPropagation;
        document.querySelectorAll('.cart__product').forEach(item => {
            item.remove();
            updateCartTotal();
        })
    })
    localStorage.clear();
}


if (cart) {
    createCartItems(cart);
    showCartTotal();
    removeCartItemButtons();
    decreaseItemQuantity();
    increaseItemQuantity();
    updateCartTotal();
    removeAllItemsFromCart();
}
