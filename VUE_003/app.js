const app = Vue.createApp({
  data() {
    return {
      testData: "data-001",
      courseGoalA: "Finish the course & matsering Vue!",
      courseGoalB: "<h3>Matsering Vue and create amazing apps!</h3>",
      vueLink: "https://v3.vuejs.org",
    };
  },
  methods: {
    outputGoal() {
      const rndmNr = Math.random();
      if (rndmNr < 0.5) {
        return this.courseGoalA;
      } else {
        return this.courseGoalB;
      }
    },
  },
});

app.mount("#user-goal");
