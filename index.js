$(function(){
    var button = $("#button_change");

    $(button).click(function() {
        // Actions to take upon button click goes here.

        var input = $("#input_color");
        var input=$(input).val();
        var inputValue = $("#input_color").val();
   
        var element = $(".cow_color");
          
        $(element).html(inputValue);
    });
});