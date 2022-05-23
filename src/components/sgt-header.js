import { SgtBaseElement } from "./sgt-base-element.js";
import sgtStyles from "../styles.css";

class SgtHeader extends SgtBaseElement {
  constructor() {
    super();

    this.shadow = this.attachShadow({ mode: "open" });
    this.template = document.createElement("template");

    this.template.innerHTML = `<div class="ui menu"><slot></slot></div>
`;
    const style = document.createElement("style");

    style.textContent = `
    ${sgtStyles}
`;

    this.shadow.appendChild(style);
  }

  connectedCallback() {
    this.shadow.appendChild(this.template.content.cloneNode(true));
  }

  disconnectedCallback() {}
}

export default SgtHeader;
