# room-demand

## Назначение

Блок представляет собой элемент интерфейса, позволяющий выбрать количество и состав требуемых номеров гостиницы.

## Структура

Структура результирующего элемента:

    +dropdown
      +spin
      +spin
      +spin

## Использование

### Применение шаблона

    +room-demand(text, val1, val2, val3, roomDemandAttrs)

### Аргументы шаблона

Шаблон принимает аркументами:

1. Начальный текст метки элемента dropdown.
2. Начальное количество спален.
3. Начальное количество кроватей.
4. Начальное количество ванных.
5. Атрибуты охватывающего элемента dropdown.

### Значения

В качестве значения в форму передается значения из `<input type="text">` из вложенных элементов `spin`

## Зависимости

Данный элемент зависит от элементов _dropdown_ и _spin_