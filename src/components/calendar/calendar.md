# calendar

## Назначение

Блок представляет собой календарь, позволяющий выбрать дату и время.

## Структура

Структура результирующего элемента:

    .calendar
        input.calendar__result
        .calendar__pane.datepicker-here
        .calendar__button-box
          +button Очистить
          +button Применить

## Использование

### Применение шаблона
    +calendar(
        name,
        calAttributes,
        datapeckerAttributes)

### Аргументы шаблона

Шаблон принимает аркументами:

1. Имя элемента `input`, которое представляет выбранное значение.
2. Атрибуты охватывающего элемента.
3. Атрибуты элемента, на месте которого строится `air-datepicker`. С помощью `data-*` атрибутов этого элемента возможна настройка календаря.

### Значения

Элементом html `<input type="hidden">` с именем, переданным первым аргументом, в форму передается строка с текущим выбором.

## Зависимости

Данный элемент требует наличия виджета `air-datepicker`.