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
      winner: null,
      logMsgs: [],
    };
  },
  watch: {
    playerHealth(val) {
      if (val <= 0 && this.monsterHealth <= 0) {
        // 'draw
        this.winner = "DRAW";
      } else if (val <= 0) {
        //player lost
        this.winner = "MONSTER";
      }
    },
    monsterHealth(val) {
      if (val <= 0 && this.playerHealth <= 0) {
        // 'draw
        this.winner = "DRAW";
      } else if (val <= 0) {
        //monster lost
        this.winner = "PLAYER";
      }
    },
  },
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
    startGame() {
      this.playerMaxHealth = 100;
      this.monsterMaxHealth = 100;
      this.playerHealth = 100;
      this.monsterHealth = 100;
      this.currentRound = 0;
      this.winner = null;
      this.logMsgs = [];
    },
    tstMeth01() {
      console.log(this.testData);
    },
    attackMonster() {
      this.currentRound++;
      let dmg = genRndmVal(3, 10);
      this.monsterHealth -= dmg;
      this.addLogMesage("Player", "attack", dmg);
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
      this.addLogMesage("Monster", "attack", dmg);
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
      this.addLogMesage("Player", "special attack", specDmg);
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
    healPlayer() {
      const healAmnt = genRndmVal(8, 20);
      this.playerHealth = Math.min(
        this.playerHealth + healAmnt,
        this.playerMaxHealth
      );
      this.addLogMesage("Player", "heal", healAmnt);
      setTimeout(() => {
        console.log("As you heal yourself, the monster attacks again!");
        this.attackPlayer();
      }, 1000);
    },
    surrender() {
      this.winner = "MONSTER";
    },
    addLogMesage(who, what, value) {
      this.logMsgs.unshift({
        actionBy: who,
        actionType: what,
        actionValue: value,
      });
    },
  },
});
app.mount("#game");
