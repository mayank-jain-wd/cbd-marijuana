var text = ["Wealthy", "Marijuana"];
var counter = 0;
var elem = document.getElementById("changeText");
var inst = setInterval(change, 2000);

function change() {
  elem.innerHTML = text[counter];
  counter++;
  if (counter >= text.length) {
    counter = 0;
    // clearInterval(inst); // uncomment this if you want to stop refreshing after one cycle
  }
}
$(document).ready(function() {
  // Toggle menu on click
  $("#menu-toggler").click(function() {
    toggleBodyClass("menu-active");
  });

  function toggleBodyClass(className) {
    document.body.classList.toggle(className);
  }

  $("#nav-btn").click(function () {
    $(".navg-block").fadeIn("slow");
    $("#nav-btn").fadeOut("1000");
  });
  $(".bk-btn").click(function(){
    $("#nav-btn").fadeIn("slow");
    $(".navg-block").fadeOut("1000");
  })
 });