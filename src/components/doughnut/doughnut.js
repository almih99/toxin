const Rotopie = require("./rotapie/jquery.rotapie");

$(document).ready(
    function(e) {
        $('.doughnut').rotapie({
            slices: [
                { color: '#FFBA9C', amount: 520, unit: "ГОЛОСОВ"}, // If color not set, slice will be transparant.
                { color: '#BC9CFF', amount: 260, unit: "ГОЛОСОВ"}, // Font color to render percentage defaults to 'color' but can be overriden by setting 'fontColor'.
                { color: '#6FCF97', amount: 260, unit: "ГОЛОСОВ"},
                { color: '#919191', amount: 0, unit: "ГОЛОСОВ"}
            ],
        });
    }

)