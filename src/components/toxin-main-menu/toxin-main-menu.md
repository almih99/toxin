# toxin-main-menu

## Назначение

Блок представляет собой реализацию главного меню проекта toxin на основе более общего блока `horizontal-menu`.

## Структура

Структура результирующего элемента представлена в описании блока `horizontal-menu`.

## Использование

### Применение шаблона

    +toxin-main-menu(isLogged=false, outerAttrs)

### Аргументы шаблона

Шаблон принимает аргументами:

1. Логическое значение, определяющее вошел ли пользователь в систему. В зависимости от значения отображает или нет кнопки входа и регистрации.
2. Объект с атрибутами охватывающего блока.

### Значения

Не подразумеваются возвращаемые значения.

## Зависимости

Данный блок зависит от `horizontal-menu`, `toxin-logo` и `button`.