/*
*
*   JavaScript sourcecode for prwat.github.io profile site
*   Author: Peter Watanabe
*/

$(document).ready(function () {
    $("#navbar ul li").click(function (eventObject) {
        var clickedElement = $(this).attr("id");
        $("#navbar ul li").removeClass("active");
        $(this).addClass("active");
        //alert(clickedElement);
        return false;
    });

});