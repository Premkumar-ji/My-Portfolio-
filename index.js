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
const wordsToAnimate = ["Gammer", "Programmer", "Web Designer"];
const elementId = "auto-type";
const typingSpeed = 100; // Adjust the speed (milliseconds per character)

typeWriterEffect(wordsToAnimate, elementId, typingSpeed);
