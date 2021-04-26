import { createApp } from "vue";
import App from "./App.vue";
//import Suggestion from "./views/Suggestion.vue"
import router from "./router";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import WaveUI from "wave-ui";
import "wave-ui/dist/wave-ui.css";

const app = createApp(App);
library.add(fas);

new WaveUI(app, {
  // Some Wave UI options.
});
app
  .component("fa", FontAwesomeIcon)
  .use(router)
  .mount("#app");
