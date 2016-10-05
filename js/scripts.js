// Business Logic

//User Interface Logic
$(document).ready(function(){

  $("#checkout-input").submit(function(){
  event.preventDefault();
  var waiver = $("input:radio[name=waiver]:checked").val();
  });
});
