document.addEventListener("DOMContentLoaded", function () {
  const navLinks = document.querySelectorAll(".nav-links a");

  navLinks.forEach((link) => {
    link.addEventListener("click", function (event) {
      event.preventDefault();
      navigateTo(link.getAttribute("href"));
      setActiveLink(link);
    });
  });

  function navigateTo(page) {
    // Fetch HTML content directly
    fetch(page)
      .then((response) => response.text())
      .then((html) => {
        document.getElementById("app").innerHTML = html;
      })
      .catch((error) => console.error("Error fetching content:", error));
  }

  function setActiveLink(clickedLink) {
    navLinks.forEach((link) => {
      link.classList.remove("active");
    });

    clickedLink.classList.add("active");
  }
});
