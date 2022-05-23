import { SgtBaseElement } from "./sgt-base-element.js";
import sgtStyles from "../styles.css";

class SgtStart extends SgtBaseElement {
  constructor() {
    super();

    const t = this.translate;

    this.shadow = this.attachShadow({ mode: "open" });
    const template = document.createElement("template");

    template.innerHTML = `<div class="ui placeholder segment">
  <div class="ui icon header">
    <i class="code icon"></i>
    <i class="code branch icon"></i>
    <i class="filter icon"></i>
    <i class="keyboard icon"></i>
    <i class="terminal icon"></i>
    <h2>NEWS READY TO USE</h2>
    <p>[Presented by Jolle Carlestam]</p>
    <p class="talk-about">
      <strong>Let's talk about</strong>
    </p>
    <ul>
      <li>&lt;dialog&gt;</li>
      <li>@Layer</li>
      <li>File System Access API</li>
      <li>Tidbits (if time permits)</li>
    </ul>
    <p>[Brought to you by Daniel Granat - Applied Innovation Exchange]</p>
  </div>
  <sgt-link href="/dialog"
    ><div class="ui primary button"><span id="countDown"></span><span id="dotDowns"></span></div></sgt-link
  >
</div>
`;
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href =
      "https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.4.1/semantic.min.css";
    this.shadow.appendChild(link);

    const style = document.createElement("style");
    style.textContent = `
    ${sgtStyles}
      .ui.icon.header {
        display: inline-block;
        font-family: 'Menlo';
        font-size: 1.5rem;
        font-variant-caps: small-caps;
        margin: 2rem auto;
      }
      .ui.icon.header .icon {
        color: #0070ad;
        display: inline-block;
        margin: 0 2rem 0.5rem;
      }
      h2 {
        margin: 2rem;
      }
      p.talk-about {
        margin: 0;
      }
      ul {
        text-align: left;
        width: fit-content;
        margin: 0 auto 2rem auto;
        list-style-type: disclosure-closed;
      }
      #dotDowns {
        width: 16px;
        text-align: left;
        display: inline-block;
      }
`;
    this.shadow.appendChild(style);
    this.shadow.appendChild(template.content.cloneNode(true));
  }

  connectedCallback() {
    this.countDownDate = new Date("June 7, 2022 12:00:00").getTime();
    this.countDown = this.shadow.getElementById("countDown");
    this.dotDowns = this.shadow.getElementById("dotDowns");
    this.x = setInterval(() => {
      const now = new Date().getTime();

      const distance = this.countDownDate - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      const displayParts = [];
      days > 0 ? displayParts.push(days + " Days ") : null;
      hours > 0 ? displayParts.push(hours + " Hours ") : null;
      minutes > 0 ? displayParts.push(minutes + " Minutes ") : null;
      this.countDown.innerHTML = displayParts.join("");
      this.dotDowns.innerHTML = ".".repeat(3 - (seconds % 3));

      if (distance < 0) {
        clearInterval(this.x);
        this.countDown.innerHTML = "Start";
      }
    }, 1000);
  }
  disconnectedCallback() {
    clearInterval(this.x);
  }
}

export default SgtStart;
