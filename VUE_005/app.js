const app = Vue.createApp({
  data() {
    return {
      data01: "-",
      counter: 0,
      name: "",
    };
  },
  methods: {
    tstFnc() {
      return "";
    },
    add(n0) {
      this.counter += n0;
    },
    reduce(n0) {
      this.counter -= 5;
    },
    setName(event, prm0) {
      this.name = event.target.value;
    },
    resetInput() {
      this.name = "";
    },
  },
});
app.mount("#events");
