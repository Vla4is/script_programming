// console.log ("ok")
document.addEventListener('scroll', () => {
    const button = document.querySelector('.goTop');
    if (window.scrollY > 0) {
      button.classList.add('show'); // Show the button when scrolled
    } else {
      button.classList.remove('show'); // Hide the button at the top of the page
    }
  });

  function smoothScroll() {
    const scrollDuration = 300;
    const scrollIntervalMs = 15;
    const totalIntervals = scrollDuration / scrollIntervalMs;
    const scrollStep = -window.scrollY / totalIntervals;
    const scrollInterval = setInterval(function() {
        if (window.scrollY !== 0) {
            window.scrollBy(0, scrollStep);
        } else {
            clearInterval(scrollInterval); 
        }
    }, scrollIntervalMs);
}