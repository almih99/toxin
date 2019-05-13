
const nf = new Intl.NumberFormat('ru-RU');

function formatPriceRange(min, max) {
    return nf.format(min) + "₽ - " + nf.format(max) + "₽";
}

function onSlide(e, ui) {
    $(this)
        .closest(".slider")
        .find(".slider__label")
        .text(formatPriceRange(ui.values[0],ui.values[1]));
    var inputs = $(this)
        .closest(".slider")
        .find("input[type='hidden']")
        .toArray();
    inputs[0].value=ui.values[0];
    inputs[1].value=ui.values[1];
}

$(document).ready(
function registerAllSliders(e) {
    $(".slider").each(
        function() {
            const min=Number($(this).attr("data-min")||0);
            const max=Number($(this).attr("data-max")||100);
            const val1=Number($(this).attr("data-val1")||20);
            const val2=Number($(this).attr("data-val2")||80);
            $(this).find(".ui-slider").slider(
                {
                    animate: "slow",
                    range: true,  
                    max,
                    min,
                    values: [val1, val2],
                    slide : onSlide
                }
            );
            // simulation of event resault for initialization purpos
            onSlide.call(this, null, {values: [val1, val2]});
        }
    )
}

); // $(document).ready
