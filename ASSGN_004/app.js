const app = Vue.createApp({
  data() {
    return {
      tstMsg: "OK, mount works!",
      inpTask: "",
      tasks: [],
      is_lstShown: true,
      btnCaption: "Hide List",
    };
  },
  methods: {
    addTask() {
      let cntr = this.tasks.length;
      let new_task = {
        task_id: cntr,
        description: this.inpTask,
      };
      this.tasks.push(new_task);
      this.inpTask = "";
    },
    toggleShowList() {
      this.is_lstShown = !this.is_lstShown;
      if (this.is_lstShown) {
        this.btnCaption = "Hide List!";
      } else {
        this.btnCaption = "Show List!";
      }
    },
  },
});
app.mount("#assignment");
