<template>
  <li>
    <h2>{{ name }} {{ isFavorite ? "(FAVORITE)" : "" }}</h2>
    <button @click="toggleFavorite()">Toggle Favorite</button>
    <button @click="toggleDetails()">
      {{ detailsAreVisible ? "Hide" : "Show" }} Details
    </button>
    <ul v-if="detailsAreVisible">
      <li><strong>Phone:</strong>{{ phone }}</li>
      <li><strong>E-mail:</strong>{{ email }}</li>
    </ul>
  </li>
</template>

<script>
  export default {
    //props: ["name", "phone", "email", "isFavorite"],
    props: {
      id: { type: String, required: true },
      name: { type: String, required: true },
      phone: { type: String, required: true },
      email: { type: String, required: true },
      isFavorite: {
        type: Boolean,
        required: false,
        default: false,
        // validator: function(value) {
        //   return value === "1" || value === "0";
        // },
      },
    },
    emits: ["toggleFavorite"],
    // emits: {
    //   toggleFavorite: function(id) {
    //     //validation
    //     if (id) {
    //       return true;
    //     } else {
    //       console.warn("ID is missing!");
    //       return false;
    //     }
    //   },
    // },
    data() {
      return {
        detailsAreVisible: false,
        // friend: {
        //   id: "Manuel",
        //   name: "Manuel Lorenz",
        //   phone: "0123 456 7890",
        //   email: "manLrnz@yahoo.com",
        // },
        //friendIsFvorite: this.isFavorite,
      };
    },
    methods: {
      toggleDetails() {
        this.detailsAreVisible = !this.detailsAreVisible;
      },
      toggleFavorite() {
        //this.friendIsFvorite = !this.friendIsFvorite;
        this.$emit("tgl-isfav", this.id);
      },
    },
  };
</script>

<style scoped>
  button {
    box-shadow: 3px 3px 6px #050505;
    margin-left: 5px;
    border-bottom: dotted 1px #050505 !important;
  }
</style>
