
function onSelect(formattedDate, date, inst){
    inst.$el
        .closest(".date-range-dropdown")
        .find(".date-range-dropdown__label")
        .text(formattedDate ? formattedDate : "Выберите даты");
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
        $cal.datepicker({
            onSelect: onSelect
        });
        $base
            .find(".calendar__clear-button")
            .click(onClear)
        $base
            .find(".calendar__apply-button")
            .click(onApply)
    }
)