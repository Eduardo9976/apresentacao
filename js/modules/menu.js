export default class Menu {
  constructor(btnSelector) {
    this.iconBar = document.querySelector(btnSelector);
    this.active = 'active';
    this.barActive = 'barActive';

    this.handleClickBar = this.handleClickBar.bind(this);
    this.handleClickList = this.handleClickList.bind(this);
  }

  handleClickBar() {
    const isExpanded = this.iconBar.getAttribute('aria-expanded') === 'true';
    this.iconBar.setAttribute('aria-expanded', String(!isExpanded));
    this.iconBar.classList.toggle(this.barActive);
    const list = this.iconBar.nextElementSibling;
    list.classList.toggle(this.active);
    this.handleClickList(list);
  }

  handleClickList(list) {
    list.addEventListener('click', () => {
      this.iconBar.setAttribute('aria-expanded', 'false');
      this.iconBar.classList.remove(this.barActive);
      list.classList.remove(this.active);
    });
  }

  init() {
    if (this.iconBar) {
      this.iconBar.addEventListener('click', this.handleClickBar);
    }
    return this;
  }
}
