require("../date-dropdown/date-dropdown.js");


function openStateChanged(e) {
    if($(this).prop("checked")) {
        // close neighber panel
        $(this)
            .closest(".double-date-dropdown")
            .find(".date-dropdown__trigger")
            .not(`#${$(this).attr("id")}`)
            .prop("checked", false);
    }
}

$(document).ready (
    function() {
        $(".double-date-dropdown")
          .find(".date-dropdown__trigger")
          .change(openStateChanged);
    }
)