import { createApp } from "vue";
import App from "./App.vue";
import { createVuetify } from "vuetify";
import "vuetify/styles"; // Import Vuetify's CSS styles
import "@mdi/font/css/materialdesignicons.css"; // Optional Material Design Icons

const vuetify = createVuetify();

const app = createApp(App);
app.use(vuetify); // Add Vuetify to the app
app.mount("#app");
