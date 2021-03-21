<template>
  <div>
    <form @submit.prevent="submitData">
      <label for="name">Friend name: </label>
      <input type="text" id="name" name="name" v-model="enteredName" />
      <br />
      <label for="phone">Phone number:</label>
      <input type="tel" id="phone" name="phone" v-model="enteredPhone" />
      <br />
      <label for="email">E-mail:</label>
      <input type="email" id="email" name="email" v-model="enteredEmail" />
      <button>Add Friend</button>
    </form>
  </div>
</template>

<script>
  export default {
    emits: ["add-contact"],
    data() {
      return {
        enteredName: "",
        enteredPhone: "",
        enteredEmail: "",
      };
    },
    methods: {
      submitData() {
        this.$emit(
          "add-contact",
          this.enteredName,
          this.enteredPhone,
          this.enteredEmail
        );
      },
    },
  };
</script>

<style>
  label {
    text-align: start;
    width: 125px;
    display: inline-block;
    font-weight: bold;
    margin: 1rem;
  }
</style>
