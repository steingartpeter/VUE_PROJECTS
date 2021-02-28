const app = Vue.createApp({
  data() {
    return {
      cntr: 0,
    };
  },
  computed: {
    result() {
      if (this.cntr < 37) {
        return "Not there yet!";
      } else if (this.cntr == 37) {
        return 37;
      } else {
        return "Too much ...";
      }
    },
  },
  watch: {
    cntr(val) {
      let cntxt = this;
      if (val == 37) {
        setInterval(function () {
          cntxt.cntr = 0;
        }, 5000);
      }
    },
  },
  methods: {
    incrs5() {
      console.log("ADD 5");
      this.cntr += 5;
    },
    incrs1() {
      this.cntr += 1;
    },
  },
});
app.mount("#assignment");
