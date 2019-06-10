# Имя элемента

## Назначение

Блок представляет собой набор элементов, запрашивающих данные о дате приезда, уезда и количестве гостей у пользователя.

## Структура

Структура результирующего элемента:

    .primary-search&attributes(outerAttr)
      form
        .h1.primary-search__heading
        .h3.primary-search__in-label
        .h3.primary-search__out-label
        +double-date-dropdown
        .h3.primary-search__guest-label
        +guest-counter
        +button

## Использование

### Применение шаблона

    +primary-search&attributes(outerAttr)

### Аргументы шаблона

Шаблон принимает аргументом объект с данными охватывающего блока.

### Значения

Блок содержит форму, которая агрегирует значения с вложенных элементов как:

1. searchcdates[1]
2. searchcdates[2]
3. adults
4. children
5. babyes

## Зависимости

Данный элемент зависит от `h1`, `h3`, `double-date-dropdown`, `guest-counter`, `button`.