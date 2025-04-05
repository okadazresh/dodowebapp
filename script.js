// Show menu section based on selected category
document.addEventListener("DOMContentLoaded", function () {
  const categoryButtons = document.querySelectorAll(".category-btn");
  const menuSections = document.querySelectorAll(".menu-section");

  categoryButtons.forEach((button) => {
    button.addEventListener("click", () => {
      // Remove active class from all buttons and sections
      categoryButtons.forEach((btn) => btn.classList.remove("active"));
      menuSections.forEach((section) => section.classList.remove("active"));

      // Add active class to clicked button and corresponding section
      button.classList.add("active");
      const categoryId = button.getAttribute("data-category");
      document.getElementById(categoryId).classList.add("active");
    });
  });

  // Initialize the page with URL parameters
  initializePageFromURL();
});

// Language changer function
function changeLanguage() {
  const lang = document.getElementById("language-select").value;

  // Set the HTML lang attribute for RTL support
  document.documentElement.lang = lang;

  // Update all elements with data-* attributes
  document.querySelectorAll("[data-" + lang + "]").forEach((element) => {
    element.textContent = element.getAttribute("data-" + lang);
  });

  // Update URL parameter
  const url = new URL(window.location);
  url.searchParams.set("lang", lang);
  window.history.pushState({}, "", url);

  // Load appropriate font for Kurdish and Arabic if needed
  if (lang === "ckb" || lang === "ar") {
    if (!document.getElementById("kurdish-font")) {
      const fontLink = document.createElement("link");
      fontLink.id = "kurdish-font";
      fontLink.rel = "stylesheet";
      fontLink.href =
        "https://cdnjs.cloudflare.com/ajax/libs/vazir-font/30.1.0/font-face.css";
      document.head.appendChild(fontLink);

      const style = document.createElement("style");
      style.textContent = `
        [lang="ckb"] * { font-family: Vazir, Arial, sans-serif !important; }
        [lang="ar"] * { font-family: Vazir, Arial, sans-serif !important; }
      `;
      document.head.appendChild(style);
    }
  } else {
    // Remove the font if switching back to English
    const fontLink = document.getElementById("kurdish-font");
    if (fontLink) {
      fontLink.remove();
    }
    const style = document.querySelector('style[data-font="custom"]');
    if (style) {
      style.remove();
    }
  }
}

// Initialize the page with the URL parameters
function initializePageFromURL() {
  const urlParams = new URLSearchParams(window.location.search);

  // Set language
  const langParam = urlParams.get("lang");
  if (langParam) {
    const langSelect = document.getElementById("language-select");
    if (langSelect.querySelector(`option[value="${langParam}"]`)) {
      langSelect.value = langParam;
      document.documentElement.lang = langParam;
      changeLanguage();
    }
  }

  // Set category
  const categoryParam = urlParams.get("category");
  if (categoryParam) {
    const categoryButton = document.querySelector(
      `.category-btn[data-category="${categoryParam}"]`
    );
    if (categoryButton) {
      document
        .querySelectorAll(".category-btn")
        .forEach((btn) => btn.classList.remove("active"));
      document
        .querySelectorAll(".menu-section")
        .forEach((section) => section.classList.remove("active"));

      categoryButton.classList.add("active");
      document.getElementById(categoryParam).classList.add("active");
    }
  }
}

// Update URL when category changes
document.querySelectorAll(".category-btn").forEach((button) => {
  button.addEventListener("click", () => {
    const categoryId = button.getAttribute("data-category");
    const url = new URL(window.location);
    url.searchParams.set("category", categoryId);
    window.history.pushState({}, "", url);
  });
});
