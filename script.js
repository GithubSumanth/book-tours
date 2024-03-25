"use strict";

for(let i=0; i < 4; i++ ){
document.querySelectorAll(".cross-box")[i].addEventListener("click", function(){
  let clicked_item = document.querySelectorAll(".box")[i];
  clicked_item.style.display = "none";
});

document.querySelectorAll(".img-box")[i].addEventListener("click", function() {
  let opened_item = document.querySelectorAll(".box")[i];
  opened_item.style.display = "block";
})
}

let nameBox = document.querySelector(".inp-name");
let emailBox = document.querySelector(".inp-email");
let numberBox = document.querySelector(".inp-number");

let line = document.querySelectorAll(".inp-value");
const wrong = "3px solid #ef233c";
const right = "3px solid #80ed99";

nameBox.onkeyup = function() {
  if (nameBox.value.length === 0) {
    line[0].style.borderBottom = wrong;
  } else {
    line[0].style.borderBottom = right;
  }
}

emailBox.onkeyup = function() {
  if (emailBox.value.search("@") === -1) {
    line[1].style.borderBottom = wrong;
  } else {
    line[1].style.borderBottom = right;
  }
}

numberBox.onkeyup = function() {
  if (numberBox.value.length < 10 || numberBox.value.length > 12 ) {
    line[2].style.borderBottom = wrong;
  } else {
    line[2].style.borderBottom = right;
  }
}
