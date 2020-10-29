export default class Menu {
  constructor(iconBar) {
    this.iconBar = document.querySelector(iconBar);
    this.active = "active";
    this.barActive = "barActive";

    this.handleClickBar = this.handleClickBar.bind(this);
    this.handleClickList = this.handleClickList.bind(this);
  }

  handleClickBar() {
    this.iconBar.classList.toggle(this.barActive);
    const list = this.iconBar.nextElementSibling;
    list.classList.toggle(this.active);
    this.handleClickList(list);
  }
  handleClickList(list) {
    list.addEventListener("click", () => {
      this.iconBar.classList.remove(this.barActive);
      list.classList.remove(this.active);
    });
  }
  init() {
    if (this.iconBar) {
      this.iconBar.addEventListener("click", this.handleClickBar);
    }
  }
}
