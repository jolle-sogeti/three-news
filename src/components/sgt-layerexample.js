import { SgtBaseElement } from "./sgt-base-element.js";
import sgtStyles from "../styles.css";
import demoStyles from "../sgt-styles.css";

class SgtLayerExample extends SgtBaseElement {
  constructor() {
    super();

    const t = this.translate;

    this.shadow = this.attachShadow({ mode: "open" });
    const template = document.createElement("template");

    template.innerHTML = `
    <dialog id="css-dialog">
      <form type="dialog">
        <button class="close-x" value="cancel"></button>
        <pre contenteditable>@layer defaults,components,overrides;

import url(https://mysite/mycss.css) layer(defaults);

@layer overrides {
  .sgt-btn__tertiary {
    color: red;
    border: 3px green solid;
  }
}

@layer components {
  @charset "UTF-8";

  .sgt-btn {
    background-color: transparent;
    border: 2px solid transparent;
    border-radius: 20px;
    color: #222222;
    display: inline-block;
    font-size: 0.875rem;
    font-weight: 500;
    line-height: 1.8rem;
    min-width: 18rem;
    padding: 0.9rem 4.8rem;
    position: relative;
    text-align: center;
    transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out, -webkit-box-shadow 0.15s ease-in-out;
    user-select: none;
    vertical-align: middle;
  }

  .sgt-btn__primary {
    color: #111111;
    background: #ffda00;
  }

  .sgt-btn__secondary {
    color: #fff;
    background: #1964a3;
  }

  .sgt-btn__tertiary {
    color: #222222;
    background: transparent;
    border: 2px #cdd1d4 solid;
  }

}
</pre>
      </form>
    </dialog>
    <dialog id="precedence-dialog">
      <form type="dialog">
        <button class="close-x" value="cancel"></button>
        <div style="margin: 1.6rem">
          <h3>${t("PRECEDENCE")}</h3>
          <pre contenteditable>@layer defaults,components,overrides;
</pre>
          <ul>
            <li>${t("NO-LAYER")}</li>
            <li>overrides</li>
            <li>components</li>
            <li>defaults</li>
          </ul>
        </div>
      </form>
    </dialog>

    <dialog id="important-dialog">
      <form type="dialog">
        <button class="close-x" value="cancel"></button>
        <div style="margin: 1.6rem">
          <h3>${t("PRECEDENCE-WHEN-USING-IMPORTANT")}</h3>
          <pre contenteditable>@layer defaults,components,overrides;
</pre>
          <ul>
            <li class="red">defaults !important</li>
            <li class="red">components !important</li>
            <li class="red">overrides !important</li>
            <li class="red">${t("NO-LAYER")} !important</li>
            <li>${t("NO-LAYER")}</li>
            <li>overrides</li>
            <li>components</li>
            <li>defaults</li>
          </ul>
        </div>
      </form>
    </dialog>

    <div class="">
      <h2>@layer</h2>
      <p>${t("LAYER-YOUR-STYLES-TXT")}</p>
      <div class="example-wrapper">
        <div class="sgt-button__container">
          <button class="sgt-btn sgt-btn--lg sgt-btn__primary" id="btn-css-dialog">
            ${t("CSS-RULES-EXAMPLES")}
          </button>
          <button type="button" class="sgt-btn sgt-btn--lg sgt-btn__secondary" id="btn-precedence-dialog">
            ${t("PRECEDENCE")}
          </button>
          <button type="button" class="sgt-btn sgt-btn--lg sgt-btn__tertiary" id="btn-important-dialog">
            ${t("TOSSING-IMPORTANT-INTO-THE-POT")}
          </button>
          <button
            type="button"
            class="sgt-btn sgt-btn--lg sgt-btn__tertiary disabled" id="btn-caniuse-dialog"
          >
            ${t("DISABLED")}
          </button>
        </div>
        <div class="sgt-button__container my-styles">
          <button type="button" class="sgt-btn sgt-btn--lg sgt-btn__primary">
            &lt; &lt; &lt; ${t("SAME-AS-THAT-ONE")}
          </button>
          <button type="button" class="sgt-btn sgt-btn--lg sgt-btn__secondary">
            &lt; &lt; &lt; ${t("ALSO-THE-SAME")}
          </button>
          <button type="button" class="sgt-btn sgt-btn--lg sgt-btn__tertiary">
            &lt; &lt; &lt; ${t("ME-TOO")}
          </button>
          <button
            type="button"
            disabled
            class="sgt-btn sgt-btn--lg sgt-btn__tertiary"
          >
            ${t("STILL-DISABLED")}
          </button>
        </div>
      </div>

    </div>

`;
    const style = document.createElement("style");
    style.textContent = `
${sgtStyles}
${demoStyles}
.example-wrapper {
  display: flex;
  justify-content: space-around;
}
p {
  font-size: 1.5rem;
  line-height: 1.8rem;
}
ul {
  list-style: nu;
  font-size: 1.5rem;
  line-height: 2rem;
  font-weight: 600;
}
.red {
  color: red;
}

@media only screen and (max-width: 767px) {
  .example-wrapper {
    flex-direction: column;
  }
  p {
    font-size: 1rem;
    line-height: 1.4rem;
  }
  ul {
    font-size: 1rem;
    line-height: 1.4rem;
  }
  .sgt-btn--lg {
    min-width: 18rem;
  }

}

`;
    this.shadow.appendChild(style);
    this.shadow.appendChild(template.content.cloneNode(true));
  }

  connectedCallback() {
    this.cssDialog = this.shadow.getElementById("css-dialog");
    this.cssDialogBtn = this.shadow.getElementById("btn-css-dialog");
    this.cssDialogBtn.addEventListener("click", (event) => {
      event.preventDefault();
      event.stopPropagation();
      this.cssDialog.showModal();
    });

    this.precedenceDialog = this.shadow.getElementById("precedence-dialog");
    this.precedenceDialogBtn = this.shadow.getElementById(
      "btn-precedence-dialog"
    );
    this.precedenceDialogBtn.addEventListener("click", () => {
      this.precedenceDialog.showModal();
    });

    this.importantDialog = this.shadow.getElementById("important-dialog");
    this.importantDialogBtn = this.shadow.getElementById(
      "btn-important-dialog"
    );
    this.importantDialogBtn.addEventListener("click", () => {
      this.importantDialog.showModal();
    });
    this.shadow
      .getElementById("btn-caniuse-dialog")
      .addEventListener("click", () => {
        window.open("https://caniuse.com/?search=%40layer");
      });

    this.cssDialog.querySelector("form").addEventListener("submit", (event) => {
      event.preventDefault();
      this.cssDialog.close();
    });
    this.precedenceDialog
      .querySelector("form")
      .addEventListener("submit", (event) => {
        event.preventDefault();
        this.precedenceDialog.close();
      });
    this.importantDialog
      .querySelector("form")
      .addEventListener("submit", (event) => {
        event.preventDefault();
        this.importantDialog.close();
      });
  }
}

export default SgtLayerExample;
