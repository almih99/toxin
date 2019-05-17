# account-registration

## Назначение

Блок представляет собой набор элементов, запрашивающих данные о пользователе, необходимые при регистрации.

## Структура

Структура результирующего элемента:

    .account-registration
      form
        ...
        +text-field // firstname
        +text-field // secondname
        ...
        +radiobutton // sex=male
        +radiobutton // sex=female
        ...
        +date-text-field
        ...
        +text-field // email
        +text-field // password
        +toggle
        +button // Перейти к оплате
        ...
        +button // Войти


## Использование

### Применение шаблона
    
    +account-registration(outerAttrs)

### Аргументы шаблона

Шаблон принимает аргументом объект с данными охватывающего блока.

### Значения

Блок содержит форму, которая агрегирует значения с вложенных элементов как:

1. firstnsme
2. secondname
3. sex
4. birthDayDate
5. email
6. password
7. recievoffers

## Зависимости

Данный элемент зависит от `h1`, `h3`, `text-field`, `radiobutton`,  `date-text-field`,   `toggle` , `button`.