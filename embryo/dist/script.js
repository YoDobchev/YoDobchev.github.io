function showDiv(divId){
switch (divId){
case 1:
    document.getElementById("1").style.opacity = "0.6";break;
case 2:
    document.getElementById("2").style.opacity = "0.6";break;
case 3:
    document.getElementById("3").style.opacity = "0.6";break;
case 4:
    document.getElementById("4").style.opacity = "0.6";break;
default:
    throw console.error("Нема id");
}
}
function hideDiv(divId){
switch (divId){
case 1:
    document.getElementById("1").style.opacity = "0";break;
case 2:
    document.getElementById("2").style.opacity = "0";break;
case 3:
    document.getElementById("3").style.opacity = "0";break;
case 4:
    document.getElementById("4").style.opacity = "0";break;
default:
    throw console.error("Нема id");
                        
}
}