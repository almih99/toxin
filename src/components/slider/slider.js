$(document).ready(

function registerAllSliders(e) {
    $(".ui-slider").slider({
        animate: "slow",
        range: true,    
        values: [ 10, 65 ],
        slide : function(event, ui) {
            $(this).parent().find(".slider__label").text(ui.values[0] + "₽ - " + ui.values[1] +"₽");      
        }
    });
}

)

module.exports=null;