
$(document).ready(
    function() {
        // initial state of minus button
        $(".spin__counter")
            .each(
                function() {
                    if(Number($(this).val())<=0) {
                        $(this)
                            .parent()
                            .find(".spin__button_minus")
                            .prop("disabled", true);
                    }
                }
            );
        // minus button handler
        $(".spin__button_minus").click(
            function(e) {
                var counter=$(this)
                    .parent()
                    .find(".spin__counter");
                var v=Number(counter.val());
                v=Math.max(v-1, 0);
                if(!v) $(this).prop("disabled", true);
                counter.val(v);
            }
        );
        // plus button handler
        $(".spin__button_plus").click(
            function(e) {
                var counter=$(this)
                    .parent()
                    .find(".spin__counter");
                var v=Number(counter.val());
                v=Math.max(v+1, 0);
                if(v) $(this)
                    .parent()
                    .find(".spin__button_minus")
                    .prop("disabled", false);
                counter.val(v);
            }
    )
    }
)