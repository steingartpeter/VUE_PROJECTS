// Imports
import { createApp } from 'vue';
import App from './App.vue';
import BaseCard from './components/UI/BaseCard.vue';
import BaseButton from './components/UI/BaseButton.vue';
import TheHeader from './components/layouts/TheHeader.vue';
import BaseDialog from './components/UI/BaseDialog.vue';
// App declaration
const app = createApp(App);
// Components setup
app.component('base-card', BaseCard);
app.component('base-button', BaseButton);
app.component('the-header', TheHeader);
app.component('base-dialog', BaseDialog);
// App mount
app.mount('#app');
