
require("../calendar/calendar.js");

function onChange(e) {
    $(this)
        .closest(".date-dropdown")
        .find(".date-dropdown__label")
        .text($(e.target).val() ? $(e.target).val() : "ДД.ММ.ГГГГ");

}

function onApply() {
    $(this)
        .closest(".date-dropdown")
        .find(".date-dropdown__trigger")
        .prop("checked", false);
        

}

function onClear() {
    $(this)
        .closest(".date-dropdown")
        .find(".datepicker-here")
        .data('datepicker')
        .clear();
}

$(document).ready (
    function(e) {
        const $base = $(".date-dropdown");
        const $cal = $base.find(".datepicker-here");
        $cal.datepicker();
        $base.find(".calendar__result").change(onChange);
        $base
            .find(".calendar__clear-button")
            .click(onClear)
        $base
            .find(".calendar__apply-button")
            .click(onApply)
    }
)