// stickey header

// Add JavaScript to show/hide the floating icons on scroll
let floatingIcons = document.querySelector('.floating-icons');
let isScrolling;

window.addEventListener('scroll', function () {
    // Clear our timeout throughout the scroll
    window.clearTimeout(isScrolling);

    // Set a timeout to run after scrolling ends
    isScrolling = setTimeout(function () {
        floatingIcons.classList.add('show');
    }, 66); // Adjust this value as needed (66ms is 1/15th of a second)

    // Hide icons when scrolling
    floatingIcons.classList.remove('show');
}, false);

document.addEventListener('DOMContentLoaded', () => {
    const words = ["Front-End Developer..", "Web Designer..", "WordPress Developer.."];
    let wordIndex = 0;
    let charIndex = 0;
    let currentWord = '';
    let isDeleting = false;
    const typeSpeed = 100;
    const backSpeed = 50;
    const backDelay = 1500;
    const textElement = document.querySelector('.text-sliding-line');

    function type() {
      if (isDeleting) {
        if (charIndex > 0) {
          textElement.textContent = currentWord.substring(0, charIndex - 1);
          charIndex--;
          setTimeout(type, backSpeed);
        } else {
          isDeleting = false;
          wordIndex = (wordIndex + 1) % words.length;
          currentWord = words[wordIndex];
          setTimeout(type, typeSpeed);
        }
      } else {
        if (charIndex < currentWord.length) {
          textElement.textContent = currentWord.substring(0, charIndex + 1);
          charIndex++;
          setTimeout(type, typeSpeed);
        } else {
          isDeleting = true;
          setTimeout(type, backDelay);
        }
      }
    }

    currentWord = words[wordIndex];
    type();
  });