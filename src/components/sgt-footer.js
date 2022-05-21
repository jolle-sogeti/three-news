import { SgtBaseElement } from "./sgt-base-element.js";
import sgtStyles from "../styles.css";

class SgtFooter extends SgtBaseElement {
  constructor() {
    super();

    const t = this.translate;

    const shadowRoot = this.attachShadow({ mode: "open" });
    const template = document.createElement("template");

    template.innerHTML = `<div class="ui grid container">
	<div class="left aligned six wide column"><a id="about-anchor">News Ready to Use</a></div>
	<div class="center aligned four wide column"> <a id="license-anchor">License</a></div>
	<div class="right aligned six wide column">Lunch presentation @Sogeti 2022-06-07</div>
</div>
<style>
a { cursor: pointer }
#license-modal {
    border: 1px solid green;
    box-shadow: 0 2px 7px 1px rgb(0 0 0 / 30%);
    margin: auto 5rem;
	background-color: rgba(77, 182, 133, 0.75);
	font-family: Times;
	font-size: 1.4rem;
	--modal-background-color: #8ebfd6;
	--modal-button-container-text-align: center;
}
#license-modal::backdrop {
    background-color: rgb(0 128 0 / 30%);
    backdrop-filter: blur(4px);
}
.actions {
	text-align: center;
    display: block;
}
#licence-modal .modal-title {
	font-size: 2.8rem;
}
.ui.button.cancel-btn {
	padding: 1rem;
    border: 2px solid green;
    border-radius: 0.5rem;
    background: yellow;
}
</style>
<dialog id="license-modal" allow-escape>
	<form method="dialog">
        <button class="close-x"></button>
		<h3 slot="title">License</h3>
		<article>

			<h1>The MIT License (MIT)</h1>

			<p>Copyright © 2022 &lt;Jolle Carlestam&gt;</p>

			<p>Permission is hereby granted, free of charge, to any person obtaining a copy
			of this software and associated documentation files (the “Software”), to deal
			in the Software without restriction, including without limitation the rights
			to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
			copies of the Software, and to permit persons to whom the Software is
			furnished to do so, subject to the following conditions:</p>

			<p>The above copyright notice and this permission notice shall be included in
			all copies or substantial portions of the Software.</p>

			<p>THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
			IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
			FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
			AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
			LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
			OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
			THE SOFTWARE.</p>
		</article>
		<span class="actions"><button class="ui button cancel-btn">OK, I got it!</Button></span>
	</form>
</dialog>

<dialog class="about-modal" id="about-modal" allow-escape>
	<form method="dialog">
        <button class="close-x"></button>
		<h3 class="modal-title" slot="title">About</h3>
		<article>

			<h1>About the News Ready to Use site</h1>

			<p>This site is all about experimenting and presenting demo cases about new features in a web browser. Features that are ready to use.</p>

			<p>It is probably under constant development and likely, for the most part, not stable.</p>

			<p>Site and code is maintained by <strong>Jolle Carlestam</strong> on his free time from all the fun work he does at <strong><a href="https://vattenfall.se">Vattenfall</a></strong>.</p>
		</article>
	</form>
</dialog>
`;
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href =
      "https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.4.1/semantic.min.css";
    shadowRoot.appendChild(link);

    const style = document.createElement("style");
    style.textContent = `
    ${sgtStyles}
      .ui grid container {
        padding-top: 1rem;
      }
      .vf.centered.grid.container {
      background-color: unset !important;
    }
    a {
      font-size: 1.5rem;
      line-height: 2rem;
    }
    dialog {
      font-size: 1.5rem;
    }
`;
    shadowRoot.appendChild(style);
    shadowRoot.appendChild(template.content.cloneNode(true));

    this.aboutDialog = shadowRoot.getElementById("about-modal");
    this.licenceDialog = shadowRoot.getElementById("license-modal");
    this.aboutDialogAnchor = shadowRoot.getElementById("about-anchor");
    this.licenceDialogAnchor = shadowRoot.getElementById("license-anchor");
    this.aboutDialogAnchor.addEventListener("click", () => {
      if (this.aboutDialog.hasAttribute("open")) {
        this.aboutDialog.close();
      } else {
        this.aboutDialog.showModal();
      }
    });
    this.licenceDialogAnchor.addEventListener("click", () => {
      if (this.licenceDialog.hasAttribute("open")) {
        this.licenceDialog.close();
      } else {
        this.licenceDialog.showModal();
      }
    });
  }
}

export default SgtFooter;
