$(function(){
    $("tr").slice(0, 10).css("display", "table-row"); // select the first ten
    $("#load").click(function(e){ // click event for load more
        e.preventDefault();
        $("tr:hidden").slice(0, 10).css("display", "table-row"); // select next 10 hidden divs and show them
        if($("tr:hidden").length == 0){ // check if any hidden divs still exist
            $("#load").hide();
        }
    });
});