$(document).ready(function() {
  $("#formOne").submit(function(event) {
    event.preventDefault();
    var name = $("#person").val();
    var address1 = $("#number").val();
    var address2 = $("#citystate").val();
    var address3 = $("#zip").val();
    var quantity = $("#quantity").val();
    var item = $("input:radio[name=clothing]:checked").val();
    var color = $("#color").val();

    var size = $("#size").val();

    $("#name").text(name);
    var amount = parseInt(quantity);
    var cost = 5;
    var multiply = function(cost, amount) {
      return cost * amount;
    };
    var total = multiply(cost, amount);
    $(".result").text(total);
  });
});
