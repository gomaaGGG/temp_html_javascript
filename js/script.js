function buttmove() {


    document.getElementById("butt").style.backgroundColor = "green";



}

function buttout() {


    document.getElementById("butt").style.backgroundColor = "aqua";



}


function display() {

    document.getElementById("click").style.visibility = "visible";




}



function disdisplay() {

    document.getElementById("click").style.visibility = "hidden";




}
var x = 1,
    y = 1,
    z = 1;

function img1() {

    document.getElementById("img2").innerHTML = x++;

}


function img2() {

    document.getElementById("img3").innerHTML = y++;

}

function img3() {

    document.getElementById("img4").innerHTML = z++;

}


function clc1() {
    document.getElementById("clicks1").style.color = "green";
    document.getElementById("clicks1").style.textDecoration = "underline";
}



function clc2() {
    document.getElementById("clicks2").style.color = "green";
    document.getElementById("clicks2").style.textDecoration = "underline";
}



function clc3() {
    document.getElementById("clicks3").style.color = "green";
    document.getElementById("clicks3").style.textDecoration = "underline";
}



function clc4() {
    document.getElementById("clicks4").style.color = "green";
    document.getElementById("clicks4").style.textDecoration = "underline";
}



function clc5() {
    document.getElementById("clicks5").style.color = "green";
    document.getElementById("clicks5").style.textDecoration = "underline";
}



function valid() {

    var gg = prompt("enter your name ya man ");
    if (gg == "gomaa") {
        window.location = "index.html"

    } else {

        alert("wrong name for this site ")

    }



}