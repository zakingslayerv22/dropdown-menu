export class Dropdown {
  constructor() {
    this.dropdowns = document.querySelectorAll(".dropdown .dropdown-menu");

    if (this.dropdowns.length) {
      this.initialize();
    }
  }

  initialize() {
    document.addEventListener("click", (e) => {
      if (e.target.classList.contains("dropdown-action")) {
        this.handleClicks(e.target);
      }
    });
  }

  handleClicks(dropdownActionElement) {
    this.dropdowns.forEach((dropdown) => {
      if (dropdown.parentElement.contains(dropdownActionElement)) {
        dropdown.classList.add("active");
      } else {
        dropdown.classList.remove("active");
      }
    });
  }
}
