const app = Vue.createApp({
  data() {
    return {
      friends: [
        {
          id: "manuel",
          name: "Manuel Lorenz",
          phone: "06-30-68879999",
          email: "manLrzn@xmail.com",
        },
        {
          id: "juliej",
          name: "Julie Jones",
          phone: "06-30-68879998",
          email: "jjones665@xmail.com",
        },
      ],
    };
  },
});

//<nn>
// Create a component
// A component is like a brand new HTML tag...
// To avoid name collision, always use a several words name!
//</nn>
app.component("friend-contact", {
  template: `
    <li>
        <h2>{{ f.name}}</h2>
        <button @click="toggleDetails()">
        {{detailsAreVisible ? 'Hide details' : 'Show Details'}}
        </button>
        <ul v-if="detailsAreVisible">
            <li><strong>Phone:</strong> {{f.phone}}</li>
            <li><strong>Email:</strong> {{ f.email }}</li>
        </ul>
    </li>
  `,
  data() {
    return {
      f: {
        id: "manuel",
        name: "Manuel Lorenz",
        phone: "06-30-68879999",
        email: "manLrzn@xmail.com",
      },
      detailsAreVisible: false,
    };
  },
  methods: {
    toggleDetails() {
      this.detailsAreVisible = !this.detailsAreVisible;
    },
  },
});

app.mount("#app");
