# big-footer

## Назначение

Блок представляет собой вспомогательный футер страницы проекта toxin.

## Структура

Структура результирующего элемента:

    .small-footer
      a.toxin-logo(href="#")
      .small-footer__text.
        text
      .small-footer__footer-socials
        a.social-button.social-button_twitter(href="#")
        a.social-button.social-button_facebook(href="#")
        a.social-button.social-button_instagram(href="#")

## Использование

### Применение шаблона

Для данного блока шаблон не создаётся.

### Аргументы шаблона

Для данного блока шаблон не создаётся.

### Значения

Блок сам по себе не вырабатывает значений, однако позволяет использовать вложенные элементы, которые на это способны.

## Зависимости

Данный блок не зависит от других. Однако стандартное применение предполагает применение в нем `toxin-logo` и `subscription-text-field`.