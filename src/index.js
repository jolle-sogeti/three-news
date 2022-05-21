export const setProps = (_this) => {
  // ensure any initial properties set before the component was initialised are passed
  // through our setters
  Object.keys(_this.props).forEach((propName) => {
    if (_this.hasOwnProperty(propName)) {
      let value = _this[propName];
      delete _this[propName];
      _this[propName] = value;
    }
  });
};

export const loadScript = (src, shadow, options) => {
  return new Promise((resolve, reject) => {
    try {
      const el = document.createElement("script");
      el.type = options.type || "text/javascript";
      el.async = options.async || false;
      el.defer = options.defer || false;
      el.src = src;
      el.addEventListener("load", () => {
        resolve({ status: true });
      });
      el.addEventListener("error", () => {
        reject({
          status: false,
          message: `Could not load script ${src}`,
        });
      });
      shadow.appendChild(el);
    } catch (err) {
      reject(err);
    }
  });
};
