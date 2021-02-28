const app = Vue.createApp({
  data() {
    return {
      data01: "-",
      counter: 0,
      name: "",
      lastName: "",
      //fullName: "",
    };
  },
  watch: {
    counter(val) {
      if (val > 50 || val < 0) {
        const cntxt = this;
        setTimeout(function () {
          cntxt.counter = 0;
        }, 200);
        this.counter = 0;
      }
    },
  },
  computed: {
    fullName() {
      if (this.name === "" || this.lastName === "") {
        return "";
      } else {
        return this.name + " " + this.lastName;
      }
    },
  },
  methods: {
    outPutFullname() {
      if (this.name === "") {
        return "";
      } else {
        return this.name + " " + "Steingart";
      }
    },
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

// name(value) {
//   if (value == "") {
//     this.fullName = "";
//   } else {
//     this.fullName = value + " " + this.lastName;
//   }
// },
// lastName(val) {
//   if (val == "") {
//     this.fullName = "";
//   } else {
//     this.fullName = this.name + " " + val;
//   }
// },
