import { SgtBaseElement } from "./sgt-base-element.js";
import sgtStyles from "../styles.css";

class Sgtlink extends SgtBaseElement {
  get active() {
    return this.hasAttribute("active");
  }

  set active(value) {
    if (value) {
      this.setAttribute("active", "");
    } else {
      this.removeAttribute("active");
    }
  }

  href = this.getAttribute("href");

  constructor() {
    super();

    const t = this.translate;

    this.shadow = this.attachShadow({ mode: "open" });
    this.template = document.createElement("template");

    this.template.innerHTML = `<a href=""><slot /></a>`;
    const style = document.createElement("style");

    style.textContent = `
    ${sgtStyles}
			a {
				background: 0 0;
				box-shadow: none;
				color: rgba(0,0,0,.87);
				flex: 0 0 auto;
        font-size: 1.5rem;
				line-height: 1;
				padding: .92857143em 1.14285714em;
				position: relative;
				text-decoration: none;
				text-transform: none;
				user-select: none;
				vertical-align: middle;
        border: none;
        cursor: pointer;
      }
			a:hover {
				filter: invert(25%);
			}
			a.active {
				text-decoration: underline;
				text-underline-position: under;
				text-underline-offset: 0.3rem;
			}
		`;

    this.shadow.appendChild(style);
  }

  connectedCallback() {
    this.shadow.appendChild(this.template.content.cloneNode(true));
    this.link = this.shadow.querySelector("a");
    this.link.setAttribute("href", this.href);
    this.link.addEventListener("click", (e) => this.onClick(e));
    window.addEventListener("popstate", this.onLocationChange);
    if (window.location.pathname === this.href) {
      this.link.setAttribute("active", "");
      this.link.classList.add("active");
    }
  }

  disconnectedCallback() {
    window.removeEventListener("popstate", this.onLocationChange);
  }

  onLocationChange = () => {
    if (window.location.pathname === this.href) {
      this.link.setAttribute("active", "");
      this.link.classList.add("active");
    } else {
      this.link.removeAttribute("active");
      this.link.classList.remove("active");
    }
  };

  onClick = (event) => {
    event.preventDefault();
    window.history.pushState({}, "", this.href);
    const navEvent = new PopStateEvent("popstate");
    window.dispatchEvent(navEvent);
  };
}

export default Sgtlink;
