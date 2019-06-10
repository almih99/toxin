require("../spin/spin.js");

const bedroomForms = 
  ["спален", "спальня", "спальни", "спальни", "спальни", "спален"];
const bedForms = 
  ["кроватей", "кровать", "кровати", "кровати", "кровати", "кроватей"];
const bathroomForms = 
  ["ванных комнат", "ванная комната", "ванные комнаты", "ванные комнаты", "ванные комнаты", "ванных комнат"];

function getWordForm(n, wlist) {
    n=Number(n);
    n=Math.max(n,0);
    n=Math.min(n, wlist.length-1)
    return wlist[n];
}

function onRoomAmountChanged(e) {
  const bedrooms = $(this).find("[name='bedrooms']").val();
  const beds = $(this).find("[name='beds']").val();
  const bathrooms = $(this).find("[name='bathrooms']").val();
  const res =
    bedrooms + " " + getWordForm(bedrooms, bedroomForms) + ", " +
    beds + " " + getWordForm(beds, bedForms) + ", " +
    bathrooms + " " + getWordForm(bathrooms, bathroomForms);
  $(this).find(".dropdown__label").text(res);

}

$(document).ready(
    function (e) {
        // регистрируем обработчик
        $(".room-demand").change(onRoomAmountChanged);
        $(".room-demand").click(onRoomAmountChanged);
    }
)