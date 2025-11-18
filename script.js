// Mobile nav toggle
const navToggle = document.getElementById("navToggle");
const mainNav = document.getElementById("mainNav");

if (navToggle && mainNav) {
  navToggle.addEventListener("click", () => {
    document.body.classList.toggle("nav-open");
  });

  // Close nav when clicking a link (on mobile)
  mainNav.addEventListener("click", (e) => {
    if (e.target.tagName === "A") {
      document.body.classList.remove("nav-open");
    }
  });
}

// Simple dropdown logic for "Connect"
const dropdown = document.querySelector(".nav-dropdown");
const dropdownToggle = document.querySelector(".nav-dropdown-toggle");

if (dropdown && dropdownToggle) {
  dropdownToggle.addEventListener("click", () => {
    const isOpen = dropdown.classList.toggle("open");
    dropdownToggle.setAttribute("aria-expanded", String(isOpen));
  });

  // Close on click outside
  document.addEventListener("click", (e) => {
    if (!dropdown.contains(e.target)) {
      dropdown.classList.remove("open");
      dropdownToggle.setAttribute("aria-expanded", "false");
    }
  });
}

// Year in footer
const yearSpan = document.getElementById("year");
if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear();
}
