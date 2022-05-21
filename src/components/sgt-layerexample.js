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
        <pre contenteditable>

@layer defaults,components,overrides;

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
    line-height: 18px;
    min-width: 180px;
    padding: 9px 48px;
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
          <h3>Precedence</h3>
          <pre contenteditable>
@layer defaults,components,overrides;
          </pre>
          <ul>
            <li>no layer</li>
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
          <h3>Precedence when using !important</h3>
          <pre contenteditable>
@layer defaults,components,overrides;
          </pre>
          <ul>
            <li class="red">defaults !important</li>
            <li class="red">components !important</li>
            <li class="red">overrides !important</li>
            <li class="red">no layer !important</li>
            <li>no layer</li>
            <li>overrides</li>
            <li>components</li>
            <li>defaults</li>
          </ul>
        </div>
      </form>
    </dialog>

    <div class="ui text container">
      <h2>@layer</h2>
      <p>Layer your styles in the cascade, before specificity and order of appearance are considered</p>
      <div class="example-wrapper">
        <div class="sgt-button__container">
          <button class="sgt-btn sgt-btn--lg sgt-btn__primary" id="btn-css-dialog">
            CSS rules examples
          </button>
          <button type="button" class="sgt-btn sgt-btn--lg sgt-btn__secondary" id="btn-precedence-dialog">
            Precedence
          </button>
          <button type="button" class="sgt-btn sgt-btn--lg sgt-btn__tertiary" id="btn-important-dialog">
            Tossing !important into the pot
          </button>
          <button
            type="button"
            class="sgt-btn sgt-btn--lg sgt-btn__tertiary disabled" id="btn-caniuse-dialog"
          >
            Disabled
          </button>
        </div>
        <div class="sgt-button__container my-styles">
          <button type="button" class="sgt-btn sgt-btn--lg sgt-btn__primary">
            &lt; &lt; &lt; Same as that one
          </button>
          <button type="button" class="sgt-btn sgt-btn--lg sgt-btn__secondary">
            &lt; &lt; &lt; Also the same
          </button>
          <button type="button" class="sgt-btn sgt-btn--lg sgt-btn__tertiary">
            &lt; &lt; &lt; Me too
          </button>
          <button
            type="button"
            disabled
            class="sgt-btn sgt-btn--lg sgt-btn__tertiary"
          >
            Still Disabled
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
    ul {
      list-style: nu;
      font-size: 1.5rem;
      line-height: 2rem;
      font-weight: 600;
    }
    .red {
      color: red;
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

  disconnectedCallback() {}
}

export default SgtLayerExample;
