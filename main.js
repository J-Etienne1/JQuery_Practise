
function func1(){
    $("#img1").fadeToggle(3000); // number in () not need but can be added
}


function func2(){
    // $(element name).action() --- JQuery syntax
    // document.getElementByTagName(element name) --- JS syntax

    $("div").css("background-color", "orange");
    //$("#p1").css("font-style", "italic"); // targeting paragraph 1 can't be used for multiple with same ID better to use a classs
    $(".para").css("font-style", "italic");

}