
function toggleSubmenu(e) {
    $(this)
        .parent()
        .find(".horizontal-menu__submenu-list")
        .toggle("fast");
}

function hideSubmenu(e) {
    $(this)
        .parent()
        .find(".horizontal-menu__submenu-list")
        .hide("fast");
    console.log("hide")
}

$(document).ready(
    function (e) {
        $(".horizontal-menu__item_dropdown")
          .find(".horizontal-menu__link")
          .attr("href", "javascript:void(0)")
          .click(toggleSubmenu);
        $(".horizontal-menu__item_dropdown")
          .mouseleave(hideSubmenu);
    }
)