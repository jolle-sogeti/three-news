import { SgtBaseElement } from "./sgt-base-element.js";

const template = document.createElement("template");
template.innerHTML = `<slot />`;

class SgtRoute extends SgtBaseElement {
  path = this.getAttribute("path");

  constructor() {
    super();
    this.shadow = this.attachShadow({ mode: "open" });
  }
  onLocationChange = () => {
    if (window.location.pathname === this.path) {
      this.shadow.appendChild(template.content.cloneNode(true));
    } else {
      this.shadow.innerHTML = "";
    }
  };

  connectedCallback() {
    this.onLocationChange();
    window.addEventListener("popstate", this.onLocationChange);
  }

  disconnectedCallback() {
    window.removeEventListener("popstate", this.onLocationChange);
  }
}

export default SgtRoute;
