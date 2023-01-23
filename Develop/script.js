$(document).ready(function () {
  $("#currentDay").text(moment().format("MMMM Do YYYY, h:mm:ss a"));
  $(".saveBtn").on("click", function () {
    console.log(this);
    var text = $(this).siblings(".description").val();
     var time = $(this).parent().attr("id");
     localStorage.setItem(time, text);
  })

$(".description").val(localStorage.getItem());

function hourTracker() {
  var currentHour = moment().hour();

$(".time-block").each(function () {
  var blockHour = parseInt($(this).attr("id");

if (blockHour < currentHour) {
  $(this).addClass("past");
}
else if (blockHour === currentHour) {
  $(this).addClass("present");
}
else {
  $(this).addClass("future");}
});