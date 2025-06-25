"use strict";

const sharePopUp = document.getElementById("sharePopUp");
const popup = document.getElementsByClassName("popUp");
const fillerDiv = document.getElementById("fillerDiv");

function popUp() {
  if (sharePopUp.style.display === "none") {
    whoIsMichelle.style.display = "none";
    sharePopUp.style.display = "flex";
  } else {
    sharePopUp.style.display = "none";
    whoIsMichelle.style.display = "flex";
  }
}
