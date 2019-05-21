# big-footer

## Назначение

Блок представляет собой основной футер страницы проекта toxin.

## Структура

Структура результирующего элемента:

    .big-footer
      .big-footer__body
        .big-footer__common-info
          a.toxin-logo(href="#")
          .big-footer__common-info-text.
            text
        .big-footer__links
          h3.h3.big-footer__h3 header
          a.big-footer__link(href="#") text
          a.big-footer__link(href="#") text
          a.big-footer__link(href="#") text
          a.big-footer__link(href="#") text
        ...
          ...
        .big-footer__subscribe
          h3.h3.big-footer__h3 text
            .big-footer__subscribe-text.
              text
            +subscription-text-field(
                "feedback",
                "Your email address",
                {class: "big-footer__subscription-text-field"})
      .big-footer__footer
        .big-footer__footer-text.
          text.
        .big-footer__footer-socials
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