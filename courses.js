
// document.querySelector("#l1").addEventListener("click",function(){
//     document.querySelector("#aaa").style.fontWeight="bold";
// })
// document.querySelector("#l2").addEventListener("click",function(){
//     document.querySelector("#aaa").style.fontStyle="italic";
// })
// document.querySelector("#l3").addEventListener("click",function(){
//     document.querySelector("#aaa").style.textDecoration="underline";
// })
// var a=document.getElementById("aaa");
var b=document.getElementById("size");
var f=document.getElementById("fam");
var a=document.getElementById("aaa");
function bo(){
    a.style.fontWeight="bold";
}
function i(){
    a.style.fontStyle="italic";
}
function u(){
    a.style.textDecoration="underline";
}
 
function ft(){
    a.style.fontSize=b.value;
}
function ff(){
    a.style.fontFamily=f.value;
}