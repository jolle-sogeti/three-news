import { SgtBaseElement } from "./sgt-base-element.js";
import sgtStyles from "../styles.css";

let t;

class SgtDialogExample extends SgtBaseElement {
  constructor() {
    super();

    t = this.translate;

    this.shadow = this.attachShadow({ mode: "open" });
    const template = document.createElement("template");

    template.innerHTML = `<div>
      <dialog id="plain-dialog">
        <h3>${t("AHA-I-M-IN-A-DIALOG")}</h3>
        <p>${t("THIS-DIALOG-TXT")}</p>
        <pre id="pre-plain-dialog" contenteditable>
&lt;dialog id="plain-dialog"&gt;
  &lt;h3&gt;${t("AHA-I-M-IN-A-DIALOG")}&lt;/h3&gt;
  &lt;p&gt;${t("THIS-DIALOG-TXT")}&lt;/p&gt;
&lt;/dialog&gt;

const plainDialog = document.getElementById("plain-dialog");
plainDialog.show();
plainDialog.showModal();
plainDialog.close();
        </pre>
      </dialog>

      <dialog class="styled-dialog" id="styled-dialog">
        <form method="dialog">
          <button class="close-x"></button>
          <h3>${t("OH-SOMEONE-STYLED-ME")}</h3>
          <p>${t("STYLES-DIALOGS-TXT")}</p>
          <button class="ui secondary button">${t("I-SEE")}</button>
        </form>
<pre contenteditable>
&lt;dialog class="styled-dialog" id="styled-dialog"&gt;
  &lt;form method="dialog"&gt;
    &lt;button class="close-x"&gt;&lt;/button&gt;
    &lt;h3&gt;${t("OH-SOMEONE-STYLED-ME")}&lt;/h3&gt;
    &lt;p&gt;${t("STYLES-DIALOGS-TXT")}&lt;/p&gt;
    &lt;button class="ui secondary button"&gt;${t("I-SEE")}&lt;/button&gt;
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
          <h3>${t("HERE-BE-A-FORM")}</h3>
          <p>${t("DIALOG-FORM-SUB-TXT")}</p>
          <p>
            <div class="field">
              <input type="text" name="Organisation" placeholder="${t(
                "ORGANISATION"
              )}" autocomplete="off">
              <div class="ui pointing label">
                ${t("PLEASE-ENTER-THE-NAME-OF-YOUR-ORGANISATION")}
              </div>
            </div>

            <div class="field">
              <select name="${t("FAVORITE-DEVELOPER")}">
                <option value="">${t("CHOOSE-YOUR-FAVORITE")}...</option>
                <option value="Jolle">Kevin</option>
                <option value="Jolle">Sandra</option>
                <option value="Jolle">Staffan</option>
                <option value="Matilda">Matilda</option>
              </select>
              <div class="ui pointing label">
                ${t("FAVORITE-DEVELOPER")}
              </div>
            </div>
          </p>
          <div>
            <button class="ui secondary button" value="cancel">${t(
              "CANCEL"
            )}</button>
            <button class="ui primary button" value="submit">${t(
              "SUBMIT"
            )}</button>
          </div>
        </form>
        <div class="values-wrapper">
          <values></values>
        </div>
      </dialog>

      <h2>&lt;dialog&gt;</h2>
      <p>
        <a href="#" id="alert-anchor">Alert</a>
        <a href="#" id="confirm-anchor">Confirm</a>
      </p>
      <div class="btn-wrapper">
        <button class="ui primary button" type="button" id="btn-plain-dialog">
          ${t("OPEN-DIALOG")}
        </button>
        <button class="ui primary button" type="button" id="btn-modal-dialog">
          ${t("OPEN-MODAL-DIALOG")}
        </button>
        <button class="ui primary button" type="button" id="btn-styled-dialog">
          ${t("OPEN-STYLED-DIALOG")}
        </button>
        <button class="ui primary button" type="button" id="btn-form-dialog">
          ${t("OPEN-FORM-DIALOG")}
        </button>
        <button
          type="button"
          class="ui secondary button" id="btn-caniuse-dialog"
        >
          ?
        </button>
      </div>
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
  max-width: calc(100% - 2.4rem);
  position: unset;
}
.values-wrapper {
  display: block;
  font-size: 1.5rem;
  margin: 2.4rem;
  min-height: 9.6rem;
}
.btn-wrapper {
  display: flex;
  flex-direction: row;
  grid-gap: 0.8rem;
  margin-bottom: 0.2rem;
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

@media only screen and (max-width: 767px) {

  .btn-wrapper {
    flex-direction: column;
  }

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
      this.dialogBtn.innerText = t("OPEN-DIALOG");
      this.modalDialogBtn.innerText = t("OPEN-MODAL-DIALOG");
    });

    this.styledDialog.addEventListener("close", () => {
      this.styledDialogBtn.innerText = t("OPEN-STYLED-DIALOG");
    });

    this.formDialog.addEventListener("close", () => {
      this.formDialogBtn.innerText = t("OPEN-FORM-DIALOG");
      const form = this.shadow.getElementById("dialog-form");
      if (this.formDialog.returnValue === "submit") {
        this.outputBox.innerHTML = `${t("YOU-SUBMITTED")}: \n${JSON.stringify(
          Object.values(form).reduce((obj, field) => {
            if (field.name) {
              obj[field.name] = field.value;
            }
            return obj;
          }, {})
        )}`;
      } else {
        this.outputBox.innerHTML = t("YOU-CANCELLED-THE-FORM-AND-THE-DIALOG");
      }
    });

    this.dialogBtn.addEventListener("click", () => {
      if (this.plainDialog.hasAttribute("open")) {
        this.plainDialog.close();
      } else {
        this.dialogBtn.innerText = t("CLOSE-DIALOG");
        this.plainDialog.show();
      }
    });

    this.plainDialog.addEventListener("click", () => {
      if (this.plainDialog.hasAttribute("open")) {
        this.plainDialog.close();
      } else {
        this.dialogBtn.innerText = t("CLOSE-DIALOG");
        this.plainDialog.show();
      }
    });
    this.prePlainDialog.addEventListener("click", (event) => {
      event.stopPropagation();
    });
    this.modalDialogBtn.addEventListener("click", () => {
      this.modalDialogBtn.innerText = t("CLOSE-MODAL-DIALOG");
      this.plainDialog.showModal();
    });

    this.styledDialogBtn.addEventListener("click", () => {
      this.styledDialogBtn.innerText = t("CLOSE-STYLED-DIALOG");
      this.styledDialog.showModal();
    });

    this.formDialogBtn.addEventListener("click", () => {
      const form = this.shadow.getElementById("dialog-form");
      form.addEventListener("change", () => this.serializeForm(form));
      this.formDialogBtn.innerText = t("CLOSE-FORM-DIALOG");
      this.outputBox.innerHTML = "";
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
        confirm(t("CHOOSE-BLUE-PIL-TXT"));
      });
  }

  serializeForm(form) {
    this.valuesBox.classList.remove("m-fadeIn");
    this.valuesBox.classList.add("m-fadeOut");
    const formData = ["<strong>Form data:</strong>"];
    if (form.elements["Organisation"].value) {
      formData.push(
        `${form.elements["Organisation"].name}: ${form.elements["Organisation"].value}`
      );
    }
    if (form.elements[t("FAVORITE-DEVELOPER")].value) {
      formData.push(
        `${form.elements[t("FAVORITE-DEVELOPER")].name}: ${
          form.elements[t("FAVORITE-DEVELOPER")].value
        }`
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
