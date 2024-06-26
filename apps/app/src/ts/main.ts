// Plugins
import { bootstrap } from "@/ts/bootstraps";

// Components
import App from "./App.vue";

// Composables
import { createApp } from "vue";

// Create the Application
const app = createApp(App);
bootstrap(app);

app.mount("#app");