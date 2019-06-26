ready(function () {
    // В этом месте должен быть написан ваш код

    fetch('https://books.marinintim.com/books').then(r => r.json().then((response) => {
        init(response);
    }));

    function select(selector) {
        return document.querySelector(selector);
    }

    function toggleMobileMenu() {
        document.querySelector('.burger').addEventListener('click', function () {
            select('#nav').classList.toggle('main-nav--open');
            select('.main-nav__toggler').classList.toggle('burger--close');
        });
    }

    function toggleFiltersMenu() {
        select('#filters-trigger').addEventListener('click', function () {
            select('#filters').classList.toggle('filters--open');
        });
    }

    function createCards(arr) {
        const catalog = select('.catalog__books-list');
        const cardTemplate = select('.card-template');
        const cardFragment = document.createDocumentFragment();

        arr.forEach(book => {
            const newCard = cardTemplate.content.cloneNode(true);
            newCard.querySelector('.card__inner').setAttribute('data-id', book.id);
            newCard.querySelector('.card__title').textContent = book.name;
            newCard.querySelector('.card__price').textContent = `${book.price} ₽`;
            const imgSrc = book.thumb_url.substr(1);
            newCard.querySelector('.card__img').setAttribute('src', `${imgSrc}.jpg`);
            newCard.querySelector('.card__img').setAttribute('alt', book.name);
            newCard.querySelector('.card__buy').setAttribute('data-id', book.id);


            if (book.new) {
                let newBook = document.createElement('span');
                newBook.classList.add('card__new');
                newBook.textContent = 'new';
                newCard.querySelector('.card__title').appendChild(newBook);
            }

            cardFragment.appendChild(newCard);
            catalog.appendChild(cardFragment);
        })
    }

    function createPopup(books, bookId) {
        const selectedBook = books.find(book => book.id === bookId);
        const imgSrc = selectedBook.thumb_url.substr(1);
        select('.modal__content .popup__img').setAttribute('src', `${imgSrc}.jpg`);
        select('.modal__content .popup__img').setAttribute('alt', selectedBook.name);
        select('.modal__content .product__title').textContent = selectedBook.name;
        select('.modal__content .product__descr p').textContent = selectedBook.desc;
        select('.modal__content .btn--price .price').textContent = `${selectedBook.price} ₽`;
        select('.modal__content .btn--price').setAttribute('data-id', selectedBook.id);

        select('#modal-book-view').classList.add('modal--open');
        select('.page').classList.add('js-modal-open');

    }

    function openPopup(books) {
        document.querySelectorAll('.card__inner').forEach(card => {
            card.addEventListener('click', function (e) {
                const bookId = this.getAttribute('data-id');
                e.preventDefault();
                createPopup(books, bookId);
            });
        });
    }


    function closePopup() {
        select('.modal__close').addEventListener('click', function (e) {
            select('#modal-book-view').classList.remove('modal--open');
            select('.page').classList.remove('js-modal-open');
        });
    }


    function getFilteredBooks(type, books) {
        return books.filter(book => book.type === type);
    }

    function bookFilter(books) {
        document.querySelectorAll('.tabs__item').forEach(filter => {
            filter.addEventListener('click', function (e) {
                const catalog = document.querySelector('.catalog__books-list');
                catalog.innerHTML = '';
                const type = this.getAttribute('data-id');
                const filteredBooks = getFilteredBooks(type, books);
                createCards(filteredBooks);
                e.preventDefault();
                openPopup(books);
            });
        });
    }

    
    function init(books) {
        createCards(books);
        openPopup(books);
        bookFilter(books);
        closePopup();
        toggleFiltersMenu();
        toggleMobileMenu();
        addToCart(books);
        addToCartFromPopup(books);
    }

    // ВНИМАНИЕ!
    // Нижеследующий код (кастомный селект и выбор диапазона цены) работает
    // корректно и не вызывает ошибок в консоли браузера только на главной.
    // Одна из ваших задач: сделать так, чтобы на странице корзины в консоли
    // браузера не было ошибок.

    // Кастомные селекты (кроме выбора языка)
    new Choices('.field-select:not(#lang) select.field-select__select', {
        searchEnabled: false,
        shouldSort: false,
    });
    // Кастомный селект выбора языка отдельно
    new Choices('#lang select.field-select__select', {
        searchEnabled: false,
        shouldSort: false,
        callbackOnCreateTemplates: function (template) {
            return {
                item: (classNames, data) => {
                    return template(`
            <div class="${classNames.item} ${data.highlighted ? classNames.highlightedState : classNames.itemSelectable}" data-item data-id="${data.id}" data-value="${data.value}" ${data.active ? 'aria-selected="true"' : ''} ${data.disabled ? 'aria-disabled="true"' : ''}>
              ${getLangInSelectIcon(data.value)} ${data.label.substr(0,3)}
            </div>
          `);
                },
                choice: (classNames, data) => {
                    return template(`
            <div class="${classNames.item} ${classNames.itemChoice} ${data.disabled ? classNames.itemDisabled : classNames.itemSelectable}" data-select-text="${this.config.itemSelectText}" data-choice ${data.disabled ? 'data-choice-disabled aria-disabled="true"' : 'data-choice-selectable'} data-id="${data.id}" data-value="${data.value}" ${data.groupId > 0 ? 'role="treeitem"' : 'role="option"'}>
              ${getLangInSelectIcon(data.value)} ${data.label}
            </div>
          `);
                },
            };
        }
    });

    function getLangInSelectIcon(value) {
        if (value == 'ru') return '<span class="field-select__lang-ru"></span>';
        else if (value == 'en') return '<span class="field-select__lang-en"></span>';
        return '<span class="field-select__lang-null"></span>';
    }

    // Выбор диапазона цен
    var slider = document.getElementById('price-range');
    noUiSlider.create(slider, {
        start: [400, 1000],
        connect: true,
        step: 100,
        range: {
            'min': 200,
            'max': 2000
        }
    });

});

function ready(fn) {
    if (document.attachEvent ? document.readyState === 'complete' : document.readyState !== 'loading') {
        fn();
    } else {
        document.addEventListener('DOMContentLoaded', fn);
    }
}


if (typeof localStorage === "undefined" || localStorage === null) {
    var LocalStorage = require('node-localstorage').LocalStorage;
    localStorage = new LocalStorage('./scratch');
  }
   
  localStorage.setItem('myFirstKey', 'myFirstValue');