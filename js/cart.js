
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
    showCartTotal();
}


function increaseItemQuantity() {
    let buttonPlus = document.querySelectorAll('.field-num__btn-plus');
    buttonPlus.forEach(button => {
        button.addEventListener('click', function (e) {
            ++e.target.parentElement.querySelector('.field-num__input').value;
            updateCartTotal();
        })
    })
    showCartTotal();
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


// FORM
const clientName = document.querySelector('#client-name');
const clientSurname = document.querySelector('#client-surname');
const clientPhone = document.querySelector('#client-phone');
const clientEmail = document.querySelector('#client-email');

const allInputs = document.querySelectorAll('.field-text__input');
const regExp = /^[а-я][а-я-_\.]{1,20}$/gi;
const regExpPhone = /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/gi;
const regExpEmail = /^[-\w.]+@([A-z0-9][-A-z0-9]+\.)+[A-z]{2,3}$/gi;

clientName.addEventListener('keyup', checkName);

function checkName() {
    if (clientName.value.match(regExp) === null) {
        allInputs[0].style.border = 'solid 1px red';
    } else {
        allInputs[0].style.border = '1px solid #e5e5e5';
    }
}

clientSurname.addEventListener('keyup', checkSurname);

function checkSurname() {
    if (clientSurname.value.match(regExp) === null) {
        allInputs[1].style.border = 'solid 1px red';
    } else {
        allInputs[1].style.border = '1px solid #e5e5e5';
    }
}

clientPhone.addEventListener('keyup', checkPhone);

function checkPhone() {
    if (clientPhone.value.match(regExpPhone) === null) {
        allInputs[2].style.border = 'solid 1px red';
    } else {
        allInputs[2].style.border = '1px solid #e5e5e5';
    }
}

clientEmail.addEventListener('keyup', checkEmail);

function checkEmail() {
    if (clientEmail.value.match(regExpEmail) === null) {
        allInputs[3].style.border = 'solid 1px red';
    } else {
        allInputs[3].style.border = '1px solid #e5e5e5';
    }
}