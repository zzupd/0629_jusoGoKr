/*eslint-disable*/

$(function () {


    $("ul#mainMenu").mouseover(function () {
        $("ul.subMenu").show();
        $("#gnbFrame").show();
    });

    $("ul#mainMenu").mouseout(function () {
        $("ul.subMenu").hide();
        $("#gnbFrame").hide();
    });



    $("input#searchWord").keyup(function () {
        var txt = $("input#searchWord").val();


        if (txt == "") {
            $("button#closeMark").css({
                "visibility": "hidden"
            });
        }

        if (txt != "") {
            $("button#closeMark").css({
                "visibility": "visible"
            });
        }


    });

    $("button#closeMark").click(function () {
        $("input#searchWord").val("");
        $(this).css({
            "visibility": "hidden"
        });
    });

    $("button#searchMark").click(function(){
        var txt = $("input#searchWord").val();

        if (txt == ""){
            alert("검색어을(를) 입력해주세요!");
            return false;
        }

        $("input#searchWord").focus();
    });

    function submitCheck(){
        var check = $("#searchWord").val();
        if(check == ""){
            return false;
        }

//        return true
    }




});
