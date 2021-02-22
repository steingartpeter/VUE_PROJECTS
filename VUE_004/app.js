const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: "",
      confirmedName: "",
    };
  },
  methods: {
    tstFunc() {
      console.log("TstFunction called!");
    },
    incrsCntr(n0) {
      if (n0 === undefined) {
        n0 = 1;
      }
      this.counter += n0;
    },
    decrsCntr(n0) {
      if (n0 === undefined) {
        n0 = 1;
      }
      if (this.counter >= n0) {
        this.counter -= n0;
      } else {
        this.counter = 0;
      }
    },
    setName(event, param) {
      this.name = param + " " + event.target.value;
    },
    sbmtForm() {
      // This can be done by Vue event modifier: prevent
      // Useful case: v-on:click.right=fumnction <<== only right click will trigger the event :)
      // Useful case2:  v-on:keyup="cnfInput",
      //event.preventDefault();
      alert("Submit prevented :)");
    },
    setCnfdName() {
      this.confirmedName = this.name;
    },
  },
});

app.mount("#events");
