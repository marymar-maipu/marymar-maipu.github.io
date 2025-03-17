//HEADER SHRUNK
window.addEventListener('scroll', function() {
    const header = document.querySelector("header");
    if (window.scrollY > 50) {
      header.classList.add('shrunk');
    } else {
      header.classList.remove('shrunk');
    }
  });
//FADE-IN INICIAL
window.addEventListener('DOMContentLoaded', () => {
    const contents = document.querySelectorAll('.initial-fade-in');
    contents.forEach(content => {
        content.classList.add('visible');
    });
});
//FADE-IN
window.addEventListener('scroll', () => {
    const contents = document.querySelectorAll('.fade-in');
    
    contents.forEach(content => {
      const contentPosition = content.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
  
      if (contentPosition < windowHeight * 0.9) {
        content.classList.add('visible');
      }
    });
});
