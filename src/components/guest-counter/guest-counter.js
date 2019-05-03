const guestForms = 
  ["гостей", "гость", "гостя", "гостя", "гостя", "гостей"];

function getWordForm(n, wlist) {
    n=Number(n);
    n=Math.max(n,0);
    n=Math.min(n, wlist.length-1)
    return wlist[n];
}

function countGuests(current){
  return Number($(current).find("[name='adults']").val()) +
    Number($(current).find("[name='children']").val()) +
    Number($(current).find("[name='babyes']").val());
}

function onApplyClick(e) {
  $(this).closest(".guest-counter").find(".dropdown__show").prop("checked", false);
}

function onClearClick(e) {
    $(this).closest(".guest-counter").find(":text").val("0");
}

function onGuestAmountChanged(e) {
    const guests = countGuests(this);

    const res = guests ? guests + " " + getWordForm(guests, guestForms) : "Сколько гостей";
    $(this).find(".guest-counter__label").text(res);
    const clBtn=$(this).find(".guest-counter__clear-button");
    if(guests) {
      clBtn.removeClass("guest-counter__clear-button_hidden");
    } else {
      clBtn.addClass("guest-counter__clear-button_hidden");
    }
}

$(document).ready(
    function (e) {
        // регистрируем обработчики
        $(".guest-counter").change(onGuestAmountChanged);
        $(".guest-counter").click(onGuestAmountChanged);
        $(".guest-counter__apply-button").click(onApplyClick);
        $(".guest-counter__clear-button").click(onClearClick);
    }
)