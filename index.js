function education(){
  
}





function typeWriterEffect(words, elementId, speed) {
  const element = document.getElementById(elementId);
  let currentWordIndex = 0;
  let currentCharIndex = 0;

  function type() {
    if (currentCharIndex < words[currentWordIndex].length) {
      element.innerHTML += words[currentWordIndex].charAt(currentCharIndex);
      currentCharIndex++;
      setTimeout(type, speed);
    } else {
      setTimeout(erase, 2000); // Wait for 1 second before erasing
    }
  }

  function erase() {
    if (currentCharIndex >= 0) {
      element.innerHTML = words[currentWordIndex].substring(0, currentCharIndex);
      currentCharIndex--;
      setTimeout(erase, speed / 1.5); // Adjust speed for erasing
    } else {
      currentWordIndex = (currentWordIndex + 1) % words.length;
      setTimeout(type, 500); // Wait for 0.5 seconds before typing the next word
    }
  }

  type();
}

// Usage
const wordsToAnimate = ["Gamer", "Programmer", "Web Designer"];
const elementId = "auto-type";
const typingSpeed = 100; // Adjust the speed (milliseconds per character)

typeWriterEffect(wordsToAnimate, elementId, typingSpeed);
// function show_nav(){

// const show_links= document.querySelector('.nav')
// show_links.style.display='block';

// // }
// if(max-width==)
// document.getElementById("color").style.background="black";
// document.getElementById("color").style.height="4000px";

function showdetails1() {

  var firstDivContent = document.querySelector(".class10 .name-of-degree");
  var universalDivContent = document.querySelector(".degree");
  universalDivContent.innerHTML = firstDivContent.innerHTML;
  var percent = document.getElementById("Percentage");
  percent.innerHTML = "78.8%";
  var college = document.getElementById("college_name");
  college.innerHTML = "Mithila Academy Public School";
  
  var Board=document.getElementById("board")
  Board.innerHTML="CBSE";

  var stream=document.getElementById('stream');
  stream.innerHTML="no stream";

  
  var change_to_Percentage = document.querySelector(".SGPA");
  change_to_Percentage.innerHTML="Percentage";



}



function showdetails2() {
  var universalDivContent = document.querySelector(".degree");
  var thirdivcontent = document.querySelector(".JBIE .name-of-degree");

  universalDivContent.innerHTML = thirdivcontent.innerHTML;

  var percent=document.getElementById("Percentage");
  percent.innerHTML="83.8%";

  var college = document.getElementById("college_name");
  college.innerHTML = "Swami Sahajanand College, Chas";
  
  var Board=document.getElementById("board")
  Board.innerHTML="JAC";

  
  var stream=document.getElementById("stream");
  stream.innerHTML="Science";

  
  var change_to_Percentage = document.querySelector(".SGPA");
  change_to_Percentage.innerHTML="Percentage";

}

function showdetails3(){
  var universalDivContent = document.querySelector(".degree");
  var thirdivcontent = document.querySelector(".Graduation .name-of-degree");

  universalDivContent.innerHTML = thirdivcontent.innerHTML;


  var percent=document.getElementById("Percentage");
  percent.innerHTML="In Progress";

  var college = document.getElementById("college_name");
  college.innerHTML = "Bokaro Steel City College";
  
  var Board=document.getElementById("board")
  Board.innerHTML="JAC";

  
  var stream=document.getElementById("stream");
  stream.innerHTML="Science";

  var change_to_SGPA = document.querySelector(".SGPA");
  change_to_SGPA.innerHTML="SGPA";

}
function showdetails4(){
  var universalDivContent = document.querySelector(".degree");
  var thirdivcontent = document.querySelector(".Post-Graduation .name-of-degree");

  universalDivContent.innerHTML = thirdivcontent.innerHTML;

  var percent=document.getElementById("Percentage");
  percent.innerHTML="In My Future Plans";

  var college = document.getElementById("college_name");
  college.innerHTML = "In My Future Plans";
  
  var Board=document.getElementById("board")
  Board.innerHTML="In My Future Plans";

  
  var stream=document.getElementById("stream");
  stream.innerHTML="In My Future Plans";

  var change_to_SGPA = document.querySelector(".SGPA");
  change_to_SGPA.innerHTML="SGPA";

}
// showdetails();

window.onload = function() {
  var gridItems = document.querySelectorAll(".grid-item");
  
  gridItems.forEach(function(item) {
    var text = item.textContent.trim();
    var textLength = text.length;
    
    if (textLength > 4) {
      item.style.fontSize = "1rem";
    }

  });
};