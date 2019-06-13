ready(function(){

  // В этом месте должен быть написан ваш код
  
  function toggleMobileMenu() {
    document.querySelector('.burger').addEventListener('click', function() {
      document.querySelector('#nav').classList.toggle('main-nav--open');
      document.querySelector('.main-nav__toggler').classList.toggle('burger--close');
    });
  }
  toggleMobileMenu();
  
  function toggleFiltersMenu() {
    document.querySelector('#filters-trigger').addEventListener('click', function() {
    document.querySelector('#filters').classList.toggle('filters--open');
      });
  }
  toggleFiltersMenu();

  function openPopup() {
    document.querySelector('.catalog__books-list').addEventListener('click', function() {
    document.querySelector('#modal-book-view').classList.toggle('modal--open');
    document.querySelector('.page').classList.toggle('js-modal-open');
      });
  }
  openPopup();

  function closePopup() {
    document.querySelector('.modal__close').addEventListener('click', function() {
      document.querySelector('#modal-book-view').classList.toggle('modal--open');
      document.querySelector('.page').classList.toggle('js-modal-open');
      });
  }
  closePopup();

  books.forEach(function(item) {
    `<article class="card">
                <a class="card__inner" href="index.html#klienty-na-vsyu-zhizn">
                  <img class="card__img" src="img/klienty-na-vsyu-zhizn.jpg" width="148" height="208" alt="Клиенты на всю жизнь"/>
                  <h2 class="card__title">Клиенты на всю жизнь</h2>
                  <span class="card__new">new</span>
                  <p class="card__price">697 ₽</p>
                </a>
                <button class="btn  btn--sm card__buy">
                  <svg class="btn__icon" width="14" height="14">
                    <use xlink:href="#plus"></use>
                  </svg>
                  <span>В корзину</span>
                </button>
              </article>`
  });

  

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

function ready (fn) {
  if (document.attachEvent ? document.readyState === 'complete' : document.readyState !== 'loading'){
    fn();
  } else {
    document.addEventListener('DOMContentLoaded', fn);
  }
}
