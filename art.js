"use strict";
window.addEventListener("DOMContentLoaded", init);
//model view controller - separation of concerns

//example mvc
//MODEL
//const model=["peter" ,"paul" ,"mary"];
//const h2 =document.querySelector("h2");
//name="Joseph";
//CONTROLLER
//function addName(name){
//model.push(name)
//displayName();}
//VIEW
//function displayName(){
// h2.textContent= model.join(" ");
//}
//target
//function click (event){
//event.target.textContent (gives the one you click on the click function)
//}
const artwork1 = document.querySelector("#artwork1");
const artwork2 = document.querySelector("#artwork2");
const artwork3 = document.querySelector("#artwork3");
const artwork4 = document.querySelector("#artwork4");
const artwork5 = document.querySelector("#artwork5");
const artwork6 = document.querySelector("#artwork6");
const artwork7 = document.querySelector("#artwork7");
const artwork8 = document.querySelector("#artwork8");
const artwork9 = document.querySelector("#artwork9");

function init() {
  artworkN1();
  artworkN2();
  artworkN3();
  artworkN4();
  artworkN5();
  artworkN6();
  artworkN7();
  artworkN8();
  artworkN9();
}
function artworkN1() {
  for (let i = 100; i <= 300; i += 20) {
    let div = document.createElement("div");
    artwork1.appendChild(div);
    div.classList.add("box");
    div.style.width = `${i}px`;
    div.style.height = `${i}px`;
    //modify width and height
  }
}
function artworkN2() {
  for (let i = 0; i <= 90; i += 10) {
    let div = document.createElement("div");
    artwork2.appendChild(div);
    div.classList.add("box");
    div.style.transform = `rotate(${i}deg)`;
    //modify width and height
  }
}
function artworkN3() {
  for (let i = 0; i <= 200; i += 10) {
    let div = document.createElement("div");
    artwork3.appendChild(div);
    div.classList.add("circle");
    div.style.width = `${i}px`;
    div.style.height = `${i}px`;
    //modify width and height
  }
}
function artworkN4() {
  for (let i = -90; i <= 90; i += 20) {
    let div = document.createElement("div");
    artwork4.appendChild(div);
    div.classList.add("box");
    div.style.transform = `translate(${i}px,${i}px )`;
    //modify width and height
  }
}
function artworkN5() {
  for (let i = 1; i < 512; i *= 2) {
    let div = document.createElement("div");
    artwork5.appendChild(div);
    div.classList.add("circle");
    div.style.width = `${i}px`;
    div.style.height = `${i}px`;
    //modify width and height
  }
}
function artworkN6() {
  for (let i = -20; i <= 45; i += 5) {
    let div = document.createElement("div");
    artwork6.appendChild(div);
    div.classList.add("circle");
    div.style.transform = `translate(${i - 50}px,${i - 50}px) rotate(${i * 4}deg`;
  }
}
function artworkN7() {
  for (let i = 0; i <= 200; i += 10) {
    let div = document.createElement("div");
    artwork7.appendChild(div);
    div.classList.add("circle");
    div.style.width = `${i}px`;
    div.style.height = `${i}px`;
    div.style.transform = `translate(${i}px,-${i / 2}px)`;
  }
}
function artworkN8() {
  for (let i = 50; i <= 200; i += 10) {
    let div = document.createElement("div");
    artwork8.appendChild(div);
    div.classList.add("box");
    div.style.transform = `translateX(${i / 2}px)rotate(${i}deg)`; //why does the translate not work?
    // div.style.transform = `rotate(${i}deg)`;
    div.style.width = `${i}px`;
    div.style.height = `${i}px`;

    //modify width and height
  }
}
function artworkN9() {
  for (let i = 50; i <= 200; i += 30) {
    let div = document.createElement("div");
    let div2 = document.createElement("div");
    artwork9.appendChild(div);
    artwork9.appendChild(div2);
    div.classList.add("box");
    div2.classList.add("circle");
    div.style.width = `${i}px`;
    div.style.height = `${i}px`;
    div2.style.width = `${i}px`;
    div2.style.height = `${i}px`;

    //modify width and height
  }
}
