document.addEventListener("DOMContentLoaded", () => {
  // Project card click handlers
  const projectCards = document.querySelectorAll(".project-card");

  projectCards.forEach((card) => {
    card.addEventListener("click", () => {
      const details = card.querySelector(".project-details");
      const icon = card.querySelector(".toggle-icon");

      // Toggle details visibility
      details.classList.toggle("hidden");
      details.classList.toggle("expanded");

      // Toggle icon
      icon.textContent = icon.textContent === "+" ? "−" : "+";

      // Toggle card expansion
      card.classList.toggle("expanded");
    });
  });

  // Smooth scrolling for navigation links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        target.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    });
  });

  // Section fade-in animation on scroll
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";
      }
    });
  }, observerOptions);

  document.querySelectorAll(".section").forEach((section) => {
    observer.observe(section);
  });
});
