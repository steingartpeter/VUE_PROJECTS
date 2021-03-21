import { createApp } from "vue";

//<nn>
//  Minden component-et importolni kell a MAIN.JS-be!!!
//</nn>
import ActvUsr from "./components/ActiveUser.vue";
import UsrData from "./components/UserData.vue";
//<nn>
// Köcsög Scharzmüller, nem csinél App.vue-t, akkor sem, ha a VUE.CLO csinál ... bassza meg!!!
// Ezért kézzel kell csinálni.
// Ha megvan, akkor importálni kell!!
//</nn>
import App from "./App.vue";

const app = createApp(App);

app.component("active-user", ActvUsr);
app.component("usr-data", UsrData);

app.mount("#app");

// Task 1:
// Add two components to the app:
// An ActiveUser component and an UserData component
// ActiveUser should output a username (h2) and age (h3)
// UserData should output two input fields => for name and age
// Optional: Add styling of your choice

// Task 2: Output both components side-by-side in your main App template

// Task 3: Add user data and ensure it contains a name and age
// User data should be output in ActiveUser
// It should be updated via the UserData component
