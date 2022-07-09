$(document).ready(function(){
    $("#one").click(function(){
        form.display.value += 1;
    });
    $("#two").click(function(){
        display.value += 2;
    });
    $("#three").click(function(){
        display.value += 3;
    });
    $("#four").click(function(){
        display.value += 4;
    });
    $("#five").click(function(){
        display.value += 5;
    });
    $("#six").click(function(){
        display.value += 6;
    });
    $("#seven").click(function(){
        display.value += 7;
    });
    $("#eight").click(function(){
        display.value += 8;
    });
    $("#nine").click(function(){
        display.value += 9;
    });
    $("#zero").click(function(){
        display.value += 0;
    });
    $("#divide").click(function(){
        display.value += "/";
    });
    $("#multi").click(function(){
        display.value += "*";
    });
    $("#subs").click(function(){
        display.value += "-";
    });
    $("#dot").click(function(){
        display.value += ".";
    });
    $("#add").click(function(){
        display.value += "+";
    });
    $("#clear").click(function(){
        display.value = "";
    });
    $("#equal").click(function(){
        if(display.value===""){
            alert("Please enter any numbers");
        }else{
            display.value = eval(display.value);
        }
    });
})