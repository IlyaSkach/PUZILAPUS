document.addEventListener("DOMContentLoaded", () => {
  const observerOptions = {
    root: null,
    rootMargin: "50px",
    threshold: 0.1,
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.classList.add("animate");
        }, 100);
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // Находим все элементы целей
  const goalItems = document.querySelectorAll(".goal-item");

  // Начинаем наблюдение за каждым элементом
  goalItems.forEach((item) => {
    observer.observe(item);
  });
});
