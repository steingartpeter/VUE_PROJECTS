<template>
  <div class="container">
    <form @submit.prevent="hndlSbmt">
      <label for="usrName">Name of the user:</label>
      <input
        type="text"
        name="usrName"
        id="usrName"
        placeholder="NAME"
        v-model="enteredName"
      />
      <hr />
      <label for="usrAge">Age of the user:</label>
      <input
        type="text"
        name="usrAge"
        id="usrAge"
        placeholder="AGE"
        v-model="enteredAge"
      />
      <br />
      <button @click.prevent="sbmtForm">Set user data</button>
    </form>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        enteredName: "",
        enteredAge: 0,
      };
    },
    emits: ["updtUser"],
    methods: {
      sbmtForm() {
        this.$emit("updtUser", this.enteredName, Number(this.enteredAge));
      },
    },
  };
</script>

<style>
  input[type="text"] {
    margin: 0.3rem;
    background-color: #cfcfff;
  }
  label {
    font-weight: 800;
    padding: 0.3rem;
    background-color: #efefef;
    margin: 0.1rem;
    width: 185px;
    display: inline-block;
  }
  button {
    margin: 0.7rem;
    background-color: darkcyan;
    font-weight: bold;
    border: 4px solid #cdcdcd;
    border-radius: 6px;
  }
  button:hover {
    background-color: #4545ff;
    color: #efefef;
    box-shadow: 4px 4px 8px #050505;
  }
</style>
