# horizontal-menu

## Назначение

Блок представляет собой главное меню сайта.

## Структура

Структура результирующего элемента:

    .horizontal-menu
      .horizontal-menu__logo
      ul.horizontal-menu__main-list
        // current item
        li.horizontal-menu__item.horizontal-menu__item_current
          a.horizontal-menu__link text
        // simple item
        li.horizontal-menu__item
          a.horizontal-menu__link text
        ...
          ...
        // dropdown item
        li.horizontal-menu__item.horizontal-menu__item_dropdown
          a.horizontal-menu__link text
          ul.horizontal-menu__submenu-list
            li.horizontal-menu__submenu-list-item
              a.horizontal-menu__submenu-link text
            ...
              ...
        // delimeter
        li.horizontal-menu__delimeter
        // button
        li.horizontal-menu__item
          +button({}, {class: "horizontal-menu__button-label"}) text
        ...
          ...

## Использование

### Применение шаблона

    Блок не предоставляет pug-шаблона

#### Реализованные модификаторы элемента `.horizontal-menu__item`:

`horizontal-menu__item_current` -- текущая страница;

`horizontal-menu__item_dropdown` -- выпадающий список. Сразу после метки должен быть список с классом `.horizontal-menu__submenu-list`, содержащий элементы с классом `horizontal-menu__submenu-list-item`, в который вложены ссылки с классом `horizontal-menu__submenu-link`

`horizontal-menu__delimeter` -- полоска разделителя

#### Реализованные модификаторы кнопки:

`horizontal-menu__button-label` -- приводит размер кнопки к удобному для применения в меню.


### Значения

Блок меню не генерирует значений

## Зависимости

Данный элемент не зависит от других, за исключением включения их в состав строки меню. Предполагается включение `toxin-logo` и `button`, хотя препятствий для помещения других блоков нет.