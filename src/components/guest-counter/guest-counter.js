require("../spin/spin.js");

const guestForms = 
  ["гостей", "гость", "гостя", "гостя", "гостя", "гостей"];
const childrenForms=
  ["детей", "ребёнок", "ребёнка", "ребёнка", "ребёнка", "детей"];
const babyesForms =
  ["младенцев", "младенец", "младенца", "младенца", "младенца", "младенцев"];

function getWordForm(n, wlist) {
    n=Number(n);
    n=Math.max(n,0);
    n=Math.min(n, wlist.length-1)
    return wlist[n];
}

function countAdults(current) {
  return Number($(current).find("[name='adults']").val());
}

function countChildern(current) {
  return Number($(current).find("[name='children']").val());
}

function countBabyes(current) {
  return Number($(current).find("[name='babyes']").val());
}

function countGuests(current){
  return countAdults(current) + countChildern(current) + countBabyes(current);
}

function onApplyClick(e) {
  $(this).closest(".guest-counter").find(".dropdown__show").prop("checked", false);
}

function onClearClick(e) {
    $(this).closest(".guest-counter").find(":text").val("0").trigger("change");
}

function onGuestAmountChanged(e) {
    const adults = countAdults(this)
    const children = countChildern(this)
    const babyes = countBabyes(this)
    var res=[];

    if(adults) {
      res.push(adults + " " + getWordForm(adults, guestForms));
    }
    if(children) {
      res.push(children + " " + getWordForm(children, childrenForms));
    }
    if(babyes) {
      res.push(babyes + " " + getWordForm(babyes, babyesForms));
    }
    const resString=res.length ? res.join(", ") : "Сколько гостей";

    $(this).find(".guest-counter__label").text(resString);

    const clBtn=$(this).find(".guest-counter__clear-button");
    if(adults || children || babyes) {
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