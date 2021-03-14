const app = Vue.createApp({
  template: `
    <h2>How Vue Works</h2>
    <input type="text" @input="saveInput" />
    <button @click="setText">Set Text</button>
    <p>{{ message }}</p>
  `,
  data() {
    return {
      currentUserInput: "",
      message: "Vue is great!",
    };
  },
  methods: {
    saveInput(event) {
      this.currentUserInput = event.target.value;
    },
    setText() {
      this.message = this.currentUserInput;
    },
  },
  beforeCreate() {
    console.log("BEFORE CREATE => RUNS HERE");
  },
  created() {
    console.log("ONLY CREATE => RUNS HERE");
  },
  beforeMount() {
    console.log("BEFORE MOUNT => CYCLE RUNS HERE");
  },
  mounted() {
    console.log("MOUNT CYCLE => CYCLE RUNS HERE");
  },
  beforeUpdate() {
    console.log("BEFORE UPDATE CYCLE => CYCLE RUNS HERE");
  },
  updated() {
    console.log("UPDATED CYCLE => CYCLE RUNS HERE");
  },
  beforeUnmount() {
    console.log("BEFORE UNMOUNT CYCLE => CYCLE RUNS HERE");
  },
  unmounted() {
    console.log("UNMOUNTED CYCLE => CYCLE RUNS HERE");
  },
});

app.mount("#app");
setTimeout(function () {
  app.unmount();
}, 3000);

const app2 = Vue.createApp({
  data() {
    return {
      app2Message: "App2 Message",
    };
  },
  methods: {
    setText() {
      this.app2Message = this.$refs.inputText01.value;
    },
  },
});

app2.mount("#app2");
