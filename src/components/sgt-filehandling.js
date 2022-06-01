import { SgtBaseElement } from "./sgt-base-element.js";
import sgtStyles from "../styles.css";

class SgtFilehandlingExample extends SgtBaseElement {
  constructor() {
    super();

    const t = this.translate;

    this.shadow = this.attachShadow({ mode: "open" });
    const template = document.createElement("template");

    template.innerHTML = `<div class="">
      <h2>File System Access API</h2>
      <p>${t("FILE-SYSTEM-ACCESS-API-TOOLKIT-TXT")}
      </p>
      <ul>
        <li>${t("CREATE-OPEN-EDIT-SAVE-DELETE-FILES-OR-DIRECTORIES")}</li>
        <li>${t("REQUIRES-SECURE-CONTEXT")} (HTTPS)</li>
        <li>${t("REQUIRES-A-USER-GESTURE")}</li>
        <li><a href="#" id="caniuse-link">${t(
          "NOT-AS-UNIVERSAL-AS-I-WAS-HOPING-FOR"
        )}</a></li>
      </ul>
      <ul>
        <li><a href="#" id="accessfile-link">${t("ACCESS-A-FILE")}</a></li>
        <li><a href="#" id="accessimage-link">${t("ACCESS-AN-IMAGE")}</a></li>
        <li><a href="#" id="draganddrop-link">${t("DRAG-AND-DROP")}</a></li>
      </ul>
      <dialog id="accessfile-1">
        <form method="dialog">
          <button class="close-x"></button>
          <h3>${t("ACCESS-A-FILE")}</h3>
          <pre contenteditable>async getFile() {
  let handle;
  [handle] = await window.showOpenFilePicker();

  const file = await handle.getFile();
  const content = await file.text();

  console.log(content);
}
</pre>
        </form>
        <button class="ui primary button" id="btn-pick-file">${t(
          "TRY-IT"
        )}</button>
      </dialog>
      <dialog id="accessimage-1">
        <form method="dialog">
          <button class="close-x"></button>
          <h3>${t("ACCESS-AN-IMAGE")}</h3>
          <p id="image-wrapper">
          </p>
          <pre contenteditable>async getImageFile() {
  const options = {
    types: [
      {
        description: "Images",
        accept: {
          "image/*": [".png", ".gif", ".jpeg", ".jpg", ".svg"],
        },
      },
    ],
    excludeAcceptAllOption: true,
  };

  let handle;
  [handle] = await window.showOpenFilePicker(options);

  const file = await handle.getFile();
  this.preppingImage(file, document.getElementById("image-wrapper"));
}
</pre>
        </form>
        <button class="ui secondary button" id="btn-pick-image">${t(
          "TRY-IT"
        )}</button>
      </dialog>
      <dialog id="draganddrop-1">
        <form method="dialog">
          <button class="close-x"></button>
          <h3>${t("DRAG-AND-DROP-AN-IMAGE-FILE-HERE")}</h3>
          <p id="dd-image-wrapper">
          </p>
          <pre contenteditable>dragAndDropDialog.addEventListener("dragover", (e) => {
  e.preventDefault();
  dragAndDropDialog.classList.add("file-hover");
});

dragAndDropDialog.addEventListener("drop", async (e) => {
  e.preventDefault();
  dragAndDropDialog.classList.remove("file-hover");

  const fileHandlesPromises = [...e.dataTransfer.items]
    .filter((item) => item.kind === "file")
    .map((item) => item.getAsFileSystemHandle());

  for await (const handle of fileHandlesPromises) {
    if (handle.kind === "file") {
      const file = await handle.getFile();
      preppingImage(
        file,
        document.getElementById("dd-image-wrapper")
      );
    }
  }
});
</pre>
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
}
.file-hover {
  background-color: yellow;
}
ul {
  list-style: none;
  font-size: 1.5rem;
  line-height: 2rem;
  font-weight: 600;
}
  p {
    font-size: 1.5rem;
    line-height: 1.8rem;
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
      .getElementById("accessfile-link")
      .addEventListener("click", (event) => {
        event.preventDefault();
        this.shadow.getElementById("accessfile-1").showModal();
      });
    this.shadow
      .getElementById("accessimage-link")
      .addEventListener("click", (event) => {
        event.preventDefault();
        this.shadow.getElementById("accessimage-1").showModal();
      });
    this.shadow
      .getElementById("draganddrop-link")
      .addEventListener("click", (event) => {
        event.preventDefault();
        this.shadow.getElementById("draganddrop-1").showModal();
      });
    this.shadow
      .getElementById("btn-pick-file")
      .addEventListener("click", (event) => {
        event.preventDefault();
        this.getFile();
      });
    this.shadow
      .getElementById("btn-pick-image")
      .addEventListener("click", (event) => {
        event.preventDefault();
        this.getImageFile();
      });

    this.dragAndDropDialog = this.shadow.getElementById("draganddrop-1");

    this.shadow.getElementById("caniuse-link").addEventListener("click", () => {
      window.open("https://caniuse.com/?search=File%20System%20Access%20API");
    });

    this.dragAndDropDialog.addEventListener("dragover", (e) => {
      e.preventDefault();
      this.dragAndDropDialog.classList.add("file-hover");
    });

    this.dragAndDropDialog.addEventListener("dragleave", (e) => {
      e.preventDefault();
      this.dragAndDropDialog.classList.remove("file-hover");
    });

    this.dragAndDropDialog.addEventListener("drop", async (e) => {
      e.preventDefault();
      this.dragAndDropDialog.classList.remove("file-hover");

      const fileHandlesPromises = [...e.dataTransfer.items]
        .filter((item) => item.kind === "file")
        .map((item) => item.getAsFileSystemHandle());

      for await (const handle of fileHandlesPromises) {
        if (handle.kind === "file") {
          const file = await handle.getFile();
          this.preppingImage(
            file,
            this.shadow.getElementById("dd-image-wrapper")
          );
        }
      }
    });
  }

  async getFile() {
    let handle;
    [handle] = await window.showOpenFilePicker();

    const file = await handle.getFile();
    const content = await file.text();

    console.log(content);
  }
  async getImageFile() {
    const options = {
      types: [
        {
          description: "Images",
          accept: {
            "image/*": [".png", ".gif", ".jpeg", ".jpg", ".svg"],
          },
        },
      ],
      excludeAcceptAllOption: true,
    };

    let handle;
    [handle] = await window.showOpenFilePicker(options);

    const file = await handle.getFile();
    this.preppingImage(file, this.shadow.getElementById("image-wrapper"));
  }

  async preppingImage(file, target) {
    const fileType = file.type;

    if (fileType.indexOf("image/") > -1) {
      const arrayBuffer = await file.arrayBuffer().then((b) => b);
      const bytes = new Uint8Array(arrayBuffer);
      const img = document.createElement("img");
      img.src = `data:${fileType};base64,${this.encode(bytes)}`;
      target.innerHTML = "";
      target.appendChild(img);
    }
  }

  encode(input) {
    const keyStr =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
    const output = "";
    let chr1, chr2, chr3, enc1, enc2, enc3, enc4;
    let i = 0;

    while (i < input.length) {
      chr1 = input[i++];
      chr2 = i < input.length ? input[i++] : Number.NaN;
      chr3 = i < input.length ? input[i++] : Number.NaN;

      enc1 = chr1 >> 2;
      enc2 = ((chr1 & 3) << 4) | (chr2 >> 4);
      enc3 = ((chr2 & 15) << 2) | (chr3 >> 6);
      enc4 = chr3 & 63;

      if (isNaN(chr2)) {
        enc3 = enc4 = 64;
      } else if (isNaN(chr3)) {
        enc4 = 64;
      }
      output +=
        keyStr.charAt(enc1) +
        keyStr.charAt(enc2) +
        keyStr.charAt(enc3) +
        keyStr.charAt(enc4);
    }
    return output;
  }
}

export default SgtFilehandlingExample;
