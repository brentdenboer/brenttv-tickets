// Styles
import "@mdi/font/css/materialdesignicons.css";
import "vuetify/styles";

// Composables
import { createVuetify } from "vuetify";

// Types
import type { App } from "vue";


export function vuetifyBootstrap(app: App) {

    app.use(
        // https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
        createVuetify({
            theme: {

                defaultTheme: "dark",
                themes: {
                    dark: {
                        colors: {
                            primary: "#4CAF50"
                        }
                    }
                }
            }
        })
    );
}