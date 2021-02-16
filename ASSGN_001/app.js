const app = Vue.createApp({
  data() {
    return {
      myName: "Steingart Péter",
      myAge: 46,
      imgSrc:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-G83GqCdWhBY5csUKx3viF4Ao2rABHd96jg&usqp=CAU",
    };
  },
  methods: {
    genRnmdNr() {
      return Math.ceil(Math.random() * 100);
    },
  },
});
app.mount("#assignment");
