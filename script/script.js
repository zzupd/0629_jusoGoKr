/* eslint-disable */

$(function(){

    $("li.mainLi").mouseover(function(){
        $("ul.subMenu").show();
        $("div#gnbBGFrame").show();
    });

    $("li.mainLi").mouseout(function(){
        $("ul.subMenu").hide();
        $("div#gnbBGFrame").hide();
    });

});
