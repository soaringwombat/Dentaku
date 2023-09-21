var result = document.getElementById("answer");
var num1= document.getElementById("input1");
var num2= document.getElementById("input2");

function plus(){
    if(num1.value == "" || num2.value == ""){
        result.innerHTML = "ERROR(数字を入力してください)";
    }
    else{
        result.innerHTML = parseFloat(num1.value) + parseFloat(num2.value);
    }
}
function minus(){
    if(num1.value == "" || num2.value == ""){
        result.innerHTML = "ERROR(数字を入力してください)";
    }
    else{
        result.innerHTML = parseFloat(num1.value) - parseFloat(num2.value);
    }
}
function multiply(){
    if(num1.value == "" || num2.value == ""){
        result.innerHTML = "ERROR(数字を入力してください)";
    }
    else{
        result.innerHTML = parseFloat(num1.value) * parseFloat(num2.value);
    }
}
function divide(){
    if(num1.value == "" || num2.value == ""){
        result.innerHTML = "ERROR(数字を入力してください)";
    }
    else{
        if(parseInt(num2.value) == 0){
            result.innerHTML = "ERROR(0で割ることはできません)";
        }
        else{
            result.innerHTML = parseFloat(num1.value) / parseFloat(num2.value);
        }
    }
}
function clearinput(){
    num1.value = "";
    num2.value = "";
    result.innerHTML = "ここに解答を表示";
}