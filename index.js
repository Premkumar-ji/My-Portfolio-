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




function showdetails1() {
  updateEducationDetails("Matriculation", "78.8%", "Mithila Academy Public School", "CBSE", "Science");
}

function showdetails2() {
  updateEducationDetails("JBIE", "83.8%", "Swami Sahajanand College, Chas", "JAC", "Science");

  var change_to_Percentage = document.querySelector(".SGPA");
  change_to_Percentage.innerHTML = "Percentage";
}

function showdetails3() {
  updateEducationDetails("BCA", "In Progress", "Bokaro Steel City College", "JAC", "Science");
}

function showdetails4() {
  updateEducationDetails("MCA", "In My Future Plans", "In My Future Plans", "In My Future Plans", "In My Future Plans");
}

function updateEducationDetails(degree, percentage, college, board, stream) {
  document.querySelector(".degree").innerHTML = degree;
  document.getElementById("Percentage").innerHTML = percentage;
  document.getElementById("college_name").innerHTML = college;
  document.getElementById("board").innerHTML = board;
  document.getElementById("stream").innerHTML = stream;

  // Update the label for percentage/SGPA based on the degree
  var change_to_Percentage = document.querySelector(".SGPA");
  var change_to_Board = document.querySelector(".board")
  if (degree == 'Matriculation' || degree == 'JAC') {
    change_to_Percentage.innerHTML = "Percentage";
    change_to_Board.innerHTML = "Board";
  }
  else {
    change_to_Percentage.innerHTML = "SGPA";
    change_to_Board.innerHTML= "College"
  }

}




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
