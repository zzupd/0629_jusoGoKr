/* eslint-disable */

$(function(){

    /* GNB 메뉴 시작 */
    $("li.mainLi").mouseover(function(){
        $("ul.subMenu").show();
        $("div#gnbBGFrame").show();
    });

    $("li.mainLi").mouseout(function(){
        $("ul.subMenu").hide();
        $("div#gnbBGFrame").hide();
    });
    /* GNB 메뉴 끝 */


    /* 주소 검색 시작 */
    $("input#searchWord").keyup(function(){

        var txt = $("input#searchWord").val();  // 변수 : 값을 저장
        // txt에 저장된 값이 비어있는 공백( = "" )이 아니라면
        // 제이쿼리의 CSS를 사용하여 X 기호를 표시하세요.

        if (txt == "") {   // 텍스트박스의 값이 공백이라면
            $("span#closeMark").css({ "visibility": "hidden" });
                                // "X" 기호를 숨겨주세요
        }

        if (txt != "")  {   // 텍스트박스의 값이 공백이 아니라면
            $("span#closeMark").css({ "visibility": "visible" });
                                // "X" 기호를 표시해주세요
        }


    });     // 2차 기능
    /* 주소 검색 끝 */

});





