const Rotopie = require("./rotapie/jquery.rotapie");

const unitForms = 
  ["ГОЛОСОВ", "ГОЛОС", "ГОЛОСА", "ГОЛОСА", "ГОЛОСА", "ГОЛОСОВ"];

function getWordForm(n, wlist) {
    n=Number(n) % 100;
    n= n<20 ? n : n%10;
    n=Math.max(n,0);
    n=Math.min(n, wlist.length-1)
    return wlist[n];
}

function prepareDoughnutData(item) {
    var res={
        slices: []
    }
    $(item)
        .find(".doughnut__item")
        .each(
            function() {
                res.slices.push({
                    color: $(this).attr("data-color"),
                    amount: Number($(this).attr("data-amount")),
                    unit: getWordForm($(this).attr("data-amount"), unitForms)
                });
                colorizeDot(this);
            }
        );
    return res;
}

function colorizeDot(item) {
    $(item)
        .find(".doughnut__mark")
        .css("background-color", $(item).attr("data-color"));
}

$(document).ready(
    function(e) {
        /*
        $('.doughnut__chart').rotapie({
            slices: [
                { color: '#FFBA9C', amount: 520, unit: "ГОЛОСОВ"}, // If color not set, slice will be transparant.
                { color: '#BC9CFF', amount: 260, unit: "ГОЛОСОВ"}, // Font color to render percentage defaults to 'color' but can be overriden by setting 'fontColor'.
                { color: '#6FCF97', amount: 260, unit: "ГОЛОСОВ"},
                { color: '#919191', amount: 0, unit: "ГОЛОСОВ"}
            ],
        });
        */
       $('.doughnut').each(
           function() {
                $(this)
                    .find('.doughnut__chart')
                    .rotapie(prepareDoughnutData($(this)));
           }
       )
    }

)