/*
*
*   JavaScript sourcecode for prwat.github.io profile site
*   Author: Peter Watanabe
*/

$(document).ready(function () {
    var urlAnchor = location.hash;
    urlAnchor = urlAnchor.substr(1);
    $("#navbar ul li").removeClass("active");
    if (urlAnchor == "") {
        $("#navbar ul li#home").addClass("active");
    } else {
        var test = "#navbar ul li#" + urlAnchor;
        $(test).addClass("active");
    }

    $("#maincontent").load(urlAnchor + ".html");
    
    $("#navbar ul li").click(function (eventObject) {
        var clickedElement = $(this).attr("id");
        $("#navbar ul li").removeClass("active");
        $(this).addClass("active");
        $("#maincontent").load(clickedElement + ".html");
        //alert(clickedElement);
        //return false;
    });

});

//TO DO:
//FIND OUT WHY CLICKING THE BUTTONS ISN'T CHANGING THE URL ANCHOR
//