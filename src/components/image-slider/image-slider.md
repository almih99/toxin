# image-slider

## Назначение

Блок представляет собой слайдер изображений (карусель).

## Структура

Структура результирующего элемента:

    .image-slider.gallery
      img.gallery-item(src= url)
      ...
      img.gallery-item(src= url)

## Использование

### Применение шаблона

    +image-slider (imgURLList, outerAttrs)

### Аргументы шаблона

Шаблон принимает аргументами:

1. JavaScript массив URL изображений;
2. Атрибуты охватывающего элемента html.

### Значения

Не возвращает

## Зависимости

Данный блок построен на базе `Carousel-Plugin-jQuery-RV-Gallery`.