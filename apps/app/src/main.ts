// Plugins
import { registerPlugins } from "@/plugins";

// Components
import App from "./App.vue";

// Composables
import { createApp } from "vue";

// Create the Application
const app = createApp(App);
registerPlugins(app);
app.mount("#app");