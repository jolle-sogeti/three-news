import ENV from "../environments/env.js";
import svSE from "./sv-SE.json";
import enGB from "./en-GB.json";

export class SgtLocalize {
  props = {
    activeLang: localStorage.getItem("sgt-activeLang") || ENV.LANG,
    langs: ENV.langs || ["sv-SE", "en-GB"],
  };
  constructor() {
    if (!window.__sgtLangStrings) {
      this.loadLangStrings();
    }
    this.i18n = this.i18n.bind(this);
    this.translate = this.translate.bind(this);
  }

  set activeLang(value) {
    if (this.props.langs.indexOf(value) > -1) {
      this.props.activeLang = value;
      localStorage.setItem("sgt-activeLang", value);
      this.loadLangStrings().then(() => {
        console.log("set activeLang done");
      });
    }
  }

  get activeLang() {
    return this.props.activeLang;
  }

  async loadLangStrings() {
    switch (this.props.activeLang) {
      case "sv-SE":
        window.__sgtLangStrings = svSE;
        break;
      case "en-GB":
        window.__sgtLangStrings = enGB;
        break;

      default:
        break;
    }
  }

  async i18n(content) {
    return new Promise((resolve) => {
      if (!window.__sgtLangStrings) {
        this.loadLangStrings().then(() => {
          resolve(this._translatePipe(content));
        });
      } else {
        resolve(this._translatePipe(content));
      }
    });
  }

  translate(keyVal, params) {
    if (!window.__sgtLangStrings) {
      this.loadLangStrings().then(() => {
        return this.translateString(keyVal, params);
      });
    } else {
      return this.translateString(keyVal, params);
    }
  }

  translateString(keyVal, params) {
    let foundString = window.__sgtLangStrings[keyVal] || keyVal;
    if (params && Object.keys(params).length) {
      for (let [key, value] of Object.entries(params)) {
        let reg = new RegExp(`{{${key}}}`, "g");
        foundString = foundString.replace(reg, value);
      }
    }
    return foundString;
  }

  toggleLanguage() {
    const position = this.props.langs.indexOf(this.props.activeLang);
    this.activeLang =
      this.props.langs[
        position === this.props.langs.length - 1 ? 0 : position + 1
      ];
  }

  _translatePipe(content) {
    return content.replace(/{{(.*?)\| *translate *}}/g, (m, p1) => {
      let replaceString = p1.trim();
      return window.__sgtLangStrings[replaceString] || replaceString;
    });
  }
}
