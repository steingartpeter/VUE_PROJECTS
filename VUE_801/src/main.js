import { createApp } from "vue";

import App from "./App.vue";
// import TheHeader from "./components/TheHeader.vue";
import BaseBadge from "./components/UI/BaseBadge.vue";
import BaseCard from "./components/UI/BaseCard";
// import BadgeList from "./components/BadgeList.vue";
// import UserInfo from "./components/UserInfo.vue";

const app = createApp(App);

// Globally registered components
// These components are usable everywhere in the app
// Instead of this, we should register the componnets in their
// narrowest environment.
// If the header is used only once in App.vue, we should regiter it there
// and not here in main.js
//app.component("the-header", TheHeader);
app.component("base-badge", BaseBadge);
app.component("base-card", BaseCard);
//app.component("badge-list", BadgeList);
//app.component("user-info", UserInfo);

app.mount("#app");
