require("../calendar/calendar.js");

function onChange(e) {
    $(this)
        .closest(".date-range-dropdown")
        .find(".date-range-dropdown__label")
        .text($(e.target).val() ? $(e.target).val() : "Выберите даты");
}

function onApply() {
    $(this)
        .closest(".date-range-dropdown")
        .find(".date-range-dropdown__trigger")
        .prop("checked", false);
        

}

function onClear() {
    $(this)
        .closest(".date-range-dropdown")
        .find(".datepicker-here")
        .data('datepicker')
        .clear();
}

$(document).ready (
    function(e) {
        const $base = $(".date-range-dropdown");
        const $cal = $base.find(".datepicker-here");
        // $cal.datepicker();
        $base.find(".calendar__result").change(onChange);
        $base
            .find(".calendar__clear-button")
            .click(onClear)
        $base
            .find(".calendar__apply-button")
            .click(onApply)
    }
)