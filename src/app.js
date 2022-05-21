import { SgtBaseElement } from "./components/sgt-base-element.js";
import SgtRoute from "./components/sgt-route.js";
import SgtFooter from "./components/sgt-footer.js";
import Sgtlink from "./components/sgt-link.js";
import SgtDialogExample from "./components/sgt-dialogexample.js";
import SgtLayerExample from "./components/sgt-layerexample.js";
import SgtTidbitsExample from "./components/sgt-tidbits.js";
import SgtFilehandlingExample from "./components/sgt-filehandling.js";
import SgtAlldone from "./components/sgt-alldone.js";
import SgtStart from "./components/sgt-start.js";

// set the element names for our components
customElements.define("sgt-route", SgtRoute);
customElements.define("sgt-footer", SgtFooter);
customElements.define("sgt-link", Sgtlink);
customElements.define("sgt-dialog-example", SgtDialogExample);
customElements.define("sgt-layerexample", SgtLayerExample);
customElements.define("sgt-tidbitsexample", SgtTidbitsExample);
customElements.define("sgt-filehandling", SgtFilehandlingExample);
customElements.define("sgt-alldone", SgtAlldone);
customElements.define("sgt-start", SgtStart);
