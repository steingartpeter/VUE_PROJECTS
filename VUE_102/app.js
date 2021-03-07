function genRndmVal(min, max) {
  return Math.ceil(min + Math.random() * (max - min));
}

const app = Vue.createApp({
  data() {
    return {
      testData: "Vue runs",
      playerMaxHealth: 100,
      monsterMaxHealth: 100,
      playerHealth: 100,
      monsterHealth: 100,
      currentRound: 0,
    };
  },
  watch: {},
  computed: {
    monsterBarStyle() {
      return { width: this.monsterHealth + "%" };
    },
    playerBarStyle() {
      return { width: this.playerHealth + "%" };
    },
    specialDisabled() {
      return this.currentRound % 3 !== 0;
    },
  },
  methods: {
    tstMeth01() {
      console.log(this.testData);
    },
    attackMonster() {
      this.currentRound++;
      let dmg = genRndmVal(3, 10);
      this.monsterHealth -= dmg;
      if (this.monsterHealth > 0) {
        this.attackPlayer();
      } else {
        console.log("You WON!!!");
        this.monsterHealth = 0;
        this.playerHealth += 10;
      }
    },
    attackPlayer() {
      let dmg = genRndmVal(5, 12);
      this.playerHealth -= dmg;
      if (this.playerHealth <= 0) {
        this.playerHealth = 0;
        this.monsterHealth = 100;
        console.log(
          "=====================\n" + "YOU LOST!" + "\n====================="
        );
      } else {
      }
    },
    specialAttack() {
      this.currentRound++;
      const specDmg = genRndmVal(10, 25);
      this.monsterHealth -= specDmg;
      if (this.monsterHealth > 0) {
        this.attackPlayer();
      } else {
        console.log("You WON!!!");
        this.monsterHealth = 0;
        if (this.playerHealth < 100) {
          this.playerHealth += 10;
        } else {
          this.playerHealth = 100;
        }
      }
    },
  },
});
app.mount("#game");
