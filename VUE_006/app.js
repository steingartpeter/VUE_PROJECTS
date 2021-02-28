const app = Vue.createApp({
  data() {
    return {
      boxASelected: false,
      boxBSelected: false,
      boxCSelected: false,
    };
  },
  methods: {
    boxSelected(bx) {
      if (bx === "A") {
        this.boxASelected = !this.boxASelected;
      } else if (bx === "B") {
        this.boxBSelected = !this.boxBSelected;
      } else if (bx === "C") {
        this.boxCSelected = !this.boxCSelected;
      } else {
        console.log(`Unknown box (${bx}) selected`);
      }
    },
    testFunc() {
      return "";
    },
  },
  computed: {
    compAclass() {
      return { active: this.boxASelected };
    },
  },
});
app.mount("#styling");
