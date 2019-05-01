var Inputmask = require('inputmask');

$(document).ready(
    function(e) {
        // U should set format as data-inputmask-* atributes
        Inputmask().mask(document.querySelectorAll(".date-text-field"));
    }
)