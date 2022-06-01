import { SgtBaseElement } from "./sgt-base-element.js";
import sgtStyles from "../styles.css";

class SgtSecondaryMenu extends SgtBaseElement {
  constructor() {
    super();

    const t = this.translate;

    this.shadow = this.attachShadow({ mode: "open" });
    const template = document.createElement("template");

    template.innerHTML = `
<div class="right menu">
  <a href="#" class="ui item toggle-menu" id="toggle-menu">
    <i class="bars icon"></i>
  </a>
   <a href="#" id="toggle-lang">
    <i class="globe icon"></i>
  </a>
</div>
`;
    const link = document.createElement("link");
    link.rel = "stylesheet";

    const style = document.createElement("style");
    style.textContent = `
${sgtStyles}
:root {
  font-size: 1.5rem;
  margin-top: 0.6rem;
  text-align: end;
  width: 100%;
}
a {
  display: inline-block;
  text-align: right;
}
a.toggle-menu {
  display: none;
}
@media only screen and (max-width: 767px) {
  a.toggle-menu {
    display: inline-block;
  }
}
`;
    this.shadow.appendChild(style);
    this.shadow.appendChild(template.content.cloneNode(true));
  }

  connectedCallback() {
    const menuLink = this.select("#toggle-menu");

    menuLink.addEventListener("click", (event) => {
      event.preventDefault();
      document.body.classList.toggle("dropdown-menu");
    });

    const langLink = this.select("#toggle-lang");

    langLink.addEventListener("click", (event) => {
      event.preventDefault();
      this.localize.toggleLanguage();
      window.location.reload(true);
    });
  }
}

export default SgtSecondaryMenu;
