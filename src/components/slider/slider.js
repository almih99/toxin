$(document).ready(

function registerAllSliders(e) {
    function formatPriceRange(min, max) {
        nf = new Intl.NumberFormat('ru-RU');
        return nf.format(min) + "₽ - " + nf.format(max) + "₽";
    }
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
                    slide : function(event, ui) {
                        $(this)
                            .parent()
                            .find(".slider__label")
                            .text(formatPriceRange(ui.values[0],ui.values[1]));   
                    }
                }
            );
            $(this).find(".slider__label")
                .text(formatPriceRange(val1, val2));
        }
    )
}

);

    /*
    $(".ui-slider").slider({
        animate: "slow",
        range: true,    
        values: [ 10, 65 ],
        slide : function(event, ui) {
            $(this).parent().find(".slider__label").text(ui.values[0] + "₽ - " + ui.values[1] +"₽");      
        }
    });
    */ 

module.exports=null;