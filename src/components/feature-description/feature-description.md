# feature-description

## Назначение

Блок представляет собой комбинацию изображения, заголовка и текстового описания, представляющего какой-либо аспект текущего номера гостиницы.

## Структура

Структура результирующего элемента:

    .feature-description
      img.feature-description__image
      .feature-description__header
      .feature-description__text

## Использование

### Применение шаблона

    feature-description(iconURI, header, text, fdAttrs)

### Аргументы шаблона

Шаблон принимает аргументами:

1. URL изображения 48х48 пикселей.
2. Текс заголовка. Он же используется как alt текст изображения.
3. Текст, описания.
4. Объект с атрибутами для обертывающего элемента.

### Значения

Блок не предназначен для возврата значений.

## Зависимости

Данный элемент не зависит от других.