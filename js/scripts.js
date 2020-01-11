$(function() {
  $("button#light").click(function() {
    $("body, h1, h4, p").removeClass();
    $("body").addClass("light-background");
    $("h1, h4, p").addClass("light-text");
  });
});
