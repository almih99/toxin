
const Cal = require("air-datepicker");

$(document).ready(
    function(e) {
        $('.calendar__pane').datepicker({
            navTitles: {
                days: 'MM yyyy',
                months: 'yyyy',
                years: 'yyyy1 - yyyy2'
            }
        });
    }
)

