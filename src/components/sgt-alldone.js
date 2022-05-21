import { SgtBaseElement } from "./sgt-base-element.js";
import sgtStyles from "../styles.css";

class SgtAlldone extends SgtBaseElement {
  constructor() {
    super();

    const t = this.translate;

    this.shadow = this.attachShadow({ mode: "open" });
    const template = document.createElement("template");

    template.innerHTML = `<div class="ui text container">
      <h2>Thanks!</h2>
      <div class="example-wrapper">
<iframe width="1020" height="630" src="https://www.youtube.com/embed/7nqcL0mjMjw" title="Livin on the edge" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

    </div>

`;
    const style = document.createElement("style");
    style.textContent = `
    ${sgtStyles}
  .example-wrapper {
    display: flex;
    justify-content: space-between;
  }
`;
    this.shadow.appendChild(style);
    this.shadow.appendChild(template.content.cloneNode(true));
  }

  connectedCallback() {}

  disconnectedCallback() {}
}

export default SgtAlldone;
