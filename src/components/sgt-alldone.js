import { SgtBaseElement } from "./sgt-base-element.js";
import sgtStyles from "../styles.css";

class SgtAlldone extends SgtBaseElement {
  constructor() {
    super();

    const t = this.translate;

    this.shadow = this.attachShadow({ mode: "open" });
    const template = document.createElement("template");

    template.innerHTML = `<div class="">
      <h2>${t("THANKS")}</h2>
      <h3><a href="https://github.com/jolle-sogeti/three-news">https://github.com/jolle-sogeti/three-news</a></h3>
      <p><strong><a mailto="jolle.carlestam@sogeti.se">jolle.carlestam@sogeti.se</a></strong></p>
      <div class="example-wrapper">
<iframe src="https://www.youtube.com/embed/7nqcL0mjMjw" title="Livin on the edge" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
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
iframe {
  border: none;
  height: 63.0rem;
  margin: 0;
  padding: 0;
  width: 102.0rem;
}
@media only screen and (max-width: 767px) {
iframe {
  height: calc((100vw - 2rem) * 0.75 );
  width: calc(100vw - 2rem);
}

}
`;
    this.shadow.appendChild(style);
    this.shadow.appendChild(template.content.cloneNode(true));
  }
}

export default SgtAlldone;
