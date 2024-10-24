export class Dropdown {
  constructor() {
    this.dropdowns = document.querySelectorAll(".dropdown .dropdown-menu");

    if (this.dropdowns.length) {
      this.initialize();
    }
  }

  initialize() {
    document.addEventListener("click", (e) => {
      console.log(e.target);
    });
  }
}
