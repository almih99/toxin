# room-card

## Назначение

Блок представляет собой совокупность краткой характеристики номера, карусели с изображениями номера и элемента rate-button.

## Структура

Структура результирующего элемента:

    .room-card&attributes
      +image-slider
      a.room-card__num-row
        .room-card__number-column
          .room-card__number-sign
          .room-card__number.text
          .room-card__number-rank
        .room-card__price-column
          .room-card__price
          .room-card__price-period
      hr.room-card__separator
      .room-card__feedback-row
        +rate-button
        a.room-card__feedback-col
          .room-card__feedback-num
          .room-card__feedback-unit


## Использование

### Применение шаблона

    +room-card(
        number, 
        rank, 
        linkTo, 
        images, 
        price, 
        stars, 
        feedbacks, 
        outerAttr)

### Аргументы шаблона

Шаблон принимает аргументами:

1. Номер комнаты;
2. Класс комнаты;
3. Адрес страницы описания комнаты;
4. Массив с изображениями для карусели;
5. Стоимость комнаты;
6. Оценка комнаты;
7. Количество отзывов;
8. Атрибуты охватывающего элемента html


### Значения

Элемент интерфейса `rate-button` получает атрибут `name`,  равный конкатенации `'rate'` и строки с номером комнаты.

## Зависимости

Данный элемент зависит от `image-slider` и `rate-button`.