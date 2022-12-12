import { createApp } from "vue";

import App from "./App.vue";
import BaseBadge from "./components/BaseBadge.vue";
import BaseCard from "./components/BaseCard.vue";

const app = createApp(App);

// Global registration: component can be used anywhere in the App
// base-badge is used in badge-list and user-info, so we make it global
app.component("base-badge", BaseBadge);
app.component("base-card", BaseCard);

app.mount("#app");
