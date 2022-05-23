import { SgtBaseElement } from "./sgt-base-element.js";
import sgtStyles from "../styles.css";

class SgtDialogExample extends SgtBaseElement {
  constructor() {
    super();

    const t = this.translate;

    this.shadow = this.attachShadow({ mode: "open" });
    const template = document.createElement("template");

    template.innerHTML = `<div class="ui text container">
      <dialog id="plain-dialog">
        <h3>Aha, I'm in a dialog!</h3>
        <p>This dialog does nothing more than present some content.</p>
        <pre id="pre-plain-dialog" contenteditable>
&lt;dialog id="plain-dialog"&gt;
  &lt;h3&gt;Aha, I'm in a dialog!&lt;/h3&gt;
  &lt;p&gt;This dialog does nothing more than present some content.&lt;/p&gt;
&lt;/dialog&gt;

 this.plainDialog.show();
 this.plainDialog.showModal();
 this.plainDialog.close();
        </pre>
      </dialog>

      <dialog class="styled-dialog" id="styled-dialog">
        <form method="dialog">
          <button class="close-x"></button>
          <h3>Oh, someone styled me!</h3>
          <p>It is very easy to add styles to your dialogs.</p>
          <button class="ui secondary button">I see!</button>
        </form>
<pre contenteditable>
&lt;dialog class="styled-dialog" id="styled-dialog"&gt;
  &lt;form method="dialog"&gt;
    &lt;button class="close-x"&gt;&lt;/button&gt;
    &lt;h3&gt;Oh, someone styled me!&lt;/h3&gt;
    &lt;p&gt;It is very easy to add styles to your dialogs.&lt;/p&gt;
    &lt;button class="ui secondary button"&gt;I see!&lt;/button&gt;
  &lt;/form&gt;
&lt;/dialog&gt;

&lt;style&gt;
.styled-dialog {
  background-color: #fff;
  border: 1px solid gray;
  border-radius: 10px;
  box-shadow: 0 2px 7px 1px rgb(0 0 0 / 30%);
}
&lt;/style&gt;
</pre>
      </dialog>

      <dialog class="form-dialog" id="form-dialog">
        <form method="dialog" id="dialog-form" class="ui fluid form">
          <button class="close-x" value="cancel"></button>
          <h3>Here be, a form!</h3>
          <p>The dialog can also handle form submissions.</p>
          <p>
            <div class="field">
              <input type="text" name="Organisation" placeholder="Organisation" autocomplete="off">
              <div class="ui pointing label">
                Please enter the name of your organisation
              </div>
            </div>

            <div class="field">
              <select name="Favorite developer">
                <option value="">Choose your favorite...</option>
                <option value="Jolle">Kevin</option>
                <option value="Jolle">Sporthy</option>
                <option value="Jolle">Staffan</option>
                <option value="Matilda">Matilda</option>
              </select>
              <div class="ui pointing label">
                Favorite developer
              </div>
            </div>
          </p>
          <div>
            <button class="ui secondary button" value="cancel">Cancel</button>
            <button class="ui primary button" value="submit">Submit</button>
          </div>
        </form>
        <div class="values-wrapper">
          <values class=""></values>
        </div>

        <pre contenteditable>

        </pre>
      </dialog>

      <h2>&lt;dialog&gt;</h2>
      <p>
        <a href="#" id="alert-anchor">Alert</a>
        <a href="#" id="confirm-anchor">Confirm</a>
      </p>
      <p>
        <button class="ui primary button" type="button" id="btn-plain-dialog">
          Open Dialog
        </button>
        <button class="ui primary button" type="button" id="btn-modal-dialog">
          Open Modal Dialog
        </button>
        <button class="ui primary button" type="button" id="btn-styled-dialog">
          Open Styled Dialog
        </button>
        <button class="ui primary button" type="button" id="btn-form-dialog">
          Open Form Dialog
        </button>
          <button
            type="button"
            class="ui secondary button" id="btn-caniuse-dialog"
          >
            ?
          </button>
      </p>
      <p>
      <output></output>
      </p>
    </div>

`;
    const style = document.createElement("style");
    style.textContent = `
    ${sgtStyles}
    .hidden {
      display: none;
    }
    .ui.form {
      max-width: calc(100% - 24px);
      position: unset;
    }
    .values-wrapper {
      display: block;
      font-size: 1.5rem;
      margin: 24px;
      min-height: 96px;
    }
    .m-fadeOut {
      visibility: hidden;
      opacity: 0;
      transition: visibility 0s linear 300ms, opacity 300ms;
    }
    .m-fadeIn {
      visibility: visible;
      opacity: 1;
      transition: visibility 0s linear 0s, opacity 1300ms;
    }

    a {
      font-size: 1.5rem;
      line-height: 2rem;
      margin-right: 3rem;
    }
    form p, #form-dialog .label, #form-dialog input, #form-dialog select {
      font-size: 1.5rem;
      line-height: 2rem;
    }

    .ui.form .field {
      margin: 0 1rem 1rem;
    }

    .fade-in-text {
      animation: fadeIn linear 5s;
      -webkit-animation: fadeIn linear 5s;
      -moz-animation: fadeIn linear 5s;
      -o-animation: fadeIn linear 5s;
      -ms-animation: fadeIn linear 5s;
            -webkit-animation-duration: 5s;
            animation-duration: 5s;
            -webkit-animation-fill-mode: both;
    }

    @keyframes fadeIn {
      0% {opacity:0;}
      100% {opacity:1;}
    }

    @-moz-keyframes fadeIn {
      0% {opacity:0;}
      100% {opacity:1;}
    }

    @-webkit-keyframes fadeIn {
      0% {opacity:0;}
      100% {opacity:1;}
    }

    @-o-keyframes fadeIn {
      0% {opacity:0;}
      100% {opacity:1;}
    }

    @-ms-keyframes fadeIn {
      0% {opacity:0;}
      100% {opacity:1;}
    }

    `;
    this.shadow.appendChild(style);
    this.shadow.appendChild(template.content.cloneNode(true));
  }

  connectedCallback() {
    this.plainDialog = this.shadow.getElementById("plain-dialog");
    this.prePlainDialog = this.shadow.getElementById("pre-plain-dialog");
    this.styledDialog = this.shadow.getElementById("styled-dialog");
    this.formDialog = this.shadow.getElementById("form-dialog");
    this.dialogBtn = this.shadow.getElementById("btn-plain-dialog");
    this.modalDialogBtn = this.shadow.getElementById("btn-modal-dialog");
    this.styledDialogBtn = this.shadow.getElementById("btn-styled-dialog");
    this.formDialogBtn = this.shadow.getElementById("btn-form-dialog");
    this.outputBox = this.shadow.querySelector("output");
    this.valuesBox = this.formDialog.querySelector("values");

    this.plainDialog.addEventListener("close", () => {
      this.dialogBtn.innerText = "Open Dialog";
      this.modalDialogBtn.innerText = "Open Modal Dialog";
    });

    this.styledDialog.addEventListener("close", () => {
      this.styledDialogBtn.innerText = "Open Styled Dialog";
    });

    this.formDialog.addEventListener("close", () => {
      this.formDialogBtn.innerText = "Open Form Dialog";
      const form = this.shadow.getElementById("dialog-form");
      if (this.formDialog.returnValue === "submit") {
        this.outputBox.innerHTML = `You submitted: \n${JSON.stringify(
          Object.values(form).reduce((obj, field) => {
            if (field.name) {
              obj[field.name] = field.value;
            }
            return obj;
          }, {})
        )}`;
      } else {
        this.outputBox.innerHTML = "You cancelled the form, and the dialog";
      }
    });

    this.dialogBtn.addEventListener("click", () => {
      if (this.plainDialog.hasAttribute("open")) {
        this.plainDialog.close();
      } else {
        this.dialogBtn.innerText = "Close Dialog";
        this.plainDialog.show();
      }
    });

    this.plainDialog.addEventListener("click", () => {
      if (this.plainDialog.hasAttribute("open")) {
        this.plainDialog.close();
      } else {
        this.dialogBtn.innerText = "Close Dialog";
        this.plainDialog.show();
      }
    });
    this.prePlainDialog.addEventListener("click", (event) => {
      event.stopPropagation();
    });
    this.modalDialogBtn.addEventListener("click", () => {
      this.modalDialogBtn.innerText = "Close Modal Dialog";
      this.plainDialog.showModal();
    });

    this.styledDialogBtn.addEventListener("click", () => {
      this.styledDialogBtn.innerText = "Close Styled Dialog";
      this.styledDialog.showModal();
    });

    this.formDialogBtn.addEventListener("click", () => {
      const form = this.shadow.getElementById("dialog-form");
      form.addEventListener("change", () => this.serializeForm(form));
      this.formDialogBtn.innerText = "Close Form Dialog";
      this.formDialog.showModal();
    });

    this.shadow
      .getElementById("btn-caniuse-dialog")
      .addEventListener("click", () => {
        window.open("https://caniuse.com/?search=%3Cdialog%3E");
      });

    this.shadow
      .getElementById("alert-anchor")
      .addEventListener("click", (event) => {
        event.preventDefault();
        alert("I'm sorry Dave. I'm afraid you can't do that.");
      });
    this.shadow
      .getElementById("confirm-anchor")
      .addEventListener("click", (event) => {
        event.preventDefault();
        confirm("Are you sure you want to choose the blue pil?");
      });
  }

  disconnectedCallback() {}

  serializeForm(form) {
    this.valuesBox.classList.remove("m-fadeIn");
    this.valuesBox.classList.add("m-fadeOut");
    const formData = ["<strong>Form data:</strong>"];
    if (form.elements["Organisation"].value) {
      formData.push(
        `${form.elements["Organisation"].name}: ${form.elements["Organisation"].value}`
      );
    }
    if (form.elements["Favorite developer"].value) {
      formData.push(
        `${form.elements["Favorite developer"].name}: ${form.elements["Favorite developer"].value}`
      );
    }
    setTimeout(() => {
      this.valuesBox.innerHTML = `${formData.join("<br />")}`;
      this.valuesBox.classList.remove("m-fadeOut");
      this.valuesBox.classList.add("m-fadeIn");
    }, 300);
  }
}

export default SgtDialogExample;
