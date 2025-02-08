document.addEventListener("DOMContentLoaded", () => {
  const carousel = document.querySelector(".carousel");

  let isDragging = false;
  let startX, scrollLeft;

  // Function to start dragging (Mouse + Touch)
  const dragStart = (e) => {
    isDragging = true;
    startX = (e.pageX || e.touches[0].pageX) - carousel.offsetLeft;
    scrollLeft = carousel.scrollLeft;
    carousel.classList.add("dragging");
  };

  // Function to handle dragging (Mouse + Touch)
  const dragging = (e) => {
    if (!isDragging) return;
    e.preventDefault(); // Prevent unwanted scrolling & text selection

    const x = (e.pageX || e.touches[0].pageX) - carousel.offsetLeft;
    const walk = (x - startX) * 2; // Adjust speed for smooth scrolling
    carousel.scrollLeft = scrollLeft - walk;
  };

  // Function to stop dragging (Mouse + Touch)
  const dragStop = () => {
    isDragging = false;
    carousel.classList.remove("dragging");
  };

  // Mouse Events
  carousel.addEventListener("mousedown", dragStart);
  carousel.addEventListener("mousemove", dragging);
  document.addEventListener("mouseup", dragStop);
  document.addEventListener("mouseleave", dragStop); // Stop dragging if mouse leaves

  // Touch Events (For Mobile)
  carousel.addEventListener("touchstart", dragStart);
  carousel.addEventListener("touchmove", dragging);
  carousel.addEventListener("touchend", dragStop);
});
