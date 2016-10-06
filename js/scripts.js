// Business Logic

//User Interface Logic
$(document).ready(function(){
  $(".checkout-wrap").hide();
  $("#sandboarder").click(function() {
    $(".result").append('<img src="img/sand2.png" alt="Sandboarding description" />');
    $(".checkout-wrap").show();
  });
  $("#spaceship").click(function() {
    $(".result").append('<img src="img/spaceship2.png" alt="Space races description" />');
    $(".checkout-wrap").show();
  });
  $("#jetpack").click(function() {
    $(".result").append('<img src="img/jet2.png" alt="Jetpack description" />');
    $(".checkout-wrap").show();
  });
  $("#car").click(function() {
    $(".result").append('<img src="img/dune2.png" alt="Dune Buggy description" />');
    $(".checkout-wrap").show();
  });
  $("#climber").click(function() {
    $(".result").append('<img src="img/climb2.png" alt="Dune Buggy description" />');
    $(".checkout-wrap").show();
  });
  $("#wingsuit").click(function() {
    $(".result").append('<img src="img/wingsuits2.png" alt="Dune Buggy description" />');
    $(".checkout-wrap").show();
  });
  $("#x-out-checkout").click(function(){
    $(".checkout-wrap").hide();
  });

  $("#checkout-input").submit(function(){
  event.preventDefault();
  var waiver = $("input:radio[name=waiver]:checked").val();
  });
});
