/* eslint-disable */

$(function(){

    $("li.mainLi").mouseover(function(){
        $("ul.subMenu").show();
    });

    $("li.mainLi").mouseout(function(){
        $("ul.subMenu").hide();
    });

});
