<template>
  <section>
    <header><h1>My friends</h1></header>
    <new-friend @add-contact="addContact"></new-friend>
    <ul>
      <friend-contact
        @tgl-isfav="togglFavState"
        @del-friend="delteFrndCntct"
        v-for="f in friends"
        :key="f.id"
        :id="f.id"
        :name="f.name"
        :phone="f.phone"
        :email="f.email"
        :is-favorite="f.isFav"
      ></friend-contact>
    </ul>
  </section>
</template>

<script>
  import NewFriend from "./components/NewFriend.vue";
  export default {
    components: { NewFriend },
    data() {
      return {
        friends: [
          {
            id: "Manuel",
            name: "Manuel Lorenz",
            phone: "0123 456 7890",
            email: "manLrnz@yahoo.com",
            isFav: true,
          },
          {
            id: "Julie 78",
            name: "Julia Jackson",
            phone: "0223 456 7890",
            email: "j_json@yahoo.com",
            isFav: false,
          },
        ],
      };
    },
    methods: {
      togglFavState(frndId) {
        console.log("togglFavState called! the id:" + frndId);
        const f = this.friends.find((friend) => friend.id === frndId);
        f.isFav = !f.isFav;
      },
      addContact(n, ph, em) {
        const newFrnd = {
          id: n.substr(0, 3) + new Date().toISOString(),
          name: n,
          phone: ph,
          email: em,
          isFav: false,
        };
        this.friends.push(newFrnd);
      },
      delteFrndCntct(fId) {
        console.log("delete: " + fId);
        this.friends = this.friends.filter((f) => {
          return f.id !== fId;
        });
      },
    },
  };
</script>

<style>
  @import url("https://fonts.googleapis.com/css2?family=Jost&display=swap");
  * {
    box-sizing: border-box;
  }

  html {
    font-family: "Jost", sans-serif;
  }

  body {
    margin: 0;
  }

  header {
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
    margin: 3rem auto;
    border-radius: 10px;
    padding: 1rem;
    background-color: #58004d;
    color: white;
    text-align: center;
    width: 90%;
    max-width: 40rem;
  }

  #app ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  #app li,
  #app form {
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
    margin: 1rem auto;
    border-radius: 10px;
    padding: 1rem;
    text-align: center;
    width: 90%;
    max-width: 40rem;
  }

  #app h2 {
    font-size: 2rem;
    border-bottom: 4px solid #ccc;
    color: #58004d;
    margin: 0 0 1rem 0;
  }

  #app button,
  #app form button {
    font: inherit;
    cursor: pointer;
    border: 1px solid #ff0077;
    background-color: #ff0077;
    color: white;
    padding: 0.05rem 1rem;
    box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.26);
  }
  #app form button {
    display: block;
    margin: auto;
    margin-top: 35px;
  }
  #app button:hover,
  #app button:active {
    background-color: #ec3169;
    border-color: #ec3169;
    box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.26);
  }
</style>
