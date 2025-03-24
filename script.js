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

  // Добавим код для бургер-меню
  const burgerMenu = document.querySelector(".burger-menu");
  const mobileMenu = document.querySelector(".mobile-menu");
  const body = document.body;

  burgerMenu.addEventListener("click", () => {
    burgerMenu.classList.toggle("active");
    mobileMenu.classList.toggle("active");
    body.style.overflow = body.style.overflow === "hidden" ? "" : "hidden";
  });

  // Закрываем меню при клике на ссылку
  const navLinks = document.querySelectorAll(".nav-link");
  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      burgerMenu.classList.remove("active");
      mobileMenu.classList.remove("active");
      body.style.overflow = "";
    });
  });
});
