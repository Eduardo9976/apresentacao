export default class Visibility {
  constructor(element, secondElement){
    this.element = document.querySelector(element);
    this.children = [...this.element.children];
    this.secondElement = document.querySelector(secondElement);
  }
  init() {
    if(this.element) {
      window.addEventListener('scroll', () => {
        let mid = window.innerHeight * 0.5;
        if(this.element.getBoundingClientRect().y < mid) {
          this.children.forEach((child) => {
            child.style.visibility = "visible"
            child.classList.add("animate__animated", "animate__backInRight")
            // child.classList.add("animate__bounceInDown")
          })
          if(this.secondElement) {
            const childrenSecondElement = [...this.secondElement.children]
              childrenSecondElement.forEach((children) => {
              children.style.visibility = "visible"
              children.classList.add("animate__bounceInDown")
            })
          }
        }
      })
    }
  }
}