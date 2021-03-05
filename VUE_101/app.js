const app = Vue.createApp({
  data() {
    return {
      enteredGoal: "",
      goals: [
        {
          id: 0,
          description: "Megoldani a v-for feladatot",
          solved: false,
        },
        {
          id: 1,
          description: "Végigvinni a kurzust",
          solved: false,
        },
        {
          id: 2,
          description: "Játékot csinálni VUe-vel",
          solved: false,
        },
      ],
    };
  },
  methods: {
    addGoal() {
      console.log(this.goals);
      let nextId = this.goals[this.goals.length - 1].id + 1;
      let dscr = this.enteredGoal;
      let newGoal = {
        id: nextId,
        description: dscr,
        solved: false,
      };
      this.goals.push(newGoal);
    },
    removeGoal(idx) {
      this.goals.splice(idx, 1);
    },
  },
});

app.mount("#user-goals");
