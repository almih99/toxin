
const Cal = require("air-datepicker");

function onSelect(formattedDate, date, inst) {
    inst.$el.closest(".calendar")
        .find(".calendar__result")
        .val(formattedDate)
        .trigger('change');
}

$(document).ready(
    function(e) {
        $('.calendar__pane').datepicker({
            navTitles: {
                days: 'MM yyyy',
                months: 'yyyy',
                years: 'yyyy1 - yyyy2'
            },
            onSelect: onSelect
        });
    }
)

