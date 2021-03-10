function getPara1(){
    var inputs=[];
    for(i=1 ; i<=6 ; i++){
        inputs.push(document.getElementById("input"+i).value);
    }
    document.getElementById("show_para1").innerHTML=inputs.join(".");
}

function getPara2(){
    var inputs=[];
    for(i=1 ; i<=6 ; i++){
        inputs.push(document.getElementById("Pinput"+i).value);
    }
    document.getElementById("show_para2").innerHTML=inputs.join(".");
}