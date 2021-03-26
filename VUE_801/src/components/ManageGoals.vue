<template>
  <div>
    <h2>Manage Goals</h2>
    <input type="text" name="inp1" id="inp1" ref="goal" />
    <button @click="setGoal">Save Goal</button>
    <!--
    +-------------------------------------------------------------------+ 
    Well, here is an issue: if we have an HTML elment deeply embedded
    in DOM tree, it is not so good, to show it above everything.
    We should TELEPORT it up, to be on the first level in the app element.
    Teleport has one argument: the TO, a css selector for the parent 
    element.
    +-------------------------------------------------------------------+  
    -->
    <teleport to="body">
      <error-alert v-if="inputIsInvalid">
        <h2>HIBA!!!</h2>
        <p>A beviteli mező nem lehet üres!!!</p>
        <button @click="confirmError">OK</button>
      </error-alert>
    </teleport>
  </div>
</template>

<script>
  import ErrorAlert from "./ErrorAlert.vue";
  export default {
    components: { ErrorAlert },
    data() {
      return {
        inputIsInvalid: false,
      };
    },
    methods: {
      setGoal() {
        console.log("SetGoal called....");
        let inpVal = this.$refs.goal.value;
        if (inpVal === "") {
          //alert("Inpval can not be empty+");
          this.inputIsInvalid = true;
        }
        console.log("inp:" + inpVal);
      },
      confirmError() {
        this.inputIsInvalid = false;
      },
    },
  };
</script>
