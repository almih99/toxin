
function onSelect(formattedDate, date, inst){
    inst.$el
        .closest(".date-dropdown")
        .find(".date-dropdown__label")
        .text(formattedDate ? formattedDate : "ДД.ММ.ГГГГ");
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