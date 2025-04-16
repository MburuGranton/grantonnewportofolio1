export function checkInView() {
  const animateElements = document.querySelectorAll('.animate-on-scroll');
  
  animateElements.forEach(element => {
    const elementTop = element.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;
    
    if (elementTop < windowHeight - 100) {
      element.classList.add('animate');
    }
  });
}
