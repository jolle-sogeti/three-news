import { SgtBaseElement } from "./sgt-base-element.js";
import sgtStyles from "../styles.css";

class SgtFooter extends SgtBaseElement {
  constructor() {
    super();

    const t = this.translate;

    const shadowRoot = this.attachShadow({ mode: "open" });
    const template = document.createElement("template");

    template.innerHTML = `<div class="ui grid container">
	<div class="left aligned six wide column"><a id="about-anchor">${t(
    "ABOUT"
  )}</a></div>
	<div class="center aligned four wide column"> <a id="license-anchor">${t(
    "LICENSE"
  )}</a></div>
	<div class="right aligned six wide column"> <a id="resources-anchor">${t(
    "LINKS"
  )}</a></div>
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
<dialog id="license-modal">
	<form method="dialog">
        <button class="close-x"></button>
		<h3>License</h3>
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

<dialog class="about-modal" id="about-modal">
	<form method="dialog">
        <button class="close-x"></button>
		<h3 class="modal-title">${t("ABOUT")}</h3>
		<article>

			<h1>${t("ABOUT-THE-NEWS-READY-TO-USE-SITE")}</h1>

			<p>${t(
        "THIS-SITE-IS-ALL-ABOUT-EXPERIMENTING-AND-PRESENTING-DEMO-CASES-ABOUT-NEW-FEATURES-IN-A-WEB-BROWSER-FEATURES-THAT-ARE-READY-TO-USE"
      )}</p>

			<p>${t(
        "IT-IS-PROBABLY-UNDER-CONSTANT-DEVELOPMENT-AND-LIKELY-FOR-THE-MOST-PART-NOT-STABLE"
      )}</p>

			<p>${t(
        "SITE-AND-CODE-IS-MAINTAINED-BY-STRONG-A-MAILTO-JOLLE-CARLESTAM-SOGETI-SE-JOLLE-CARLESTAM-A-STRONG-ON-HIS-FREE-TIME-FROM-ALL-THE-FUN-WORK-HE-DOES-AT-STRONG-A-HREF-HTTPS-VATTENFALL-SE-VATTENFALL-A-STRONG"
      )}</p>
		</article>
	</form>
</dialog>
<dialog class="recources-modal" id="recources-modal">
	<form method="dialog">
        <button class="close-x"></button>
		<h3 class="modal-title">Inspiration</h3>
		<article>

			<h1>${t("READ-MORE-ABOUT-THE-TOPICS")}</h1>

      <h2><a href="https://github.com/jolle-sogeti/three-news" target="_blank">https://github.com/jolle-sogeti/three-news</a></h2>

      <h2>&lt;Dialog&gt;</h2
      <ul>
        <li><a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dialog" target="_blank">MDN: The Dialog element</a></li>
        <li><a href="https://css-tricks.com/some-hands-on-with-the-html-dialog-element/" target="_blank">CSS-TRICKS: Some Hands-On with the HTML Dialog Element</a></li>
        <li><a href="https://webkit.org/blog/12209/introducing-the-dialog-element/" target="_blank">Webkit: Introducing the Dialog Element</a></li>
        <li><a href="https://github.com/GoogleChrome/dialog-polyfill" target="_blank">A Dialog polyfill</a></li>
      </ul>

      <h2>@Layer</h2
      <ul>
        <li><a href="https://developer.mozilla.org/en-US/docs/Web/CSS/@layer" target="_blank">MDN: @layer</a></li>
        <li><a href="https://css-tricks.com/css-cascade-layers/" target="_blank">CSS-TRICKS: A Complete Guide to CSS Cascade Layers</a></li>
        <li><a href="" target="_blank">Subject</a></li>
        <li><a href="https://codepen.io/miriamsuzanne/pen/poweapY" target="_blank">OMG: Layers</a></li>
      </ul>

      <h2>File System Access API</h2
      <ul>
        <li><a href="https://developer.mozilla.org/en-US/docs/Web/API/File_System_Access_API" target="_blank">MDN: File System Access API</a></li>
        <li><a href="https://wicg.github.io/file-system-access/" target="_blank">WC3: File System Access</a></li>
        <li><a href="https://webkit.org/blog/12257/the-file-system-access-api-with-origin-private-file-system/" target="_blank">Webkit: The File System Access API with Origin Private File System</a></li>
        <li><a href="https://css-tricks.com/getting-started-with-the-file-system-access-api/" target="_blank">CSS-TRICKS: Getting Started With the File System Access API</a></li>
        <li><a href="https://web.dev/file-system-access/" target="_blank">web.dev: The File System Access API: simplifying access to local files</a></li>
        <li><a href="https://bfy.tw/T6YL" target="_blank">Google -> File System Access API</a></li>
      </ul>
      <h2>${t("OF-INTEREST")}</h2
      <ul>
        <li><a href="https://www.youtube.com/watch?v=5b4YcLB4DVI" target="_blank">Video: What's new for the web platform</a></li>
      </ul>

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
@media only screen and (max-width: 767px) {
  .ui grid container {
    padding-top: 0.5rem;
  }
  h1 {
    font-size: 1.2rem;
  }
  h2 {
    font-size: 1.1rem;
  }
  a {
    font-size: 1rem;
    line-height: 1.5rem;
  }
  dialog {
    font-size: 1rem;
  }
  #license-modal {
    margin: auto 1.6rem;
    font-size: 1rem;
  }
}
`;
    shadowRoot.appendChild(style);
    shadowRoot.appendChild(template.content.cloneNode(true));

    this.aboutDialog = shadowRoot.getElementById("about-modal");
    this.licenceDialog = shadowRoot.getElementById("license-modal");
    this.resourcesDialog = shadowRoot.getElementById("recources-modal");
    this.aboutDialogAnchor = shadowRoot.getElementById("about-anchor");
    this.licenceDialogAnchor = shadowRoot.getElementById("license-anchor");
    this.resourcesDialogAnchor = shadowRoot.getElementById("resources-anchor");
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
    this.resourcesDialogAnchor.addEventListener("click", () => {
      if (this.resourcesDialog.hasAttribute("open")) {
        this.resourcesDialog.close();
      } else {
        this.resourcesDialog.showModal();
      }
    });
  }
}

export default SgtFooter;
