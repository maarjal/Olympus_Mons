// Business Logic

//User Interface Logic
$(document).ready(function(){
  $("#sandboarder").click(function() {
    $(".result").append('<img src="img/sand-boarding.png" alt="Sandboarding description" />');
  });
  $("#spaceship").click(function() {
    $(".result").append('<img src="img/space-races.png" alt="Space races description" />');
  });
  $("#jetpack").click(function() {
    $(".result").append('<img src="img/jet-packs.png" alt="Jetpack description" />');
  });
  $("#car").click(function() {
    $(".result").append('<img src="img/dune-buggy.png" alt="Dune Buggy description" />');
  });

  $("#checkout-input").submit(function(){
  event.preventDefault();
  var waiver = $("input:radio[name=waiver]:checked").val();
  });
});
