# guest-counter

## Назначение

Блок представляет собой элемент интерфейса, позволяющий выбрать количество гостей.

## Структура

Структура результирующего элемента:

    +dropdown
      +spin
      +spin
      +spin

## Использование

### Применение шаблона

    +guest-counter(text, val1, val2, val3, guestCounterAttrs)

### Аргументы шаблона

Шаблон принимает аркументами:

1. Начальный текст метки элемента dropdown.
2. Начальное количество взрослых.
3. Начальное количество детей.
4. Начальное количество младенцев.
5. Атрибуты охватывающего элемента dropdown.

### Значения

В качестве значения в форму передается значения из `<input type="text">` из вложенных элементов `spin`

## Зависимости

Данный элемент зависит от элементов _dropdown_ и _spin_