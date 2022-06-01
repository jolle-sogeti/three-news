import { SgtBaseElement } from "./sgt-base-element.js";
import sgtStyles from "../styles.css";

class SgtTidbitsExample extends SgtBaseElement {
  constructor() {
    super();

    const t = this.translate;

    this.shadow = this.attachShadow({ mode: "open" });
    const template = document.createElement("template");

    this.futureDate = new Date();
    this.futureDate.setDate(this.futureDate.getDate() + 30);
    let [fdate, ftime] = this.formatDate(this.futureDate).split(" ");
    this.pastDate = new Date();
    this.pastDate.setDate(this.pastDate.getDate() - 10);
    let [pdate, ptime] = this.formatDate(this.pastDate).split(" ");
    template.innerHTML = `<div class="">
      <h2>Tidbits</h2>
      <div class="example-wrapper">
        <ul>
          <li><a href="#" id="arrayat-link">Array.at()</a></li>
          <li><a href="#" id="lazyload-link">${t(
            "LAZY-LOADING-IMAGES"
          )}</a> <a href="#" id="regularload-link">(${t(
      "REGULAR-LOAD-OF-IMAGES"
    )})</a></li>
          <li><a href="#" id="datetimelocal-link">datetime-local</a> <output></output></li>
        </ul>
      <div>
        <button class="ui primary button" type="button" id="btn-more">
          ${t("MORE")}...
        </button>
      </div>
      </div>
      <dialog id="datetimelocal">
        <form method="dialog" id="date-form">
          <button class="close-x"></button>
          <h3>${t("LET-USER-SELECT-DATE-AND-TIME")}</h3>
          <p><input type="datetime-local" id="date-time"
       name="date-time" value="2022-05-13T19:30"
       min="${pdate + "T" + ptime}" max="${fdate + "T" + ftime}"></p>
          <pre id="datetime-pre">
          </pre>
          <button class="ui secondary button" value="submit">${t(
            "DONE"
          )}</button>
        </form>
      </dialog>
      <dialog id="lazyloading-1">
        <form method="dialog">
          <button class="close-x"></button>
          <h3>${t("LOAD-IMAGE-WHEN-NEEDED")}</h3>
          <p>${t(
            "DON-T-SPEND-TIME-LOADING-RECOURCES-UNTIL-THEY-RE-ASKED-FOR"
          )}</p>
          <img loading="lazy" src="/assets/lazy_load_example.jpeg" />
          <pre>
&lt;img loading="lazy" src="/assets/lazy_load_example.jpeg" /&gt;
          </pre>
          <button class="ui secondary button">${t("I-SEE")}</button>
        </form>
      </dialog>
      <dialog id="lazyloading-2">
        <form method="dialog">
          <button class="close-x"></button>
          <h3>${t("LOAD-IMAGE-EVEN-WHEN-NOT-NEEDED")}</h3>
          <p>${t("THIS-IMAGE-IS-LOADED-AT-INITIAL-PAGE-LOAD")}</p>
          <img src="/assets/old_load_example.jpeg" />
          <pre>
&lt;img src="/assets/old_load_example.jpeg" /&gt;
          </pre>
          <button class="ui secondary button">${t("I-SEE")}</button>
        </form>
      </dialog>
      <dialog id="arrayat">
        <form method="dialog">
          <button class="close-x"></button>
          <h3>Array.at()</h3>
          <p>${t("GET-THE-RIGHT-ITEM-IN-AN-ARRAY")}</p>
          <pre>
const myArray = ['one','two','three'];

myArray[0];
myArray.at(0);

myArray[myArray.length -1];
myArray.at(-1);
          </pre>
          <button class="ui secondary button">${t("I-SEE")}</button>
        </form>
      </dialog>
    </div>

`;
    const style = document.createElement("style");
    style.textContent = `
${sgtStyles}
img {
  display: block;
  margin: 2rem;
  max-width: calc(100vw - 2rem);
  width: 46rem;
}
.example-wrapper {
  display: flex;
  justify-content: space-between;
}
.future {
  font-size: 3rem;
  position: fixed;
}
input {
  padding: 1rem;
  font-size: 1.4rem;
}
a, output {
  font-size: 1.5rem;
  line-height: 2rem;
}
@media only screen and (max-width: 767px) {
  .future {
    font-size: 1.4rem;
  }
  a, output {
    font-size: 1rem;
    line-height: 1.4rem;
  }
  img {
    margin: 0;
  }

}
`;
    this.shadow.appendChild(style);
    this.shadow.appendChild(template.content.cloneNode(true));
  }

  connectedCallback() {
    this.shadow
      .getElementById("lazyload-link")
      .addEventListener("click", (event) => {
        event.preventDefault();
        this.shadow.getElementById("lazyloading-1").showModal();
      });
    this.shadow
      .getElementById("regularload-link")
      .addEventListener("click", (event) => {
        event.preventDefault();
        this.shadow.getElementById("lazyloading-2").showModal();
      });
    this.shadow
      .getElementById("arrayat-link")
      .addEventListener("click", (event) => {
        event.preventDefault();
        this.shadow.getElementById("arrayat").showModal();
      });
    this.shadow
      .getElementById("datetimelocal-link")
      .addEventListener("click", (event) => {
        event.preventDefault();
        const [date, time] = this.formatDate(new Date()).split(" ");
        let [fdate, ftime] = this.formatDate(this.futureDate).split(" ");
        let [pdate, ptime] = this.formatDate(this.pastDate).split(" ");
        this.shadow.getElementById(
          "datetime-pre"
        ).innerText = `<input type="datetime-local" id="date-time"
name="date-time" value="${date + "T" + time}"
min="${pdate + "T" + ptime}" max="${fdate + "T" + ftime}" />
`;
        this.shadow.getElementById("date-time").value = date + "T" + time;
        console.log("here");
        const dateTimeDialog = this.shadow.getElementById("datetimelocal");
        dateTimeDialog.showModal();
        dateTimeDialog.addEventListener("close", () => {
          if (dateTimeDialog.returnValue === "submit") {
            const form = this.shadow.getElementById("date-form");
            this.shadow.querySelector(
              "output"
            ).innerHTML = ` &gt; &gt; &gt; ${JSON.stringify(
              Object.values(form).reduce((obj, field) => {
                if (field.name) {
                  obj[field.name] = field.value;
                }
                return obj;
              }, {})
            )}`;
          }
        });
      });
    this.moreBtn = this.shadow.getElementById("btn-more");
    this.moreBtn.addEventListener("click", () => {
      this.showMore();
    });
  }

  disconnectedCallback() {}

  formatDate(date) {
    return (
      [
        date.getFullYear(),
        this.padTo2Digits(date.getMonth() + 1),
        this.padTo2Digits(date.getDate()),
      ].join("-") +
      " " +
      [
        this.padTo2Digits(date.getHours()),
        this.padTo2Digits(date.getMinutes()),
      ].join(":")
    );
  }

  padTo2Digits(num) {
    return num.toString().padStart(2, "0");
  }

  randomIntFromInterval(min, max) {
    // min and max included
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  sleep(ms, iteration) {
    return new Promise((resolve) => setTimeout(resolve, ms * iteration));
  }

  showMore() {
    const windowWidth = window.innerWidth,
      windowHeight = window.innerHeight;
    const futureBits = [
      "CSS accent-color",
      "CSS color-scheme",
      "selectmenu",
      "COLRv1 fonts",
      "Back/forward cache",
      "CSS aspect-ratio",
      "CSS containment",
      "Content visibility",
      "Priority hints",
      "CSS size-adjust",
      "SIMD",
      "Interaction to next paint",
      "CHIPS",
      "Topics API",
      "UA client hints",
      "Webauthn",
      "Webauthn passkeys",
      "Media session API",
      "Window controls overlay",
      "Navigation API",
      "Page transition API",
      "Themes in manifests",
      "Eyedropper API",
      "Virtual keyboard API",
      "structuredClone",
      "createImageBitmap",
      "Top level await",
      "Private fields",
      "SharedArrayBuffer",
      "URLPattern",
      "Web codecs API",
      "CSS :has()",
      "CSS container queries",
    ];

    const colors = ["red", "green", "blue", "orange", "purple"];
    let i = 0;
    futureBits.forEach((bit) => {
      (async () => {
        await this.sleep(500, i++);
        //Do some stuff
        let left = this.randomIntFromInterval(1, windowWidth);
        let top = this.randomIntFromInterval(1, windowHeight);
        if (left > windowWidth - 370) {
          left = left - 370;
        }
        if (top < 150) {
          top = top + 150;
        }
        const bitElement = document.createElement("div");
        bitElement.textContent = bit;
        bitElement.classList.add("future");
        bitElement.style.color =
          colors[Math.floor(Math.random() * colors.length)];
        bitElement.style.left = left + "px";
        bitElement.style.top = top + "px";
        let width = bitElement.offsetWidth;
        let height = bitElement.offsetHeight;

        this.shadow.appendChild(bitElement);
        //Do some more stuff
      })();
    });
  }
}

export default SgtTidbitsExample;
