# text-field

## Назначение

Блок представляет собой обёртку над стандартным html элементом `<input type="text">`, служащую для кастомизации внешнего вида.

## Структура

Структура результирующего элемента:

    input.text-field

## Использование

### Применение шаблона
    +textfield(
        name, 
        placeholder, 
        textfieldAttrs)

### Аргументы шаблона

Шаблон принимает аркументами:

1. Имя, для предоставления значения форме.
2. Приглашающий текст в незаполненном элементе ввода.
3. Атрибуты элемента ввода. Здесь может меняться тип поля с `type="text"` на `type="password"` и т. п.

### Значения

Предоставляются стандартным html элементом `<input type="text">`

## Зависимости

Данный элемент не зависит от других.